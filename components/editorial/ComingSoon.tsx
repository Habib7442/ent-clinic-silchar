"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  lang: string;
  pageName: string;
}

export default function ComingSoon({ lang, pageName }: ComingSoonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-soon", 
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="reveal-soon mb-8">
        <div className="p-6 bg-rust/10 rounded-full inline-block">
          <Construction className="w-12 h-12 text-rust" />
        </div>
      </div>
      
      <div className="reveal-soon space-y-4 mb-12">
        <h1 className="text-5xl md:text-7xl font-serif text-paper">
          {pageName} <span className="text-rust">.</span>
        </h1>
        <p className="text-xl text-paper/40 max-w-md mx-auto">
          {isEn 
            ? "We are currently curating this experience. Please check back soon." 
            : "আমরা বর্তমানে এই অভিজ্ঞতাটি সাজাচ্ছি। দয়া করে শীঘ্রই আবার দেখুন।"}
        </p>
      </div>

      <div className="reveal-soon">
        <Link href={`/${lang}`}>
          <Button variant="outline" className="border-white/10 text-paper hover:border-rust group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            {isEn ? "Back to Clinic" : "ক্লিনিকে ফিরে যান"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
