'use client'

import { motion } from 'framer-motion'
import { Building2, Fingerprint, Shield, Users, BarChart3, Zap, Globe, Lock } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const enterpriseFeatures = [
  {
    icon: Building2,
    title: 'Brand Portal',
    description: 'Private workspace for all your brand audio assets. Centralized storage, governance, and easy access for your entire team.',
    features: [
      'Private brand workspace',
      'Centralized audio library',
      'Campaign organization',
      'Asset tagging and metadata',
      'Video testing environment',
      'Team access controls',
    ],
  },
  {
    icon: Fingerprint,
    title: 'Sonic DNA',
    description: 'Define and enforce your brand sound profile. AI filters ensure every new track aligns with your sonic identity.',
    features: [
      'Brand sound profiling',
      'AI-powered filtering',
      'Consistency enforcement',
      'Editable profiles',
      'Version control',
      'Historical tracking',
    ],
  },
  {
    icon: Shield,
    title: 'Advanced Governance',
    description: 'Enterprise-grade security, permissions, and compliance tools. Control who can access, edit, and license your assets.',
    features: [
      'Role-based permissions',
      'SSO & SAML integration',
      'Audit logs',
      'Approval workflows',
      'Asset locking',
      'Compliance reporting',
    ],
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage unlimited team members with granular permissions. Separate internal teams from agency partners.',
    features: [
      'Unlimited team seats',
      'Custom roles',
      'Department organization',
      'Agency partner access',
      'Invitation management',
      'Activity tracking',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Understand how your brand sound is used across campaigns. Track licensing, usage, and team activity.',
    features: [
      'Usage analytics',
      'License tracking',
      'Campaign reporting',
      'Token utilization',
      'Team activity metrics',
      'Custom dashboards',
    ],
  },
  {
    icon: Zap,
    title: 'API Access',
    description: 'Integrate Brandmusic into your existing workflows. Build custom solutions on top of our platform.',
    features: [
      'REST API access',
      'Webhook support',
      'Custom integrations',
      'Bulk operations',
      'Developer documentation',
      'Dedicated support',
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
      { label: 'Team Members', value: 'Unlimited' },
    ],
  },
  {
    title: 'Agency Networks',
    description: 'Give your teams and clients a unified platform for discovery, validation, and licensing.',
    stats: [
      { label: 'Clients', value: 'Unlimited' },
      { label: 'Projects', value: 'Unlimited' },
      { label: 'Collaboration', value: 'Real-time' },
    ],
  },
  {
    title: 'Creative Production',
    description: 'Streamline music selection from brief to final delivery with integrated workflow tools.',
    stats: [
      { label: 'Efficiency', value: '10x faster' },
      { label: 'Licensing', value: 'Streamlined' },
      { label: 'Assets', value: 'Centralized' },
    ],
  },
]

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="absolute inset-0 noise-texture"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-purple/30 mb-8">
              <Building2 className="w-4 h-4 text-electric-purple" />
              <span className="text-sm font-medium text-electric-purple">Enterprise Solutions</span>
            </div>
            
            <h1 className="font-display font-bold text-display-lg md:text-display-xl mb-6">
              <span className="gradient-blue-purple text-gradient">
                Brand Portal
              </span>
              <br />
              for enterprise sound management
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12">
              Centralized audio asset management, Sonic DNA, governance, and analytics for global brands and agencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-display-md mb-4">
              Enterprise-grade capabilities
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to manage brand sound at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonic DNA Deep Dive */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-electric-purple/20 text-electric-purple rounded-full text-sm font-semibold mb-6">
                <Fingerprint className="w-4 h-4" />
                Sonic DNA
              </div>
              
              <h2 className="font-display font-bold text-display-md mb-6">
                Define your brand sound
              </h2>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Sonic DNA is your brand's sound profile—a set of rules that ensures every piece of music aligns with your sonic identity. Our AI uses these rules to filter search results, recommend tracks, and maintain consistency across all campaigns.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-purple/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-electric-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Global Consistency</h4>
                    <p className="text-text-secondary text-sm">Ensure all markets and regions follow your brand sound guidelines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-purple/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-electric-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">AI-Powered Filtering</h4>
                    <p className="text-text-secondary text-sm">Automatically filter search results to match your sound profile</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-purple/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-electric-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Version Control</h4>
                    <p className="text-text-secondary text-sm">Track changes to your sound profile over time</p>
                  </div>
                </div>
              </div>

              <Button variant="outline">
                Learn More About Sonic DNA
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden bg-surface-elevated border-white/10">
                <div className="aspect-square bg-gradient-to-br from-electric-purple/20 via-surface to-surface-elevated p-8">
                  {/* Mock Sonic DNA visualization */}
                  <div className="w-full h-full rounded-2xl border border-electric-purple/30 bg-surface/50 p-6 flex items-center justify-center">
                    <Fingerprint className="w-32 h-32 text-electric-purple/30" />
                  </div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-electric-purple to-electric-pink opacity-20 blur-xl -z-10"></div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-display-md mb-4">
              Built for enterprise scale
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Trusted by global brands and agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {useCase.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {useCase.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-display font-bold text-electric-blue mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-text-tertiary">
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

      {/* Security & Compliance */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-display-md mb-4">
              Enterprise security & compliance
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
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
              <Card key={item.title} className="text-center">
                <Shield className="w-10 h-10 text-electric-blue mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-text-tertiary text-sm">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 bg-surface">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-display-md mb-6">
            Ready to scale your
            <br />
            <span className="gradient-blue-purple text-gradient">brand sound operations?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Talk to our team about Enterprise pricing and custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
