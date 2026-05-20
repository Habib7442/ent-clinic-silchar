"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  {
    id: "reception",
    src: "/images/gallery-reception.webp",
    title: { en: "Reception", bn: "অভ্যর্থনা" },
    description: { en: "A calm, modern space designed for patient comfort.", bn: "রোগীর আরামের জন্য ডিজাইন করা একটি শান্ত, আধুনিক স্থান।" },
    span: "lg:col-span-7"
  },
  {
    id: "consultation",
    src: "/images/gallery-consultation.webp",
    title: { en: "Consultation", bn: "পরামর্শ কক্ষ" },
    description: { en: "Advanced diagnostics in a private, professional setting.", bn: "ব্যক্তিগত এবং পেশাদার পরিবেশে উন্নত ডায়াগনস্টিকস।" },
    span: "lg:col-span-5"
  },
  {
    id: "audiometry",
    src: "/images/gallery-audiometry.webp",
    title: { en: "Audiometry", bn: "অডিওমেট্রি" },
    description: { en: "Soundproof testing for accurate hearing assessment.", bn: "সঠিক শ্রবণ মূল্যায়নের জন্য শব্দরোধী পরীক্ষা।" },
    span: "lg:col-span-5"
  },
  {
    id: "endoscopy",
    src: "/images/gallery-endoscopy.webp",
    title: { en: "Endoscopy", bn: "এন্ডোস্কোপি" },
    description: { en: "High-definition visualization for precise treatment.", bn: "নির্ভুল চিকিৎসার জন্য হাই-ডেফিনিশন ভিজুয়ালাইজেশন।" },
    span: "lg:col-span-7"
  }
];

interface ClinicGalleryProps {
  lang: string;
}

export default function ClinicGallery({ lang }: ClinicGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-item", 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-24 bg-[#0A1A12]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 lg:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            {isEn ? "Inside the Clinic" : "ক্লিনিকের ভেতর"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
            {isEn ? "Modern equipment. Calm environment." : "আধুনিক সরঞ্জাম। শান্ত পরিবেশ।"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item relative overflow-hidden rounded-sm group ${item.span} aspect-[16/9] lg:aspect-auto lg:h-[400px]`}
            >
              <img
                src={item.src}
                alt={item.title[lang as 'en' | 'bn']}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 lg:p-10 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-paper">
                  {lang === "bn" ? item.title.bn : item.title.en}
                </h3>
                <p className="text-sm text-paper/60 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {lang === "bn" ? item.description.bn : item.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
