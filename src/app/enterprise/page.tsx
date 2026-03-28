'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Database, Zap, Shield, Music, BarChart3, Globe } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const enterpriseFeatures = [
  {
    icon: Building2,
    title: 'Brand Portal & Sonic DNA',
    description: 'Centralized workspace for your brand sound. AI learns your preferences and ensures consistency across all campaigns.',
    features: [
      'Private brand workspace with unlimited storage',
      'AI-powered brand sound profiling',
      'Centralized audio library & campaign organization',
      'Automatic on-brand/off-brand filtering',
      'Team access controls & permissions',
      'Version control & historical tracking',
    ],
  },
  {
    icon: Users,
    title: 'Team Management & Governance',
    description: '10 seats included, expandable at $40/seat. Enterprise-grade security, permissions, and compliance tools.',
    features: [
      '10 seats included ($40/seat for additional)',
      'Role-based permissions & custom roles',
      'SSO & SAML integration',
      'Audit logs & compliance reporting',
      'Approval workflows',
      'Department & agency partner organization',
    ],
  },
  {
    icon: Database,
    title: 'Unlimited Brand Asset Library',
    description: 'Never lose track of licensed music. All downloads, customizations, and exports automatically saved and organized.',
    features: [
      'Unlimited cloud storage',
      'Automatic backup of all exports',
      'Version history for all customizations',
      'Organized by campaign & project',
      'Easy retrieval & sharing',
      'Integration with existing asset management',
    ],
  },
  {
    icon: Zap,
    title: 'API Access & Integrations',
    description: 'Build Brandmusic into your existing workflows. Connect to Slack, Adobe, Google Drive, and more.',
    features: [
      'Full REST API access',
      'Webhook support for automation',
      'Slack, Adobe Premiere, Final Cut Pro',
      'Google Drive, Dropbox, Frame.io',
      'Custom integrations & bulk operations',
      'Developer documentation & support',
    ],
  },
]

const useCases = [
  {
    title: 'Global Brand Teams',
    description: 'Maintain sonic consistency across regions, markets, and campaigns with centralized asset management.',
    stats: [
      { label: 'Campaigns', value: '100+' },
      { label: 'Markets', value: '50+' },
      { label: 'Team Members', value: '10+ seats' },
    ],
  },
  {
    title: 'Creative Agencies',
    description: 'Manage multiple client brand sounds, streamline approvals, and deliver campaigns faster.',
    stats: [
      { label: 'Clients', value: '20+' },
      { label: 'Projects', value: '500+' },
      { label: 'Efficiency Gain', value: '60%' },
    ],
  },
]

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-purple/10 border border-electric-purple/20 rounded-full text-sm font-medium mb-8 backdrop-blur-xl">
              <Building2 className="w-4 h-4 text-electric-purple/80" />
              <span className="text-electric-purple/90">Enterprise Solutions</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white leading-[1.1]">
              Scale Your Brand Sound
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">Operations</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-12">
              Advanced tools, team management, and dedicated support for agencies and brands managing complex sonic ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-electric-blue to-electric-purple hover:shadow-xl hover:shadow-electric-blue/30">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:border-white/40">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Everything your team needs to manage brand sound at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-electric-blue" />
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-3 text-white">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent via-[#0A0515]/30 to-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
              Built for Scale
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Trusted by teams managing complex brand sound ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full">
                  <h3 className="font-display font-bold text-2xl mb-4 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-white/70 mb-8">
                    {useCase.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-display font-bold text-2xl text-electric-blue mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/50">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-white/10 to-white/5">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl mb-4 text-white">
                Premium Services for Enterprise Clients
              </h2>
              <p className="text-white/70 text-lg">
                Beyond our platform, we offer custom sonic solutions for brands that need something truly unique.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Music className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Custom Music Commissions</h3>
                  <p className="text-sm text-white/60">Original compositions tailored to your brand</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-electric-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Sonic Branding Packages</h3>
                  <p className="text-sm text-white/60">Complete sonic identity systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Audio Logo Creation</h3>
                  <p className="text-sm text-white/60">Memorable sonic signatures</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-electric-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Brand Sound Strategy</h3>
                  <p className="text-sm text-white/60">Strategic sonic identity consultation</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white/20 hover:border-white/40">
                  View All Services
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent via-[#0A0515]/20 to-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4 text-white">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Built with security and compliance at the core
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'SOC 2 Type II', desc: 'Certified' },
              { title: 'GDPR', desc: 'Compliant' },
              { title: 'SSO/SAML', desc: 'Supported' },
              { title: '99.9% Uptime', desc: 'SLA' },
            ].map((item) => (
              <Card key={item.title} className="text-center p-6">
                <Shield className="w-10 h-10 text-electric-blue mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-purple/5 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-5xl mb-6 text-white leading-[1.1]">
            Ready to scale your
            <br />
            <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">brand sound operations?</span>
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Talk to our team about Enterprise pricing and custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-electric-blue to-electric-purple hover:shadow-xl hover:shadow-electric-blue/30">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 hover:border-white/40">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
