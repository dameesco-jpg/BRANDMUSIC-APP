'use client'

import { motion } from 'framer-motion'
import { Check, X, Sparkles, Users, Building, Zap, Shield, Headphones } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const plans = [
  {
    name: 'Free',
    icon: Sparkles,
    price: '$0',
    period: 'forever',
    description: 'Perfect for exploring and validating music',
    features: [
      { text: 'Unlimited AI search', included: true },
      { text: 'Unlimited similarity search', included: true },
      { text: 'Unlimited video sync', included: true },
      { text: 'Access to raw stems', included: true },
      { text: '2,500 free tokens on signup', included: true },
      { text: 'Basic project management', included: true },
      { text: 'Stem customization', included: false },
      { text: 'Advanced AI tools', included: false },
      { text: 'Team collaboration', included: false },
      { text: 'Brand Portal', included: false },
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    icon: Users,
    price: '$49',
    period: 'per user/month',
    description: 'For power users and small teams',
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Full Stem Studio access', included: true },
      { text: '5,000 tokens/month included', included: true },
      { text: 'Advanced AI tools', included: true },
      { text: 'Unlimited projects', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Priority support', included: true },
      { text: 'Export templates', included: true },
      { text: 'Version control', included: true },
      { text: 'Brand Portal', included: false },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Custom',
    period: 'contact sales',
    description: 'For brands and large organizations',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Private Brand Portal', included: true },
      { text: 'Sonic DNA system', included: true },
      { text: 'Advanced governance', included: true },
      { text: 'Team permissions', included: true },
      { text: 'Analytics & reporting', included: true },
      { text: 'API access', included: true },
      { text: 'SSO & SAML', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'Art of Sound integration', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const tokenPackages = [
  { tokens: '2,500', price: '$25', perToken: '$0.01' },
  { tokens: '10,000', price: '$90', perToken: '$0.009', popular: true },
  { tokens: '25,000', price: '$200', perToken: '$0.008' },
  { tokens: '50,000', price: '$350', perToken: '$0.007' },
]

const addOns = [
  {
    icon: Zap,
    name: 'Token Packages',
    description: 'Purchase additional tokens as needed',
    startingAt: '$25',
  },
  {
    icon: Shield,
    name: 'License Management',
    description: 'Streamlined licensing workflow',
    startingAt: 'Included',
  },
  {
    icon: Headphones,
    name: 'Art of Sound Services',
    description: 'Custom music composition and production',
    startingAt: 'Custom',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="absolute inset-0 noise-texture"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="font-display font-bold text-display-lg md:text-display-xl mt-4 mb-6">
              Choose the plan that
              <br />
              <span className="gradient-blue-purple text-gradient">fits your workflow</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Start free with unlimited search and video sync. Upgrade when you're ready to customize and export.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-surface-elevated rounded-full p-2 border border-white/10">
              <button className="px-6 py-2 bg-electric-blue text-black font-semibold rounded-full">
                Monthly
              </button>
              <button className="px-6 py-2 text-text-secondary hover:text-white transition-colors">
                Annual (Save 20%)
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full relative ${plan.popular ? 'border-electric-blue/50 shadow-glow-md' : ''}`}
                  hover={false}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-electric-blue text-black text-sm font-semibold rounded-full shadow-glow-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center">
                        <plan.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-white">
                          {plan.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-5xl font-display font-bold text-white">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-text-tertiary mb-4">
                      {plan.period}
                    </p>
                    
                    <p className="text-text-secondary mb-6">
                      {plan.description}
                    </p>

                    <Button 
                      variant={plan.popular ? 'primary' : 'outline'} 
                      fullWidth
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-text-muted mt-0.5 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-text-secondary' : 'text-text-muted'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Packages */}
      <section className="relative py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-md mb-4">
              Token Packages
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Purchase token packages to export customized music. All plans can buy additional tokens.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {tokenPackages.map((pkg, index) => (
              <motion.div
                key={pkg.tokens}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`text-center ${pkg.popular ? 'border-electric-blue/50' : ''}`}
                  hover={false}
                >
                  {pkg.popular && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-xs font-semibold rounded-full">
                        Best Value
                      </span>
                    </div>
                  )}
                  <div className="font-display font-bold text-4xl text-white mb-2">
                    {pkg.tokens}
                  </div>
                  <div className="text-text-tertiary text-sm mb-4">tokens</div>
                  <div className="text-3xl font-bold text-electric-blue mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-text-tertiary text-sm mb-6">
                    {pkg.perToken} per token
                  </div>
                  <Button variant={pkg.popular ? 'primary' : 'outline'} fullWidth>
                    Purchase
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-surface-elevated rounded-2xl p-8 border border-white/10">
            <h4 className="font-display font-semibold text-xl mb-4 text-white">
              How Tokens Work
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-white mb-3">Free Actions (No Tokens)</h5>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    All search and discovery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    Video sync validation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    Access and preview raw stems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    Preview all customizations
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-3">Token Costs</h5>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex justify-between">
                    <span>Export full edited track</span>
                    <span className="text-electric-blue font-semibold">100 tokens</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Export cutdown (15-30s)</span>
                    <span className="text-electric-blue font-semibold">50 tokens</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Export modified stems</span>
                    <span className="text-electric-blue font-semibold">150 tokens</span>
                  </li>
                  <li className="flex justify-between">
                    <span>AI-generated edit</span>
                    <span className="text-electric-blue font-semibold">75 tokens</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-md mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Extend your capabilities with professional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center mb-4">
                    <addon.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {addon.description}
                  </p>
                  <div className="text-electric-blue font-semibold">
                    Starting at {addon.startingAt}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-md mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card hover={false}>
              <h3 className="font-semibold text-lg text-white mb-2">
                Do I need tokens to search and preview music?
              </h3>
              <p className="text-text-secondary">
                No! Search, similarity discovery, video sync, and stem previews are completely free. You only need tokens when you export customized versions.
              </p>
            </Card>

            <Card hover={false}>
              <h3 className="font-semibold text-lg text-white mb-2">
                What about music licensing?
              </h3>
              <p className="text-text-secondary">
                Licensing is always required for commercial use of music, separate from token costs. Tokens are only for customization and export. Our licensing workflow connects you with rights holders for proper clearance.
              </p>
            </Card>

            <Card hover={false}>
              <h3 className="font-semibold text-lg text-white mb-2">
                Can I access raw stems for free?
              </h3>
              <p className="text-text-secondary">
                Yes! You can download and use raw, unmodified stems without spending tokens. Tokens are only required when you customize stems and export modified versions.
              </p>
            </Card>

            <Card hover={false}>
              <h3 className="font-semibold text-lg text-white mb-2">
                What happens if I run out of tokens?
              </h3>
              <p className="text-text-secondary">
                You can continue using all free features (search, video sync, stem preview). When you're ready to export, simply purchase a token package that fits your needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-display-md mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Start free with 2,500 tokens. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free
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
