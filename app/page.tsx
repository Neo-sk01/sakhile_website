import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectGallery } from "@/components/project-gallery"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectGallery />
      <AboutSection />
      <PricingSection />
      <ContactFooter />
    </main>
  )
}
