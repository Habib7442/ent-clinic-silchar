import LocationSection from "@/components/editorial/LocationSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import { Clock, MapPin, Navigation, Car } from "lucide-react";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="container-padding py-16 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-paper font-light mb-6">
          {isBn ? "ক্লিনিকের অবস্থান" : "Location & Access"}
        </h1>
        <p className="font-sans text-lg md:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "আমরা শিলচরের কেন্দ্রস্থলে অবস্থিত। আপনার সুবিধার্থে আমাদের পৌঁছানোর দিকনির্দেশনা নিচে দেওয়া হলো।"
            : "We are centrally located in Silchar, designed for easy access from Cachar, Karimganj, and Hailakandi."}
        </p>
      </section>

      {/* Reusing Location Section */}
      <LocationSection lang={lang} />

      {/* Access Details */}
      <section className="container-padding py-24 bg-paper-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "পার্কিং সুবিধা" : "Parking Facility"}
            </h3>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {isBn 
                ? "ক্লিনিকের নিজস্ব সীমানার ভেতর রোগীদের জন্য পর্যাপ্ত এবং নিরাপদ পার্কিংয়ের ব্যবস্থা রয়েছে।"
                : "Dedicated, secure parking is available within the clinic premises for our patients."}
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "যাতায়াতের সুবিধা" : "Accessibility"}
            </h3>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {isBn 
                ? "ক্লিনিকের প্রবেশপথ সম্পূর্ণ সমতল। বয়স্ক রোগীদের জন্য হুইলচেয়ার এবং শিশুদের স্ট্রলার নিয়ে প্রবেশ করা খুবই সহজ।"
                : "The clinic has step-free, flat access from the parking area, easily accommodating wheelchairs and pediatric prams."}
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "ভ্রমণের সময়" : "Travel Times"}
            </h3>
            <ul className="space-y-2 font-sans text-ink-soft text-sm">
              <li>{isBn ? "শিলচর রেলওয়ে স্টেশন: ১৫ মিনিট" : "Silchar Railway Station: 15 mins"}</li>
              <li>{isBn ? "শিলচর মেডিকেল কলেজ: ২০ মিনিট" : "Silchar Medical College: 20 mins"}</li>
              <li>{isBn ? "করিমগঞ্জ শহর: ১.৫ ঘন্টা" : "Karimganj Town: 1.5 hrs"}</li>
              <li>{isBn ? "হাইলাকান্দি শহর: ১.৫ ঘন্টা" : "Hailakandi Town: 1.5 hrs"}</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-3">
              {isBn ? "ল্যান্ডমার্ক" : "Landmarks"}
            </h3>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {isBn 
                ? "নেয়িনস (NEINS) এর ঠিক পাশে, বিবেকানন্দ কো-অপারেটিভ এর সংলগ্ন, মেহেরপুর, শিলচর।"
                : "Beside NEINS, adjacent to Vivekananda Cooperative, Meherpur, Silchar."}
            </p>
          </div>

        </div>
      </section>

      <ClosingCTA lang={lang} />
    </main>
  );
}
