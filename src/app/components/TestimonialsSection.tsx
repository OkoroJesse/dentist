import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string | null;
  title: string;
  text: string;
  avatar: string | null;
  initials: string | null;
  tagPosition: 'top' | 'bottom';
}

const testimonials: Testimonial[] = [
  {
    name: 'Adewale Manuwa',
    role: null,
    title: '"Wonderful Experience!"',
    text: "Going to the dentist is never a pleasant experience but if you have to go, I'd definitely recommend Raf Dentals. Everything about them is commendable - from the aesthetics to the customer service, the professionalism to the environment, the equipment to the well organised structure of their service, I had zero complaints!",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    initials: 'AM',
    tagPosition: 'bottom'
  },
  {
    name: 'Shola',
    role: 'Orthodontic Service',
    title: '"Highly Recommended!"',
    text: "I was here to continue my braces treatment at their Lagos office, and I can't praise them enough! Dr. Nidhi, along with the amazing assistants Juliet and Yatunde made every visit comfortable and productive. Their attention to detail and dedication to patient care is unmatched, and the facility itself is top-notch—clean, modern, and equipped with latest technology.",
    avatar: null,
    initials: 'S',
    tagPosition: 'top'
  },
  {
    name: 'Kehinde Bamgboye',
    role: 'Scaling and Polishing',
    title: '"Amazing Experience!"',
    text: "Absolute professional service all round. From the receptionist to the nurses to the dentists. Very warm, neat and welcoming environment making customers feel at home. Also, seeing my name on the welcome board outside made the experience even better!",
    avatar: null,
    initials: 'K',
    tagPosition: 'bottom'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What our patients say.</h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative pt-10 pb-10">
              {/* Floating Tag Top */}
              {testimonial.tagPosition === 'top' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white rounded-full py-2 px-5 shadow-lg flex items-center gap-2 border border-blue-50/50 min-w-[170px]">
                  <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-gray-900">{testimonial.name}</p>
                    {testimonial.role && <p className="text-[9px] text-gray-500 uppercase tracking-wider">{testimonial.role}</p>}
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div className="bg-[#f2fdf7] rounded-[1.5rem] p-7 h-full flex flex-col justify-center relative shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{testimonial.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[13px] md:text-sm">
                  {testimonial.text}
                </p>
              </div>

              {/* Floating Tag Bottom */}
              {testimonial.tagPosition === 'bottom' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white rounded-full py-2 px-5 shadow-lg flex items-center gap-2 border border-blue-50/50 min-w-[170px]">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-9 h-9 rounded-full object-cover" />
                  ) : (
                    <div className="w-9 h-9 bg-[#00A3C4] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{testimonial.initials}</span>
                    </div>
                  )}
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-gray-900">{testimonial.name}</p>
                    {testimonial.role && <p className="text-[9px] text-gray-500 uppercase tracking-wider">{testimonial.role}</p>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
