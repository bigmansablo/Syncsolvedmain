import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Diagnosis: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);
  const { ref: valueRef, isVisible: valueVisible } = useScrollReveal(0.1);

  return (
    <section id="diagnosis" className="py-24 md:py-32 bg-surface border-t border-surface-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Problem statement */}
        <div
          ref={sectionRef}
          className={`max-w-3xl mb-24 reveal ${isVisible ? 'revealed' : ''}`}
        >
          <span className="label !text-accent block mb-6">The Problem</span>
          <h2 className="h-display text-surface-ink text-4xl md:text-5xl lg:text-6xl mb-8">
            The tools changed.{' '}
            <span className="text-accent-dim">The workflows didn't.</span>
          </h2>
          <p className="text-surface-ink-muted text-lg leading-relaxed mb-6">
            Most teams in commodities, energy, and manufacturing are still
            running the same processes they ran ten years ago. The data is
            there. The systems are there. But the work still takes just as
            long as it always did.
          </p>
          <p className="text-surface-ink-muted text-lg leading-relaxed mb-6">
            Settlement reconciliation that takes a full team a full month.
            Compliance reports assembled from five different sources.
            Maintenance decisions made without the data that is already
            sitting in the sensors.
          </p>
          <p className="text-surface-ink-muted text-lg leading-relaxed">
            The gap is not the technology. The technology exists. The gap
            is that nobody has wired it into the way these industries
            actually work. That is what we do.
          </p>
        </div>

        {/* Value blocks — Hormozi value equation, no labels */}
        <div
          ref={valueRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-border reveal-stagger ${valueVisible ? '' : ''}`}
        >
          <div className={`bg-white p-8 md:p-10 reveal ${valueVisible ? 'revealed' : ''}`}>
            <span className="text-accent-dim font-mono text-sm block mb-4">01</span>
            <h3 className="h-section text-surface-ink text-lg mb-3">We plug into what you already have</h3>
            <p className="text-surface-ink-muted text-sm leading-relaxed">
              Nothing gets replaced. We connect to your existing systems —
              SCADA, ERP, historians, trading platforms — and build the
              layer that makes them work together.
            </p>
          </div>
          <div className={`bg-white p-8 md:p-10 reveal ${valueVisible ? 'revealed' : ''}`}>
            <span className="text-accent-dim font-mono text-sm block mb-4">02</span>
            <h3 className="h-section text-surface-ink text-lg mb-3">Results show up in weeks</h3>
            <p className="text-surface-ink-muted text-sm leading-relaxed">
              Not quarters. Not after a year-long implementation. The first
              workflows start running faster within weeks of starting.
            </p>
          </div>
          <div className={`bg-white p-8 md:p-10 reveal ${valueVisible ? 'revealed' : ''}`}>
            <span className="text-accent-dim font-mono text-sm block mb-4">03</span>
            <h3 className="h-section text-surface-ink text-lg mb-3">Your team keeps working the way they work</h3>
            <p className="text-surface-ink-muted text-sm leading-relaxed">
              No retraining. No change management programs. The software
              fits around your people, not the other way around.
            </p>
          </div>
          <div className={`bg-white p-8 md:p-10 reveal ${valueVisible ? 'revealed' : ''}`}>
            <span className="text-accent-dim font-mono text-sm block mb-4">04</span>
            <h3 className="h-section text-surface-ink text-lg mb-3">You measure what changed</h3>
            <p className="text-surface-ink-muted text-sm leading-relaxed">
              Every workflow we touch gets measured before and after.
              Hours saved, errors caught, reports automated. The numbers
              speak for themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
