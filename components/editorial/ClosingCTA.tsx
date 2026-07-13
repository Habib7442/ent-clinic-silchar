"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
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
    <section ref={containerRef} className="relative py-16 lg:py-24 px-6 lg:px-24 bg-forest overflow-hidden text-center">
      {/* Dynamic background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 blur-[100px] md:blur-[140px] rounded-full animate-pulse" />
      </div>
 
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="reveal-cta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-paper leading-tight italic font-semibold">
            {content.question}
          </h2>
          <p className="reveal-cta text-xl lg:text-2xl text-paper/70 font-light max-w-2xl mx-auto leading-relaxed">
            {content.subline}
          </p>
        </div>

        <div className="reveal-cta flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href={`/${lang}/book`} className="w-full md:w-auto">
            <Button variant="rust" className="w-full md:w-auto py-8 px-12 text-lg rounded-sm group shadow-xl">
              <Calendar className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
              {content.primary}
            </Button>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href={
                lang === "bn" 
                  ? "https://wa.me/919435070156?text=নমস্কার%2C%20আমি%20দি%20ইএনটি%20ক্লিনিক%20শিলচরের%20সাথে%20যোগাযোগ%20করতে%20চাই।"
                  : "https://wa.me/919435070156?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20The%20ENT%20Clinic%20Silchar%20regarding%20an%20appointment."
              } 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full py-8 px-8 border-paper/20 hover:border-gold hover:bg-white/5 text-paper group flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5 mr-3 text-[#25D366] group-hover:scale-110 transition-transform" />
                {content.whatsapp}
              </Button>
            </a>
            
            <a href="tel:+919435070156" className="flex-1">
              <Button variant="outline" className="w-full py-8 px-8 border-paper/20 hover:border-gold hover:bg-white/5 text-paper group">
                <Phone className="w-5 h-5 mr-3 text-gold group-hover:scale-110 transition-transform" />
                {content.call}
              </Button>
            </a>
          </div>
        </div>

        <div className="reveal-cta pt-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-paper/60 font-semibold">
            {lang === "en" ? "Available Monday — Saturday · Silchar, Assam" : "সোমবার — শনিবার উপলব্ধ · শিলচর, আসাম"}
          </p>
        </div>
      </div>
    </section>
  );
}
