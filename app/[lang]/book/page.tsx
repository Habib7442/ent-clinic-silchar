import HeroBookingForm from "@/components/editorial/HeroBookingForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
