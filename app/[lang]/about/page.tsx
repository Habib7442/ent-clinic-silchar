import DoctorHero from "@/components/editorial/DoctorHero";
import DoctorPhilosophy from "@/components/editorial/DoctorPhilosophy";
import DoctorCredentials from "@/components/editorial/DoctorCredentials";
import ClosingCTA from "@/components/editorial/ClosingCTA";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="flex-1 overflow-x-hidden">
      <DoctorHero lang={lang} />
      <DoctorPhilosophy lang={lang} />
      <DoctorCredentials lang={lang} />
      <ClosingCTA lang={lang} />
    </main>
  );
}
