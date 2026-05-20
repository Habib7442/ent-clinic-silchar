"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    title: "The Philosophy",
    headline: "Beyond the White Coat.",
    para1: "ENT care is fundamentally about connection. Whether it's the clarity of a voice, the silence of a breath, or the precision of hearing—these are the senses that connect us to the world.",
    para2: "My approach combines rigorous surgical training with a commitment to conservative treatment. I believe in listening as much as diagnosing. Every patient journey at this clinic begins with understanding the person behind the symptoms.",
    quote: "Precision is non-negotiable. Empathy is essential."
  },
  bn: {
    title: "জীবনদর্শন",
    headline: "পেশার বাইরে এক আদর্শ।",
    para1: "ইএনটি চিকিৎসা মূলত সংযোগের বিষয়। কণ্ঠস্বরের স্বচ্ছতা, নিঃশ্বাসের স্তব্ধতা, বা শ্রবণের নির্ভুলতা—এই ইন্দ্রিয়গুলিই আমাদের বিশ্বের সাথে সংযুক্ত করে।",
    para2: "আমার পদ্ধতিটি রক্ষণশীল চিকিৎসার অঙ্গীকারের সাথে কঠোর অস্ত্রোপচার প্রশিক্ষণের সমন্বয়। আমি রোগ নির্ণয়ের মতোই রোগীর কথা শোনার ওপর বিশ্বাস করি। এই ক্লিনিকে প্রতিটি রোগীর যাত্রা শুরু হয় উপসর্গের পেছনের মানুষকে বোঝার মাধ্যমে।",
    quote: "নির্ভুলতা আপোষহীন। সহানুভূতি অপরিহার্য।"
  }
};

interface DoctorPhilosophyProps {
  lang: string;
}

export default function DoctorPhilosophy({ lang }: DoctorPhilosophyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = translations[lang as "en" | "bn"] || translations.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-phi", 
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Image Column */}
        <div className="reveal-phi relative aspect-square rounded-sm overflow-hidden group">
          <img
            src="/images/doctor-philosophy.webp"
            alt="Doctor Philosophy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
        </div>

        {/* Content Column */}
        <div className="reveal-phi space-y-12">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-rust font-semibold">
              {content.title}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
              {content.headline}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg lg:text-xl text-paper/70 leading-relaxed font-light">
              {content.para1}
            </p>
            <p className="text-lg lg:text-xl text-paper/70 leading-relaxed font-light">
              {content.para2}
            </p>
          </div>

          <div className="pt-8 border-t border-white/5">
            <p className="text-2xl lg:text-3xl font-serif italic text-paper italic-rust">
              "{content.quote}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
