'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/lib/AuthContext'

const navItems = [
  { label: 'Browse Music', href: '/library' },
  { label: 'Features', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Services', href: '/services' },
  { label: 'For Enterprise', href: '/enterprise' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded"></div>
            </div>
            <span className="font-display font-semibold text-lg md:text-xl text-text-primary group-hover:text-electric-blue transition-colors">
              Brandmusic
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/app/search" className="text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors font-medium">
                  Dashboard
                </Link>
                <button onClick={() => signOut()} className="text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors font-medium">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors font-medium">
                  Log in
                </Link>
                <Link href="/signup" className="px-6 py-2.5 bg-electric-blue text-white font-semibold rounded-lg hover:bg-electric-blue/90 transition-all hover:shadow-glow-sm text-sm md:text-base">
                  Start Free
                </Link>
              </>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-light bg-white"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block text-base text-text-secondary hover:text-text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border-light space-y-3">
                {user ? (
                  <>
                    <Link href="/app/search" className="block text-base text-text-secondary hover:text-text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                      Dashboard
                    </Link>
                    <button onClick={() => { signOut(); setIsOpen(false); }} className="block w-full text-left text-base text-text-secondary hover:text-text-primary transition-colors font-medium py-2">
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block text-base text-text-secondary hover:text-text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                      Log in
                    </Link>
                    <Link href="/signup" className="block px-6 py-2.5 bg-electric-blue text-white font-semibold rounded-lg hover:bg-electric-blue/90 transition-all text-center text-base" onClick={() => setIsOpen(false)}>
                      Start Free
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
