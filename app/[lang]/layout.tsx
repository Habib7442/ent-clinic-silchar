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

export const metadata: Metadata = {
  title: "The ENT Clinic, Silchar",
  description: "Boutique specialty ENT practice in Silchar, Assam.",
};

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
        className="min-h-full flex flex-col bg-[#0A1A12] selection:bg-rust/20 selection:text-rust"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-16 lg:pt-20 flex-1 flex flex-col">
          {children}
        </div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
