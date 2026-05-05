import ComingSoon from "@/components/editorial/ComingSoon";

export default async function JournalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <ComingSoon 
      lang={lang} 
      pageName={lang === "en" ? "Medical Journal" : "মেডিকেল জার্নাল"} 
    />
  );
}
