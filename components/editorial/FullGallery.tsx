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
              className={`full-gallery-item relative overflow-hidden rounded-sm group ${item.spanFullpage || "lg:col-span-4 lg:row-span-1"} aspect-[16/10] lg:aspect-auto lg:h-full`}
            >
              <img
                src={item.src}
                alt={item.title[lang as "en" | "bn"]}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12]/90 via-[#0A1A12]/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Clinical Details */}
              <div className="absolute bottom-0 left-0 p-6 lg:p-8 space-y-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                  {lang === "bn" ? "অত্যাধুনিক ইএনটি" : "Advanced ENT"}
                </span>
                <h3 className="text-xl lg:text-2xl font-serif text-paper">
                  {lang === "bn" ? item.title.bn : item.title.en}
                </h3>
                <p className="text-xs lg:text-sm text-paper/70 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
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
