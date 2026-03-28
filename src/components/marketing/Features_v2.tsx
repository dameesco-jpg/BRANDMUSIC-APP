'use client'

import { Sparkles, Music, Download, Sliders, Wand2, Users } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Search',
    description: 'Talk to our AI like you\'d talk to a music supervisor. "I need something confident but not aggressive" or "warm, nostalgic, with forward momentum"—the AI gets it.',
    color: 'from-electric-blue to-electric-cyan',
    gradient: 'from-electric-blue/20 to-electric-cyan/20',
  },
  {
    icon: Music,
    title: 'Curated Catalog',
    description: 'Premium production music across every genre and mood. Professionally produced, cleared for commercial use, updated weekly.',
    color: 'from-electric-purple to-fuchsia-500',
    gradient: 'from-electric-purple/20 to-fuchsia-500/20',
  },
  {
    icon: Download,
    title: 'Stem-Level Control',
    description: 'Full access to separated stems on every track. Give your post team complete flexibility to mix for brand fit and media requirements.',
    color: 'from-electric-cyan to-electric-blue',
    gradient: 'from-electric-cyan/20 to-electric-blue/20',
  },
  {
    icon: Sliders,
    title: 'Stakeholder Presentation Tools',
    description: 'Sync tracks to client footage before licensing. Present multiple options with context. Get approvals faster with built-in preview tools.',
    color: 'from-pink-500 to-fuchsia-600',
    gradient: 'from-pink-500/20 to-fuchsia-600/20',
  },
  {
    icon: Wand2,
    title: 'Free Video Sync',
    description: 'Upload your video and instantly preview tracks synced to your footage—before you even license. Present multiple options to clients.',
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share playlists, leave comments, and collaborate with your team. Keep everyone aligned on the sonic direction.',
    color: 'from-teal-500 to-cyan-500',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
]

export default function FeaturesV2() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-purple/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-electric-purple" />
            <span className="bg-gradient-to-r from-electric-purple to-electric-pink bg-clip-text text-transparent">
              Everything You Need
            </span>
          </div>
          <h2 className="font-display font-bold text-[40px] md:text-[56px] mb-6 text-white leading-[1.1]">
            Built for Agency Workflows
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From campaign concepting to final delivery, tools designed for creative directors, producers, and brand teams.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 ${
                idx === 0 ? 'lg:col-span-2' : ''
              } ${idx === 3 ? 'lg:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Animated border glow */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                  <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                </div>
                
                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Hover indicator dot */}
              <div className={`absolute top-6 right-6 w-2 h-2 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
