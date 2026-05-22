import ServicesSection from "@/components/editorial/ServicesSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
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
    title: lang === "bn" ? "নাক, কান ও গলা চিকিৎসা ও সেবাসমূহ | দি ইএনটি ক্লিনিক" : "Ear, Nose & Throat Treatments & Services in Silchar",
    description: lang === "bn"
      ? "দি ইএনটি ক্লিনিকের আটটি মূল চিকিৎসা সেবা এবং ডায়াগনস্টিক পরীক্ষার তালিকা (শ্রবণযন্ত্র, সাইনাস, স্পিচ থেরাপি, মাইক্রো-সার্জারি)।"
      : "Discover comprehensive ENT services in Silchar, covering Hearing Care, Sinusitis, Snoring, Voice treatments, and Pediatric ENT by Dr. Abhishek Ray.",
    path: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32">
      <section className="px-6 lg:px-24 py-16 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-paper font-light mb-6">
          {isBn ? "আমাদের সেবাসমূহ" : "Clinical Services"}
        </h1>
        <p className="font-sans text-lg md:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "প্রতিটি কান, নাক ও গলার সমস্যার জন্য উন্নত ও সহানুভূতিশীল চিকিৎসা।"
            : "Advanced, compassionate treatment for comprehensive ear, nose, and throat care."}
        </p>
      </section>

      <ServicesSection lang={lang} hideExploreLink={true} />
      <ClosingCTA lang={lang} />
    </main>
  );
}
