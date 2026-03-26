import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'
import { Music, AudioWaveform, Radio, FileText, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-surface-elevated rounded-xl border border-white/10">
              <Music className="w-12 h-12 text-electric-blue mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-3">Custom Music Commissions</h3>
              <p className="text-text-secondary mb-4">Original compositions tailored to your brand</p>
              <p className="text-sm text-text-tertiary">Timeline: 2-4 weeks</p>
            </div>

            <div className="p-8 bg-surface-elevated rounded-xl border border-white/10">
              <AudioWaveform className="w-12 h-12 text-electric-purple mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-3">Sonic Branding Packages</h3>
              <p className="text-text-secondary mb-4">Complete sonic identity systems</p>
              <p className="text-sm text-text-tertiary">Timeline: 6-8 weeks</p>
            </div>

            <div className="p-8 bg-surface-elevated rounded-xl border border-white/10">
              <Radio className="w-12 h-12 text-electric-blue mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-3">Audio Logo Creation</h3>
              <p className="text-text-secondary mb-4">Memorable sonic signatures</p>
              <p className="text-sm text-text-tertiary">Timeline: 3-4 weeks</p>
            </div>

            <div className="p-8 bg-surface-elevated rounded-xl border border-white/10">
              <FileText className="w-12 h-12 text-electric-purple mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-3">Brand Sound Strategy</h3>
              <p className="text-text-secondary mb-4">Strategic sonic identity consultation</p>
              <p className="text-sm text-text-tertiary">Timeline: 4-6 weeks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl mb-4">
            Ready to Create Something Unique?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Fill out the music brief form and one of our sonic solution specialists will reach out.
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
