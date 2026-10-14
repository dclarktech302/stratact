import { Reveal } from './Reveal'

const rows = [
  {
    name: 'Higher education',
    desc: 'Colleges, universities, and academic departments navigating curriculum development, DEI initiatives, leadership transitions, and institutional change.',
  },
  {
    name: 'Nonprofits',
    desc: 'Mission-driven organizations building internal capacity, improving program design, and developing their people for sustained impact.',
  },
  {
    name: 'Organizations',
    desc: 'Businesses and institutions seeking strategic clarity, leadership development, and performance improvement without the overhead of a large firm.',
  },
  {
    name: 'Individuals',
    desc: 'Professionals at any career stage seeking to grow, transition roles, or sharpen their professional materials and presentation.',
  },
]

export default function Clients() {
  return (
    <section id="s04" style={{ marginTop: 'clamp(72px,11vw,176px)' }}>
      <Reveal type="rule">
        <div style={{
          borderTop: '1px solid var(--ink)',
          paddingTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'var(--moss)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            Built for institutions that serve others
          </span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'var(--moss)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            §04 — Clients
          </span>
        </div>
      </Reveal>

      <div>
        {rows.map((row, i) => (
          <Reveal
            key={row.name}
            type="left"
            delay={i}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: 'clamp(20px,2.4vw,32px) 0',
              gap: '12px 48px',
              borderTop: i === 0 ? '1px solid var(--ink)' : '1px solid var(--rule)',
              borderBottom: i === rows.length - 1 ? '1px solid var(--ink)' : 'none',
              transition: 'background 200ms, color 200ms, padding-left 200ms, padding-right 200ms',
            }}
            className="clients-row"
          >
            <span style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(40px,8vw,136px)',
              lineHeight: 1,
              letterSpacing: '-.02em',
              overflowWrap: 'anywhere',
            }}>
              {row.name}
            </span>
            <span style={{
              fontSize: '18px',
              lineHeight: 1.55,
              flex: '1 1 260px',
              maxWidth: '380px',
            }}>
              {row.desc}
            </span>
          </Reveal>
        ))}
      </div>

      <style>{`
        .clients-row:hover {
          background: var(--forest);
          color: var(--paper);
          padding-left: 16px;
          padding-right: 16px;
        }
      `}</style>
    </section>
  )
}
