import Link from 'next/link'

const footerLinks = {
  product: [
    { label: 'Features', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Browse Music', href: '/library' },
    { label: 'Services', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Licenses', href: '/licenses' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <span className="font-display font-semibold text-lg text-white">Brandmusic</span>
            </div>
            <p className="text-sm text-text-secondary">AI-powered music discovery for your brand.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5">
          <p className="text-sm text-text-tertiary text-center">© {new Date().getFullYear()} Brandmusic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
