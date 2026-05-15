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
    <section id="services" className="bg-[#0D0D0D] py-24 md:py-36 px-7 md:px-14">
      <div className="max-w-[1100px] mx-auto">

        {/* Section marker */}
        <p className="font-['IBM_Plex_Mono'] text-[0.62rem] tracking-[0.2em] uppercase text-white/40 flex items-center gap-4 mb-16 md:mb-24">
          §02 — Services
          <span className="flex-1 h-px bg-white/20 max-w-[5rem]" />
        </p>

        {/* Intro row */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75 }}
            className="font-['Instrument_Serif'] italic font-normal text-[#F0EBE1] leading-[1.05]"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            What we offer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="font-['IBM_Plex_Sans'] font-light text-white/45 text-[0.95rem] leading-[1.9] self-end border-t border-white/10 pt-6"
          >
            Three interlocking practice areas covering organizational development, professional growth, and evidence-based research — each engagement shaped entirely around your needs.
          </motion.p>
        </div>

        {/* Accordion */}
        <div>
          {services.map((svc, i) => (
            <motion.div
              key={svc.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="border-t border-white/10 last:border-b last:border-white/10"
            >
              <button
                className="w-full grid gap-8 py-10 text-left cursor-pointer group hover:bg-white/[0.02] transition-colors"
                style={{ gridTemplateColumns: '3.5rem 1fr auto' }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-['IBM_Plex_Mono'] text-white/25 tracking-[0.1em] pt-1"
                  style={{ fontSize: '0.65rem' }}
                >
                  {svc.index}
                </span>
                <span
                  className="font-['Instrument_Serif'] italic font-normal text-[#F0EBE1] group-hover:text-white/75 transition-colors self-center"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-['IBM_Plex_Mono'] text-white/30 self-center transition-all duration-300"
                  style={{
                    fontSize: '1.2rem',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    color: open === i ? 'rgba(255,255,255,0.7)' : undefined,
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="pb-10 pl-[calc(3.5rem+2rem)] flex flex-wrap gap-2">
                  {svc.items.map((item) => (
                    <span
                      key={item}
                      className="font-['IBM_Plex_Mono'] text-white/40 border border-white/[0.12] px-2.5 py-1 uppercase tracking-[0.1em]"
                      style={{ fontSize: '0.62rem' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
