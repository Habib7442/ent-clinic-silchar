import DoctorHero from "@/components/editorial/DoctorHero";
import DoctorPhilosophy from "@/components/editorial/DoctorPhilosophy";
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
    title: lang === "bn" ? "ডাঃ অভিষেক রায় সম্পর্কে — শিলচরের সেরা নাক কান গলা বিশেষজ্ঞ" : "About Dr. Abhishek Ray — Best ENT Doctor in Silchar",
    description: lang === "bn"
      ? "অভিজ্ঞতায় সেরা নাক কান গলা বিশেষজ্ঞ ডাঃ অভিষেক রায়ের প্রোফাইল, শিক্ষা ও চিকিৎসা দর্শন।"
      : "Editorial profile, qualifications, and core philosophy of Silchar's top ENT specialist, Dr. Abhishek Ray.",
    path: "/about",
  });
}

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
      <ClosingCTA lang={lang} />
    </main>
  );
}
