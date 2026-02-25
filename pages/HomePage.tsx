import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import SectorOutcomes from '../components/SectorOutcomes';
import Diagnosis from '../components/Diagnosis';
import Benefits from '../components/Benefits';
import Solutions from '../components/Solutions';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import CtaBanner from '../components/CtaBanner';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSolved",
    "description": "Digital infrastructure for commodity traders, energy producers, and industrial operators. Carbon Accounting, AI Visibility, Predictive Maintenance, and Market Settlement Reconciliation.",
    "url": "https://syncsolved.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "Global"
    },
    "knowsAbout": [
      "Carbon Accounting",
      "Emissions MRV Automation",
      "AI Visibility for Industrial Companies",
      "Generative Engine Optimization",
      "Predictive Maintenance",
      "Market Settlement Reconciliation",
      "Commodity Trading Infrastructure",
      "Industrial Digital Transformation",
      "CSRD Compliance",
      "ISO RTO Market Settlement"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SyncSolved Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "CarbonStack",
        "description": "Automated carbon accounting and emissions tracking for industrial operators. Real-time Scope 1, 2, and 3 coverage with audit-ready CSRD and SEC compliance reports.",
        "provider": { "@type": "Organization", "name": "SyncSolved" },
        "serviceType": "Carbon Accounting Software",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "name": "AI Visibility",
        "description": "Get your industrial brand found in AI search tools like ChatGPT, Perplexity, and Google AI Overviews where B2B procurement teams are actually looking.",
        "provider": { "@type": "Organization", "name": "SyncSolved" },
        "serviceType": "AI Search Optimization",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "name": "Sentinel",
        "description": "Predictive maintenance that connects to your existing sensors and spots equipment problems weeks before they cause a shutdown.",
        "provider": { "@type": "Organization", "name": "SyncSolved" },
        "serviceType": "Predictive Maintenance Software",
        "areaServed": "Global"
      },
      {
        "@type": "Service",
        "name": "SettlementSync",
        "description": "Automated trade-to-settlement matching across ISO and RTO energy markets. Finds every pricing and volume error so you get paid what you are owed.",
        "provider": { "@type": "Organization", "name": "SyncSolved" },
        "serviceType": "Market Settlement Reconciliation",
        "areaServed": "Global"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SyncSolved | Digital Infrastructure for Commodities, Energy and Manufacturing</title>
        <meta name="description" content="Software for commodity traders, energy producers, and industrial operators. The workflows that used to take your team weeks now run in minutes. Carbon accounting, predictive maintenance, AI visibility, and settlement reconciliation." />
        <meta name="keywords" content="industrial software, carbon accounting, predictive maintenance, settlement reconciliation, AI visibility, commodity trading technology, energy sector software, CSRD compliance, industrial digital infrastructure" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <main>
        <Hero />
        <SectorOutcomes />
        <Diagnosis />
        <Benefits />
        <Solutions />
        <HowItWorks />
        <UseCases />
        <CtaBanner />
        <FAQ />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
