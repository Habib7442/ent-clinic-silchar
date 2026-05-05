import HeroSection from "@/components/editorial/HeroSection";
import DoctorBrief from "@/components/editorial/DoctorBrief";
import ServicesSection from "@/components/editorial/ServicesSection";
import Testimonials from "@/components/editorial/Testimonials";
import ClinicGallery from "@/components/editorial/ClinicGallery";
import ProcessSection from "@/components/editorial/ProcessSection";
import FeeSection from "@/components/editorial/FeeSection";
import LocationSection from "@/components/editorial/LocationSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="flex-1">
      <HeroSection lang={lang} />
      <DoctorBrief lang={lang} />
      <ServicesSection lang={lang} />
      <Testimonials lang={lang} />
      <ClinicGallery lang={lang} />
      <ProcessSection lang={lang} />
      <FeeSection lang={lang} />
      <LocationSection lang={lang} />
      <ClosingCTA lang={lang} />
    </main>
  );
}
