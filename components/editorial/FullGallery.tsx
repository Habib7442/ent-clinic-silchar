"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryItems } from "@/lib/gallery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FullGalleryProps {
  lang: string;
}

export default function FullGallery({ lang }: FullGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered slide up and fade in for all grid items
      gsap.fromTo(".full-gallery-item", 
        { 
          y: 60, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-8 lg:py-16 px-6 lg:px-24 bg-[#0A1A12]">
      <div className="max-w-7xl mx-auto">
        
        {/* Full Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 lg:auto-rows-[240px]">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`full-gallery-item flex flex-col group ${item.spanFullpage || "lg:col-span-4 lg:row-span-1"} aspect-[16/10] lg:aspect-auto lg:h-full bg-white/[0.02] border border-white/5 p-4 rounded-sm hover:border-gold/20 transition-all duration-500`}
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
        
      </div>
    </section>
  );
}
