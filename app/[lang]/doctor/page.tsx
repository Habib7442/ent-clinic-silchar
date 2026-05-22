import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import icons from "@/lib/icons.json";
import { 
  ShieldCheck, 
  ChevronRight, 
  Activity, 
  Heart,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Premium Clinical Vector Icons ($10,000 Bespoke Aesthetic)
function EarClinicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-forest transition-transform duration-500 group-hover:scale-110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Central Auditory Node */}
      <circle cx="12" cy="12" r="2" className="fill-forest/30 stroke-gold" strokeWidth="1" />
      {/* Concentric Acoustic Rings (Dashed & Continuous) */}
      <circle cx="12" cy="12" r="5" strokeDasharray="3 3" className="stroke-forest/40" />
      <circle cx="12" cy="12" r="8" className="stroke-forest/60" />
      <circle cx="12" cy="12" r="11" strokeDasharray="4 2" className="stroke-gold/20" />
      {/* Precision Crosshairs / Clinical Alignment */}
      <line x1="12" y1="1" x2="12" y2="3" className="stroke-gold" />
      <line x1="12" y1="21" x2="12" y2="23" className="stroke-gold" />
      <line x1="1" y1="12" x2="3" y2="12" className="stroke-gold" />
      <line x1="21" y1="12" x2="23" y2="12" className="stroke-gold" />
      {/* Elegant ear contour integrated into the waves */}
      <path d="M10 7.5c2-1 4.5 0 5 2.5s-1 4.5-3 5.5c-1 .5-2 1.5-2 2.5" className="stroke-gold" strokeWidth="2" />
    </svg>
  );
}

function VertigoClinicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-gold transition-transform duration-500 group-hover:scale-110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Central Balance Glowing Sphere */}
      <circle cx="12" cy="12" r="2.5" className="fill-gold/30 stroke-forest" strokeWidth="1.2" />
      {/* Axis 1: Horizontal Orbital Path */}
      <ellipse cx="12" cy="12" rx="10" ry="3" className="stroke-gold/30" />
      {/* Axis 2: 45 Degree Diagonal Path */}
      <g transform="rotate(45 12 12)">
        <ellipse cx="12" cy="12" rx="10" ry="3" className="stroke-gold/60" />
      </g>
      {/* Axis 3: -45 Degree Diagonal Path */}
      <g transform="rotate(-45 12 12)">
        <ellipse cx="12" cy="12" rx="10" ry="3" className="stroke-forest/50" />
      </g>
      {/* Gyroscopic Position Indicators */}
      <circle cx="12" cy="2" r="1" className="fill-gold stroke-gold" />
      <circle cx="12" cy="22" r="1" className="fill-gold stroke-gold" />
      <circle cx="2" cy="12" r="1" className="fill-forest stroke-forest" />
      <circle cx="22" cy="12" r="1" className="fill-forest stroke-forest" />
    </svg>
  );
}

function SpeechTherapyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-forest transition-transform duration-500 group-hover:scale-110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Clinical Target Ring */}
      <circle cx="12" cy="12" r="10" strokeDasharray="3 3" className="stroke-forest/20" />
      {/* Frequency Sine Waves */}
      <path d="M2 12c2.5-3 5.5-3 8 0s3.5 3 6 0 4-2.5 6-1" className="stroke-forest/40" />
      <path d="M2 12c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" className="stroke-gold" strokeWidth="2" />
      {/* High-Precision Equalizer Bars */}
      <line x1="6" y1="10" x2="6" y2="14" className="stroke-forest" strokeWidth="2" />
      <line x1="9" y1="8" x2="9" y2="16" className="stroke-forest/70" strokeWidth="2" />
      <line x1="12" y1="5" x2="12" y2="19" className="stroke-gold/80" strokeWidth="2" />
      <line x1="15" y1="7" x2="15" y2="17" className="stroke-forest/70" strokeWidth="2" />
      <line x1="18" y1="9" x2="18" y2="15" className="stroke-forest" strokeWidth="2" />
    </svg>
  );
}

function MedicalSealIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-forest" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="fill-forest/10" />
      <circle cx="12" cy="11" r="3" className="stroke-gold" strokeWidth="2" />
      <path d="M12 14v4" className="stroke-gold" />
      <path d="M10 16h4" className="stroke-gold" />
    </svg>
  );
}

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
        title: isBn ? "ভার্টিগো ও ব্যালেন্স ক্লিনিক" : "Vertigo and Balance Clinic",
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
    <main className="flex-1 bg-[#0A1A12] text-paper overflow-x-hidden pt-0">
      
      {/* 1. Doctor Hero Section */}
      <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-32 px-6 lg:px-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                {content.hero.tagline}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-paper leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gold font-serif italic">
                {content.hero.specialty}
              </p>
            </div>

            <p className="text-base lg:text-lg text-paper/70 leading-relaxed font-light max-w-2xl">
              {content.hero.bio}
            </p>

            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <MedicalSealIcon />
                <div>
                  <p className="text-paper text-sm font-semibold">{content.hero.experienceLabel}</p>
                  <p className="text-paper/60 text-[10px] uppercase tracking-widest">{content.hero.recordLabel}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-forest/10 ring-1 ring-white/10 group shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="p-4 bg-forest/20 rounded-full text-gold">
                  <ShieldCheck className="w-16 h-16" />
                </div>
                <h3 className="font-serif text-xl text-paper">{content.hero.title}</h3>
                <p className="text-xs text-paper/60 uppercase tracking-widest">{content.hero.specialty}</p>
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized Clinics Grid */}
      <section className="py-12 lg:py-16 px-6 lg:px-24 bg-[#07140E]">
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
            <div className="group overflow-hidden bg-[#0A1A12] border border-white/5 rounded-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-500 hover:-translate-y-1">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest/10">
                  <img 
                    src={icons.doctor_page.earClinic} 
                    alt={content.sections.earClinic.title}
                    className="object-contain p-6 w-full h-full filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-[#0A1A12]/40 to-transparent" />
                </div>

                <div className="p-8 lg:p-10 pt-6 space-y-4">
                  <h3 className="text-2xl font-serif text-paper font-semibold">{content.sections.earClinic.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed font-light">{content.sections.earClinic.desc}</p>
                </div>
              </div>

              <div className="px-8 lg:px-10 pb-8">
                <div className="pt-6 border-t border-white/5 space-y-3">
                  {content.sections.earClinic.tests.map((test, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-paper/80">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Vertigo Clinic */}
            <div className="group overflow-hidden bg-[#0A1A12] border border-white/5 rounded-sm flex flex-col justify-between hover:border-gold/30 transition-all duration-500 hover:-translate-y-1">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gold/5">
                  <img 
                    src={icons.doctor_page.vertigoClinic} 
                    alt={content.sections.vertigoClinic.title}
                    className="object-contain p-8 w-full h-full filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-[#0A1A12]/40 to-transparent" />
                </div>

                <div className="p-8 lg:p-10 pt-6 space-y-4">
                  <h3 className="text-2xl font-serif text-paper font-semibold">{content.sections.vertigoClinic.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed font-light">{content.sections.vertigoClinic.desc}</p>
                </div>
              </div>

              <div className="px-8 lg:px-10 pb-8">
                <div className="pt-6 border-t border-white/5 space-y-3">
                  {content.sections.vertigoClinic.tests.map((test, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-paper/80">
                      <Activity className="w-4 h-4 text-forest shrink-0" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Speech Therapy */}
            <div className="group overflow-hidden bg-[#0A1A12] border border-white/5 rounded-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-500 hover:-translate-y-1">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest/10">
                  <img 
                    src={icons.doctor_page.speechClinic} 
                    alt={content.sections.speechClinic.title}
                    className="object-contain p-6 w-full h-full filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-[#0A1A12]/40 to-transparent" />
                </div>

                <div className="p-8 lg:p-10 pt-6 space-y-4">
                  <h3 className="text-2xl font-serif text-paper font-semibold">{content.sections.speechClinic.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed font-light">{content.sections.speechClinic.desc}</p>
                </div>
              </div>

              <div className="px-8 lg:px-10 pb-8">
                <div className="pt-6 border-t border-white/5 space-y-3">
                  {content.sections.speechClinic.tests.map((test, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-paper/80">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Quote Section */}
      <section className="py-12 lg:py-16 px-6 lg:px-24 bg-[#0A1A12] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Heart className="w-8 h-8 text-gold mx-auto opacity-70" />
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">{content.philosophy.title}</h3>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-paper leading-snug">
            "{content.philosophy.quote}"
          </p>
        </div>
      </section>

      {/* 4. Action Booking CTA Section */}
      <section className="py-12 lg:py-16 px-6 lg:px-24 bg-[#07140E] border-t border-white/5 text-center relative">
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
              <Button className="group bg-gold hover:bg-gold/95 text-paper rounded-none px-8 py-6 text-base font-semibold transition-all">
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
