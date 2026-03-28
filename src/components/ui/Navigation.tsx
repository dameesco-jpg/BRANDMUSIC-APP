'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <Link href="/" className="flex items-center">
            <Image
              src="/BrandMusic_H.png"
              alt="Brandmusic"
              width={600}
              height={150}
              className="h-24 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/library" className="text-white/70 hover:text-white transition-colors text-base">
              Browse Music
            </Link>
            <Link href="/features" className="text-white/70 hover:text-white transition-colors text-base">
              Features
            </Link>
            <Link href="/pricing" className="text-white/70 hover:text-white transition-colors text-base">
              Pricing
            </Link>
            <Link href="/services" className="text-white/70 hover:text-white transition-colors text-base">
              Services
            </Link>
            <Link href="/enterprise" className="text-white/70 hover:text-white transition-colors text-base">
              For Enterprise
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <button className="text-white/70 hover:text-white transition-colors text-base">
                Log in
              </button>
            </Link>
            <Link href="/signup">
              <Button>Start Free</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/library"
              className="block text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Browse Music
            </Link>
            <Link
              href="/features"
              className="block text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/services"
              className="block text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/enterprise"
              className="block text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              For Enterprise
            </Link>
            <div className="pt-4 border-t border-white/5 space-y-3">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full text-left text-white/70 hover:text-white transition-colors py-2">
                  Log in
                </button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Start Free</Button>
              </Link>
            </div>
