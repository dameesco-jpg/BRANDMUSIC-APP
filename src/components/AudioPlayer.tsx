'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'

type Track = {
  id: string
  title: string
  artist: string
  file_url: string
  cover_image_url: string | null
}

type AudioPlayerProps = {
  track: Track | null
  onClose: () => void
}

export default function AudioPlayer({ track, onClose }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.file_url
      audioRef.current.load()
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [track])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    setCurrentTime(time)
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value)
    setVolume(vol)
    if (audioRef.current) {
      audioRef.current.volume = vol
    }
    setIsMuted(vol === 0)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!track) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface-elevated border-t border-white/10 backdrop-blur-glass z-50">
      <audio ref={audioRef} />
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-6">
          {/* Track Info */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <div className="w-14 h-14 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
              {track.cover_image_url ? (
                <img src={track.cover_image_url} alt={track.title} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="flex items-center gap-0.5">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 bg-electric-blue rounded-full"
                      style={{ height: `${Math.random() * 60 + 40}%` }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-white truncate">{track.title}</h3>
              <p className="text-sm text-text-secondary truncate">{track.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-center gap-4">
              <button className="text-text-secondary hover:text-white transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-black" />
                ) : (
