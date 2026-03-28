'use client'

import { useState } from 'react'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Search, Play, Clock, Music2, Filter, Heart } from 'lucide-react'
import { mockTracks } from '@/lib/mockTracks'
import FavoriteButton from '@/components/ui/FavoriteButton'
import AddToPlaylistButton from '@/components/ui/AddToPlaylistButton'
import { useFavorites } from '@/hooks/useFavorites'
import { usePlaylists } from '@/hooks/usePlaylists'
import { useAuth } from '@/contexts/AuthContext'

const moods = ['Energetic', 'Calm', 'Uplifting', 'Dark', 'Emotional', 'Confident', 'Playful', 'Dramatic']

export default function LibraryPage() {
  const { user } = useAuth()
  const { favorites } = useFavorites()
  const { playlists } = usePlaylists()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const filteredTracks = mockTracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         track.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesMood = !selectedMood || track.mood.includes(selectedMood)
    
    const matchesFavorites = !showFavoritesOnly || favorites.some(fav => fav.track_id === track.id)
    
    return matchesSearch && matchesMood && matchesFavorites
  })

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-electric-purple/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-[48px] md:text-[64px] mb-6 text-white leading-[1.1]">
              Browse Music
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Talk to our AI like you'd talk to a music supervisor
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-electric-blue" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try: 'Confident but not aggressive for a tech startup...'"
                className="w-full pl-16 pr-32 py-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 text-white placeholder-white/40 text-lg focus:outline-none focus:border-electric-blue/50 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl text-white font-medium hover:shadow-lg hover:shadow-electric-blue/30 transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Mood Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(selectedMood === mood ? null : mood)}
                className={`px-6 py-2.5 rounded-full border transition-all ${
                  selectedMood === mood
                    ? 'bg-electric-blue/20 border-electric-blue/50 text-electric-blue'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white/80'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>

          {/* User Section - Only show if logged in */}
          {user && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all ${
                  showFavoritesOnly
                    ? 'bg-red-500/20 border-red-500/50 text-red-400'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white/80'
                }`}
              >
                <Heart className={`w-4 h-4 ${showFavorit
