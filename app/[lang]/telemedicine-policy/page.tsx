export default async function TelemedicinePolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 pb-24 bg-paper">
      <section className="px-6 lg:px-24 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-forest font-light mb-8">
          {isBn ? "টেলিমেডিসিন নীতি" : "Telemedicine Policy"}
        </h1>
        <div className="space-y-8 font-sans text-ink-soft leading-relaxed">
          <p>
            {isBn 
              ? "ন্যাশনাল মেডিক্যাল কমিশন (NMC) এর টেলিমেডিসিন গাইডলাইন অনুযায়ী আমাদের ভার্চুয়াল বা হোয়াটসঅ্যাপ কনসালটেশন পরিচালিত হয়।"
              : "Our virtual or WhatsApp consultations are conducted in accordance with the Telemedicine Practice Guidelines issued by the National Medical Commission (NMC)."}
          </p>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "১. টেলিমেডিসিনের সীমাবদ্ধতা" : "1. Limitations of Telemedicine"}
            </h2>
            <p>
              {isBn 
                ? "টেলিমেডিসিন সরাসরি শারীরিক পরীক্ষার বিকল্প নয়। কান বা গলার ভেতরের অবস্থা না দেখে কোনো চিকিৎসা বা সার্জারির পরামর্শ দেওয়া সম্ভব নয়। শুধুমাত্র প্রাথমিক পরামর্শ বা ফলো-আপের জন্য এটি প্রযোজ্য।"
                : "Telemedicine is not a substitute for a direct physical examination. We cannot advise treatments or surgeries without examining the ear or throat visually. It is suitable only for preliminary triage or follow-ups."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "২. জরুরী অবস্থা" : "2. Medical Emergencies"}
            </h2>
            <p>
              {isBn 
                ? "শ্বাসকষ্ট, অতিরিক্ত রক্তপাত বা হঠাৎ শোনার ক্ষমতা হারানোর মতো জরুরি অবস্থায় টেলিমেডিসিন ব্যবহার করবেন না। সরাসরি নিকটবর্তী হাসপাতালে বা আমাদের ক্লিনিকে যোগাযোগ করুন।"
                : "Do not use telemedicine in emergencies such as breathing difficulties, severe bleeding, or sudden hearing loss. Visit the nearest hospital or our clinic immediately."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "৩. প্রেসক্রিপশন" : "3. Prescriptions"}
            </h2>
            <p>
              {isBn 
                ? "টেলিমেডিসিনের মাধ্যমে শুধুমাত্র নিরাপদ এবং অনুমোদিত ওষুধ (List O & A) প্রেসক্রাইব করা হয়। ইনজেকশন বা কড়া অ্যান্টিবায়োটিক সরাসরি পরীক্ষা ছাড়া দেওয়া হয় না।"
                : "Only safe and approved medications (List O & A) are prescribed via telemedicine. Injectables or strong antibiotics are never prescribed without an in-person physical examination."}
            </p>
          </div>

          <div className="pt-8 border-t border-hairline text-sm text-ink-soft">
            {isBn ? "সর্বশেষ আপডেট: মে ২০২৬" : "Last updated: May 2026"}
          </div>
        </div>
      </section>
    </main>
  );
}
