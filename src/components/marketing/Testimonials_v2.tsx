'use client'

import { Quote, Star, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Brandmusic's AI search saved us 10+ hours per campaign. We find perfect tracks in minutes, not days.",
    author: "Sarah Chen",
    role: "Music Supervisor",
    company: "Horizon Creative Agency",
    rating: 5,
    avatar: "SC",
    color: "from-pink-500 to-rose-500",
  },
  {
    quote: "The video sync feature is a game-changer. We can present 5 options to clients synced to their footage before even licensing.",
    author: "Marcus Rodriguez",
    role: "Creative Director",
    company: "Pulse Productions",
    rating: 5,
    avatar: "MR",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    quote: "Finally, a platform built for professionals. Stem customization means we never have to settle for 'close enough'.",
    author: "Emily Thompson",
    role: "Brand Manager",
    company: "TechForward Inc.",
    rating: 5,
    avatar: "ET",
    color: "from-violet-500 to-indigo-500",
  },
]

const brands = [
  {
    name: 'Apple',
    logo: 'https://cdn.brandfolder.io/V0OX3M52/at/8v3vkx-35vnvc-euop7k/Apple_logo_grey.svg'
  },
  {
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
  },
  {
    name: 'YouTube',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
  },
  {
    name: 'American Airlines',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/American_Airlines_logo_2013.svg'
  },
  {
    name: 'Citibank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg'
  },
]

export default function TestimonialsV2() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#1A0A1F] to-[#0A0A0A] overflow-hidden">
      {/* Dynamic background that matches active testimonial */}
      <div className="absolute inset-0 transition-all duration-1000">
        <div className={`absolute top-0 left-1/3 w-[800px] h-[800px] bg-gradient-to-br ${currentTestimonial.color} opacity-20 rounded-full blur-[120px]`} />
        <div className={`absolute bottom-0 right-1/3 w-[800px] h-[800px] bg-gradient-to-br ${currentTestimonial.color} opacity-20 rounded-full blur-[120px]`} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-br ${currentTestimonial.color} rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
            <Quote className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400">Client Success Stories</span>
          </div>
          <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
            Trusted by Leading Professionals
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See what our clients are saying
          </p>
        </div>

        {/* Main testimonial showcase */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative">
            {/* Floating testimonial cards - side previews */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 w-64 opacity-40 hover:opacity-60 transition-opacity">
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <p className="text-sm text-white/60 line-clamp-3">
                  {testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].quote}
                </p>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 w-64 opacity-40 hover:opacity-60 transition-opacity">
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <p className="text-sm text-white/60 line-clamp-3">
                  {testimonials[(activeIndex + 1) % testimonials.length].quote}
                </p>
              </div>
            </div>

            {/* Main card with 3D effect */}
            <div className="relative group perspective-1000">
              {/* Animated border glow */}
              <div className={`absolute -inset-[2px] bg-gradient-to-r ${currentTestimonial.color} rounded-[32px] opacity-50 blur-xl group-hover:opacity-75 transition-all duration-500`} />
              
              {/* Main content card */}
              <div className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[30px] border-2 border-white/20 transform transition-all duration-500">
                {/* Gradient mesh overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.color} opacity-5`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Floating quote icon */}
                  <div className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br ${currentTestimonial.color} rounded-3xl flex items-center justify-center opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                    <Quote className="w-10 h-10 text-white" />
                  </div>

                  {/* Stars with animation */}
                  <div className="flex gap-1 mb-8 justify-center">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-pink-400 text-pink-400 animate-pulse" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  {/* Quote with gradient text */}
                  <blockquote className="text-2xl md:text-4xl font-medium text-center mb-12 leading-relaxed">
                    <span className="text-white">"{currentTestimonial.quote}"</span>
                  </blockquote>
                  
                  {/* Author card */}
                  <div className="flex items-center justify-center gap-6">
                    {/* Avatar with animated ring */}
                    <div className="relative">
                      <div className={`absolute -inset-2 bg-gradient-to-r ${currentTestimonial.color} rounded-full opacity-50 blur-md animate-pulse`} />
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${currentTestimonial.color} rounded-full flex items-center justify-center border-2 border-white/20`}>
                        <span className="text-white font-bold text-2xl">
                          {currentTestimonial.avatar}
                        </span>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="text-left">
                      <div className="font-bold text-xl text-white mb-1">
                        {currentTestimonial.author}
                      </div>
                      <div className="text-sm text-white/60 mb-1">
                        {currentTestimonial.role}
                      </div>
                      <div className={`text-sm font-medium bg-gradient-to-r ${currentTestimonial.color} bg-clip-text text-transparent`}>
                        {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons - Modern glass design */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-2xl border border-white/20 hover:border-white/40 rounded-2xl flex items-center justify-center transition-all group shadow-lg hover:shadow-2xl hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-2xl border border-white/20 hover:border-white/40 rounded-2xl flex items-center justify-center transition-all group shadow-lg hover:shadow-2xl hover:scale-110"
            >
              <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Progress dots with animated indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(idx)
                  }}
                  className="relative group"
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? `bg-gradient-to-r ${testimonial.color} scale-125`
                      : 'bg-white/20 hover:bg-white/40'
                  }`} />
                  {idx === activeIndex && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full blur-md opacity-50`} />
                  )}
                </button>
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full transition-all text-sm text-white/60 hover:text-white/80"
              >
                <Play className={`w-3 h-3 ${isAutoPlaying ? 'fill-white/60' : ''}`} />
                <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Brand logos - Enhanced design */}
        <div className="relative">
          <div className="text-center mb-12">
            <p className="text-sm text-white/40 uppercase tracking-wider font-medium">
              Trusted by industry leaders
            </p>
          </div>
          
          {/* Logos with stagger animation */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand, idx) => (
              <div
                key={brand.name}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${currentTestimonial.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`} />
                
                {/* Logo container */}
                <div className="relative px-8 py-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl group-hover:scale-105 transform duration-300">
                  <div className="relative h-14 w-36 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain opacity-40 group-hover:opacity-70 transition-all duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
