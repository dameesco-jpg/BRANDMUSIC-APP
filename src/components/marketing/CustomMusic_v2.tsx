'use client'

import { Sparkles, ArrowRight, Music, Mic2, Volume2, Lightbulb, Wand2 } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'

const services = [
  {
    icon: Music,
    title: 'Custom Music Commissions',
    description: 'Original compositions tailored to your brand',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Mic2,
    title: 'Sonic Branding Packages',
    description: 'Complete sonic identity systems',
    color: 'from-cyan-500 to-electric-blue',
  },
  {
    icon: Volume2,
    title: 'Audio Logo Creation',
    description: 'Memorable sonic signatures',
    color: 'from-electric-blue to-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'Brand Sound Strategy',
    description: 'Strategic sonic identity consultation',
    color: 'from-teal-600 to-cyan-600',
  },
]

export default function CustomMusicV2() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0A1F1F] to-[#0A0A0A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400">Premium Services</span>
            </div>
            
            <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
              Need Something Truly Unique?
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              From custom compositions to complete sonic branding systems, our team of composers and strategists can create original music that's unmistakably yours.
            </p>

            {/* Services grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="font-semibold text-base text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                </div>
              ))}
            </div>

            <Link href="/enterprise">
              <Button size="lg" className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/40 transition-all">
                Explore Custom Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Main card with waveform */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-12 backdrop-blur-2xl">
              {/* Animated waveform */}
              <div className="flex items-end justify-center gap-2 h-80">
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-teal-500 via-cyan-400 to-teal-300 rounded-full"
                    style={{
                      height: `${30 + Math.sin(i * 0.4) * 50}%`,
                      animation: `wave ${1.5 + (i % 3) * 0.3}s ease-in-out infinite`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 bg-black/60 backdrop-blur-xl rounded-full border border-teal-500/30">
                  <div className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-teal-400" />
                    <p className="text-sm text-teal-400 font-medium">Custom Audio Visualization</p>
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 pointer-events-none" />
            </div>
            
            {/* Floating accent orbs */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.5);
          }
        }
      `}</style>
    </section>
  )
}
