import type { APIRoute } from "astro";
import {
  createDataEngine,
  getCountryCodes,
  COMMODITIES,
  type CommoditySlug,
} from "../../../lib/data-engine";

export const prerender = false;

/**
 * Unified data endpoint.
 *
 * GET /api/data/[type]?country=&commodity=&sector=
 *
 * Types:
 * - country-profile: Full country energy profile
 * - commodity-prices: Historical commodity pricing
 * - trade-flows: Import/export data
 * - renewable: Renewable energy stats
 * - countries: List of available countries
 * - commodities: List of available commodities
 */
export const GET: APIRoute = async ({ params, request, locals }) => {
  const url = new URL(request.url);
  const type = params.type;
  const country = url.searchParams.get("country") || "";
  const commodity = url.searchParams.get("commodity") || "";

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=3600",
  };

  try {
    // Static lookups — no data engine needed
    if (type === "countries") {
      const countries = getCountryCodes();
      const list = Object.entries(countries).map(([slug, info]) => ({
        slug,
        ...info,
      }));
      return new Response(JSON.stringify({ data: list }), { headers });
    }

    if (type === "commodities") {
      const list = Object.entries(COMMODITIES).map(([slug, info]) => ({
        slug,
        ...info,
      }));
      return new Response(JSON.stringify({ data: list }), { headers });
    }

    // Data queries — need the engine
    const env = locals.runtime?.env as CloudflareEnv | undefined;
    const engine = createDataEngine({
      eiaApiKey: env?.EIA_API_KEY || import.meta.env.EIA_API_KEY || "",
    });

    switch (type) {
      case "country-profile": {
        if (!country) {
          return new Response(
            JSON.stringify({ error: "Missing country parameter" }),
            { status: 400, headers },
          );
        }
        const profile = await engine.getCountryProfile(country);
        if (!profile) {
          return new Response(JSON.stringify({ error: "Country not found" }), {
            status: 404,
            headers,
          });
        }
        return new Response(JSON.stringify({ data: profile }), { headers });
      }

      case "commodity-prices": {
        if (!commodity) {
          return new Response(
            JSON.stringify({ error: "Missing commodity parameter" }),
            { status: 400, headers },
          );
        }
        const prices = await engine.getCommodityPrices(
          commodity as CommoditySlug,
        );
        if (!prices) {
          return new Response(
            JSON.stringify({ error: "Commodity not found" }),
            { status: 404, headers },
          );
        }
        return new Response(JSON.stringify({ data: prices }), { headers });
      }

      case "trade-flows": {
        if (!country) {
          return new Response(
            JSON.stringify({ error: "Missing country parameter" }),
            { status: 400, headers },
          );
        }
        const flows = await engine.getTradeFlows(country, commodity || "27");
        return new Response(JSON.stringify({ data: flows }), { headers });
      }

      case "renewable": {
        if (!country) {
          return new Response(
            JSON.stringify({ error: "Missing country parameter" }),
            { status: 400, headers },
          );
        }
        const renewable = await engine.getRenewableData(country);
        return new Response(JSON.stringify({ data: renewable }), { headers });
      }

      default:
        return new Response(
          JSON.stringify({
            error: "Unknown data type",
            available: [
              "countries",
              "commodities",
              "country-profile",
              "commodity-prices",
              "trade-flows",
              "renewable",
            ],
          }),
          { status: 400, headers },
        );
    }
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers,
    });
  }
};
