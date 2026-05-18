"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Award, Languages, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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

      gsap.fromTo(".reveal-img", 
        { 
          scale: 1.1, 
          opacity: 0 
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="doctor" ref={containerRef} className="relative py-24 lg:py-40 px-6 lg:px-24 bg-[#0A1A12] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        {/* Image Column */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="reveal-img relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/10">
            <div className="absolute inset-0 w-full h-full bg-forest/20 flex items-center justify-center">
              <ShieldCheck className="w-24 h-24 text-forest/40" />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-40" />
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="reveal-doc space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
                {content.title}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
                {content.name}
              </h2>
              <p className="text-xl lg:text-2xl text-paper/80 font-serif italic italic-rust">
                {content.credentials}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-forest/10 rounded-full text-forest">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-paper font-semibold">{content.experience}</p>
                  <p className="text-xs text-paper/40 uppercase tracking-widest mt-1">Clinical Record</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-rust/10 rounded-full text-rust">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-paper font-semibold">{content.nmc}</p>
                  <p className="text-xs text-paper/40 uppercase tracking-widest mt-1">Verifiable Credentials</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-paper/70 leading-relaxed max-w-2xl font-light">
                "{content.philosophy}"
              </p>
              
              <div className="flex items-center gap-3 text-sm text-paper/50">
                <Languages className="w-4 h-4 text-forest" />
                <span>{content.languages}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href={`/${lang}/doctor`}>
                <Button variant="outline" className="group border-white/10 hover:border-rust hover:bg-transparent text-paper rounded-none px-8 py-6">
                  {content.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 text-rust" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
