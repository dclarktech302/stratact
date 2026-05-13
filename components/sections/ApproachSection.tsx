'use client'
import { motion } from 'motion/react'

const steps = [
  {
    num: '01',
    title: 'Discovery & Assessment',
    desc: 'Structured conversations and assessment tools to build an honest picture — challenges, goals, and existing strengths.',
  },
  {
    num: '02',
    title: 'Strategy Development',
    desc: 'Co-developing strategy grounded in your institutional context and evidence-based best practices — not generic frameworks applied indiscriminately.',
  },
  {
    num: '03',
    title: 'Implementation Support',
    desc: 'Staying engaged through execution — helping your team navigate obstacles and adapt as real conditions diverge from plan.',
  },
  {
    num: '04',
    title: 'Evaluation & Refinement',
    desc: "Clear-eyed measurement against defined goals — what worked, what didn't, and what to carry forward sustainably.",
  },
]

export default function ApproachSection() {
  return (
    <section id="approach" className="bg-[#F0EBE1] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Sticky left */}
        <div className="md:sticky md:top-32 md:self-start">
          <p className="font-['IBM_Plex_Mono'] text-[#1A3D2B] text-xs uppercase tracking-[0.14em] mb-8">
            §03 — Approach
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75 }}
            className="font-['Instrument_Serif'] italic text-[#0D0D0D] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            How we work with you.
          </motion.h2>
          <p className="font-['IBM_Plex_Sans'] font-light text-[#5A5A5A] text-sm leading-relaxed">
            Every engagement is collaborative by design. We don&apos;t arrive with predetermined answers — we work alongside you to surface the right ones, then stay through implementation to make them real.
          </p>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="grid gap-6 py-8 border-t border-[rgba(13,13,13,0.14)]"
              style={{ gridTemplateColumns: '4rem 1fr' }}
            >
              <span className="font-['IBM_Plex_Mono'] text-[#1A3D2B] mt-1" style={{ fontSize: '0.62rem' }}>
                {step.num}
              </span>
              <div>
                <h3 className="font-['Instrument_Serif'] italic text-[#0D0D0D] mb-2" style={{ fontSize: '1.25rem' }}>
                  {step.title}
                </h3>
                <p className="font-['IBM_Plex_Sans'] font-light text-[#5A5A5A] leading-relaxed" style={{ fontSize: '0.88rem' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[rgba(13,13,13,0.14)]" />
        </div>
      </div>
    </section>
  )
}
