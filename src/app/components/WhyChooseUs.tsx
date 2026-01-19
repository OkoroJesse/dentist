import { Shield, Heart, Cpu, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: Shield,
    title: 'Pain-Free Procedures',
    description: 'Advanced techniques and gentle care ensure your comfort throughout'
  },
  {
    icon: Heart,
    title: 'Experienced Dentists',
    description: 'Our team has over 7 years of clinical experience in all dental specialties'
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'State-of-the-art equipment for accurate diagnosis and treatment'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with flexible payment plans available'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcxOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[#4A90E2] mb-6">Why Choose Us</h2>
            <p className="text-gray-600 text-lg mb-10">
              Your smile deserves the best care. Here's what sets us apart from other dental practices.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#50C9C3]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#50C9C3]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#333] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
