import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Sector = {
  id: string;
  label: string;
  dream: string;
  drivers: {
    cash: string;
    profit: string;
    assets: string;
    growth: string;
    people: string;
  };
};

const sectors: Sector[] = [
  {
    id: 'commodities',
    label: 'Commodities',
    dream: 'Every trade is reconciled the moment it settles. Hedging strategies run against real-time price curves, not last week\'s data. Contract terms are extracted and structured automatically. Your team spends time on decisions, not data entry.',
    drivers: {
      cash: 'Faster settlement matching means fewer outstanding receivables and tighter cash cycles.',
      profit: 'Automated variance detection catches pricing errors that erode margins by hundreds of thousands each year.',
      assets: 'Real-time inventory and position tracking gives a clear picture of what is held, where, and at what cost.',
      growth: 'When the back office runs itself, your team can take on more volume without adding headcount.',
      people: 'Analysts spend time on strategy and risk, not reconciling spreadsheets at the end of each month.',
    },
  },
  {
    id: 'energy',
    label: 'Energy',
    dream: 'ISO and RTO settlements reconcile themselves overnight. Load forecasts update continuously with real conditions. Every renewable energy certificate is tracked, verified, and reported without manual intervention.',
    drivers: {
      cash: 'Settlement discrepancies are caught and disputed within days instead of months, recovering revenue faster.',
      profit: 'Accurate demand forecasting prevents costly over-procurement and reduces exposure to peak pricing.',
      assets: 'Generation assets are monitored continuously, with output optimized against real-time market signals.',
      growth: 'Compliance reporting that runs automatically makes it easier to expand into new markets and jurisdictions.',
      people: 'Regulatory teams focus on strategy and stakeholder relationships instead of assembling quarterly reports.',
    },
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    dream: 'Production schedules adjust automatically based on demand signals and material availability. Quality data flows directly from the line to the report. Every supplier is scored and tracked without anyone building a dashboard by hand.',
    drivers: {
      cash: 'Tighter production planning reduces excess inventory and the working capital tied up in it.',
      profit: 'Automated BOM cost analysis identifies material substitutions and procurement savings across product lines.',
      assets: 'Equipment utilization data drives scheduling decisions, getting more output from existing capacity.',
      growth: 'Standardized, automated processes make it possible to scale production without proportionally scaling overhead.',
      people: 'Engineers and planners spend time solving problems, not pulling data from disparate systems.',
    },
  },
  {
    id: 'mining',
    label: 'Mining',
    dream: 'Equipment health is monitored continuously across every site. Environmental compliance data flows straight from sensors to regulatory submissions. Geological and production data lives in one place, accessible in real time.',
    drivers: {
      cash: 'Predictive maintenance reduces emergency procurement of spare parts and the premium pricing that comes with it.',
      profit: 'Fewer unplanned shutdowns means more consistent production output and lower per-unit extraction costs.',
      assets: 'Continuous monitoring extends the useful life of heavy equipment by catching problems before they cause damage.',
      growth: 'Automated environmental reporting simplifies the permitting process for new sites and expansions.',
      people: 'Site managers and reliability engineers get actionable insights instead of raw data they have to interpret manually.',
    },
  },
  {
    id: 'chemicals',
    label: 'Chemicals',
    dream: 'Batch quality is tracked from raw materials through finished product with full traceability. Emissions are calculated continuously from process data. Every specification check, every compliance report, every shipment verification runs on live data.',
    drivers: {
      cash: 'Automated quality verification reduces rejected shipments and the credit notes that follow them.',
      profit: 'Process optimization based on real-time data tightens yield and reduces waste across production runs.',
      assets: 'Reactor and processing equipment is maintained based on actual condition data, not fixed calendars.',
      growth: 'Scalable compliance infrastructure makes it easier to introduce new products and enter regulated markets.',
      people: 'Lab and quality teams focus on process improvement instead of manually checking specs against contracts.',
    },
  },
  {
    id: 'utilities',
    label: 'Utilities',
    dream: 'Grid operations and customer demand are matched in real time. Regulatory filings are generated automatically from operational data. Infrastructure maintenance is scheduled based on condition monitoring, not calendar cycles.',
    drivers: {
      cash: 'Accurate load forecasting reduces the cost of purchased power and improves procurement timing.',
      profit: 'Automated rate case preparation and regulatory reporting reduces reliance on external consultants.',
      assets: 'Condition-based maintenance across distribution infrastructure extends asset life and reduces capital expenditure.',
      growth: 'Digital infrastructure that scales means new service territories can be integrated without rebuilding systems.',
      people: 'Operations and compliance teams work with clean, consolidated data instead of stitching together reports from multiple systems.',
    },
  },
];

const driverLabels: Record<string, string> = {
  cash: 'Cash',
  profit: 'Profit',
  assets: 'Assets',
  growth: 'Growth',
  people: 'People',
};

const SectorOutcomes: React.FC = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.1);
  const sector = sectors[active];

  return (
    <section className="bg-bg border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'revealed' : ''}`}
        >
          <span className="label text-accent block mb-6">Industries</span>
          <h2 className="h-display text-fg text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-12">
            What faster looks like{' '}
            <span className="text-fg-muted">in your world.</span>
          </h2>

          {/* Sector tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
            {sectors.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`label px-5 py-2.5 transition-all ${
                  active === i
                    ? 'bg-accent text-bg'
                    : 'text-fg-muted hover:text-fg'
                }`}
                style={{ transitionDuration: 'var(--fast)' }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Dream outcome panel */}
          <div
            key={sector.id}
            className="mb-12"
          >
            <p className="text-fg text-lg md:text-xl leading-relaxed max-w-3xl">
              {sector.dream}
            </p>
          </div>

          {/* 5 driver cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {(Object.keys(sector.drivers) as Array<keyof typeof sector.drivers>).map((key) => (
              <div key={key} className="bg-bg p-6 md:p-8">
                <span className="label text-accent block mb-3">{driverLabels[key]}</span>
                <p className="text-fg-muted text-sm leading-relaxed">
                  {sector.drivers[key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorOutcomes;
