'use client'
import { useEffect, useState } from 'react'

const navLinks = ['About', 'Services', 'Approach', 'Clients', 'Contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 md:px-14 py-6 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F0EBE1]/95 backdrop-blur-sm border-b border-[rgba(13,13,13,0.14)]'
            : 'bg-transparent mix-blend-multiply'
        }`}
      >
        <a
          href="/"
          className="font-['IBM_Plex_Mono'] text-[0.78rem] font-medium tracking-[0.15em] uppercase no-underline"
          style={{ color: scrolled ? '#0D0D0D' : '#F0EBE1' }}
        >
          Strat<span className="text-[#1A3D2B]">Act</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-['IBM_Plex_Mono'] text-[0.65rem] tracking-[0.16em] uppercase no-underline transition-colors
                after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:bg-[#1A3D2B]
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-200"
              style={{ color: scrolled ? '#5A5A5A' : '#F0EBE1' }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-5 h-px block" style={{ backgroundColor: scrolled ? '#0D0D0D' : '#F0EBE1' }} />
          <span className="w-5 h-px block" style={{ backgroundColor: scrolled ? '#0D0D0D' : '#F0EBE1' }} />
          <span className="w-5 h-px block" style={{ backgroundColor: scrolled ? '#0D0D0D' : '#F0EBE1' }} />
        </button>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#1A3D2B] flex flex-col justify-center px-10">
          <button
            className="absolute top-6 right-7 font-['IBM_Plex_Mono'] text-[#F0EBE1]/50 text-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-['Instrument_Serif'] italic text-[#F0EBE1] no-underline leading-none hover:opacity-60 transition-opacity"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="absolute bottom-8 left-10 font-['IBM_Plex_Mono'] text-[0.6rem] tracking-[0.2em] uppercase text-[#F0EBE1]/30">
            Strat<span className="text-[#2E5C3F]">Act</span> — Est. 2020
          </p>
        </div>
      )}
    </>
  )
}
