'use client'
import { useState } from 'react'
import { motion } from 'motion/react'

const services = [
  {
    index: '01',
    name: 'Business Consulting',
    items: ['General Consultation', 'Needs & Skills Assessment', 'Curriculum & Training Strategy', 'DEI Consultation'],
  },
  {
    index: '02',
    name: 'Professional Consulting',
    items: ['Writing Coaching', 'Presentation Coaching', 'Career Development', 'CV / Resume / Cover Letter', 'Interview Preparation'],
  },
  {
    index: '03',
    name: 'Research Consulting',
    items: ['Assessment & Evaluation', 'Best Practice Identification', 'Data Collection & Analysis', 'Reporting & Executive Summary'],
  },
]

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="services" className="bg-[#0D0D0D] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="font-['IBM_Plex_Mono'] text-white/40 text-xs uppercase tracking-[0.14em] mb-16">
          §02 — Services
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75 }}
            className="font-['Instrument_Serif'] italic text-[#F0EBE1] leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            What we offer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="font-['IBM_Plex_Sans'] font-light text-white/50 text-sm leading-relaxed self-end"
          >
            Three interlocking practice areas covering organizational development, professional growth, and evidence-based research — each engagement shaped entirely around your needs.
          </motion.p>
        </div>

        <div className="border-t border-white/10">
          {services.map((svc, i) => (
            <div key={svc.index} className="border-b border-white/10">
              <button
                className="w-full grid gap-4 py-8 text-left hover:bg-white/[0.02] transition-colors"
                style={{ gridTemplateColumns: '3.5rem 1fr auto' }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-['IBM_Plex_Mono'] text-white/30 self-center" style={{ fontSize: '0.65rem' }}>
                  {svc.index}
                </span>
                <span
                  className="font-['Instrument_Serif'] italic text-[#F0EBE1] self-center"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-['IBM_Plex_Mono'] text-white/50 self-center text-xl transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-8 pl-14 flex flex-wrap gap-2">
                  {svc.items.map((item) => (
                    <span
                      key={item}
                      className="font-['IBM_Plex_Mono'] text-white/50 border border-white/10 px-3 py-1 uppercase tracking-[0.1em]"
                      style={{ fontSize: '0.62rem' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
