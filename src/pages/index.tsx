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
        color: '#FFFFFF',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '100vh',
        fontSize: '18px'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        * { border-radius: 0 !important; }
        ::selection { background: #00ff9d; color: #0A0A0A; }
        p { font-size: 20px !important; line-height: 1.7 !important; }
        h1 { font-size: 72px !important; line-height: 1.0 !important; }
        h2 { font-size: 48px !important; line-height: 1.1 !important; }
        h3 { font-size: 28px !important; }
        button { font-size: 18px !important; }
        a { font-size: 18px !important; }
        span { font-size: 20px !important; }
      `}</style>

      {/* Navigation - appears on scroll */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ 
          backgroundColor: showNav ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: showNav ? 'blur(10px)' : 'none',
          borderBottom: showNav ? '1px solid #1A1A1A' : 'none',
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
          padding: '20px 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/images/logo-mark.png" 
              alt="SyncSolved" 
              className="w-8 h-8" 
              style={{ filter: 'brightness(1.2)' }}
            />
            <span className="font-semibold" style={{ color: '#FFFFFF', fontSize: '20px' }}>SyncSolved</span>
          </a>
          <div className="flex items-center gap-8">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors" style={{ color: '#FFFFFF', fontSize: '18px' }}>The Problem</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-white transition-colors" style={{ color: '#FFFFFF', fontSize: '18px' }}>The Fix</button>
            <a href="/about" className="hover:text-white transition-colors" style={{ color: '#FFFFFF', fontSize: '18px' }}>About</a>
            <button 
              onClick={() => scrollToSection('audit')}
              className="px-5 py-3 text-base uppercase tracking-wider border transition-all hover:text-black"
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
              Start
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO - Identity Transformation */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-40" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto w-full">
          <img 
            src="/images/logo-mark.png" 
            alt="SyncSolved" 
            className="w-24 h-24 mb-12"
            style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))' }}
          />
          
          <h1 
            className="max-w-5xl mb-10"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '72px',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#FFFFFF'
            }}
          >
            You built a business that cannot run without you.
          </h1>
          
          <p className="max-w-2xl mb-16" style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
            Every decision waits on your calendar. Your phone buzzes at all hours. Your team asks permission for work they could handle themselves. You are the bottleneck.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('audit')}
              className="px-10 py-5 text-lg border transition-all hover:text-black"
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
              className="px-10 py-5 text-lg transition-colors"
              style={{ color: '#AAAAAA' }}
            >
              See how it works ↓
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN - What You Have Tried */}
      <section id="problem" className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-base uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Problem</p>
          <h2 
            className="mb-20 max-w-4xl"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            You have already tried fixing this.
          </h2>

          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: '#1A1A1A' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="mb-6" style={{ fontSize: '48px', fontWeight: 800, color: '#FFFFFF' }}>01</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Hiring more people</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                You brought in help. Instead of freeing you up, you spent more time managing, training, and fixing mistakes. The bottleneck moved. It did not disappear.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="mb-6" style={{ fontSize: '48px', fontWeight: 800, color: '#FFFFFF' }}>02</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Buying better software</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                New CRM. New project tool. New automation platform. Each one promised to streamline everything. You got another dashboard to check and another subscription to justify.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="mb-6" style={{ fontSize: '48px', fontWeight: 800, color: '#FFFFFF' }}>03</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Working harder</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                Early mornings. Late nights. Weekends. You told yourself this was a busy season. The season never ended. The business still needs you for every meaningful decision.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 border-l-4" style={{ borderColor: '#00ff9d', backgroundColor: '#0A0A0A' }}>
            <p style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
              <span style={{ color: '#00ff9d', fontWeight: 600 }}>What none of those approaches addressed:</span> The problem is not that you need more capacity. It is that your business design was never built to distribute decisions. Every process still routes through your brain. That is why you cannot delegate. That is why software does not help. That is why working harder just burns you out.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GAP - The Distance */}
      <section id="gap" className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="mb-20 max-w-4xl"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            The gap between trapped and free is smaller than it feels.
          </h2>

          <div className="grid md:grid-cols-2 gap-px mb-20" style={{ backgroundColor: '#1A1A1A' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-sm uppercase tracking-wider mb-8" style={{ color: '#666666' }}>Now</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#666666' }}>→</span>
                  Every decision waits on your calendar
                </li>
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#666666' }}>→</span>
                  Your phone buzzes at all hours
                </li>
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#666666' }}>→</span>
                  You are the only one who sees the full picture
                </li>
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#666666' }}>→</span>
                  Growth means more work, not more freedom
                </li>
              </ul>
            </div>
            <div className="p-12 border-l" style={{ backgroundColor: '#0A0A0A', borderColor: '#1A1A1A' }}>
              <p className="text-sm uppercase tracking-wider mb-8" style={{ color: '#00ff9d' }}>After</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#00ff9d' }}>✓</span>
                  Systems make decisions without you
                </li>
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#00ff9d' }}>✓</span>
                  Your team operates with clarity
                </li>
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#00ff9d' }}>✓</span>
                  Knowledge lives in processes
                </li>
                <li className="flex items-start gap-4" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  <span style={{ color: '#00ff9d' }}>✓</span>
                  Growth creates leverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: URGENCY - Cost of Inaction */}
      <section className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="mb-20 max-w-4xl"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            The cost of staying the same compounds faster than you think.
          </h2>

          <div className="grid md:grid-cols-3 gap-px mb-20" style={{ backgroundColor: '#1A1A1A' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p style={{ fontSize: '56px', fontWeight: 800, color: '#00ff9d', marginBottom: '16px' }}>12-18</p>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#666666' }}>Months</p>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                The average window before founder-dependent businesses hit a ceiling they cannot break through.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p style={{ fontSize: '56px', fontWeight: 800, color: '#00ff9d', marginBottom: '16px' }}>3-5×</p>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#666666' }}>Value Multiple</p>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                What your business could be worth with systems that do not require your constant presence.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <p style={{ fontSize: '56px', fontWeight: 800, color: '#00ff9d', marginBottom: '16px' }}>∞</p>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#666666' }}>Opportunity Cost</p>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                The cost of never having time to think strategically because you are always fighting fires.
              </p>
            </div>
          </div>

          <p className="max-w-3xl" style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
            Every month you wait, the gap gets harder to close. Not because the solution is complex — but because the habits get more entrenched, the workarounds get more elaborate, and the idea that this is just how it is becomes more believable.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOPE - Future State */}
      <section className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-base uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Future</p>
            <h2 
              className="max-w-4xl"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}
            >
              A normal Tuesday, six weeks from now.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="mb-16" style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Not your best day. A regular one.
            </p>

            <div className="space-y-10 mb-20">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  You open your calendar and see two hours blocked for deep work — <span style={{ color: '#00ff9d' }}>actual strategic thinking</span>, not catching up on email.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  Your team resolved three client issues this morning without pinging you — <span style={{ color: '#00ff9d' }}>because they had clear protocols, not because they were guessing</span>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  A lead came in overnight and received a personalized response — <span style={{ color: '#00ff9d' }}>not a generic autoresponder, but context-aware communication</span>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-3" style={{ backgroundColor: '#00ff9d' }}></div>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  You realize at 3 PM that you have not checked your phone in two hours — <span style={{ color: '#00ff9d' }}>and nothing is on fire</span>.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t" style={{ borderColor: '#1A1A1A' }}>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                This is what happens when your business runs on <span style={{ color: '#FFFFFF', fontWeight: 700 }}>systems</span> — the specific design that moves you from bottleneck to observer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DEEP WHY - Emotional Driver */}
      <section className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base uppercase tracking-wider mb-8" style={{ color: '#00ff9d' }}>The Real Reason</p>
          <h2 
            className="mb-10"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            This is not about business efficiency.
          </h2>

          <p className="mb-10" style={{ fontSize: '24px', lineHeight: 1.7, color: '#FFFFFF' }}>
            It is about the version of yourself you decided to be when you started this.
          </p>

          <p className="mb-12 max-w-2xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
            You did not take on this risk and uncertainty to wake up every morning feeling like you are behind. You did not build this to become the most critical — and most trapped — employee.
          </p>

          <div className="p-12 border" style={{ borderColor: '#1A1A1A', backgroundColor: '#0A0A0A' }}>
            <p className="mb-4" style={{ fontSize: '24px', lineHeight: 1.7, color: '#FFFFFF' }}>
              "I built this to create freedom. Not to become the most critical employee."
            </p>
            <p style={{ fontSize: '18px', color: '#FFFFFF' }}>
              Every founder who has fixed this did it because of a specific moment — when they finally decided they were done being the person who tolerates a business that runs them.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOLUTION - How This Works */}
      <section id="solution" className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-base uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>The Fix</p>
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}
            >
              Velocity Architecture
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Why everything you have tried before did not work — and why this finally does.
            </p>
          </div>

          <div className="mb-20 p-12 border-l-4" style={{ borderColor: '#00ff9d', backgroundColor: '#0A0A0A' }}>
            <p style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Most optimization tries to make you faster at the same work. It does not address the root cause: <span style={{ color: '#FFFFFF', fontWeight: 700 }}>your business design requires you as a processing node for every decision.</span>
            </p>
            <p className="mt-6" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Velocity Architecture fixes the design. We redesign how decisions flow, how knowledge is stored, and how work gets done — so the system functions without your constant presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px mb-20" style={{ backgroundColor: '#1A1A1A' }}>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="w-16 h-16 flex items-center justify-center mb-8 border" style={{ borderColor: '#00ff9d' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#00ff9d' }}>1</span>
              </div>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Dependency Diagnosis</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                We map exactly where your brain is currently required — and design the specific systems that remove those bottlenecks.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="w-16 h-16 flex items-center justify-center mb-8 border" style={{ borderColor: '#00ff9d' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#00ff9d' }}>2</span>
              </div>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>System Build</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                We implement compounding automation layers — decision trees, AI-powered workflows, and self-documenting processes.
              </p>
            </div>
            <div className="p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="w-16 h-16 flex items-center justify-center mb-8 border" style={{ borderColor: '#00ff9d' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#00ff9d' }}>3</span>
              </div>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Transfer & Sustain</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                Your team learns to operate within the new design — and you step into the role of designer, not operator.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10" style={{ fontSize: '18px', color: '#FFFFFF' }}>
            <span>No six-month consulting engagements</span>
            <span>No forcing your team to learn twelve new tools</span>
            <span>No figure-it-out-yourself templates</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE 5 DRIVERS - How Velocity Architecture Impacts Your Business */}
      <section className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-base uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>Impact Framework</p>
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}
            >
              How Velocity Architecture affects the 5 Drivers of business value.
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Based on Kevin Cope's framework. Every business is evaluated on these five dimensions. Velocity Architecture strengthens all of them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mb-20" style={{ backgroundColor: '#1A1A1A' }}>
            <div className="p-10" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>Cash</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>More Cash. Faster.</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                Automated invoicing, follow-up, and collections. Cash that used to sit in receivables for 45 days now arrives in 15.
              </p>
            </div>
            <div className="p-10" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>Profit</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Higher Margins</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                You stop paying yourself to do work a system could handle. Labor costs drop. Output increases.
              </p>
            </div>
            <div className="p-10" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>Assets</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Valuable Systems</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                Your business becomes an asset that produces value independent of your presence. Worth more at exit.
              </p>
            </div>
            <div className="p-10" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>Growth</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>Scalable Growth</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                Growth that does not require proportionally more of your time. Revenue up, hours flat.
              </p>
            </div>
            <div className="p-10 md:col-span-2 lg:col-span-2" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#00ff9d' }}>People</p>
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>A Team That Functions Without You</h3>
              <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                Your people stop asking permission and start executing with confidence. Clear protocols. Documented decisions. No more "what do you think?" Slack messages at 10 PM.
              </p>
            </div>
          </div>

          <div className="text-center p-12 border" style={{ borderColor: '#00ff9d', backgroundColor: '#0A0A0A' }}>
            <h3 className="mb-4" style={{ fontSize: '32px', fontWeight: 700, color: '#FFFFFF' }}>
              The Common Thread
            </h3>
            <p className="max-w-3xl mx-auto" style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Every driver improves when you are no longer the load-bearing wall. Velocity Architecture makes you the architect, not the operator. Your business runs. You design.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA - The Audit */}
      <section id="audit" className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            You already know this needs to change.
          </h2>
          <p className="mb-8" style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
            The only question is whether you start now — or six months from now, in the same position, only more tired.
          </p>

          <div className="p-12 border mb-8" style={{ borderColor: '#1A1A1A', backgroundColor: '#0A0A0A' }}>
            <p className="text-base uppercase tracking-wider mb-6" style={{ color: '#00ff9d' }}>Start with the Velocity Audit</p>
            <p className="mb-8" style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              A zero-commitment diagnostic that maps your specific dependency traps and identifies the three systems that would free you first.
            </p>

            {/* Main CTA - Direct link to audit-requested page */}
            <a
              href="/audit-requested"
              className="inline-block px-10 py-5 text-lg border transition-all hover:text-black"
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
              Book Your Audit →
            </a>

            <div className="flex flex-wrap justify-center gap-8 mt-8" style={{ fontSize: '16px', color: '#FFFFFF' }}>
              <span>48-hour turnaround</span>
              <span>No sales pitch</span>
              <span>Specific to your situation</span>
            </div>
          </div>
        </div>
      </section>

      {/* GEO-LOCATIONS — SEO/AEO Signal for AI Search */}
      <section className="py-16 px-6 border-t" style={{ borderColor: '#1A1A1A', backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <p className="text-sm uppercase tracking-wider mb-2" style={{ color: '#00ff9d' }}>Los Angeles</p>
              <p style={{ fontSize: '16px', color: '#FFFFFF' }}>United States</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2" style={{ color: '#00ff9d' }}>Cape Town</p>
              <p style={{ fontSize: '16px', color: '#FFFFFF' }}>South Africa</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2" style={{ color: '#00ff9d' }}>Toronto</p>
              <p style={{ fontSize: '16px', color: '#FFFFFF' }}>Canada</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2" style={{ color: '#00ff9d' }}>London</p>
              <p style={{ fontSize: '16px', color: '#FFFFFF' }}>United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: '#1A1A1A', backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-mark.png" alt="SyncSolved" className="w-6 h-6" />
            <span style={{ fontSize: '18px', color: '#FFFFFF' }}>SyncSolved</span>
          </a>
          
          <div className="flex items-center gap-8">
            <a href="/" style={{ fontSize: '18px', color: '#FFFFFF' }}>Home</a>
            <a href="/about" style={{ fontSize: '18px', color: '#FFFFFF' }}>About</a>
            <a href="mailto:hello@syncsolved.com" style={{ fontSize: '18px', color: '#FFFFFF' }}>Contact</a>
          </div>
          
          <p style={{ fontSize: '16px', color: '#FFFFFF' }}>© 2026</p>
        </div>
      </footer>
    </div>
  );
}