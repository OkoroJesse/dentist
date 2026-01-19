import { ShieldCheck, Sparkles, Drill } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PopularService {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const popularServices: PopularService[] = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional deep cleaning for healthy gums and a brighter smile',
    image: 'https://images.unsplash.com/photo-1681939283065-011297ba26eb?auto=format&fit=crop&q=80&w=800',
    icon: '✨'
  },
  {
    title: 'Teeth Whitening',
    description: 'Safe, effective whitening for a radiant, confident smile',
    image: 'https://images.unsplash.com/photo-1655807946138-811bb2340d34?auto=format&fit=crop&q=80&w=800',
    icon: '💎'
  },
  {
    title: 'Braces & Orthodontics',
    description: 'Straighten your teeth with modern, comfortable orthodontic solutions',
    image: 'https://images.unsplash.com/photo-1598531228433-d9f0cb960816?auto=format&fit=crop&q=80&w=800',
    icon: '🦷'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacement solutions',
    image: 'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?auto=format&fit=crop&q=80&w=800',
    icon: '🏆'
  }
];

const serviceCategories = [
  {
    title: 'General Dentistry',
    description: 'Consistent dental care ensures a bright, clean, and healthy smile every single day.',
    icon: ShieldCheck,
    items: ['Routine Cleaning', 'Cavity Treatment', 'Tooth Extractions', 'Preventive Care']
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with safe, effective, and aesthetic dental treatments tailored for confidence.',
    icon: Sparkles,
    items: ['Smile Enhancement', 'Teeth Whitening', 'Porcelain Veneers', 'Smile Design']
  },
  {
    title: 'Dental Implants',
    description: 'Strong, natural-looking replacements designed to restore smiles, confidence, and lasting oral health.',
    icon: Drill,
    items: ['Single Tooth Implants', 'Multiple Tooth Implants', 'Full-Mouth Restorations', 'Implant Consultations']
  }
];

export function ServicesSection() {
  return (
    <div className="space-y-0">
      {/* Former Services Section Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-3xl md:text-4xl font-bold mb-4">Popular Procedures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The most requested treatments by our patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Category-based Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600"
            alt="Dental consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Our Specializations</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg drop-shadow-sm font-medium">
              Expertly-curated care categories for your complete oral health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-7 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-100 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {category.description}
                </p>

                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium group/item hover:text-blue-600 transition-colors">
                      <div className="w-1 h-1 bg-blue-600 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
