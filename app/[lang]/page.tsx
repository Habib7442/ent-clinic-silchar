import HeroSection from "@/components/editorial/HeroSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="flex-1">
      <HeroSection lang={lang} />
    </main>
  );
}
