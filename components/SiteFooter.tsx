export default function SiteFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--ink)',
      padding: '20px 0 32px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '.14em',
    }}>
      <span>StratAct Consulting &amp; Research Group LLC</span>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  )
}
