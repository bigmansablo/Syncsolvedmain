# Syncsolved

Energy, commodities, and industrials intelligence platform. Three free tools that replace $200k/yr in data subscriptions — generating professional PDF reports from government and institutional data sources.

## What this is

A consulting website that earns trust by giving away valuable data intelligence. Built on Astro 5 + Cloudflare Pages with zero monthly cost.

### The three tools

| Tool                            | What it does                                                                                                     |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Market Entry Briefing**       | Select a country + sector → get a comprehensive energy market assessment as a downloadable PDF                   |
| **Commodity Cost Intelligence** | Select commodities + timeframe → get price history, trend analysis, and AI commentary as a PDF                   |
| **Regulatory Snapshot**         | Select a country + sector → get current regulations, compliance requirements, and recent policy changes as a PDF |

### Data sources

All data is aggregated from free government and institutional APIs:

- **EIA** — US + international energy data (190+ countries)
- **World Bank** — 68+ commodity price indices and forecasts
- **UN Comtrade** — Import/export trade data (200 countries)
- **IRENA** — Renewable energy capacity and generation
- **EITI** — Government/company energy revenues
- **IEA** — 5,000+ energy policies across 85 countries
- **OPEC ELD** — Energy legal instruments by country
- **World Bank Carbon Pricing** — Carbon pricing mechanisms
- **Carbon Pulse** — Voluntary carbon credit pricing

## Tech stack

- **Framework**: [Astro 5](https://astro.build) (hybrid SSR/SSG)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com) (free tier)
- **AI**: Cloudflare Workers AI (`@cf/meta/llama-3-8b-instruct`)
- **PDF generation**: Cloudflare Browser Rendering (Puppeteer)
- **Storage**: Cloudflare R2 (temporary report storage)
- **UI components**: React islands + Shadcn/UI
- **Styling**: CSS with custom energy-sector design system

## Development

```bash
npm install
npm run dev
```

Dev server runs on `http://0.0.0.0:4321`

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deployed automatically via Cloudflare Pages on push to `main`.

## Project structure

```
src/
├── layouts/          — Page layouts
├── components/       — UI components (Astro + React islands)
├── pages/
│   ├── tools/        — The 3 intelligence tools
│   └── api/          — Data pipeline + PDF generation
├── lib/
│   ├── data-engine.ts    — Unified data pipeline (all 9 sources)
│   └── report-templates/ — PDF report HTML templates
├── content/          — Articles and solutions (Astro content collections)
└── styles/           — Global CSS
public/
├── robots.txt        — AI crawler access
├── llms.txt          — AI authority declaration
└── fonts/            — Computer Modern (LaTeX-quality typography)
```

## Environment variables

| Variable      | Description                                            |
| ------------- | ------------------------------------------------------ |
| `EIA_API_KEY` | Free API key from [EIA](https://www.eia.gov/opendata/) |

All other data sources are queried without authentication.
