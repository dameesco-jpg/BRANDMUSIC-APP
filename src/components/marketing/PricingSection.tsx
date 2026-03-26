'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Users, Building } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const pricingTiers = [
  {
    name: 'Free',
    icon: Sparkles,
    price: '$0',
    description: 'Perfect for exploring and validating',
    badge: 'Start here',
    badgeColor: 'bg-success/20 text-success',
    features: [
      'Unlimited AI search',
      'Unlimited similarity search',
      'Unlimited video sync',
      'Access to raw stems',
      '2,500 free tokens on signup',
      'Basic project management',
    ],
    cta: 'Start Free',
    ctaVariant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Pro',
    icon: Users,
    price: '$49',
    period: '/month',
    description: 'For power users and small teams',
    badge: 'Most popular',
    badgeColor: 'bg-electric-blue/20 text-electric-blue',
    features: [
      'Everything in Free',
      'Full Stem Studio access',
      '5,000 tokens/month included',
      'Advanced AI tools',
      'Unlimited projects',
      'Team collaboration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Custom',
    description: 'For brands and large organizations',
    badge: 'Full platform',
    badgeColor: 'bg-electric-purple/20 text-electric-purple',
    features: [
      'Everything in Pro',
      'Private Brand Portal',
      'Sonic DNA system',
      'Advanced governance',
      'Team permissions',
      'Analytics & reporting',
      'API access',
      'Dedicated support',
      'Art of Sound integration',
    ],
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const,
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="font-display font-bold text-display-md md:text-display-lg mt-4 mb-6">
              Choose your plan
              <br />
              <span className="gradient-blue-purple text-gradient">scale as you grow</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Free discovery and validation. Pay only when you customize and export.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`h-full relative ${tier.popular ? 'border-electric-blue/50 shadow-glow-sm' : ''}`}
                hover={false}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-electric-blue text-black text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center">
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">
                        {tier.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-display font-bold text-white">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-text-secondary ml-1">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-text-secondary mb-6">
                    {tier.description}
                  </p>

                  <Button 
                    variant={tier.ctaVariant} 
                    fullWidth
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Token Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-surface-elevated rounded-2xl p-8 border border-white/10">
            <h4 className="font-display font-semibold text-xl mb-4 text-white">
              Token System
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-text-secondary">
              <div>
                <h5 className="font-semibold text-white mb-2">Free Actions</h5>
                <ul className="space-y-2 text-sm">
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
                    Raw stem access
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    Preview all edits
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Token Costs</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full"></div>
                    Export full track: 100 tokens
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full"></div>
                    Export cutdown: 50 tokens
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full"></div>
                    Export stems: 150 tokens
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full"></div>
                    AI-generated edit: 75 tokens
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-text-tertiary">
                <strong className="text-white">Important:</strong> Music licensing is always required for commercial use, separate from token costs. Tokens are only for customization and export.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
