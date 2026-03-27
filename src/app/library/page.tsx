'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Search, Play, Heart } from 'lucide-react'

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
}

export default function LibraryPage() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [selectedMood, setSelectedMood] = useState<string>('all')

  const genres = ['all', 'Ambient', 'Hip Hop', 'Electronic', 'Pop']
  const moods = ['all', 'Sophisticated', 'Confident', 'Optimistic', 'Uplifting', 'Mysterious']

  useEffect(() => {
    fetchTracks()
  }, [])

  useEffect(() => {
    filterTracks()
  }, [searchQuery, selectedGenre, selectedMood, tracks])

  async function fetchTracks() {
    try {
      const { data, error } = await supabase
        .from('tracks')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setTracks(data || [])
      setFilteredTracks(data || [])
    } catch (error) {
      console.error('Error fetching tracks:', error)
    } finally {
      setLoading(false)
    }
  }

  function filterTracks() {
    let filtered = tracks

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(track =>
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artis
