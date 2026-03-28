'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import AudioPlayer from '@/components/AudioPlayer'
import { Search, Play, Heart, Sparkles } from 'lucide-react'

type Track = {
  id: string
  title: string
  artist: string
  genre: string | null
  mood: string | null
  energy_level: string | null
  bpm: number | null
  duration: number | null
  cover_image_url: string | null
  file_url: string
}

export default function LibraryPage() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [selectedMood, setSelectedMood] = useState<string>('all')
  const [useAI, setUseAI] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

  const genres = ['all', 'Ambient', 'Hip Hop', 'Electronic', 'Pop', 'Indie', 'R&B']
  const moods = ['all', 'Sophisticated', 'Confident', 'Optimistic', 'Uplifting', 'Mysterious', 'Peaceful', 'Energetic', 'Introspective', 'Warm', 'Ethereal', 'Melancholic', 'Hypnotic']

  const exampleQueries = [
    'Confident but not aggressive for a tech startup',
    'Luxury spa background music, calm and sophisticated',
    'Upbeat workout motivation without vocals',
  ]

  useEffect(() => {
    fetchTracks()
  }, [])

  useEffect(() => {
    if (useAI && searchQuery.trim().length > 0) {
      performAISearch()
    } else {
      filterTracks()
    }
  }, [searchQuery, selectedGenre, selectedMood, tracks, useAI])

  async function fetchTracks() {
    try {
      const { data, error } = await supabase.from('tracks').select('*').order('created_at', { ascending: false })
      if (error) throw error
      setTracks(data || [])
      setFilteredTracks(data || [])
    } catch (error) {
      console.error('Error fetching tracks:', error)
    } finally {
      setLoading(false)
    }
  }

  async function performAISearch() {
    setSearching(true)
    try {
      const response = await fetch('/api/ai-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      })
      const data = await response.json()
      setFilteredTracks(data.tracks || [])
    } catch (error) {
      console.error('AI search error:', error)
      filterTracks()
    } finally {
      setSearching(false)
    }
  }

  function filterTracks() {
    let filtered = tracks
    if (searchQuery && !useAI) {
      filtered = filtered.filter(track =>
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(track => track.genre === selectedGenre)
    }
    if (selectedMood !== 'all') {
      filtered = filtered.filter(track => track.mood === selectedMood)
    }
    setFilteredTracks(filtered)
  }

  function formatDuration(seconds: number | null) {
    if (!seconds) return '--:--'
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-white text-center text-base">Loading tracks...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="font-display font-bold text-[28px] md:text-[36px] mb-3 text-white leading-[1.2]">
              AI-Powered Music Search
            </h1>
            <p className="text-base md:text-lg text-text-secondary">Describe what you need in natural language</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder="e.g., 'Confident but not aggressive for a tech startup'"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setUseAI(e.target.value.length > 10)
                }}
                className="w-full pl-12 pr-12 py-3 bg-surface-elevated border border-white/10 rounded-lg text-white placeholder:text-text-tertiary focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 text-base transition-all"
              />
              {useAI && <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-electric-blue animate-pulse" />}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-text-tertiary">Try:</span>
              {exampleQueries.map((example, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSearchQuery(example)
                    setUseAI(true)
                  }}
                  className="text-sm px-3 py-1.5 bg-surface-elevated border border-white/10 rounded-full text-text-secondary hover:text-electric-blue hover:border-electric-blue/30 transition-all"
                >
                  {example}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="px-4 py-2 bg-surface-elevated border border-white/10 rounded-lg text-white text-sm focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all">
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre === 'all' ? 'All Genres' : genre}</option>
                ))}
              </select>

              <select value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)} className="px-4 py-2 bg-surface-elevated border border-white/10 rounded-lg text-white text-sm focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all">
                {moods.map(mood => (
                  <option key={mood} value={mood}>{mood === 'all' ? 'All Moods' : mood}</option>
                ))}
              </select>

              <div className="flex items-center gap-2 px-3 py-2">
                <span className="text-text-secondary text-sm">
                  {searching ? 'Searching...' : `${filteredTracks.length} ${filteredTracks.length === 1 ? 'track' : 'tracks'}`}
                </span>
                {useAI && !searching && (
                  <span className="px-2 py-1 text-xs bg-electric-blue/20 text-electric-blue rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI
                  </span>
                )}
              </div>
            </div>
          </div>

          {filteredTracks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary text-base">No tracks found. Try adjusting your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTracks.map((track) => (
                <div key={track.id} className="group bg-surface-elevated rounded-xl border border-white/10 overflow-hidden hover:border-electric-blue/30 transition-all">
                  <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 relative">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="flex items-center gap-0.5">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="w-1 bg-electric-blue rounded-full" style={{ height: `${Math.random() * 60 + 40}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button onClick={() => setCurrentTrack(track)} className="w-14 h-14 bg-electric-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-black ml-0.5" />
                      </button>
                    </div>
                    <button className="absolute top-3 right-3 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-base text-white mb-1 truncate">{track.title}</h3>
                    <p className="text-sm text-text-secondary mb-3 truncate">{track.artist}</p>
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      {track.genre && (
                        <span className="px-2 py-1 text-xs bg-electric-blue/20 text-electric-blue rounded-full">{track.genre}</span>
                      )}
                      {track.mood && (
                        <span className="px-2 py-1 text-xs bg-electric-purple/20 text-electric-purple rounded-full">{track.mood}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-text-tertiary">
                      <span>{track.bpm} BPM</span>
                      <span>{formatDuration(track.duration)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <AudioPlayer track={currentTrack} onClose={() => setCurrentTrack(null)} />
    </div>
  )
}
