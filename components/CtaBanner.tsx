import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CtaBanner: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 bg-bg border-t border-border relative overflow-hidden reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="cta-glow" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="h-display text-fg text-3xl md:text-4xl lg:text-5xl mb-6">
          Ready to get <span className="text-accent">in sync?</span>
        </h2>
        <p className="text-fg-muted text-lg mb-10 max-w-lg mx-auto">
          Tell us what is slowing you down. We will show you what
          can run faster.
        </p>
        <Link
          to="/contact"
          className="btn-primary h-section text-lg md:text-xl px-10 py-4"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
