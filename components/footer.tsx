export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-['IBM_Plex_Mono'] text-[#F0EBE1]/60 text-sm tracking-[0.1em]">
          Strat<span className="text-[#2E5C3F]">Act</span>
        </span>
        <nav className="flex flex-wrap gap-6 justify-center">
          {['About', 'Services', 'Approach', 'Clients', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-['IBM_Plex_Mono'] text-[#F0EBE1]/40 text-xs uppercase tracking-[0.12em] hover:text-[#F0EBE1]/70 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <span className="font-['IBM_Plex_Mono'] text-[#F0EBE1]/30 text-xs">
          © 2025 StratAct Consulting & Research Group LLC
        </span>
      </div>
    </footer>
  )
}
