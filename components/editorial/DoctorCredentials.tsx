"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase, Award, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const education = [
  { year: "2004 - 2007", degree: { en: "MS in ENT", bn: "এমএস ইন ইএনটি" }, institution: "Assam Medical College, Dibrugarh" },
  { year: "1997 - 2002", degree: { en: "MBBS", bn: "এমবিবিএস" }, institution: "Silchar Medical College & Hospital" }
];

const milestones = [
  { year: "2007 - Present", title: { en: "ENT Consultant & Founder", bn: "ইএনটি কনসালটেন্ট এবং প্রতিষ্ঠাতা" }, detail: { en: "The ENT Clinic Silchar", bn: "দি ইএনটি ক্লিনিক শিলচর" } },
  { year: "2012 - 2015", title: { en: "Advanced Surgical Training", bn: "উন্নত অস্ত্রোপচার প্রশিক্ষণ" }, detail: { en: "Head & Neck Surgery Specialization", bn: "হেড ও নেক সার্জারি স্পেশালাইজেশন" } }
];

interface DoctorCredentialsProps {
  lang: string;
}

export default function DoctorCredentials({ lang }: DoctorCredentialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-cred", 
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
    <section ref={containerRef} className="py-24 lg:py-40 px-6 lg:px-24 bg-[#0A1A12] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
        
        {/* Education Column */}
        <div className="space-y-16">
          <div className="reveal-cred space-y-4">
            <GraduationCap className="w-10 h-10 text-rust mb-6" />
            <h2 className="text-4xl lg:text-5xl font-serif text-paper">
              {isEn ? "Academic Excellence" : "শিক্ষাগত শ্রেষ্ঠত্ব"}
            </h2>
          </div>

          <div className="space-y-12">
            {education.map((item, idx) => (
              <div key={idx} className="reveal-cred space-y-2 relative pl-8 border-l border-white/10 hover:border-rust transition-colors duration-500">
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-rust rounded-full" />
                <p className="text-xs uppercase tracking-widest text-paper/40 font-semibold">{item.year}</p>
                <h3 className="text-2xl font-serif text-paper">{isEn ? item.degree.en : item.degree.bn}</h3>
                <p className="text-paper/60">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Column */}
        <div className="space-y-16">
          <div className="reveal-cred space-y-4">
            <Briefcase className="w-10 h-10 text-forest mb-6" />
            <h2 className="text-4xl lg:text-5xl font-serif text-paper">
              {isEn ? "Professional Journey" : "পেশাগত যাত্রা"}
            </h2>
          </div>

          <div className="space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="reveal-cred space-y-2 relative pl-8 border-l border-white/10 hover:border-forest transition-colors duration-500">
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-forest rounded-full" />
                <p className="text-xs uppercase tracking-widest text-paper/40 font-semibold">{item.year}</p>
                <h3 className="text-2xl font-serif text-paper">{isEn ? item.title.en : item.title.bn}</h3>
                <p className="text-paper/60">{isEn ? item.detail.en : item.detail.bn}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
