import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative h-[650px] min-h-[500px] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/hero-bg-new.png"
          alt="Modern dental care model"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Premium Look and Readability */}
        <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-blue-900/40"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full pt-20">
        {/* Main Content Area */}
        <div className="max-w-4xl animate-in slide-in-from-left duration-700">
          {/* Title - Large and Impactful */}
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
            Exceptional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              dental care.
            </span>
          </h1>

          {/* Subtext and CTA - Left Aligned for consistency */}
          <div className="max-w-2xl">
            <p className="text-white/90 text-xl md:text-2xl mb-12 leading-relaxed font-light">
              Our team is committed to delivering top-quality, compassionate treatments in a comfortable environment.
            </p>

            <div className="flex flex-col items-start gap-8">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
                className="group relative bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-transparent hover:text-white border-2 border-white overflow-hidden shadow-2xl active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  BOOK NOW
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              {/* Trust Indicators - Integrated into the flow to prevent overlap */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl transition-colors hover:bg-white/10">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-medium">Ranked #1 Clinic in 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl transition-colors hover:bg-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Emergency Care 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
