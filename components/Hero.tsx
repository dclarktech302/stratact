import { Reveal } from './Reveal'

const contentsRows = [
  { num: '§01', title: 'Services' },
  { num: '§02', title: 'Approach' },
  { num: '§03', title: 'About' },
  { num: '§04', title: 'Clients' },
  { num: '§05', title: 'Contact' },
]

export default function Hero() {
  return (
    <section style={{ paddingTop: 'clamp(40px,7vw,96px)' }}>
      <Reveal type="up">
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          fontSize: 'clamp(44px,8.6vw,148px)',
          lineHeight: .94,
          letterSpacing: '-.02em',
          maxWidth: '14ch',
          textWrap: 'balance',
          margin: 0,
        }}>
          A strategy is a hypothesis until an institution{' '}
          <em style={{ color: 'var(--forest)', fontStyle: 'italic' }}>acts</em>
          {' '}on it.
        </h1>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        marginTop: 'clamp(40px,6vw,88px)',
        borderTop: '1px solid var(--ink)',
      }}>
        {/* Abstract */}
        <div style={{ borderRight: '1px solid var(--rule)', paddingRight: 'clamp(24px,4vw,56px)', paddingTop: '24px' }}>
          <Reveal type="up">
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              color: 'var(--moss)',
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              margin: '0 0 20px',
            }}>Abstract</p>
          </Reveal>
          <Reveal type="up" delay={1}>
            <p style={{ fontSize: '20px', lineHeight: 1.55, maxWidth: '46ch', margin: '0 0 20px' }}>
              StratAct Consulting &amp; Research Group provides consulting and research services to organizational leaders, higher education institutions, and nonprofits. We are strategic consultants, advisors, and genuine partners for the clients we serve.
            </p>
          </Reveal>
          <Reveal type="up" delay={2}>
            <p style={{ fontSize: '20px', lineHeight: 1.55, maxWidth: '46ch', margin: 0 }}>
              You can probably identify your own areas in need of growth, development, or change. What we offer is a disciplined, collaborative process — working through those ideas, exploring options rigorously, and implementing solutions that actually hold.
            </p>
          </Reveal>
        </div>

        {/* Contents */}
        <div style={{ paddingLeft: 'clamp(24px,4vw,56px)', paddingTop: '24px' }}>
          <Reveal type="up">
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              color: 'var(--moss)',
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              margin: '0 0 4px',
            }}>Contents</p>
          </Reveal>
          <div>
            {contentsRows.map((row, i) => (
              <Reveal key={row.num} type="up" delay={i + 1}>
                <a href={`#s0${i + 1}`} style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr',
                  padding: '14px 0',
                  borderBottom: i === contentsRows.length - 1 ? '1px solid var(--ink)' : '1px solid var(--rule)',
                  transition: 'background 200ms, color 200ms, padding-left 200ms',
                  color: 'inherit',
                }}
                className="contents-row"
                >
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px' }}>{row.num}</span>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '30px', lineHeight: 1.1 }}>{row.title}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contents-row:hover {
          background: var(--forest);
          color: var(--paper);
          padding-left: 12px;
        }
      `}</style>
    </section>
  )
}
