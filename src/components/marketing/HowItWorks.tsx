'use client'

import { motion } from 'framer-motion'
import { Search, Video, Sliders, FileText } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Use AI search to find tracks that match your vision. Describe what you need in natural language—our AI understands mood, energy, and context.',
  },
  {
    number: '02',
    icon: Video,
    title: 'Validate',
    description: 'Upload your video and test tracks instantly. See how music works with your content before licensing. Share synced previews with your team.',
  },
  {
    number: '03',
    icon: Sliders,
    title: 'Customize',
    description: 'Adjust individual stems to perfect the mix. Control drums, bass, melody, and vocals independently. Create exactly the sound you need.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'License',
    description: 'Get transparent pricing with no hidden fees. Request a custom quote for commercial licensing based on your specific usage, territory, and duration.',
  },
]

const features = [
  {
    icon: Search,
    title: 'Export & License',
    description: 'Download unwatermarked tracks and submit licensing requests for commercial use.',
  },
  {
    icon: Video,
    title: 'Build Campaigns',
    description: 'Organize tracks into campaign kits. Collaborate with teams and manage approvals.',
  },
  {
    icon: Sliders,
    title: 'Store in Portal',
    description: 'Enterprise clients store all licensed tracks in their private Brand Portal.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From discovery to licensing in four simple steps
          </p>
        </motion.div>

        {/* Main Workflow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-electric-blue/50 to-transparent"></div>
              )}

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl mb-4">
                  <step.icon className="w-8 h-8 text-electric-blue" />
                </div>
                <div className="text-sm text-electric-blue font-mono font-bold mb-2">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-surface-elevated rounded-xl border border-white/10 hover:border-electric-blue/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-electric-blue mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
