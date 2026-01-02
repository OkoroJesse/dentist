import { GraduationCap, Award, Mail, Phone, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/CTASection';

const dentists = [
    {
        name: "Dr. Sarah Mitchell, DDS",
        role: "Lead Dentist & Founder",
        education: "DDS from Harvard School of Dental Medicine",
        specialty: "Specialized in cosmetic and restorative dentistry",
        experience: "15+ Years of Clinical Experience",
        patients: "Treated over 5,000 satisfied patients",
        image: "https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MjMzNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Dr. Mitchell founded Bright Smile Dental with a vision to provide personalized care that integrates health and aesthetics. She believes that every patient deserves a smile they can be proud of.",
        quote: "My goal is to make every patient feel comfortable and leave with a confident, healthy smile."
    },
    {
        name: "Dr. James Wilson, DMD",
        role: "Senior Orthodontist",
        education: "DMD from University of Pennsylvania",
        specialty: "Specialized in Invisalign and Braces",
        experience: "10+ Years of Clinical Experience",
        patients: "Perfected over 3,000 smiles",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZW50aXN0JTIwbWFsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzMzNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Dr. Wilson is a leader in modern orthodontics, focusing on non-invasive techniques to align teeth effectively and comfortably for both children and adults.",
        quote: "Orthodontics is not just about straight teeth; it's about functional harmony and long-term oral health."
    }
];

export default function DentistsPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h1>
                    <p className="text-xl text-gray-600">
                        Our team of highly qualified dental professionals is dedicated to providing you
                        with the best possible care using the latest techniques and technology.
                    </p>
                </div>

                <div className="space-y-32">
                    {dentists.map((dentist, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            <div className="w-full md:w-1/2">
                                <div className="relative">
                                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                        <ImageWithFallback
                                            src={dentist.image}
                                            alt={dentist.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-blue-600 rounded-3xl -z-10`}></div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4">
                                    {dentist.role}
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">{dentist.name}</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {dentist.bio}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">Education</h4>
                                            <p className="text-gray-600 text-sm">{dentist.education}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Award className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">Experience</h4>
                                            <p className="text-gray-600 text-sm">{dentist.experience}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <p className="text-xl text-gray-800 italic font-medium leading-relaxed">
                                        "{dentist.quote}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-32">
                <CTASection />
            </div>
        </div>
    );
}
