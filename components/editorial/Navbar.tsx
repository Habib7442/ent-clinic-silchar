"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;

  const navLinks = {
    en: [
      { name: "Services", href: `/${lang}/services` },
      { name: "Gallery", href: `/${lang}/gallery` },
      { name: "About", href: `/${lang}/about` },
      { name: "Contact", href: `/${lang}/contact` },
    ],
    bn: [
      { name: "সেবাসমূহ", href: `/${lang}/services` },
      { name: "গ্যালারি", href: `/${lang}/gallery` },
      { name: "আমাদের সম্পর্কে", href: `/${lang}/about` },
      { name: "যোগাযোগ", href: `/${lang}/contact` },
    ]
  }[lang as 'en' | 'bn'] || [];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 bg-paper/95 backdrop-blur-md border-b border-hairline w-full">
        <div className="flex items-center gap-12">
        <Link href={`/${lang}`} className="group">
          <span className="font-serif text-xl lg:text-2xl text-forest tracking-tight">
            The ENT Clinic<span className="text-gold">.</span>
          </span>
          <span className="block text-[8px] uppercase tracking-[0.3em] text-mute font-sans mt-0.5">
            SILCHAR, ASSAM
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-ink/75 hover:text-forest transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* Desktop Language Switcher */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-tighter border border-hairline rounded-full px-3 py-1.5 text-ink">
          <Link 
            href={pathname.replace(`/${lang}`, "/en")} 
            className={cn("px-2 py-0.5 rounded-full transition-colors", lang === 'en' ? "bg-forest text-paper" : "text-ink/65 hover:text-forest")}
          >
            EN
          </Link>
          <Link 
            href={pathname.replace(`/${lang}`, "/bn")} 
            className={cn("px-2 py-0.5 rounded-full transition-colors", lang === 'bn' ? "bg-forest text-paper" : "text-ink/65 hover:text-forest")}
          >
            BN
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="https://search.google.com/local/writereview?fid=0x374e4b4ff109cfdd:0x8ca2bfe2070dae4e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-ink/75 hover:text-gold transition-colors font-bold"
          >
            {lang === 'bn' ? "রিভিউ লিখুন" : "Write a Review"}
          </a>
          <Link href={`/${lang}/book`}>
            <Button variant="rust" className="h-auto py-3 px-6">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu (Sheet) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-forest hover:bg-forest/5" aria-label="Open navigation menu">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-paper-warm border-hairline text-ink flex flex-col p-8 shadow-2xl">
            <SheetHeader className="text-left mb-12">
              <SheetTitle className="font-serif text-2xl text-forest">
                The ENT Clinic<span className="text-gold">.</span>
              </SheetTitle>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-mute font-sans mt-0.5">
                {lang === 'bn' ? "শিলচর, আসাম" : "SILCHAR, ASSAM"}
              </span>
              <SheetDescription className="sr-only">
                Navigate through The ENT Clinic Silchar services and information.
              </SheetDescription>
            </SheetHeader>
            
            <div className="flex flex-col gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-serif text-ink/80 hover:text-forest transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-hairline">
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                <span className="text-mute">Language</span>
                <div className="flex gap-2">
                  <Link 
                    href={pathname.replace(`/${lang}`, "/en")} 
                    onClick={() => setOpen(false)}
                    className={cn("px-3 py-1 rounded-full border border-hairline transition-colors", lang === 'en' ? "bg-forest text-paper border-forest" : "text-ink/60")}
                  >
                    EN
                  </Link>
                  <Link 
                    href={pathname.replace(`/${lang}`, "/bn")} 
                    onClick={() => setOpen(false)}
                    className={cn("px-3 py-1 rounded-full border border-hairline transition-colors", lang === 'bn' ? "bg-forest text-paper border-forest" : "text-ink/60")}
                  >
                    BN
                  </Link>
                </div>
              </div>

              <Link href={`/${lang}/book`} className="w-full" onClick={() => setOpen(false)}>
                <Button variant="rust" className="w-full h-auto py-5 text-sm">
                  Book Now
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      </nav>

      {/* Direct Contact & Location Bar (attached below the navbar) */}
      <div className="bg-[#0A1A12] text-paper/90 py-2.5 px-6 lg:px-12 flex justify-between items-center text-[10px] md:text-xs font-sans tracking-wider uppercase font-semibold border-b border-white/5">
        <a 
          href="tel:+919435070156" 
          className="flex items-center gap-1.5 hover:text-gold transition-colors text-white font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
          <span><span className="hidden sm:inline text-paper/70 font-medium">{lang === "bn" ? "কল করুন: " : "Call Clinic: "}</span>+91 94350 70156</span>
        </a>
        <a 
          href="https://maps.google.com/?q=The+ENT+Clinic+Silchar+Hriday+Rajani+Complex+Lochan+Bairagi+Rd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-gold transition-colors text-white font-bold"
        >
          <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
          <span><span className="hidden sm:inline text-paper/70 font-medium">{lang === "bn" ? "অবস্থান: " : "Find Us: "}</span><span className="normal-case font-medium text-paper/85">{lang === "bn" ? "হৃদয় রজনী কমপ্লেক্স, শিলচর" : "Hriday Rajani Complex, Silchar"}</span></span>
        </a>
      </div>
    </header>
  );
}
