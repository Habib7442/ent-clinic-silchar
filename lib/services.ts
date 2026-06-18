import {
  Ear,
  Wind,
  Baby,
  Mic2,
  ShieldCheck,
  Brain,
  Activity,
  Volume2,
  LucideIcon,
  Flower2,
  Stethoscope,
  MessageSquare,
} from "lucide-react";

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  bgImage: string;
  title: { en: string; bn: string };
  tagline: { en: string; bn: string };
  outcome: { en: string; bn: string };
  description: { en: string; bn: string };
  timing: { en: string; bn: string };
  features: { en: string[]; bn: string[] };
  faqs: { en: { q: string; a: string }[]; bn: { q: string; a: string }[] };
}

export const services: ServiceData[] = [
  /* ──────────────────────────────────────────────────────────────────────────
   * 1.  SPEECH THERAPY CLINIC (formerly Audiometry & Speech Therapy)
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "speech-therapy-clinic",
    icon: MessageSquare,
    bgImage: "/images/audiometry_therapy.webp",
    title: {
      en: "Speech Therapy Clinic",
      bn: "স্পিচ থেরাপি ক্লিনিক",
    },
    tagline: {
      en: "Personalized speech-language rehabilitation for children and adults",
      bn: "শিশু ও প্রাপ্তবয়স্কদের জন্য ব্যক্তিগতকৃত স্পিচ-ল্যাঙ্গুয়েজ পুনর্বাসন",
    },
    outcome: {
      en: "Speak clearly, live fully.",
      bn: "স্পষ্ট কথা বলুন, পূর্ণ জীবন যাপন করুন।",
    },
    description: {
      en: "Unlock your voice at The ENT Clinic, Silchar. Our specialized Speech Therapy unit offers personalized care for children and adults facing articulation disorders, stuttering, and voice problems. From developmental delays to post-stroke rehabilitation, our expert therapists use proven techniques to build confidence and clarity. Don't let communication barriers hold you back. Speak clearly, live fully — book your consultation today.",
      bn: "দ্য ইএনটি ক্লিনিক, শিলচরে আপনার কণ্ঠ ফিরিয়ে নিন। আমাদের বিশেষায়িত স্পিচ থেরাপি বিভাগ শিশু ও প্রাপ্তবয়স্কদের উচ্চারণজনিত সমস্যা, তোতলামি ও কণ্ঠের সমস্যায় ব্যক্তিগত যত্ন প্রদান করে। ভাষাবিকাশে বিলম্ব থেকে শুরু করে স্ট্রোক-পরবর্তী পুনর্বাসন পর্যন্ত, আমাদের বিশেষজ্ঞ থেরাপিস্টরা আত্মবিশ্বাস ও স্পষ্টতা গড়ে তুলতে প্রমাণিত কৌশল ব্যবহার করেন। যোগাযোগের বাধা আপনাকে আটকে রাখতে দেবেন না — আজই পরামর্শ নিন।",
    },
    timing: { en: "By appointment", bn: "অ্যাপয়েন্টমেন্ট অনুযায়ী" },
    features: {
      en: [
        "Paediatric language, articulation and stammering assessment",
        "Therapy for voice misuse and post-stroke aphasia",
        "Pure Tone Audiometry (PTA) in calibrated soundproof booth",
        "Speech audiometry and Speech Reception Threshold (SRT) testing",
        "Impedance audiometry and tympanometry for middle-ear assessment",
        "Therapist-led home practice plans for parents and caregivers",
        "Same-visit digital reports for ENT referral and school certification",
      ],
      bn: [
        "শিশুদের ভাষা, উচ্চারণ ও তোতলামির মূল্যায়ন",
        "ভয়েস অপব্যবহার ও স্ট্রোক-পরবর্তী অ্যাফেজিয়ার জন্য থেরাপি",
        "ক্যালিব্রেটেড শব্দরোধী বুথে পিওর টোন অডিওমেট্রি (PTA)",
        "স্পিচ অডিওমেট্রি ও স্পিচ রিসেপশন থ্রেশহোল্ড (SRT) পরীক্ষা",
        "মধ্যকর্ণ মূল্যায়নের জন্য ইম্পিড্যান্স অডিওমেট্রি ও টিম্পানোমেট্রি",
        "অভিভাবক ও পরিচর্যাকারীদের জন্য থেরাপিস্ট-নির্দেশিত গৃহ অনুশীলন",
        "ইএনটি রেফারেল ও স্কুল সার্টিফিকেশনের জন্য একই-ভিজিটে ডিজিটাল রিপোর্ট",
      ],
    },
    faqs: {
      en: [
        {
          q: "My child is 3 years old and barely speaks — when should I seek help?",
          a: "If a child is not forming simple two-word phrases by age 2 or sentences by age 3, a speech-language evaluation is recommended. Early intervention produces the best results — do not wait for the child to 'grow out of it'.",
        },
        {
          q: "What conditions does speech therapy help with?",
          a: "Articulation disorders, delayed speech in children, stammering, voice strain in teachers and singers, post-stroke aphasia, and motor speech problems following neurological events. Each plan is individualized after assessment.",
        },
        {
          q: "How many sessions are usually needed?",
          a: "Childhood articulation issues often respond within 8 to 16 sessions. Stammering and post-stroke aphasia may require several months of progressive therapy. A clear plan is given after the first assessment.",
        },
        {
          q: "Do you provide reports for school use?",
          a: "Yes — formal speech evaluation summaries suitable for school admissions and scholarship boards are issued on the same visit.",
        },
        {
          q: "Can adults benefit from speech therapy?",
          a: "Absolutely. Adults recovering from stroke, those with voice strain from professional use, and anyone with stuttering or articulation issues benefit significantly from structured therapy.",
        },
      ],
      bn: [
        {
          q: "আমার সন্তানের বয়স ৩ বছর কিন্তু কথা বলছে না — কখন সাহায্য নেব?",
          a: "২ বছরে দুই শব্দের বাক্য বা ৩ বছরে সম্পূর্ণ বাক্য না বলতে পারলে স্পিচ-ল্যাঙ্গুয়েজ মূল্যায়ন করানো উচিত। দ্রুত পদক্ষেপে সবচেয়ে ভালো ফল পাওয়া যায়।",
        },
        {
          q: "স্পিচ থেরাপি কোন কোন সমস্যায় সাহায্য করে?",
          a: "উচ্চারণজনিত সমস্যা, শিশুদের ভাষাবিকাশে বিলম্ব, তোতলামি, শিক্ষক ও গায়কদের ভয়েস স্ট্রেইন, স্ট্রোক-পরবর্তী অ্যাফেজিয়া — মূল্যায়নের পর ব্যক্তিগত পরিকল্পনা তৈরি হয়।",
        },
        {
          q: "সাধারণত কতগুলো সেশন লাগে?",
          a: "শিশুদের উচ্চারণ সমস্যা সাধারণত ৮–১৬ সেশনে ভালো হয়। তোতলামি ও স্ট্রোক-পরবর্তী সমস্যায় কয়েক মাস লাগতে পারে। প্রথম মূল্যায়নের পরেই স্পষ্ট পরিকল্পনা দেওয়া হয়।",
        },
        {
          q: "স্কুলের জন্য রিপোর্ট পাওয়া যায়?",
          a: "হ্যাঁ — স্কুল ভর্তি ও বৃত্তির জন্য উপযুক্ত আনুষ্ঠানিক স্পিচ মূল্যায়ন রিপোর্ট একই ভিজিটে দেওয়া হয়।",
        },
        {
          q: "প্রাপ্তবয়স্করা কি উপকৃত হন?",
          a: "অবশ্যই। স্ট্রোক-পরবর্তী পুনর্বাসন, পেশাগত কারণে ভয়েস স্ট্রেইন বা তোতলামিতে প্রাপ্তবয়স্করা সুসংগঠিত থেরাপিতে উল্লেখযোগ্যভাবে উপকৃত হন।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 2.  HEADACHE CLINIC
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "headache-clinic",
    icon: Brain,
    bgImage: "/images/headache_clinic.webp",
    title: { en: "Headache Clinic", bn: "মাথাব্যথা ক্লিনিক" },
    tagline: {
      en: "A structured approach to chronic and recurring headache",
      bn: "দীর্ঘস্থায়ী ও পুনঃপুন মাথাব্যথার সুসংগঠিত চিকিৎসা",
    },
    outcome: {
      en: "Structured care for recurring headache.",
      bn: "পুনঃপুন মাথাব্যথার জন্য সুসংগঠিত চিকিৎসা।",
    },
    description: {
      en: "Tired of living with constant headaches? The ENT Clinic, Silchar has the answer. Our dedicated Headache Clinic separates sinus-driven headaches from migraines, tension headaches, and other ENT-related causes with precision nasal endoscopy and detailed pattern analysis. Stop masking the pain — find the real cause and get a personalized treatment plan. Relief is possible. Visit Silchar's headache specialists today.",
      bn: "ক্রমাগত মাথাব্যথায় ক্লান্ত? দ্য ইএনটি ক্লিনিক, শিলচর আপনার সমাধান দেবে। আমাদের বিশেষ হেডেক ক্লিনিক নাসাল এন্ডোস্কোপি ও বিস্তারিত প্যাটার্ন বিশ্লেষণের মাধ্যমে সাইনাসজনিত মাথাব্যথাকে মাইগ্রেন, টেনশন হেডেক ও অন্যান্য ইএনটি কারণ থেকে আলাদা করে। ব্যথা চাপা দেওয়া বন্ধ করুন — আসল কারণ খুঁজে বের করুন এবং ব্যক্তিগত চিকিৎসা পরিকল্পনা নিন।",
    },
    timing: {
      en: "Wednesdays, 4:00 PM to 8:00 PM",
      bn: "প্রতি বুধবার, বিকেল ৪টা থেকে রাত ৮টা",
    },
    features: {
      en: [
        "Detailed headache-pattern history (frequency, triggers, family history)",
        "Nasal endoscopic examination to detect occult sinus pathology",
        "Differentiation of sinus headache from migraine and tension-type headache",
        "Trigger diary review (sleep, food, screen time, posture)",
        "Medical management coordinated with the patient's GP",
        "Onward referral to neurology when warranted",
        "Structured follow-up at 4 and 12 weeks to review progress",
      ],
      bn: [
        "মাথাব্যথার ধরন, ফ্রিকোয়েন্সি, ট্রিগার ও পারিবারিক ইতিহাসের বিস্তারিত মূল্যায়ন",
        "অদৃশ্য সাইনাস সমস্যা সনাক্তের জন্য নাসাল এন্ডোস্কোপি",
        "সাইনাস হেডেক ও মাইগ্রেন / টেনশন হেডেকের পার্থক্য নির্ণয়",
        "ট্রিগার ডায়েরি পর্যালোচনা (ঘুম, খাদ্য, স্ক্রিন টাইম, ভঙ্গি)",
        "রোগীর জিপি-র সঙ্গে সমন্বয় করে চিকিৎসা পরিকল্পনা",
        "প্রয়োজনে নিউরোলজি বিভাগে রেফারেলের ব্যবস্থা",
        "অগ্রগতি পর্যালোচনার জন্য ৪ সপ্তাহ ও ১২ সপ্তাহে সুসংগঠিত ফলো-আপ",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do I know if my headache is from a sinus problem?",
          a: "Sinus headaches typically come with nasal blockage, facial pressure over the cheeks or forehead, worsening on bending forward, and post-nasal drip. A nasal endoscopy in clinic clarifies the diagnosis far better than imaging alone.",
        },
        {
          q: "When does the Headache Clinic run?",
          a: "Every Wednesday from 4:00 PM to 8:00 PM. Prior appointment is strongly recommended as each patient receives a longer consultation slot than a standard OPD visit.",
        },
        {
          q: "Will I need a CT or MRI scan?",
          a: "Only if specific clinical features suggest it. Many sinus headaches can be diagnosed with a careful examination and nasal endoscopy alone — imaging is requested judiciously, not by default.",
        },
        {
          q: "Can children have sinus headaches?",
          a: "Yes — recurrent forehead pain, mouth-breathing, and a chronically blocked nose in a child should be evaluated by an ENT, not dismissed as eye strain or growing pains.",
        },
        {
          q: "What treatments are offered?",
          a: "Treatment is individualized: nasal decongestion regimens, allergy management, septoplasty where structural correction is needed, migraine-specific medication, and lifestyle modification. Surgery is never the first option.",
        },
      ],
      bn: [
        {
          q: "কী করে বুঝব আমার মাথাব্যথা সাইনাসের কারণে?",
          a: "নাক বন্ধ, কপাল বা গালে চাপ, সামনে ঝুঁকলে বেড়ে যাওয়া এবং পোস্ট-নেজাল ড্রিপ সাইনাস হেডেকের লক্ষণ। নাসাল এন্ডোস্কোপিতে রোগ নির্ণয় অনেক স্পষ্ট হয়।",
        },
        {
          q: "হেডেক ক্লিনিক কখন খোলা?",
          a: "প্রতি বুধবার বিকেল ৪টা থেকে রাত ৮টা। প্রতিটি রোগীর জন্য দীর্ঘ স্লট বরাদ্দ থাকায় আগে অ্যাপয়েন্টমেন্ট নেওয়া প্রয়োজন।",
        },
        {
          q: "CT বা MRI লাগবে কি?",
          a: "শুধুমাত্র সুনির্দিষ্ট ক্লিনিকাল কারণে। সতর্ক পরীক্ষা ও নাসাল এন্ডোস্কোপিতেই অনেক সমস্যা নির্ণয় হয়।",
        },
        {
          q: "শিশুদের সাইনাস হেডেক হয় কি?",
          a: "হ্যাঁ — বারবার কপালে ব্যথা, মুখ দিয়ে শ্বাস বা দীর্ঘস্থায়ী নাক বন্ধ থাকলে ইএনটি পরীক্ষা করানো উচিত।",
        },
        {
          q: "কী কী চিকিৎসা দেওয়া হয়?",
          a: "নাকের ডিকনজেশন, অ্যালার্জি ব্যবস্থাপনা, প্রয়োজনে সেপ্টোপ্লাস্টি, মাইগ্রেনের ওষুধ ও জীবনযাত্রার পরিবর্তন — সার্জারি সবসময় শেষ বিকল্প।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 3.  ALLERGY CLINIC (NEW)
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "allergy-clinic",
    icon: Flower2,
    bgImage: "/images/allergy_clinic.webp",
    title: {
      en: "Allergy Clinic",
      bn: "অ্যালার্জি ক্লিনিক",
    },
    tagline: {
      en: "Comprehensive relief from allergic rhinitis and airway allergy",
      bn: "অ্যালার্জিক রাইনাইটিস ও শ্বাসনালীর অ্যালার্জি থেকে পূর্ণ মুক্তি",
    },
    outcome: {
      en: "Breathe freely, live comfortably.",
      bn: "মুক্তভাবে শ্বাস নিন, আরামে বাঁচুন।",
    },
    description: {
      en: "Stop the sneezing and reclaim your day at The ENT Clinic, Silchar. Our specialized Allergy Clinic provides comprehensive relief from Allergic Rhinitis. Through precise diagnostic testing and personalized treatment plans — including immunotherapy and advanced nasal care — we target the root cause of your congestion and itchy eyes. Breathe freely and live comfortably. Visit Silchar's experts in allergy relief today.",
      bn: "হাঁচি বন্ধ করুন, আপনার দিন ফিরে পান — দ্য ইএনটি ক্লিনিক, শিলচরে। আমাদের বিশেষায়িত অ্যালার্জি ক্লিনিক অ্যালার্জিক রাইনাইটিস থেকে পূর্ণ মুক্তি দেয়। নির্ভুল রোগনির্ণয় পরীক্ষা ও ব্যক্তিগত চিকিৎসা পরিকল্পনার মাধ্যমে — ইমিউনোথেরাপি ও উন্নত নাকের যত্নসহ — আমরা আপনার নাক বন্ধ ও চোখ চুলকানোর মূল কারণ সমাধান করি।",
    },
    timing: { en: "Regular clinical hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Skin prick testing and nasal smear for allergen identification",
        "Allergic rhinitis diagnosis and grading",
        "Immunotherapy (desensitisation) planning and administration",
        "Anti-allergy nasal spray, antihistamine, and leukotriene therapy",
        "Trigger identification: dust mites, pollen, pet dander, mould",
        "Allergy evaluation for children with recurrent nasal blockage",
        "Coordinated care with asthma and skin allergy specialists",
      ],
      bn: [
        "অ্যালার্জেন শনাক্তের জন্য স্কিন প্রিক টেস্ট ও নাসাল স্মিয়ার",
        "অ্যালার্জিক রাইনাইটিস নির্ণয় ও মাত্রা নির্ধারণ",
        "ইমিউনোথেরাপি (ডিসেনসিটাইজেশন) পরিকল্পনা ও প্রদান",
        "অ্যান্টি-অ্যালার্জি নাসাল স্প্রে, অ্যান্টিহিস্টামিন ও লিউকোট্রিন থেরাপি",
        "ট্রিগার চিহ্নিতকরণ: ধুলার মাইট, পরাগ, পশুর লোম, ছত্রাক",
        "বারবার নাক বন্ধ শিশুদের অ্যালার্জি মূল্যায়ন",
        "হাঁপানি ও ত্বকের অ্যালার্জি বিশেষজ্ঞদের সঙ্গে সমন্বিত চিকিৎসা",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do I know if I have allergic rhinitis or just a cold?",
          a: "Allergic rhinitis typically involves clear watery discharge, sneezing in bursts, itchy eyes and nose, and symptoms that persist or recur with specific triggers (dust, pollen, weather change). A cold usually resolves in 7 to 10 days. If symptoms last longer or keep returning, allergy testing is the next step.",
        },
        {
          q: "What is a skin prick test?",
          a: "A quick, safe in-clinic test where tiny amounts of common allergens are placed on the forearm skin. Mild swelling at a site confirms sensitivity to that allergen. Results are available the same visit.",
        },
        {
          q: "Can allergic rhinitis be permanently cured?",
          a: "Immunotherapy (desensitisation) can produce long-term remission in many patients — especially those with dust mite and pollen allergy. It involves gradual exposure to the allergen over months to retrain the immune response.",
        },
        {
          q: "Is allergy treatment available for children?",
          a: "Yes — allergic rhinitis is one of the most common chronic conditions in children. Safe, age-appropriate antihistamines and nasal sprays are available, and immunotherapy is considered from age 5 upward.",
        },
        {
          q: "Can allergies cause recurrent sinusitis or ear infections?",
          a: "Yes — uncontrolled nasal allergy is one of the main drivers of recurrent sinusitis and middle-ear fluid in children. Treating the underlying allergy often reduces the frequency of these infections significantly.",
        },
      ],
      bn: [
        {
          q: "অ্যালার্জিক রাইনাইটিস আর সাধারণ ঠান্ডার পার্থক্য কী?",
          a: "অ্যালার্জিক রাইনাইটিসে স্বচ্ছ পানির মতো নাক ঝরা, ঘন ঘন হাঁচি, চোখ ও নাক চুলকানো এবং নির্দিষ্ট কারণে বারবার হওয়ার প্রবণতা থাকে। সাধারণ ঠান্ডা সাধারণত ৭–১০ দিনে সারে। দীর্ঘস্থায়ী বা বারবার হলে অ্যালার্জি পরীক্ষা করানো উচিত।",
        },
        {
          q: "স্কিন প্রিক টেস্ট কী?",
          a: "কব্জিতে সাধারণ অ্যালার্জেনের ক্ষুদ্র পরিমাণ দিয়ে একটি দ্রুত, নিরাপদ পরীক্ষা। যে জায়গায় হালকা ফুলে ওঠে সেই অ্যালার্জেনে সংবেদনশীলতা নিশ্চিত হয়। একই ভিজিটে ফলাফল পাওয়া যায়।",
        },
        {
          q: "অ্যালার্জিক রাইনাইটিস স্থায়ীভাবে সারানো যায়?",
          a: "ইমিউনোথেরাপি অনেক রোগীর ক্ষেত্রে দীর্ঘমেয়াদি সমাধান দেয় — বিশেষত ধুলার মাইট ও পরাগ অ্যালার্জিতে। কয়েক মাস ধরে ক্রমান্বয়ে অ্যালার্জেনের সংস্পর্শে রোগ প্রতিরোধ ব্যবস্থাকে পুনর্প্রশিক্ষণ দেওয়া হয়।",
        },
        {
          q: "শিশুদের অ্যালার্জি চিকিৎসা হয়?",
          a: "হ্যাঁ — অ্যালার্জিক রাইনাইটিস শিশুদের সবচেয়ে সাধারণ দীর্ঘস্থায়ী সমস্যাগুলির একটি। বয়স-উপযুক্ত অ্যান্টিহিস্টামিন ও নাসাল স্প্রে পাওয়া যায়; ৫ বছর থেকে ইমিউনোথেরাপি বিবেচনা করা হয়।",
        },
        {
          q: "অ্যালার্জি কি বারবার সাইনোসাইটিস বা কানের সংক্রমণ ঘটাতে পারে?",
          a: "হ্যাঁ — নিয়ন্ত্রণহীন নাকের অ্যালার্জি বারবার সাইনোসাইটিস ও শিশুদের মধ্যকর্ণে তরল জমার প্রধান কারণ। অ্যালার্জির চিকিৎসায় এই সংক্রমণের হার উল্লেখযোগ্যভাবে কমে।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 4.  OTOLOGY CLINIC (NEW)
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "otology-clinic",
    icon: Stethoscope,
    bgImage: "/images/otology_clinic.webp",
    title: {
      en: "Otology Clinic",
      bn: "অটোলজি ক্লিনিক",
    },
    tagline: {
      en: "Advanced ear diagnostics and treatment by experienced certified audiologists",
      bn: "অভিজ্ঞ সার্টিফাইড অডিওলজিস্ট দ্বারা উন্নত কানের রোগনির্ণয় ও চিকিৎসা",
    },
    outcome: {
      en: "Expert ear care and advanced hearing diagnostics.",
      bn: "বিশেষজ্ঞ কানের যত্ন ও উন্নত শ্রবণ রোগনির্ণয়।",
    },
    description: {
      en: "Experience clear hearing at The ENT Clinic, Silchar. Our specialized Otology Unit provides comprehensive treatment for ear infections and hearing loss. We offer advanced diagnostics including Audiometry, Speech Audiometry, Tympanometry, OAE, BERA, and SISI tests — all performed by experienced, certified Audiologists. Trust our experts to restore your ear health and quality of life. Visit Silchar's leading ear specialists today.",
      bn: "দ্য ইএনটি ক্লিনিক, শিলচরে স্বচ্ছ শ্রবণ অনুভব করুন। আমাদের বিশেষায়িত অটোলজি বিভাগ কানের সংক্রমণ ও শ্রবণহানির ব্যাপক চিকিৎসা দেয়। অডিওমেট্রি, স্পিচ অডিওমেট্রি, টিম্পানোমেট্রি, OAE, BERA ও SISI পরীক্ষাসহ উন্নত ডায়াগনস্টিক — সবই অভিজ্ঞ, সার্টিফাইড অডিওলজিস্টদের দ্বারা। আপনার কানের স্বাস্থ্য ও জীবনের মান পুনরুদ্ধারে আমাদের বিশেষজ্ঞদের উপর আস্থা রাখুন।",
    },
    timing: { en: "Regular clinical hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Pure Tone Audiometry (PTA) in calibrated soundproof booth",
        "Speech Audiometry and Speech Reception Threshold (SRT)",
        "Tympanometry and impedance audiometry for middle-ear assessment",
        "Otoacoustic Emissions (OAE) for cochlear hair cell screening",
        "Brainstem Evoked Response Audiometry (BERA) for neural pathway assessment",
        "Short Increment Sensitivity Index (SISI) test",
        "Treatment of acute and chronic otitis media and otitis externa",
        "Earwax (cerumen) removal under microscopy",
      ],
      bn: [
        "ক্যালিব্রেটেড শব্দরোধী বুথে পিওর টোন অডিওমেট্রি (PTA)",
        "স্পিচ অডিওমেট্রি ও স্পিচ রিসেপশন থ্রেশহোল্ড (SRT)",
        "মধ্যকর্ণ মূল্যায়নের জন্য টিম্পানোমেট্রি ও ইম্পিড্যান্স অডিওমেট্রি",
        "কক্লিয়ার হেয়ার সেল স্ক্রিনিংয়ের জন্য ওটোঅ্যাকুস্টিক এমিশন (OAE)",
        "নিউরাল পাথওয়ে মূল্যায়নের জন্য BERA",
        "শর্ট ইনক্রিমেন্ট সেনসিটিভিটি ইনডেক্স (SISI) পরীক্ষা",
        "তীব্র ও দীর্ঘস্থায়ী ওটাইটিস মিডিয়া ও ওটাইটিস এক্সটার্নার চিকিৎসা",
        "মাইক্রোস্কোপির মাধ্যমে কানের মোম (সেরুমেন) অপসারণ",
      ],
    },
    faqs: {
      en: [
        {
          q: "What is BERA and who needs it?",
          a: "Brainstem Evoked Response Audiometry (BERA) is an objective test that measures how the hearing nerve and brain respond to sound. It is used for newborn hearing screening, assessing hearing in uncooperative patients, and ruling out retrocochlear (nerve-related) causes of hearing loss.",
        },
        {
          q: "What is OAE testing?",
          a: "Otoacoustic Emissions test the function of the outer hair cells in the cochlea. It is fast, painless, and requires no response from the patient — ideal for newborns, infants, and children.",
        },
        {
          q: "My ear feels blocked and I have muffled hearing — what could it be?",
          a: "Common causes include earwax buildup, middle-ear fluid (glue ear), eustachian tube dysfunction, or a perforated eardrum. A clinical examination with tympanometry quickly identifies the cause.",
        },
        {
          q: "Is ear discharge serious?",
          a: "Persistent discharge from the ear — especially if foul-smelling or associated with hearing loss — should be evaluated promptly. It may indicate chronic otitis media with or without cholesteatoma, which requires careful management.",
        },
        {
          q: "Can earwax cause hearing loss?",
          a: "Yes — significant wax buildup can block the ear canal and cause temporary hearing loss, muffling, and tinnitus. Safe removal under microscopy restores hearing immediately.",
        },
      ],
      bn: [
        {
          q: "BERA কী এবং কার প্রয়োজন?",
          a: "BERA একটি নৈর্ব্যক্তিক পরীক্ষা যা শ্রবণ স্নায়ু ও মস্তিষ্কের শব্দে সাড়া দেওয়ার ক্ষমতা মাপে। নবজাতক স্ক্রিনিং, অসহযোগী রোগীদের শ্রবণ মূল্যায়ন এবং স্নায়ুজনিত শ্রবণহানি নির্ণয়ে ব্যবহার হয়।",
        },
        {
          q: "OAE পরীক্ষা কী?",
          a: "OAE কক্লিয়ার বাইরের হেয়ার সেলের কার্যকারিতা পরীক্ষা করে। দ্রুত, ব্যথামুক্ত এবং রোগীর কোনো সাড়ার প্রয়োজন নেই — নবজাতক ও শিশুদের জন্য আদর্শ।",
        },
        {
          q: "কান বন্ধ লাগছে ও শব্দ ঘোলাটে — কারণ কী?",
          a: "সাধারণ কারণ: কানের মোম, মধ্যকর্ণে তরল (গ্লু ইয়ার), ইউস্টেশিয়ান টিউব সমস্যা বা কানের পর্দায় ছিদ্র। টিম্পানোমেট্রি সহ ক্লিনিকাল পরীক্ষায় দ্রুত কারণ নির্ণয় হয়।",
        },
        {
          q: "কান থেকে পুঁজ পড়া কি গুরুতর?",
          a: "persistent পুঁজ পড়া — বিশেষত দুর্গন্ধযুক্ত বা শ্রবণহানির সঙ্গে — দ্রুত মূল্যায়ন করা উচিত। এটি কোলেস্টিয়াটোমাসহ দীর্ঘস্থায়ী ওটাইটিস মিডিয়ার লক্ষণ হতে পারে।",
        },
        {
          q: "কানের মোম কি শ্রবণহানি ঘটাতে পারে?",
          a: "হ্যাঁ — অতিরিক্ত মোম কান বন্ধ করে সাময়িক শ্রবণহানি, ঘোলা শব্দ ও টিনিটাস ঘটাতে পারে। মাইক্রোস্কোপিতে নিরাপদে অপসারণে সঙ্গে সঙ্গে শ্রবণ ফিরে আসে।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 5.  PAEDIATRIC ENT
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "pediatric-ent",
    icon: Baby,
    bgImage: "/images/pediatric_ent.webp",
    title: {
      en: "Paediatric ENT Clinic",
      bn: "শিশু নাক, কান ও গলা ক্লিনিক",
    },
    tagline: {
      en: "Calm, child-paced ENT care from infancy through teenage years",
      bn: "শিশুকাল থেকে কিশোর বয়স পর্যন্ত শান্ত ও যত্নশীল ইএনটি সেবা",
    },
    outcome: {
      en: "Gentle examination and safe foreign body removal.",
      bn: "কোমল পরীক্ষা ও নিরাপদ ফরেন বডি অপসারণ।",
    },
    description: {
      en: "Your child deserves the best care. At The ENT Clinic, Silchar, our Paediatric ENT unit is built around children — child-sized instruments, parents-present examination, and a calm consultation pace your child won't dread. From recurrent ear infections and enlarged adenoids to foreign bodies in the ear or nose, we handle it all with gentleness and precision. Because healthy children thrive — bring yours in today.",
      bn: "আপনার সন্তান সেরা যত্ন পাওয়ার যোগ্য। দ্য ইএনটি ক্লিনিক, শিলচরের শিশু ইএনটি বিভাগ সম্পূর্ণ শিশুদের কথা মাথায় রেখে তৈরি — শিশু-উপযোগী যন্ত্রপাতি, অভিভাবকের উপস্থিতিতে পরীক্ষা ও শান্ত পরিবেশ। বারবার কানের সংক্রমণ থেকে কান-নাকে ঢুকে যাওয়া বস্তু পর্যন্ত সব কিছু কোমলতা ও নির্ভুলতার সঙ্গে সামলানো হয়।",
    },
    timing: {
      en: "Regular clinical hours; same-day slots for emergencies",
      bn: "নিয়মিত ক্লিনিকাল সময়; জরুরি অবস্থায় একই-দিন স্লট",
    },
    features: {
      en: [
        "Paediatric-scaled otoscope, endoscope and instrumentation",
        "Evaluation of recurrent ear infection (acute and serous otitis media)",
        "Adenoid and tonsil assessment for mouth-breathing and snoring",
        "Safe foreign-body removal from ear, nose, and throat",
        "Hearing screening for children with delayed or unclear speech",
        "Allergy evaluation and pollen / dust desensitisation guidance",
        "Parent-counselling at every visit; no rushed examinations",
      ],
      bn: [
        "শিশু-উপযোগী অটোস্কোপ, এন্ডোস্কোপ ও যন্ত্রপাতি",
        "বারবার কানের সংক্রমণ মূল্যায়ন",
        "মুখ দিয়ে শ্বাস ও নাক ডাকার জন্য অ্যাডেনয়েড ও টনসিল মূল্যায়ন",
        "কান, নাক ও গলা থেকে নিরাপদে ফরেন বডি অপসারণ",
        "কথা বলতে দেরি বা অস্পষ্ট শিশুর শ্রবণ স্ক্রিনিং",
        "অ্যালার্জি মূল্যায়ন ও সংবেদনশীলতার পরামর্শ",
        "প্রতিটি ভিজিটে অভিভাবক-কাউন্সেলিং",
      ],
    },
    faqs: {
      en: [
        {
          q: "My child gets ear infections every few months — what can be done?",
          a: "Recurrent otitis media is common between ages 2 and 6. We check for fluid behind the eardrum, adenoid enlargement, and allergy contributions. Most cases respond to structured medical management; a small proportion benefit from minor procedures.",
        },
        {
          q: "My child put a small object in their ear or nose — what do I do?",
          a: "Stay calm and do not try to remove it at home — this often pushes it deeper. Bring the child to clinic the same day; foreign-body removal is a routine, safe procedure performed regularly here.",
        },
        {
          q: "Why does my child snore and breathe through the mouth?",
          a: "The most common cause in young children is enlarged adenoids and/or tonsils. Early assessment matters — many children improve without surgery once the cause is identified.",
        },
        {
          q: "When should a child have a hearing test?",
          a: "Any child with delayed speech, frequent ear pain, poor school performance, or a family history of hearing loss should be tested promptly.",
        },
        {
          q: "Are adenoid and tonsil surgeries safe in children?",
          a: "Modern adenoidectomy and tonsillectomy are well-established day-care procedures, recommended only when conservative care has failed or sleep, hearing, or growth is being affected.",
        },
      ],
      bn: [
        {
          q: "শিশুর কয়েক মাস পরপর কানের সংক্রমণ হয়, কী করব?",
          a: "২–৬ বছরে এটি সাধারণ। কানের পর্দার পেছনে তরল, অ্যাডেনয়েড ও অ্যালার্জি মূল্যায়ন করা হয়। বেশিরভাগ ক্ষেত্রে মেডিকাল চিকিৎসায় সমাধান হয়।",
        },
        {
          q: "কান বা নাকে কিছু ঢুকে গেলে কী করব?",
          a: "শান্ত থাকুন, বাড়িতে বের করার চেষ্টা করবেন না। একই দিনে ক্লিনিকে আসুন — ফরেন বডি অপসারণ এখানে নিরাপদে নিয়মিত করা হয়।",
        },
        {
          q: "সুস্থ শিশু কেন নাক ডাকে ও মুখ দিয়ে শ্বাস নেয়?",
          a: "সাধারণত অ্যাডেনয়েড ও/বা টনসিল বড় হওয়া। সঠিক নির্ণয়ে অনেক শিশু সার্জারি ছাড়াই ভালো হয়।",
        },
        {
          q: "কখন শ্রবণ পরীক্ষা করাব?",
          a: "কথায় দেরি, বারবার কানের ব্যথা, স্কুলে মনোযোগের সমস্যা বা পারিবারিক শ্রবণহানির ইতিহাস থাকলে।",
        },
        {
          q: "অ্যাডেনয়েড ও টনসিল সার্জারি কি নিরাপদ?",
          a: "হ্যাঁ — সুপ্রতিষ্ঠিত ডে-কেয়ার প্রক্রিয়া, শুধুমাত্র প্রয়োজনীয় ক্ষেত্রে সুপারিশ করা হয়।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 6.  VOICE & THROAT CLINIC
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "voice-clinic",
    icon: Mic2,
    bgImage: "/images/voice_clinic.webp",
    title: { en: "Voice & Throat Clinic", bn: "ভয়েস ও গলা ক্লিনিক" },
    tagline: {
      en: "Diagnosis and rehabilitation of the speaking and singing voice",
      bn: "কথা বলা ও গান গাওয়ার কণ্ঠের রোগ নির্ণয় ও পুনর্বাসন",
    },
    outcome: {
      en: "Clearer voice, healthier vocal cords.",
      bn: "স্পষ্ট কণ্ঠ, সুস্থ ভোকাল কর্ড।",
    },
    description: {
      en: "Is your voice letting you down? The ENT Clinic, Silchar's Voice & Throat Clinic offers expert diagnosis and rehabilitation for hoarseness, vocal nodules, reflux laryngitis, and voice fatigue. Whether you're a teacher losing your voice by Friday or a singer protecting your livelihood, our specialists combine laryngoscopy and voice therapy for lasting results. Your voice is your instrument — protect it. Book today.",
      bn: "কণ্ঠ আপনাকে হতাশ করছে? দ্য ইএনটি ক্লিনিক, শিলচরের ভয়েস ও গলা ক্লিনিক গলা বসা, ভোকাল নোডিউল, রিফ্লাক্স ল্যারিনজাইটিস ও কণ্ঠ ক্লান্তির নির্ভুল নির্ণয় ও পুনর্বাসন দেয়। শুক্রবারে গলা বসে যাওয়া শিক্ষক বা পেশাদার গায়ক — আমাদের বিশেষজ্ঞরা ল্যারিঙ্গোস্কোপি ও ভয়েস থেরাপির মাধ্যমে স্থায়ী সমাধান দেন। আপনার কণ্ঠ আপনার সম্পদ — রক্ষা করুন।",
    },
    timing: { en: "Regular clinical hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Flexible video laryngoscopy of the vocal folds",
        "Assessment of vocal nodules, polyps, and reflux laryngitis",
        "Voice rest, vocal hygiene, and therapy planning",
        "Structured programme for professional voice users",
        "Stroboscopy referral for fine-detail vocal-fold analysis",
        "Coordination of microlaryngeal surgery where needed",
        "Long-term follow-up for chronic hoarseness",
      ],
      bn: [
        "ভোকাল ফোল্ডের ফ্লেক্সিবল ভিডিও ল্যারিঙ্গোস্কোপি",
        "ভোকাল নোডিউল, পলিপ ও রিফ্লাক্স ল্যারিনজাইটিস মূল্যায়ন",
        "ভয়েস রেস্ট, ভোকাল হাইজিন ও থেরাপির পরিকল্পনা",
        "পেশাদার কণ্ঠ-ব্যবহারকারীদের জন্য সুসংগঠিত প্রোগ্রাম",
        "সূক্ষ্ম বিশ্লেষণের জন্য স্ট্রোবোস্কোপি রেফারেল",
        "প্রয়োজনে মাইক্রোল্যারিঞ্জিয়াল সার্জারির সমন্বয়",
        "দীর্ঘস্থায়ী গলা বসার জন্য দীর্ঘমেয়াদি ফলো-আপ",
      ],
    },
    faqs: {
      en: [
        {
          q: "How long should hoarseness last before I see an ENT?",
          a: "Any hoarseness lasting more than three weeks should be examined — especially in adults over 40 or regular voice users. Persistent hoarseness can occasionally indicate a serious cause where early diagnosis matters.",
        },
        {
          q: "Are vocal nodules permanent?",
          a: "No — most vocal nodules respond well to voice therapy and improved vocal hygiene. Surgery is reserved for cases that do not respond to conservative care.",
        },
        {
          q: "I am a teacher and lose my voice by Friday — is this treatable?",
          a: "Yes — this common pattern usually reflects vocal overuse and suboptimal technique. A short voice-therapy programme combined with vocal hygiene changes often resolves it completely.",
        },
        {
          q: "What is reflux laryngitis?",
          a: "Stomach acid that travels upward — especially at night — irritates the vocal folds, causing morning hoarseness, throat-clearing, and a lump sensation. It usually responds to medication, posture changes, and diet.",
        },
        {
          q: "What habits damage the voice most?",
          a: "Smoking, chronic shouting, untreated acid reflux, poor hydration, and speaking at length during a cold or laryngitis. Voice-care guidance is part of every consultation.",
        },
      ],
      bn: [
        {
          q: "কতদিন গলা বসলে ইএনটি দেখাব?",
          a: "তিন সপ্তাহের বেশি গলা বসা থাকলে, বিশেষত ৪০ বছরের উপরে বা নিয়মিত কণ্ঠ ব্যবহারকারীদের, পরীক্ষা করানো উচিত।",
        },
        {
          q: "ভোকাল নোডিউল কি স্থায়ী?",
          a: "না — বেশিরভাগ ক্ষেত্রে ভয়েস থেরাপি ও হাইজিনে ভালো হয়। সার্জারি শুধু কনজারভেটিভ চিকিৎসায় কাজ না হলে।",
        },
        {
          q: "শিক্ষক হিসেবে শুক্রবারে গলা বসে যায় — সারবে?",
          a: "হ্যাঁ — সংক্ষিপ্ত ভয়েস থেরাপি ও হাইজিন পরিবর্তনে সাধারণত সম্পূর্ণ সমাধান হয়।",
        },
        {
          q: "রিফ্লাক্স ল্যারিনজাইটিস কী?",
          a: "পেটের অ্যাসিড উপরে উঠে ভোকাল ফোল্ড জ্বালাতন করে, সকালে গলা ভাঙা ও গলায় কিছু আটকা অনুভূতি হয়। ওষুধ ও জীবনযাত্রা পরিবর্তনে ভালো হয়।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 7.  VERTIGO AND BALANCE CLINIC (formerly CCG)
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "vertigo-balance-clinic",
    icon: Activity,
    bgImage: "/images/craniocorpography.webp",
    title: {
      en: "Vertigo and Balance Clinic",
      bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক",
    },
    tagline: {
      en: "Objective testing for vertigo, dizziness, and balance disorders with CCG, VNG and COG",
      bn: "CCG, VNG ও COG সহ ভার্টিগো, মাথা ঘোরা ও ভারসাম্যহীনতার নৈর্ব্যক্তিক পরীক্ষা",
    },
    outcome: {
      en: "Objective insight into vertigo and balance.",
      bn: "ভার্টিগো ও ভারসাম্যহীনতার নৈর্ব্যক্তিক বিশ্লেষণ।",
    },
    description: {
      en: "Struggling with dizziness? The ENT Clinic, Silchar offers advanced relief. We provide expert diagnosis with extended COG, VNG, and CCG testing to pinpoint your vertigo's cause — whether it's BPPV, Meniere's disease, or vestibular neuritis. Don't let the world spin — reclaim your balance today with our specialized care.",
      bn: "মাথা ঘোরায় কষ্ট পাচ্ছেন? দ্য ইএনটি ক্লিনিক, শিলচর উন্নত সমাধান দেয়। আমরা COG, VNG ও CCG পরীক্ষার মাধ্যমে আপনার ভার্টিগোর কারণ — BPPV, মেনিয়ার রোগ বা ভেস্টিবুলার নিউরাইটিস — নির্ভুলভাবে চিহ্নিত করি। পৃথিবী ঘুরতে থাকুক না — আজই আপনার ভারসাম্য ফিরে পান।",
    },
    timing: {
      en: "Prior appointment recommended",
      bn: "পূর্বে অ্যাপয়েন্টমেন্ট নেওয়ার পরামর্শ",
    },
    features: {
      en: [
        "Cranio Corpo Graphy (CCG) — objective head and body sway recording",
        "Videonystagmography (VNG) for detailed vestibular function testing",
        "Computerised Dynamic Posturography (COG) balance assessment",
        "Differentiation of peripheral vs. central causes of vertigo",
        "Canalith repositioning manoeuvre for BPPV (in-clinic treatment)",
        "Personalised vestibular rehabilitation therapy (VRT) plans",
        "Re-test capability to demonstrate progress after rehabilitation",
      ],
      bn: [
        "ক্র্যানিও কর্পো গ্রাফি (CCG) — মাথা ও শরীরের নড়াচড়ার রেকর্ডিং",
        "বিস্তারিত ভেস্টিবুলার পরীক্ষার জন্য ভিডিওনিস্টাগমোগ্রাফি (VNG)",
        "কম্পিউটারাইজড ডায়নামিক পোস্চারোগ্রাফি (COG) ব্যালেন্স মূল্যায়ন",
        "ভার্টিগোর পেরিফেরাল ও সেন্ট্রাল কারণের পার্থক্য নির্ণয়",
        "BPPV-র জন্য ক্যানালিথ রিপজিশনিং ম্যানুভার (ক্লিনিকেই চিকিৎসা)",
        "ব্যক্তিগত ভেস্টিবুলার রিহ্যাবিলিটেশন থেরাপি (VRT) পরিকল্পনা",
        "পুনর্বাসনের পরে অগ্রগতি দেখাতে পুনঃপরীক্ষার সুবিধা",
      ],
    },
    faqs: {
      en: [
        {
          q: "I get dizzy when I roll over in bed — is this serious?",
          a: "That pattern is highly suggestive of BPPV (Benign Paroxysmal Positional Vertigo) — one of the most treatable causes of vertigo. A simple repositioning manoeuvre in clinic resolves it in many patients.",
        },
        {
          q: "What is the difference between CCG, VNG, and COG?",
          a: "CCG records head and body sway objectively. VNG uses video tracking to measure eye movements and assess inner ear canal function. COG uses a computerized platform to measure postural balance under various conditions. Together they give a comprehensive picture of your vestibular system.",
        },
        {
          q: "Is the testing safe and painful?",
          a: "Entirely non-invasive — no injections, no medication, no radiation. Most patients complete all tests within 30 to 45 minutes and walk out unaided.",
        },
        {
          q: "Can vertigo be caused by stress?",
          a: "Anxiety can worsen existing vestibular symptoms, but it is important to first rule out an ENT or neurological cause before attributing dizziness to stress alone.",
        },
        {
          q: "I had a head injury and still feel unbalanced — will this help?",
          a: "Yes — post-traumatic dizziness is one of the settings where CCG and VNG testing are especially useful, both in clarifying the cause and guiding rehabilitation.",
        },
      ],
      bn: [
        {
          q: "বিছানায় পাশ ফিরলে মাথা ঘোরে — গুরুতর কি?",
          a: "এটি BPPV-র ইঙ্গিত — ভার্টিগোর সবচেয়ে চিকিৎসাযোগ্য কারণ। ক্লিনিকেই একটি সাধারণ ম্যানুভারে অনেক রোগী সুস্থ হন।",
        },
        {
          q: "CCG, VNG ও COG-এর পার্থক্য কী?",
          a: "CCG মাথা ও শরীরের দোলা রেকর্ড করে। VNG চোখের নড়াচড়া ট্র্যাক করে অন্তঃকর্ণের কার্যকারিতা মূল্যায়ন করে। COG বিভিন্ন পরিস্থিতিতে ভারসাম্যের কম্পিউটারাইজড পরিমাপ দেয়। তিনটি মিলে ভেস্টিবুলার সিস্টেমের পূর্ণ চিত্র পাওয়া যায়।",
        },
        {
          q: "পরীক্ষা কি নিরাপদ ও কষ্টদায়ক?",
          a: "সম্পূর্ণ নন-ইনভেসিভ — কোনো সুঁচ, ওষুধ বা বিকিরণ নয়। বেশিরভাগ রোগী ৩০–৪৫ মিনিটে সব পরীক্ষা শেষ করে নিজে হেঁটে বেরিয়ে যান।",
        },
        {
          q: "মাথায় চোট পেয়েছি, এখনো ভারসাম্য নেই — সাহায্য হবে?",
          a: "হ্যাঁ — আঘাত-পরবর্তী মাথা ঘোরায় CCG ও VNG কারণ স্পষ্ট করতে ও পুনর্বাসন পরিচালনায় বিশেষ কার্যকর।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 8.  SURGICAL ENT SERVICES
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "surgical-ent",
    icon: ShieldCheck,
    bgImage: "/images/surgical_ent.webp",
    title: {
      en: "Surgical ENT Services",
      bn: "সার্জিকাল ইএনটি সেবা",
    },
    tagline: {
      en: "Minimally invasive ear, nose and throat surgery with structured aftercare",
      bn: "সুসংগঠিত পরবর্তী যত্নসহ ন্যূনতম আক্রমণাত্মক ইএনটি সার্জারি",
    },
    outcome: {
      en: "Precise microsurgery for ear, nose and throat conditions.",
      bn: "কান, নাক ও গলার সমস্যার জন্য সূক্ষ্ম মাইক্রোসার্জারি।",
    },
    description: {
      en: "When conservative care isn't enough, trust The ENT Clinic, Silchar for precise, safe ENT surgery. From FESS for chronic sinusitis and tympanoplasty for perforated eardrums to tonsillectomy and septoplasty, our surgeons use minimally invasive techniques for faster recovery. Every decision is careful, every procedure is structured, every patient goes home with a clear recovery plan. Your health is in expert hands.",
      bn: "কনজারভেটিভ চিকিৎসা যথেষ্ট না হলে, দ্য ইএনটি ক্লিনিক, শিলচরের সুনির্দিষ্ট ও নিরাপদ সার্জারিতে আস্থা রাখুন। দীর্ঘস্থায়ী সাইনোসাইটিসে FESS থেকে কানের পর্দা মেরামতে টিম্পানোপ্লাস্টি পর্যন্ত, আমাদের সার্জনরা দ্রুত পুনরুদ্ধারের জন্য ন্যূনতম আক্রমণাত্মক কৌশল ব্যবহার করেন। প্রতিটি সিদ্ধান্ত সতর্ক, প্রতিটি প্রক্রিয়া সুসংগঠিত।",
    },
    timing: {
      en: "Scheduled surgical sessions",
      bn: "পূর্ব-নির্ধারিত অস্ত্রোপচার সূচি অনুযায়ী",
    },
    features: {
      en: [
        "Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis",
        "Tympanoplasty and ossiculoplasty for perforated eardrum",
        "Mastoidectomy for chronic ear disease",
        "Septoplasty and turbinoplasty for nasal blockage",
        "Tonsillectomy and adenoidectomy (paediatric and adult)",
        "Microlaryngeal surgery for vocal-fold lesions",
        "Day-care procedures where clinically suitable",
        "Structured pre-operative counselling and post-op follow-up",
      ],
      bn: [
        "দীর্ঘস্থায়ী সাইনোসাইটিসের জন্য FESS",
        "কানের পর্দা মেরামতে টিম্পানোপ্লাস্টি ও ওসিকুলোপ্লাস্টি",
        "দীর্ঘস্থায়ী কর্ণরোগে মাস্টয়েডেক্টমি",
        "নাক বন্ধের জন্য সেপ্টোপ্লাস্টি ও টার্বিনোপ্লাস্টি",
        "টনসিলেক্টমি ও অ্যাডেনয়েডেক্টমি (নাক ও গলা এবং শিশু ও প্রাপ্তবয়স্ক)",
        "ভোকাল ফোল্ডের জন্য মাইক্রোল্যারিঞ্জিয়াল সার্জারি",
        "উপযুক্ত ক্ষেত্রে ডে-কেয়ার প্রক্রিয়া",
        "সুসংগঠিত প্রি-অপ কাউন্সেলিং ও পোস্ট-অপ ফলো-আপ",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do I know if I really need surgery?",
          a: "Most ENT conditions are managed without surgery. We recommend a procedure only when conservative care has been adequately tried and anatomy requires correction — a severely deviated septum, a hole in the eardrum, or obstructive tonsils affecting sleep and growth.",
        },
        {
          q: "Are these surgeries performed as day-care?",
          a: "Many — including tympanoplasty, septoplasty, tonsillectomy, adenoidectomy, and FESS — can be day-care procedures, allowing return home the same day or after one overnight observation.",
        },
        {
          q: "What is the typical recovery time?",
          a: "FESS and septoplasty: return to office work in 7 to 10 days. Adult tonsillectomy: 10 to 14 days. Ear surgery: 1 to 2 weeks limited activity, water precautions for 4 to 6 weeks.",
        },
        {
          q: "What are the risks involved?",
          a: "All surgeries carry some risk. ENT procedures in experienced hands have low but non-zero risks of bleeding, infection, and anaesthetic reaction. These are discussed fully at pre-operative counselling with written information provided.",
        },
        {
          q: "Should I stop my regular medications before surgery?",
          a: "Some medications — blood thinners, certain supplements, and diabetes drugs — need to be paused in advance. A full medicine review is part of pre-operative consultation; do not stop anything on your own.",
        },
      ],
      bn: [
        {
          q: "সত্যিই সার্জারি লাগবে কি না কীভাবে জানব?",
          a: "বেশিরভাগ সমস্যা সার্জারি ছাড়াই সমাধান হয়। কনজারভেটিভ চিকিৎসায় কাজ না হলে এবং কাঠামোগত সমস্যা থাকলেই কেবল সুপারিশ করা হয়।",
        },
        {
          q: "এগুলো কি ডে-কেয়ার সার্জারি?",
          a: "অনেকগুলো — টিম্পানোপ্লাস্টি, সেপ্টোপ্লাস্টি, টনসিলেক্টমি, FESS — একই দিনে বা একরাত পর বাড়ি ফেরার সুযোগ দেয়।",
        },
        {
          q: "পুনরুদ্ধারে কতদিন লাগে?",
          a: "FESS ও সেপ্টোপ্লাস্টি: ৭–১০ দিনে অফিসে ফেরা যায়। টনসিলেক্টমি: ১০–১৪ দিন। কানের সার্জারি: ১–২ সপ্তাহ।",
        },
        {
          q: "কী কী ঝুঁকি আছে?",
          a: "প্রতিটি সার্জারিতে রক্তপাত, সংক্রমণ ও অ্যানেস্থেটিক প্রতিক্রিয়ার ঝুঁকি থাকে — অভিজ্ঞ হাতে এটি কম। প্রি-অপ কাউন্সেলিংয়ে বিস্তারিত আলোচনা হয়।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 9.  HEARING AIDS CENTER
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "hearing-aids",
    icon: Ear,
    bgImage: "/images/hearing_aids/banner.webp",
    title: {
      en: "Hearing Aids Center",
      bn: "হিয়ারিং এইডস সেন্টার",
    },
    tagline: {
      en: "Multi-brand digital hearing aid trials with transparent counselling",
      bn: "স্বচ্ছ পরামর্শসহ মাল্টি-ব্র্যান্ড ডিজিটাল হিয়ারিং এইড ট্রায়াল",
    },
    outcome: {
      en: "Trusted digital hearing aids and precise fittings.",
      bn: "নির্ভরযোগ্য ডিজিটাল হিয়ারিং এইড ও নিখুঁত ফিটিং।",
    },
    description: {
      en: "Struggling to hear conversations clearly? The ENT Clinic, Silchar brings you the region's most trusted Hearing Aids Center. We begin with a complete audiometric assessment, then offer no-obligation trials of Siemens, Alps, and Oticon devices — programmed precisely to your audiogram. No pressure, no guesswork, just hearing that works for your real life. Reclaim every conversation — visit us today.",
      bn: "কথোপকথন স্পষ্ট শুনতে সমস্যা হচ্ছে? দ্য ইএনটি ক্লিনিক, শিলচরের হিয়ারিং এইডস সেন্টারে আসুন। সম্পূর্ণ অডিওমেট্রিক মূল্যায়নের পরে সিমেন্স, অ্যাল্পস ও ওটিকনের ডিভাইস বিনা বাধ্যবাধকতায় ট্রায়াল দেওয়া হয় — আপনার অডিওগ্রাম অনুযায়ী প্রোগ্রাম করা। কোনো চাপ নেই, শুধু আপনার জীবনের জন্য উপযুক্ত শ্রবণ সহায়তা।",
    },
    timing: { en: "Regular clinical hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Multi-brand trials — Siemens, Alps, Oticon (subject to stock)",
        "Behind-the-ear, in-the-ear, and receiver-in-canal options",
        "Computer-programmed fitting matched to your audiogram",
        "Real-ear measurement and feedback-management calibration",
        "Two to three included follow-up tuning sessions",
        "Servicing, cleaning, and battery / dome replacement guidance",
        "No-pressure trial: walk away if a device does not suit you",
      ],
      bn: [
        "মাল্টি-ব্র্যান্ড ট্রায়াল — সিমেন্স, অ্যাল্পস, ওটিকন (স্টক সাপেক্ষে)",
        "বিহাইন্ড-দ্য-ইয়ার, ইন-দ্য-ইয়ার ও রিসিভার-ইন-ক্যানাল বিকল্প",
        "অডিওগ্রাম অনুযায়ী কম্পিউটার-প্রোগ্রামড ফিটিং",
        "রিয়েল-ইয়ার মেজারমেন্ট ও ফিডব্যাক-ম্যানেজমেন্ট ক্যালিব্রেশন",
        "দুই থেকে তিনটি অন্তর্ভুক্ত ফলো-আপ টিউনিং সেশন",
        "সার্ভিসিং, পরিষ্কার ও ব্যাটারি / ডোম প্রতিস্থাপন নির্দেশনা",
        "চাপমুক্ত ট্রায়াল — পছন্দ না হলে ফিরিয়ে দিতে পারেন",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do I need a hearing aid in both ears?",
          a: "Most patients with bilateral hearing loss benefit from binaural amplification — it improves speech clarity in noise and reduces listening fatigue. The audiologist will recommend based on your specific audiogram.",
        },
        {
          q: "How long do hearing aids last?",
          a: "Modern digital hearing aids last 5 to 7 years on average with regular cleaning, dome replacement, and battery care. Servicing support is available throughout.",
        },
        {
          q: "Can hearing aids help with tinnitus?",
          a: "For many patients, well-fitted hearing aids reduce the perceived loudness of tinnitus as the brain receives more ambient sound. Results vary, and a structured tinnitus-management plan may be added.",
        },
        {
          q: "Are rechargeable models better than battery-powered ones?",
          a: "Rechargeable models are convenient for daily home use. Battery-powered models suit patients who travel often. We help you choose based on your routine.",
        },
        {
          q: "What if I am not happy with the device during trial?",
          a: "That is exactly the purpose of the trial. You can return or switch the device. Final purchase happens only after you are convinced it works in your real life.",
        },
      ],
      bn: [
        {
          q: "দুই কানেই হিয়ারিং এইড লাগবে কি?",
          a: "দুই কানে শ্রবণহানিতে সাধারণত দুই কানেই হিয়ারিং এইড উপকারী — ভিড়ে কথার স্পষ্টতা বাড়ে এবং কান কম ক্লান্ত হয়। আপনার অডিওগ্রাম দেখে সুপারিশ করা হবে।",
        },
        {
          q: "হিয়ারিং এইড কতদিন চলে?",
          a: "নিয়মিত যত্নে আধুনিক ডিজিটাল হিয়ারিং এইড গড়ে ৫–৭ বছর চলে। এই সময়ে সার্ভিসিং সহায়তা পাওয়া যায়।",
        },
        {
          q: "টিনিটাসে হিয়ারিং এইড কি সাহায্য করে?",
          a: "অনেক রোগীর ক্ষেত্রে সঠিকভাবে ফিট করা হিয়ারিং এইড টিনিটাসের মাত্রা কমায়। ফলাফল ব্যক্তিভেদে আলাদা; প্রয়োজনে আলাদা ম্যানেজমেন্ট প্ল্যান যোগ করা হয়।",
        },
        {
          q: "ট্রায়ালে পছন্দ না হলে?",
          a: "ট্রায়ালের উদ্দেশ্যই এটি যাচাই করা। সম্পূর্ণ সন্তুষ্ট হওয়ার পরেই কেনার সিদ্ধান্ত নেওয়া হয়।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 10.  LARYNGOSCOPY & NASAL ENDOSCOPY
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "laryngoscopy-endoscopy",
    icon: Wind,
    bgImage: "/images/laryngoscopy_endoscopy.webp",
    title: {
      en: "Laryngoscopy & Nasal Endoscopy",
      bn: "ল্যারিঙ্গোস্কোপি ও নাসাল এন্ডোস্কোপি",
    },
    tagline: {
      en: "High-definition diagnostic imaging of the nose, sinuses and voice box",
      bn: "নাক, সাইনাস ও কণ্ঠনালীর হাই-ডেফিনিশন ডায়াগনস্টিক ইমেজিং",
    },
    outcome: {
      en: "Precise endoscopic diagnosis you can see in real time.",
      bn: "রিয়েল-টাইমে দেখা যায় এমন সুনির্দিষ্ট এন্ডোস্কোপিক রোগ নির্ণয়।",
    },
    description: {
      en: "See what others miss. At The ENT Clinic, Silchar, our high-definition Laryngoscopy and Nasal Endoscopy unit brings crystal-clear precision to diagnosing conditions of the nose, sinuses, and voice box. With a patient-facing live monitor, you see exactly what your doctor sees — in real time. Fast, comfortable, and accurate. Get answers the same day. Book your endoscopy today.",
      bn: "অন্যরা যা দেখে না তা দেখুন। দ্য ইএনটি ক্লিনিক, শিলচরের হাই-ডেফিনিশন এন্ডোস্কোপি বিভাগ নাক, সাইনাস ও কণ্ঠনালীর রোগ নির্ণয়ে অসাধারণ নির্ভুলতা আনে। রোগী-মুখী লাইভ মনিটরে আপনি নিজেও দেখতে পান। দ্রুত, আরামদায়ক ও নির্ভুল — একই দিনে উত্তর পান।",
    },
    timing: {
      en: "Available every working day",
      bn: "প্রতিটি কর্মদিবসে উপলব্ধ",
    },
    features: {
      en: [
        "HD video nasal endoscopy with rigid and flexible scopes",
        "Flexible laryngoscopy for vocal cord and deep throat examination",
        "Patient-facing live monitor for transparent explanation",
        "Topical anaesthesia for comfort throughout",
        "Same-day digital imaging report with selected still frames",
        "Pre-surgical mapping for FESS, septoplasty, and microlaryngeal surgery",
        "Suitable for adults and cooperative children",
      ],
      bn: [
        "রিজিড ও ফ্লেক্সিবল স্কোপসহ HD ভিডিও নাসাল এন্ডোস্কোপি",
        "ভোকাল কর্ড ও গলার গভীর অংশ পরীক্ষার জন্য ফ্লেক্সিবল ল্যারিঙ্গোস্কোপি",
        "স্বচ্ছ ব্যাখ্যার জন্য রোগী-মুখী লাইভ মনিটর",
        "আরামের জন্য লোকাল অ্যানেস্থেশিয়া",
        "নির্বাচিত স্থিরচিত্রসহ একই দিনে ডিজিটাল ইমেজিং রিপোর্ট",
        "FESS, সেপ্টোপ্লাস্টি ও মাইক্রোল্যারিঞ্জিয়াল সার্জারির পূর্ব-পরিকল্পনা",
        "প্রাপ্তবয়স্ক ও সহযোগিতাকারী শিশুদের জন্য উপযুক্ত",
      ],
    },
    faqs: {
      en: [
        {
          q: "Is endoscopy painful?",
          a: "No. A local anaesthetic spray is used and patients usually report only mild pressure. The procedure is well tolerated by most patients, including older patients.",
        },
        {
          q: "How long does the procedure take?",
          a: "The scope examination takes about 3 to 7 minutes. Including consent, anaesthesia, and explanation of findings, plan for about 20 to 25 minutes in clinic.",
        },
        {
          q: "Will I get the video and images?",
          a: "Yes — selected still frames are included in your digital report. A video clip can be shared on request, useful for second opinions or surgical referral.",
        },
        {
          q: "Is endoscopy safe for children?",
          a: "Flexible nasal endoscopy is safe and frequently performed in children old enough to cooperate. For very young or anxious children, alternative examination methods are used.",
        },
        {
          q: "Can I return to work the same day?",
          a: "Yes — routine diagnostic endoscopy under topical anaesthesia requires no recovery time. You can drive yourself home and return to work the same day.",
        },
      ],
      bn: [
        {
          q: "এন্ডোস্কোপি কি কষ্টদায়ক?",
          a: "না। লোকাল অ্যানেস্থেটিক স্প্রে দেওয়া হয় এবং রোগীরা সাধারণত শুধু হালকা চাপ অনুভব করেন।",
        },
        {
          q: "কতক্ষণ সময় লাগে?",
          a: "মূল পরীক্ষায় ৩–৭ মিনিট। সম্মতি, অ্যানেস্থেশিয়া ও ব্যাখ্যা মিলিয়ে মোট ২০–২৫ মিনিট।",
        },
        {
          q: "ভিডিও ও ছবি পাব কি?",
          a: "হ্যাঁ — ডিজিটাল রিপোর্টে স্থিরচিত্র থাকে। অনুরোধে ভিডিও ক্লিপও দেওয়া যায়।",
        },
        {
          q: "একই দিনে কাজে ফিরতে পারব?",
          a: "হ্যাঁ — লোকাল অ্যানেস্থেশিয়ায় ডায়াগনস্টিক এন্ডোস্কোপিতে কোনো রিকভারি সময় লাগে না।",
        },
      ],
    },
  },
];