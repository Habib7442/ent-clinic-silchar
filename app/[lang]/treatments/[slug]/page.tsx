import { treatments } from "@/lib/treatments";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import FaqSection from "@/components/editorial/FaqSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import { constructMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return {};

  const isEn = lang === "en";
  const title = isEn ? treatment.titleEn : treatment.titleBn;
  const desc = isEn ? treatment.descEn : treatment.descBn;

  return constructMetadata({
    lang: lang as "en" | "bn",
    title: isEn ? `${title} Treatment in Silchar | Top ENT Specialist` : `${title} চিকিৎসা শিলচর | ইএনটি বিশেষজ্ঞ ডাঃ অভিষেক রায়`,
    description: `${desc.substring(0, 150)}...`,
    path: `/treatments/${slug}`,
  });
}

export async function generateStaticParams() {
  return treatments.flatMap((treatment) => [
    { lang: "en", slug: treatment.slug },
    { lang: "bn", slug: treatment.slug },
  ]);
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isEn = lang === "en";

  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const title = isEn ? treatment.titleEn : treatment.titleBn;
  const desc = isEn ? treatment.descEn : treatment.descBn;
  const detailedDesc = isEn ? treatment.detailedDescEn : treatment.detailedDescBn;
  const faqs = isEn ? treatment.faqsEn : treatment.faqsBn;

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-24 pb-12">
        <Link 
          href={`/${lang}/services`} 
          className="inline-flex items-center gap-2 text-forest hover:text-forest-soft transition-colors mb-8 text-sm font-semibold tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          {isEn ? "Back to Services" : "সেবাসমূহে ফিরে যান"}
        </Link>
        
        <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden mb-12 shadow-2xl">
          <Image 
            src={treatment.image} 
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
        </div>

        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-forest font-semibold">
            {isEn ? "Specialized Treatment" : "বিশেষ চিকিৎসা"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-ink-soft font-light leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="my-16 w-16 h-px bg-forest/30" />

        <div className="prose prose-lg prose-forest max-w-none mb-16">
          <p className="text-lg leading-loose text-ink-soft">
            {detailedDesc}
          </p>
        </div>

        <div className="bg-forest/5 rounded-sm p-8 md:p-12 mb-16 border border-forest/10">
          <h3 className="text-2xl font-serif text-forest mb-6">
            {isEn ? "Why Choose Us for this Treatment?" : "এই চিকিৎসার জন্য কেন আমাদের বেছে নেবেন?"}
          </h3>
          <ul className="space-y-4">
            {[
              isEn ? "USFDA Approved Advanced Surgical Techniques" : "USFDA অনুমোদিত উন্নত সার্জিক্যাল কৌশল",
              isEn ? "Minimal Scarring and Faster Recovery" : "ন্যূনতম দাগ এবং দ্রুত আরোগ্য",
              isEn ? "Expert Care with Post-Surgery Follow-ups" : "অস্ত্রোপচার পরবর্তী ফলো-আপ সহ বিশেষজ্ঞ যত্ন",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-forest shrink-0" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <FaqSection faqs={faqs} title={isEn ? "Frequently Asked Questions" : "সচরাচর জিজ্ঞাস্য"} />
      </div>

      <ClosingCTA lang={lang} />
    </main>
  );
}
