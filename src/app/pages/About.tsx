import { WhyChooseUs } from '../components/WhyChooseUs';
import { DoctorSection } from '../components/DoctorSection';
import { CTASection } from '../components/CTASection';

export default function AboutPage() {
    return (
        <div className="pt-20">
            <div className="relative py-32 text-center text-white overflow-hidden bg-gray-900">
                <img
                    src="/images/about-hero.png"
                    alt="Dental care tools"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">About Our Clinic</h1>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto drop-shadow-md font-medium">
                        A legacy of excellence in dentistry, committed to providing
                        professional and gentle care for the whole family.
                    </p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Mission</h2>
                        <p className="text-2xl text-gray-700 leading-relaxed italic">
                            "To revolutionize the dental experience by combining cutting-edge technology
                            with a deeply human approach, ensuring every smile reflects health,
                            confidence, and joy."
                        </p>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <DoctorSection />
            <CTASection />
        </div>
    );
}
