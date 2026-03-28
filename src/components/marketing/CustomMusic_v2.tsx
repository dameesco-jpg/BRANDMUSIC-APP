'use client'

import { Music, Mic2, Volume2, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: Music,
    title: 'Custom Music Commissions',
    description: 'Original compositions tailored specifically to your brand. Work directly with professional composers.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Mic2,
    title: 'Sonic Branding Packages',
    description: 'Complete sonic identity systems from audio logos to brand anthems. Create consistency across all touchpoints.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Volume2,
    title: 'Audio Logo Creation',
    description: 'Memorable sonic signatures that become synonymous with your brand. Think Intel\'s bong or McDonald\'s jingle.',
    gradient: 'from-cyan-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Brand Sound Strategy',
    description: 'Strategic consulting to help you understand how sound can elevate your brand and create a roadmap.',
    gradient: 'from-teal-500 to-emerald-500',
  },
]

export default function CustomMusicV2() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [audioContext] = useState(() => {
    if (typeof window !== 'undefined') {
      return new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return null
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    // Animated waveform
    const bars = 32
    const barWidth = canvas.offsetWidth / bars
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        // Create smooth wave pattern
        const height = Math.sin(Date.now() * 0.001 + i * 0.3) * 30 + 40
        const x = i * barWidth
        const y = (canvas.offsetHeight - height) / 2

        // Gradient from emerald to teal
        const gradient = ctx.createLinearGradient(0, 0, canvas.offsetWidth, 0)
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.6)') // emerald-500
        gradient.addColorStop(1, 'rgba(20, 184, 166, 0.6)') // teal-500

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth - 2, height)
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#051510] to-[#0A0A0A] overflow-hidden">
      {/* Blended emerald/teal gradient that fades to black */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/8 via-teal-500/4 to-transparent" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
            Premium Services
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Need something truly unique? Our team can create custom music and sonic branding tailored to your brand.
          </p>
        </div>

        {/* Waveform visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
              <canvas
                ref={canvasRef}
                className="w-full h-24 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="group relative">
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity`} />
              <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-white/20 transition-all h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl hover:shadow-emerald-500/30">
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
