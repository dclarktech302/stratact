import { Reveal } from './Reveal'

const services = [
  {
    num: '01',
    title: 'Business consulting',
    items: [
      'General business consultation',
      'Needs & skills assessment',
      'Learning, curriculum & training strategy',
      'Diversity, equity & inclusion consultation',
    ],
  },
  {
    num: '02',
    title: 'Professional consulting',
    items: [
      'Writing coaching',
      'Presentation coaching',
      'Career development & education consultation',
      'CV, resume & cover letter consultation',
      'Interview preparation',
    ],
  },
  {
    num: '03',
    title: 'Research consulting',
    items: [
      'Assessment & evaluation',
      'Best practice identification',
      'Data collection & analysis',
      'Reporting & executive summary',
    ],
  },
]

export default function Services() {
  return (
    <section id="s01" style={{ marginTop: 'clamp(72px,11vw,176px)' }}>
      <Reveal type="rule">
        <div style={{ borderTop: '1px solid var(--ink)', paddingTop: '16px', display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'var(--moss)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            §01 — Services
          </span>
        </div>
      </Reveal>

      <Reveal type="up">
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          fontSize: 'clamp(40px,6.4vw,96px)',
          lineHeight: .98,
          maxWidth: '15ch',
          margin: '24px 0 0',
        }}>
          Three practices, shaped around your needs.
        </h2>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
        marginTop: 'clamp(32px,5vw,64px)',
      }}>
        {services.map((svc, i) => (
          <Reveal key={svc.num} type="up" delay={i} style={{
            padding: 'clamp(24px,3vw,40px) clamp(16px,2vw,32px)',
            borderRight: i < services.length - 1 ? '1px solid var(--rule)' : 'none',
          }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(88px,11vw,168px)',
              lineHeight: 1,
              color: 'var(--forest)',
              marginBottom: '16px',
            }}>{svc.num}</div>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '22px', fontWeight: 400, margin: '0 0 20px' }}>
              {svc.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {svc.items.map((item) => (
                <li key={item} style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  padding: '8px 0',
                  borderTop: '1px solid var(--rule)',
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
