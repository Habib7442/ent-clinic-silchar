"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface HearingAidsShowcaseProps {
  lang: string;
}

const hearingAidModels = [
  {
    id: "iic",
    image: "/images/hearing_aids/IIC_with_cell.webp",
    name: {
      en: "Invisible-In-Canal (IIC)",
      bn: "ইনভিজিবল-ইন-ক্যানাল (IIC)",
    },
    description: {
      en: "The smallest custom hearing aid style. It sits deep inside the ear canal, making it virtually invisible to others. Best suited for mild to moderate hearing loss.",
      bn: "সবচেয়ে ছোট কাস্টম হিয়ারিং এইড। এটি কানের খালের গভীরে বসে, ফলে অন্যদের কাছে প্রায় অদৃশ্য থাকে। মৃদু থেকে মাঝারি শ্রবণশক্তির হ্রাসের জন্য সবচেয়ে উপযোগী।",
    },
    power: {
      en: "Zinc-Air Battery (Size 10)",
      bn: "জিঙ্ক-এয়ার ব্যাটারি (সাইজ ১০)",
    }
  },
  {
    id: "cic",
    image: "/images/hearing_aids/CIC_with_cell.webp",
    name: {
      en: "Completely-In-Canal (CIC)",
      bn: "কমপ্লিটলি-ইন-ক্যানাল (CIC)",
    },
    description: {
      en: "Fits entirely inside the ear canal with only a tiny plastic pull-string visible. Highly discreet, offering natural sound and wind noise reduction.",
      bn: "কানের খালের ভেতরে সম্পূর্ণ ফিট হয়, কেবল একটি ছোট প্লাস্টিকের সুতা বাইরে থাকে। অত্যন্ত বিচক্ষণ, প্রাকৃতিক শব্দ এবং বাতাসের শব্দ হ্রাস করে।",
    },
    power: {
      en: "Zinc-Air Battery (Size 10)",
      bn: "জিঙ্ক-এয়ার ব্যাটারি (সাইজ ১০)",
    }
  },
  {
    id: "itc-cell",
    image: "/images/hearing_aids/ITC_with_cell.webp",
    name: {
      en: "In-The-Canal (ITC) — Battery Powered",
      bn: "ইন-দ্য-ক্যানাল (ITC) — ব্যাটারি চালিত",
    },
    description: {
      en: "Custom-molded to fit partly in the ear canal. A slightly larger profile allows for external controls (like volume wheels) and directional microphones.",
      bn: "কানের খালের একটি অংশে ফিট করার জন্য কাস্টম-মোল্ড করা। একটু বড় আকারের হওয়ায় এক্সটার্নাল কন্ট্রোল (যেমন ভলিউম হুইল) এবং নির্দেশমূলক মাইক্রোফোন থাকে।",
    },
    power: {
      en: "Zinc-Air Battery (Size 312)",
      bn: "জিঙ্ক-এয়ার ব্যাটারি (সাইজ ৩১২)",
    }
  },
  {
    id: "itc-rechargeable",
    image: "/images/hearing_aids/ITC_rechargeable.webp",
    name: {
      en: "In-The-Canal (ITC) — Rechargeable",
      bn: "ইন-দ্য-ক্যানাল (ITC) — রিচার্জেবল",
    },
    description: {
      en: "Custom-fit rechargeable model sitting in the lower portion of the ear. Offers easy drop-in charging, Bluetooth streaming, and long battery life.",
      bn: "কানের নিচের অংশে বসা কাস্টম-ফিট রিচার্জেবল মডেল। সহজ ড্রপ-ইন চার্জিং, ব্লুটুথ স্ট্রিমিং এবং দীর্ঘ ব্যাটারি লাইফ প্রদান করে।",
    },
    power: {
      en: "Lithium-ion Rechargeable",
      bn: "লিথিয়াম-আয়ন রিচার্জেবল",
    }
  },
  {
    id: "ric-cell",
    image: "/images/hearing_aids/RIC_with_cell.webp",
    name: {
      en: "Receiver-In-Canal (RIC) — Battery Powered",
      bn: "রিসিভার-ইন-ক্যানাল (RIC) — ব্যাটারি চালিত",
    },
    description: {
      en: "The receiver (speaker) is placed inside the ear canal, connected by a thin wire to the main casing behind the ear. Provides natural, open-ear acoustics.",
      bn: "রিসিভার (স্পিকার) সরাসরি কানের খালে থাকে, যা একটি সরু তারের মাধ্যমে কানের পেছনের মূল কেসিংয়ের সাথে সংযুক্ত থাকে। প্রাকৃতিক ও উন্মুক্ত শ্রবণ প্রদান করে।",
    },
    power: {
      en: "Zinc-Air Battery (Size 312)",
      bn: "জিঙ্ক-এয়ার ব্যাটারি (সাইজ ৩১২)",
    }
  },
  {
    id: "ric-rechargeable",
    image: "/images/hearing_aids/RIC_rechargeable.webp",
    name: {
      en: "Receiver-In-Canal (RIC) — Rechargeable",
      bn: "রিসিভার-ইন-ক্যানাল (RIC) — রিচার্জেবল",
    },
    description: {
      en: "The modern standard of hearing aids. Offers top-tier audio processing, automatic environment adjustments, full Bluetooth connectivity, and dual-mic noise suppression.",
      bn: "হিয়ারিং এইডের আধুনিক সংস্করণ। এটি সেরা মানের অডিও প্রসেসিং, স্বয়ংক্রিয় পরিবেশ সামঞ্জস্য, সম্পূর্ণ ব্লুটুথ কানেক্টিভিটি এবং গোলমাল কমানোর সুবিধা দেয়।",
    },
    power: {
      en: "Lithium-ion Rechargeable",
      bn: "লিথিয়াম-আয়ন রিচার্জেবল",
    }
  }
];

const guideImages = [
  {
    image: "/images/hearing_aids/EAR ANATOMY & HEARING AID TYPES.webp",
    title: {
      en: "Ear Anatomy & Hearing Aid Placement",
      bn: "কানের গঠন ও হিয়ারিং এইড স্থাপন",
    },
    desc: {
      en: "Visual guide displaying how different hearing aid styles sit relative to the outer ear and ear canal anatomy.",
      bn: "কানের বাহ্যিক অংশ এবং কানের খালের গঠনের সাপেক্ষে বিভিন্ন হিয়ারিং এইড কীভাবে বসে তার ভিজ্যুয়াল গাইড।",
    }
  },
  {
    image: "/images/hearing_aids/Hearing Aid Solutions Guide.webp",
    title: {
      en: "Hearing Aid Solutions & Comparison Guide",
      bn: "হিয়ারিং এইড নির্বাচন ও সমাধান নির্দেশিকা",
    },
    desc: {
      en: "A comprehensive reference detailing styles, features, and target hearing loss levels to help choose the ideal device.",
      bn: "আদর্শ ডিভাইসটি বেছে নিতে সাহায্য করার জন্য বিভিন্ন স্টাইল, বৈশিষ্ট্য এবং শ্রবণশক্তির হ্রাসের মাত্রার বিস্তারিত গাইড।",
    }
  }
];

export default function HearingAidsShowcase({ lang }: HearingAidsShowcaseProps) {
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
    <div className="mt-16 space-y-16">
      {/* Models Section */}
      <div className="space-y-8">
        <div className="border-l-2 border-gold pl-4 space-y-2">
          <h2 className="text-3xl font-serif text-forest">
            {isEn ? "Hearing Aid Styles & Models" : "হিয়ারিং এইডের বিভিন্ন ধরণ ও মডেল"}
          </h2>
          <p className="text-ink-soft font-sans text-sm md:text-base max-w-3xl">
            {isEn
              ? "We offer trials of diverse hearing aid shapes, sizes, and charging options, programmed custom to your audiometric graph."
              : "আমরা আপনার অডিওমেট্রিক গ্রাফ অনুযায়ী প্রোগ্রাম করা বিভিন্ন আকার, সাইজ এবং চার্জিং অপশনের হিয়ারিং এইড ট্রায়াল অফার করি।"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hearingAidModels.map((model) => (
            <div
              key={model.id}
              className="bg-paper-warm border border-hairline rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-gold/30 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-white flex items-center justify-center p-4 border-b border-hairline">
                <Image
                  src={model.image}
                  alt={isEn ? model.name.en : model.name.bn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-forest">
                    {isEn ? model.name.en : model.name.bn}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed font-light">
                    {isEn ? model.description.en : model.description.bn}
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline/60 flex items-center gap-2.5">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                    {isEn ? "Power Source" : "উৎস"}
                  </div>
                  <span className="text-xs text-ink/80 font-sans font-semibold">
                    {isEn ? model.power.en : model.power.bn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Infographics Section */}
      <div className="space-y-8 pt-8 border-t border-forest/10">
        <div className="border-l-2 border-gold pl-4 space-y-2">
          <h2 className="text-3xl font-serif text-forest">
            {isEn ? "Hearing Aid Comparison & Selection Guides" : "হিয়ারিং এইড তুলনা ও নির্বাচন গাইড"}
          </h2>
          <p className="text-ink-soft font-sans text-sm md:text-base max-w-3xl">
            {isEn
              ? "Click on the infographics below to view them in full screen. These visual resources illustrate ear anatomy, seating depths, and performance criteria."
              : "সম্পূর্ণ স্ক্রিনে দেখতে নিচের নির্দেশিকাগুলোতে ক্লিক করুন। এই ভিজ্যুয়াল নির্দেশিকাসমূহ কানের গঠন, ফিটিং গভীরতা এবং অন্যান্য মানদণ্ড স্পষ্ট করে।"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideImages.map((guide, idx) => (
            <div
              key={idx}
              className="bg-paper-warm border border-hairline rounded-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-gold/30 transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveImage(guide.image)}
            >
              {/* Infographic Image Preview */}
              <div className="relative aspect-[4/3] w-full bg-white overflow-hidden border-b border-hairline">
                <Image
                  src={guide.image}
                  alt={isEn ? guide.title.en : guide.title.bn}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-forest/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="bg-[#0A1A12]/90 text-white rounded-full p-3 shadow-lg border border-gold/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-gold" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-serif text-forest group-hover:text-gold transition-colors">
                  {isEn ? guide.title.en : guide.title.bn}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed font-light">
                  {isEn ? guide.desc.en : guide.desc.bn}
                </p>
              </div>
            </div>
          ))}
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
              alt="Zoomed Infographic Guide"
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
