"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wind, ArrowRight, Activity, Microscope, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    hero: {
      tag: "Advanced Sinus Care",
      title: "Breathe freely, through every season.",
      desc: "Comprehensive solutions for chronic sinusitis, nasal polyps, and persistent allergies using state-of-the-art endoscopic diagnostics."
    },
    treatments: [
      { title: "Nasal Endoscopy", desc: "Pain-free, high-definition visualization of your sinus anatomy." },
      { title: "Allergy Management", desc: "Scientific identification and treatment of environmental triggers." },
      { title: "FESS Surgery", desc: "Minimally invasive Functional Endoscopic Sinus Surgery for long-term relief." },
      { title: "Deviated Septum", desc: "Corrective procedures to restore symmetric and unobstructed airflow." }
    ],
    cta: "Schedule a Sinus Consultation"
  },
  bn: {
    hero: {
      tag: "উন্নত সাইনাস সেবা",
      title: "সারা বছর নির্বিঘ্নে শ্বাস নিন।",
      desc: "অত্যাধুনিক এন্ডোস্কোপিক ডায়াগনস্টিকস ব্যবহার করে ক্রনিক সাইনাসাইটিস, নেজাল পলিপ এবং ক্রমাগত অ্যালার্জির সামগ্রিক সমাধান।"
    },
    treatments: [
      { title: "নেজাল এন্ডোস্কোপি", desc: "আপনার সাইনাস অ্যানাটমির যন্ত্রণাহীন, হাই-ডেফিনিশন ভিজুয়ালাইজেশন।" },
      { title: "অ্যালার্জি ব্যবস্থাপনা", desc: "পরিবেশগত কারণগুলোর বৈজ্ঞানিক শনাক্তকরণ এবং চিকিৎসা।" },
      { title: "এফইএসএস সার্জারি", desc: "দীর্ঘমেয়াদী স্বস্তির জন্য ন্যূনতম আক্রমণাত্মক এন্ডোস্কোপিক সাইনাস সার্জারি।" },
      { title: "বাঁকা হাড়ের চিকিৎসা", desc: "সুষম এবং বাধাহীন বায়ুপ্রবাহ পুনরুদ্ধারের জন্য সংশোধনমূলক পদ্ধতি।" }
    ],
    cta: "সাইনাস পরামর্শের জন্য অ্যাপয়েন্টমেন্ট নিন"
  }
};

export default function SinusCarePage({ params }: { params: { lang: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lang = params.lang as "en" | "bn";
  const content = translations[lang] || translations.en;
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-svc", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="flex-1 bg-[#0A1A12]">
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-24 px-6 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="reveal-svc text-xs uppercase tracking-[0.4em] text-rust font-semibold">
              {content.hero.tag}
            </span>
            <h1 className="reveal-svc text-5xl md:text-7xl lg:text-8xl font-serif text-paper leading-tight">
              {content.hero.title}
            </h1>
            <p className="reveal-svc text-xl text-paper/60 leading-relaxed max-w-2xl font-light">
              {content.hero.desc}
            </p>
            <div className="reveal-svc pt-4">
              <Link href={`/${lang}/book`}>
                <Button variant="rust" className="py-7 px-10 rounded-sm group">
                  {content.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="reveal-svc relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-white/10">
              <img
                src="/images/sinus-hero.png"
                alt="Sinus Care"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 lg:py-40 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {content.treatments.map((t, i) => (
              <div key={i} className="p-12 bg-[#0A1A12] space-y-6 hover:bg-forest/5 transition-colors group">
                <div className="w-12 h-12 bg-rust/10 flex items-center justify-center rounded-full text-rust group-hover:scale-110 transition-transform">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif text-paper">{t.title}</h3>
                <p className="text-paper/40 text-lg leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-40 px-6 lg:px-24 bg-forest/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <ShieldCheck className="w-16 h-16 text-rust mx-auto opacity-50" />
          <h2 className="text-4xl lg:text-6xl font-serif text-paper italic italic-rust">
            {isEn ? "Precision diagnostics for absolute relief." : "পরিপূর্ণ স্বস্তির জন্য নির্ভুল ডায়াগনস্টিকস।"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <p className="text-paper font-semibold text-xl">{isEn ? "No More Guesswork" : "কোনো অনুমানের চিকিৎসা নয়"}</p>
              <p className="text-paper/60 leading-relaxed">
                {isEn 
                  ? "Standard X-rays often miss deep-seated sinus issues. Our endoscopic evaluation provides a direct view of the problem." 
                  : "সাধারণ এক্স-রে অনেক সময় গভীর সাইনাস সমস্যা ধরতে পারে না। আমাদের এন্ডোস্কোপিক মূল্যায়ন সরাসরি সমস্যার চিত্র তুলে ধরে।"}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-paper font-semibold text-xl">{isEn ? "Personalized Therapy" : "ব্যক্তিগত চিকিৎসা পরিকল্পনা"}</p>
              <p className="text-paper/60 leading-relaxed">
                {isEn 
                  ? "We identify whether your issue is anatomical or inflammatory, ensuring you get the right treatment from day one." 
                  : "আপনার সমস্যাটি শারীরিক গঠনের কারণে নাকি প্রদাহজনিত, তা আমরা শনাক্ত করি এবং প্রথম দিন থেকেই সঠিক চিকিৎসা নিশ্চিত করি।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-24 text-center space-y-12">
        <h2 className="text-5xl lg:text-7xl font-serif text-paper">
          {isEn ? "Breathe better today." : "আজই আরও ভালোভাবে শ্বাস নিন।"}
        </h2>
        <Link href={`/${lang}/book`}>
          <Button variant="rust" className="py-8 px-16 text-xl rounded-sm">
            {isEn ? "Book a Sinus Checkup" : "সাইনাস চেকআপের জন্য বুক করুন"}
          </Button>
        </Link>
      </section>

    </main>
  );
}
