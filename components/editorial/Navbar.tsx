"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;

  const navLinks = {
    en: [
      { name: "Services", href: `/${lang}/services` },
      { name: "About", href: `/${lang}/about` },
      { name: "Contact", href: `/${lang}/contact` },
    ],
    bn: [
      { name: "সেবাসমূহ", href: `/${lang}/services` },
      { name: "আমাদের সম্পর্কে", href: `/${lang}/about` },
      { name: "যোগাযোগ", href: `/${lang}/contact` },
    ]
  }[lang as 'en' | 'bn'] || [];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 lg:px-12 bg-[#0A1A12]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-12">
        <Link href={`/${lang}`} className="group">
          <span className="font-serif text-xl lg:text-2xl text-paper tracking-tight">
            The ENT Clinic<span className="text-rust">.</span>
          </span>
          <span className="block text-[8px] uppercase tracking-[0.3em] text-paper/40 font-sans mt-0.5">
            SILCHAR, ASSAM
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-paper/60 hover:text-paper transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* Desktop Language Switcher */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-tighter border border-white/10 rounded-full px-3 py-1.5 text-paper">
          <Link 
            href={pathname.replace(`/${lang}`, "/en")} 
            className={cn("px-2 py-0.5 rounded-full transition-colors", lang === 'en' ? "bg-forest text-paper" : "text-paper/40 hover:text-paper")}
          >
            EN
          </Link>
          <Link 
            href={pathname.replace(`/${lang}`, "/bn")} 
            className={cn("px-2 py-0.5 rounded-full transition-colors", lang === 'bn' ? "bg-forest text-paper" : "text-paper/40 hover:text-paper")}
          >
            BN
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="https://search.google.com/local/writereview?fid=0x374e4b4ff109cfdd:0x8ca2bfe2070dae4e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-paper/40 hover:text-gold transition-colors font-bold"
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-paper">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0A1A12] border-white/10 text-paper flex flex-col p-8">
            <SheetHeader className="text-left mb-12">
              <SheetTitle className="font-serif text-2xl text-paper">Menu<span className="text-rust">.</span></SheetTitle>
              <SheetDescription className="sr-only">
                Navigate through The ENT Clinic Silchar services and information.
              </SheetDescription>
            </SheetHeader>
            
            <div className="flex flex-col gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif text-paper/80 hover:text-paper transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                <span className="text-paper/40">Language</span>
                <div className="flex gap-2">
                  <Link 
                    href={pathname.replace(`/${lang}`, "/en")} 
                    className={cn("px-3 py-1 rounded-full border border-white/10 transition-colors", lang === 'en' ? "bg-forest text-paper border-forest" : "text-paper/60")}
                  >
                    EN
                  </Link>
                  <Link 
                    href={pathname.replace(`/${lang}`, "/bn")} 
                    className={cn("px-3 py-1 rounded-full border border-white/10 transition-colors", lang === 'bn' ? "bg-forest text-paper border-forest" : "text-paper/60")}
                  >
                    BN
                  </Link>
                </div>
              </div>

              <Link href={`/${lang}/book`} className="w-full">
                <Button variant="rust" className="w-full h-auto py-5 text-sm">
                  Book Now
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
