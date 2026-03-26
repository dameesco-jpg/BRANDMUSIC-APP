'use client'

import { motion } from 'framer-motion'
import { Building2, Fingerprint, Shield, Users, Database, Zap, Globe, Lock, Music, BarChart3 } from 'lucide-react'
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
    description: '10 seats included, expandable at $40/seat. Manage your team with granular permissions and separate internal teams from agency partners.',
    features: [
      '10 seats included',
      'Additional seats $40/month',
      'Custom roles',
      'Department organization',
      'Agency partner access',
      'Activity tracking',
    ],
  },
  {
    icon: Database,
    title: 'Brand Asset Library',
    description: 'Unlimited cloud storage for all your approved tracks, exports, and customizations. Never lose track of your licensed music.',
    features: [
      'Unlimited storage',
      'Version history',
      'All exports saved automatically',
      'Customization backups',
      'Easy retrieval',
      'Organized by campaign',
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
      'Dedicated technical support',
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
  {
    title: 'Production Companies',
    description: 'Access premium music, customize on the fly, and license quickly for time-sensitive productions.',
    stats: [
      { label: 'Productions/Year', value: '200+' },
      { label: 'Music Tracks', value: '2,500+' },
      { label: 'Time Saved', value: '40%' },
    ],
  },
]

const integrations = [
  'Slack',
  'Adobe Premiere',
  'Final Cut Pro',
  'Google Drive',
  'Dropbox',
  'Frame.io',
  'Monday.com',
  'Asana',
]

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-blue/30 mb-8">
              <Building2 className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">Enterprise Solutions</span>
            </div>

            <h1 className="font-display font-bold text-display-lg md:text-display-xl mb-6">
              Scale Your Brand Sound
              <br />
              <span className="gradient-blue-purple text-gradient">Operations</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-12">
              Advanced tools, team management, and dedicated support for agencies and brands managing complex sonic ecosystems.
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

      {/* Enterprise Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything your team needs to manage brand sound at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <h3 className="font-display font-bold text-2xl mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-text-secondary mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-tertiary">
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

      {/* Use Cases */}
      <section className="py-20 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Built for Scale
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Trusted by teams managing complex brand sound ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full">
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-text-secondary mb-8">
                    {useCase.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-display font-bold text-2xl text-electric-blue mb-1">
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

      {/* Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4">
              Integrates With Your Workflow
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Connect Brandmusic to the tools your team already uses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <Card key={integration} className="p-6 text-center hover:border-electric-blue/30 transition-colors">
                <Globe className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                <div className="font-semibold text-white">{integration}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 border-t border-white/5 bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-surface-elevated to-surface">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl mb-4">
                Premium Services for Enterprise Clients
              </h2>
              <p className="text-text-secondary text-lg">
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
                  <p className="text-sm text-text-secondary">Original compositions tailored to your brand</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-electric-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Sonic Branding Packages</h3>
                  <p className="text-sm text-text-secondary">Complete sonic identity systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Audio Logo Creation</h3>
                  <p className="text-sm text-text-secondary">Memorable sonic signatures</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-electric-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Brand Sound Strategy</h3>
                  <p className="text-sm text-text-secondary">Strategic sonic identity consultation</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl mb-4">
              Enterprise-Grade Security
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
              <Card key={item.title} className="text-center p-6">
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
