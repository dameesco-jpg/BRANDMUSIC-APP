import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brandmusic - AI-Powered Operating System for Brand Sound',
  description: 'Discover, customize, and license music with AI-powered tools. The platform for brands and agencies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
