'use client'

import { useState } from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Check, Sparkles, Zap, Crown, ArrowRight, X, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out the platform',
    icon: Sparkles,
    color: 'from-electric-cyan/60 to-electric-blue/60',
    features: [
      'Browse 50,000+ tracks',
      'AI-powered search',
      'Video sync preview',
      'Watermarked downloads',
      'Community support',
    ],
    cta: 'Start Free',
    ctaLink: '/signup',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$45',
    period: 'per seat/month',
    description: 'For agencies and creative teams',
    icon: Zap,
    color: 'from-electric-blue/60 to-electric-purple/60',
    features: [
      'Everything in Free',
      'Unlimited downloads',
      'Full stem access',
      'Commercial licensing (pay-per-use)',
      'Remove watermarks',
      'Team collaboration',
      'Priority support',
      'Advanced AI features',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations',
    icon: Crown,
    color: 'from-electric-purple/60 to-violet-500/60',
    features: [
      'Everything in Pro',
      'Custom music commissions',
      'Sonic branding packages',
      'Dedicated account manager',
      'Custom licensing terms',
      'API access for live commerce',
      'SSO & advanced security',
      'White-label options',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false,
  },
]

const faqs = [
  {
    question: 'What happens after my free trial ends?',
    answer: 'Your free trial lasts 14 days. After that, you can choose to upgrade to a paid plan or continue with the free tier with limited features.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! You can cancel your subscription at any time from your account settings. There are no long-term commitments or cancellation fees.',
  },
  {
    question: 'How does pay-per-use licensing work?',
    answer: 'Pro plan members pay a monthly platform fee ($45/seat) for unlimited access to browse, download, and preview tracks. When you\'re ready to use a track commercially, you purchase a license separately based on your usage needs.',
  },
  {
    question: 'What types of licenses do you offer?',
    answer: 'We offer commercial licenses that cover usage across all platforms including paid advertising, social media, broadcast, and more. Enterprise plans include custom licensing terms.',
  },
  {
    question: 'How does the API for live commerce work?',
    answer: 'Enterprise clients get API access to integrate our music library directly into their e-commerce platforms, live shopping streams, and product pages. The API allows real-time track selection, automated licensing, and usage analytics.',
  },
  {
    question: 'Do you offer team/multi-seat pricing?',
    answer: 'Yes! Pro plans are billed per seat/month. Contact our sales team for volume discounts on 10+ seats.',
  },
  {
    question: 'Can I use the music in client projects?',
    answer: 'Absolutely. Our Pro and Enterprise licenses allow you to use tracks in client work. Each download includes full documentation for your records.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for Enterprise customers.',
  },
]

const comparisonFeatures = [
  { name: 'AI-Powered Search', free: true, pro: true, enterprise: true },
  { name: 'Browse 50,000+ Tracks', free: true, pro: true, enterprise: true },
  { name: 'Video Sync Tool', free: true, pro: true, enterprise: true },
  { name: 'Watermarked Downloads', free: true, pro: false, enterprise: false },
  { name: 'Unlimited Downloads', free: false, pro: true, enterprise: true },
  { name: 'Commercial Licensing (Pay-Per-Use)', free: false, pro: true, enterprise: true },
  { name: 'Full Stem Access', free: false, pro: true, enterprise: true },
  { name: 'Team Collaboration', free: false, pro: true, enterprise: true },
  { name: 'Priority Support', free: false, pro: true, enterprise: true },
  { name: 'API for Live Commerce', free: false, pro: false, enterprise: true },
  { name: 'Custom Music Commissions', free: false, pro: false, enterprise: true },
  { name: 'Dedicated Account Manager', free: false, pro: false, enterprise: true },
  { name: 'SSO & Advanced Security', free: false, pro: false, enterprise: true },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-electric-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-electric-blue/80" />
            <span className="text-electric-blue/90">Simple, Transparent Pricing</span>
          </div>
          
          <h1 className="font-display font-bold text-[48px] md:text-[64px] mb-6 text-white leading-[1.1]">
            Choose Your Plan
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-purple text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-purple text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Popular badge */}
                {pla
