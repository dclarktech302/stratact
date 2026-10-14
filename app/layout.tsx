import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StratAct Consulting & Research Group',
  description: 'Strategic consulting and research for higher education, nonprofits, and mission-driven organizations.',
  openGraph: {
    title: 'StratAct Consulting & Research Group',
    description: 'Strategic consulting and research for higher education institutions and nonprofits.',
    url: 'https://stratactconres.com',
    siteName: 'StratAct',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
