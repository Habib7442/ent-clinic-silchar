"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, Award, GraduationCap, MapPin } from "lucide-react";

const translations = {
  en: {
    tagline: "Expertise. Precision. Compassion.",
    name: "Dr. Abhishek Ray",
    credentials: "MS (ENT), Head & Neck Surgeon",
    mission: "Dedicated to restoring sensory health through advanced clinical precision and a deep commitment to patient well-being.",
    reg: "NMC Registered Specialist",
    regNo: "Reg No: 12345"
  },
  bn: {
    tagline: "অভিজ্ঞতা। নির্ভুলতা। সহানুভূতি।",
    name: "ডাঃ অভিষেক রায়",
    credentials: "এমএস (ইএনটি), হেড ও নেক সার্জন",
    mission: "উন্নত ক্লিনিকাল নির্ভুলতা এবং রোগীর সুস্থতার প্রতি গভীর অঙ্গীকারের মাধ্যমে সংবেদনশীল স্বাস্থ্য পুনরুদ্ধারে নিবেদিত।",
    reg: "এনএমসি নিবন্ধিত বিশেষজ্ঞ",
    regNo: "রেজি নং: ১২৩৪৫"
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
    <section ref={containerRef} className="relative pt-32 lg:pt-48 pb-24 px-6 lg:px-24 bg-[#0A1A12] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <span className="reveal-doc-hero inline-block text-xs uppercase tracking-[0.4em] text-rust font-semibold">
              {content.tagline}
            </span>
            <h1 className="reveal-doc-hero text-5xl md:text-7xl lg:text-9xl font-serif text-paper leading-tight">
              {content.name}
            </h1>
            <p className="reveal-doc-hero text-xl lg:text-3xl text-paper/80 font-serif italic italic-rust">
              {content.credentials}
            </p>
          </div>

          <p className="reveal-doc-hero text-lg lg:text-xl text-paper/60 leading-relaxed max-w-2xl font-light">
            {content.mission}
          </p>

          <div className="reveal-doc-hero flex flex-wrap gap-6 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-forest" />
              <div>
                <p className="text-paper text-sm font-semibold">{content.reg}</p>
                <p className="text-paper/40 text-[10px] uppercase tracking-widest">{content.regNo}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-rust" />
              <div>
                <p className="text-paper text-sm font-semibold">19+ Years</p>
                <p className="text-paper/40 text-[10px] uppercase tracking-widest">Clinical Practice</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/10 group">
             <img
              src="/images/doctor.png"
              alt={content.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-40" />
          </div>
        </div>

      </div>
    </section>
  );
}
