'use client'

import { Music, Mic2, Volume2, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const services = [
  {
    icon: Music,
    title: 'Custom Music Commissions',
    description: 'Original compositions tailored to your brand',
  },
  {
    icon: Mic2,
    title: 'Sonic Branding Packages',
    description: 'Complete sonic identity systems',
  },
  {
    icon: Volume2,
    title: 'Audio Logo Creation',
    description: 'Memorable sonic signatures',
  },
  {
    icon: Lightbulb,
    title: 'Brand Sound Strategy',
    description: 'Strategic sonic identity consultation',
  },
]

export default function CustomMusicV2() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0A0A15] to-[#0A0A0A]">
      {/* Background effects */}
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-electric-purple/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-purple/10 border border-electric-purple/20 rounded-full text-sm font-medium mb-8 backdrop-blur-xl">
              <Music className="w-4 h-4 text-electric-purple/80" />
              <span className="text-electric-purple/90">Premium Services</span>
            </div>
            
            <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
              Need Something Truly Unique?
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              From custom compositions to complete sonic branding systems, our team of composers and strategists can create original music that's unmistakably yours.
            </p>

            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-electric-blue to-electric-purple hover:shadow-xl hover:shadow-electric-blue/30">
                View All Services
              </Button>
            </Link>
          </div>

          {/* Right side - Service cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-electric-blue to-electric-purple rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />
                <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated waveform visualization */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-electric-purple/20 to-electric-cyan/20 rounded-2xl blur-xl opacity-50" />
          <div className="relative h-32 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex items-end justify-center gap-1 overflow-hidden">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-electric-blue via-electric-purple to-electric-cyan rounded-full transition-all duration-300"
                style={{
                  height: `${Math.random() * 100}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                  animation: `pulse ${1 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
      `}</style>
    </section>
  )
}
