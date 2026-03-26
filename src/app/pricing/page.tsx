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
