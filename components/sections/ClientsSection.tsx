'use client'
import { motion } from 'motion/react'

const clients = [
  {
    num: '01',
    name: 'Higher Education',
    desc: 'Colleges, universities, and academic departments navigating curriculum development, DEI initiatives, leadership transitions, and institutional change.',
  },
  {
    num: '02',
    name: 'Nonprofits',
    desc: 'Mission-driven organizations building internal capacity, improving program design, and developing their people for sustained impact.',
  },
  {
    num: '03',
    name: 'Organizations',
    desc: 'Businesses and institutions seeking strategic clarity, leadership development, and performance improvement without the overhead of a large firm.',
  },
  {
    num: '04',
    name: 'Individuals',
    desc: 'Professionals at any career stage seeking to grow, transition roles, or sharpen their professional materials and presentation.',
  },
]

export default function ClientsSection() {
  return (
    <section id="clients" className="relative bg-[#1A3D2B] py-24 md:py-36 px-7 md:px-14 overflow-hidden">
      {/* Ghost S */}
      <span
        aria-hidden="true"
        className="absolute bottom-[-0.3em] right-[-0.1em] font-['Instrument_Serif'] italic text-white/[0.025] leading-none pointer-events-none select-none"
        style={{ fontSize: '60vw' }}
      >
        S
      </span>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Section marker */}
        <p className="font-['IBM_Plex_Mono'] text-[0.62rem] tracking-[0.2em] uppercase text-white/40 flex items-center gap-4 mb-16 md:mb-20">
          §04 — Who We Serve
          <span className="flex-1 h-px bg-white/20 max-w-[5rem]" />
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75 }}
          className="font-['Instrument_Serif'] italic font-normal text-[#F0EBE1] leading-[1.05] mb-16 md:mb-20"
          style={{ fontSize: 'clamp(2.8rem, 5vw, 5.5rem)' }}
        >
          Built for institutions{' '}
          <em className="not-italic opacity-45">that serve others.</em>
        </motion.h2>

        <div>
          {clients.map((client, i) => (
            <motion.div
              key={client.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="grid gap-12 py-9 border-t border-white/[0.12] last:border-b last:border-white/[0.12] hover:bg-white/[0.04] transition-colors"
              style={{ gridTemplateColumns: '3rem 1fr 1fr' }}
            >
              <span
                className="font-['IBM_Plex_Mono'] text-white/30 tracking-[0.1em] mt-1"
                style={{ fontSize: '0.6rem' }}
              >
                {client.num}
              </span>
              <span
                className="font-['Instrument_Serif'] italic font-normal text-[#F0EBE1] self-center leading-none"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                {client.name}
              </span>
              <span
                className="font-['IBM_Plex_Sans'] font-light text-white/45 self-center leading-[1.75]"
                style={{ fontSize: '0.85rem' }}
              >
                {client.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
