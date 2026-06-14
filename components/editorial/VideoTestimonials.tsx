"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    eyebrow: "Patient Testimonials",
    title: "Voices of Recovery",
    subtitle: "Real stories from our patients sharing their clinical experiences and recovery journeys."
  },
  bn: {
    eyebrow: "রোগীদের প্রশংসাপত্র",
    title: "সুস্থতার কণ্ঠস্বর",
    subtitle: "আমাদের রোগীদের কাছ থেকে তাদের চিকিৎসা ও আরোগ্য লাভের বাস্তব অভিজ্ঞতা শুনুন।"
  }
};

const standardVideos = [
  { id: "slxVg_6l2wg", title: "Vertigo & Balance Rehabilitation" },
  { id: "BRRG6jJEsOo", title: "Hearing Restoration Journey" },
  { id: "mJT04a0V50Q", title: "ENT Consultation & Patient Recovery" }
];

const shortsVideos = [
  { id: "IcN-DPaVQy4", title: "Micro-Ear Surgery Recovery" },
  { id: "IWhHhjHGVaQ", title: "Sinus & FESS Relief" },
  { id: "QTOjn9bAr28", title: "Patient Treatment Testimonial" },
  { id: "xywzWbF612c", title: "Ear Care Recovery Story" }
];

interface VideoTestimonialsProps {
  lang: string;
}

export default function VideoTestimonials({ lang }: VideoTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";
  const content = translations[lang as "en" | "bn"] || translations.en;
  
  const [activeVideos, setActiveVideos] = useState<Record<string, boolean>>({});

  const playVideo = (id: string) => {
    setActiveVideos((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".video-testimonial-card",
        {
          y: 40,
          opacity: 0,
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
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="video-testimonials"
      ref={containerRef}
      className="py-12 lg:py-16 px-6 lg:px-24 bg-paper relative overflow-hidden border-t border-hairline"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
            {content.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-tight">
            {content.title}
          </h2>
          <p className="text-lg text-ink-soft/80 font-light max-w-2xl">
            {content.subtitle}
          </p>
        </div>

        {/* Grid Layouts Container */}
        <div className="space-y-6">
          {/* Row of 3 Standard 16:9 Videos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standardVideos.map((item) => {
              const isPlaying = !!activeVideos[item.id];
              return (
                <div
                  key={item.id}
                  className="video-testimonial-card group bg-paper-card border border-hairline rounded-sm transition-all duration-500 hover:border-gold/30 hover:shadow-lg overflow-hidden relative aspect-[16/9] w-full"
                >
                  {!isPlaying ? (
                    <div
                      onClick={() => playVideo(item.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Elegant Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-forest/15 group-hover:bg-forest/30 transition-colors duration-500" />
                      
                      {/* Play Button Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="w-14 h-14 bg-[#0A1A12] text-paper rounded-full flex items-center justify-center shadow-xl border border-gold/25 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-gold group-hover:text-[#0A1A12] cursor-pointer"
                          aria-label={isEn ? `Play testimonial video` : `প্রশংসাপত্র ভিডিওটি প্লে করুন`}
                        >
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </button>
                      </div>


                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={item.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Row of 4 Shorts 9:16 Videos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {shortsVideos.map((item) => {
              const isPlaying = !!activeVideos[item.id];
              return (
                <div
                  key={item.id}
                  className="video-testimonial-card group bg-paper-card border border-hairline rounded-sm transition-all duration-500 hover:border-gold/30 hover:shadow-lg overflow-hidden relative aspect-[9/16] w-full"
                >
                  {!isPlaying ? (
                    <div
                      onClick={() => playVideo(item.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Elegant Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-forest/15 group-hover:bg-forest/30 transition-colors duration-500" />
                      
                      {/* Play Button Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="w-14 h-14 bg-[#0A1A12] text-paper rounded-full flex items-center justify-center shadow-xl border border-gold/25 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-gold group-hover:text-[#0A1A12] cursor-pointer"
                          aria-label={isEn ? `Play testimonial video` : `প্রশংসাপত্র ভিডিওটি প্লে করুন`}
                        >
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </button>
                      </div>


                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={item.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
