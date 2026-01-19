import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ContactPage() {
    return (
        <div className="pt-28 lg:pt-24">
            {/* New Hero Section Inspired by Reference */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Left: Blob Image Container */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative z-10 w-full aspect-square md:aspect-[5/4] overflow-hidden bg-gray-100"
                                style={{
                                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                                }}>
                                <ImageWithFallback
                                    src="/images/contact-hero.png"
                                    alt="Professional Dental Consultation"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                            {/* Decorative Background Elements to mimic the blob feel */}
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute top-1/2 -right-10 w-48 h-48 bg-teal-50 rounded-full blur-3xl -z-10"></div>

                            {/* Small decorative circle image if needed, or just a teal circle */}
                            <div className="absolute -bottom-10 right-20 w-24 h-24 bg-[#4A90E2] rounded-full border-4 border-white shadow-xl flex items-center justify-center -z-0">
                                <span className="text-white text-3xl font-bold">🦷</span>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 animate-in slide-in-from-right duration-700">
                            <div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A90E2] mb-4 md:mb-6">
                                    Contact Us
                                </h1>
                                <p className="text-base md:text-xl text-gray-700 leading-relaxed font-medium">
                                    Getting in touch with us is easy. Pick one of the options below and talk to us today! Our friendly team is always here to help.
                                </p>
                            </div>

                            <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
                                <p className="text-gray-900 font-bold mb-4">
                                    Please note: <span className="font-normal text-gray-600">If you'd like to get in touch with a practice, please visit our services page </span>
                                    <a href="/services" className="text-blue-600 hover:underline italic">here</a>.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-colors">
                                        <div className="w-12 h-12 bg-[#333] rounded-xl flex items-center justify-center text-white">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <a href="tel:08033775088" className="text-2xl font-bold tracking-tight">
                                            0803 377 5088
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-colors">
                                        <div className="w-12 h-12 bg-[#333] rounded-xl flex items-center justify-center text-white">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <a href="mailto:info@rafdentals.com" className="text-xl font-bold break-all">
                                            info@rafdentals.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-blue-50 py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Visit Our Clinic</h2>
                            <p className="text-lg text-gray-600 mb-12">
                                We are located in the heart of Ibadan, providing expert dental care in a state-of-the-art facility.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                                        <p className="text-gray-600">6, Alhaji Animasaun Street, off Ajeigbe Bus stop, Teju specialist hospital complex ring road Ibadan</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Opening Hours</h3>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-100 border border-blue-50">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget as HTMLFormElement);
                                    const firstName = formData.get('firstName') as string;
                                    const lastName = formData.get('lastName') as string;
                                    const email = formData.get('email') as string;
                                    const message = formData.get('message') as string;

                                    const subject = encodeURIComponent(`Contact Form Submission from ${firstName} ${lastName}`);
                                    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);

                                    window.location.href = `mailto:info@rafdentals.com?subject=${subject}&body=${body}`;
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                        <input required name="firstName" type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                        <input required name="lastName" type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input required name="email" type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea required name="message" rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg active:scale-95">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
