import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <footer className="bg-bg border-t border-border">
      {/* CTA strip */}
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-border reveal ${isVisible ? 'revealed' : ''}`}
      >
        <Link
          to="/contact"
          className="group inline-block"
        >
          <span className="h-display text-fg text-3xl md:text-4xl lg:text-5xl group-hover:text-accent transition-colors" style={{ transitionDuration: 'var(--fast)' }}>
            Let's get in sync →
          </span>
        </Link>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-baseline gap-0">
              <span className="font-sans text-sm font-bold tracking-tighter text-fg uppercase">Sync</span>
              <span className="font-sans text-sm font-bold tracking-tighter text-accent uppercase">Solved</span>
            </Link>
            <span className="label-sm text-fg-subtle">
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <span className="label-sm text-fg-subtle">Houston</span>
            <span className="label-sm text-fg-subtle">Lagos</span>
            <span className="label-sm text-fg-subtle">Cape Town</span>
            <span className="label-sm text-fg-subtle">Singapore</span>
            <span className="label-sm text-fg-subtle">Hong Kong</span>
            <span className="label-sm text-fg-subtle">Luanda</span>
            <a href="https://www.linkedin.com/company/syncsolved" target="_blank" rel="noopener noreferrer" className="label-sm text-fg-subtle hover:text-fg transition-colors link-underline" style={{ transitionDuration: 'var(--fast)' }}>
              LinkedIn
            </a>
            <a href="https://x.com/syncsolved" target="_blank" rel="noopener noreferrer" className="label-sm text-fg-subtle hover:text-fg transition-colors link-underline" style={{ transitionDuration: 'var(--fast)' }}>
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;