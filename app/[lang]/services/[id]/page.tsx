import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Calendar } from "lucide-react";
import FaqSection from "@/components/editorial/FaqSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import HearingAidsShowcase from "@/components/editorial/HearingAidsShowcase";
import OtologyShowcase from "@/components/editorial/OtologyShowcase";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return {};

  const isEn = lang === "en";
  const title = isEn ? service.title.en : service.title.bn;
  const tagline = isEn ? service.tagline.en : service.tagline.bn;
  const description = isEn ? service.description.en : service.description.bn;

  return constructMetadata({
    lang: lang as "en" | "bn",
    title: isEn ? `${title} — Best ENT Care in Silchar` : `${title} — সিলচরের সেরা ইএনটি কেয়ার`,
    description: `${tagline}. ${description.substring(0, 120)}...`,
    path: `/services/${id}`,
  });
}

export async function generateStaticParams() {
  return services.flatMap((service) => [
    { lang: "en", id: service.id },
    { lang: "bn", id: service.id },
  ]);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const isEn = lang === "en";

  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const title = isEn ? service.title.en : service.title.bn;
  const tagline = isEn ? service.tagline.en : service.tagline.bn;
  const outcome = isEn ? service.outcome.en : service.outcome.bn;
  const description = isEn ? service.description.en : service.description.bn;
  const timing = isEn ? service.timing.en : service.timing.bn;
  const features = isEn ? service.features.en : service.features.bn;
  const faqs = isEn ? service.faqs.en : service.faqs.bn;

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 pb-24">
        {/* Breadcrumb Back Button */}
        <Link
          href={`/${lang}/services`}
          className="inline-flex items-center gap-2 text-forest hover:text-forest-soft transition-colors mb-8 text-xs font-semibold tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          {isEn ? "Back to Services" : "সেবাসমূহে ফিরে যান"}
        </Link>

        {/* Majestic Hero Banner */}
        <div className={`relative w-full rounded-sm overflow-hidden mb-16 shadow-2xl border border-forest/10 ${
          id === "hearing-aids" ? "aspect-[16/9]" : "aspect-[21/9]"
        }`}>
          <Image
            src={service.bgImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/15" />
        </div>

        {/* Dynamic 2-Column Grid Layout (Information Hierarchy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Clinical Description & Features */}
          <div className="lg:col-span-8 space-y-8">
            <div className="text-xs uppercase tracking-[0.4em] text-forest font-semibold leading-relaxed mb-6 block">
              {tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest leading-tight mt-0">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-forest-soft font-serif italic">
              {outcome}
            </p>

            <div className="my-8 w-16 h-px bg-forest/30" />

            <div className="prose prose-lg prose-forest max-w-none text-ink-soft leading-loose">
              <p className="text-lg text-ink-soft/90 font-light">
                {description}
              </p>
            </div>


          </div>

          {/* Right Column: Premium Timing, Pricing & Sticky Booking Card */}
          <div className="lg:col-span-4 bg-paper-warm border border-hairline rounded-sm p-8 text-ink shadow-xl space-y-8 sticky top-28">
            <h3 className="text-2xl font-serif text-forest border-b border-hairline pb-4">
              {isEn ? "Service Details" : "সেবার বিবরণ"}
            </h3>

            {/* Timings */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <Clock className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  {isEn ? "Clinical Schedule" : "ক্লিনিকাল সময়সূচী"}
                </span>
              </div>
              <p className="text-base text-ink-soft font-light leading-relaxed pl-8">
                {timing}
              </p>
            </div>


            {/* Dynamic Slot Picker Call-to-action */}
            <div className="pt-4 border-t border-hairline">
              <Link href={`/${lang}/book?service=${service.id}`}>
                <Button variant="rust" className="w-full py-6 rounded-none group flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {isEn ? "Book This Service" : "এই সেবা বুক করুন"}
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Custom Hearing Aids Showcase */}
        {id === "hearing-aids" && (
          <HearingAidsShowcase lang={lang} />
        )}

        {/* Custom Otology Showcase */}
        {id === "otology-clinic" && (
          <OtologyShowcase lang={lang} />
        )}

        {/* FAQ Section */}
        <div className="mt-20 border-t border-forest/10 pt-12">
          <FaqSection
            faqs={faqs}
            title={isEn ? "Service Specific FAQs" : "সেবা সংক্রান্ত সচরাচর জিজ্ঞাস্য"}
          />
        </div>

      </div>

      <ClosingCTA lang={lang} />
    </main>
  );
}
