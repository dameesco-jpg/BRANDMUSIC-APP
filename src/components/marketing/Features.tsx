'use client'

import { motion } from 'framer-motion'
import { Search, Video, Sliders, Package, Fingerprint, Building2 } from 'lucide-react'
import Card from '../ui/Card'

const features = [
  {
    icon: Search,
    title: 'AI Search & Similarity',
    description: 'Natural language search and reference-based discovery. Paste Spotify or YouTube links to find similar tracks.',
    gradient: 'from-electric-blue to-electric-cyan',
    badge: 'Free',
  },
  {
    icon: Video,
    title: 'Video Sync Studio',
    description: 'Upload edits and validate music against picture in real-time. Swap tracks instantly to find the perfect fit.',
    gradient: 'from-electric-purple to-electric-pink',
    badge: 'Free',
  },
  {
    icon: Sliders,
    title: 'Stem Studio',
    description: 'Customize music at the stem level. Mute, solo, adjust, and rearrange. Export modified versions with tokens.',
    gradient: 'from-electric-cyan to-electric-blue',
    badge: 'Token-based',
  },
  {
    icon: Package,
    title: 'Campaign Builder',
    description: 'Organize tracks into projects. Create campaign kits, collaborate with teams, and manage versions.',
    gradient: 'from-electric-pink to-electric-purple',
    badge: 'Pro',
  },
  {
    icon: Fingerprint,
    title: 'Sonic DNA',
    description: 'Define your brand sound profile. AI filters ensure every track aligns with your sonic identity.',
    gradient: 'from-electric-blue to-electric-purple',
    badge: 'Enterprise',
  },
  {
    icon: Building2,
    title: 'Brand Portal',
    description: 'Centralized audio asset management. Secure storage, governance, team permissions, and analytics.',
    gradient: 'from-electric-purple to-electric-blue',
    badge: 'Enterprise',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider">
              Complete Workflow
            </span>
            <h2 className="font-display font-bold text-display-md md:text-display-lg mt-4 mb-6">
              Everything you need to
              <br />
              <span className="gradient-blue-purple text-gradient">master brand sound</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From discovery to delivery, Brandmusic provides intelligent tools for every step of your music workflow.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full group cursor-pointer">
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-surface-elevated rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display font-semibold text-xl text-white group-hover:text-electric-blue transition-colors">
                      {feature.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      feature.badge === 'Free' ? 'bg-success/20 text-success' :
                      feature.badge === 'Token-based' ? 'bg-electric-blue/20 text-electric-blue' :
                      'bg-electric-purple/20 text-electric-purple'
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
