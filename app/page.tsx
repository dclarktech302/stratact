import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import About from '@/components/About'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <div id="top" style={{
      minHeight: '100vh',
      padding: '0 var(--pad-x)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <SiteHeader />
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Services />
        <Approach />
        <About />
        <Clients />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
