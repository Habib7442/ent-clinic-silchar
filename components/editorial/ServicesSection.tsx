"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesSectionProps {
  lang: string;
  hideExploreLink?: boolean;
  bgClass?: string;
}

export default function ServicesSection({ 
  lang, 
  hideExploreLink = false,
  bgClass = "bg-paper"
}: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
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
    <section id="services" ref={containerRef} className={`py-12 lg:py-16 px-6 lg:px-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
              {isEn ? "Expert Clinical Services" : "বিশেষজ্ঞ ক্লিনিকাল সেবা"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-tight">
              {isEn ? "Specialized care for every concern." : "প্রতিটি সমস্যার জন্য বিশেষ যত্ন।"}
            </h2>
          </div>
          
          {!hideExploreLink && (
            <Link 
              href={`/${lang}/services`} 
              className="group flex items-center gap-3 text-ink/70 hover:text-rust transition-colors text-xs uppercase tracking-widest shrink-0 font-bold"
            >
              {isEn ? "Explore all services" : "সব সেবা দেখুন"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-rust" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <Link 
              key={service.id}
              href={`/${lang}/services/${service.id}`}
              className="service-card group relative min-h-[420px] h-full bg-[#0A1A12] rounded-sm flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-500 hover:border-gold/30 shadow-md hover:shadow-lg"
            >
              {/* Background Clinical Image with Smooth Scaling Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={service.bgImage}
                  alt={isEn ? service.title.en : service.title.bn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-[0.35] transition-all duration-700 group-hover:opacity-[0.55]"
                />
              </div>

              {/* Dark vignette overlay */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0A1A12]/80 via-[#0A1A12]/20 to-transparent pointer-events-none" />

              {/* Top Details (Icon and Title) */}
              <div className="relative z-10 p-6 lg:p-8 space-y-4">
                <div className="w-10 h-10 bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-paper transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/10 overflow-hidden">
                  {service.id === "vertigo-balance-clinic" ? (
                    <img 
                      src="/images/icons/doctor_page/Dedicated Vertigo Clinic.webp" 
                      alt="Vertigo Clinic Icon"
                      className="w-6 h-6 object-contain filter brightness-[10] contrast-125"
                    />
                  ) : (
                    <service.icon className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-xl lg:text-2xl font-serif text-paper leading-tight group-hover:text-gold transition-colors duration-300">
                  {lang === "bn" ? service.title.bn : service.title.en}
                </h3>
              </div>

              {/* Bottom Details (Outcome and Line Indicator) */}
              <div className="relative z-10 p-6 lg:p-8 space-y-4">
                <p className="text-paper/70 group-hover:text-paper/90 transition-colors duration-500 text-sm font-sans leading-relaxed">
                  {lang === "bn" ? service.outcome.bn : service.outcome.en}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px bg-gold md:bg-white/10 group-hover:bg-gold transition-all duration-700 w-12 md:w-8 group-hover:w-12" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex items-center gap-1">
                    {lang === "bn" ? "ক্লিক করুন" : "Click Me"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
