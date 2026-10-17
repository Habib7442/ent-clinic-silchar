import Image from "next/image";

const translations = {
  en: {
    eyebrow: "Festive Greetings",
    title: "Shubho Sharadiya & Durga Puja",
    message:
      "Warm Sharadiya wishes to all our patients and their families from Dr. Abhishek Ray and the team at The ENT Clinic, Silchar. May Maa Durga bless you with health and happiness.",
    alt: "Shubho Durga Puja greeting poster from Dr. Abhishek Ray and family",
  },
  bn: {
    eyebrow: "উৎসবের শুভেচ্ছা",
    title: "শুভ শারদীয়া ও দুর্গা পূজা",
    message:
      "ডাঃ অভিষেক রায় ও দ্য ইএনটি ক্লিনিক, শিলচরের পক্ষ থেকে সকল রোগী ও তাঁদের পরিবারকে আন্তরিক শারদীয়া শুভেচ্ছা। মা দুর্গা সকলকে সুস্থ ও আনন্দে রাখুন।",
    alt: "ডাঃ অভিষেক রায় ও পরিবারের পক্ষ থেকে শুভ দুর্গা পূজার শুভেচ্ছা পোস্টার",
  },
};

interface FestiveGreetingProps {
  lang: string;
}

export default function FestiveGreeting({ lang }: FestiveGreetingProps) {
  const content = translations[lang as "en" | "bn"] || translations.en;

  return (
    <section
      id="festive-greeting"
      aria-label={content.title}
      className="bg-forest py-12 md:py-16"
    >
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-[minmax(0,320px)_1fr] gap-8 md:gap-12 items-center max-w-5xl">
        <div className="mx-auto w-full max-w-[280px] md:max-w-[320px] rounded-2xl overflow-hidden ring-1 ring-gold/40 shadow-2xl">
          <Image
            src="/images/durga-puja-poster.webp"
            alt={content.alt}
            width={894}
            height={1600}
            sizes="(min-width: 768px) 320px, 280px"
            className="w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl text-paper mb-4">{content.title}</h2>
          <p className="text-paper/75 leading-relaxed max-w-xl mx-auto md:mx-0">
            {content.message}
          </p>
        </div>
      </div>
    </section>
  );
}
