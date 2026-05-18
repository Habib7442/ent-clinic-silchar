import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  ChevronRight, 
  Activity, 
  Volume2, 
  Brain, 
  Ear,
  Heart,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" ? "ডাঃ অভিষেক রায় — ইএনটি বিশেষজ্ঞ" : "Dr. Abhishek Ray — ENT Specialist",
    description: lang === "bn"
      ? "শিলচরের প্রখ্যাত ইএনটি বিশেষজ্ঞ ডাঃ অভিষেক রায় (১০+ বছরের অভিজ্ঞতা)। কান, নাক, গলা, ভার্টিগো এবং স্পিচ থেরাপির বিশেষায়িত সেবা।"
      : "Discover top-notch ENT care with Dr. Abhishek Ray, a highly experienced specialist (10+ years) in Silchar. Specialized Ear, Vertigo, and Speech Therapy clinics.",
    path: "/doctor",
  });
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  const content = {
    hero: {
      tagline: isBn ? "অভিজ্ঞতা । নির্ভুলতা । সহানুভূতি" : "Expertise. Precision. Compassion.",
      title: isBn ? "ডাঃ অভিষেক রায়" : "Dr. Abhishek Ray",
      specialty: isBn ? "এমএস (ইএনটি), নাক কান গলা ও হেড নেক সার্জন" : "MS (ENT), Head & Neck Surgeon",
      bio: isBn 
        ? "দি ইএনটি ক্লিনিক হলো বরাক উপত্যকার মানুষের নাক, কান এবং গলার সমস্যার চিকিৎসার জন্য শিলচরের একটি অগ্রণী প্রতিষ্ঠান। ১০ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন একজন অত্যন্ত অভিজ্ঞ ইএনটি বিশেষজ্ঞ ডাঃ অভিষেক রায়ের সাথে উন্নত চিকিৎসার অভিজ্ঞতা নিন।"
        : "The ENT Clinic is a premier institute in Silchar catering to the ear, nose, and throat problems for the people of Barak Valley. Discover top-notch ENT care with Dr. Abhishek Ray, a highly experienced ENT specialist with more than 10 years of clinical experience offering personalized treatment options.",
      experienceLabel: isBn ? "১০+ বছরের অভিজ্ঞতা" : "10+ Years Experience",
      recordLabel: isBn ? "ক্লিনিকাল শ্রেষ্ঠত্ব" : "Clinical Excellence",
      nmcLabel: isBn ? "নিবন্ধিত সার্জন" : "Registered Specialist",
      nmcSub: isBn ? "এনএমসি লাইসেন্সপ্রাপ্ত" : "NMC Verified",
    },
    sections: {
      clinicsTitle: isBn ? "আমাদের বিশেষায়িত ক্লিনিকসমূহ" : "Our Specialized Clinics",
      clinicsSub: isBn 
        ? "সর্বাধুনিক প্রযুক্তিতে সুসজ্জিত এবং রোগীদের পূর্ণাঙ্গ আরোগ্য লাভের জন্য নিবেদিত।"
        : "Equipped with advanced diagnostic infrastructure to deliver precise clinical outcomes.",
      earClinic: {
        title: isBn ? "সুসজ্জিত কান রোগ ক্লিনিক" : "Well-Equipped Ear Clinic",
        desc: isBn
          ? "শ্রবণ ও কানের সকল সমস্যার পূর্ণাঙ্গ পরীক্ষা ও আধুনিক চিকিৎসার সুব্যবস্থা রয়েছে।"
          : "Full-spectrum auditory evaluations and clinical diagnostic facilities for comprehensive hearing care.",
        tests: ["Audiometry", "Tympanometry", "OAE Test", "BERA Test"]
      },
      vertigoClinic: {
        title: isBn ? "বিশেষায়িত ভার্টিগো (মাথা ঘোরা) ক্লিনিক" : "Dedicated Vertigo Clinic",
        desc: isBn
          ? "মাথা ঘোরা এবং ভার্টিগোতে আক্রান্ত রোগীদের জন্য সঠিক কারণ নির্ণয় ও উন্নত পুনর্বাসন থেরাপি।"
          : "Specialized clinical diagnosis and vestibular rehabilitation for patients suffering from dizziness and vertigo.",
        tests: ["VEMP Test", "VNG Test"]
      },
      speechClinic: {
        title: isBn ? "স্পিচ থেরাপি সেন্টার" : "Dedicated Speech Therapy Center",
        desc: isBn
          ? "কথা বলার সমস্যায় ভুগছে এমন শিশুদের সহজ ও সাবলীল যোগাযোগের জন্য বিশেষায়িত থেরাপি ও নিবিড় যত্ন।"
          : "Empowering children with speech, language, and communication challenges using customized pediatric therapeutic models.",
        tests: ["Experienced Therapists", "5+ Years Therapeutic Records", "Pediatric Care Focus"]
      }
    },
    philosophy: {
      title: isBn ? "আমাদের আদর্শ" : "The Clinical Philosophy",
      quote: isBn
        ? "চিকিৎসা মানে কেবল রোগ নিরাময় নয়; এটি রোগীর সাথে আস্থা ও বিশ্বাসের একটি সম্পর্ক স্থাপন করা।"
        : "True healing combines clinical precision with deep human empathy. We listen as closely as we diagnose.",
    },
    cta: {
      title: isBn ? "সুস্থ জীবনের পথে প্রথম পদক্ষেপ নিন" : "Begin Your Path to Better Health",
      sub: isBn 
        ? "অনলাইনে, হোয়াটসঅ্যাপে অথবা সরাসরি ফোন কলের মাধ্যমে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।"
        : "Book your appointment online, via WhatsApp, or through a quick voice call.",
      btn: isBn ? "অ্যাপয়েন্টমেন্ট বুক করুন" : "Schedule a Consultation"
    }
  };

  return (
    <main className="flex-1 bg-[#0A1A12] text-paper overflow-x-hidden pt-12 md:pt-20">
      
      {/* 1. Doctor Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 lg:px-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-rust font-semibold">
                {content.hero.tagline}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-paper leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-rust font-serif italic">
                {content.hero.specialty}
              </p>
            </div>

            <p className="text-base lg:text-lg text-paper/70 leading-relaxed font-light max-w-2xl">
              {content.hero.bio}
            </p>

            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-forest" />
                <div>
                  <p className="text-paper text-sm font-semibold">{content.hero.experienceLabel}</p>
                  <p className="text-paper/40 text-[10px] uppercase tracking-widest">{content.hero.recordLabel}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-rust" />
                <div>
                  <p className="text-paper text-sm font-semibold">{content.hero.nmcLabel}</p>
                  <p className="text-paper/40 text-[10px] uppercase tracking-widest">{content.hero.nmcSub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-forest/10 ring-1 ring-white/10 group shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="p-4 bg-forest/20 rounded-full text-rust">
                  <ShieldCheck className="w-16 h-16" />
                </div>
                <h3 className="font-serif text-xl text-paper">{content.hero.title}</h3>
                <p className="text-xs text-paper/40 uppercase tracking-widest">{content.hero.specialty}</p>
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized Clinics Grid */}
      <section className="py-24 lg:py-40 px-6 lg:px-24 bg-[#07140E]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-paper font-light">
              {content.sections.clinicsTitle}
            </h2>
            <p className="text-paper/60 text-base md:text-lg font-light">
              {content.sections.clinicsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Ear Clinic */}
            <div className="p-8 lg:p-10 bg-[#0A1A12] border border-white/5 rounded-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-500 hover:-translate-y-1">
              <div className="space-y-8">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                  <Ear className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-paper font-semibold">{content.sections.earClinic.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed font-light">{content.sections.earClinic.desc}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                {content.sections.earClinic.tests.map((test, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-paper/80">
                    <CheckCircle2 className="w-4 h-4 text-rust shrink-0" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Vertigo Clinic */}
            <div className="p-8 lg:p-10 bg-[#0A1A12] border border-white/5 rounded-sm flex flex-col justify-between hover:border-rust/30 transition-all duration-500 hover:-translate-y-1">
              <div className="space-y-8">
                <div className="w-12 h-12 bg-rust/10 rounded-full flex items-center justify-center text-rust">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-paper font-semibold">{content.sections.vertigoClinic.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed font-light">{content.sections.vertigoClinic.desc}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                {content.sections.vertigoClinic.tests.map((test, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-paper/80">
                    <Activity className="w-4 h-4 text-forest shrink-0" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Speech Therapy */}
            <div className="p-8 lg:p-10 bg-[#0A1A12] border border-white/5 rounded-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-500 hover:-translate-y-1">
              <div className="space-y-8">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-paper font-semibold">{content.sections.speechClinic.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed font-light">{content.sections.speechClinic.desc}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                {content.sections.speechClinic.tests.map((test, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-paper/80">
                    <CheckCircle2 className="w-4 h-4 text-rust shrink-0" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Quote Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-24 bg-[#0A1A12] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Heart className="w-8 h-8 text-rust mx-auto opacity-70" />
          <h3 className="text-xs uppercase tracking-[0.3em] text-forest font-semibold">{content.philosophy.title}</h3>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-paper leading-snug">
            "{content.philosophy.quote}"
          </p>
        </div>
      </section>

      {/* 4. Action Booking CTA Section */}
      <section className="py-24 lg:py-36 px-6 lg:px-24 bg-[#07140E] border-t border-white/5 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <Calendar className="w-12 h-12 text-forest mx-auto" />
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-paper">
              {content.cta.title}
            </h2>
            <p className="text-paper/60 text-base md:text-lg max-w-xl mx-auto font-light">
              {content.cta.sub}
            </p>
          </div>
          <div className="pt-4">
            <Link href={`/${lang}/book`}>
              <Button className="group bg-rust hover:bg-rust/95 text-paper rounded-none px-8 py-6 text-base font-semibold transition-all">
                {content.cta.btn}
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
