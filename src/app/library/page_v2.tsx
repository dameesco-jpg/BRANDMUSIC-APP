'use client'

import { useState } from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Search, Play, Heart, Share2, MoreVertical, Clock, Sparkles, TrendingUp, Music, Filter } from 'lucide-react'

// Mock data - replace with real data
const genres = [
  'All Genres',
  'Electronic',
  'Hip Hop',
  'Rock',
  'Pop',
  'Jazz',
  'Classical',
  'Ambient',
  'Folk',
  'R&B',
]

const moods = [
  'Energetic',
  'Calm',
  'Uplifting',
  'Dark',
  'Emotional',
  'Confident',
  'Playful',
  'Dramatic',
]

const tracks = [
  {
    id: 1,
    title: 'Midnight Drive',
    artist: 'Neon Dreams',
    duration: '3:24',
    bpm: 120,
    genre: 'Electronic',
    mood: 'Energetic',
    waveform: '/waveforms/1.svg',
  },
  {
    id: 2,
    title: 'Ocean Breeze',
    artist: 'Coastal Sounds',
    duration: '4:12',
    bpm: 95,
    genre: 'Ambient',
    mood: 'Calm',
    waveform: '/waveforms/2.svg',
  },
  {
    id: 3,
    title: 'Urban Pulse',
    artist: 'City Lights',
    duration: '2:58',
    bpm: 140,
    genre: 'Hip Hop',
    mood: 'Confident',
    waveform: '/waveforms/3.svg',
  },
  {
    id: 4,
    title: 'Sunrise Acoustic',
    artist: 'Morning Glory',
    duration: '3:45',
    bpm: 88,
    genre: 'Folk',
    mood: 'Uplifting',
    waveform: '/waveforms/4.svg',
  },
  {
    id: 5,
    title: 'Neon Nights',
    artist: 'Synth Wave',
    duration: '4:02',
    bpm: 128,
    genre: 'Electronic',
    mood: 'Dark',
    waveform: '/waveforms/5.svg',
  },
  {
    id: 6,
    title: 'Corporate Rise',
    artist: 'Business Beat',
    duration: '2:34',
    bpm: 110,
    genre: 'Pop',
    mood: 'Confident',
    waveform: '/waveforms/6.svg',
  },
]

export default function BrowseMusicV2() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All Genres')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      {/* Hero Section with Search */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-electric-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium mb-6 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-electric-blue/80" />
              <span className="text-electric-blue/90">50,000+ Premium Tracks</span>
            </div>
            
            <h1 className="font-display font-bold text-[48px] md:text-[64px] mb-6 text-white leading-[1.1]">
              Browse Music
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              Talk to our AI like you'd talk to a music supervisor
            </p>

            {/* AI Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-cyan rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative flex items-center gap-4 p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Search className="w-6 h-6 text-electric-cyan flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Try: 'Confident but not aggressive for a tech startup...'"
                    className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl text-white font-medium hover:shadow-lg hover:shadow-electric-blue/50 transition-all">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filters - Moods */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood === selectedMood ? null : mood)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-xl ${
                  selectedMood === mood
                    ? 'bg-gradient-to-r from-electric-purple/40 to-electric-pink/40 border border-electric-purple/60 text-white'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Genre Filter */}
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-4 h-4 text-white/60" />
                    <h3 className="font-semibold text-white">Genre</h3>
                  </div>
                  <div className="space-y-2">
                    {genres.map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          selectedGenre === genre
                            ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending */}
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-white/60" />
                    <h3 className="font-semibold text-white">Trending</h3>
                  </div>
                  <p className="text-sm text-white/50">
                    Most popular tracks this week
                  </p>
                </div>
              </div>
            </aside>

            {/* Track List */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">All Tracks</h2>
                  <p className="text-sm text-white/50">{tracks.length} tracks found</p>
                </div>
              </div>

              <div className="space-y-3">
                {tracks.map((track, idx) => (
                  <div
                    key={track.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredTrack(track.id)}
                    onMouseLeave={() => setHoveredTrack(null)}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-electric-blue/0 via-electric-purple/30 to-electric-blue/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                    
                    {/* Track Card */}
                    <div className="relative flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                      {/* Play Button */}
                      <button className="relative w-12 h-12 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 hover:from-electric-blue/40 hover:to-electric-purple/40 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 border border-white/20">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </button>

                      {/* Track Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1 truncate">
                          {track.title}
                        </h3>
                        <p className="text-sm text-white/50 truncate">
                          {track.artist}
                        </p>
                      </div>

                      {/* Waveform Visualization */}
                      <div className="hidden md:flex items-center gap-1 flex-1 max-w-xs h-12">
                        {[...Array(40)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-electric-blue/40 to-electric-purple/40 rounded-full transition-all"
                            style={{
                              height: `${30 + Math.sin(i * 0.3) * 50}%`,
                              opacity: hoveredTrack === track.id ? 1 : 0.4,
                            }}
                          />
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="hidden lg:flex items-center gap-6 text-sm text-white/50">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {track.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Music className="w-4 h-4" />
                          {track.bpm} BPM
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-white/20">
                          <Heart className="w-4 h-4 text-white/60 hover:text-white" />
                        </button>
                        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-white/20">
                          <Share2 className="w-4 h-4 text-white/60 hover:text-white" />
                        </button>
                        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-white/20">
                          <MoreVertical className="w-4 h-4 text-white/60 hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl text-white font-medium transition-all">
                  Load More Tracks
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
