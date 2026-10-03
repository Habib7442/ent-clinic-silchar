"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseSlide {
  src: string;
  alt: { en: string; bn: string };
  caption: { en: string; bn: string };
  /** Graphic surgical imagery is blurred until the viewer opts in. */
  sensitive?: boolean;
}

const slides: CaseSlide[] = [
  {
    src: "/images/testimonials/thyroid-goiter/before-surgery.webp",
    alt: {
      en: "Patient with a large thyroid goiter swelling in the neck before surgery",
      bn: "অস্ত্রোপচারের আগে গলায় বড় থাইরয়েড গলগণ্ড সহ রোগী",
    },
    caption: { en: "Before surgery", bn: "অস্ত্রোপচারের আগে" },
  },
  {
    src: "/images/testimonials/thyroid-goiter/excised-specimen.webp",
    alt: {
      en: "Enlarged thyroid goiter after surgical removal",
      bn: "অস্ত্রোপচারের মাধ্যমে অপসারিত বর্ধিত থাইরয়েড গলগণ্ড",
    },
    caption: { en: "Goiter after surgical removal", bn: "অস্ত্রোপচারের পর অপসারিত গলগণ্ড" },
    sensitive: true,
  },
];

const translations = {
  en: {
    eyebrow: "Surgical Case",
    title: "Enlarged Thyroid Goiter",
    subtitle: "Surgically removed",
    body: "A large thyroid swelling of the neck, removed surgically by Dr. Abhishek Ray at The ENT Clinic, Silchar.",
    sensitiveLabel: "Contains surgical imagery",
    sensitiveCta: "Tap to view",
    prev: "Previous image",
    next: "Next image",
    goTo: "Show image",
  },
  bn: {
    eyebrow: "সার্জিক্যাল কেস",
    title: "বর্ধিত থাইরয়েড গলগণ্ড",
    subtitle: "অস্ত্রোপচারের মাধ্যমে অপসারিত",
    body: "গলার একটি বড় থাইরয়েড ফোলা, যা দি ইএনটি ক্লিনিক, শিলচরে ডাঃ অভিষেক রায় অস্ত্রোপচারের মাধ্যমে অপসারণ করেছেন।",
    sensitiveLabel: "অস্ত্রোপচারের ছবি রয়েছে",
    sensitiveCta: "দেখতে ট্যাপ করুন",
    prev: "আগের ছবি",
    next: "পরের ছবি",
    goTo: "ছবি দেখুন",
  },
};

interface SurgicalCaseCarouselProps {
  lang: string;
}

export default function SurgicalCaseCarousel({ lang }: SurgicalCaseCarouselProps) {
  const isEn = lang === "en";
  const content = translations[lang as "en" | "bn"] || translations.en;
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    // 40px threshold so vertical scrolling doesn't trigger accidental swipes
    if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div className="video-testimonial-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-paper-card border border-hairline rounded-sm p-6 lg:p-10 shadow-md">
      {/* Carousel */}
      <div className="lg:col-span-5">
        <div
          className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-sm bg-[#0A1A12] border border-hairline"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
        >
          <div
            className="flex h-full motion-safe:transition-transform motion-safe:duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => {
              const hidden = slide.sensitive && !revealed[i];
              return (
                <div
                  key={slide.src}
                  className="relative h-full w-full shrink-0"
                  aria-roledescription="slide"
                  aria-hidden={i !== index}
                >
                  <Image
                    src={slide.src}
                    alt={isEn ? slide.alt.en : slide.alt.bn}
                    fill
                    sizes="(max-width: 1024px) 90vw, 384px"
                    className={cn("object-contain transition-[filter] duration-500", hidden && "blur-2xl scale-110")}
                  />
                  {hidden && (
                    <button
                      type="button"
                      onClick={() => setRevealed((prev) => ({ ...prev, [i]: true }))}
                      tabIndex={i === index ? 0 : -1}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0A1A12]/60 text-paper cursor-pointer"
                    >
                      <EyeOff className="w-8 h-8 text-gold" />
                      <span className="text-sm font-semibold">{content.sensitiveLabel}</span>
                      <span className="text-[10px] uppercase tracking-widest text-paper/70 border border-paper/30 rounded-sm px-4 py-2">
                        {content.sensitiveCta}
                      </span>
                    </button>
                  )}
                  <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1A12]/90 to-transparent px-4 pt-8 pb-3 text-xs uppercase tracking-widest text-paper font-semibold pointer-events-none">
                    {isEn ? slide.caption.en : slide.caption.bn}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-paper/90 text-forest hover:text-gold border border-forest/15 flex items-center justify-center shadow-lg cursor-pointer"
            aria-label={content.prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-paper/90 text-forest hover:text-gold border border-forest/15 flex items-center justify-center shadow-lg cursor-pointer"
            aria-label={content.next}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                i === index ? "w-8 bg-gold" : "w-4 bg-forest/20 hover:bg-forest/40"
              )}
              aria-label={`${content.goTo} ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>

      {/* Case Details */}
      <div className="lg:col-span-7 space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold block">
          {content.eyebrow}
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest leading-tight">
          {content.title}
        </h3>
        <p className="text-xl lg:text-2xl text-forest-soft font-serif italic">
          {content.subtitle}
        </p>
        <div className="w-16 h-px bg-forest/20 my-4" />
        <p className="text-base md:text-lg text-ink-soft leading-relaxed font-light max-w-xl">
          {content.body}
        </p>
      </div>
    </div>
  );
}
