export default async function PrivacyPage({
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
          {isBn ? "গোপনীয়তা নীতি (Privacy Policy)" : "Privacy Policy"}
        </h1>
        <div className="space-y-8 font-sans text-ink-soft leading-relaxed">
          <p>
            {isBn 
              ? "দ্য ইএনটি ক্লিনিক, শিলচর আপনার চিকিৎসা এবং ব্যক্তিগত তথ্যের সুরক্ষায় প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি (Privacy Policy) ব্যাখ্যা করে যে কীভাবে আমরা ডিজিটাল ব্যক্তিগত তথ্য সুরক্ষা আইন (DPDP Act) ২০২৩ অনুযায়ী আপনার ডেটা সংগ্রহ এবং পরিচালনা করি।"
              : "The ENT Clinic, Silchar is committed to protecting your medical and personal information. This Privacy Policy explains how we collect and manage your data in accordance with the Digital Personal Data Protection (DPDP) Act 2023."}
          </p>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "১. তথ্য সংগ্রহ" : "1. Information Collection"}
            </h2>
            <p>
              {isBn 
                ? "আমরা শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করি, যেমন আপনার নাম, যোগাযোগের নম্বর, এবং চিকিৎসার ইতিহাস। ওয়েবসাইটে অ্যাপয়েন্টমেন্ট বুকিংয়ের সময় দেওয়া তথ্য সুরক্ষিত রাখা হয়।"
                : "We collect only necessary information, such as your name, contact number, and medical history. Information provided during website appointment booking is kept secure."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "২. তথ্য ব্যবহার" : "2. Data Usage"}
            </h2>
            <p>
              {isBn 
                ? "আপনার ডেটা শুধুমাত্র চিকিৎসা পরিষেবা প্রদান, অ্যাপয়েন্টমেন্টের সময়সূচী, এবং প্রয়োজনীয় ফলো-আপ যোগাযোগের জন্য ব্যবহৃত হয়। আমরা কখনোই তৃতীয় পক্ষের কাছে আপনার তথ্য বিক্রি বা শেয়ার করি না।"
                : "Your data is used solely for providing medical services, appointment scheduling, and necessary follow-up communication. We never sell or share your information with third parties."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "৩. ডেটা মুছে ফেলা (Right to be Forgotten)" : "3. Data Deletion"}
            </h2>
            <p>
              {isBn 
                ? "আপনার অধিকার রয়েছে আপনার ব্যক্তিগত তথ্য মুছে ফেলার অনুরোধ করার। ক্লিনিকের সাথে যোগাযোগ করে আপনি আপনার রেকর্ড মুছে ফেলতে বলতে পারেন (আইনগতভাবে সংরক্ষণ করতে বাধ্য ডেটা ব্যতীত)।"
                : "You have the right to request the deletion of your personal data. You may contact the clinic to have your records deleted (except for data legally required to be retained)."}
            </p>
          </div>

          <div className="pt-8 border-t border-hairline text-sm text-mute">
            {isBn ? "সর্বশেষ আপডেট: মে ২০২৬" : "Last updated: May 2026"}
          </div>
        </div>
      </section>
    </main>
  );
}
