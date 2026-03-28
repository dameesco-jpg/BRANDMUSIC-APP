import { Search, Wand2, Download, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Search with AI',
    description: 'Describe what you need in plain language. Our AI understands mood, energy, and context.',
  },
  {
    icon: Wand2,
    number: '02',
    title: 'Preview & Sync',
    description: 'Upload your video and instantly preview tracks synced to your footage—before you even license.',
  },
  {
    icon: Download,
    number: '03',
    title: 'Download Stems',
    description: 'Get the full track plus separated stems. Customize the mix to fit your exact vision.',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Use Everywhere',
    description: 'One license covers all platforms. No hidden fees, no per-use charges, no royalties.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#1F0A1A] to-[#0A0A0A] overflow-hidden">
      {/* Pink/Magenta glow effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-3xl" />
      
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-xs font-medium mb-6">
            Simple Process
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] mb-6 text-white leading-[1.1]">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            From search to soundtrack in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-pin
