'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import Button from '@/components/ui/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/app/search')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-surface-elevated rounded-2xl border border-white/10 p-8">
            <h1 className="font-display font-bold text-3xl mb-2 text-white">
              Welcome Back
            </h1>
            <p className="text-text-secondary mb-8">
              Log in to your account
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                  required
                />
              </div>

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
            </form>

            <p className="text-center text-text-secondary text-sm mt-6">
              Don't have an account?{' '}
              <Link href="/signup" className="text-electric-blue hover:text-electric-cyan">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
