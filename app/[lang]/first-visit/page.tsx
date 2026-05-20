import ProcessSection from "@/components/editorial/ProcessSection";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import Link from "next/link";
import { ArrowRight, FileText, Stethoscope, AlertTriangle, Baby } from "lucide-react";

export default async function FirstVisitPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="px-6 lg:px-24 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-paper font-light mb-6">
          {isBn ? "প্রথম দর্শনে কী আশা করবেন" : "What to Expect on Your First Visit"}
        </h1>
        <p className="font-sans text-lg md:text-xl text-paper/70 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? "আমরা জানি ডাক্তারের কাছে যাওয়া উদ্বেগের হতে পারে। তাই আমরা আমাদের প্রক্রিয়াটি পরিষ্কার, ধীর এবং স্বচ্ছ রেখেছি। এখানে কোনো লুকানো চমক নেই।"
            : "We know that visiting a specialist can cause anxiety. We have designed our process to be clear, unhurried, and transparent. There are no hidden surprises here."}
        </p>
      </section>

      {/* Process Section (Reused from Home but works perfectly here) */}
      <ProcessSection lang={lang} />

      {/* Detailed Info Sections */}
      <section className="px-6 lg:px-24 py-24 bg-paper-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* What to bring */}
          <div>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4">
              {isBn ? "কী সাথে আনবেন" : "What to Bring"}
            </h3>
            <ul className="space-y-4 font-sans text-ink-soft">
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "একটি বৈধ সচিত্র পরিচয়পত্র (আধার বা প্যান কার্ড)" : "A valid photo ID (Aadhaar or PAN card)"}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "আগের যেকোনো রিপোর্ট (এক্স-রে, অডিওগ্রাম, এমআরআই)" : "Any prior reports (X-rays, audiograms, MRIs)"}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "আপনি বর্তমানে যে ওষুধগুলো খাচ্ছেন তার একটি তালিকা" : "A complete list of your current medications"}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "আপনার প্রশ্নগুলো একটি কাগজে লিখে আনুন" : "Your questions, written down on paper"}</span>
              </li>
            </ul>
          </div>

          {/* What we will not do */}
          <div>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/5 text-forest">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4">
              {isBn ? "আমরা যা করব না" : "What We Will Not Do"}
            </h3>
            <ul className="space-y-4 font-sans text-ink-soft">
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "প্রথম দিনেই অপ্রয়োজনীয় সার্জারির পরামর্শ দেব না।" : "We will not recommend surgery on your first visit unless it's a critical emergency."}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "সঠিক অডিওমেট্রি পরীক্ষা ছাড়া হিয়ারিং এইড কিনতে বাধ্য করব না।" : "We will not push hearing aids before a comprehensive audiometry assessment."}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forest mt-1">•</span>
                <span>{isBn ? "যে রিপোর্ট আমরা বিশ্লেষণ করতে পারব না, তার পরীক্ষা করতে দেব না।" : "We will not order diagnostic tests that we cannot independently interpret."}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Paediatric Section */}
      <section className="px-6 lg:px-24 py-24 bg-paper">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mx-auto">
            <Baby className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">
            {isBn ? "শিশুদের সাথে নিয়ে আসা" : "Coming with a Child"}
          </h2>
          <p className="font-sans text-lg text-ink-soft mb-8 leading-relaxed">
            {isBn 
              ? "ডাক্তারের কাছে যাওয়া শিশুদের জন্য ভয়ের হতে পারে। আমরা শিশুদের প্রতি অত্যন্ত যত্নশীল। তাদের সাথে কথা বলে, শান্ত করে, তারপর অত্যন্ত সাবধানে পরীক্ষা করা হয়। আমাদের লক্ষ্য হলো তারা যেন একটুও ভয় না পায়।"
              : "We acknowledge that visiting a doctor can be terrifying for a young child. We examine children gently, explaining our instruments to them before we use them. Our priority is a tear-free diagnostic process."}
          </p>
          <div className="inline-block">
            <Link 
              href={`/${lang}/services/paediatric-ent`}
              className="inline-flex items-center gap-2 text-forest border-b border-forest/30 pb-1 hover:border-forest transition-colors"
            >
              <span className="font-sans font-medium">
                {isBn ? "আমাদের শিশু পরিষেবা সম্পর্কে জানুন" : "Read about our Paediatric Services"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA lang={lang} />
    </main>
  );
}
