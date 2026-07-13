"use client";

import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const translations = {
  en: {
    tagline: "Precision ENT care for Silchar and beyond.",
    services: "Services",
    practice: "Practice",
    legal: "Legal",
    contact: "Get in Touch",
    rights: "All rights reserved.",
    developer: "Built for Excellence."
  },
  bn: {
    tagline: "শিলচর এবং তার বাইরের জন্য নির্ভুল ইএনটি সেবা।",
    services: "সেবা সমূহ",
    practice: "চেম্বারের তথ্য",
    legal: "আইনি তথ্য",
    contact: "যোগাযোগ করুন",
    rights: "সর্বস্বত্ব সংরক্ষিত।",
    developer: "উৎকর্ষের জন্য নির্মিত।"
  }
};

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const content = translations[lang as "en" | "bn"] || translations.en;
  const isEn = lang === "en";

  return (
    <footer className="bg-paper-warm border-t border-hairline pt-24 pb-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href={`/${lang}`} className="group flex items-center gap-3.5">
              <Image
                src="/images/header_logo.png"
                alt="The ENT Clinic Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-serif text-forest tracking-tight leading-tight">
                The ENT <span className="text-gold">Clinic</span>
              </span>
            </Link>
            <p className="text-ink-soft text-lg leading-relaxed max-w-sm">
              {content.tagline}
            </p>
            <div className="flex gap-4">
            <a 
              href={
                lang === "bn" 
                  ? "https://wa.me/919435070156?text=নমস্কার%2C%20আমি%20দি%20ইএনটি%20ক্লিনিক%20শিলচরের%20সাথে%20যোগাযোগ%20করতে%20চাই।"
                  : "https://wa.me/919435070156?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20The%20ENT%20Clinic%20Silchar%20regarding%20an%20appointment."
              } 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0A1A12] hover:bg-[#1E3A2B] transition-all rounded-full border border-white/5 hover:border-gold/30 group flex items-center justify-center gap-2 px-5 text-xs text-[#F6F1E6] font-semibold shadow-sm hover:shadow-md"
              >
                <img 
                  src="/social-icons/whatsapp.webp" 
                  alt="WhatsApp" 
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                />
                <span>{lang === "bn" ? "হোয়াটসঅ্যাপ করুন" : "WhatsApp Us"}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-forest font-serif text-xl font-medium">{content.services}</h3>
            <ul className="space-y-4">
              {["Hearing", "Sinus", "Snoring", "Paediatric", "Surgical"].map((item) => (
                <li key={item}>
                  <Link href={`/${lang}/services`} className="text-ink/70 hover:text-gold transition-colors text-sm font-medium">
                    {item} Care
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-forest font-serif text-xl font-medium">{content.practice}</h3>
            <ul className="space-y-4">
              {[
                { name: isEn ? "Doctor Profile" : "ডাক্তারের পরিচিতি", href: `/${lang}/doctor` },
                { name: isEn ? "Clinic Gallery" : "ক্লিনিক গ্যালারি", href: `/${lang}/gallery` },
                { name: isEn ? "Educational Videos" : "শিক্ষামূলক ভিডিও", href: `/${lang}/videos` },
                { name: isEn ? "First Visit" : "প্রথম ভিজিট", href: `/${lang}#process` },
                { name: isEn ? "Location" : "অবস্থান", href: `/${lang}#location` }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-ink/70 hover:text-gold transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://search.google.com/local/writereview?fid=0x374e4b4ff109cfdd:0x8ca2bfe2070dae4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/70 hover:text-gold transition-colors text-sm font-medium"
                >
                  {isEn ? "Write a Google Review" : "গুগল রিভিউ লিখুন"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-forest font-serif text-xl font-medium">{content.contact}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com/?q=The+ENT+Clinic+Silchar+Hriday+Rajani+Complex+Lochan+Bairagi+Rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-gold transition-colors text-sm leading-relaxed"
                >
                  Hriday Rajani Complex, Lochan Bairagi Rd, beside Durga Badi, Bilpar, Silchar, Assam 788001
                </a>
              </div>
              <a href="tel:+919435070156" className="flex items-center gap-4 group/footer-phone">
                <Phone className="w-5 h-5 text-gold group-hover/footer-phone:text-gold/80 transition-colors shrink-0" />
                <p className="text-ink group-hover/footer-phone:text-gold transition-colors text-sm font-bold font-sans">+91 94350 70156</p>
              </a>
              <a href="mailto:abhishek.hister@gmail.com" className="flex items-center gap-4 group/footer-mail">
                <Mail className="w-5 h-5 text-gold group-hover/footer-mail:text-gold/80 transition-colors shrink-0" />
                <p className="text-ink group-hover/footer-mail:text-gold transition-colors text-sm font-sans">abhishek.hister@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-mute font-medium">
            <span>© 2026 The ENT Clinic Silchar</span>
            <Link href={`/${lang}/privacy`} className="hover:text-gold transition-colors">
              {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </Link>
            <Link href={`/${lang}/telemedicine-policy`} className="hover:text-gold transition-colors">
              {lang === "bn" ? "টেলিমেডিসিন নীতি" : "Telemedicine Policy"}
            </Link>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] text-mute font-medium">
            {content.developer}
          </div>
        </div>
      </div>
    </footer>
  );
}
