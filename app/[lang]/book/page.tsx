import HeroBookingForm from "@/components/editorial/HeroBookingForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    title: lang === "bn" ? "অনলাইন অ্যাপয়েন্টমেন্ট বুকিং | দি ইএনটি ক্লিনিক" : "Select an Appointment Slot | The ENT Clinic Silchar",
    description: lang === "bn"
      ? "দি ইএনটি ক্লিনিকের সহজ ও দ্রুত অনলাইন বুকিং সিস্টেম। আপনার সুবিধাজনক সময় ও দিন নির্বাচন করুন।"
      : "Schedule your consultation slot instantly at Silchar's top ENT specialist practice using our streamlined 1-tap slot picker.",
    path: "/book",
  });
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <main className="flex-1 overflow-x-hidden min-h-screen bg-paper flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="w-full max-w-md">
        <Link 
          href={`/${lang}`} 
          className="inline-flex items-center gap-2 text-forest hover:text-forest-soft transition-colors mb-8 text-sm font-semibold tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          {isEn ? "Back to Home" : "হোমে ফিরে যান"}
        </Link>
        <HeroBookingForm lang={lang} />
      </div>
    </main>
  );
}
