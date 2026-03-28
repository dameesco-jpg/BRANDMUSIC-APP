import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Brandmusic's AI search saved us 10+ hours per campaign. We find perfect tracks in minutes, not days.",
    author: "Sarah Chen",
    role: "Music Supervisor",
    company: "Havas Creative",
    rating: 5,
  },
  {
    quote: "The video sync feature is a game-changer. We can present 5 options to clients synced to their footage before even licensing.",
    author: "Marcus Rodriguez",
    role: "Creative Director",
    company: "Pulse Productions",
    rating: 5,
  },
  {
    quote: "Finally, a platform built for professionals. Stem customization means we never have to settle for 'close enough'.",
    author: "Emma Thompson",
    role: "Brand Manager",
    company: "TechForward Inc.",
    rating: 5,
  },
]

const brands = [
  'Horizon Creative',
  'Pulse Productions',
  'TechForward',
  'Momentum Agency',
  'Vertex Media',
  'Catalyst Brands',
]

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#1F0A1A] to-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-fuchsia-500/20 rounded-full blur-3xl" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-xs font-medium mb-6 backdrop-blur-sm">
            Client Success Stories
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] mb-6 text-white leading-[1.1]">
            Trusted by Leading Professionals
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            See what our clients are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="relative group" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              
              <div className="relative h-full p-8 bg-surface-elevated/90 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all backdrop-blur-md">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center border border-pink-500/30">
                    <Quote className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-base text-white/90 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-fuchsia-600 opacity-30" />
                    <span className="relative text-pink-400 font-bold text-lg z-10">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-text-tertiary">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-pink-400/80">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-sm text-text-tertiary uppercase tracking-wider">
              Trusted by leading agencies and brands
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, idx) => (
              <div key={brand} className="group relative" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity" />
                
                <div className="relative px-6 py-4 bg-surface-elevated/60 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-all backdrop-blur-sm">
                  <div className="text-base font-semibold text-white/50 group-hover:text-white transition-colors">
                    {brand}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
