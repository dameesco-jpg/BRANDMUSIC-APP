'use client'

import { useState } from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Sparkles, Music, Mic2, Volume2, Lightbulb, Radio, Palette, Headphones, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const services = [
  {
    icon: Music,
    title: 'Custom Music Commissions',
    tagline: 'Original compositions tailored to your brand',
    description: 'Work with our team of professional composers to create original music that\'s unmistakably yours. Perfect for brands that need something truly unique beyond our catalog.',
    features: [
      'Exclusive rights to your track',
      'Unlimited revisions until perfect',
      '3-4 week turnaround',
      'Full stems and source files included',
      'Work directly with composer',
    ],
    process: [
      'Brief your vision and goals',
      'Receive initial concepts',
      'Refine and iterate',
      'Final delivery with stems',
    ],
    color: 'from-electric-blue to-electric-cyan',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    pricing: 'Starting at $5,000',
  },
  {
    icon: Mic2,
    title: 'Sonic Branding Packages',
    tagline: 'Complete sonic identity systems',
    description: 'Develop a comprehensive sonic identity that works across all touchpoints—from audio logos to brand anthems. Create consistency in how your brand sounds.',
    features: [
      'Audio logo (sonic signature)',
      'Brand anthem (60-90 seconds)',
      'UI/UX sound design',
      'On-hold music',
      'Sonic brand guidelines',
    ],
    process: [
      'Brand workshop and discovery',
      'Sonic strategy development',
      'Create audio assets',
      'Deploy across touchpoints',
    ],
    color: 'from-electric-purple to-fuchsia-500',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
    pricing: 'Starting at $15,000',
  },
  {
    icon: Volume2,
    title: 'Audio Logo Creation',
    tagline: 'Memorable sonic signatures',
    description: 'A short, distinctive sound that becomes synonymous with your brand. Think Intel\'s bong or McDonald\'s "I\'m Lovin\' It." Make your brand instantly recognizable.',
    features: [
      '2-5 second sonic signature',
      'Multiple variations (short/long)',
      'Adaptable across media',
      'Trademark support',
      'Usage guidelines',
    ],
    process: [
      'Understand brand attributes',
      'Explore sonic directions',
      'Test and refine',
      'Final delivery and rollout',
    ],
    color: 'from-electric-cyan to-electric-blue',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
    pricing: 'Starting at $8,000',
  },
  {
    icon: Lightbulb,
    title: 'Brand Sound Strategy',
    tagline: 'Strategic sonic identity consultation',
    description: 'Not sure where to start? Our sonic strategists help you understand how sound can elevate your brand and create a roadmap for implementation.',
    features: [
      'Competitive sonic audit',
      'Brand sound workshop',
      'Strategic recommendations',
      'Implementation roadmap',
      '30-day support',
    ],
    process: [
      'Discovery and research',
      'Workshop with stakeholders',
      'Strategy presentation',
      'Roadmap and next steps',
    ],
    color: 'from-pink-500 to-fuchsia-600',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop',
    pricing: 'Starting at $3,500',
  },
]

const additionalServices = [
  {
    icon: Radio,
    title: 'Podcast & Video Series Themes',
    description: 'Custom intro/outro music for your content series',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Campaign-Specific Music',
    description: 'Original tracks created for specific marketing campaigns',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Headphones,
    title: 'Music Supervision',
    description: 'Expert guidance on music selection and licensing',
    color: 'from-violet-500 to-purple-500',
  },
]

const caseStudies = [
  {
    client: 'TechForward Inc.',
    challenge: 'Needed a complete sonic identity for brand refresh',
    solution: 'Full sonic branding package with audio logo and anthem',
    result: '89% increase in brand recall in audio-first environments',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    client: 'Horizon Creative',
    challenge: 'Required custom music for global campaign launch',
    solution: 'Original composition with full stems for localization',
    result: 'Campaign won 3 industry awards, music became brand signature',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400">Premium Services</span>
          </div>
          
          <h1 className="font-display font-bold text-[48px] md:text-[72px] mb-6 text-white leading-[1.1]">
            Custom Music & Sonic Branding
          </h1>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            From custom compositions to complete sonic branding systems, our team of composers and strategists can create original music that's unmistakably yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-xl hover:shadow-teal-500/30">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg" className="border-white/20 hover:border-white/40">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services - Detailed */}
      <section id="services" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="font-display font-bold text-[36px] md:text-[48px] mb-3 text-white leading-[1.1]">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-teal-400 mb-6 font-medium">
                    {service.tagline}
                  </p>
                  
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-white mb-4">What's Included</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className={`w-5 h-5 bg-gradient-to-br ${service.color} bg-clip-text text-transparent flex-shrink-0 mt-0.5`} style={{ WebkitTextFillColor: 'transparent' }} />
                          <span className="text-sm text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-white mb-4">Our Process</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      {service.process.map((step, i) => (
                        <div key={step} className="flex items-center gap-2">
                          <div className={`px-3 py-1.5 bg-gradient-to-r ${service.color} opacity-20 rounded-lg text-sm text-white backdrop-blur-xl border border-white/10`}>
                            {i + 1}. {step}
                          </div>
                          {i < service.process.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-white/30" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 mb-6">
                    <span className="text-white/60">Investment</span>
                    <span className="text-xl font-bold text-white">{service.pricing}</span>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className={`group bg-gradient-to-r ${service.color} hover:shadow-lg transition-all`}>
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`} />
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] via-[#0A1F1F] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
              Additional Services
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Specialized services for unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div key={service.title} className="group relative">
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity`} />
                <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                  <Link href="/contact" className="text-teal-400 hover:text-teal-300 text-sm font-medium inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
              Client Success Stories
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              See how we've helped brands find their sound
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.client} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.client}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-teal-400 font-medium mb-1">Challenge</div>
                        <p className="text-white/70">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-1">Solution</div>
                        <p className="text-white/70">{study.solution}</p>
                      </div>
                      <div>
                        <div className="text-sm text-white font-medium mb-1">Result</div>
                        <p className="text-white/90 font-semibold">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20">
              <h2 className="font-display font-bold text-[36px] md:text-[48px] mb-6 text-white leading-[1.1]">
                Ready to Create Something Unique?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your project and get a custom quote.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-xl hover:shadow-teal-500/30">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-white/40 mt-6">
                Free 30-minute consultation • No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
