'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-20"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0066FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* First wave */}
          <path
            fill="url(#wave-gradient-1)"
            d="M0,400 C320,320 420,480 720,400 C1020,320 1120,480 1440,400 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,400 C320,320 420,480 720,400 C1020,320 1120,480 1440,400 L1440,800 L0,800 Z;
                M0,450 C320,370 420,530 720,450 C1020,370 1120,530 1440,450 L1440,800 L0,800 Z;
                M0,400 C320,320 420,480 720,400 C1020,320 1120,480 1440,400 L1440,800 L0,800 Z
              "
            />
          </path>
          
          {/* Second wave */}
          <path
            fill="url(#wave-gradient-2)"
            d="M0,500 C360,420 480,580 840,500 C1200,420 1320,580 1440,500 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,500 C360,420 480,580 840,500 C1200,420 1320,580 1440,500 L1440,800 L0,800 Z;
                M0,550 C360,470 480,630 840,550 C1200,470 1320,630 1440,550 L1440,800 L0,800 Z;
                M0,500 C360,420 480,580 840,500 C1200,420 1320,580 1440,500 L1440,800 L0,800 Z
              "
            />
          </path>
          
          {/* Third wave (subtle) */}
          <path
            fill="url(#wave-gradient-1)"
            opacity="0.5"
            d="M0,600 C400,520 560,680 960,600 C1360,520 1440,680 1440,600 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,600 C400,520 560,680 960,600 C1360,520 1440,680 1440,600 L1440,800 L0,800 Z;
                M0,650 C400,570 560,730 960,650 C1360,570 1440,730 1440,650 L1440,800 L0,800 Z;
                M0,600 C400,520 560,680 960,600 C1360,520 1440,680 1440,600 L1440,800 L0,800 Z
              "
            />
          </path>
        </svg>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium">
            <Play className="w-4 h-4" />
            AI-Powered Music Discovery
          </span>
        </div>
        
        <h1 className="font-display font-bold text-[40px] md:text-[56px] lg:text-[72px] mb-8 leading-[1.1] text-white">
          Discover Music That
          <br />
          <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
            Sounds Like Your Brand
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          AI-powered search finds the perfect soundtrack for your content. 
          Unlimited downloads, stems included, cleared for commercial use.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
          <div className="p-4 bg-surface-elevated rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">2,500+</div>
            <div className="text-sm text-text-tertiary">Premium Tracks</div>
          </div>
          <div className="p-4 bg-surface-elevated rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-text-tertiary">Happy Agencies</div>
          </div>
          <div className="p-4 bg-surface-elevated rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-text-tertiary">Customizable</div>
          </div>
          <div className="p-4 bg-surface-elevated rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">Free</div>
            <div className="text-sm text-text-tertiary">Video Sync</div>
          </div>
        </div>
      </div>
    </section>
  )
}
