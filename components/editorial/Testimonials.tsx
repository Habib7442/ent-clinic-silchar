"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: 1,
    name: "Sumon Nath",
    role: "Consultation",
    concern: { en: "General ENT", bn: "সাধারণ ইএনটি" },
    content: {
      en: "Good experience the process is simple and Easy, also my problem got solved thanks sir.",
      bn: "দারুণ অভিজ্ঞতা, প্রক্রিয়াটি খুব সহজ এবং সরল ছিল, আমার সমস্যাও সমাধান হয়ে গেছে। ধন্যবাদ স্যার।"
    },
    rating: 5
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = window.innerWidth < 768 ? clientWidth * 0.85 : (window.innerWidth < 1024 ? clientWidth * 0.45 : 380);
      const gap = 32; // gap-8
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-24 bg-paper-warm relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-forest/5 blur-[120px] rounded-full translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold block">
            {isEn ? "Patient Success Stories" : "রোগীর সাফল্যের গল্প"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-tight">
            {isEn ? "Real outcomes for real lives." : "বাস্তব জীবনের জন্য বাস্তব ফলাফল।"}
          </h2>
        </div>

        {/* Carousel Wrapper with Side Overlay Navigation Arrows */}
        <div className="relative group/carousel">
          {/* Left Side Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-16px] lg:left-[-48px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-forest/15 hover:border-gold/50 flex items-center justify-center text-forest hover:text-gold bg-paper/90 backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer shadow-lg hidden md:flex"
            aria-label={isEn ? "Previous testimonial" : "পূর্ববর্তী প্রশংসাপত্র"}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Right Side Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-16px] lg:right-[-48px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-forest/15 hover:border-gold/50 flex items-center justify-center text-forest hover:text-gold bg-paper/90 backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer shadow-lg hidden md:flex"
            aria-label={isEn ? "Next testimonial" : "পরবর্তী প্রশংসাপত্র"}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none gap-6 pb-6 px-1"
          >
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="testimonial-card group relative p-10 bg-paper-card border border-hairline rounded-sm flex flex-col justify-between transition-all duration-500 hover:border-gold/30 shrink-0 w-[85vw] md:w-[45vw] lg:w-[380px] snap-start shadow-md hover:shadow-lg"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-forest/5 group-hover:text-gold/15 transition-colors" />
              
              <div className="space-y-6">
                <div className="flex gap-1 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                
                <p className="text-lg lg:text-xl text-ink-soft leading-relaxed font-light italic">
                  "{lang === "bn" ? item.content.bn : item.content.en}"
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-hairline space-y-1">
                <p className="text-forest font-serif text-xl font-semibold">{item.name}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-mute font-medium">
                  <span>{item.role}</span>
                  <span className="w-1 h-1 bg-gold rounded-full" />
                  <span className="text-gold">{lang === "bn" ? item.concern.bn : item.concern.en}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Trust Badge */}
        <div className="mt-16 lg:mt-24 flex flex-col items-center gap-4 py-8 border-y border-hairline">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold" />
              ))}
            </div>
            <span className="text-forest font-bold text-xl ml-2">4.9 / 5</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/80 font-medium text-center">
            {isEn ? "Based on 150+ Verified Google Reviews" : "১৫০+ যাচাইকৃত গুগল রিভিউ ভিত্তিক"}
          </p>
        </div>
      </div>
    </section>
  );
}
