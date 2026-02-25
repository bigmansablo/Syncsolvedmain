import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-bg overflow-hidden border-b border-border">
      {/* Blueprint grid background */}
      <div className="hero-grid" />
      {/* Accent glow */}
      <div className="hero-glow" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-40 w-full relative z-10">
        {/* Headline */}
        <h1 className="h-display text-fg text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mb-8">
          <span className="hero-enter hero-enter-1 inline-block">Your operations.{' '}</span>
          <br className="hidden md:block" />
          <span className="hero-enter hero-enter-2 inline-block">Your data. Your systems.{' '}</span>
          <br className="hidden md:block" />
          <span className="hero-enter hero-enter-3 inline-block text-accent">In sync.</span>
        </h1>

        {/* Subhead */}
        <p className="hero-enter hero-enter-3 text-fg-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
          Software for commodity traders, energy producers, and industrial
          operators. The workflows that used to take your team weeks now
          run in minutes.
        </p>

        {/* CTA */}
        <div className="hero-enter hero-enter-3 flex flex-col sm:flex-row gap-8 items-start">
          <Link
            to="/contact"
            className="h-section text-fg text-xl md:text-2xl link-underline-always hover:text-accent transition-colors"
            style={{ transitionDuration: 'var(--fast)' }}
          >
            Start a conversation
          </Link>
          <a
            href="#solutions"
            className="h-section text-fg-muted text-xl md:text-2xl link-underline hover:text-fg transition-colors"
            style={{ transitionDuration: 'var(--fast)' }}
          >
            See what we build
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="scroll-indicator" />
      </div>

    </section>
  );
};

export default Hero;
