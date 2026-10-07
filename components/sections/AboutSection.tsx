'use client'
import { motion } from 'motion/react'

const stats = [
  { val: '3', label: 'Practice Areas' },
  { val: '12+', label: 'Service Offerings' },
  { val: 'EDU', label: 'Higher Ed Focus' },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F0EBE1] py-24 md:py-36 px-7 md:px-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.05fr]">

        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative pb-16 border-b border-[rgba(13,13,13,0.14)] md:pb-0 md:border-b-0 md:border-r md:border-[rgba(13,13,13,0.14)] md:pr-28"
        >
          {/* Section marker */}
          <p className="font-['IBM_Plex_Mono'] text-[0.62rem] tracking-[0.2em] uppercase text-[#1A3D2B] flex items-center gap-4 mb-16">
            §01 — About
            <span className="flex-1 h-px bg-[#1A3D2B]/40 max-w-[5rem]" />
          </p>

          {/* Ghost numeral */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-[-1.5rem] right-0 font-['Instrument_Serif'] italic text-[#0D0D0D]/[0.05] leading-none pointer-events-none select-none"
              style={{ fontSize: 'clamp(7rem, 12vw, 13rem)' }}
            >
              I
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
              className="relative font-['Instrument_Serif'] italic font-normal text-[#0D0D0D] leading-[1.1]"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)' }}
            >
              Strategic partners.<br />
              <strong className="not-italic font-normal text-[#1A3D2B] block">
                Not outside vendors.
              </strong>
            </motion.h2>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
          className="pt-16 md:pt-0 md:pl-28"
        >
          <div className="space-y-6 font-['IBM_Plex_Sans'] font-light text-[1.05rem] leading-[1.95] text-[#2A2A2A]">
            <p>
              StratAct Consulting &amp; Research Group provides consulting and research services to organizational leaders, higher education institutions, and nonprofits. We are strategic consultants, advisors, and genuine partners for the clients we serve.
            </p>
            <p>
              You can probably identify your own areas in need of growth, development, or change. What we offer is a disciplined, collaborative process — working through those ideas, exploring options rigorously, and implementing solutions that actually hold.
            </p>
            <p>
              Our consultants are experienced professionals who bring the ability to blend theory and practice across disciplines and industries, calibrated to your specific institutional context.
            </p>
          </div>

          {/* Footnote stats */}
          <div className="border-t border-[rgba(13,13,13,0.14)] mt-14 pt-8 flex gap-14">
            {stats.map((item) => (
              <div key={item.label}>
                <div
                  className="font-['Instrument_Serif'] italic text-[#1A3D2B] leading-none mb-1"
                  style={{ fontSize: '2.2rem' }}
                >
                  {item.val}
                </div>
                <div
                  className="font-['IBM_Plex_Mono'] text-[#5A5A5A] uppercase tracking-[0.14em]"
                  style={{ fontSize: '0.62rem' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
