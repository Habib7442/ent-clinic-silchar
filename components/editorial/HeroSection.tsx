"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      title: "Advanced ENT Care \n redefined for Silchar.",
      description: "Combining surgical excellence with a compassionate, patient-first approach to hearing, sinus, and throat health.",
      cta: "Book Consultation",
    },
    bn: {
      eyebrow: "বিশেষায়িত যত্ন",
      title: "শিলচরের জন্য উন্নত ইএনটি \n চিকিৎসার নতুন দিগন্ত।",
      description: "শ্রবণশক্তি, সাইনাস এবং গলার স্বাস্থ্যের জন্য আধুনিক সার্জিক্যাল উৎকর্ষ এবং মমতাময়ী রোগীর যত্নের সমন্বয়।",
      cta: "অ্যাপয়েন্টমেন্ট বুক করুন",
    }
  };

  const content = translations[lang as 'en' | 'bn'] || translations.en;

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-start px-6 py-8 lg:px-24 lg:py-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 lg:mt-20">
        <div className="lg:col-span-7 z-10">
          <div className="reveal-text mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-rust font-sans font-semibold">
            <span className="w-8 h-[1px] bg-rust/30" />
            {content.eyebrow}
          </div>
          
          <h1 ref={titleRef} className="reveal-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 whitespace-pre-line leading-[1.05] break-words">
            {content.title}
          </h1>
          
          <p className="reveal-text max-w-lg text-lg md:text-xl text-paper/70 mb-10 leading-relaxed">
            {content.description}
          </p>
          
          <div className="reveal-text flex flex-wrap gap-4">
            <Link href={`/${lang}/book`}>
              <Button variant="rust" className="group h-auto py-4 px-10">
                {content.cta}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div ref={imageRef} className="lg:col-span-5 relative aspect-[4/5] lg:aspect-square w-full bg-teal-deep overflow-hidden rounded-sm shadow-2xl lg:mt-16">
            <img
              src="/images/hero.png"
              alt="Modern ENT Clinic"
              className="absolute inset-0 w-full h-full object-cover scale-105"
              loading="eager"
            />
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-forest/10 to-transparent -z-10" />
    </section>
  );
}
