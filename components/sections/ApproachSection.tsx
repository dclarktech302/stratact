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
    <section id="approach" className="bg-[#F0EBE1] py-24 md:py-36 px-7 md:px-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-start">

        {/* Sticky left */}
        <div className="md:sticky md:top-32">
          <p className="font-['IBM_Plex_Mono'] text-[0.62rem] tracking-[0.2em] uppercase text-[#1A3D2B] flex items-center gap-4 mb-16">
            §03 — Approach
            <span className="flex-1 h-px bg-[#1A3D2B]/40 max-w-[5rem]" />
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75 }}
            className="font-['Instrument_Serif'] italic font-normal text-[#0D0D0D] leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}
          >
            How we work<br />with you.
          </motion.h2>
          <p className="font-['IBM_Plex_Sans'] font-light text-[0.95rem] leading-[1.9] text-[#5A5A5A]">
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
              className="grid gap-6 py-8 border-b border-[rgba(13,13,13,0.14)] first:border-t first:border-[rgba(13,13,13,0.14)]"
              style={{ gridTemplateColumns: '4rem 1fr' }}
            >
              <span
                className="font-['IBM_Plex_Mono'] text-[#1A3D2B] tracking-[0.1em] pt-1"
                style={{ fontSize: '0.62rem' }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  className="font-['Instrument_Serif'] italic font-normal text-[#0D0D0D] mb-2.5"
                  style={{ fontSize: '1.25rem' }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-['IBM_Plex_Sans'] font-light text-[#5A5A5A] leading-[1.8]"
                  style={{ fontSize: '0.88rem' }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
