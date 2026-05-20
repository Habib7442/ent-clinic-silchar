import LocationSection from "@/components/editorial/LocationSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import { Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  const waLink = isBn
    ? "https://wa.me/919435070156?text=নমস্কার%2C%20আমি%20দি%20ইএনটি%20ক্লিনিক%20শিলচরের%20সাথে%20যোগাযোগ%20করতে%20চাই।"
    : "https://wa.me/919435070156?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20The%20ENT%20Clinic%20Silchar%20regarding%20an%20appointment.";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 bg-[#0A1A12]">
      {/* Hero Section */}
      <section className="px-6 lg:px-24 py-16 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-rust font-semibold">
          {isBn ? "সরাসরি যোগাযোগ ও সহায়তা" : "DIRECT CALLS & INQUIRIES"}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-paper font-light leading-tight">
          {isBn ? "যোগাযোগ করুন" : "Get in Touch"}
        </h1>
        <p className="font-sans text-lg md:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত। অ্যাপয়েন্টমেন্ট বুকিং, টেলিমেডিসিন ফলো-আপ বা অন্য কোনো সহায়তার জন্য সরাসরি যোগাযোগ করুন।"
            : "We are here to assist you with appointment bookings, telemedicine follow-ups, and clinical inquiries."}
        </p>
      </section>

      {/* Contact Cards Grid */}
      <section className="px-6 lg:px-24 py-12 border-t border-white/5 bg-[#08150F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Phone & WhatsApp */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm space-y-6 hover:border-gold/30 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-paper">
                {isBn ? "ফোন ও হোয়াটসঅ্যাপ" : "Phone & WhatsApp"}
              </h3>
              <p className="font-sans text-paper/60 text-sm leading-relaxed">
                {isBn 
                  ? "যেকোনো জরুরি জিজ্ঞাসা ও সাধারণ অ্যাপয়েন্টমেন্টের জন্য আমাদের সাথে কথা বলুন।" 
                  : "Call us directly or send a message for quick booking support and queries."}
              </p>
              <a 
                href="tel:+919435070156" 
                className="block text-2xl font-bold font-sans text-gold hover:text-rust transition-colors mt-2"
              >
                +91 94350 70156
              </a>
            </div>
            
            <div className="pt-6">
              <a 
                href={waLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all rounded-sm border border-[#25D366]/20 hover:border-[#25D366]/40 flex items-center justify-center gap-2 text-xs text-[#25D366] font-semibold uppercase tracking-wider"
              >
                <img 
                  src="/social-icons/whatsapp.webp" 
                  alt="WhatsApp" 
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                />
                <span>{isBn ? "হোয়াটসঅ্যাপ মেসেজ" : "WhatsApp Chat"}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Card 2: Email & Support */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm space-y-6 hover:border-gold/30 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-paper">
                {isBn ? "অফিসিয়াল ইমেইল" : "Official Email"}
              </h3>
              <p className="font-sans text-paper/60 text-sm leading-relaxed">
                {isBn 
                  ? "মেডিকেল রিপোর্ট, রেফারেল লেটার এবং প্রাতিষ্ঠানিক যোগাযোগের জন্য আমাদের ইমেল করুন।" 
                  : "Send your clinical reports, referral letters, and general queries to our inbox."}
              </p>
              <a 
                href="mailto:abhishek.hister@gmail.com" 
                className="block text-lg font-semibold font-sans text-gold hover:text-rust transition-colors break-all mt-2"
              >
                abhishek.hister@gmail.com
              </a>
            </div>
            
            <div className="pt-6">
              <a 
                href="mailto:abhishek.hister@gmail.com"
                className="w-full py-4 bg-gold/10 hover:bg-gold/20 transition-all rounded-sm border border-gold/20 hover:border-gold/40 flex items-center justify-center gap-2 text-xs text-gold font-semibold uppercase tracking-wider"
              >
                <span>{isBn ? "ইমেইল পাঠান" : "Send Email"}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Card 3: Clinic Hours */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm space-y-6 hover:border-gold/30 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rust/10 text-rust">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-paper">
                {isBn ? "ক্লিনিকের সময়সূচী" : "Clinic Timings"}
              </h3>
              <p className="font-sans text-paper/60 text-sm leading-relaxed">
                {isBn
                  ? "অ্যাপয়েন্টমেন্ট অনুযায়ী সেবা দেওয়া হয়। অনুগ্রহ করে পৌঁছানোর পূর্বে আপনার সময় কনফার্ম করুন।"
                  : "We operate strictly by appointment to ensure zero waiting room crowding and high patient focus."}
              </p>
              
              <div className="space-y-2 pt-2 text-sm text-paper/80 font-sans">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-paper/60">{isBn ? "সোমবার - শনিবার:" : "Mon - Sat:"}</span>
                  <span className="font-bold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-1 text-rust font-semibold">
                  <span>{isBn ? "রবিবার:" : "Sunday:"}</span>
                  <span>{isBn ? "বন্ধ" : "Closed"}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link 
                href={`/${lang}/book`}
                className="w-full py-4 bg-rust/10 hover:bg-rust/20 transition-all rounded-sm border border-rust/20 hover:border-rust/40 flex items-center justify-center gap-2 text-xs text-rust font-semibold uppercase tracking-wider"
              >
                <span>{isBn ? "অ্যাপয়েন্টমেন্ট বুকিং" : "Book Online"}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Location Map */}
      <LocationSection lang={lang} />
      
      <ClosingCTA lang={lang} />
    </main>
  );
}
