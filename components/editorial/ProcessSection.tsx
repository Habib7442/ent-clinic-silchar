"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: { en: "Arrival & Registration", bn: "আগমন ও নিবন্ধন" },
    duration: "5 mins",
    description: { en: "Check-in at the reception and complete basic paperwork.", bn: "রিসেপশনে চেক-ইন করুন এবং প্রাথমিক কাগজপত্র সম্পন্ন করুন।" }
  },
  {
    number: "02",
    title: { en: "Vitals & Pre-screening", bn: "ভাইটাল ও প্রি-স্ক্রিনিং" },
    duration: "10 mins",
    description: { en: "Initial assessment of vitals and symptom logging.", bn: "ভাইটাল এবং উপসর্গের প্রাথমিক মূল্যায়ন।" }
  },
  {
    number: "03",
    title: { en: "Detailed Consultation", bn: "বিস্তারিত পরামর্শ" },
    duration: "15-20 mins",
    description: { en: "One-on-one discussion of your concerns with Dr. Ray.", bn: "ডাঃ রায়ের সাথে আপনার সমস্যা নিয়ে সরাসরি আলোচনা।" }
  },
  {
    number: "04",
    title: { en: "Clinical Examination", bn: "ক্লিনিকাল পরীক্ষা" },
    duration: "10 mins",
    description: { en: "Physical examination of ears, nose, or throat using specialized tools.", bn: "বিশেষ সরঞ্জামের মাধ্যমে কান, নাক বা গলার শারীরিক পরীক্ষা।" }
  },
  {
    number: "05",
    title: { en: "Diagnostic Procedures", bn: "ডায়াগনস্টিক পরীক্ষা" },
    duration: "Variable",
    description: { en: "Advanced tests like endoscopy or audiometry if required.", bn: "প্রয়োজন অনুযায়ী এন্ডোস্কোপি বা অডিওমেট্রির মতো উন্নত পরীক্ষা।" }
  },
  {
    number: "06",
    title: { en: "Treatment Planning", bn: "চিকিৎসা পরিকল্পনা" },
    duration: "10 mins",
    description: { en: "Detailed explanation of diagnosis and recommended next steps.", bn: "রোগ নির্ণয় এবং পরবর্তী পদক্ষেপের বিস্তারিত ব্যাখ্যা।" }
  },
  {
    number: "07",
    title: { en: "Follow-up & Discharge", bn: "ফলো-আপ ও ডিসচার্জ" },
    duration: "5 mins",
    description: { en: "Scheduling follow-up visits and completing the visit.", bn: "ফলো-আপ ভিজিট নির্ধারণ এবং ভিজিট সম্পন্ন করা।" }
  }
];

interface ProcessSectionProps {
  lang: string;
}

export default function ProcessSection({ lang }: ProcessSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      gsap.fromTo(".process-line", 
        { 
          scaleY: 0 
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
          transformOrigin: "top",
          ease: "none",
        }
      );

      // Steps animation
      gsap.fromTo(".process-step", 
        { 
          x: -30, 
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 85%",
            toggleActions: "play none none none"
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-12 lg:py-16 px-6 lg:px-24 bg-paper-warm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20 lg:mb-32 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            {isEn ? "The Clinical Journey" : "ক্লিনিকাল যাত্রা"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-tight">
            {isEn ? "What to expect during your first visit." : "প্রথম ভিজিটের সময় কী আশা করবেন।"}
          </h2>
        </div>

        <div className="process-container relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-[45px] top-0 bottom-0 w-px bg-forest/10" />
          <div className="process-line hidden lg:block absolute left-[45px] top-0 bottom-0 w-px bg-gold" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step) => (
              <div key={step.number} className="process-step group relative lg:pl-32">
                {/* Step Marker */}
                <div className="hidden lg:flex absolute left-0 top-0 w-24 h-24 items-center justify-center bg-paper-warm z-10">
                  <span className="font-serif text-3xl text-forest/20 group-hover:text-gold transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
                  <div className="max-w-xl space-y-4">
                    <div className="flex items-center gap-4 lg:hidden">
                      <span className="text-gold font-serif text-2xl">{step.number}</span>
                      <div className="h-px flex-1 bg-forest/10" />
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-serif text-forest">
                      {lang === "bn" ? step.title.bn : step.title.en}
                    </h3>
                    <p className="text-ink-soft text-lg leading-relaxed">
                      {lang === "bn" ? step.description.bn : step.description.en}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 py-2 px-4 bg-forest/5 border border-forest/10 rounded-full w-fit">
                    <Clock className="w-4 h-4 text-forest" />
                    <span className="text-[10px] uppercase tracking-widest text-ink font-semibold">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
