'use client'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F0EBE1]/95 backdrop-blur-sm border-b border-[rgba(13,13,13,0.14)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        <a href="/" className="font-['IBM_Plex_Mono'] text-sm tracking-[0.1em]">
          <span className={scrolled ? 'text-[#0D0D0D]' : 'text-[#F0EBE1]'}>Strat</span>
          <span className="text-[#1A3D2B]">Act</span>
        </a>
        <nav className="hidden md:flex gap-8">
          {['About', 'Services', 'Approach', 'Clients', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] hover:opacity-60 transition-opacity ${
                scrolled ? 'text-[#0D0D0D]' : 'text-[#F0EBE1]'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
