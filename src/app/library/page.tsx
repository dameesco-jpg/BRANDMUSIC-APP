'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, SlidersHorizontal, Grid, List, Play, Heart, Plus, Download, Lock } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

const genres = ['All', 'Electronic', 'Ambient', 'Pop', 'Indie', 'Rock', 'Hip Hop', 'Classical']
const moods = ['All', 'Happy', 'Calm', 'Energetic', 'Dark', 'Uplifting', 'Melancholic', 'Confident']

const mockTracks = [
  {
    id: 1,
    title: 'Luxury Nights',
    artist: 'Modern Ambient',
    duration: '3:24',
    bpm: 110,
    key: 'Am',
    genre: 'Ambient',
    mood: ['Elegant', 'Sophisticated', 'Calm'],
    energy: 65,
  },
  {
    id: 2,
    title: 'Premium Flow',
    artist: 'Electronic Dreams',
    duration: '2:58',
    bpm: 120,
    key: 'C',
    genre: 'Electronic',
    mood: ['Uplifting', 'Modern', 'Premium'],
    energy: 75,
  },
  {
    id: 3,
    title: 'Serene Vista',
    artist: 'Ambient Collective',
    duration: '4:12',
    bpm: 95,
    key: 'Gm',
    genre: 'Ambient',
    mood: ['Peaceful', 'Refined', 'Spacious'],
    energy: 55,
  },
  {
    id: 4,
    title: 'Modern Elegance',
    artist: 'Minimal Beats',
    duration: '3:45',
    bpm: 105,
    key: 'Dm',
    genre: 'Electronic',
    mood: ['Sophisticated', 'Clean', 'Confident'],
    energy: 70,
  },
  {
    id: 5,
    title: 'Urban Rhythm',
    artist: 'City Sounds',
    duration: '3:15',
    bpm: 128,
    key: 'Em',
    genre: 'Hip Hop',
    mood: ['Energetic', 'Urban', 'Bold'],
    energy: 85,
  },
  {
    id: 6,
    title: 'Sunset Dreams',
    artist: 'Chill Collective',
    duration: '4:30',
    bpm: 90,
    key: 'F',
    genre: 'Indie',
    mood: ['Dreamy', 'Relaxed', 'Warm'],
    energy: 50,
  },
  {
    id: 7,
    title: 'Digital Horizon',
    artist: 'Synth Wave',
    duration: '3:10',
    bpm: 115,
    key: 'Bm',
    genre: 'Electronic',
    mood: ['Futuristic', 'Bright', 'Optimistic'],
    energy: 72,
  },
  {
    id: 8,
    title: 'Morning Light',
    artist: 'Acoustic Dreams',
    duration: '2:45',
    bpm: 80,
    key: 'G',
    genre: 'Pop',
    mood: ['Happy', 'Fresh', 'Uplifting'],
    energy: 68,
  },
]

export default function PublicLibraryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedMood, setSelectedMood] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  const filteredTracks = mockTracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         track.artist.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre
    const matchesMood = selectedMood === 'All' || track.mood.some(m => m.includes(selectedMood))
    
    return matchesSearch && matchesGenre && matchesMood
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="border-b border-white/5 bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Find Your Perfect Track
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Browse our entire catalog. Play previews instantly. Sign up to download and customize.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup">
                <Button size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Describe the sound you're looking for..."
                  className="w-full pl-12 pr-4 py-4 bg-surface-elevated border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-electric-blue/50 transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-3 rounded-lg transition-colors ${
                  showFilters ? 'bg-electric-blue/20 text-electric-blue' : 'bg-surface-elevated hover:bg-surface-hover'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>
              <div className="flex items-center bg-surface-elevated rounded-lg border border-white/10 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-electric-blue/20 text-electric-blue'
                      : 'text-text-tertiary hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list'
                      ? 'bg-electric-blue/20 text-electric-blue'
                      : 'text-text-tertiary hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-surface-elevated rounded-xl border border-white/10 grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Genre</label>
                  <select
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                    className="w-full px-3 py-2 bg-surface border border-white/10 rounded-lg text-white text-sm"
                  >
                    {genres.map(genre => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Mood</label>
                  <select
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    className="w-full px-3 py-2 bg-surface border border-white/10 rounded-lg text-white text-sm"
                  >
                    {moods.map(mood => (
                      <option key={mood} value={mood}>{mood}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => {
                      setSelectedGenre('All')
                      setSelectedMood('All')
                      setSearchQuery('')
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-text-secondary">
            {filteredTracks.length} tracks found
          </p>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group cursor-pointer">
                  {/* Waveform Preview */}
                  <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-lg mb-4 relative overflow-hidden flex items-center justify-center">
                    <div className="flex items-center gap-0.5 h-full p-4">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-electric-blue/50 rounded-full"
                          style={{ height: `${Math.random() * 60 + 40}%` }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-black ml-1" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-semibold text-white mb-1 truncate group-hover:text-electric-blue transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-text-tertiary mb-3">{track.artist}</p>

                  <div className="flex items-center justify-between text-xs text-text-tertiary mb-3">
                    <span>{track.duration}</span>
                    <span>{track.bpm} BPM</span>
                    <span>{track.key}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {track.mood.slice(0, 2).map((mood) => (
                      <span key={mood} className="px-2 py-0.5 text-xs bg-electric-blue/10 text-electric-blue rounded-full">
                        {mood}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className="flex-1 px-3 py-2 bg-electric-blue hover:bg-electric-cyan rounded-lg transition-colors text-sm font-semibold text-black flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group cursor-pointer hover:border-electric-blue/30">
                  <div className="flex items-center gap-6">
                    <button className="w-14 h-14 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-lg flex items-center justify-center hover:from-electric-blue/30 hover:to-electric-purple/30 transition-all flex-shrink-0">
                      <Play className="w-6 h-6 text-electric-blue" />
                    </button>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1 truncate group-hover:text-electric-blue transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-sm text-text-tertiary">{track.artist}</p>
                    </div>

                    <div className="hidden md:flex flex-wrap gap-2 w-64">
                      {track.mood.map((mood) => (
                        <span key={mood} className="px-2 py-1 text-xs bg-electric-blue/10 text-electric-blue rounded-full">
                          {mood}
                        </span>
                      ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-6 text-sm text-text-tertiary">
                      <span className="w-16">{track.duration}</span>
                      <span className="w-16">{track.bpm} BPM</span>
                      <span className="w-12">{track.key}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setShowSignupModal(true)}
                      >
                        <Lock className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-elevated rounded-2xl p-8 max-w-md w-full border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-electric-blue" />
            </div>
            <h2 className="font-display font-bold text-2xl mb-2">Sign Up to Download</h2>
            <p className="text-text-secondary mb-6">
              Create a free account to download tracks, customize stems, and access all features.
            </p>
            <div className="space-y-3">
              <Link href="/signup">
                <Button fullWidth size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" fullWidth size="lg">
                  Already have an account? Sign in
                </Button>
              </Link>
            </div>
            <button
              onClick={() => setShowSignupModal(false)}
              className="mt-4 text-sm text-text-tertiary hover:text-white transition-colors"
            >
              Continue browsing
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  )
}
