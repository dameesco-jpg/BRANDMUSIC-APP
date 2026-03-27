'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-background">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-electric-purple/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium">
            <Play className="w-4 h-4" />
            AI-Powered Music Discovery
          </span>
        </div>
        
        <h1 className="font-display font-bold text-[32px] md:text-[40px] lg:text-[48px] mb-6 leading-[1.2] text-text-primary">
          Discover Music That
          <br />
          <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
            Sounds Like Your Brand
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          AI-powered search finds the perfect soundtrack for your content. 
          Unlimited downloads, stems included, cleared for commercial use.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/signup">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/library">
            <Button variant="outline" size="lg">Browse Library</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">2,500+</div>
            <div className="text-sm text-text-tertiary">Premium Tracks</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">500+</div>
            <div className="text-sm text-text-tertiary">Happy Agencies</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">100%</div>
            <div className="text-sm text-text-tertiary">Customizable</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">Free</div>
            <div className="text-sm text-text-tertiary">Video Sync</div>
          </div>
        </div>
      </div>
    </section>
  )
}
