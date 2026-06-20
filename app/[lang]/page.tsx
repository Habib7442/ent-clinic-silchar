import HeroSection from "@/components/editorial/HeroSection";
import DoctorBrief from "@/components/editorial/DoctorBrief";
import VideoTestimonials from "@/components/editorial/VideoTestimonials";
import ServicesSection from "@/components/editorial/ServicesSection";
import Testimonials from "@/components/editorial/Testimonials";
import EducationalVideosSection from "@/components/editorial/EducationalVideosSection";
import ClinicGallery from "@/components/editorial/ClinicGallery";
import ProcessSection from "@/components/editorial/ProcessSection";

import LocationSection from "@/components/editorial/LocationSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="flex-1 overflow-x-hidden">
      <HeroSection lang={lang} />
      <DoctorBrief lang={lang} />
      <VideoTestimonials lang={lang} />
      <ServicesSection lang={lang} bgClass="bg-paper-warm" />
      <Testimonials lang={lang} />
      <EducationalVideosSection lang={lang} />
      <ClinicGallery lang={lang} />
      <ProcessSection lang={lang} />

      <LocationSection lang={lang} />
      <ClosingCTA lang={lang} />
    </main>
  );
}

