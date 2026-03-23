export default function About() {
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

      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ 
          backgroundColor: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #1A1A1A',
          padding: '20px 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-mark.png" alt="SyncSolved" className="w-8 h-8" />
            <span className="font-semibold" style={{ color: '#FFFFFF', fontSize: '20px' }}>SyncSolved</span>
          </a>
          <div className="flex items-center gap-8">
            <a href="/" style={{ color: '#FFFFFF', fontSize: '18px' }}>Home</a>
            <a href="/about" style={{ color: '#FFFFFF', fontSize: '18px' }}>About</a>
            <a href="/#audit" className="px-5 py-3 text-base uppercase tracking-wider border" style={{ borderColor: '#00ff9d', color: '#00ff9d' }}>Start</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto">
          <h1 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '72px',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '48px'
            }}
          >
            About SyncSolved
          </h1>
          <p style={{ fontSize: '24px', lineHeight: 1.7, color: '#FFFFFF' }}>
            We help founders escape the dependency trap.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
              What we do
            </h2>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Most founders build businesses that cannot run without them. They become the bottleneck. Every decision waits on them. Every problem routes to them. They are trapped by the thing they created.
            </p>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF', marginTop: '20px' }}>
              We fix this. We redesign how decisions flow, how knowledge is stored, and how work gets done. We build systems that function without constant founder presence.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
              How we work
            </h2>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              We do not do six-month consulting engagements. We do not deliver reports you will never read. We work alongside your team, building systems that compound.
            </p>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF', marginTop: '20px' }}>
              Four to six weeks. Three core systems. One transformed business. You move from operator to architect.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
              Who we work with
            </h2>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              Physician practices. Logistics companies. Roofing companies. Any business where the founder is the load-bearing wall. If your revenue has plateaued because you are the bottleneck, we are built for you.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
              What makes us different
            </h2>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
              We do not sell software. We do not sell training. We sell transformation — from a business that runs on you to a business that runs on systems.
            </p>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF', marginTop: '20px' }}>
              We are honest about what this takes. We are honest about where you are. We are honest about what will change.
            </p>
          </div>

          <div className="p-12 border-l-4" style={{ borderColor: '#00ff9d' }}>
            <p style={{ fontSize: '22px', lineHeight: 1.7, color: '#FFFFFF' }}>
              If you are ready to stop being the bottleneck,{' '}
              <a href="/#audit" style={{ color: '#00ff9d' }}>start with the Velocity Audit</a>.
            </p>
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