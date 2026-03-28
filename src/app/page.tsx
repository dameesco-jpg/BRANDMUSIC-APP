import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/marketing/Hero'
import Features from '@/components/marketing/Features'
import Testimonials from '@/components/marketing/Testimonials'
import PricingSection from '@/components/marketing/PricingSection'
import CustomMusic from '@/components/marketing/CustomMusic'
import CTASection from '@/components/marketing/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <PricingSection />
      <CustomMusic />
      <CTASection />
      <Footer />
    </main>
  )
}
