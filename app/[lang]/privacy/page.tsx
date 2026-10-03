import { constructMetadata, SITE } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" ? "গোপনীয়তা নোটিশ | দি ইএনটি ক্লিনিক" : "Privacy Notice | The ENT Clinic Silchar",
    description: lang === "bn"
      ? "ডিজিটাল ব্যক্তিগত তথ্য সুরক্ষা আইন, ২০২৩ অনুযায়ী দি ইএনটি ক্লিনিক শিলচর কীভাবে রোগীদের ব্যক্তিগত ও স্বাস্থ্যগত তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষা করে।"
      : "How The ENT Clinic Silchar collects, uses and protects patients' personal and health data under the Digital Personal Data Protection Act, 2023.",
    path: "/privacy",
    noIndex: true,
  });
}

interface Localized {
  en: string;
  bn: string;
}

interface NoticeSection {
  title: Localized;
  intro?: Localized;
  items?: Localized[];
  outro?: Localized;
}

/*
 * Notice content follows the DPDP Act, 2023 (s.5 notice, s.6 consent, s.8 duties,
 * s.11–14 rights, s.9 children) and the DPDP Rules, 2025 (r.3 notice, r.8 retention,
 * r.9 contact details, r.14 grievance timelines). Keep it in plain language: r.3
 * requires the notice to be understandable on its own.
 */
const SECTIONS: NoticeSection[] = [
  {
    title: { en: "1. Personal data we collect", bn: "১. আমরা যে ব্যক্তিগত তথ্য সংগ্রহ করি" },
    items: [
      {
        en: "Appointment requests: your name, mobile number, preferred date and the health concern you select on our booking form.",
        bn: "অ্যাপয়েন্টমেন্টের অনুরোধ: বুকিং ফর্মে দেওয়া আপনার নাম, মোবাইল নম্বর, পছন্দসই তারিখ এবং নির্বাচিত স্বাস্থ্য সমস্যা।",
      },
      {
        en: "Clinical care: your medical history, symptoms, examination findings, test results (such as audiometry or endoscopy), prescriptions and treatment notes.",
        bn: "চিকিৎসা: আপনার রোগের ইতিহাস, উপসর্গ, পরীক্ষার ফলাফল (যেমন অডিওমেট্রি বা এন্ডোস্কোপি), প্রেসক্রিপশন ও চিকিৎসার নোট।",
      },
      {
        en: "Communication: your phone number and the messages you send us by phone, WhatsApp or email.",
        bn: "যোগাযোগ: ফোন, হোয়াটসঅ্যাপ বা ইমেলে পাঠানো আপনার নম্বর ও বার্তা।",
      },
      {
        en: "Patient stories: photographs, videos or reviews are published on this website only with the patient's separate written consent.",
        bn: "রোগীর অভিজ্ঞতা: রোগীর আলাদা লিখিত সম্মতি ছাড়া কোনো ছবি, ভিডিও বা রিভিউ এই ওয়েবসাইটে প্রকাশ করা হয় না।",
      },
      {
        en: "Website: we do not use analytics, advertising or tracking cookies. Our hosting provider keeps basic technical logs (such as IP address and browser type) for security.",
        bn: "ওয়েবসাইট: আমরা কোনো অ্যানালিটিক্স, বিজ্ঞাপন বা ট্র্যাকিং কুকি ব্যবহার করি না। নিরাপত্তার জন্য আমাদের হোস্টিং প্রদানকারী প্রাথমিক প্রযুক্তিগত লগ (যেমন আইপি ঠিকানা ও ব্রাউজারের ধরন) রাখে।",
      },
    ],
  },
  {
    title: { en: "2. Why we use it", bn: "২. কেন আমরা এই তথ্য ব্যবহার করি" },
    items: [
      { en: "To arrange, confirm and remind you about appointments.", bn: "অ্যাপয়েন্টমেন্টের ব্যবস্থা, নিশ্চিতকরণ ও রিমাইন্ডার দিতে।" },
      { en: "To diagnose and treat you, including follow-ups and telemedicine consultations.", bn: "রোগ নির্ণয় ও চিকিৎসা, ফলো-আপ এবং টেলিমেডিসিন পরামর্শের জন্য।" },
      { en: "To keep medical records that the law requires clinics to maintain.", bn: "আইন অনুযায়ী ক্লিনিকের যে মেডিকেল রেকর্ড রাখা বাধ্যতামূলক তা সংরক্ষণ করতে।" },
      { en: "To respond to a medical emergency, where the law allows this without prior consent.", bn: "জরুরি চিকিৎসার ক্ষেত্রে, যেখানে আইন পূর্বসম্মতি ছাড়াই তা অনুমোদন করে।" },
    ],
    outro: {
      en: "We never sell your data or use it for advertising.",
      bn: "আমরা কখনো আপনার তথ্য বিক্রি করি না বা বিজ্ঞাপনের জন্য ব্যবহার করি না।",
    },
  },
  {
    title: { en: "3. Who we share it with", bn: "৩. কার সাথে তথ্য শেয়ার করা হয়" },
    items: [
      {
        en: "WhatsApp (Meta): our booking form opens WhatsApp with your message, and you choose whether to send it. WhatsApp's own privacy policy applies to that message.",
        bn: "হোয়াটসঅ্যাপ (মেটা): আমাদের বুকিং ফর্ম আপনার বার্তা সহ হোয়াটসঅ্যাপ খোলে এবং আপনি নিজেই তা পাঠানোর সিদ্ধান্ত নেন। সেই বার্তায় হোয়াটসঅ্যাপের নিজস্ব গোপনীয়তা নীতি প্রযোজ্য।",
      },
      {
        en: "Google Maps and YouTube: these load only when you choose to open the map or play a video, and they may then set their own cookies.",
        bn: "গুগল ম্যাপস ও ইউটিউব: আপনি ম্যাপ খুললে বা ভিডিও চালালে তবেই এগুলো লোড হয় এবং তখন নিজস্ব কুকি সেট করতে পারে।",
      },
      {
        en: "Laboratories, hospitals or specialists you are referred to, only as needed for your care and with your knowledge.",
        bn: "যে ল্যাবরেটরি, হাসপাতাল বা বিশেষজ্ঞের কাছে আপনাকে রেফার করা হয়, শুধুমাত্র আপনার চিকিৎসার প্রয়োজনে ও আপনার জ্ঞাতসারে।",
      },
      {
        en: "Government authorities, only when the law requires it.",
        bn: "সরকারি কর্তৃপক্ষ, শুধুমাত্র আইনত বাধ্যতামূলক হলে।",
      },
    ],
  },
  {
    title: { en: "4. How long we keep it", bn: "৪. কতদিন তথ্য রাখা হয়" },
    items: [
      {
        en: "Appointment requests that do not lead to a visit are deleted once they are no longer needed.",
        bn: "যে অ্যাপয়েন্টমেন্টের অনুরোধ ভিজিটে পরিণত হয়নি, প্রয়োজন শেষ হলে তা মুছে ফেলা হয়।",
      },
      {
        en: "Medical records are kept for the period required by applicable medical and legal regulations, then securely destroyed.",
        bn: "মেডিকেল রেকর্ড প্রযোজ্য চিকিৎসা ও আইনি বিধি অনুযায়ী নির্ধারিত সময় পর্যন্ত রাখা হয়, তারপর নিরাপদে নষ্ট করা হয়।",
      },
    ],
  },
  {
    title: { en: "5. Your rights", bn: "৫. আপনার অধিকার" },
    intro: {
      en: "Under the Digital Personal Data Protection Act, 2023, you can:",
      bn: "ডিজিটাল ব্যক্তিগত তথ্য সুরক্ষা আইন, ২০২৩ অনুযায়ী আপনি:",
    },
    items: [
      { en: "Ask for a summary of the personal data we hold about you and how we use it.", bn: "আমাদের কাছে থাকা আপনার ব্যক্তিগত তথ্য ও তার ব্যবহারের সারাংশ চাইতে পারেন।" },
      { en: "Ask us to correct, complete or update your data.", bn: "আপনার তথ্য সংশোধন, সম্পূর্ণ বা হালনাগাদ করার অনুরোধ করতে পারেন।" },
      { en: "Ask us to delete your data, except records the law requires us to keep.", bn: "আইনত বাধ্যতামূলক রেকর্ড ছাড়া আপনার তথ্য মুছে ফেলার অনুরোধ করতে পারেন।" },
      { en: "Withdraw your consent at any time, as easily as you gave it: just message or email us. This does not affect processing done before you withdrew.", bn: "যেকোনো সময়, সম্মতি দেওয়ার মতোই সহজে, সম্মতি প্রত্যাহার করতে পারেন: শুধু আমাদের মেসেজ বা ইমেল করুন। প্রত্যাহারের আগের প্রক্রিয়াকরণ এতে প্রভাবিত হয় না।" },
      { en: "Nominate someone to exercise these rights for you in case of death or incapacity.", bn: "মৃত্যু বা অক্ষমতার ক্ষেত্রে আপনার হয়ে এই অধিকার প্রয়োগের জন্য কাউকে মনোনীত করতে পারেন।" },
      { en: "Raise a grievance with us (see section 8).", bn: "আমাদের কাছে অভিযোগ জানাতে পারেন (৮ নম্বর অংশ দেখুন)।" },
    ],
  },
  {
    title: { en: "6. Children", bn: "৬. শিশু" },
    intro: {
      en: "If the patient is under 18, a parent or lawful guardian should fill in our forms and give consent. We use a child's data only to provide health services to the child.",
      bn: "রোগীর বয়স ১৮-র কম হলে, অভিভাবক বা আইনি অভিভাবক আমাদের ফর্ম পূরণ করবেন ও সম্মতি দেবেন। শিশুর তথ্য শুধুমাত্র শিশুকে স্বাস্থ্যসেবা দিতেই ব্যবহার করা হয়।",
    },
  },
  {
    title: { en: "7. Keeping your data safe", bn: "৭. তথ্যের নিরাপত্তা" },
    intro: {
      en: "We take reasonable security measures to protect your data. If a personal data breach occurs, we will inform you and the Data Protection Board of India as the law requires.",
      bn: "আপনার তথ্য সুরক্ষায় আমরা যুক্তিসঙ্গত নিরাপত্তা ব্যবস্থা গ্রহণ করি। ব্যক্তিগত তথ্য ফাঁসের ঘটনা ঘটলে আইন অনুযায়ী আমরা আপনাকে ও ভারতের ডেটা প্রোটেকশন বোর্ডকে জানাব।",
    },
  },
];

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";
  const t = (s: Localized) => (isBn ? s.bn : s.en);

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 pb-24 bg-paper">
      <section className="px-6 lg:px-24 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-forest font-light mb-8">
          {isBn ? "গোপনীয়তা নোটিশ" : "Privacy Notice"}
        </h1>
        <div className="space-y-10 font-sans text-ink-soft leading-relaxed">
          <p>
            {isBn
              ? `${SITE.nameBn} (${SITE.address.streetAddress}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}) আপনার ব্যক্তিগত ও স্বাস্থ্যগত তথ্য সুরক্ষায় প্রতিশ্রুতিবদ্ধ। এই নোটিশে ডিজিটাল ব্যক্তিগত তথ্য সুরক্ষা আইন, ২০২৩ এবং ডিজিটাল ব্যক্তিগত তথ্য সুরক্ষা বিধি, ২০২৫ অনুযায়ী আমরা কোন তথ্য সংগ্রহ করি, কেন করি এবং আপনার কী অধিকার আছে তা ব্যাখ্যা করা হয়েছে।`
              : `${SITE.name} (${SITE.address.streetAddress}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}) is committed to protecting your personal and health information. This notice explains what we collect, why, and your rights under the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025.`}
          </p>

          {SECTIONS.map((section) => (
            <div key={section.title.en}>
              <h2 className="font-serif text-2xl text-forest mb-4">{t(section.title)}</h2>
              {section.intro && <p className="mb-3">{t(section.intro)}</p>}
              {section.items && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.en}>{t(item)}</li>
                  ))}
                </ul>
              )}
              {section.outro && <p className="mt-3 font-semibold text-forest">{t(section.outro)}</p>}
            </div>
          ))}

          {/* Grievance contact: DPDP Rules r.9 requires publishing this; r.14 caps response at 90 days */}
          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "৮. যোগাযোগ ও অভিযোগ" : "8. Contact & grievances"}
            </h2>
            <p className="mb-4">
              {isBn
                ? "আপনার অধিকার প্রয়োগ, সম্মতি প্রত্যাহার বা অভিযোগ জানাতে যোগাযোগ করুন:"
                : "To exercise your rights, withdraw consent or raise a grievance, contact:"}
            </p>
            <div className="bg-paper-card border border-hairline rounded-sm p-6 space-y-1 text-sm">
              <p className="font-semibold text-forest">{isBn ? SITE.doctor.nameBn : SITE.doctor.name}</p>
              <p>{isBn ? "অভিযোগ নিষ্পত্তি কর্মকর্তা" : "Grievance Officer"}, {isBn ? SITE.nameBn : SITE.name}</p>
              <p>
                {isBn ? "ইমেল: " : "Email: "}
                <a href={`mailto:${SITE.email}`} className="text-rust underline underline-offset-2">{SITE.email}</a>
              </p>
              <p>
                {isBn ? "ফোন / হোয়াটসঅ্যাপ: " : "Phone / WhatsApp: "}
                <a href={`tel:${SITE.telephone.replace(/-/g, "")}`} className="text-rust underline underline-offset-2">{SITE.telephone}</a>
              </p>
            </div>
            <p className="mt-4">
              {isBn
                ? "আমরা যত দ্রুত সম্ভব এবং যেকোনো ক্ষেত্রে বিধিতে নির্ধারিত সময়সীমার (বর্তমানে ৯০ দিন) মধ্যে উত্তর দেব। আমাদের উত্তরে সন্তুষ্ট না হলে আপনি ভারতের ডেটা প্রোটেকশন বোর্ডে অভিযোগ দায়ের করতে পারেন।"
                : "We will respond as soon as possible, and in any case within the period set by the Rules (currently 90 days). If you are not satisfied with our response, you may file a complaint with the Data Protection Board of India."}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-forest mb-4">
              {isBn ? "৯. এই নোটিশের পরিবর্তন" : "9. Changes to this notice"}
            </h2>
            <p>
              {isBn
                ? "এই নোটিশ ইংরেজি ও বাংলায় উপলব্ধ। কোনো পরিবর্তন হলে আমরা এই পৃষ্ঠা হালনাগাদ করব।"
                : "This notice is available in English and Bengali. We will update this page if anything changes."}
            </p>
          </div>

          <div className="pt-8 border-t border-hairline text-sm text-ink-soft">
            {isBn ? "সর্বশেষ আপডেট: অক্টোবর ২০২৬" : "Last updated: October 2026"}
          </div>
        </div>
      </section>
    </main>
  );
}
