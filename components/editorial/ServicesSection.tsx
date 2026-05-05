"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Ear, 
  Wind, 
  Moon, 
  Baby, 
  Mic2, 
  Stethoscope, 
  ArrowUpRight, 
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "hearing",
    icon: Ear,
    title: { en: "Hearing Care", bn: "শ্রবণ শক্তি" },
    outcome: { en: "Restore clarity to your conversations.", bn: "আপনার কথোপকথনে স্বচ্ছতা ফিরিয়ে আনুন।" },
    href: "/services/hearing-care"
  },
  {
    id: "sinus",
    icon: Wind,
    title: { en: "Sinus & Allergy", bn: "সাইনাস ও অ্যালার্জি" },
    outcome: { en: "Breathe freely, year-round.", bn: "সারা বছর নির্বিঘ্নে শ্বাস নিন।" },
    href: "/services/sinus-allergy"
  },
  {
    id: "snoring",
    icon: Moon,
    title: { en: "Snoring & Sleep", bn: "নাক ডাকা ও ঘুম" },
    outcome: { en: "Silent nights for restorative rest.", bn: "গভীর ঘুমের জন্য শান্ত রাত।" },
    href: "/services/snoring-sleep"
  },
  {
    id: "paediatric",
    icon: Baby,
    title: { en: "Paediatric ENT", bn: "শিশু ইএনটি" },
    outcome: { en: "Gentle care for small ears and throats.", bn: "শিশুদের কান ও গলার জন্য কোমল যত্ন।" },
    href: "/services/paediatric-ent"
  },
  {
    id: "surgical",
    icon: ShieldCheck,
    title: { en: "Surgical ENT", bn: "সার্জিক্যাল ইএনটি" },
    outcome: { en: "Precision procedures for complex head and neck conditions.", bn: "জটিল হেড ও নেক সমস্যার জন্য নির্ভুল অস্ত্রোপচার পদ্ধতি।" },
    href: "/services/surgical-ent"
  },
  {
    id: "voice",
    icon: Mic2,
    title: { en: "Voice & Throat", bn: "কণ্ঠ ও গলা" },
    outcome: { en: "Clear communication, comfortable speech.", bn: "স্পষ্ট যোগাযোগ ও আরামদায়ক কথা।" },
    href: "/services/voice-throat"
  },
];

interface ServicesSectionProps {
  lang: string;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", 
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
            start: "top 85%", // Fire slightly earlier
            toggleActions: "play none none none"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 lg:py-40 px-6 lg:px-24 bg-[#0A1A12]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
              {isEn ? "Expert Clinical Services" : "বিশেষজ্ঞ ক্লিনিকাল সেবা"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
              {isEn ? "Specialized care for every concern." : "প্রতিটি সমস্যার জন্য বিশেষ যত্ন।"}
            </h2>
          </div>
          
          <Link 
            href={`/${lang}/services`} 
            className="group flex items-center gap-3 text-paper/60 hover:text-rust transition-colors text-xs uppercase tracking-widest"
          >
            {isEn ? "Explore all services" : "সব সেবা দেখুন"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service) => (
            <Link 
              key={service.id}
              href={`/${lang}${service.href}`}
              className="service-card group relative aspect-square lg:aspect-[4/3] bg-[#0A1A12] p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-forest/5"
            >
              {/* Animated Glow */}
              <div className="absolute -inset-24 bg-forest/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <service.icon className="w-10 h-10 text-rust mb-8 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-2xl lg:text-3xl font-serif text-paper mb-4">
                  {lang === "bn" ? service.title.bn : service.title.en}
                </h3>
              </div>

              <div className="relative z-10 space-y-6">
                <p className="text-paper/40 group-hover:text-paper/80 transition-colors duration-500 text-sm lg:text-base leading-relaxed">
                  {lang === "bn" ? service.outcome.bn : service.outcome.en}
                </p>
                <div className="w-8 h-px bg-white/20 group-hover:w-full group-hover:bg-rust transition-all duration-700" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
