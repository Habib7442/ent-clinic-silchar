import LocationSection from "@/components/editorial/LocationSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import { Mail, Phone, Clock } from "lucide-react";

export default async function ContactPage({
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
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest font-light mb-6">
          {isBn ? "যোগাযোগ করুন" : "Contact Us"}
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত। অ্যাপয়েন্টমেন্ট বুকিং বা অন্য কোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।"
            : "We are here to answer your questions. Reach out to us for appointment bookings or any other assistance."}
        </p>
      </section>

      {/* Contact Details */}
      <section className="container-padding py-16 bg-paper-card border-y border-hairline">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-2">
              {isBn ? "ফোন ও হোয়াটসঅ্যাপ" : "Phone & WhatsApp"}
            </h3>
            <p className="font-sans text-ink-soft mb-1">+91 98765 43210</p>
            <p className="font-sans text-xs text-mute uppercase tracking-wider mt-2">
              {isBn ? "সকাল ৯টা - রাত ৮টা" : "9:00 AM - 8:00 PM"}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-2">
              {isBn ? "ইমেইল" : "Email"}
            </h3>
            <p className="font-sans text-ink-soft mb-1">contact@entclinicsilchar.com</p>
            <p className="font-sans text-xs text-mute uppercase tracking-wider mt-2">
              {isBn ? "রিপোর্টের জন্য" : "For sending reports"}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-forest mb-2">
              {isBn ? "ক্লিনিকের সময়" : "Clinic Hours"}
            </h3>
            <p className="font-sans text-ink-soft mb-1">{isBn ? "সোম - শনি: সকাল ১০টা - সন্ধ্যা ৭টা" : "Mon - Sat: 10:00 AM - 7:00 PM"}</p>
            <p className="font-sans text-ink-soft mb-1">{isBn ? "রবিবার: বন্ধ" : "Sunday: Closed"}</p>
          </div>

        </div>
      </section>

      {/* Location Map */}
      <LocationSection lang={lang} />
      
      <ClosingCTA lang={lang} />
    </main>
  );
}
