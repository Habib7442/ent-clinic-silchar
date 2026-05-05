"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Ear, ArrowRight, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/editorial/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    hero: {
      tag: "Specialized Hearing Care",
      title: "Reconnect with the sounds of your life.",
      desc: "From subtle tinnitus to profound hearing loss, we provide precise diagnostics and honest advice for your auditory health."
    },
    treatments: [
      { title: "Pure Tone Audiometry", desc: "Gold-standard hearing threshold testing in our soundproof booth." },
      { title: "Tinnitus Management", desc: "Scientific strategies to reduce the impact of persistent ringing in the ears." },
      { title: "Hearing Aid Trials", desc: "Transparent, multi-brand trials with no sales pressure." },
      { title: "Ear Wax Removal", desc: "Safe, microsuction-based clearance for immediate relief." }
    ],
    cta: "Start your hearing journey"
  },
  bn: {
    hero: {
      tag: "বিশেষায়িত শ্রবণ শক্তি সেবা",
      title: "জীবনের শব্দগুলোর সাথে পুনরায় যুক্ত হন।",
      desc: "সামান্য কানের ভোঁ-ভোঁ শব্দ থেকে শুরু করে গভীর শ্রবণ ক্ষমতা হ্রাস পর্যন্ত, আমরা আপনার শ্রবণ স্বাস্থ্যের জন্য নির্ভুল ডায়াগনস্টিকস এবং সৎ পরামর্শ প্রদান করি।"
    },
    treatments: [
      { title: "পিওর টোন অডিওমেট্রি", desc: "আমাদের শব্দরোধী বুথে গোল্ড-স্ট্যান্ডার্ড শ্রবণ ক্ষমতা পরীক্ষা।" },
      { title: "টিনিটাস ব্যবস্থাপনা", desc: "কানে ক্রমাগত শব্দ হওয়ার প্রভাব কমানোর বৈজ্ঞানিক কৌশল।" },
      { title: "হিয়ারিং এইড ট্রায়াল", desc: "বিক্রয়ের চাপ ছাড়াই স্বচ্ছ, মাল্টি-ব্র্যান্ড ট্রায়াল।" },
      { title: "কানের খোল পরিষ্কার", desc: "তাত্ক্ষণিক স্বস্তির জন্য নিরাপদ, মাইক্রোসাকশন-ভিত্তিক ব্যবস্থা।" }
    ],
    cta: "আপনার শ্রবণ যাত্রা শুরু করুন"
  }
};

export default function HearingCarePage({ params }: { params: { lang: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lang = params.lang as "en" | "bn";
  const content = translations[lang] || translations.en;
  const isEn = lang === "en";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-svc", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="flex-1 bg-[#0A1A12]">
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-24 px-6 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="reveal-svc text-xs uppercase tracking-[0.4em] text-rust font-semibold">
              {content.hero.tag}
            </span>
            <h1 className="reveal-svc text-5xl md:text-7xl lg:text-8xl font-serif text-paper leading-tight">
              {content.hero.title}
            </h1>
            <p className="reveal-svc text-xl text-paper/60 leading-relaxed max-w-2xl font-light">
              {content.hero.desc}
            </p>
            <div className="reveal-svc pt-4">
              <Link href={`/${lang}/book`}>
                <Button variant="rust" className="py-7 px-10 rounded-sm group">
                  {content.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="reveal-svc relative aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-white/10">
              <img
                src="/images/hearing-hero.png"
                alt="Hearing Care"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 lg:py-40 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {content.treatments.map((t, i) => (
              <div key={i} className="p-12 bg-[#0A1A12] space-y-6 hover:bg-forest/5 transition-colors group">
                <div className="w-12 h-12 bg-rust/10 flex items-center justify-center rounded-full text-rust group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif text-paper">{t.title}</h3>
                <p className="text-paper/40 text-lg leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-40 px-6 lg:px-24 bg-forest/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Shield className="w-16 h-16 text-rust mx-auto opacity-50" />
          <h2 className="text-4xl lg:text-6xl font-serif text-paper italic italic-rust">
            {isEn ? "Why our hearing diagnostics are different." : "কেন আমাদের শ্রবণ ডায়াগনস্টিকস আলাদা।"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <p className="text-paper font-semibold text-xl">{isEn ? "No Commercial Pressure" : "কোনো বাণিজ্যিক চাপ নেই"}</p>
              <p className="text-paper/60 leading-relaxed">
                {isEn 
                  ? "We are clinical first. We don't sell hearing aids; we recommend auditory solutions based on your specific pathology." 
                  : "আমরা ক্লিনিকাল সেবায় বিশ্বাসী। আমরা হিয়ারিং এইড বিক্রি করি না; আমরা আপনার নির্দিষ্ট প্যাথলজির ভিত্তিতে সমাধান দিই।"}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-paper font-semibold text-xl">{isEn ? "Soundproof Precision" : "শব্দরোধী নির্ভুলতা"}</p>
              <p className="text-paper/60 leading-relaxed">
                {isEn 
                  ? "Our audiometry booth is calibrated to international standards, ensuring your results are accurate the first time." 
                  : "আমাদের অডিওমেট্রি বুথ আন্তর্জাতিক মান অনুযায়ী ক্যালিব্রেট করা, যা প্রথমবারেই নির্ভুল ফলাফল নিশ্চিত করে।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-24 text-center space-y-12">
        <h2 className="text-5xl lg:text-7xl font-serif text-paper">
          {isEn ? "Ready to hear clearly?" : "পরিষ্কারভাবে শুনতে প্রস্তুত?"}
        </h2>
        <Link href={`/${lang}/book`}>
          <Button variant="rust" className="py-8 px-16 text-xl rounded-sm">
            {isEn ? "Book a Hearing Test" : "শ্রবণ পরীক্ষার জন্য বুক করুন"}
          </Button>
        </Link>
      </section>

    </main>
  );
}
