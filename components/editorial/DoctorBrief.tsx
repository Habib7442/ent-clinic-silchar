"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MedicalSealIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-forest" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="fill-forest/10" />
      <circle cx="12" cy="11" r="3" className="stroke-rust" strokeWidth="2" />
      <path d="M12 14v4" className="stroke-rust" />
      <path d="M10 16h4" className="stroke-rust" />
    </svg>
  );
}

const translations = {
  en: {
    title: "The Expertise Behind the Care",
    name: "Dr. Abhishek Ray",
    credentials: "MS (ENT), Head & Neck Surgeon",
    nmc: "NMC Reg No: 12345",
    experience: "10+ Years of Clinical Excellence",
    philosophy: "ENT care is not just about treating symptoms; it's about restoring the sensory connection to the world. We combine surgical precision with a patient-first philosophy.",
    cta: "View Full Profile",
    languages: "English, Bengali, Hindi, Assamese"
  },
  bn: {
    title: "সেবার নেপথ্যে বিশেষজ্ঞ",
    name: "ডাঃ অভিষেক রায়",
    credentials: "এমএস (ইএনটি), হেড ও নেক সার্জন",
    nmc: "এনএমসি রেজিস্ট্রেশন নং: ১২৩৪৫",
    experience: "১০+ বছরের ক্লিনিকাল অভিজ্ঞতা",
    philosophy: "ইএনটি চিকিৎসা মানে শুধু উপসর্গের চিকিৎসা নয়; এটি বিশ্বের সাথে সংবেদনশীল সংযোগ পুনরুদ্ধার করার বিষয়। আমরা অস্ত্রোপচারের নির্ভুলতার সাথে রোগীর অগ্রাধিকার দর্শনকে একত্রিত করি।",
    cta: "সম্পূর্ণ প্রোফাইল দেখুন",
    languages: "ইংরেজি, বাংলা, হিন্দি, অসমীয়া"
  }
};

interface DoctorBriefProps {
  lang: string;
}

export default function DoctorBrief({ lang }: DoctorBriefProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = translations[lang as "en" | "bn"] || translations.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-doc", 
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
    <section id="doctor" ref={containerRef} className="relative py-12 lg:py-16 px-6 lg:px-24 bg-[#0A1A12] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal-doc space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
              {content.title}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
              {content.name}
            </h2>
            <p className="text-xl lg:text-2xl text-rust font-serif italic">
              {content.credentials}
            </p>
          </div>

          <div className="py-8 border-y border-white/5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-forest/10 rounded-full text-forest flex items-center justify-center">
                <MedicalSealIcon />
              </div>
              <div>
                <p className="text-paper font-semibold">{content.experience}</p>
                <p className="text-xs text-paper/60 uppercase tracking-widest mt-1">Clinical Record</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-paper/70 leading-relaxed font-light">
              "{content.philosophy}"
            </p>
            
            <div className="flex items-center gap-3 text-sm text-paper/70">
              <Languages className="w-4 h-4 text-forest" />
              <span>{content.languages}</span>
            </div>
          </div>

          <div className="pt-4">
            <Link href={`/${lang}/doctor`}>
              <Button variant="outline" className="group border-white/10 hover:border-gold hover:bg-transparent text-paper rounded-none px-8 py-6">
                {content.cta}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 text-gold" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
