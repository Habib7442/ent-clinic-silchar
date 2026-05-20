import ServicesSection from "@/components/editorial/ServicesSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import TreatmentsList from "@/components/editorial/TreatmentsList";

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
      <TreatmentsList lang={lang} />
      <ClosingCTA lang={lang} />
    </main>
  );
}
