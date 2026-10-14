import { Reveal } from './Reveal'

export default function About() {
  return (
    <section id="s03" style={{ marginTop: 'clamp(72px,11vw,176px)' }}>
      <Reveal type="rule">
        <div style={{ borderTop: '1px solid var(--ink)', paddingTop: '16px', display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'var(--moss)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
            §03 — About
          </span>
        </div>
      </Reveal>

      <Reveal type="up">
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          fontSize: 'clamp(52px,11vw,176px)',
          lineHeight: .9,
          letterSpacing: '-.03em',
          margin: '24px 0 clamp(32px,4vw,56px)',
        }}>
          Strategic partners,{' '}
          <em style={{ color: 'var(--forest)', fontStyle: 'italic' }}>not</em>
          {' '}outside vendors.
        </h2>
      </Reveal>

      <Reveal type="up" delay={1}>
        <div style={{
          columnCount: 2,
          columnWidth: '300px',
          columnGap: 'clamp(24px,4vw,64px)',
          columnRule: '1px solid var(--rule)',
          maxWidth: '1100px',
          fontSize: '18px',
          lineHeight: 1.7,
        }}>
          <p style={{ marginTop: 0 }}>
            <span style={{
              float: 'left',
              fontFamily: "'Instrument Serif', serif",
              fontSize: '112px',
              lineHeight: .78,
              padding: '6px 12px 0 0',
              color: 'var(--forest)',
            }}>S</span>
            tratAct Consulting &amp; Research Group provides consulting and research services to organizational leaders, higher education institutions, and nonprofits. We are strategic consultants, advisors, and genuine partners for the clients we serve.
          </p>
          <p>
            You can probably identify your own areas in need of growth, development, or change. What we offer is a disciplined, collaborative process — working through those ideas, exploring options rigorously, and implementing solutions that actually hold.
          </p>
          <p>
            Our consultants are experienced professionals who bring the ability to blend theory and practice across disciplines and industries, calibrated to your specific institutional context.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
