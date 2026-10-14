'use client'
import { motion } from 'motion/react'
import ContactForm from '@/components/features/ContactForm'

const meta = [
  'contact@stratactconres.com',
  'Response within 1 business day',
  'All engagements fully customized',
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F0EBE1] py-24 md:py-36 px-7 md:px-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2">

        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75 }}
          className="pb-16 border-b border-[rgba(13,13,13,0.14)] md:pb-0 md:border-b-0 md:border-r md:border-[rgba(13,13,13,0.14)] md:pr-28"
        >
          <p className="font-['IBM_Plex_Mono'] text-[0.62rem] tracking-[0.2em] uppercase text-[#1A3D2B] flex items-center gap-4 mb-16">
            §05 — Contact
            <span className="flex-1 h-px bg-[#1A3D2B]/40 max-w-[5rem]" />
          </p>
          <h2
            className="font-['Instrument_Serif'] italic font-normal text-[#0D0D0D] leading-[1.05] mb-10"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 4.5rem)' }}
          >
            Let&apos;s start a<br />conversation.
          </h2>
          <p className="font-['IBM_Plex_Sans'] font-light text-[0.95rem] leading-[1.9] text-[#5A5A5A] mb-12">
            Tell us about your organization&apos;s goals and challenges. We&apos;ll respond within one business day to explore whether a StratAct partnership is the right fit.
          </p>
          <div className="space-y-4">
            {meta.map((item) => (
              <div
                key={item}
                className="font-['IBM_Plex_Mono'] text-[#5A5A5A] flex items-center gap-3"
                style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}
              >
                <span className="text-[#1A3D2B]">→</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="pt-16 md:pt-0 md:pl-28"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  )
}
