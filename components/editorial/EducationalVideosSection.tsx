"use client";

import { useState } from "react";
import { Play, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EducationalVideosSectionProps {
  lang: string;
}

const translations = {
  en: {
    eyebrow: "Education Hub",
    title: "Health Education",
    subtitle: "Dr. Abhishek Ray shares quick guides, practical exercises, and clinical tips to support your neurological and ENT wellness.",
    featured: "Featured Video",
    videoTitle: "Stop Doomscrolling: 1-Minute Brain Exercise",
    videoContext: "Instead of doomscrolling, take a quick hand exercise break to stimulate neural paths and prevent cognitive decline. These simple neuro-motor movements boost coordination and brain connectivity.",
    viewAll: "Explore Video Library",
    upcoming: "Upcoming Video Series",
    tinnitusTitle: "Understanding Tinnitus: Causes & Relief",
    tinnitusDesc: "Learn how the brain processes ear ringing and explore modern habituation and sound therapies.",
    hygieneTitle: "Safe Ear Hygiene: The Gold Standards",
    hygieneDesc: "Dr. Ray explains why cotton buds are harmful and how ears naturally self-clean.",
    comingSoon: "Coming Soon"
  },
  bn: {
    eyebrow: "শিক্ষা হাব",
    title: "স্বাস্থ্য শিক্ষা",
    subtitle: "ডাঃ অভিষেক রায় আপনার কান, নাক, গলা এবং মস্তিষ্কের সুস্থতা বজায় রাখতে সাহায্য করার জন্য গুরুত্বপূর্ণ ব্যায়াম ও পরামর্শ শেয়ার করেছেন।",
    featured: "বিশেষ ভিডিও",
    videoTitle: "ডুমস্ক্রলিং বন্ধ করুন: ১ মিনিটের মস্তিষ্কের ব্যায়াম",
    videoContext: "ডুমস্ক্রলিং করার পরিবর্তে ডিমেনশিয়া প্রতিরোধ করতে একটি হাতের ব্যায়ামের বিরতি নিন। এই সহজ নিউরো-মোটর আন্দোলনগুলো মস্তিষ্কের সংযোগকে উদ্দীপিত করে এবং মনোযোগ বাড়ায়।",
    viewAll: "ভিডিও লাইব্রেরি দেখুন",
    upcoming: "আসন্ন ভিডিও সিরিজ",
    tinnitusTitle: "টিনিটাস বোঝা: কারণ ও উপশম",
    tinnitusDesc: "মস্তিষ্ক কীভাবে কানের ভেতর ক্রমাগত শব্দ হওয়া প্রক্রিয়া করে এবং আধুনিক সাউন্ড থেরাপি সম্পর্কে জানুন।",
    hygieneTitle: "নিরাপদ কানের স্বাস্থ্যবিধি: সঠিক নিয়ম",
    hygieneDesc: "কটন বাড কেন ক্ষতিকর এবং কান প্রাকৃতিকভাবে কীভাবে পরিষ্কার হয় তা ডাঃ রায় ব্যাখ্যা করেছেন।",
    comingSoon: "আসন্ন"
  }
};

export default function EducationalVideosSection({ lang }: EducationalVideosSectionProps) {
  const isEn = lang === "en";
  const content = translations[lang as "en" | "bn"] || translations.en;
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "qIOWrB3A5gI";

  return (
    <section
      id="educational-videos-section"
      className="py-12 lg:py-16 px-6 lg:px-24 bg-paper-warm border-t border-hairline relative overflow-hidden"
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

        {/* Balanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Player Card */}
          <div className="lg:col-span-5 bg-paper border border-hairline rounded-sm p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-sm overflow-hidden border border-hairline shadow-inner bg-[#0A1A12]">
              {!isPlaying ? (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={content.videoTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/35 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-14 h-14 bg-[#0A1A12] text-paper rounded-full flex items-center justify-center shadow-xl border border-gold/25 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-gold group-hover:text-[#0A1A12] cursor-pointer"
                      aria-label={isEn ? "Play educational video" : "শিক্ষামূলক ভিডিও প্লে করুন"}
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={content.videoTitle}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Right Column: Detailed Context and CTA */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-serif text-forest leading-tight">
                {content.videoTitle}
              </h3>
              <div className="w-16 h-px bg-forest/20 my-4" />
              <p className="text-base md:text-lg text-ink-soft leading-relaxed font-light">
                {content.videoContext}
              </p>
            </div>

            {/* CTA Button Link to Subpage */}
            <div className="pt-4">
              <Link href={`/${lang}/videos`}>
                <button className="group flex items-center gap-3 px-8 py-4 bg-[#0A1A12] text-[#F6F1E6] rounded-sm hover:bg-[#11291D] hover:shadow-lg border border-gold/15 transition-all duration-300 text-xs font-semibold uppercase tracking-widest cursor-pointer">
                  <span>{content.viewAll}</span>
                  <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
