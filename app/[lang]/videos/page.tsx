import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import VideoPlayerBlock from "@/components/editorial/VideoPlayerBlock";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" ? "শিক্ষামূলক ভিডিও ও গাইড - দি ইএনটি ক্লিনিক" : "Educational Videos & Health Guides - The ENT Clinic",
    description: lang === "bn"
      ? "আপনার স্নায়বিক ও ইএনটি সুস্থতা বজায় রাখতে ডাঃ অভিষেক রায়ের তৈরি করা গুরুত্বপূর্ণ স্বাস্থ্য ব্যায়াম ও ক্লিনিকাল নির্দেশিকা।"
      : "Access medical tutorials, brain exercises, and clinical health tips shared by Dr. Abhishek Ray to support your neurological and ENT wellness.",
    path: "/videos",
  });
}

const translations = {
  en: {
    eyebrow: "Education Hub",
    title: "Clinical Video Guides",
    subtitle: "Dr. Abhishek Ray shares essential exercises, medical insights, and guidelines to help you maintain ear, nose, throat, and brain health.",
    back: "Back to Home",
    featuredTag: "Active Featured Guide",
    videoTitle: "Stop Doomscrolling: 1-Minute Brain Exercise",
    videoContext: "Instead of doomscrolling, take a quick hand exercise break to stimulate neural paths and prevent cognitive decline. These simple neuro-motor movements boost coordination and brain connectivity.",
    playLabel: "Play brain exercise video",
    upcoming: "Upcoming Video Series",
    comingSoon: "Coming Soon",
    tinnitusTitle: "Understanding Tinnitus: Causes & Relief",
    tinnitusDesc: "Learn how the brain processes ear ringing and explore modern habituation and sound therapies.",
    hygieneTitle: "Safe Ear Hygiene: The Gold Standards",
    hygieneDesc: "Dr. Ray explains why cotton buds are harmful and how ears naturally self-clean.",
    sleepTitle: "Snoring & Sleep Apnea: What to Look For",
    sleepDesc: "Recognize the signs of obstructive sleep apnea and discover modern non-invasive therapies."
  },
  bn: {
    eyebrow: "শিক্ষা হাব",
    title: "ক্লিনিকাল ভিডিও গাইড",
    subtitle: "আপনার কান, নাক, গলা এবং মস্তিষ্কের সুস্থতা বজায় রাখতে সাহায্য করার জন্য ডাঃ অভিষেক রায় গুরুত্বপূর্ণ ব্যায়াম ও পরামর্শ শেয়ার করেছেন।",
    back: "হোমে ফিরে যান",
    featuredTag: "সক্রিয় বিশেষ গাইড",
    videoTitle: "ডুমস্ক্রলিং বন্ধ করুন: ১ মিনিটের মস্তিষ্কের ব্যায়াম",
    videoContext: "ডুমস্ক্রলিং করার পরিবর্তে ডিমেনশিয়া প্রতিরোধ করতে একটি হাতের ব্যায়ামের বিরতি নিন। এই সহজ নিউরো-মোটর আন্দোলনগুলো মস্তিষ্কের সংযোগকে উদ্দীপিত করে এবং মনোযোগ বাড়ায়।",
    playLabel: "শিক্ষামূলক ভিডিও প্লে করুন",
    upcoming: "আসন্ন ভিডিও সিরিজ",
    comingSoon: "আসন্ন",
    tinnitusTitle: "টিনিটাস বোঝা: কারণ ও উপশম",
    tinnitusDesc: "মস্তিষ্ক কীভাবে কানের ভেতর ক্রমাগত শব্দ হওয়া প্রক্রিয়া করে এবং আধুনিক সাউন্ড থেরাপি সম্পর্কে জানুন।",
    hygieneTitle: "নিরাপদ কানের স্বাস্থ্যবিধি: সঠিক নিয়ম",
    hygieneDesc: "কটন বাড কেন ক্ষতিকর এবং কান প্রাকৃতিকভাবে কীভাবে পরিষ্কার হয় তা ডাঃ রায় ব্যাখ্যা করেছেন।",
    sleepTitle: "নাক ডাকা ও স্লিপ অ্যাপনিয়া: লক্ষণসমূহ",
    sleepDesc: "অবস্ট্রাকটিভ স্লিপ অ্যাপনিয়ার লক্ষণগুলো চিনুন এবং আধুনিক থেরাপি সম্পর্কে ধারণা নিন।"
  }
};

export default async function VideosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";
  const content = translations[lang as "en" | "bn"] || translations.en;

  const videoId = "qIOWrB3A5gI";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 pb-24">
        
        {/* Breadcrumb Back Link */}
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-forest hover:text-forest-soft transition-colors mb-8 text-xs font-semibold tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.back}
        </Link>

        {/* Page Hero Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-semibold block">
            {content.eyebrow}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-forest font-light leading-tight">
            {content.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>

        {/* Dynamic 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Active Video Block */}
          <div className="lg:col-span-6">
            <VideoPlayerBlock
              videoId={videoId}
              title={content.videoTitle}
              context={content.videoContext}
              playLabel={content.playLabel}
            />
          </div>

          {/* Right Column: Hand Exercise Instructions & Benefits */}
          <div className="lg:col-span-6 space-y-8 bg-paper-warm border border-hairline rounded-sm p-8 shadow-xl">
            <h2 className="text-2xl font-serif text-forest border-b border-hairline pb-4">
              {isEn ? "How Hand Exercises Prevent Dementia" : "যেভাবে হাতের ব্যায়াম ডিমেনশিয়া প্রতিরোধ করে"}
            </h2>

            <div className="space-y-6">
              <p className="text-sm text-ink-soft leading-relaxed font-light">
                {isEn 
                  ? "Bimanual and complex finger-coordination exercises activate motor regions of the frontal cortex and stimulate neuroplasticity. Clinical research suggests that brief cognitive-motor breaks reduce stress, interrupt automatic doomscrolling, and build synaptic resilience."
                  : "দ্বি-হস্ত এবং জটিল আঙুল-সমন্বয় ব্যায়ামগুলো ফ্রন্টাল কর্টেক্সের মোটর অঞ্চলগুলোকে সক্রিয় করে এবং নিউরোপ্লাস্টিসিটিকে উদ্দীপিত করে। ক্লিনিকাল গবেষণায় দেখা গেছে যে ছোট বিরতি মানসিক চাপ কমায়, স্বয়ংক্রিয় ডুমস্ক্রলিং বন্ধ করে এবং সিনাপটিক স্থিতিস্থাপকতা তৈরি করে।"}
              </p>

              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest font-bold text-gold">
                  {isEn ? "Step-by-Step Coordination Drill" : "ধাপে ধাপে সমন্বয় ব্যায়াম"}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-forest font-serif block">{isEn ? "Finger Opposition (Thumb Taps)" : "আঙুলের স্পর্শ (বুড়ো আঙুলের সাথে)"}</strong>
                      <span className="text-xs text-ink-soft leading-relaxed font-light block mt-1">
                        {isEn 
                          ? "Touch each finger of your hand to your thumb sequentially (Index, Middle, Ring, Pinky), then go backward. Repeat with both hands simultaneously."
                          : "পর্যায়ক্রমে আপনার প্রতিটি আঙুল দিয়ে বুড়ো আঙুল স্পর্শ করুন (তর্জনি, মধ্যমা, অনামিকা, কনিষ্ঠা) এবং আবার উল্টো পথে ফিরে আসুন। দুই হাতেই এটি একসাথে করুন।"}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-forest font-serif block">{isEn ? "Finger Tapping Sequence" : "আঙুল টোকার পর্যায়ক্রম"}</strong>
                      <span className="text-xs text-ink-soft leading-relaxed font-light block mt-1">
                        {isEn 
                          ? "Place both hands flat on a table. Lift each finger one by one, starting from the pinky to the thumb. Alternate between hands to stimulate motor pathways."
                          : "একটি টেবিলের উপর দুই হাত ফ্ল্যাট রাখুন। কনিষ্ঠা থেকে শুরু করে বুড়ো আঙুল পর্যন্ত প্রতিটি আঙুল একে একে ওপরের দিকে তুলুন। দুই হাতের মধ্যে পর্যায়ক্রমে করুন।"}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-forest font-serif block">{isEn ? "Alternating Fist and Palm" : "মুষ্টি এবং তালু পরিবর্তন"}</strong>
                      <span className="text-xs text-ink-soft leading-relaxed font-light block mt-1">
                        {isEn 
                          ? "Make a fist with one hand while keeping the other flat. Alternating rapidly between making a fist and keeping the hand flat."
                          : "এক হাত দিয়ে মুষ্টি তৈরি করুন এবং অন্য হাত ফ্ল্যাট রাখুন। দ্রুত মুষ্টি তৈরি করা এবং ফ্ল্যাট রাখার মধ্যে পরিবর্তন করুন।"}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

      <ClosingCTA lang={lang} />
    </main>
  );
}
