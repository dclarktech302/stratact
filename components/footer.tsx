export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-10 px-7 md:px-14 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
      <span className="font-['IBM_Plex_Mono'] text-[0.72rem] tracking-[0.14em] uppercase text-white/50">
        Strat<span className="text-[#2E5C3F]/90">Act</span>
      </span>

      <nav className="flex flex-wrap gap-8">
        {['About', 'Services', 'Approach', 'Clients', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-['IBM_Plex_Mono'] text-[0.6rem] tracking-[0.14em] uppercase text-white/30 hover:text-white/70 transition-colors no-underline"
          >
            {item}
          </a>
        ))}
      </nav>

      <span className="font-['IBM_Plex_Mono'] text-[0.58rem] tracking-[0.08em] text-white/20">
        © 2025 StratAct Consulting &amp; Research Group LLC
      </span>
    </footer>
  )
}
