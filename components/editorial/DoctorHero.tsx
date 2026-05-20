"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, Award } from "lucide-react";

// Custom Premium Clinical Vector Icon for high trust signaling
function MedicalSealIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-forest shrink-0 animate-pulse" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="fill-forest/10" />
      <circle cx="12" cy="11" r="3" className="stroke-rust" strokeWidth="2" />
      <path d="M12 14v4" className="stroke-rust" />
      <path d="M10 16h4" className="stroke-rust" />
    </svg>
  );
}

const translations = {
  en: {
    tagline: "Expertise. Precision. Compassion.",
    name: "Dr. Abhishek Ray",
    credentials: "MS (ENT), Head & Neck Surgeon",
    mission: "The ENT Clinic is a premier institute in Silchar catering to the ear, nose, and throat problems for the people of Barak Valley. Discover top-notch ENT care with Dr. Abhishek Ray, a highly experienced ENT specialist with more than 10 years of clinical experience offering personalized treatment options.",
    reg: "NMC Registered Specialist",
    regSub: "NMC Verified",
    experienceLabel: "10+ Years Experience",
    recordLabel: "Clinical Excellence"
  },
  bn: {
    tagline: "অভিজ্ঞতা । নির্ভুলতা । সহানুভূতি",
    name: "ডাঃ অভিষেক রায়",
    credentials: "এমএস (ইএনটি), নাক কান গলা ও হেড নেক সার্জন",
    mission: "দি ইএনটি ক্লিনিক হলো বরাক উপত্যকার মানুষের নাক, কান এবং গলার সমস্যার চিকিৎসার জন্য শিলচরের একটি অগ্রণী প্রতিষ্ঠান। ১০ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন একজন অত্যন্ত অভিজ্ঞ ইএনটি বিশেষজ্ঞ ডাঃ অভিষেক রায়ের সাথে উন্নত চিকিৎসার অভিজ্ঞতা নিন।",
    reg: "এনএমসি নিবন্ধিত বিশেষজ্ঞ",
    regSub: "এনএমসি লাইসেন্সপ্রাপ্ত",
    experienceLabel: "১০+ বছরের অভিজ্ঞতা",
    recordLabel: "ক্লিনিকাল শ্রেষ্ঠত্ব"
  }
};

interface DoctorHeroProps {
  lang: string;
}

export default function DoctorHero({ lang }: DoctorHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = translations[lang as "en" | "bn"] || translations.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-doc-hero", 
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-8 pb-20 lg:pt-12 lg:pb-32 px-6 lg:px-24 bg-[#0A1A12] overflow-hidden border-b border-white/5">
      {/* Premium Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <span className="reveal-doc-hero inline-block text-xs uppercase tracking-[0.3em] text-rust font-semibold">
              {content.tagline}
            </span>
            <h1 className="reveal-doc-hero text-5xl md:text-7xl lg:text-8xl font-serif text-paper leading-tight">
              {content.name}
            </h1>
            <p className="reveal-doc-hero text-xl lg:text-2xl text-rust font-serif italic">
              {content.credentials}
            </p>
          </div>

          <p className="reveal-doc-hero text-base lg:text-lg text-paper/70 leading-relaxed font-light max-w-2xl">
            {content.mission}
          </p>

          <div className="reveal-doc-hero flex flex-wrap gap-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3">
              <MedicalSealIcon />
              <div>
                <p className="text-paper text-sm font-semibold">{content.experienceLabel}</p>
                <p className="text-paper/60 text-[10px] uppercase tracking-widest">{content.recordLabel}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-white/5 pl-8">
              <ShieldCheck className="w-6 h-6 text-forest shrink-0" />
              <div>
                <p className="text-paper text-sm font-semibold">{content.reg}</p>
                <p className="text-paper/60 text-[10px] uppercase tracking-widest">{content.regSub}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Premium Blank Placeholder Image Column */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-forest/10 ring-1 ring-white/10 group shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="p-4 bg-forest/20 rounded-full text-rust transition-transform duration-500 group-hover:scale-110">
                <ShieldCheck className="w-16 h-16" />
              </div>
              <h3 className="font-serif text-xl text-paper">{content.name}</h3>
              <p className="text-xs text-paper/60 uppercase tracking-widest">{content.credentials}</p>
            </div>
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
