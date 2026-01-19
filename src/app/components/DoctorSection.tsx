import { GraduationCap, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DoctorSection() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-br from-[#4A90E2]/5 to-[#50C9C3]/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#4A90E2] mb-4">Meet Your Dentist</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert care from a professional you can trust
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Doctor Portrait */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MjMzNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dr. Sarah Mitchell"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#50C9C3] rounded-3xl -z-10"></div>
              </div>
            </div>

            {/* Doctor Info */}
            <div>
              <h3 className="text-[#333] mb-2">Dr. Sarah Mitchell, DDS</h3>
              <p className="text-[#50C9C3] mb-6">Lead Dentist & Founder</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      DDS from Harvard School of Dental Medicine
                    </p>
                    <p className="text-gray-600 text-sm">
                      Specialized in cosmetic and restorative dentistry
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      15+ Years of Clinical Experience
                    </p>
                    <p className="text-gray-600 text-sm">
                      Treated over 5,000 satisfied patients
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#50C9C3]">
                <p className="text-gray-700 italic mb-3">
                  "My goal is to make every patient feel comfortable and leave with a confident,
                  healthy smile. Dentistry should never be intimidating – it should be empowering."
                </p>
                <p className="text-[#4A90E2]">— Dr. Sarah Mitchell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
