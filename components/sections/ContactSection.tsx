'use client'
import { motion } from 'motion/react'
import ContactForm from '@/components/features/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F0EBE1] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 md:divide-x md:divide-[rgba(13,13,13,0.14)]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-['IBM_Plex_Mono'] text-[#1A3D2B] text-xs uppercase tracking-[0.14em] mb-8">
            §05 — Contact
          </p>
          <h2
            className="font-['Instrument_Serif'] italic text-[#0D0D0D] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            Let&apos;s start a conversation.
          </h2>
          <p className="font-['IBM_Plex_Sans'] font-light text-[#5A5A5A] text-sm leading-relaxed mb-10">
            Tell us about your organization&apos;s goals and challenges. We&apos;ll respond within one business day to explore whether a StratAct partnership is the right fit.
          </p>
          <div className="space-y-3">
            {[
              'contact@stratactconres.com',
              'Response within 1 business day',
              'All engagements fully customized',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-center">
                <span className="font-['IBM_Plex_Mono'] text-[#1A3D2B]" style={{ fontSize: '0.68rem' }}>→</span>
                <span className="font-['IBM_Plex_Mono'] text-[#5A5A5A]" style={{ fontSize: '0.68rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="md:pl-16"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
