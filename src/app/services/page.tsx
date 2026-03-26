import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Music, AudioWaveform, Radio, FileText, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Music,
    title: 'Custom Music Commissions',
    description: "Can't find the perfect track in our library? Commission an original composition tailored exactly to your brand.",
    process: [
      'Brief our composers on your vision',
      'Receive 3 original demos',
      'Provide feedback and revisions',
      'Get final track with full commercial license'
    ],
    timeline: '2-4 weeks',
    includes: 'Full stems and cutdowns, usage varies',
    perfectFor: [
      'Brand anthems',
      'Product launch campaigns',
      'Long-term brand partnerships',
      'Exclusive sonic identities'
    ]
  },
  {
    icon: AudioWaveform,
    title: 'Sonic Branding Packages',
    description: 'Comprehensive sonic identity system for your brand—from audio logos to full brand soundscapes.',
    whatYouGet: [
      'Audio logo (3-5 second sonic signature)',
      'Extended brand theme (30-60 seconds)',
      'Brand sound guidelines (PDF + audio examples)',
      'Usage variations (energetic, calm, minimal)',
      'Full stems and cutdowns',
      'Usage varies'
    ],
    timeline: '6-8 weeks',
    deliverables: '10-15 audio assets + brand guidelines',
    perfectFor: [
      'Rebrands',
      'New product lines',
      'Global campaigns',
      'Establishing long-term sonic equity'
    ]
  },
  {
    icon: Radio,
    title: 'Audio Logo Creation',
    description: "A memorable 3-5 second sound that represents your brand—like a visual logo, but for audio.",
    examples: [
      'Intel\'s iconic "bong"',
      'McDonald\'s "I\'m lovin\' it"',
      'Netflix\'s "ta-dum"'
    ],
    process: [
      'Discovery session (brand values, competitors, goals)',
      'Receive 5 unique audio logo concepts',
      'Select favorite and refine',
      'Get final with full rights'
    ],
    timeline: '3-4 weeks',
    includes: 'Multiple file formats, full stems, perpetual license',
    perfectFor: [
      'Brand refresh',
      'Omnichannel consistency',
      'Podcast intros/outros',
      'Video content signatures'
    ]
  },
  {
    icon: FileText,
    title: 'Brand Sound Strategy',
    description: "Strategic consultation to define and document your brand's sonic identity.",
    deliverables: [
      'Brand sound audit (current state)',
      'Competitive sonic analysis',
      'Sound personality framework',
      'Musical territory mapping',
      'Approved/avoid guidelines',
      'Reference track library'
    ],
    timeline: '4-6 weeks',
    format: 'Presentation + interactive PDF guidebook',
    perfectFor: [
      'Large brands with multiple campaigns',
      'Agencies managing multiple clients',
      'Establishing governance for internal teams'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-purple/30 mb-8">
            <Waveform className="w-4 h-4 text-electric-purple" />
            <span className="text-sm font-medium text-electric-purple">Premium Services</span>
          </div>
          
          <h1 className="font-display font-bold text-display-lg md:text-display-xl mb-6">
            Beyond the Library
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            Custom music solutions for brands that need something truly unique
          </p>

          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-electric-blue" />
                    </div>
                    
                    <h2 className="font-display font-bold text-3xl mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-text-secondary mb-6">
                      {service.description}
                    </p>

                    {/* Examples (Audio Logo only) */}
                    {service.examples && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-white mb-3">Examples:</h3>
                        <ul className="space-y-2">
                          {service.examples.map((example, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary">
                              <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Process */}
                    {service.process && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-white mb-3">Process:</h3>
                        <ol className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-secondary">
                              <span className="flex-shrink-0 w-6 h-6 bg-electric-blue/20 text-electric-blue rounded-full flex items-center justify-center text-sm font-semibold">
                                {i + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* What You Get */}
                    {service.whatYouGet && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-white mb-3">What You Get:</h3>
                        <ul className="space-y-2">
                          {service.whatYouGet.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary">
                              <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Deliverables (Strategy only) */}
                    {service.deliverables && typeof service.deliverables === 'object' && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-white mb-3">Deliverables:</h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary">
                              <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="lg:border-l lg:border-white/10 lg:pl-12">
                    {/* Timeline & Details */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Timeline</h3>
                        <p className="text-lg font-semibold text-white">{service.timeline}</p>
                      </div>

                      {service.includes && (
                        <div>
                          <h3 className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Includes</h3>
                          <p className="text-text-secondary">{service.includes}</p>
                        </div>
                      )}

                      {service.deliverables && typeof service.deliverables === 'string' && (
                        <div>
                          <h3 className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Deliverables</h3>
                          <p className="text-text-secondary">{service.deliverables}</p>
                        </div>
                      )}

                      {service.format && (
                        <div>
                          <h3 className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Format</h3>
                          <p className="text-text-secondary">{service.format}</p>
                        </div>
                      )}

                      <div>
                        <h3 className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Pricing</h3>
                        <p className="text-text-secondary">
                          Fill out the music brief form and one of our sonic solution specialists will reach out.
                        </p>
                      </div>
                    </div>

                    {/* Perfect For */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-white mb-3">Perfect For:</h3>
                      <ul className="space-y-2">
                        {service.perfectFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-secondary">
                            <CheckCircle className="w-5 h-5 text-electric-purple flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button fullWidth size="lg" className="group">
                      Request a Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl mb-4">
            Ready to Create Something Unique?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Let's discuss your project and find the perfect sonic solution for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Fill Out Music Brief
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Library Instead
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
