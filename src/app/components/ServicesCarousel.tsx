import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Drill, Star, Heart, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
    title: string;
    description: string;
    icon: any;
}

const services: ServiceItem[] = [
    {
        title: 'General Dentistry',
        description: 'Consistent dental care ensures a bright, clean, and healthy smile every single day with routine checkups.',
        icon: ShieldCheck
    },
    {
        title: 'Cosmetic Dentistry',
        description: 'Transform your smile with safe, effective, and aesthetic dental treatments tailored for confidence.',
        icon: Sparkles
    },
    {
        title: 'Dental Implants',
        description: 'Strong, natural-looking replacements designed to restore smiles, confidence, and lasting oral health.',
        icon: Drill
    },
    {
        title: 'Teeth Whitening',
        description: 'Safe, effective whitening solutions that brighten your teeth and give you a radiant, confident smile.',
        icon: Star
    },
    {
        title: 'Orthodontics',
        description: 'Straighten your teeth with modern, comfortable orthodontic solutions including braces and clear aligners.',
        icon: Heart
    },
    {
        title: 'Preventive Care',
        description: 'Our preventive approach focuses on helping our patients to prevent dental problems before they arise.',
        icon: CheckCircle2
    }
];

export function ServicesCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        loop: true
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        // Autoplay logic
        const autoplay = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 3000);

        return () => {
            clearInterval(autoplay);
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="pt-24 pb-12 bg-[#F8FAFC] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            We Offer Comprehensive <br />
                            <span className="text-blue-600">Dental Care</span> for Everyone
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-blue-600"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-blue-600"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {services.map((service, index) => (
                            <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 h-full">
                                <div className="bg-white rounded-3xl p-10 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-500">
                                        <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
