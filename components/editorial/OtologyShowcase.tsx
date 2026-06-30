"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

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
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
