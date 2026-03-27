'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your
            <br />
            <span className="gradient-blue-purple text-gradient">Music Workflow?</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join hundreds of agencies and brands using AI to find perfect music faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/library">
              <Button variant="outline" size="lg">
                Browse Catalog
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-text-tertiary">
            No credit card required • Unlimited AI search • Free video sync
          </p>
        </motion.div>
      </div>
    </section>
  )
}
