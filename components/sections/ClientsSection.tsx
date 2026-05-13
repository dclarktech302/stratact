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
    <section id="clients" className="relative bg-[#1A3D2B] py-24 px-8 md:px-16 overflow-hidden">
      {/* Ghost S */}
      <span
        className="absolute bottom-0 right-0 font-['Instrument_Serif'] italic text-white select-none pointer-events-none leading-none"
        style={{ fontSize: '60vw', opacity: 0.025 }}
        aria-hidden
      >
        S
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="font-['IBM_Plex_Mono'] text-white/40 text-xs uppercase tracking-[0.14em] mb-16">
          §04 — Who We Serve
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75 }}
          className="font-['Instrument_Serif'] italic text-[#F0EBE1] leading-tight mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Built for institutions{' '}
          <span style={{ opacity: 0.45 }}>that serve others.</span>
        </motion.h2>

        <div>
          {clients.map((client, i) => (
            <motion.div
              key={client.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="grid py-8 border-t border-white/10 hover:bg-white/[0.04] transition-colors"
              style={{ gridTemplateColumns: '3rem 1fr 1fr' }}
            >
              <span className="font-['IBM_Plex_Mono'] text-white/30 mt-1" style={{ fontSize: '0.6rem' }}>
                {client.num}
              </span>
              <span
                className="font-['Instrument_Serif'] italic text-[#F0EBE1] self-center"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                {client.name}
              </span>
              <span
                className="font-['IBM_Plex_Sans'] font-light text-white/45 self-center pl-4 md:pl-8 leading-relaxed"
                style={{ fontSize: '0.85rem' }}
              >
                {client.desc}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
