"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: 1,
    name: "Premision Manar",
    role: "Surgical Patient",
    concern: { en: "ENT Surgery", bn: "ইএনটি সার্জারি" },
    content: { 
      en: "Best clinic in Silchar. I thank Dr. Abhishek Ray for his quick and affordable diagnosis of my surgery. Better recovery and polite staff behavior.",
      bn: "শিলচরের সেরা ক্লিনিক। আমার অস্ত্রোপচারের দ্রুত এবং সাশ্রয়ী রোগ নির্ণয়ের জন্য আমি ডাঃ অভিষেক রায়কে ধন্যবাদ জানাই। ভালো রিকভারি এবং কর্মীদের নম্র ব্যবহার।"
    },
    rating: 5
  },
  {
    id: 2,
    name: "Dhaval Thakkar",
    role: "Consultation",
    concern: { en: "General ENT", bn: "সাধারণ ইএনটি" },
    content: { 
      en: "Genuine doctor. Properly diagnosed my issue and gave me correct directions. Didn't even charge for consultation when I went there the second time. Highly recommended!",
      bn: "খুবই সৎ ডাক্তার। আমার সমস্যাটি সঠিকভাবে নির্ণয় করেছেন এবং সঠিক নির্দেশনা দিয়েছেন। দ্বিতীয়বার যখন গিয়েছিলাম তখন পরামর্শের জন্য কোনো ফি নেননি।"
    },
    rating: 5
  },
  {
    id: 3,
    name: "Mala Paul",
    role: "Chronic Care",
    concern: { en: "Medical Management", bn: "মেডিক্যাল ম্যানেজমেন্ট" },
    content: { 
      en: "Dr. Abhishek is one of the best ENT doctors to get treated from. Very genuine and generous and his medicines do wonders.",
      bn: "চিকিৎসা নেওয়ার জন্য ডাঃ অভিষেক অন্যতম সেরা ইএনটি ডাক্তার। খুবই সৎ এবং উদার এবং উনার ওষুধগুলো চমৎকার কাজ করে।"
    },
    rating: 5
  }
];

interface TestimonialsProps {
  lang: string;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card", 
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
    <section ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-24 bg-[#0A1A12] relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-forest/5 blur-[120px] rounded-full translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
            {isEn ? "Patient Success Stories" : "রোগীর সাফল্যের গল্প"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper leading-tight">
            {isEn ? "Real outcomes for real lives." : "বাস্তব জীবনের জন্য বাস্তব ফলাফল।"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="testimonial-card group relative p-10 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between transition-all duration-500 hover:border-gold/30"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-gold/15 transition-colors" />
              
              <div className="space-y-6">
                <div className="flex gap-1 text-rust">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rust" />
                  ))}
                </div>
                
                <p className="text-lg lg:text-xl text-paper/80 leading-relaxed font-light italic">
                  "{lang === "bn" ? item.content.bn : item.content.en}"
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 space-y-1">
                <p className="text-paper font-serif text-xl">{item.name}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-paper/60">
                  <span>{item.role}</span>
                  <span className="w-1 h-1 bg-rust rounded-full" />
                  <span className="text-rust">{lang === "bn" ? item.concern.bn : item.concern.en}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 lg:mt-24 flex flex-col items-center gap-4 py-8 border-y border-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-rust">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-rust" />
              ))}
            </div>
            <span className="text-paper font-bold text-xl ml-2">4.9 / 5</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-paper/60">
            {isEn ? "Based on 150+ Verified Google Reviews" : "১৫০+ যাচাইকৃত গুগল রিভিউ ভিত্তিক"}
          </p>
        </div>
      </div>
    </section>
  );
}
