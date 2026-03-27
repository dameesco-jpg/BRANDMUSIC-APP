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

  asyn
