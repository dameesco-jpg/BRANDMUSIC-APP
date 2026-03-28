import { Sparkles, Music, Download, Sliders } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Search',
    description: 'Describe what you need in plain English. Our AI understands context, mood, and brand personality to find the perfect match.',
  },
  {
    icon: Music,
    title: 'Premium Library',
    description: 'Access thousands of professionally produced tracks across every genre. New music added weekly.',
  },
  {
    icon: Download,
    title: 'Unlimited Downloads',
    description: 'Download as many tracks as you need. Full stems included. All cleared for commercial use.',
  },
  {
    icon: Sliders,
    title: 'Full Customization',
    description: 'Access individual stems to create your perfect mix. Adjust, remix, and make it yours.',
  },
]

export default function Features() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#1A0D2E] to-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-purple/10 border border-electric-purple/30 rounded-full text-electric-purple text-xs font-medium mb-6">
              Everything You Need
            </div>
            <h2 className="font-display font-bold text-[36px] md:text-[48px] mb-6 text-white leading-[1.1]">
              Built for Modern Creators
            </h2>
            <p className="text-base text-text-secondary mb-12 leading-relaxed">
              From AI-powered discovery to unlimited downloads, we've designed every feature to help you find and use the perfect music faster.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-purple/20 to-violet-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-electric-purple/30">
                    <feature.icon className="w-6 h-6 text-electric-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-electric-purple/10 to-violet-600/10 border border-electric-purple/30 p-8 backdrop-blur-sm">
              {/* Waveform visualization */}
              <div className="flex items-end justify-center gap-1 h-64">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-electric-purple to-violet-400 rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-electric-purple font-medium">Real-time AI Analysis</p>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-electric-purple/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet-600/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
