import { ServicesSection } from '../components/ServicesSection';
import { CTASection } from '../components/CTASection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative py-32 text-center text-white overflow-hidden">
                <ImageWithFallback
                    src="/images/services-hero.png"
                    alt="Dental services"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Our Services</h1>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto drop-shadow-md font-medium">
                        From routine checkups to complex orthodontic procedures, we provide
                        comprehensive dental care using the latest technology.
                    </p>
                </div>
            </div>

            <ServicesSection />

            {/* About Details Section - Mission Details */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">Our Commitment</h2>
                        <h3 className="text-4xl font-bold mb-8 text-gray-900">Driven by a Higher Standard of Care</h3>
                        <p className="text-2xl text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-8 text-left">
                            "To revolutionize the dental experience by combining cutting-edge technology
                            with a deeply human approach, ensuring every smile reflects health,
                            confidence, and joy."
                        </p>
                        <div className="mt-12 flex justify-center gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
                                <div className="text-gray-600 uppercase text-xs tracking-widest font-bold">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                                <div className="text-gray-600 uppercase text-xs tracking-widest font-bold">Happy Patients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-gray-600 uppercase text-xs tracking-widest font-bold">Modern Tech</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            <CTASection />
        </div>
    );
}
