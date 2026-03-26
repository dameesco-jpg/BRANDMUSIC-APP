import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'AI Search', href: '/product#ai-search' },
      { label: 'Video Sync', href: '/product#video-sync' },
      { label: 'Stem Studio', href: '/stem-studio' },
      { label: 'Campaign Builder', href: '/product#campaign-builder' },
    ],
  },
  {
    title: 'Enterprise',
    links: [
      { label: 'Brand Portal', href: '/enterprise#brand-portal' },
      { label: 'Sonic DNA', href: '/enterprise#sonic-dna' },
      { label: 'Team Collaboration', href: '/enterprise#collaboration' },
      { label: 'Analytics', href: '/enterprise#analytics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
  },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <span className="font-display font-semibold text-xl">
                Brandmusic
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-xs mb-6">
              The AI-powered operating system for brand sound. Discover, customize, and license music with intelligent workflows.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-text-secondary hover:text-electric-blue hover:bg-surface-hover transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Brandmusic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-text-tertiary hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-tertiary hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-text-tertiary hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
