import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailError("Enter a valid email");
      return;
    }
    window.location.href = '/audit-requested';
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="antialiased"
      style={{ 
        backgroundColor: '#0A0A0A',
        color: '#FAFAFA',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '100vh'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        * { border-radius: 0 !important; }
        ::selection { background: #00ff9d; color: #0A0A0A; }
      `}</style>

      {/* Navigation - appears on scroll */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ 
          backgroundColor: showNav ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: showNav ? 'blur(10px)' : 'none',
          borderBottom: showNav ? '1px solid #141414' : 'none',
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
          padding: '16px 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div style={{ backgroundColor: '#FAFAFA' }}></div>
              <div style={{ backgroundColor: '#00ff9d' }}></div>
              <div style={{ backgroundColor: '#FAFAFA' }}></div>
              <div style={{ backgroundColor: '#FAFAFA' }}></div>
            </div>
            <span className="text-sm" style={{ color: '#FAFAFA', fontWeight: 500 }}>SyncSolved</span>
          </div>
          <div className="flex items-center gap-8 text-sm" style={{ color: '#6A6A6A' }}>
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors" style={{ color: showNav ? '#6A6A6A' : 'transparent' }}>The Problem</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-white transition-colors" style={{ color: showNav ? '#6A6A6A' : 'transparent' }}>The Fix</button>
            <a href="/about" className="hover:text-white transition-colors" style={{ color: showNav ? '#6A6A6A' : 'transparent' }}>About</a>
            <button 
              onClick={() => scrollToSection('audit')}
              className="px-4 py-2 text-xs uppercase tracking-wider border transition-all hover:text-white"
              style={{ 
                borderColor: showNav ? '#00ff9d' : 'transparent',
                color: showNav ? '#00ff9d' : 'transparent'
              }}
            >
              Start
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO - Identity Transformation */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-40" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-20">
            <img 
              src="/images/logo-mark.png" 
              alt="SyncSolved" 
              className="w-20 h-20"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(0,255,157,0.4))',
                display: 'block'
              }}
            />
          </div>
          
          <h1 
            className="max-w-4xl mb-8"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(48px, 8vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#FAFAFA'
            }}
          >
            You built a business that cannot run without you.
          </h1>
          
          <p className="text-lg max-w-xl mb-12" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
            Every decision waits on your calendar. Your phone buzzes at all hours. Your team asks permission for work they could handle themselves. You are the bottleneck.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('audit')}
              className="px-8 py-4 text-sm border transition-all hover:text-white"
              style={{ borderColor: '#00ff9d', color: '#00ff9d' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00ff9d';
                e.currentTarget.style.color = '#0A0A0A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00ff9d';
              }}
            >
              Start the Velocity Audit →
            </button>
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#6A6A6A' }}
            >
              See why this happens
            </button>
          </div>

          <div className="mt-24 pt-8 border-t flex items-center gap-12 text-xs uppercase tracking-wider" style={{ borderColor: '#141414', color: '#3A3A3A' }}>
            <span>Conditional guarantee</span>
            <span>4-6 week implementation</span>
            <span>Systems that compound</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN - What You've Already Tried */}
      <section id="problem" className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Problem</p>
            <h2 
              className="max-w-3xl"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FAFAFA'
              }}
            >
              You have tried three ways to fix this. None of them worked.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px mb-24" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-8" style={{ color: '#3A3A3A' }}>Attempt 01</p>
              <h3 className="text-xl mb-6" style={{ color: '#FAFAFA', fontWeight: 700 }}>Hire more people</h3>
              <p style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
                You added headcount. Instead of freedom, you got more management, more training, more fixing mistakes. The bottleneck moved; it did not disappear.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-8" style={{ color: '#3A3A3A' }}>Attempt 02</p>
              <h3 className="text-xl mb-6" style={{ color: '#FAFAFA', fontWeight: 700 }}>Buy better software</h3>
              <p style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
                New CRM. New project tool. New automation platform. Each promised to streamline everything. You got another dashboard to check and another subscription to justify.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-8" style={{ color: '#3A3A3A' }}>Attempt 03</p>
              <h3 className="text-xl mb-6" style={{ color: '#FAFAFA', fontWeight: 700 }}>Work harder</h3>
              <p style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
                Early mornings. Late nights. Weekends. You told yourself this was just a busy season. The season never ended. The business still needs you for every meaningful decision.
              </p>
            </div>
          </div>

          <div className="p-12 border-l-4" style={{ borderColor: '#00ff9d', backgroundColor: '#0D0D0D' }}>
            <p className="text-xl max-w-3xl" style={{ lineHeight: 1.6, color: '#FAFAFA' }}>
              <span style={{ color: '#00ff9d' }}>The real issue:</span> Your business was never designed to distribute decisions. Every process still routes through your brain. That is why you cannot delegate. That is why software does not help. That is why working harder only burns you out.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GAP - Where You Are vs. Where You Need to Be */}
      <section className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Gap</p>
            <h2 
              className="max-w-3xl"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FAFAFA'
              }}
            >
              The distance between trapped and free is smaller than it feels.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px mb-16" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-8" style={{ color: '#6A6A6A' }}>Where you are now</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span style={{ color: '#3A3A3A' }}>—</span>
                  <span style={{ color: '#6A6A6A' }}>Every important decision waits on your calendar</span>
                </li>
                <li className="flex items-start gap-4">
                  <span style={{ color: '#3A3A3A' }}>—</span>
                  <span style={{ color: '#6A6A6A' }}>Your phone buzzes at all hours with questions</span>
                </li>
                <li className="flex items-start gap-4">
                  <span style={{ color: '#3A3A3A' }}>—</span>
                  <span style={{ color: '#6A6A6A' }}>You are the only one who sees the full picture</span>
                </li>
                <li className="flex items-start gap-4">
                  <span style={{ color: '#3A3A3A' }}>—</span>
                  <span style={{ color: '#6A6A6A' }}>Revenue growth means more work, not more freedom</span>
                </li>
              </ul>
            </div>
            <div className="p-12 border-l-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#00ff9d' }}>
              <p className="text-xs uppercase tracking-wider mb-8" style={{ color: '#00ff9d' }}>Where you need to be</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Systems make 80% of decisions without you</span>
                </li>
                <li className="flex items-start gap-4">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Your team operates with clarity and confidence</span>
                </li>
                <li className="flex items-start gap-4">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Knowledge lives in processes, not your head</span>
                </li>
                <li className="flex items-start gap-4">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Growth creates leverage, not more burden</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center max-w-2xl mx-auto" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
            The bridge across this gap consists of three things: decision distribution systems, compounding automation layers, and self-sustaining process design. Most businesses never build these. You will.
          </p>
        </div>
      </section>

      {/* SECTION 4: URGENCY - Cost of Waiting */}
      <section className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Cost</p>
          <h2 
            className="max-w-3xl mx-auto mb-24"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FAFAFA'
            }}
          >
            Waiting compounds faster than you think.
          </h2>

          <div className="grid md:grid-cols-3 gap-px mb-24" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-5xl mb-4" style={{ fontWeight: 800, color: '#00ff9d' }}>12-18</p>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>Months</p>
              <p style={{ color: '#6A6A6A', lineHeight: 1.6 }}>
                The window before founder-dependent businesses hit a ceiling they cannot break through.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-5xl mb-4" style={{ fontWeight: 800, color: '#00ff9d' }}>3-5x</p>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>Multiple</p>
              <p style={{ color: '#6A6A6A', lineHeight: 1.6 }}>
                What your business could be worth with systems that do not require your constant presence.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-5xl mb-4" style={{ fontWeight: 800, color: '#00ff9d' }}>∞</p>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>Opportunity</p>
              <p style={{ color: '#6A6A6A', lineHeight: 1.6 }}>
                The cost of never having time to think strategically because you are always fighting fires.
              </p>
            </div>
          </div>

          <p className="max-w-2xl mx-auto" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
            Every month you wait, the gap gets harder to close. Not because the fix is complex. Because the habits get more entrenched, the workarounds get more elaborate, and the belief that this is just how it is becomes harder to question.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOPE - Future State */}
      <section className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Future</p>
            <h2 
              className="max-w-3xl"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FAFAFA'
              }}
            >
              A normal Tuesday, six weeks from now.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg mb-12" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
              Not your best day. A regular one.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ lineHeight: 1.7, color: '#FAFAFA' }}>
                  You open your calendar and see two hours blocked for deep work — <span style={{ color: '#00ff9d' }}>actual strategic thinking</span>, not catching up on email.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ lineHeight: 1.7, color: '#FAFAFA' }}>
                  Your team resolved three client issues this morning without pinging you — <span style={{ color: '#00ff9d' }}>because they had clear protocols, not because they were guessing</span>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ lineHeight: 1.7, color: '#FAFAFA' }}>
                  A lead came in overnight and received a personalized response — <span style={{ color: '#00ff9d' }}>not a generic autoresponder, but context-aware communication that moves them forward</span>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ lineHeight: 1.7, color: '#FAFAFA' }}>
                  You realize at 3 PM that you have not checked your phone in two hours — <span style={{ color: '#00ff9d' }}>and nothing is on fire</span>.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: '#141414' }}>
              <p style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
                This is what happens when your business runs on <span style={{ color: '#FAFAFA', fontWeight: 500 }}>systems</span> — the specific design that moves you from bottleneck to observer, from managing everything to designing what runs itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DEEP WHY - Emotional Driver */}
      <section className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Real Reason</p>
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FAFAFA'
            }}
          >
            This is not about business efficiency.
          </h2>
          <p className="text-xl mb-8" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
            It is about the version of yourself you decided to be when you started this.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
            You did not take on this risk and uncertainty to wake up every morning feeling behind. You did not build this to become the most critical — and most trapped — employee.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-16" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
            Every founder who fixed this did it because of a specific moment — when they finally decided they were done being the person who tolerates a business that runs them.
          </p>
          <div className="p-12 border-l-4 text-left" style={{ borderColor: '#00ff9d', backgroundColor: '#0D0D0D' }}>
            <p className="text-lg italic" style={{ color: '#FAFAFA' }}>
              "I built this to create freedom. Not to become the most important prisoner."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOLUTION - How This Works */}
      <section id="solution" className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Fix</p>
            <h2 
              className="max-w-3xl mb-8"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FAFAFA'
              }}
            >
              Velocity Architecture
            </h2>
            <p className="text-lg max-w-2xl" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
              Why everything you tried before did not work — and why this finally does.
            </p>
          </div>

          <div className="p-12 mb-16 border" style={{ borderColor: '#141414', backgroundColor: '#0D0D0D' }}>
            <p className="text-lg" style={{ lineHeight: 1.7, color: '#FAFAFA' }}>
              Most "business optimization" tries to make you faster at the same work. It does not address the root cause: <span style={{ color: '#00ff9d' }}>your business design requires you as a processing node for every decision</span>.
            </p>
            <p className="text-lg mt-6" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
              We fix the design. We rebuild how decisions flow, how knowledge is stored, and how work gets done — so the system functions without your constant presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px mb-16" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-8 border" style={{ borderColor: '#00ff9d' }}>
                <span className="text-2xl" style={{ fontWeight: 800, color: '#00ff9d' }}>1</span>
              </div>
              <h3 className="text-lg mb-4" style={{ color: '#FAFAFA', fontWeight: 700 }}>Dependency Diagnosis</h3>
              <p style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                We map exactly where your brain is currently required — and design the specific systems that remove those bottlenecks.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-8 border" style={{ borderColor: '#00ff9d' }}>
                <span className="text-2xl" style={{ fontWeight: 800, color: '#00ff9d' }}>2</span>
              </div>
              <h3 className="text-lg mb-4" style={{ color: '#FAFAFA', fontWeight: 700 }}>System Build</h3>
              <p style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                We implement compounding automation layers — decision trees, AI-powered workflows, and self-documenting processes.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-8 border" style={{ borderColor: '#00ff9d' }}>
                <span className="text-2xl" style={{ fontWeight: 800, color: '#00ff9d' }}>3</span>
              </div>
              <h3 className="text-lg mb-4" style={{ color: '#FAFAFA', fontWeight: 700 }}>Transfer & Sustain</h3>
              <p style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                Your team learns to operate within the new design — and you step into the role of designer, not operator.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: '#3A3A3A' }}>
            <span>No six-month consulting engagements</span>
            <span>No forcing your team to learn twelve new tools</span>
            <span>No figure-it-out-yourself templates</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE 5 DRIVERS - How Velocity Architecture Impacts Your Business */}
      <section className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>Business Impact</p>
            <h2 
              className="max-w-3xl mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FAFAFA'
              }}
            >
              How your five drivers change.
            </h2>
            <p className="text-lg max-w-2xl" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
              Velocity Architecture is not abstract. It hits the specific levers that determine whether your business survives or scales.
            </p>
          </div>

          {/* CASH */}
          <div className="grid md:grid-cols-2 gap-px mb-px" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>01 — Cash</p>
              <p className="text-sm mb-6" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                You chase receivables personally. Pricing decisions wait for your approval. Cash flow forecasting lives in your head — which means it is reactive, not predictive.
              </p>
            </div>
            <div className="p-12 border-l-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#00ff9d' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>How it changes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Automated collection sequences that do not need you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Pricing authority delegated with clear guardrails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Predictive cash flow dashboards your team monitors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PROFIT */}
          <div className="grid md:grid-cols-2 gap-px mb-px" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>02 — Profit</p>
              <p className="text-sm mb-6" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                Margin leaks go unnoticed until you spot them. Scope creep kills profitability because you are the only one who sees the full cost. You work harder for the same profit.
              </p>
            </div>
            <div className="p-12 border-l-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#00ff9d' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>How it changes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Margin alerts trigger before the work starts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Scope protocols prevent creep without your judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Profit per hour increases as systems replace presence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ASSETS */}
          <div className="grid md:grid-cols-2 gap-px mb-px" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>03 — Assets</p>
              <p className="text-sm mb-6" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                Your knowledge walks out the door when you do. Client relationships depend on your personal involvement. The business has no value without your daily presence.
              </p>
            </div>
            <div className="p-12 border-l-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#00ff9d' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>How it changes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Knowledge bases that survive employee turnover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Client systems that operate without your face</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Business value that exists independent of you</span>
                </li>
              </ul>
            </div>
          </div>

          {/* GROWTH */}
          <div className="grid md:grid-cols-2 gap-px mb-px" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>04 — Growth</p>
              <p className="text-sm mb-6" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                New revenue means more work for you. Every deal requires your involvement. Scaling stalls because you are the constraint.
              </p>
            </div>
            <div className="p-12 border-l-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#00ff9d' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>How it changes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Onboarding sequences that scale without your time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Fulfillment systems that handle volume increases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Growth that creates leverage, not burden</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PEOPLE */}
          <div className="grid md:grid-cols-2 gap-px mb-16" style={{ backgroundColor: '#141414' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#3A3A3A' }}>05 — People</p>
              <p className="text-sm mb-6" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
                Your team waits for your decisions. They second-guess themselves because the rules live in your head. Turnover is expensive because knowledge walks out the door.
              </p>
            </div>
            <div className="p-12 border-l-4" style={{ backgroundColor: '#0A0A0A', borderColor: '#00ff9d' }}>
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>How it changes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Decision protocols that empower without risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Clear standards that remove ambiguity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ff9d' }}>—</span>
                  <span style={{ color: '#FAFAFA' }}>Team confidence that reduces turnover cost</span>
                </li>
              </ul>
            </div>
          </div>

          {/* THE DELIVERABLES BOX */}
          <div className="p-12 border" style={{ borderColor: '#141414', backgroundColor: '#0D0D0D' }}>
            <p className="text-xs uppercase tracking-wider mb-8" style={{ color: '#00ff9d' }}>What you walk away with</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm mb-4" style={{ color: '#6A6A6A' }}>From the Audit:</p>
                <ul className="space-y-2 text-sm" style={{ color: '#FAFAFA' }}>
                  <li>— Dependency map for each of the 5 drivers</li>
                  <li>— Prioritized system build sequence</li>
                  <li>— Investment and timeline clarity</li>
                  <li>— Go / No-go decision framework</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-4" style={{ color: '#6A6A6A' }}>From the Build:</p>
                <ul className="space-y-2 text-sm" style={{ color: '#FAFAFA' }}>
                  <li>— Decision protocols by driver</li>
                  <li>— Automation layer documentation</li>
                  <li>— Team training and transfer</li>
                  <li>— 90-day sustainment plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA - The Audit */}
      <section id="audit" className="py-40 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FAFAFA'
            }}
          >
            You already know this needs to change.
          </h2>
          <p className="text-xl mb-4" style={{ lineHeight: 1.6, color: '#6A6A6A' }}>
            The only question is whether you start now — or six months from now, in the same position, only more tired.
          </p>

          <div className="p-12 border mb-12" style={{ borderColor: '#141414', backgroundColor: '#0D0D0D' }}>
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>Start with the Velocity Audit</p>
            <p className="mb-8" style={{ lineHeight: 1.7, color: '#6A6A6A' }}>
              A zero-commitment diagnostic that maps your specific dependency traps and identifies the three systems that would free you first.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="flex-1 px-4 py-4 bg-transparent border text-white placeholder-gray-600 focus:outline-none"
                style={{ borderColor: '#141414' }}
              />
              <button
                type="submit"
                className="px-8 py-4 text-sm border transition-all"
                style={{ borderColor: '#00ff9d', color: '#00ff9d' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00ff9d';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#00ff9d';
                }}
              >
                Request the Audit →
              </button>
            </form>
            {emailError && (
              <p className="text-sm mb-6" style={{ color: '#ff4444' }}>{emailError}</p>
            )}

            <div className="flex flex-wrap justify-center gap-6 text-xs" style={{ color: '#3A3A3A' }}>
              <span>48-hour turnaround</span>
              <span>No sales pitch</span>
              <span>Specific to your situation</span>
            </div>
          </div>

          <p className="mt-12 text-sm" style={{ color: '#3A3A3A' }}>
            Not sure yet?{' '}
            <a href="mailto:hello@syncsolved.com" className="hover:text-white transition-colors" style={{ color: '#6A6A6A' }}>
              hello@syncsolved.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: '#141414', backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div style={{ backgroundColor: '#FAFAFA' }}></div>
              <div style={{ backgroundColor: '#00ff9d' }}></div>
              <div style={{ backgroundColor: '#FAFAFA' }}></div>
              <div style={{ backgroundColor: '#FAFAFA' }}></div>
            </div>
            <span className="text-sm" style={{ color: '#6A6A6A' }}>SyncSolved</span>
          </div>
          <div className="flex items-center gap-8 text-sm" style={{ color: '#3A3A3A' }}>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="mailto:hello@syncsolved.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm" style={{ color: '#3A3A3A' }}>© 2026</p>
        </div>
      </footer>
    </div>
  );
}
