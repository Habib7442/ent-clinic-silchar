"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    question: "Shall we see you this week?",
    subline: "Expert ENT care is just one tap away. Choose the way you prefer to connect.",
    primary: "Book Online",
    whatsapp: "WhatsApp Us",
    call: "Call Clinic"
  },
  bn: {
    question: "আমরা কি এই সপ্তাহে আপনাকে দেখতে পারি?",
    subline: "বিশেষজ্ঞ ইএনটি সেবা এখন আপনার হাতের নাগালে। আপনার পছন্দের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।",
    primary: "অনলাইন বুকিং",
    whatsapp: "হোয়াটসঅ্যাপ করুন",
    call: "কল করুন"
  }
};

interface ClosingCTAProps {
  lang: string;
}

export default function ClosingCTA({ lang }: ClosingCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = translations[lang as "en" | "bn"] || translations.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-cta", 
        { 
          y: 40, 
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
            start: "top 85%",
            toggleActions: "play none none none"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-16 lg:py-24 px-6 lg:px-24 bg-[#0A1A12] overflow-hidden text-center">
      {/* Dynamic background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-forest/10 blur-[100px] md:blur-[140px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="reveal-cta text-5xl md:text-7xl lg:text-9xl font-serif text-paper leading-tight italic italic-rust">
            {content.question}
          </h2>
          <p className="reveal-cta text-xl lg:text-2xl text-paper/60 font-light max-w-2xl mx-auto leading-relaxed">
            {content.subline}
          </p>
        </div>

        <div className="reveal-cta flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href={`/${lang}/book`} className="w-full md:w-auto">
            <Button variant="rust" className="w-full md:w-auto py-8 px-12 text-lg rounded-sm group">
              <Calendar className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
              {content.primary}
            </Button>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="https://wa.me/919435070156" className="flex-1">
              <Button variant="outline" className="w-full py-8 px-8 border-white/10 hover:border-gold hover:bg-transparent text-paper group">
                <MessageSquare className="w-5 h-5 mr-3 text-forest group-hover:scale-110 transition-transform" />
                {content.whatsapp}
              </Button>
            </a>
            
            <a href="tel:+919435070156" className="flex-1">
              <Button variant="outline" className="w-full py-8 px-8 border-white/10 hover:border-gold hover:bg-transparent text-paper group">
                <Phone className="w-5 h-5 mr-3 text-rust group-hover:scale-110 transition-transform" />
                {content.call}
              </Button>
            </a>
          </div>
        </div>

        <div className="reveal-cta pt-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-paper/30">
            {lang === "en" ? "Available Monday — Saturday · Silchar, Assam" : "সোমবার — শনিবার উপলব্ধ · শিলচর, আসাম"}
          </p>
        </div>
      </div>
    </section>
  );
}
