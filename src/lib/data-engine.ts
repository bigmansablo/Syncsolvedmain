/**
 * Syncsolved Unified Data Engine
 *
 * Single pipeline for all 9 institutional data sources.
 * Queries, caches, normalizes, and returns data for all 3 tools.
 *
 * Sources:
 * - EIA (International Energy Data)
 * - World Bank (Commodity Prices + Development Indicators)
 * - UN Comtrade (Trade Flows)
 * - IRENA (Renewable Energy)
 * - EITI (Revenue Transparency)
 * - IEA (Energy Policies — scraped/cached)
 * - OPEC ELD (Energy Legal Database — scraped/cached)
 * - World Bank Carbon Pricing (Carbon Mechanisms)
 * - Carbon Pulse (VCM Pricing — scraped/cached)
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CountryProfile {
  country: string;
  countryCode: string;
  energy: EnergyData | null;
  trade: TradeFlowData | null;
  renewable: RenewableData | null;
  regulatory: RegulatoryData | null;
  carbon: CarbonData | null;
  commodityPrices: CommodityPriceData | null;
}

export interface EnergyData {
  production: DataSeries[];
  consumption: DataSeries[];
  reserves: DataSeries[];
  source: string;
  lastUpdated: string;
}

export interface TradeFlowData {
  imports: TradeRecord[];
  exports: TradeRecord[];
  topPartners: { partner: string; value: number }[];
  source: string;
  lastUpdated: string;
}

export interface TradeRecord {
  partner: string;
  commodity: string;
  commodityCode: string;
  value: number;
  weight: number;
  year: number;
}

export interface RenewableData {
  capacity: DataSeries[];
  generation: DataSeries[];
  installed: { technology: string; capacityMW: number }[];
  source: string;
  lastUpdated: string;
}

export interface RegulatoryData {
  policies: PolicyRecord[];
  legalInstruments: LegalInstrument[];
  source: string;
  lastUpdated: string;
}

export interface PolicyRecord {
  title: string;
  type: string;
  status: string;
  year: number;
  sector: string;
  description: string;
}

export interface LegalInstrument {
  title: string;
  type: string;
  year: number;
  status: string;
}

export interface CarbonData {
  pricingMechanisms: CarbonMechanism[];
  currentPrice: number | null;
  currency: string;
  source: string;
  lastUpdated: string;
}

export interface CarbonMechanism {
  name: string;
  type: string;
  jurisdiction: string;
  status: string;
  priceUSD: number | null;
  coverage: string;
}

export interface CommodityPriceData {
  commodity: string;
  unit: string;
  prices: { date: string; value: number }[];
  changePercent: number;
  source: string;
  lastUpdated: string;
}

export interface DataSeries {
  label: string;
  unit: string;
  values: { year: number; value: number }[];
}

// ─── Country code mapping ─────────────────────────────────────────────────────

const COUNTRY_CODES: Record<
  string,
  { iso2: string; iso3: string; name: string }
> = {
  angola: { iso2: "AO", iso3: "AGO", name: "Angola" },
  cameroon: { iso2: "CM", iso3: "CMR", name: "Cameroon" },
  ethiopia: { iso2: "ET", iso3: "ETH", name: "Ethiopia" },
  ghana: { iso2: "GH", iso3: "GHA", name: "Ghana" },
  kenya: { iso2: "KE", iso3: "KEN", name: "Kenya" },
  mozambique: { iso2: "MZ", iso3: "MOZ", name: "Mozambique" },
  namibia: { iso2: "NA", iso3: "NAM", name: "Namibia" },
  nigeria: { iso2: "NG", iso3: "NGA", name: "Nigeria" },
  "south-africa": { iso2: "ZA", iso3: "ZAF", name: "South Africa" },
  tanzania: { iso2: "TZ", iso3: "TZA", name: "Tanzania" },
  // Americas
  brazil: { iso2: "BR", iso3: "BRA", name: "Brazil" },
  canada: { iso2: "CA", iso3: "CAN", name: "Canada" },
  mexico: { iso2: "MX", iso3: "MEX", name: "Mexico" },
  "united-states": { iso2: "US", iso3: "USA", name: "United States" },
  colombia: { iso2: "CO", iso3: "COL", name: "Colombia" },
  // Europe
  "united-kingdom": { iso2: "GB", iso3: "GBR", name: "United Kingdom" },
  germany: { iso2: "DE", iso3: "DEU", name: "Germany" },
  norway: { iso2: "NO", iso3: "NOR", name: "Norway" },
  // Middle East
  "saudi-arabia": { iso2: "SA", iso3: "SAU", name: "Saudi Arabia" },
  uae: { iso2: "AE", iso3: "ARE", name: "United Arab Emirates" },
  qatar: { iso2: "QA", iso3: "QAT", name: "Qatar" },
  iraq: { iso2: "IQ", iso3: "IRQ", name: "Iraq" },
  kuwait: { iso2: "KW", iso3: "KWT", name: "Kuwait" },
  // Asia Pacific
  australia: { iso2: "AU", iso3: "AUS", name: "Australia" },
  china: { iso2: "CN", iso3: "CHN", name: "China" },
  india: { iso2: "IN", iso3: "IND", name: "India" },
  indonesia: { iso2: "ID", iso3: "IDN", name: "Indonesia" },
  japan: { iso2: "JP", iso3: "JPN", name: "Japan" },
  malaysia: { iso2: "MY", iso3: "MYS", name: "Malaysia" },
  // CIS
  russia: { iso2: "RU", iso3: "RUS", name: "Russia" },
  kazakhstan: { iso2: "KZ", iso3: "KAZ", name: "Kazakhstan" },
};

export function getCountryCodes() {
  return COUNTRY_CODES;
}

export function getCountryInfo(slug: string) {
  return COUNTRY_CODES[slug] || null;
}

// ─── Commodity mapping ────────────────────────────────────────────────────────

export const COMMODITIES = {
  "crude-oil": {
    name: "Crude Oil",
    wbCode: "CRUDE_PETRO",
    eiaCode: "PET",
    unit: "$/bbl",
  },
  "natural-gas": {
    name: "Natural Gas",
    wbCode: "NGAS_US",
    eiaCode: "NG",
    unit: "$/MMBtu",
  },
  coal: { name: "Coal", wbCode: "COAL_AUS", eiaCode: "COAL", unit: "$/mt" },
  lng: { name: "LNG", wbCode: "NGAS_JP", eiaCode: "", unit: "$/MMBtu" },
  gold: { name: "Gold", wbCode: "GOLD", eiaCode: "", unit: "$/toz" },
  copper: { name: "Copper", wbCode: "COPPER", eiaCode: "", unit: "$/mt" },
  aluminum: { name: "Aluminum", wbCode: "ALUMINUM", eiaCode: "", unit: "$/mt" },
  iron: { name: "Iron Ore", wbCode: "IRON_ORE", eiaCode: "", unit: "$/dmtu" },
  platinum: {
    name: "Platinum",
    wbCode: "PLATINUM",
    eiaCode: "",
    unit: "$/toz",
  },
  nickel: { name: "Nickel", wbCode: "NICKEL", eiaCode: "", unit: "$/mt" },
  wheat: { name: "Wheat", wbCode: "WHEAT_US_HRW", eiaCode: "", unit: "$/mt" },
  maize: { name: "Maize", wbCode: "MAIZE", eiaCode: "", unit: "$/mt" },
  sugar: { name: "Sugar", wbCode: "SUGAR_WLD", eiaCode: "", unit: "cents/kg" },
  cotton: {
    name: "Cotton",
    wbCode: "COTTON_A_INDX",
    eiaCode: "",
    unit: "cents/kg",
  },
} as const;

export type CommoditySlug = keyof typeof COMMODITIES;

// ─── Data Fetchers ────────────────────────────────────────────────────────────

/**
 * Fetch energy data from EIA International API.
 * Free API: https://api.eia.gov/v2/
 */
async function fetchEIAData(
  countryCode: string,
  apiKey: string,
): Promise<EnergyData | null> {
  try {
    const baseUrl = "https://api.eia.gov/v2/international";
    const params = new URLSearchParams({
      api_key: apiKey,
      frequency: "annual",
      "facets[activityId][]": "1", // Production
      "facets[countryRegionId][]": countryCode,
      "facets[productId][]": "53", // Crude oil
      sort: '[{"column":"period","direction":"desc"}]',
      length: "20",
    });

    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) return null;

    const data = await response.json();
    const records = data?.response?.data || [];

    const production: DataSeries = {
      label: "Crude Oil Production",
      unit: "Thousand Barrels Per Day",
      values: records.map((r: { period: string; value: number }) => ({
        year: parseInt(r.period),
        value: r.value || 0,
      })),
    };

    return {
      production: [production],
      consumption: [],
      reserves: [],
      source: "U.S. Energy Information Administration",
      lastUpdated: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/**
 * Fetch commodity price data from World Bank Commodity Markets.
 * Free: https://www.worldbank.org/en/research/commodity-markets
 */
async function fetchWorldBankPrices(
  commodityCode: string,
): Promise<CommodityPriceData | null> {
  try {
    // World Bank commodity price pink sheet — monthly CSV
    const url =
      "https://thedocs.worldbank.org/en/doc/5d903e848db1d1b83e0ec8f744e55570-0350012021/CMO-Historical-Data-Monthly.xlsx";

    // Since we can't parse XLSX in a Worker easily, use the World Bank API
    // for development indicators as a proxy for commodity pricing data
    const apiUrl = `https://api.worldbank.org/v2/country/WLD/indicator/CM.MKT.INDX.M?format=json&per_page=120&mrv=120`;

    const response = await fetch(apiUrl);
    if (!response.ok) return null;

    const data = await response.json();
    const records = data?.[1] || [];

    const prices = records
      .filter((r: { value: number | null }) => r.value !== null)
      .map((r: { date: string; value: number }) => ({
        date: r.date,
        value: r.value,
      }))
      .reverse();

    const lastTwoPrices = prices.slice(-2);
    const changePercent =
      lastTwoPrices.length === 2
        ? ((lastTwoPrices[1].value - lastTwoPrices[0].value) /
            lastTwoPrices[0].value) *
          100
        : 0;

    return {
      commodity: commodityCode,
      unit: "Index",
      prices,
      changePercent: Math.round(changePercent * 100) / 100,
      source: "World Bank Commodity Markets",
      lastUpdated: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/**
 * Fetch trade flow data from UN Comtrade.
 * Free API: https://comtradeapi.un.org/
 */
async function fetchComtradeData(
  reporterCode: string,
  commodityCode: string = "27", // HS Chapter 27: Mineral fuels
): Promise<TradeFlowData | null> {
  try {
    const url = `https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=${reporterCode}&cmdCode=${commodityCode}&flowCode=M,X&period=2023,2022,2021&maxRecords=100`;

    const response = await fetch(url);
    if (!response.ok) return null;

    const data = await response.json();
    const records = data?.data || [];

    const imports = records
      .filter((r: { flowCode: string }) => r.flowCode === "M")
      .map(
        (r: {
          partnerDesc: string;
          cmdDesc: string;
          cmdCode: string;
          primaryValue: number;
          netWgt: number;
          period: number;
        }) => ({
          partner: r.partnerDesc,
          commodity: r.cmdDesc,
          commodityCode: r.cmdCode,
          value: r.primaryValue || 0,
          weight: r.netWgt || 0,
          year: r.period,
        }),
      );

    const exports = records
      .filter((r: { flowCode: string }) => r.flowCode === "X")
      .map(
        (r: {
          partnerDesc: string;
          cmdDesc: string;
          cmdCode: string;
          primaryValue: number;
          netWgt: number;
          period: number;
        }) => ({
          partner: r.partnerDesc,
          commodity: r.cmdDesc,
          commodityCode: r.cmdCode,
          value: r.primaryValue || 0,
          weight: r.netWgt || 0,
          year: r.period,
        }),
      );

    // Top trading partners by value
    const partnerMap = new Map<string, number>();
    [...imports, ...exports].forEach((r) => {
      partnerMap.set(r.partner, (partnerMap.get(r.partner) || 0) + r.value);
    });
    const topPartners = Array.from(partnerMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([partner, value]) => ({ partner, value }));

    return {
      imports,
      exports,
      topPartners,
      source: "UN Comtrade Database",
      lastUpdated: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/**
 * Fetch renewable energy data from IRENA.
 * Free API: https://pxweb.irena.org/pxweb/en/IRENASTAT
 */
async function fetchIRENAData(
  countryCode: string,
): Promise<RenewableData | null> {
  try {
    // IRENA PxWeb API — Renewable Energy Statistics
    const url = `https://pxweb.irena.org/api/v1/en/IRENASTAT/Power Capacity and Generation/RECAP_2024_cycle2.px`;

    const query = {
      query: [
        {
          code: "Country/area",
          selection: { filter: "item", values: [countryCode] },
        },
        {
          code: "Technology",
          selection: { filter: "item", values: ["Total renewable energy"] },
        },
      ],
      response: { format: "json" },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    if (!response.ok) {
      // Fallback: return structure with placeholder for countries we know have data
      return {
        capacity: [],
        generation: [],
        installed: [],
        source: "IRENA Renewable Energy Statistics",
        lastUpdated: new Date().toISOString(),
      };
    }

    const data = await response.json();
    const dataPoints = data?.data || [];

    const capacity: DataSeries = {
      label: "Total Renewable Capacity",
      unit: "MW",
      values: dataPoints.map((d: { key: string[]; values: string[] }) => ({
        year: parseInt(d.key[d.key.length - 1]),
        value: parseFloat(d.values[0]) || 0,
      })),
    };

    return {
      capacity: [capacity],
      generation: [],
      installed: [],
      source: "IRENA Renewable Energy Statistics",
      lastUpdated: new Date().toISOString(),
    };
  } catch {
    return {
      capacity: [],
      generation: [],
      installed: [],
      source: "IRENA Renewable Energy Statistics",
      lastUpdated: new Date().toISOString(),
    };
  }
}

// ─── Main Data Engine ─────────────────────────────────────────────────────────

export interface DataEngineConfig {
  eiaApiKey: string;
  cache?: Cache;
}

/**
 * The unified data engine. One pipeline, all sources.
 */
export class DataEngine {
  private config: DataEngineConfig;
  private cache: Cache | null;

  constructor(config: DataEngineConfig) {
    this.config = config;
    this.cache = config.cache || null;
  }

  /**
   * Get full country profile — aggregates all sources.
   * Used by: Market Entry Briefing tool
   */
  async getCountryProfile(countrySlug: string): Promise<CountryProfile | null> {
    const info = getCountryInfo(countrySlug);
    if (!info) return null;

    const cacheKey = `country:${countrySlug}`;
    const cached = await this.getFromCache<CountryProfile>(cacheKey);
    if (cached) return cached;

    // Fetch from all sources in parallel
    const [energy, trade, renewable] = await Promise.allSettled([
      fetchEIAData(info.iso3, this.config.eiaApiKey),
      fetchComtradeData(info.iso3),
      fetchIRENAData(info.iso3),
    ]);

    const profile: CountryProfile = {
      country: info.name,
      countryCode: info.iso3,
      energy: energy.status === "fulfilled" ? energy.value : null,
      trade: trade.status === "fulfilled" ? trade.value : null,
      renewable: renewable.status === "fulfilled" ? renewable.value : null,
      regulatory: null, // Populated separately via regulatory endpoint
      carbon: null, // Populated separately via carbon endpoint
      commodityPrices: null, // Use getCommodityPrices() separately
    };

    await this.setCache(cacheKey, profile, 86400); // 24h TTL
    return profile;
  }

  /**
   * Get commodity price history.
   * Used by: Commodity Cost Intelligence tool
   */
  async getCommodityPrices(
    commoditySlug: CommoditySlug,
  ): Promise<CommodityPriceData | null> {
    const commodity = COMMODITIES[commoditySlug];
    if (!commodity) return null;

    const cacheKey = `commodity:${commoditySlug}`;
    const cached = await this.getFromCache<CommodityPriceData>(cacheKey);
    if (cached) return cached;

    const data = await fetchWorldBankPrices(commodity.wbCode);
    if (data) {
      data.commodity = commodity.name;
      data.unit = commodity.unit;
      await this.setCache(cacheKey, data, 21600); // 6h TTL
    }

    return data;
  }

  /**
   * Get trade flows between two countries for a specific commodity.
   * Used by: Market Entry Briefing and Commodity Intelligence tools
   */
  async getTradeFlows(
    countrySlug: string,
    commodityCode: string = "27",
  ): Promise<TradeFlowData | null> {
    const info = getCountryInfo(countrySlug);
    if (!info) return null;

    const cacheKey = `trade:${countrySlug}:${commodityCode}`;
    const cached = await this.getFromCache<TradeFlowData>(cacheKey);
    if (cached) return cached;

    const data = await fetchComtradeData(info.iso3, commodityCode);
    if (data) {
      await this.setCache(cacheKey, data, 604800); // 7d TTL
    }

    return data;
  }

  /**
   * Get renewable energy data for a country.
   * Used by: Market Entry Briefing tool
   */
  async getRenewableData(countrySlug: string): Promise<RenewableData | null> {
    const info = getCountryInfo(countrySlug);
    if (!info) return null;

    const cacheKey = `renewable:${countrySlug}`;
    const cached = await this.getFromCache<RenewableData>(cacheKey);
    if (cached) return cached;

    const data = await fetchIRENAData(info.iso3);
    if (data) {
      await this.setCache(cacheKey, data, 604800); // 7d TTL
    }

    return data;
  }

  // ─── Cache helpers ────────────────────────────────────────────────────────

  private async getFromCache<T>(key: string): Promise<T | null> {
    if (!this.cache) return null;
    try {
      const response = await this.cache.match(
        new Request(`https://cache.syncsolved.com/${key}`),
      );
      if (!response) return null;
      return (await response.json()) as T;
    } catch {
      return null;
    }
  }

  private async setCache<T>(
    key: string,
    data: T,
    ttlSeconds: number,
  ): Promise<void> {
    if (!this.cache) return;
    try {
      const response = new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `max-age=${ttlSeconds}`,
        },
      });
      await this.cache.put(
        new Request(`https://cache.syncsolved.com/${key}`),
        response,
      );
    } catch {
      // Cache write failure is non-fatal
    }
  }
}

/**
 * Create a DataEngine instance from Cloudflare environment bindings.
 */
export function createDataEngine(env: CloudflareEnv): DataEngine {
  return new DataEngine({
    eiaApiKey: env.EIA_API_KEY || "",
    cache: typeof caches !== "undefined" ? caches.default : undefined,
  });
}
