import { Reveal } from './Reveal'

const steps = [
  {
    num: '01',
    title: 'Discovery & assessment',
    body: 'Structured conversations and assessment tools to build an honest picture of challenges, goals, and existing strengths — before any strategy is proposed.',
  },
  {
    num: '02',
    title: 'Strategy development',
    body: 'Co-developing strategy grounded in your institutional context and evidence-based best practices — not generic frameworks applied indiscriminately.',
  },
  {
    num: '03',
    title: 'Implementation support',
    body: 'Staying engaged through execution — helping your team navigate obstacles and adapt as real conditions diverge from plan.',
  },
  {
    num: '04',
    title: 'Evaluation & refinement',
    body: "Clear-eyed measurement against defined goals — what worked, what didn't, and what to carry forward sustainably.",
  },
]

export default function Approach() {
  return (
    <section id="s02" style={{
      marginTop: 'clamp(72px,11vw,176px)',
      marginLeft: 'calc(-1 * var(--pad-x))',
      marginRight: 'calc(-1 * var(--pad-x))',
      paddingLeft: 'var(--pad-x)',
      paddingRight: 'var(--pad-x)',
      paddingTop: 'clamp(56px,8vw,112px)',
      paddingBottom: 'clamp(56px,8vw,112px)',
      background: 'var(--forest)',
      color: 'var(--paper)',
    }}>
      <Reveal type="up">
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--paper)', marginBottom: 'clamp(32px,4vw,56px)' }}>
          §02 — Approach
        </p>
      </Reveal>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', alignItems: 'flex-end', marginBottom: 'clamp(40px,6vw,80px)' }}>
        <Reveal type="up" style={{ flex: '2 1 420px' }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontSize: 'clamp(36px,5.4vw,80px)',
            lineHeight: .98,
            margin: 0,
            color: 'var(--paper)',
          }}>
            We do not arrive with the answers.
          </h2>
        </Reveal>
        <Reveal type="up" delay={1} style={{ flex: '1 1 280px' }}>
          <p style={{ fontSize: '20px', lineHeight: 1.55, margin: 0, color: 'var(--paper)' }}>
            Every engagement is collaborative by design. We work alongside you to surface the right answers, then stay through implementation to make them real.
          </p>
        </Reveal>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
        gap: '0 32px',
      }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ paddingTop: '32px' }}>
            <Reveal type="rule">
              <div style={{ borderTop: '1px solid var(--paper)', marginBottom: '24px' }} />
            </Reveal>
            <Reveal type="up" delay={i}>
              <div>
                <div style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(72px,8vw,120px)',
                  lineHeight: 1,
                  color: 'var(--paper)',
                  marginBottom: '8px',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '30px', fontWeight: 400, margin: '0 0 12px', color: 'var(--paper)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '18px', lineHeight: 1.55, margin: 0, color: 'var(--paper)' }}>
                  {step.body}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
