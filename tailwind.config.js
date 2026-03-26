/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode primary palette
        background: '#0A0A0F',
        surface: '#13131A',
        'surface-elevated': '#1A1A24',
        'surface-hover': '#20202E',
        
        // Brand accent colors
        electric: {
          blue: '#00D9FF',
          purple: '#B84FFF',
          pink: '#FF4F9A',
          cyan: '#4FFFDF',
        },
        
        // Text hierarchy
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0B8',
          tertiary: '#6B6B8A',
          muted: '#4A4A5E',
        },
        
        // Semantic colors
        success: '#4FFF8F',
        warning: '#FFAA4F',
        error: '#FF4F6B',
        info: '#4F9FFF',
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 217, 255, 0.15)',
        'glow-md': '0 0 40px rgba(0, 217, 255, 0.25)',
        'glow-lg': '0 0 60px rgba(0, 217, 255, 0.35)',
        'glow-purple': '0 0 40px rgba(184, 79, 255, 0.25)',
        'glow-pink': '0 0 40px rgba(255, 79, 154, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 20% 30%, #00D9FF15 0px, transparent 50%), radial-gradient(at 80% 70%, #B84FFF15 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
