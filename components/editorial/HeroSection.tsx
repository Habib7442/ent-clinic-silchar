"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import HeroBookingForm from "./HeroBookingForm";

interface HeroProps {
  lang: string;
}

export default function HeroSection({ lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(".reveal-text", 
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2,
        }
      );
      
      // Image reveal
      gsap.fromTo(imageRef.current, 
        { 
          opacity: 0, 
          y: 20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const translations = {
    en: {
      eyebrow: "SPECIALIZED CARE",
      title: "Ear, Nose & Throat Care \n in Silchar.",
      description: "Combining surgical excellence with a compassionate, patient-first approach to hearing, sinus, and throat health.",
      cta: "Book Consultation",
    },
    bn: {
      eyebrow: "বিশেষায়িত যত্ন",
      title: "শিলচরে নাক, কান ও \n গলা চিকিৎসা।",
      description: "শ্রবণশক্তি, সাইনাস এবং গলার স্বাস্থ্যের জন্য আধুনিক সার্জিক্যাল উৎকর্ষ এবং মমতাময়ী রোগীর যত্নের সমন্বয়।",
      cta: "অ্যাপয়েন্টমেন্ট বুক করুন",
    }
  };

  const content = translations[lang as 'en' | 'bn'] || translations.en;

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-start px-6 py-8 lg:px-24 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 lg:mt-20">
          <div className="lg:col-span-7">
            <div className="reveal-text mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-rust font-sans font-semibold">
              <span className="w-8 h-[1px] bg-rust/35" />
              {content.eyebrow}
            </div>
            
            <h1 ref={titleRef} className="reveal-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 whitespace-pre-line leading-[1.05] break-words text-forest">
              {content.title}
            </h1>
            
            <p className="reveal-text max-w-lg text-lg md:text-xl text-ink-soft mb-10 leading-relaxed">
              {content.description}
            </p>
          </div>

          <div ref={imageRef} className="lg:col-span-5 relative w-full lg:mt-16 flex items-center justify-center">
              <HeroBookingForm lang={lang} />
          </div>
        </div>
      </div>
      
      {/* Background Image with Vignette Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero_bg.webp"
          alt="The ENT Clinic Silchar Background"
          fill
          priority
          unoptimized
          className="object-cover opacity-35 select-none pointer-events-none"
        />
        {/* Light vignettes and gradients to preserve contrast and premium editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-paper/45 to-paper" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/25 to-transparent lg:block hidden" />
      </div>
    </section>
  );
}
