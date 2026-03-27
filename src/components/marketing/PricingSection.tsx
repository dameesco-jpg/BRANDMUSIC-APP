'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Button'
import Card from '../ui/Card'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for exploring our catalog',
    features: [
      'Browse 2,500+ tracks',
      'AI-powered search',
      'Unlimited video sync',
      'Watermarked downloads',
    ],
    cta: 'Start Browsing',
    href: '/library',
  },
  {
    name: 'Pro',
    price: '$45',
    period: 'per seat/month',
    description: 'For music supervisors & producers',
    features: [
      'Everything in Free',
      'Unlimited clean downloads',
      'Full stem access',
      'Stem Studio customization',
    ],
    cta: 'Start Pro Trial',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual contract',
    description: 'For agencies & brands',
    features: [
      'Everything in Pro',
      '10 seats included',
      'Brand Portal & Sonic DNA',
      'API access',
    ],
    cta: 'Contact Sales',
    href: '/enterprise',
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Browse free, subscribe for unlimited downloads, license per project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-8 h-full flex flex-col ${
                  plan.highlighted ? 'border-electric-blue shadow-glow-lg' : ''
                }`}
              >
                <h3 className="font-display font-bold text-2xl mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-5xl">
                      {plan.price}
                    </span>
                    <span className="text-text-tertiary text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary mb-6">
                  {plan.description}
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href={plan.href}>
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    fullWidth
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              View Full Pricing
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
