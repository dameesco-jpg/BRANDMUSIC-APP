'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 noise-texture"></div>
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center">
              <div className="w-7 h-7 border-2 border-white rounded"></div>
            </div>
            <span className="font-display font-semibold text-2xl">
              Brandmusic
            </span>
          </Link>

          {/* Form Card */}
          <div className="bg-surface-elevated rounded-2xl p-8 border border-white/10 backdrop-blur-glass">
            <h1 className="font-display font-bold text-3xl text-center mb-2">
              Welcome back
            </h1>
            <p className="text-text-secondary text-center mb-8">
              Log in to continue to your workspace
            </p>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-white/10 rounded-lg text-white placeholder:text-text-muted focus:outline-none focus:border-electric-blue/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-electric-blue hover:text-electric-cyan transition-colors">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-white/10 rounded-lg text-white placeholder:text-text-muted focus:outline-none focus:border-electric-blue/50 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-white/20 bg-surface text-electric-blue focus:ring-electric-blue focus:ring-offset-0"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-text-secondary">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit */}
              <Button type="submit" fullWidth size="lg" className="group">
                Log in
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface-elevated text-text-tertiary">Or continue with</span>
              </div>
            </div>

            {/* SSO Options */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-surface border border-white/10 rounded-lg hover:bg-surface-hover transition-colors">
                <GoogleIcon />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-surface border border-white/10 rounded-lg hover:bg-surface-hover transition-colors">
                <MicrosoftIcon />
                <span className="text-sm font-medium">Microsoft</span>
              </button>
            </div>
          </div>

          {/* Sign up link */}
          <p className="text-center mt-6 text-text-secondary">
            Don't have an account?{' '}
            <Link href="/signup" className="text-electric-blue hover:text-electric-cyan transition-colors font-semibold">
              Sign up free
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  )
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#f25022" d="M1 1h10v10H1z"/>
      <path fill="#00a4ef" d="M13 1h10v10H13z"/>
      <path fill="#7fba00" d="M1 13h10v10H1z"/>
      <path fill="#ffb900" d="M13 13h10v10H13z"/>
    </svg>
  )
}
