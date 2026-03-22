export default function AuditRequested() {
  return (
    <div 
      className="antialiased"
      style={{ 
        backgroundColor: '#0A0A0A',
        color: '#FAFAFA',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@800&family=Inter:wght@400;500&display=swap" 
        rel="stylesheet" 
      />

      <div style={{ textAlign: 'center', padding: '24px' }}>
        {/* Logo mark */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '4px',
            margin: '0 auto 48px',
            width: '48px'
          }}
        >
          <div style={{ width: '22px', height: '22px', backgroundColor: '#FAFAFA' }} />
          <div style={{ width: '22px', height: '22px', backgroundColor: '#00ff9d' }} />
          <div style={{ width: '22px', height: '22px', backgroundColor: '#FAFAFA' }} />
          <div style={{ width: '22px', height: '22px', backgroundColor: '#FAFAFA' }} />
        </div>

        <p 
          style={{ 
            fontSize: '14px',
            color: '#00ff9d',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px'
          }}
        >
          Request received
        </p>

        <h1 
          style={{ 
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 48px)',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            marginBottom: '24px'
          }}
        >
          We will be in touch within 48 hours.
        </h1>

        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#6A6A6A', marginBottom: '48px' }}>
          In the meantime, read about how we work.
        </p>

        <a 
          href="/about"
          className="inline-block px-8 py-4 text-sm border transition-all duration-150 hover:bg-[#00ff9d] hover:text-[#0A0A0A] hover:border-[#00ff9d]"
          style={{ 
            borderColor: '#FAFAFA',
            color: '#FAFAFA',
            borderWidth: '1px'
          }}
        >
          Read about our approach
        </a>
      </div>
    </div>
  );
}
