export default function About() {
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@800&family=Inter:wght@400;500&display=swap" 
        rel="stylesheet" 
      />

      {/* Navigation */}
      <nav 
        style={{ 
          backgroundColor: '#0A0A0A',
          borderBottom: '1px solid #141414'
        }}
      >
        <div 
          style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FAFAFA' }} />
              <div style={{ width: '8px', height: '8px', backgroundColor: '#00ff9d' }} />
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FAFAFA' }} />
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FAFAFA' }} />
            </div>
            <span 
              style={{ 
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 800,
                fontSize: '18px',
                letterSpacing: '-0.04em'
              }}
            >
              <span style={{ color: '#FAFAFA' }}>SYNC</span>
              <span style={{ color: '#00ff9d' }}>SOLVED</span>
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            <a 
              href="/" 
              style={{ fontSize: '14px', color: '#6A6A6A', transition: 'color 150ms' }}
              className="hover:text-[#00ff9d]"
            >
              Home
            </a>
            <a 
              href="/#audit"
              className="text-sm px-4 py-2 border transition-all duration-150 hover:bg-[#00ff9d] hover:text-[#0A0A0A] hover:border-[#00ff9d]"
              style={{ 
                borderColor: '#00ff9d',
                color: '#00ff9d',
                borderWidth: '1px'
              }}
            >
              Get the Audit
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section style={{ padding: '160px 24px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p 
            style={{ 
              fontSize: '14px',
              color: '#00ff9d',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '48px'
            }}
          >
            About
          </p>

          <h1 
            style={{ 
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 72px)',
              letterSpacing: '-0.04em',
              lineHeight: '0.95',
              maxWidth: '900px'
            }}
          >
            We build systems that let founders step back.
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: '#141414' }} />
      </div>

      {/* Philosophy */}
      <section style={{ padding: '160px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
            <div>
              <p 
                style={{ 
                  fontSize: '14px',
                  color: '#00ff9d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '24px'
                }}
              >
                What we believe
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FAFAFA' }}>
                A business should serve the person who built it. Not the other way around.
              </p>
            </div>

            <div>
              <p 
                style={{ 
                  fontSize: '14px',
                  color: '#00ff9d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '24px'
                }}
              >
                What we do
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FAFAFA' }}>
                We redesign how decisions flow, how knowledge is stored, how work gets done. 
                The system functions without your constant presence.
              </p>
            </div>

            <div>
              <p 
                style={{ 
                  fontSize: '14px',
                  color: '#00ff9d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '24px'
                }}
              >
                What we don't do
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FAFAFA' }}>
                Six-month engagements. Force your team to learn twelve new tools. 
                Hand you templates and wish you luck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: '#141414' }} />
      </div>

      {/* Principles */}
      <section style={{ padding: '160px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p 
            style={{ 
              fontSize: '14px',
              color: '#00ff9d',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '80px'
            }}
          >
            How we work
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '48px', alignItems: 'start' }}>
              <span 
                style={{ 
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                  color: '#00ff9d'
                }}
              >
                01
              </span>
              <div>
                <h3 
                  style={{ 
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 800,
                    fontSize: '32px',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px'
                  }}
                >
                  Systems over tactics
                </h3>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#6A6A6A', maxWidth: '600px' }}>
                  One closed deal teaches nothing. Ten closed deals show a pattern. 
                  We look at the system — where the right people enter, where trust gets built fastest, where deals die.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '48px', alignItems: 'start' }}>
              <span 
                style={{ 
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                  color: '#00ff9d'
                }}
              >
                02
              </span>
              <div>
                <h3 
                  style={{ 
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 800,
                    fontSize: '32px',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px'
                  }}
                >
                  Ruthlessly patient, violently decisive
                </h3>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#6A6A6A', maxWidth: '600px' }}>
                  We wait for the right setup. We don't force deals that aren't ready. 
                  But the moment the setup is right, we move without hesitation.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '48px', alignItems: 'start' }}>
              <span 
                style={{ 
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                  color: '#00ff9d'
                }}
              >
                03
              </span>
              <div>
                <h3 
                  style={{ 
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 800,
                    fontSize: '32px',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px'
                  }}
                >
                  Inversion thinking
                </h3>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#6A6A6A', maxWidth: '600px' }}>
                  Before we do anything, we ask what could go wrong. 
                  Most failure is predictable. We look first. We find the stupidities. We remove them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: '#141414' }} />
      </div>

      {/* Investment */}
      <section style={{ padding: '160px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p 
            style={{ 
              fontSize: '14px',
              color: '#00ff9d',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '80px'
            }}
          >
            Investment
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            <div style={{ border: '1px solid #141414', padding: '48px' }}>
              <p 
                style={{ 
                  fontSize: '12px',
                  color: '#6A6A6A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}
              >
                Entry Point
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px'
                }}
              >
                Velocity Audit
              </p>
              <p style={{ fontSize: '14px', color: '#6A6A6A', marginBottom: '24px' }}>
                Zero-commitment diagnostic
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>Map of your dependency traps</li>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>Three priority systems to build</li>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>48-hour turnaround</li>
              </ul>
            </div>

            <div style={{ border: '1px solid #00ff9d', padding: '48px' }}>
              <p 
                style={{ 
                  fontSize: '12px',
                  color: '#00ff9d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}
              >
                Core Engagement
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px'
                }}
              >
                Velocity Build
              </p>
              <p style={{ fontSize: '14px', color: '#6A6A6A', marginBottom: '24px' }}>
                $10K – $25K + monthly continuity
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>Full dependency diagnosis</li>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>Custom system implementation</li>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>Team training & transfer</li>
                <li style={{ fontSize: '14px', color: '#FAFAFA' }}>Results-based guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', backgroundColor: '#141414' }} />
      </div>

      {/* CTA */}
      <section style={{ padding: '160px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p 
            style={{ 
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 800,
              fontSize: '32px',
              letterSpacing: '-0.02em',
              color: '#00ff9d',
              marginBottom: '48px'
            }}
          >
            Ready to start?
          </p>
          <a 
            href="/#audit"
            className="inline-block px-8 py-4 text-sm border transition-all duration-150 hover:bg-[#00ff9d] hover:text-[#0A0A0A] hover:border-[#00ff9d]"
            style={{ 
              borderColor: '#FAFAFA',
              color: '#FAFAFA',
              borderWidth: '1px'
            }}
          >
            Get the Velocity Audit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid #141414' }}>
        <div 
          style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FAFAFA' }} />
              <div style={{ width: '8px', height: '8px', backgroundColor: '#00ff9d' }} />
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FAFAFA' }} />
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FAFAFA' }} />
            </div>
            <span 
              style={{ 
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 800,
                fontSize: '16px',
                letterSpacing: '-0.04em'
              }}
            >
              <span style={{ color: '#FAFAFA' }}>SYNC</span>
              <span style={{ color: '#00ff9d' }}>SOLVED</span>
            </span>
          </div>

          <a 
            href="mailto:hello@syncsolved.com"
            style={{ fontSize: '14px', color: '#6A6A6A', transition: 'color 150ms' }}
            className="hover:text-[#00ff9d]"
          >
            hello@syncsolved.com
          </a>

          <p style={{ fontSize: '14px', color: '#3A3A3A' }}>
            © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
