import ComingSoon from "@/components/editorial/ComingSoon";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <ComingSoon 
      lang={lang} 
      pageName={lang === "en" ? "About the Clinic" : "ক্লিনিক সম্পর্কে"} 
    />
  );
}
