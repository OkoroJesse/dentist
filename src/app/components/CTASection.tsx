import { Calendar, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4A90E2] to-[#50C9C3] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Ready for a Healthier Smile?
          </h2>

          <p className="text-white/90 text-xl mb-10">
            Take the first step towards optimal dental health. Book your appointment today
            and experience the difference of personalized, gentle care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              className="bg-white hover:bg-gray-50 text-[#4A90E2] px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
              Learn More About Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="text-center">
              <p className="text-3xl mb-1">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-1">5,000+</p>
              <p className="text-sm">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-1">4.9★</p>
              <p className="text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
