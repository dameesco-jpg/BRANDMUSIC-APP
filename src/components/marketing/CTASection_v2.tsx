'use client'

import { ArrowRight, Sparkles, Music, Users, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'

const stats = [
  {
    icon: Music,
    value: '50K+',
    label: 'Premium Tracks',
    color: 'from-electric-blue to-electric-cyan',
  },
  {
    icon: Users,
    value: '250+',
    label: 'Agencies',
    color: 'from-electric-cyan to-electric-purple',
  },
  {
    icon: Zap,
    value: '10hrs',
    label: 'Saved Per Campaign',
    color: 'from-electric-purple to-violet-500',
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Satisfaction Rate',
    color: 'from-violet-500 to-electric-blue',
  },
]

export default function CTASectionV2() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A15] to-[#0A0A0A] overflow-hidden">
      {/* Background effects - Blue/Purple instead of Green */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric-purple/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-electric-cyan/8 rounded-full blur-[120px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-electric-blue/80" />
              <span className="text-electric-blue/90">Start Today</span>
            </div>
            
            <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
              Ready to Transform Your Music Workflow?
            </h2>
            
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Join hundreds of agencies and brands using AI to find the perfect soundtrack in minutes, not days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/signup">
                <Button size="lg" className="group bg-gradient-to-r from-electric-blue/80 to-electric-purple/80 hover:from-electric-blue hover:to-electric-purple border border-white/20 hover:shadow-lg hover:shadow-electric-blue/20 transition-all">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="border-white/20 hover:border-electric-purple/40 backdrop-blur-xl">
                  Book a Demo
                </Button>
              </Link>
            </div>

            <p className="text-sm text-white/40">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-white/20 transition-all"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Very subtle border glow */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} opacity-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white/80" />
                  </div>
                  
                  {/* Value - Always white */}
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-white/50">
                    {stat.label}
                  </div>
                </div>

                {/* Corner accent - more subtle */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
