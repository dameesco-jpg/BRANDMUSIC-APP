import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'background-secondary': '#F9FAFB',
        surface: '#FFFFFF',
        'surface-elevated': '#F9FAFB',
        'surface-hover': '#F3F4F6',
        'electric-blue': '#0066FF',
        'electric-cyan': '#00D4FF',
        'electric-purple': '#8B5CF6',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'text-tertiary': '#9CA3AF',
        'border-light': '#E5E7EB',
        'border-medium': '#D1D5DB',
        'border-dark': '#9CA3AF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-clash)'],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-md': '0 0 40px rgba(0, 102, 255, 0.4)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
