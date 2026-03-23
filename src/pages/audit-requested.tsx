export default function AuditRequested() {
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
          </div>
        </div>
      </nav>

      {/* Success Message */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-40" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-12 border flex items-center justify-center" style={{ borderColor: '#00ff9d' }}>
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#00ff9d" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '72px',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '32px'
            }}
          >
            Request received.
          </h1>
          
          <p className="mb-12" style={{ fontSize: '24px', lineHeight: 1.7, color: '#FFFFFF' }}>
            We will send your Velocity Audit within 48 hours.
          </p>

          <div className="p-12 border mb-12" style={{ borderColor: '#1A1A1A', backgroundColor: '#0A0A0A' }}>
            <h3 className="mb-6" style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF' }}>
              What happens next
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <span style={{ color: '#00ff9d', fontSize: '20px', fontWeight: 600 }}>1.</span>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  We review your request and prepare a custom diagnostic
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span style={{ color: '#00ff9d', fontSize: '20px', fontWeight: 600 }}>2.</span>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  You receive the Velocity Audit via email within 48 hours
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span style={{ color: '#00ff9d', fontSize: '20px', fontWeight: 600 }}>3.</span>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#FFFFFF' }}>
                  We follow up with one question: does this make sense for your situation?
                </p>
              </div>
            </div>
          </div>

          <a 
            href="/" 
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
            Return to homepage →
          </a>
        </div>
      </section>
    </div>
  );
}