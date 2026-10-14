export default function SiteHeader() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px 32px',
      padding: '20px 0',
      borderBottom: '1px solid var(--ink)',
    }}>
      <a
        href="#top"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          color: 'var(--ink)',
        }}
      >
        StratAct Consulting &amp; Research Group
      </a>
      <nav style={{ display: 'flex', gap: '24px' }}>
        {[['§01', 's01'], ['§02', 's02'], ['§03', 's03'], ['§04', 's04'], ['§05', 's05']].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              color: 'var(--ink)',
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
