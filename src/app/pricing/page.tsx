'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const plans = [
  {
    name: 'Free',
    tagline: 'Try Before You Commit',
    price: '$0',
    period: 'forever',
    description: 'Perfect for exploring our catalog and testing tracks with your content.',
    features: [
      'Browse 2,500+ track catalog',
      'AI-powered search',
      'Unlimited video sync',
      'Download watermarked tracks (unlimited)',
      'Preview stems',
      'Email support',
    ],
    limitations: [
      'No clean downloads',
      'No commercial license',
      'Watermarked tracks only',
    ],
    cta: 'Start Browsing',
    highlighted: false,
  },
  {
    name: 'Pro',
    tagline: 'For Music Supervisors & Producers',
    price: '$45',
    period: 'per seat/month',
    description: 'Everything you need to find, customize, and license music for your projects.',
    features: [
      'Everything in Free, plus:',
      'Download unwatermarked tracks (unlimited)',
      'Full stem access & export',
      'Stem Studio customization',
      'Unlimited projects',
      'Advanced filters',
      'Priority support',
      'Licensing purchased separately',
    ],
    limitations: [],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    tagline: 'For Agencies & Brands',
    price: 'Custom',
    period: 'annual contract',
    description: 'Advanced features, team management, and dedicated support for organizations.',
    features: [
      'Everything in Pro, plus:',
      '10 seats included ($40/seat for additional)',
      'Brand Portal - centralized asset library',
      'Sonic DNA - AI brand sound profile',
      'Advanced collaboration tools',
      'Admin dashboard & analytics',
      'Custom integrations (Slack, Adobe, etc.)',
      'Brand asset library (unlimited storage)',
      'API access',
      'Dedicated account manager',
      'Quarterly strategy sessions',
      'SSO/SAML authentication',
      'Licensing purchased separately',
    ],
    limitations: [],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Do I need to pay for commercial licensing separately?',
    answer: 'Yes. Pro and Enterprise subscriptions give you access to download and customize tracks, but commercial licensing is purchased separately per project. Our licensing team will provide custom quotes based on your usage type, territory, duration, and exclusivity needs.',
  },
  {
    question: 'What are watermarked tracks?',
    answer: 'Watermarked tracks include a voice-over or audio marker every 15-20 seconds. This allows you to test tracks with your content for free, but prevents commercial use. Pro subscribers get unwatermarked downloads.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! Pro plans are month-to-month with no long-term commitment. Enterprise plans are annual contracts. You can cancel your Pro subscription at any time.',
  },
  {
    question: 'How does per-seat pricing work?',
    answer: 'Each seat gives one team member full access to Pro features. For Enterprise, 10 seats are included in your custom pricing. Additional seats are $40/month each.',
  },
  {
    question: 'What is included in a commercial license?',
    answer: 'Commercial licenses grant you the legal right to use music in your content. Pricing varies based on usage type (digital, broadcast, film), territory (local, national, global), duration (1 year, perpetual), and exclusivity. Contact our licensing team for a custom quote.',
  },
  {
    question: 'Can I try Pro before committing?',
    answer: 'Yes! We offer a 14-day free trial of Pro so you can test all features including unwatermarked downloads and stem customization.',
  },
  {
    question: 'What if I need custom music or sonic branding?',
    answer: 'We offer premium services including custom music commissions, sonic branding packages, audio logo creation, and brand sound strategy. Visit our Services page or contact our team for details.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Transparent Pricing for
              <br />
              <span className="gradient-blue-purple text-gradient">Every Team Size</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8">
              Browse free, subscribe for unlimited downloads, license per project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full flex flex-col ${
                    plan.highlighted ? 'border-electric-blue shadow-glow-lg' : ''
                  }`}
                >
                  {plan.badge && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-sm font-semibold rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="font-display font-bold text-2xl mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-tertiary text-sm mb-4">
                    {plan.tagline}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-5xl">
                        {plan.price}
                      </span>
                      <span className="text-text-tertiary">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6">
                    {plan.description}
                  </p>

                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    fullWidth
                    size="lg"
                    className="mb-8"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-text-tertiary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-tertiary">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-display font-bold text-2xl mb-4">
            About Commercial Licensing
          </h3>
          <p className="text-text-secondary text-lg mb-4">
            All plans require separate commercial licensing for business use. Licensing is purchased per-project with custom quotes based on your specific needs.
          </p>
          <p className="text-text-tertiary">
            Typical licensing ranges from $500 for social media campaigns to $50,000+ for exclusive brand anthems.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-white">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Browse our catalog free, or start a Pro trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Pro Trial
            </Button>
            <Button variant="outline" size="lg">
              Browse Free
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
