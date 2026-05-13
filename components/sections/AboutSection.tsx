'use client'
import { motion } from 'motion/react'

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F0EBE1] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 md:divide-x md:divide-[rgba(13,13,13,0.14)]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative"
        >
          <p className="font-['IBM_Plex_Mono'] text-[#1A3D2B] text-xs uppercase tracking-[0.14em] mb-8">
            §01 — About
          </p>
          <div className="relative">
            <span
              className="absolute -top-8 -left-4 font-['Instrument_Serif'] italic text-[#0D0D0D] select-none pointer-events-none leading-none"
              style={{ fontSize: '12rem', opacity: 0.05 }}
              aria-hidden
            >
              I
            </span>
            <h2 className="relative font-['Instrument_Serif'] italic text-[#0D0D0D] leading-tight mb-0"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Strategic partners.<br />
              <span className="not-italic text-[#1A3D2B]">Not outside vendors.</span>
            </h2>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
          className="md:pl-16"
        >
          <div className="space-y-6 font-['IBM_Plex_Sans'] font-light text-[#0D0D0D] leading-[1.95] text-sm md:text-base">
            <p>
              StratAct Consulting & Research Group provides consulting and research services to organizational leaders, higher education institutions, and nonprofits. We are strategic consultants, advisors, and genuine partners for the clients we serve.
            </p>
            <p>
              You can probably identify your own areas in need of growth, development, or change. What we offer is a disciplined, collaborative process — working through those ideas, exploring options rigorously, and implementing solutions that actually hold.
            </p>
            <p>
              Our consultants are experienced professionals who bring the ability to blend theory and practice across disciplines and industries, calibrated to your specific institutional context.
            </p>
          </div>

          <div className="border-t border-[rgba(13,13,13,0.14)] mt-10 pt-8 grid grid-cols-3 gap-4">
            {[
              { val: '3', label: 'Practice Areas' },
              { val: '12+', label: 'Service Offerings' },
              { val: 'EDU', label: 'Higher Ed Focus' },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-['Instrument_Serif'] italic text-[#1A3D2B]" style={{ fontSize: '2.2rem' }}>
                  {item.val}
                </div>
                <div className="font-['IBM_Plex_Mono'] text-[#5A5A5A] uppercase tracking-[0.14em]" style={{ fontSize: '0.62rem' }}>
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
