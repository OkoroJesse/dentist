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

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Column: Text and CTA */}
                        <div className="w-full lg:w-1/2 space-y-8 animate-in slide-in-from-left duration-700">
                            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide">
                                OUR MISSION
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Revolutionizing the <span className="text-blue-600">dental experience</span> for everyone.
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2">
                                "To revolutionize the dental experience by combining cutting-edge technology
                                with a deeply human approach, ensuring every smile reflects health,
                                confidence, and joy."
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
                                    className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-wider"
                                >
                                    Book Appointment
                                    <span className="text-xl">🦷</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="w-full lg:w-1/2 animate-in slide-in-from-right duration-700 delay-200">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src="/images/clinic-mission.png"
                                        alt="Modern dental clinic interior"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-3xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <DoctorSection />
            <CTASection />
        </div>
    );
}
