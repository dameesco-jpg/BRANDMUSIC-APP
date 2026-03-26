'use client'

import { motion } from 'framer-motion'
import { Play, Sparkles, Wand2 } from 'lucide-react'
import Button from '../ui/Button'

const mockTracks = [
  { title: 'Luxury Nights', artist: 'Modern Ambient', genre: 'Ambient' },
  { title: 'Urban Flow', artist: 'City Sounds', genre: 'Hip Hop' },
  { title: 'Digital Dreams', artist: 'Synth Wave', genre: 'Electronic' },
  { title: 'Morning Light', artist: 'Acoustic Dreams', genre: 'Pop' },
  { title: 'Midnight Drive', artist: 'Retro Wave', genre: 'Electronic' },
  { title: 'Coastal Breeze', artist: 'Acoustic Waves', genre: 'Indie' },
  { title: 'Bass Drive', artist: 'Rhythm Lab', genre: 'Hip Hop' },
  { title: 'Serene Vista', artist: 'Ambient Collective', genre: 'Ambient' },
  { title: 'Premium Flow', artist: 'Electronic Dreams', genre: 'Electronic' },
]

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
          <a href="/signup">
            <Button size="lg" className="group">
              Start Free Trial
              <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </a>
          <a href="/library">
            <Button variant="outline" size="lg" className="group">
              <Play className="w-5 h-5" />
              Browse Music
            </Button>
          </a>
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

        {/* Hero Visual - Music Track Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-surface-elevated/50 p-8">
            <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
              {mockTracks.map((track, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="group relative aspect-square bg-surface-elevated rounded-xl border border-white/10 overflow-hidden hover:border-electric-blue/50 transition-all cursor-pointer"
                >
                  {/* Waveform Background */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center bg-gradient-to-br from-electric-blue/10 to-electric-purple/10">
                    <div className="flex items-center gap-0.5 h-full w-full">
                      {[...Array(12)].map((_, j) => (
                        <div
                          key={j}
                          className="flex-1 bg-electric-blue/40 rounded-full transition-all"
                          style={{ height: `${Math.random() * 60 + 40}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-0.5" />
                    </div>
                  </div>

                  {/* Track Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs font-semibold text-white truncate mb-1">
                      {track.title}
                    </div>
                    <div className="text-xs text-text-tertiary truncate mb-2">
                      {track.artist}
                    </div>
                    <div className="inline-block px-2 py-0.5 text-xs bg-electric-blue/20 text-electric-blue rounded-full">
                      {track.genre}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -left-6 w-32 h-32 bg-electric-blue/20 rounded-2xl backdrop-blur-sm border border-white/10 p-4 shadow-xl"
          >
            <div className="text-xs text-text-tertiary mb-2">AI Search</div>
            <div className="text-sm font-semibold text-white">Natural Language</div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-electric-purple/20 rounded-2xl backdrop-blur-sm border border-white/10 p-4 shadow-xl"
          >
            <div className="text-xs text-text-tertiary mb-2">Stem Studio</div>
            <div className="text-sm font-semibold text-white">Full Control</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
