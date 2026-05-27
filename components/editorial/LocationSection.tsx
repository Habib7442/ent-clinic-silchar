"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Car, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const locations = [
  { name: { en: "Silchar Town", bn: "শিলচর শহর" }, time: "10 mins" },
  { name: { en: "Hailakandi", bn: "হাইলাকান্দি" }, time: "1 hour" },
  { name: { en: "Karimganj", bn: "করিমগঞ্জ" }, time: "1.5 hours" },
  { name: { en: "Airport", bn: "বিমানবন্দর" }, time: "45 mins" }
];

const hours = [
  { day: { en: "Monday - Saturday", bn: "সোমবার - শনিবার" }, time: "10:00 AM - 08:00 PM" },
  { day: { en: "Sunday", bn: "রবিবার" }, time: { en: "Closed", bn: "বন্ধ" } }
];

interface LocationSectionProps {
  lang: string;
  bgClass?: string;
}

export default function LocationSection({ lang, bgClass = "bg-paper" }: LocationSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-loc", 
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
    <section id="location" ref={containerRef} className={`py-12 lg:py-16 px-6 lg:px-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="reveal-loc space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                {isEn ? "Location & Access" : "অবস্থান ও যাতায়াত"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-tight">
                {isEn ? "Easy to find. Easy to reach." : "সহজ অবস্থান। সহজ যাতায়াত।"}
              </h2>
            </div>

            <div className="reveal-loc space-y-6">
              <div className="flex items-start gap-4 p-6 bg-paper-card border border-hairline rounded-sm shadow-md">
                <MapPin className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <p className="text-forest font-serif text-xl mb-2 font-semibold">
                    {isEn ? "Hriday Rajani Complex" : "হৃদয় রজনী কমপ্লেক্স"}
                  </p>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    {isEn 
                      ? "Lochan Bairagi Rd, beside Durga Badi, Bilpar, Silchar, Assam 788001"
                      : "লোচন বৈরাগী রোড, দুর্গা বাড়ি-র পাশে, বিলপার, শিলচর, আসাম ৭৮৮০০১"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc) => (
                  <div key={loc.name.en} className="p-4 bg-paper-card border border-hairline rounded-sm flex flex-col gap-1 shadow-sm">
                    <span className="text-[10px] uppercase tracking-widest text-mute font-medium">{isEn ? loc.name.en : loc.name.bn}</span>
                    <span className="text-forest font-bold">{loc.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-loc space-y-6 pt-8 border-t border-hairline">
              <div className="flex items-center gap-4 text-ink-soft">
                <Car className="w-5 h-5 text-forest" />
                <span className="text-sm font-medium">{isEn ? "Free On-site Parking Available" : "ক্লিনিকে পার্কিং ব্যবস্থা আছে"}</span>
              </div>
            </div>

            <div className="reveal-loc">
              <a 
                href="https://maps.google.com/?q=The+ENT+Clinic+Silchar+Hriday+Rajani+Complex+Lochan+Bairagi+Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-block"
              >
                <Button variant="rust" className="w-full lg:w-auto py-6 px-10">
                  <Navigation className="w-4 h-4 mr-2" />
                  {isEn ? "Get Directions" : "ম্যাপে দেখুন"}
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Hours & Map Placeholder */}
          <div className="lg:col-span-7 space-y-12">
            {/* Hours Card */}
            <div className="reveal-loc p-8 lg:p-12 bg-paper-warm border border-hairline rounded-sm shadow-md">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-serif text-forest font-semibold">{isEn ? "Clinic Hours" : "ক্লিনিকের সময়সূচী"}</h3>
              </div>
              
              <div className="space-y-6">
                {hours.map((h) => (
                  <div key={h.day.en} className="flex justify-between items-center py-4 border-b border-hairline last:border-0">
                    <span className="text-ink-soft font-medium">{isEn ? h.day.en : h.day.bn}</span>
                    <span className={(typeof h.time !== 'string' && h.time.en === "Closed") ? "text-gold font-bold" : "text-forest font-bold"}>
                      {typeof h.time === 'string' ? h.time : (isEn ? h.time.en : h.time.bn)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-loc relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-sm overflow-hidden border border-hairline group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.3448291394222!2d92.80013211814338!3d24.81669857211992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4bc39d29f7cd%3A0xa1149eff6fb1f70d!2sEAR%20CLINIC!5e0!3m2!1sen!2sin!4v1779078655094!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale-[0.1] contrast-[1.0] brightness-[1.0] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-hairline" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
