'use client'

import { motion } from 'framer-motion'
import { Play, Sparkles, Wand2 } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      <div className="absolute inset-0 noise-texture"></div>
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-blue/30 mb-8">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-electric-blue">AI-Powered Sound Operating System</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-display-xl md:text-display-lg mb-6 leading-none"
        >
          <span className="gradient-blue-purple text-gradient">
            Discover music
          </span>
          <br />
          <span className="text-white">
            that sounds like your brand
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12"
        >
          The AI-powered platform for brands and agencies to discover, customize, validate, and license music—all in one unified workflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="group">
            Start Free with 2,500 Tokens
            <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Play className="w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm text-text-tertiary"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Unlimited search</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Free video sync</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>No credit card required</span>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-elevated">
            {/* Mock interface preview */}
            <div className="aspect-video bg-gradient-to-br from-surface via-surface-elevated to-surface p-8">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Search input mockup */}
                <div className="col-span-3 bg-background/50 rounded-xl p-6 border border-white/5">
                  <div className="h-4 bg-electric-blue/30 rounded w-2/3 mb-4"></div>
                  <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                </div>
                
                {/* Results mockup */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-background/30 rounded-xl p-4 border border-white/5">
                    <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-lg mb-3"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-full mb-2"></div>
                    <div className="h-2 bg-text-muted/20 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink opacity-20 blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
