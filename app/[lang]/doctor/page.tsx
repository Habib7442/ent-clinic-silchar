import ComingSoon from "@/components/editorial/ComingSoon";

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <ComingSoon 
      lang={lang} 
      pageName={lang === "en" ? "Doctor Profile" : "ডাক্তারের প্রোফাইল"} 
    />
  );
}
