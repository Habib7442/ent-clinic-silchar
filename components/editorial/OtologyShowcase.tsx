"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, Play } from "lucide-react";

interface OtologyShowcaseProps {
  lang: string;
}

const otologyImages = [
  {
    image: "/images/otology-clinic/audiometry_booth.webp",
    title: {
      en: "Calibrated Soundproof Cabin",
      bn: "ক্যালিব্রেটেড সাউন্ডপ্রুফ কেবিন",
    },
    desc: {
      en: "Our double-walled acoustic chamber isolates external noise down to standard diagnostic thresholds, enabling highly precise Pure Tone Audiometry (PTA) and neural hearing tests.",
      bn: "আমাদের ডবল-ওয়ালড অ্যাকোস্টিক চেম্বার বাহ্যিক শব্দকে ডায়াগনস্টিক থ্রেশহোল্ডের নিচে নিয়ে যায়, যা অত্যন্ত নির্ভুল পিওর টোন অডিওমেট্রি (PTA) এবং শ্রবণ স্নায়ু পরীক্ষার সুবিধা দেয়।",
    }
  },
  {
    image: "/images/otology-clinic/audiometry-equipment.webp",
    title: {
      en: "Clinical Audiology Station",
      bn: "ক্লিনিকাল অডিওলজি স্টেশন",
    },
    desc: {
      en: "Equipped with professional clinical audiometers to measure speech recognition, hearing thresholds, and middle-ear compliance under calibrated standards.",
      bn: "ক্যালিব্রেটেড মানদণ্ডে স্পিচ রিকগনিশন, শ্রবণ থ্রেশহোল্ড এবং মধ্যকর্ণের কার্যকারিতা পরিমাপের জন্য পেশাদার ক্লিনিকাল অডিওমিটার সজ্জিত।",
    }
  },
  {
    image: "/images/otology-clinic/audiometry_booth_2.webp",
    title: {
      en: "Patient Comfort & Setup",
      bn: "রোগী পরীক্ষা কক্ষ",
    },
    desc: {
      en: "A comfortable, distraction-free environment tailored for both pediatric and adult hearing evaluation, ensuring stress-free and accurate diagnostics.",
      bn: "শিশু ও প্রাপ্তবয়স্কদের শ্রবণ মূল্যায়নের জন্য আরামদায়ক এবং গোলমালমুক্ত পরিবেশ, যা চাপমুক্ত ও সঠিক রোগনির্ণয় নিশ্চিত করে।",
    }
  },
  {
    image: "/images/otology-clinic/bera-test-1.webp",
    title: {
      en: "Diagnostic BERA Testing",
      bn: "ডায়াগনস্টিক BERA পরীক্ষা",
    },
    desc: {
      en: "Objective assessment of the auditory pathway and brainstem response to sound waves, essential for pediatric and infant hearing verification.",
      bn: "শব্দ তরঙ্গের প্রতি শ্রবণ স্নায়ু এবং মস্তিষ্কের প্রতিক্রিয়ার উদ্দেশ্যমূলক মূল্যায়ন, যা শিশু ও নবজাতকদের শ্রবণ পরীক্ষার জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    }
  },
  {
    image: "/images/otology-clinic/bera-test-2.webp",
    title: {
      en: "Hearing Threshold Analysis",
      bn: "শ্রবণ থ্রেশহোল্ড বিশ্লেষণ",
    },
    desc: {
      en: "Advanced computerized recording of brain waves (auditory evoked potentials) to measure hearing thresholds and diagnose neural pathway integrity.",
      bn: "শ্রবণ থ্রেশহোল্ড পরিমাপ এবং শ্রবণ স্নায়ুর কার্যকারিতা মূল্যায়নের জন্য মস্তিষ্কের তরঙ্গের (অডিটরি ইভোকড পোটেনশিয়াল) আধুনিক কম্পিউটারাইজড রেকর্ডিং।",
    }
  }
];

export default function OtologyShowcase({ lang }: OtologyShowcaseProps) {
  const isEn = lang === "en";
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Close lightbox on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mt-16 space-y-10 border-t border-forest/10 pt-16">
      <div className="border-l-2 border-gold pl-4 space-y-2">
        <h2 className="text-3xl font-serif text-forest">
          {isEn ? "State-of-the-Art Audiology Facilities" : "অত্যাধুনিক অডিওলজি সুবিধাসমূহ"}
        </h2>
        <p className="text-ink-soft font-sans text-sm md:text-base max-w-3xl leading-relaxed">
          {isEn
            ? "Take a look inside our diagnostic rooms. We feature Silchar's premier soundproof testing booth and advanced clinical equipment for high-precision hearing assessments."
            : "আমাদের ডায়াগনস্টিক রুমের ভেতরের অংশ দেখুন। সঠিক শ্রবণ মূল্যায়নের জন্য আমাদের কাছে রয়েছে শিলচরের প্রিমিয়াম সাউন্ডপ্রুফ টেস্টিং বুথ এবং উন্নত ক্লিনিকাল যন্ত্রপাতি।"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otologyImages.map((item, idx) => (
          <div
            key={idx}
            className="bg-paper-warm border border-hairline rounded-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-gold/30 transition-all duration-300 group cursor-pointer"
            onClick={() => setActiveImage(item.image)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full bg-white overflow-hidden border-b border-hairline">
              <Image
                src={item.image}
                alt={isEn ? item.title.en : item.title.bn}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                  item.image.includes("bera-test") ? "object-top" : "object-center"
                }`}
              />
              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-forest/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="bg-[#0A1A12]/90 text-white rounded-full p-3 shadow-lg border border-gold/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-gold" />
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="p-6 space-y-2 flex-1 flex flex-col">
              <h3 className="text-lg font-serif text-forest group-hover:text-gold transition-colors">
                {isEn ? item.title.en : item.title.bn}
              </h3>
              <p className="text-xs text-ink-soft leading-relaxed font-light flex-1">
                {isEn ? item.desc.en : item.desc.bn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Demonstration Section */}
      <div className="mt-16 bg-[#0A1A12] border border-gold/15 rounded-sm p-8 text-paper shadow-2xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-semibold tracking-wider uppercase">
              {isEn ? "Video Demonstration" : "ভিডিও প্রদর্শন"}
            </span>
            <div className="space-y-3">
              <h3 className="text-3xl font-serif text-paper">
                {isEn ? "Watch a BERA Test in Action" : "BERA পরীক্ষার সরাসরি কার্যক্রম দেখুন"}
              </h3>
              <p className="text-paper-muted font-sans text-sm md:text-base leading-relaxed font-light">
                {isEn 
                  ? "Observe how BERA (Brainstem Evoked Response Audiometry) testing is conducted safely and comfortably at our clinic. We use gold-standard computer interfaces and non-invasive sensors to record brainstem activity in response to auditory stimulus."
                  : "আমাদের ক্লিনিকে কীভাবে নিরাপদে এবং আরামদায়কভাবে BERA (ব্রেনস্টেম ইভোকড রেসপন্স অডিওমেট্রি) পরীক্ষা সম্পন্ন করা হয় তা দেখুন। আমরা শ্রবণ উদ্দীপনার প্রতিক্রিয়ায় ব্রেনস্টেমের কার্যকলাপ রেকর্ড করতে গোল্ড-স্ট্যান্ডার্ড কম্পিউটার ইন্টারফেস এবং নন-ইনভেসিভ সেন্সর ব্যবহার করি।"}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-sm p-4">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-sm font-light text-paper/90">
                  {isEn ? "Pediatric & Infant Friendly" : "শিশু এবং নবজাতক বান্ধব"}
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-sm p-4">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-sm font-light text-paper/90">
                  {isEn ? "100% Painless & Objective" : "১০০% ব্যথামুক্ত এবং নির্ভুল"}
                </span>
              </div>
            </div>
          </div>

          {/* Embedded Video Component */}
          <div className="lg:col-span-5 flex justify-center w-full">
            {/* Embedded Player with 9:16 aspect ratio */}
            <div className="w-full max-w-[280px] aspect-[9/16] rounded-sm overflow-hidden border border-gold/20 shadow-2xl relative bg-[#050D09] group">
              {!isVideoPlaying ? (
                <div
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer"
                >
                  <Image
                    src="https://img.youtube.com/vi/WJp_ubkWjps/hqdefault.jpg"
                    alt={isEn ? "BERA Test Demonstration Video" : "BERA পরীক্ষা প্রদর্শন ভিডিও"}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[#0A1A12]/30 group-hover:bg-[#0A1A12]/45 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-16 h-16 bg-[#0A1A12] text-paper rounded-full flex items-center justify-center shadow-xl border border-gold/25 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-gold group-hover:text-[#0A1A12] cursor-pointer"
                      aria-label={isEn ? "Play Video" : "ভিডিও চালান"}
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/WJp_ubkWjps?autoplay=1&rel=0&modestbranding=1"
                  title={isEn ? "BERA Test Demonstration Video" : "BERA পরীক্ষা প্রদর্শন ভিডিও"}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3.5 transition-all focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Zoomed Facility Guide"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-sans uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full pointer-events-none">
            {isEn ? "Click background or press ESC to close" : "বন্ধ করতে ব্যাকগ্রাউন্ডে ক্লিক করুন অথবা ESC চাপুন"}
          </div>
        </div>
      )}
    </div>
  );
}
