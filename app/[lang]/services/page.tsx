import ComingSoon from "@/components/editorial/ComingSoon";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <ComingSoon 
      lang={lang} 
      pageName={lang === "en" ? "Our Services" : "আমাদের সেবাসমূহ"} 
    />
  );
}
