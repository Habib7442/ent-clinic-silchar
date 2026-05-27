import FeeSection from "@/components/editorial/FeeSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import Link from "next/link";
import { ArrowRight, Info, ShieldCheck, CreditCard } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" ? "স্বচ্ছ ফি ও চিকিৎসার খরচ | দি ইএনটি ক্লিনিক শিলচর" : "Consultation Fees & Treatment Costs | The ENT Clinic Silchar",
    description: lang === "bn"
      ? "শিলচরের সেরা নাক কান গলা ডাক্তারের চেম্বারের ফি, এন্ডোস্কোপি এবং অন্যান্য ডায়াগনস্টিক পরীক্ষার স্বচ্ছ খরচের বিবরণী।"
      : "View consultation rates, diagnostic procedures (audiometry, endoscopy), and treatment costs at the best ENT clinic in Silchar.",
    path: "/fees",
  });
}

export default async function FeesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 bg-paper">
      {/* Hero Section */}
      <section className="px-6 lg:px-24 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest font-light mb-6">
          {isBn ? "স্বচ্ছ ফি কাঠামো" : "Transparent Pricing"}
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "আমরা বিশ্বাস করি চিকিৎসার খরচ সম্পর্কে পূর্বেই জানা উচিত। কোনো লুকানো চার্জ বা অস্পষ্টতা নেই।"
            : "We believe healthcare costs should be known before you walk in the door. No hidden charges, no asterisks."}
        </p>
      </section>

      {/* Main Fee Component */}
      <FeeSection lang={lang} />

      {/* Details & Inclusions */}
      <section className="px-6 lg:px-24 py-24 bg-paper">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="bg-paper-card p-8 rounded-lg shadow-sm border border-hairline">
            <ShieldCheck className="w-8 h-8 text-forest mb-6" />
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "ফিতে যা অন্তর্ভুক্ত" : "What is Included"}
            </h3>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {isBn 
                ? "পরামর্শের ফিতে ডাক্তার সাহেবের সম্পূর্ণ মনোযোগ, সাধারণ পরীক্ষা এবং আপনার প্রশ্নের বিস্তারিত উত্তর অন্তর্ভুক্ত। কোনো তাড়াহুড়ো নেই।"
                : "The consultation fee covers the doctor's undivided attention, a standard clinical examination, and detailed answers to all your questions."}
            </p>
          </div>

          <div className="bg-paper-card p-8 rounded-lg shadow-sm border border-hairline">
            <Info className="w-8 h-8 text-forest mb-6" />
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "অতিরিক্ত পরীক্ষা" : "Additional Tests"}
            </h3>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {isBn 
                ? "অডিওমেট্রি বা এন্ডোস্কোপির মতো বিশেষ পরীক্ষার প্রয়োজন হলে, আমরা আগে ফি জানাব এবং আপনার সম্মতি নেব।"
                : "If specialized tests like pure-tone audiometry or nasal endoscopy are required, we will inform you of the cost beforehand and proceed only with your consent."}
            </p>
          </div>

          <div className="bg-paper-card p-8 rounded-lg shadow-sm border border-hairline">
            <CreditCard className="w-8 h-8 text-forest mb-6" />
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "পেমেন্ট মাধ্যম" : "Payment Methods"}
            </h3>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {isBn 
                ? "আমরা নগদ, ইউপিআই (PhonePe, Google Pay), এবং সমস্ত প্রধান ক্রেডিট/ডেবিট কার্ড গ্রহণ করি। অনলাইনে বুকিংয়ের সময়ও পেমেন্ট করা যায়।"
                : "We accept Cash, UPI (PhonePe, GPay), and all major Credit/Debit cards. You can also pay securely online while booking your slot."}
            </p>
          </div>

        </div>
      </section>

      <ClosingCTA lang={lang} />
    </main>
  );
}
