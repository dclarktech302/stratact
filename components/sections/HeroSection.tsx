'use client'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#1A3D2B] flex flex-col justify-end px-7 md:px-14 pb-16 md:pb-20 pt-0 overflow-hidden"
    >
      {/* Ghost background letter */}
      <span
        aria-hidden="true"
        className="absolute top-[-0.1em] right-[-0.05em] font-['Instrument_Serif'] italic text-white/[0.035] leading-none pointer-events-none select-none"
        style={{ fontSize: 'clamp(28rem, 42vw, 54rem)' }}
      >
        S
      </span>

      <div className="relative z-10 max-w-[1100px]">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-['IBM_Plex_Mono'] text-[0.68rem] tracking-[0.22em] uppercase text-white/45 mb-10"
        >
          Consulting &amp; Research Group — Est. 2020
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-['Instrument_Serif'] font-normal text-[#F0EBE1] leading-[0.92] mb-14"
          style={{ fontSize: 'clamp(3.5rem, 8.5vw, 9rem)' }}
        >
          <span className="not-italic block">Strategy</span>
          <span className="block pl-10 italic">into</span>
          <span className="block pl-10">Action.</span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
        >
          <p className="font-['IBM_Plex_Sans'] text-[0.98rem] font-light leading-[1.85] text-white/65 max-w-[420px]">
            We partner with higher education institutions, nonprofits, and mission-driven organizations to turn complex challenges into clear, lasting outcomes.
          </p>
          <div className="flex flex-col gap-3 items-start md:items-end">
            <a
              href="#services"
              className="font-['IBM_Plex_Mono'] text-[0.72rem] tracking-[0.14em] uppercase bg-[#F0EBE1] text-[#1A3D2B] px-6 py-3.5 hover:bg-white transition-colors"
            >
              Our Services →
            </a>
            <a
              href="#contact"
              className="font-['IBM_Plex_Mono'] text-[0.72rem] tracking-[0.14em] uppercase text-[#F0EBE1] border border-white/25 px-6 py-3.5 hover:border-white/60 hover:bg-white/[0.08] transition-colors"
            >
              Start a Conversation ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
