'use client'

import { motion } from 'framer-motion'
import { Search, Link2, Video, Sliders, Package, Users, FileText, BarChart3, Play } from 'lucide-react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const features = [
  {
    id: 'ai-search',
    icon: Search,
    title: 'AI Search',
    tagline: 'Natural language music discovery',
    description: 'Describe what you need in plain English. Our AI understands context, mood, energy, and creative intent to surface the perfect tracks.',
    features: [
      'Natural language search queries',
      'AI-powered semantic understanding',
      'Mood, energy, and genre filtering',
      'Real-time autocomplete suggestions',
      'Contextual relevance ranking',
      'Search refinement recommendations',
    ],
    gradient: 'from-electric-blue to-electric-cyan',
  },
  {
    id: 'similarity',
    icon: Link2,
    title: 'Similarity Search',
    tagline: 'Find tracks like your references',
    description: 'Paste Spotify or YouTube links and instantly discover similar tracks in our catalog. Perfect for matching existing creative directions.',
    features: [
      'Spotify link integration',
      'YouTube link support',
      'Audio embedding analysis',
      'Multi-reference blending',
      'Similarity scoring',
      'Saveable moodboards',
    ],
    gradient: 'from-electric-cyan to-electric-blue',
  },
  {
    id: 'video-sync',
    icon: Video,
    title: 'Video Sync Studio',
    tagline: 'Validate music against picture',
    description: 'Upload your edit and test music in real-time. Swap tracks instantly, scrub timelines, and make confident decisions before licensing.',
    features: [
      'Drag-and-drop video upload',
      'Real-time playback sync',
      'Instant track swapping',
      'Timeline scrubbing',
      'AI sync suggestions',
      'Export validation reports',
    ],
    gradient: 'from-electric-purple to-electric-pink',
  },
  {
    id: 'stem-studio',
    icon: Sliders,
    title: 'Stem Studio',
    tagline: 'Customize music at the stem level',
    description: 'Access individual stems, adjust levels, mute instruments, trim sections, and create custom edits. Export modified versions with tokens.',
    features: [
      'Drums, bass, melody, vocals, FX stems',
      'Mute and solo controls',
      'Volume and pan adjustment',
      'Section trimming and looping',
      'Auto-generated cutdowns',
      'Token-based exports',
    ],
    gradient: 'from-electric-pink to-electric-purple',
  },
  {
    id: 'campaign-builder',
    icon: Package,
    title: 'Campaign Builder',
    tagline: 'Organize music by project',
    description: 'Create projects for campaigns, organize tracks into hero/alt/cutdown roles, add notes, and build comprehensive music kits.',
    features: [
      'Project organization',
      'Track role assignment',
      'Version control',
      'Team collaboration',
      'Campaign notes',
      'Export campaign kits',
    ],
    gradient: 'from-electric-blue to-electric-purple',
  },
  {
    id: 'collaboration',
    icon: Users,
    title: 'Team Collaboration',
    tagline: 'Work together seamlessly',
    description: 'Invite team members, comment on tracks, request approvals, and maintain a single source of truth for music decisions.',
    features: [
      'Team invites',
      'Role-based permissions',
      'Comments and annotations',
      'Approval workflows',
      'Activity logs',
      'Shared workspaces',
    ],
    gradient: 'from-electric-purple to-electric-blue',
  },
  {
    id: 'licensing',
    icon: FileText,
    title: 'Licensing Workflow',
    tagline: 'Streamlined rights management',
    description: 'Submit licensing requests directly from the platform. Track usage, territories, media channels, and get clear pricing.',
    features: [
      'In-platform licensing requests',
      'Territory and usage selection',
      'Rights clearance tracking',
      'Quote generation',
      'License documentation',
      'Usage reporting',
    ],
    gradient: 'from-electric-pink to-electric-cyan',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Insights',
    tagline: 'Understand your music usage',
    description: 'Track searches, exports, licensing, and team activity. Enterprise clients get advanced reporting and usage analytics.',
    features: [
      'Search analytics',
      'Token usage tracking',
      'Team activity monitoring',
      'License status reporting',
      'Export history',
      'Custom reports (Enterprise)',
    ],
    gradient: 'from-electric-cyan to-electric-purple',
  },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="absolute inset-0 noise-texture"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-electric-blue/30 mb-8">
              <Play className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">Complete Music Workflow Platform</span>
            </div>
            
            <h1 className="font-display font-bold text-display-lg md:text-display-xl mb-6">
              <span className="gradient-blue-purple text-gradient">
                AI-powered tools
              </span>
              <br />
              for every step of your workflow
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12">
              From discovery to delivery, Brandmusic provides intelligent features designed for modern creative teams working with brand sound.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Watch Product Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`relative py-32 ${index % 2 === 0 ? 'bg-background' : 'bg-surface'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 ? '' : 'lg:order-2'}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="font-display font-bold text-display-md mb-4">
                  {feature.title}
                </h2>
                
                <p className="text-xl text-electric-blue mb-6">
                  {feature.tagline}
                </p>
                
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="grid gap-3 mb-8">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-text-secondary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Button variant="outline">
                  Try {feature.title}
                </Button>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={index % 2 === 0 ? '' : 'lg:order-1'}
              >
                <Card className="relative overflow-hidden bg-surface-elevated border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-surface via-surface-elevated to-surface-hover p-8 flex items-center justify-center">
                    {/* Mock interface preview */}
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${feature.gradient} opacity-10`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-white/20" />
                    </div>
                  </div>
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl -z-10`}></div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Integration Section */}
      <section className="relative py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-display-md mb-6">
              Built for your workflow
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Brandmusic integrates seamlessly with the tools you already use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Premiere Pro', desc: 'Export timelines directly' },
              { name: 'Final Cut Pro', desc: 'Native integration' },
              { name: 'Slack', desc: 'Team notifications' },
              { name: 'Google Drive', desc: 'Asset storage' },
              { name: 'Dropbox', desc: 'Cloud sync' },
              { name: 'API Access', desc: 'Custom integrations' },
            ].map((integration) => (
              <Card key={integration.name} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-surface-hover mx-auto mb-4"></div>
                <h3 className="font-semibold text-white mb-2">
                  {integration.name}
                </h3>
                <p className="text-text-tertiary text-sm">
                  {integration.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-display-md mb-6">
            Ready to streamline your
            <br />
            <span className="gradient-blue-purple text-gradient">music workflow?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Start free with 2,500 tokens. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
