import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ApproachSection from '@/components/sections/ApproachSection'
import ClientsSection from '@/components/sections/ClientsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="border-none h-px bg-[rgba(13,13,13,0.14)] m-0" />
      <AboutSection />
      <hr className="border-none h-px bg-[rgba(13,13,13,0.14)] m-0" />
      <ServicesSection />
      <ApproachSection />
      <hr className="border-none h-px bg-[rgba(13,13,13,0.14)] m-0" />
      <ClientsSection />
      <ContactSection />
    </>
  )
}
