import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/marketing/Hero'
import Features from '@/components/marketing/Features'
import HowItWorks from '@/components/marketing/HowItWorks'
import ServicesSection from '@/components/marketing/ServicesSection'  // ← ADD THIS LINE
import PricingSection from '@/components/marketing/PricingSection'
import CTASection from '@/components/marketing/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <ServicesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
