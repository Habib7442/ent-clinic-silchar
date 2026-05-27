"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    title: "The Philosophy",
    headline: "Beyond the White Coat.",
    para1: "ENT care is fundamentally about connection. Whether it's the clarity of a voice, the silence of a breath, or the precision of hearing—these are the senses that connect us to the world.",
    para2: "My approach combines rigorous surgical training with a commitment to conservative treatment. I believe in listening as much as diagnosing. Every patient journey at this clinic begins with understanding the person behind the symptoms.",
    quote: "True healing combines clinical precision with deep human empathy. We listen as closely as we diagnose."
  },
  bn: {
    title: "জীবনদর্শন",
    headline: "পেশার বাইরে এক আদর্শ।",
    para1: "ইএনটি চিকিৎসা মূলত সংযোগের বিষয়। কণ্ঠস্বরের স্বচ্ছতা, নিঃসশ্বাসের স্তব্ধতা, বা শ্রবণের নির্ভুলতা—এই ইন্দ্রিয়গুলিই আমাদের বিশ্বের সাথে সংযুক্ত করে।",
    para2: "আমার পদ্ধতিটি রক্ষণশীল চিকিৎসার অঙ্গীকারের সাথে কঠোর অস্ত্রোপচার প্রশিক্ষণের সমন্বয়। আমি রোগ নির্ণয়ের মতোই রোগীর কথা শোনার ওপর বিশ্বাস করি। এই ক্লিনিকে প্রতিটি রোগীর যাত্রা শুরু হয় উপসর্গের পেছনের মানুষকে বোঝার মাধ্যমে।",
    quote: "প্রকৃত নিরাময় হলো চিকিৎসা বিজ্ঞানের নির্ভুলতা এবং গভীর মানবিক সহানুভূতির সংমিশ্রণ। আমরা রোগের উপসর্গ ঠিক ততটাই মনোযোগ দিয়ে শুনি, যতটা সূক্ষ্মতার সাথে রোগ নির্ণয় করি।"
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
          duration: 1.2,
          stagger: 0.15,
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
    <section ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-24 bg-paper-warm relative overflow-hidden border-b border-hairline">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-16 text-center">
        
        {/* Header Elements */}
        <div className="reveal-phi space-y-4">
          <Heart className="w-8 h-8 text-gold mx-auto opacity-70 animate-pulse" />
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold font-semibold">
            {content.title}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest leading-tight">
            {content.headline}
          </h2>
        </div>

        {/* Narrative Copy - Beautiful Two Column Editorial Layout */}
        <div className="reveal-phi grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left pt-4 border-t border-hairline">
          <p className="text-lg text-ink-soft leading-relaxed font-light">
            {content.para1}
          </p>
          <p className="text-lg text-ink-soft leading-relaxed font-light">
            {content.para2}
          </p>
        </div>

        {/* Highlighted Philosophy Quote */}
        <div className="reveal-phi pt-8 border-t border-hairline">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-forest leading-snug">
            "{content.quote}"
          </p>
        </div>

      </div>
    </section>
  );
}
