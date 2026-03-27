import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'
import { Music, AudioWaveform, Radio, FileText, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-purple/30 mb-8">
            <AudioWaveform className="w-4 h-4 text-electric-purple" />
            <span className="text-sm font-medium text-electric-purple">Premium Services</span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Beyond the Library
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            Custom music solutions for brands that need something truly unique
          </p>

          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: Custom Music Commissions */}
            <div className="p-8 bg-surface-elevated rounded-2xl border border-white/10 hover:border-electric-blue/30 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-electric-blue" />
              </div>
              
              <h2 className="font-display font-bold text-3xl mb-4">
                Custom Music Commissions
              </h2>
              
              <p className="text-lg text-text-secondary mb-6">
                Can't find the perfect track in our library? Commission an original composition tailored exactly to your brand.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-2">Perfect For:</h3>
                  <p className="text-sm text-text-tertiary">Brand anthems, product launches, exclusive sonic identities</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">What You Get:</h3>
                  <p className="text-sm text-text-tertiary">3 original demos, unlimited revisions, full stems and cutdowns</p>
                </div>
              </div>

              <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all w-full">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Service 2: Sonic Branding Packages */}
            <div className="p-8 bg-surface-elevated rounded-2xl border border-white/10 hover:border-electric-blue/30 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <AudioWaveform className="w-8 h-8 text-electric-blue" />
              </div>
              
              <h2 className="font-display font-bold text-3xl mb-4">
                Sonic Branding Packages
              </h2>
              
              <p className="text-lg text-text-secondary mb-6">
                Comprehensive sonic identity system for your brand—from audio logos to full brand soundscapes.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-2">Perfect For:</h3>
                  <p className="text-sm text-text-tertiary">Rebrands, global campaigns, establishing long-term sonic equity</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">What You Get:</h3>
                  <p className="text-sm text-text-tertiary">Audio logo, extended theme, brand guidelines, usage variations</p>
                </div>
              </div>

              <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all w-full">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Service 3: Audio Logo Creation */}
            <div className="p-8 bg-surface-elevated rounded-2xl border border-white/10 hover:border-electric-blue/30 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <Radio className="w-8 h-8 text-electric-blue" />
              </div>
              
              <h2 className="font-display font-bold text-3xl mb-4">
                Audio Logo Creation
              </h2>
              
              <p className="text-lg text-text-secondary mb-6">
                A memorable 3-5 second sound that represents your brand—like Intel's "bong" or Netflix's "ta-dum".
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-2">Perfect For:</h3>
                  <p className="text-sm text-text-tertiary">Brand refresh, omnichannel consistency, podcast signatures</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">What You Get:</h3>
                  <p className="text-sm text-text-tertiary">5 unique concepts, unlimited refinement, perpetual license</p>
                </div>
              </div>

              <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all w-full">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Service 4: Brand Sound Strategy */}
            <div className="p-8 bg-surface-elevated rounded-2xl border border-white/10 hover:border-electric-blue/30 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-electric-blue" />
              </div>
              
              <h2 className="font-display font-bold text-3xl mb-4">
                Brand Sound Strategy
              </h2>
              
              <p className="text-lg text-text-secondary mb-6">
                Strategic consultation to define and document your brand's sonic identity with actionable guidelines.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-2">Perfect For:</h3>
                  <p className="text-sm text-text-tertiary">Large brands, agencies with multiple clients, governance needs</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">What You Get:</h3>
                  <p className="text-sm text-text-tertiary">Brand audit, competitive analysis, sound framework, reference library</p>
                </div>
              </div>

              <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all w-full">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl mb-4">
            Ready to Create Something Unique?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Fill out a music brief and one of our sonic solution specialists will reach out within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all">
              Fill Out Music Brief
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/library" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:bg-surface-hover transition-all">
              Browse Library Instead
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
