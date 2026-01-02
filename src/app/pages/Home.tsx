import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { DoctorSection } from '../components/DoctorSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GallerySection } from '../components/GallerySection';
import { CTASection } from '../components/CTASection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <DoctorSection />
            <TestimonialsSection />
            <GallerySection />
            <CTASection />
        </>
    );
}
