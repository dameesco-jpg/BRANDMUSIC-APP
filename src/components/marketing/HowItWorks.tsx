'use client'

import { motion } from 'framer-motion'
import { Search, Video, Sliders, Download, FileCheck, Building2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Search with AI',
    description: 'Use natural language or paste Spotify/YouTube links. Find tracks that match your creative vision.',
    color: 'electric-blue',
  },
  {
    number: '02',
    icon: Video,
    title: 'Validate with Video',
    description: 'Upload your edit and test music against picture. Swap tracks in real-time to find the perfect fit.',
    color: 'electric-cyan',
  },
  {
    number: '03',
    icon: Sliders,
    title: 'Customize Stems',
    description: 'Access stems for free. Customize and export modified versions using tokens.',
    color: 'electric-purple',
  },
  {
    number: '04',
    icon: Download,
    title: 'Export & License',
    description: 'Export your edits with tokens. Submit licensing requests for commercial use.',
    color: 'electric-pink',
  },
  {
    number: '05',
    icon: FileCheck,
    title: 'Build Campaigns',
    description: 'Organize tracks into campaign kits. Collaborate with teams and manage approvals.',
    color: 'electric-blue',
  },
  {
    number: '06',
    icon: Building2,
    title: 'Store in Portal',
    description: 'Enterprise clients store all licensed assets in their private Brand Portal.',
    color: 'electric-purple',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 overflow-hidden bg-surface">
      <div className="absolute inset-0 noise-texture"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider">
              Workflow
            </span>
            <h2 className="font-display font-bold text-display-md md:text-display-lg mt-4 mb-6">
              From discovery to delivery
              <br />
              <span className="gradient-blue-purple text-gradient">in six simple steps</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A streamlined workflow designed for modern creative teams
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative bg-surface-elevated rounded-2xl p-8 border border-white/5 h-full hover:border-white/10 transition-all group">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-electric-blue to-electric-purple rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-glow-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className={`w-14 h-14 rounded-xl bg-${step.color}/10 flex items-center justify-center text-${step.color} group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-3 text-white group-hover:text-electric-blue transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (except last in row) */}
                {index % 3 !== 2 && index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-electric-blue/50 to-transparent"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">
            Ready to streamline your music workflow?
          </p>
          <button className="px-8 py-4 bg-electric-blue text-black font-semibold rounded-lg hover:bg-electric-cyan transition-all hover:shadow-glow-sm text-lg">
            Start Free with 2,500 Tokens
          </button>
        </motion.div>
      </div>
    </section>
  )
}
