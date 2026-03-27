'use client'

import { motion } from 'framer-motion'
import { Search, Video, Sliders, FileText, Sparkles, Zap } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'AI-Powered Search',
    description: 'Describe what you need in natural language',
    example: '"Confident but not aggressive for a tech startup"',
    color: 'from-electric-blue to-electric-cyan',
  },
  {
    icon: Video,
    title: 'Free Video Sync',
    description: 'Test tracks against your footage instantly',
    example: 'Upload video, drag tracks, preview in real-time',
    color: 'from-electric-purple to-electric-pink',
  },
  {
    icon: Sliders,
    title: 'Stem Studio',
    description: 'Customize every element of any track',
    example: 'Adjust drums, bass, melody, vocals independently',
    color: 'from-electric-cyan to-electric-blue',
  },
  {
    icon: FileText,
    title: 'Transparent Licensing',
    description: 'Clear quotes, no hidden fees',
    example: 'Know costs upfront before committing',
    color: 'from-electric-pink to-electric-purple',
  },
  {
    icon: Sparkles,
    title: 'Brand Portal',
    description: 'Centralized hub for your brand sound',
    example: 'Team access, campaign organization, asset library',
    color: 'from-electric-blue to-electric-purple',
  },
  {
    icon: Zap,
    title: 'Custom Services',
    description: 'Original music and sonic branding',
    example: 'Audio logos, brand anthems, sonic strategy',
    color: 'from-electric-cyan to-electric-pink',
  },
]

export default function Features() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-blue/30 mb-6">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-electric-blue">Platform Capabilities</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Everything You Need,
            <br />
            <span className="gradient-blue-purple text-gradient">All in One Place</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Professional tools built for agencies, brands, and music supervisors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 bg-surface-elevated rounded-2xl border border-white/10 hover:border-electric-blue/30 transition-all h-full">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-electric-blue" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-electric-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary mb-4">
                  {feature.description}
                </p>

                {/* Example */}
                <div className="p-3 bg-surface rounded-lg border border-white/5">
                  <p className="text-sm text-text-tertiary italic">
                    {feature.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
