"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryItems } from "@/lib/gallery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ClinicGalleryProps {
  lang: string;
}

export default function ClinicGallery({ lang }: ClinicGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  // Filter only the items that belong on the homepage bento grid
  const homepageItems = galleryItems.filter(item => item.spanHomepage);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-item", 
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-24 bg-[#0A1A12] border-t border-gold/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 lg:mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            {isEn ? "Inside the Clinic" : "ক্লিনিকের ভেতর"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-paper leading-tight">
            {isEn ? "Modern equipment. Calm environment." : "আধুনিক সরঞ্জাম। শান্ত পরিবেশ।"}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:auto-rows-[240px]">
          {homepageItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item flex flex-col group ${item.spanHomepage} aspect-[16/10] lg:aspect-auto lg:h-full bg-white/[0.02] border border-white/5 p-4 rounded-sm hover:border-gold/20 transition-all duration-500`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-sm aspect-[16/10] lg:aspect-auto lg:flex-1 w-full bg-[#0A1A12]/40">
                <img
                  src={item.src}
                  alt={item.title[lang as "en" | "bn"]}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Text Block below the image */}
              <div className="mt-4 space-y-1 select-none">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold block">
                  {lang === "bn" ? "অত্যাধুনিক ইএনটি" : "Advanced ENT"}
                </span>
                <h3 className="text-lg lg:text-xl font-serif text-paper group-hover:text-gold transition-colors duration-300">
                  {lang === "bn" ? item.title.bn : item.title.en}
                </h3>
                <p className="text-xs text-paper/60 line-clamp-2">
                  {lang === "bn" ? item.description.bn : item.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Explore CTA Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Link
            href={`/${lang}/gallery`}
            className="inline-flex items-center justify-center px-8 py-4 border border-gold/30 rounded-sm text-gold hover:text-paper hover:bg-gold/10 hover:border-gold transition-all duration-300 tracking-[0.25em] uppercase font-semibold text-xs text-center"
          >
            {isEn ? "Explore Full Gallery" : "সম্পূর্ণ গ্যালারি দেখুন"}
          </Link>
        </div>
      </div>
    </section>
  );
}
