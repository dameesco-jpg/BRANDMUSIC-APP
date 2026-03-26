'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Search, 
  Video, 
  Sliders, 
  Package, 
  Building2, 
  Settings, 
  HelpCircle,
  Coins,
  Menu,
  X,
  ChevronDown,
  User
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { icon: Music, label: 'Library', href: '/app/search' },
  { icon: Video, label: 'Video Sync', href: '/app/video-sync' },
  { icon: Sliders, label: 'Stem Studio', href: '/app/stem-studio' },
  { icon: Package, label: 'Projects', href: '/app/projects' },
  { icon: Building2, label: 'Brand Portal', href: '/app/brand-portal', badge: 'Enterprise' },
]

const bottomNavItems = [
  { icon: Settings, label: 'Settings', href: '/app/settings' },
  { icon: HelpCircle, label: 'Help & Support', href: '/app/help' },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface-elevated rounded-lg border border-white/10"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        className="lg:translate-x-0 fixed left-0 top-0 h-screen w-72 bg-surface border-r border-white/5 z-40 lg:z-0 flex flex-col"
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link href="/app/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded"></div>
            </div>
            <span className="font-display font-semibold text-xl">
              Brandmusic
            </span>
          </Link>
        </div>

        {/* Token Balance */}
        <div className="px-6 py-4 border-b border-white/5">
          <div className="bg-surface-elevated rounded-xl p-4 border border-electric-blue/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-text-secondary">Token Balance</span>
              </div>
              <button className="text-xs text-electric-blue hover:text-electric-cyan transition-colors font-semibold">
                Buy more
              </button>
            </div>
            <div className="text-2xl font-display font-bold text-white">
              2,500
            </div>
            <div className="mt-2 h-1.5 bg-surface rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-electric-blue to-electric-purple"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all group
                      ${isActive 
                        ? 'bg-electric-blue/10 text-electric-blue' 
                        : 'text-text-secondary hover:bg-surface-hover hover:text-white'
                      }
                    `}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-electric-blue' : 'text-text-tertiary group-hover:text-white'}`} />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto text-xs px-2 py-0.5 bg-electric-purple/20 text-electric-purple rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-white/5 px-4 py-4">
          <ul className="space-y-1 mb-4">
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                      ${isActive 
                        ? 'bg-surface-elevated text-white' 
                        : 'text-text-secondary hover:bg-surface-hover hover:text-white'
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-hover transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium text-white">John Doe</div>
                <div className="text-xs text-text-tertiary">Pro Plan</div>
              </div>
              <ChevronDown className={`w-4 h-4 text-text-tertiary transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-full left-0 right-0 mb-2 bg-surface-elevated rounded-lg border border-white/10 shadow-xl overflow-hidden"
                >
                  <Link
                    href="/app/profile"
                    className="block px-4 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-white transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/app/billing"
                    className="block px-4 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-white transition-colors"
                  >
                    Billing
                  </Link>
                  <div className="border-t border-white/10"></div>
                  <button className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-white transition-colors">
                    Log out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
