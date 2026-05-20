"use client";

import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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
    <footer className="bg-[#0A1A12] border-t border-white/5 pt-24 pb-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href={`/${lang}`} className="block">
              <span className="text-2xl font-serif text-paper tracking-tight">
                The ENT <span className="text-rust">Clinic</span>
              </span>
            </Link>
            <p className="text-paper/40 text-lg leading-relaxed max-w-sm">
              {content.tagline}
            </p>
            <div className="flex gap-4">
              {[
                { name: "facebook", img: "/social-icons/facebook.webp", href: "#" },
                { name: "instagram", img: "/social-icons/instagram.webp", href: "#" },
                { name: "X", img: "/social-icons/X.webp", href: "#" },
                { name: "linkedin", img: "/social-icons/linkedin.webp", href: "#" },
                { name: "whatsapp", img: "/social-icons/whatsapp.webp", href: "https://wa.me/919435070156" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="p-3 bg-white/5 hover:bg-white/10 transition-all rounded-full border border-white/5 group flex items-center justify-center">
                  <img 
                    src={social.img} 
                    alt={social.name} 
                    className={cn(
                      "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                      social.name === "X" && "invert"
                    )} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-paper font-serif text-xl">{content.services}</h4>
            <ul className="space-y-4">
              {["Hearing", "Sinus", "Snoring", "Paediatric", "Surgical"].map((item) => (
                <li key={item}>
                  <Link href={`/${lang}/services`} className="text-paper/40 hover:text-gold transition-colors text-sm">
                    {item} Care
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-paper font-serif text-xl">{content.practice}</h4>
            <ul className="space-y-4">
              {[
                { name: "Doctor Profile", href: `/${lang}/doctor` },
                { name: "First Visit", href: `/${lang}#process` },
                { name: "Location", href: `/${lang}#location` }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-paper/40 hover:text-gold transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://search.google.com/local/writereview?fid=0x374e4b4ff109cfdd:0x8ca2bfe2070dae4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/40 hover:text-gold transition-colors text-sm"
                >
                  {isEn ? "Write a Google Review" : "গুগল রিভিউ লিখুন"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-paper font-serif text-xl">{content.contact}</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-rust shrink-0 mt-1" />
                <p className="text-paper/40 text-sm leading-relaxed">
                  Hriday Rajani Complex, Lochan Bairagi Rd, beside Durga Badi, Bilpar, Silchar, Assam 788001
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-forest shrink-0" />
                <p className="text-paper/40 text-sm font-bold">+91 94350 70156</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-forest shrink-0" />
                <p className="text-paper/40 text-sm">abhishek.hister@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-paper/30">
            <span>© 2026 The ENT Clinic Silchar</span>
            <Link href="#" className="hover:text-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold">Terms of Service</Link>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] text-paper/20">
            {content.developer}
          </div>
        </div>
      </div>
    </footer>
  );
}
