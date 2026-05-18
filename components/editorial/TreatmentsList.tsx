"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/lib/treatments";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TreatmentsListProps {
  lang: string;
}

export default function TreatmentsList({ lang }: TreatmentsListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".treatment-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-24 bg-paper border-t border-forest/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
            {isEn ? "Specialized Procedures" : "বিশেষ প্রক্রিয়া"}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-forest mt-4 leading-tight">
            {isEn ? "Advanced Treatments" : "উন্নত চিকিৎসাসমূহ"}
          </h2>
          <p className="mt-4 text-ink-soft max-w-2xl text-lg">
            {isEn 
              ? "We offer state-of-the-art surgical and medical treatments for comprehensive ENT care. Discover our specialized procedures below."
              : "আমরা ব্যাপক ইএনটি যত্নের জন্য অত্যাধুনিক অস্ত্রোপচার এবং চিকিৎসা প্রদান করি। নিচে আমাদের বিশেষ প্রক্রিয়াগুলি দেখুন।"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/${lang}/treatments/${treatment.slug}`}
              className="treatment-item group flex flex-row items-center gap-4 p-4 bg-white rounded-xl border border-forest/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 bg-paper border border-forest/5">
                <Image
                  src={treatment.image}
                  alt={isEn ? treatment.titleEn : treatment.titleBn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-serif font-semibold text-forest group-hover:text-rust transition-colors duration-200 truncate pr-2">
                    {isEn ? treatment.titleEn : treatment.titleBn}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-rust opacity-0 shrink-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-ink-soft line-clamp-2 leading-relaxed">
                  {isEn ? treatment.descEn : treatment.descBn}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
