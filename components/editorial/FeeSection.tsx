"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    title: "Transparent Pricing",
    headline: "Clarity before you arrive.",
    fee: "₹500",
    label: "Professional Consultation Fee",
    includes: [
      "Detailed 1-on-1 Consultation",
      "Basic Clinical Examination",
      "Personalized Treatment Plan",
      "Verified Medical Report"
    ],
    note: "No hidden charges. No unnecessary tests."
  },
  bn: {
    title: "স্বচ্ছ মূল্য নির্ধারণ",
    headline: "আসার আগেই স্বচ্ছতা।",
    fee: "৫০০ টাকা",
    label: "পেশাদার পরামর্শ ফি",
    includes: [
      "বিস্তারিত সরাসরি পরামর্শ",
      "প্রাথমিক ক্লিনিকাল পরীক্ষা",
      "ব্যক্তিগত চিকিৎসা পরিকল্পনা",
      "যাচাইকৃত মেডিকেল রিপোর্ট"
    ],
    note: "কোনো লুকানো চার্জ নেই। কোনো অপ্রয়োজনীয় পরীক্ষা নেই।"
  }
};

interface FeeSectionProps {
  lang: string;
}

export default function FeeSection({ lang }: FeeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = translations[lang as "en" | "bn"] || translations.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-fee", 
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
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
    <section id="fees" ref={containerRef} className="py-24 lg:py-40 px-6 lg:px-24 bg-[#0A1A12] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="reveal-fee space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
              {content.title}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
              {content.headline}
            </h2>
          </div>
          
          <div className="space-y-4">
            {content.includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-paper/60">
                <CheckCircle2 className="w-5 h-5 text-forest" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm italic text-paper/40 pt-4">
            {content.note}
          </p>
        </div>

        <div className="reveal-fee relative">
          {/* Glass Card */}
          <div className="relative p-12 lg:p-20 bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-forest/20 blur-[60px] rounded-full" />
            
            <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-4">
              {content.label}
            </p>
            <div className="font-serif text-8xl md:text-9xl text-paper mb-4 relative">
              <span className="text-rust absolute -left-8 top-4 text-4xl italic opacity-50">₹</span>
              {content.fee.replace("₹", "")}
            </div>
            <div className="w-12 h-1 bg-rust mb-8" />
            <p className="text-paper/60 max-w-xs mx-auto">
              {lang === "en" ? "Inclusive of all first-visit diagnostics performed by the doctor." : "ডাক্তারের দ্বারা সম্পাদিত সমস্ত প্রথম ভিজিটের ডায়াগনস্টিকস অন্তর্ভুক্ত।"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
