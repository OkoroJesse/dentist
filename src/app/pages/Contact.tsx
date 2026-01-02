import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-20">
            <div className="bg-blue-50 py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-8">Get in Touch</h1>
                            <p className="text-xl text-gray-600 mb-12">
                                Have questions or ready to book your first visit? Our friendly team is here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                                        <p className="text-gray-600">Abuja, Nigeria</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600">0814 069 5734</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Opening Hours</h3>
                                        <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-100 border border-blue-50">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
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

                                    window.location.href = `mailto:info@brightsmile.com?subject=${subject}&body=${body}`;
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
