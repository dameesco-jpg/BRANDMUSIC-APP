'use client'

import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    quote: "Brandmusic's AI search saved us 10+ hours per campaign. We find perfect tracks in minutes, not days.",
    author: "Sarah Chen",
    role: "Music Supervisor",
    company: "Horizon Creative Agency",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The video sync feature is a game-changer. We can present 5 options to clients synced to their footage before even licensing.",
    author: "Marcus Rodriguez",
    role: "Creative Director",
    company: "Pulse Productions",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Finally, a platform built for professionals. Stem customization means we never have to settle for 'close enough'.",
    author: "Emily Thompson",
    role: "Brand Manager",
    company: "TechForward Inc.",
    rating: 5,
    avatar: "ET"
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#1A0A1F] to-[#0A0A0A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
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

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative overflow-hidden p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10" />
              
              {/* Content */}
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-8 justify-center">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl text-white font-medium text-center mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[activeIndex].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonials[activeIndex].role}
                    </div>
                    <div className="text-sm text-pink-400">
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex
                      ? 'bg-pink-400 w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Brand logos */}
        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-sm text-white/40 uppercase tracking-wider">
              Trusted by leading brands
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative"
              >
                <div className="relative px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl">
                  <div className="relative h-12 w-32 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain opacity-40 group-hover:opacity-70 transition-opacity grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
