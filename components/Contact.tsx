import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/sales@syncsolved.com', {
        method: 'POST',
        body: data,
      });
      setSubmitted(true);
    } catch {
      // Fallback to mailto if fetch fails
      const name = data.get('name') as string;
      const email = data.get('email') as string;
      const company = data.get('company') as string;
      const message = data.get('message') as string;
      const subject = `${company} — Contact from syncsolved.com`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0A${message}`;
      window.location.href = `mailto:sales@syncsolved.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 md:py-32 bg-bg border-t border-border scroll-mt-24 reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="label text-accent block mb-6">Contact</span>

            <h2 className="h-display text-fg text-3xl md:text-4xl lg:text-5xl mb-6">
              Tell us what's{' '}
              <span className="h-quote text-fg-muted">slowing you down.</span>
            </h2>

            <p className="text-fg-muted text-base leading-relaxed mb-8 max-w-md">
              Describe the workflows that are taking too long, the systems
              that don't talk to each other, or the reports that still get
              built by hand. We'll get back to you.
            </p>

            <div className="space-y-4">
              <div>
                <span className="label-sm block mb-1 text-fg-subtle">Email</span>
                <a
                  href="mailto:sales@syncsolved.com"
                  className="font-mono text-sm text-accent hover:text-accent-dim transition-colors link-underline"
                  style={{ transitionDuration: 'var(--fast)' }}
                >
                  sales@syncsolved.com
                </a>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-1 pt-2">
                <span className="label-sm text-fg-subtle">Houston</span>
                <span className="label-sm text-fg-subtle">Lagos</span>
                <span className="label-sm text-fg-subtle">Cape Town</span>
                <span className="label-sm text-fg-subtle">Singapore</span>
                <span className="label-sm text-fg-subtle">Hong Kong</span>
                <span className="label-sm text-fg-subtle">Luanda</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-border bg-card p-12 md:p-16 flex flex-col items-center justify-center min-h-[400px] text-center">
                <span className="text-accent font-mono text-sm block mb-4">Sent</span>
                <h3 className="h-section text-fg text-2xl mb-3">We've got it.</h3>
                <p className="text-fg-muted text-sm max-w-sm">
                  Someone from the team will get back to you shortly. If you
                  prefer, you can also email us directly at{' '}
                  <a href="mailto:sales@syncsolved.com" className="text-accent">
                    sales@syncsolved.com
                  </a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border bg-card p-8 md:p-12 space-y-6"
              >
                {/* Formsubmit config */}
                <input type="hidden" name="_subject" value="New contact from syncsolved.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label-sm block mb-2 text-fg-subtle">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-bg border border-border px-4 py-3 text-fg text-sm focus:border-accent focus:outline-none transition-colors"
                      style={{ transitionDuration: 'var(--fast)' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-sm block mb-2 text-fg-subtle">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-bg border border-border px-4 py-3 text-fg text-sm focus:border-accent focus:outline-none transition-colors"
                      style={{ transitionDuration: 'var(--fast)' }}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="label-sm block mb-2 text-fg-subtle">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full bg-bg border border-border px-4 py-3 text-fg text-sm focus:border-accent focus:outline-none transition-colors"
                    style={{ transitionDuration: 'var(--fast)' }}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-sm block mb-2 text-fg-subtle">
                    What's slowing your operations down?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-bg border border-border px-4 py-3 text-fg text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                    style={{ transitionDuration: 'var(--fast)' }}
                    placeholder="Tell us about the workflows, systems, or reports that take too long..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn-primary h-section text-base px-8 py-3"
                  >
                    Send message
                  </button>
                  <span className="text-fg-subtle text-xs font-mono">
                    or email{' '}
                    <a href="mailto:sales@syncsolved.com" className="text-accent">
                      sales@syncsolved.com
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
