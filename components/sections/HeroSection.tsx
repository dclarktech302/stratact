'use client'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1A3D2B] flex items-end pb-24 px-8 md:px-16 overflow-hidden">
      {/* Ghost S */}
      <span
        className="absolute top-0 right-0 font-['Instrument_Serif'] italic text-white select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(28rem,42vw,54rem)', opacity: 0.035 }}
        aria-hidden
      >
        S
      </span>

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-['IBM_Plex_Mono'] text-white/60 text-xs uppercase tracking-[0.22em] mb-8"
        >
          Consulting &amp; Research Group — Est. 2020
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-['Instrument_Serif'] italic text-white leading-[1.05] mb-10"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          Strategy<br />
          <span className="pl-12 md:pl-24">into</span><br />
          <span className="pl-20 md:pl-48">Action.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-white/60 font-['IBM_Plex_Sans'] font-light text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          We partner with higher education institutions, nonprofits, and mission-driven organizations to turn complex challenges into clear, lasting outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#services"
            className="inline-block bg-[#F0EBE1] text-[#1A3D2B] px-8 py-3 text-sm font-['IBM_Plex_Mono'] uppercase tracking-[0.14em] hover:bg-white transition-colors"
          >
            Our Services →
          </a>
          <a
            href="#contact"
            className="inline-block border border-[#F0EBE1]/50 text-[#F0EBE1] px-8 py-3 text-sm font-['IBM_Plex_Mono'] uppercase tracking-[0.14em] hover:border-[#F0EBE1] transition-colors"
          >
            Start a Conversation ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
