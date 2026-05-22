import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import FullGallery from "@/components/editorial/FullGallery";
import ClosingCTA from "@/components/editorial/ClosingCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" ? "ক্লিনিক গ্যালারি - দি ইএনটি ক্লিনিক" : "Clinic Gallery - The ENT Clinic",
    description: lang === "bn"
      ? "শিলচরে আমাদের অত্যাধুনিক ইএনটি ক্লিনিকের আধুনিক সরঞ্জাম, শান্ত পরিবেশ এবং অডিওমেট্রি বুথের বাস্তব ছবি গ্যালারি।"
      : "Step inside our state-of-the-art ENT clinic in Silchar, Assam. Real, actual photography of our waiting lounge, diagnostics, audiometry soundproof booth, and therapy rooms.",
    path: "/gallery",
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <main className="flex-1 overflow-x-hidden pt-20 md:pt-28">
      {/* Hero Section */}
      <section className="px-6 lg:px-24 py-16 md:py-20 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4 block">
          {isBn ? "ক্লিনিকের বাস্তব ছবি" : "Real Clinical Photography"}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-paper font-light mb-6">
          {isBn ? "আধুনিক অবকাঠামো। শান্ত পরিবেশ।" : "Modern Facility. Calm Environment."}
        </h1>
        <p className="font-sans text-lg md:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "শিলচরে অবস্থিত আমাদের সর্বাধুনিক ডায়াগনস্টিক ল্যাব, অডিওমেট্রি বুথ এবং স্পিচ থেরাপি কেন্দ্রের বাস্তব চিত্র।"
            : "Explore our double-walled audiometry testing facilities, private consulting rooms, and advanced diagnostic technologies in Silchar."}
        </p>
      </section>

      {/* Bento Grid Gallery Component */}
      <FullGallery lang={lang} />

      {/* Closing Call to Action */}
      <ClosingCTA lang={lang} />
    </main>
  );
}
