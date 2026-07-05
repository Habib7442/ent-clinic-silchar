import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/editorial/Navbar";
import Footer from "@/components/editorial/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

import { constructMetadata, viewport, medicalClinicSchema, jsonLd } from "@/lib/seo";
export { viewport };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" 
      ? "ডাঃ অভিষেক রায় | সেরা নাক, কান, গলা বিশেষজ্ঞ" 
      : "Dr. Abhishek Ray | Best ENT Specialist",
    path: "/",
  });
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={cn(
        "h-full",
        "antialiased",
        fraunces.variable,
        inter.variable,
        "font-sans"
      )}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-paper selection:bg-gold/20 selection:text-gold"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(medicalClinicSchema())}
        />
        <Navbar />
        <div className="pt-24 lg:pt-28 flex-1 flex flex-col">
          {children}
        </div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
