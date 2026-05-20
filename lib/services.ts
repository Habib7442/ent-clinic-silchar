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
   * 1.  AUDIOMETRY & SPEECH THERAPY
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "audiometry-speech-therapy",
    icon: Volume2,
    bgImage: "/images/audiometry_therapy.webp",
    title: {
      en: "Audiometry & Speech Therapy",
      bn: "অডিওমেট্রি ও স্পিচ থেরাপি",
    },
    tagline: {
      en: "Clinical hearing assessment and speech-language rehabilitation",
      bn: "ক্লিনিকাল শ্রবণ মূল্যায়ন ও স্পিচ-ল্যাঙ্গুয়েজ পুনর্বাসন",
    },
    outcome: {
      en: "Restore clarity to your conversations.",
      bn: "আপনার কথোপকথনে স্বচ্ছতা ফিরিয়ে আনুন।",
    },
    description: {
      en: "A dedicated diagnostic and rehabilitation unit covering the full spectrum of hearing assessment and speech-language therapy. Pure Tone Audiometry (PTA), carried out inside our calibrated soundproof booth, establishes the exact pattern and severity of hearing loss across speech frequencies — the foundation of every hearing-related decision that follows. Alongside testing, our speech-language sessions address developmental delays in children (articulation, expressive vocabulary, stammering) and acquired difficulties in adults (post-stroke aphasia, vocal misuse, motor speech disorders). Each plan is built around the patient's audiogram, age, and functional goals — communication at home, in school, or at work.",
      bn: "শ্রবণ ক্ষমতা মূল্যায়ন এবং স্পিচ-ল্যাঙ্গুয়েজ থেরাপির পূর্ণাঙ্গ একটি বিশেষায়িত বিভাগ। আমাদের ক্যালিব্রেটেড শব্দরোধী বুথে পিওর টোন অডিওমেট্রি (PTA) করে শ্রবণশক্তি কোন কোন কম্পাঙ্কে কতটা কমেছে তা সঠিকভাবে নির্ণয় করা হয় — পরবর্তী যেকোনো শ্রবণ-সংক্রান্ত সিদ্ধান্তের ভিত্তি। স্পিচ-ল্যাঙ্গুয়েজ থেরাপি সেশনগুলি শিশুদের ক্ষেত্রে উচ্চারণজনিত সমস্যা, ভাষাবিকাশে বিলম্ব ও তোতলামি, এবং প্রাপ্তবয়স্কদের ক্ষেত্রে স্ট্রোক-পরবর্তী কথা বলার সমস্যা, ভয়েসের অপব্যবহার ও মোটর-স্পিচ ডিজঅর্ডার ইত্যাদির পুনর্বাসনে সহায়ক। প্রতিটি থেরাপি পরিকল্পনা রোগীর অডিওগ্রাম, বয়স ও দৈনন্দিন প্রয়োজন অনুযায়ী তৈরি করা হয়।",
    },
    timing: { en: "By appointment", bn: "অ্যাপয়েন্টমেন্ট অনুযায়ী" },
    features: {
      en: [
        "Pure Tone Audiometry (PTA) in a calibrated soundproof booth",
        "Speech audiometry and Speech Reception Threshold (SRT) testing",
        "Impedance audiometry and tympanometry for middle-ear assessment",
        "Paediatric language, articulation and stammering assessment",
        "Therapy for voice misuse and post-stroke aphasia",
        "Therapist-led home practice plans for parents and caregivers",
        "Same-visit digital reports for ENT referral and school certification",
      ],
      bn: [
        "ক্যালিব্রেটেড শব্দরোধী বুথে পিওর টোন অডিওমেট্রি (PTA)",
        "স্পিচ অডিওমেট্রি ও স্পিচ রিসেপশন থ্রেশহোল্ড (SRT) পরীক্ষা",
        "মধ্যকর্ণ মূল্যায়নের জন্য ইম্পিড্যান্স অডিওমেট্রি ও টিম্পানোমেট্রি",
        "শিশুদের ভাষা, উচ্চারণ ও তোতলামির মূল্যায়ন",
        "ভয়েস অপব্যবহার ও স্ট্রোক-পরবর্তী অ্যাফেজিয়ার জন্য থেরাপি",
        "অভিভাবক ও পরিচর্যাকারীদের জন্য থেরাপিস্ট-নির্দেশিত গৃহ অনুশীলন",
        "ইএনটি রেফারেল ও স্কুল সার্টিফিকেশনের জন্য একই-ভিজিটে ডিজিটাল রিপোর্ট",
      ],
    },
    faqs: {
      en: [
        {
          q: "Who should consider an audiometry test?",
          a: "Anyone with difficulty following conversation, frequent requests to repeat, ringing in the ears (tinnitus), unexplained dizziness, or any child being evaluated for delayed or unclear speech. Audiometry is also recommended before fitting any hearing aid.",
        },
        {
          q: "How long does a complete hearing test take?",
          a: "A full Pure Tone Audiometry, Speech Audiometry and tympanometry workup takes around 25 to 40 minutes inside the booth. The audiogram and a written interpretation are issued the same visit.",
        },
        {
          q: "Is the test painful or invasive?",
          a: "No. You sit comfortably in the booth, wear soft headphones, and respond when you hear a tone. Tympanometry uses a soft probe in the ear canal for a few seconds. Nothing breaks the skin and no medication is given.",
        },
        {
          q: "What conditions does speech therapy help with?",
          a: "Articulation disorders, delayed speech in children, stammering, voice strain in teachers and singers, post-stroke aphasia, and motor speech problems following neurological events. Each plan is individualized after assessment.",
        },
        {
          q: "How many speech therapy sessions are usually needed?",
          a: "Therapy is condition-specific. Childhood articulation issues often respond well within 8 to 16 sessions; stammering and post-stroke aphasia plans may extend over several months with progressive review.",
        },
        {
          q: "Do you provide reports for school or workplace use?",
          a: "Yes — formal audiograms and speech evaluation summaries suitable for school admissions, scholarship boards, and workplace fitness records are issued on the same visit.",
        },
        {
          q: "What should I bring to the first appointment?",
          a: "Please bring any prior audiograms, ENT consultations, MRI or CT scans (if any), and a written list of current medicines and concerns.",
        },
      ],
      bn: [
        {
          q: "কাদের জন্য অডিওমেট্রি পরীক্ষা প্রয়োজন?",
          a: "যাঁদের কথোপকথন বুঝতে অসুবিধা হয়, বারবার পুনরায় শুনতে হয়, কানে শো-শো শব্দ (টিনিটাস) হয়, অজানা কারণে মাথা ঘোরে, বা যেসব শিশুর কথা বলতে দেরি হচ্ছে বা স্পষ্ট নয় — তাদের সবার জন্যই এই পরীক্ষা প্রয়োজন। হিয়ারিং এইড লাগানোর আগেও অডিওমেট্রি অপরিহার্য।",
        },
        {
          q: "একটি সম্পূর্ণ শ্রবণ পরীক্ষা করতে কতক্ষণ সময় লাগে?",
          a: "PTA, স্পিচ অডিওমেট্রি ও টিম্পানোমেট্রি সহ সম্পূর্ণ পরীক্ষা করতে বুথের ভেতরে আনুমানিক ২৫ থেকে ৪০ মিনিট সময় লাগে। অডিওগ্রাম এবং এর লিখিত ব্যাখ্যা একই ভিজিটে দেওয়া হয়।",
        },
        {
          q: "পরীক্ষাটি কি কষ্টদায়ক বা আক্রমণাত্মক?",
          a: "না। আপনি বুথে আরাম করে বসবেন, নরম হেডফোন পরে যখন কোনো টোন শুনবেন তখন প্রতিক্রিয়া দেবেন। টিম্পানোমেট্রির জন্য কয়েক সেকেন্ডের জন্য একটি নরম প্রোব কানের ভেতরে রাখা হয়। ত্বকে কোনো কাটা-ছেঁড়া বা ওষুধের প্রয়োগ নেই।",
        },
        {
          q: "স্পিচ থেরাপি কোন কোন সমস্যায় সাহায্য করে?",
          a: "উচ্চারণজনিত সমস্যা, শিশুদের ভাষাবিকাশে বিলম্ব, তোতলামি, শিক্ষক ও গায়কদের ভয়েস স্ট্রেইন, স্ট্রোক-পরবর্তী অ্যাফেজিয়া এবং স্নায়ুরোগ-পরবর্তী মোটর স্পিচ সমস্যা — মূল্যায়নের পর প্রতিটি পরিকল্পনা ব্যক্তিগতভাবে তৈরি করা হয়।",
        },
        {
          q: "সাধারণত কতগুলো থেরাপি সেশন প্রয়োজন হয়?",
          a: "এটি সমস্যা অনুযায়ী আলাদা। শিশুদের উচ্চারণজনিত সমস্যা সাধারণত ৮ থেকে ১৬ সেশনে ভালো হয়; তোতলামি এবং স্ট্রোক-পরবর্তী অ্যাফেজিয়ার ক্ষেত্রে কয়েক মাসের ক্রমিক পর্যালোচনা প্রয়োজন হতে পারে।",
        },
        {
          q: "স্কুল বা কর্মস্থলের জন্য কি রিপোর্ট পাওয়া যায়?",
          a: "হ্যাঁ — স্কুল ভর্তি, বৃত্তি বোর্ড ও কর্মস্থলের ফিটনেস রেকর্ডের জন্য উপযুক্ত আনুষ্ঠানিক অডিওগ্রাম ও স্পিচ মূল্যায়ন একই ভিজিটে দেওয়া হয়।",
        },
        {
          q: "প্রথম অ্যাপয়েন্টমেন্টে কী কী আনব?",
          a: "আগের অডিওগ্রাম, ইএনটি কনসালটেশন, MRI বা CT স্ক্যান (যদি থাকে), বর্তমানে গ্রহণ করা ওষুধের তালিকা এবং আপনার লিখে রাখা প্রশ্নগুলি আনুন।",
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
      en: "Headache is not a single disease — it has many origins, and effective treatment depends entirely on identifying which one. Our weekly Headache Clinic exists to separate sinus-driven headaches (sinus pressure, post-nasal drip, deviated septum) from primary headache disorders (migraine, tension-type, cluster) and from less common ENT causes such as eustachian tube dysfunction and temporomandibular joint disorder. Each consultation begins with a detailed history of pattern and triggers, an ENT and nasal endoscopic examination where indicated, and a personalised plan that may combine medical management, lifestyle adjustment, and follow-up review. Where the picture suggests a non-ENT cause, we coordinate referral to neurology rather than treating in isolation.",
      bn: "মাথাব্যথা কোনো একক রোগ নয় — এর অনেকগুলি কারণ রয়েছে, এবং সঠিক চিকিৎসা সম্পূর্ণরূপে নির্ভর করে কারণটি সঠিকভাবে নির্ণয় করার উপর। আমাদের সাপ্তাহিক হেডেক ক্লিনিকের উদ্দেশ্য হলো সাইনাসজনিত মাথাব্যথা (সাইনাস প্রেসার, পোস্ট-নেজাল ড্রিপ, নাকের পর্দা বাঁকা), প্রাথমিক মাথাব্যথা (মাইগ্রেন, টেনশন হেডেক, ক্লাস্টার হেডেক) এবং ইউস্টেশিয়ান টিউব ডিসফাংশন বা TMJ ডিসঅর্ডারের মতো অন্যান্য ইএনটি কারণগুলির পার্থক্য সঠিকভাবে নির্ধারণ করা। প্রতিটি কনসালটেশনে মাথাব্যথার ধরন ও কারণের বিস্তারিত ইতিহাস, ইএনটি ও প্রয়োজনে নাসাল এন্ডোস্কোপি পরীক্ষা এবং একটি ব্যক্তিগত চিকিৎসা পরিকল্পনা তৈরি করা হয়। কারণ যদি ইএনটি-র বাইরে হয়, তাহলে নিউরোলজি বিভাগের সঙ্গে সমন্বয় করা হয়।",
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
          a: "Sinus headaches typically come with nasal blockage, facial pressure (over the cheeks or forehead), worsening on bending forward, and post-nasal drip. A nasal endoscopy in clinic clarifies the diagnosis far better than imaging alone.",
        },
        {
          q: "When does the Headache Clinic run?",
          a: "Every Wednesday from 4:00 PM to 8:00 PM. Prior appointment is strongly recommended, as each patient is given a longer consultation slot than a standard OPD visit.",
        },
        {
          q: "Will I need a CT or MRI scan?",
          a: "Only if specific clinical features suggest it. Many sinus headaches can be diagnosed with a careful examination and nasal endoscopy alone — imaging is requested judiciously, not by default.",
        },
        {
          q: "Can children have sinus headaches?",
          a: "Yes — recurrent forehead pain, mouth-breathing, and a chronically blocked nose in a child should be evaluated by an ENT. These should not be dismissed as growing up or eye strain without proper examination.",
        },
        {
          q: "Is the Headache Clinic only for migraine patients?",
          a: "No — it is open to anyone with recurring or chronic headache. Many patients are referred specifically to rule out an ENT cause before going to a neurologist, and many are managed entirely within ENT.",
        },
        {
          q: "What kinds of treatment are offered?",
          a: "Treatment is individualized: nasal decongestion regimens, allergy management, septoplasty where structural correction is needed, migraine-specific medication, and lifestyle modification. Surgery is never the first option.",
        },
        {
          q: "Should I bring my old prescriptions and scan reports?",
          a: "Yes — please bring all prior consultations, blood work, and any CT or MRI of the brain or sinuses. A complete history avoids repeating tests and speeds up the diagnosis.",
        },
      ],
      bn: [
        {
          q: "কী করে বুঝব আমার মাথাব্যথা সাইনাসের কারণে কি না?",
          a: "সাইনাসজনিত মাথাব্যথা সাধারণত নাক বন্ধ থাকা, কপাল বা গালে চাপ অনুভব, সামনে ঝুঁকলে বেড়ে যাওয়া এবং পোস্ট-নেজাল ড্রিপের সঙ্গে আসে। শুধুমাত্র ইমেজিং নয়, ক্লিনিকে নাসাল এন্ডোস্কোপি করলে রোগ নির্ণয় অনেক বেশি স্পষ্ট হয়।",
        },
        {
          q: "হেডেক ক্লিনিক কখন খোলা থাকে?",
          a: "প্রতি বুধবার বিকেল ৪টা থেকে রাত ৮টা পর্যন্ত। প্রতিটি রোগীর জন্য সাধারণ OPD-র চেয়ে দীর্ঘ স্লট বরাদ্দ থাকায় আগে থেকে অ্যাপয়েন্টমেন্ট নেওয়া অত্যন্ত প্রয়োজন।",
        },
        {
          q: "আমার কি CT বা MRI স্ক্যান লাগবে?",
          a: "শুধুমাত্র সুনির্দিষ্ট ক্লিনিকাল কারণ থাকলেই। অনেক সাইনাসজনিত মাথাব্যথা সতর্ক পরীক্ষা ও নাসাল এন্ডোস্কোপির মাধ্যমেই নির্ণয় করা যায় — স্ক্যান কেবল প্রয়োজন অনুযায়ী চাওয়া হয়।",
        },
        {
          q: "শিশুদেরও কি সাইনাস হেডেক হতে পারে?",
          a: "হ্যাঁ — কোনো শিশুর বারবার কপালে ব্যথা, মুখ দিয়ে শ্বাস নেওয়া বা দীর্ঘস্থায়ী নাক বন্ধের লক্ষণ থাকলে ইএনটি পরীক্ষা করানো উচিত। সঠিক পরীক্ষা না করে এটিকে শুধু বয়সজনিত বা চোখের চাপ বলে এড়িয়ে যাওয়া ঠিক নয়।",
        },
        {
          q: "হেডেক ক্লিনিক কি শুধুমাত্র মাইগ্রেন রোগীদের জন্য?",
          a: "না — এটি যে কোনো দীর্ঘস্থায়ী বা পুনঃপুন মাথাব্যথার রোগীর জন্য। অনেক রোগী নিউরোলজিস্টের কাছে যাওয়ার আগে ইএনটি কারণ বাদ দেওয়ার জন্যই এখানে আসেন, এবং অনেক ক্ষেত্রে সম্পূর্ণ চিকিৎসা ইএনটি বিভাগেই হয়।",
        },
        {
          q: "কী কী ধরনের চিকিৎসা দেওয়া হয়?",
          a: "চিকিৎসা ব্যক্তিগতভাবে নির্ধারিত হয়: নাকের বন্ধ-নিরাময়ের পদ্ধতি, অ্যালার্জি ব্যবস্থাপনা, কাঠামোগত সমস্যা থাকলে সেপ্টোপ্লাস্টি, মাইগ্রেনের নির্দিষ্ট ওষুধ ও জীবনযাত্রার পরিবর্তন। সার্জারি কখনই প্রথম পছন্দ নয়।",
        },
        {
          q: "আমার পুরনো প্রেসক্রিপশন ও স্ক্যান রিপোর্ট কি আনব?",
          a: "হ্যাঁ — আগের সব কনসালটেশন, রক্ত পরীক্ষা এবং মাথা ও সাইনাসের যে কোনো CT বা MRI আনুন। সম্পূর্ণ ইতিহাস থাকলে পরীক্ষার পুনরাবৃত্তি এড়ানো যায় এবং রোগ নির্ণয় দ্রুত হয়।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 3.  HEARING AIDS CENTER
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "hearing-aids",
    icon: Ear,
    bgImage: "/images/hearing_aids.webp",
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
      en: "Hearing loss is rarely uniform — each ear loses different frequencies in different amounts, and a hearing aid that is not matched to that specific pattern often ends up unused in a drawer. At our Hearing Aids Center we begin with a full audiometric workup, then offer device trials across multiple categories (behind-the-ear, in-the-ear, receiver-in-canal) from Siemens, Alps and Oticon. Devices are programmed on calibrated fitting software to match the patient's exact audiogram, then fine-tuned across two to three follow-up sessions to suit real-life listening — at home, on the phone, in conversation, and in noisy environments. There is no obligation to purchase at trial.",
      bn: "শ্রবণশক্তি প্রায়শই সবার একরকম কমে না — প্রতিটি কানে বিভিন্ন কম্পাঙ্কে বিভিন্ন মাত্রায় শ্রবণহানি হতে পারে, এবং সেই নির্দিষ্ট প্যাটার্নের সঙ্গে না মেলালে হিয়ারিং এইড অনেক সময় ব্যবহারই হয় না। আমাদের হিয়ারিং এইডস সেন্টারে প্রথমে সম্পূর্ণ অডিওমেট্রিক মূল্যায়ন করা হয়, এরপর সিমেন্স, অ্যাল্পস ও ওটিকনের একাধিক ক্যাটাগরির (বিহাইন্ড-দ্য-ইয়ার, ইন-দ্য-ইয়ার, রিসিভার-ইন-ক্যানাল) ডিভাইস ট্রায়াল দেওয়া হয়। ডিভাইসগুলি ক্যালিব্রেটেড ফিটিং সফটওয়্যারে রোগীর অডিওগ্রাম অনুযায়ী প্রোগ্রাম করা হয়, তারপর দুই থেকে তিনটি ফলো-আপ সেশনে বাড়ি, ফোনে কথা, ভিড়ের শব্দ — সব পরিস্থিতির জন্য সূক্ষ্মভাবে টিউন করা হয়। ট্রায়ালের সময় কেনা বাধ্যতামূলক নয়।",
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
        "আপনার অডিওগ্রাম অনুযায়ী কম্পিউটার-প্রোগ্রামড ফিটিং",
        "রিয়েল-ইয়ার মেজারমেন্ট ও ফিডব্যাক-ম্যানেজমেন্ট ক্যালিব্রেশন",
        "দুই থেকে তিনটি অন্তর্ভুক্ত ফলো-আপ টিউনিং সেশন",
        "সার্ভিসিং, পরিষ্কার ও ব্যাটারি / ডোম প্রতিস্থাপন সংক্রান্ত নির্দেশনা",
        "চাপমুক্ত ট্রায়াল — ডিভাইস না-পছন্দ হলে ফিরিয়ে দিতে পারেন",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do I need a hearing aid in both ears?",
          a: "Most patients with bilateral hearing loss benefit from binaural amplification. It improves speech clarity in noise, helps with sound localisation, and reduces listening fatigue. The audiologist will recommend based on your specific audiogram.",
        },
        {
          q: "Will my speech understanding improve immediately?",
          a: "Hearing aids improve audibility within minutes. Speech understanding in noise, however, often takes 2 to 6 weeks of consistent daily use, as the brain gradually re-learns to process sound through the device.",
        },
        {
          q: "How long do hearing aids typically last?",
          a: "Modern digital hearing aids last 5 to 7 years on average with regular cleaning, dome replacement, and battery care. Servicing support is available throughout that period.",
        },
        {
          q: "Are rechargeable hearing aids better than battery-powered ones?",
          a: "Rechargeable models are convenient and avoid frequent battery purchase. Battery-powered models remain useful for patients who travel often and may not always have charging access. We help you choose based on your routine.",
        },
        {
          q: "Can hearing aids be used by children?",
          a: "Yes — paediatric fitting follows a separate protocol, with smaller earmoulds, daily-use checks, and parent training. With consistent use, school-age children typically adapt within a few weeks.",
        },
        {
          q: "Will hearing aids stop my tinnitus?",
          a: "For many patients with hearing loss, well-fitted hearing aids reduce the perceived loudness of tinnitus, because the brain receives more ambient sound and pays less attention to the ringing. Results vary, and a structured tinnitus-management plan may be added.",
        },
        {
          q: "What if I am not happy with the device during trial?",
          a: "That is exactly the purpose of the trial. You can return or switch the device. Final purchase happens only after you are convinced it works in your real life.",
        },
      ],
      bn: [
        {
          q: "আমাকে কি দুই কানেই হিয়ারিং এইড লাগবে?",
          a: "দুই কানেই শ্রবণহানি থাকা বেশিরভাগ রোগী দুই কানে হিয়ারিং এইড ব্যবহারে উপকৃত হন। এতে ভিড়ে কথার স্পষ্টতা বাড়ে, শব্দের অবস্থান বোঝা যায় এবং কান ক্লান্ত কম হয়। আপনার অডিওগ্রাম দেখে অডিওলজিস্ট সুপারিশ করবেন।",
        },
        {
          q: "কথা বোঝা কি সঙ্গে সঙ্গে ভালো হবে?",
          a: "হিয়ারিং এইড পরা মাত্রই শব্দ স্পষ্ট শোনা যায়। তবে ভিড়ের মধ্যে কথা বোঝার ক্ষেত্রে ২ থেকে ৬ সপ্তাহের নিয়মিত ব্যবহার লাগতে পারে, কারণ মস্তিষ্ককে নতুনভাবে শব্দ প্রক্রিয়াকরণে অভ্যস্ত হতে হয়।",
        },
        {
          q: "একটি হিয়ারিং এইড সাধারণত কতদিন চলে?",
          a: "নিয়মিত পরিষ্কার, ডোম পরিবর্তন ও ব্যাটারির যত্ন নিলে আধুনিক ডিজিটাল হিয়ারিং এইড গড়ে ৫ থেকে ৭ বছর চলে। এই পুরো সময়ে আমাদের পক্ষ থেকে সার্ভিসিং সহায়তা পাওয়া যায়।",
        },
        {
          q: "রিচার্জেবল হিয়ারিং এইড কি ব্যাটারি-চালিতের চেয়ে ভালো?",
          a: "রিচার্জেবল মডেল সুবিধাজনক এবং বারবার ব্যাটারি কেনার ঝামেলা থাকে না। অন্যদিকে যাঁরা প্রায়ই ভ্রমণ করেন এবং সবসময় চার্জিং সুবিধা পান না, তাঁদের জন্য ব্যাটারি মডেল উপযোগী। আপনার দৈনন্দিন রুটিন অনুযায়ী আমরা সঠিকটি নির্বাচনে সাহায্য করি।",
        },
        {
          q: "শিশুরা কি হিয়ারিং এইড ব্যবহার করতে পারে?",
          a: "হ্যাঁ — শিশুদের ফিটিং আলাদা প্রোটোকল অনুসারে হয়, ছোট ইয়ারমোল্ড, দৈনিক ব্যবহার যাচাই এবং অভিভাবকদের প্রশিক্ষণ সহ। নিয়মিত ব্যবহারে স্কুল-বয়সী শিশুরা সাধারণত কয়েক সপ্তাহের মধ্যে মানিয়ে নেয়।",
        },
        {
          q: "হিয়ারিং এইড কি টিনিটাস (কানে শব্দ) বন্ধ করবে?",
          a: "শ্রবণহানিযুক্ত অনেক রোগীর ক্ষেত্রে সঠিকভাবে ফিট করা হিয়ারিং এইড টিনিটাসের অনুভূত মাত্রা কমাতে পারে, কারণ মস্তিষ্ক বাইরের শব্দ বেশি পাওয়ায় কানের শো-শো শব্দের দিকে কম মনোযোগ দেয়। ফলাফল ব্যক্তিভেদে আলাদা; প্রয়োজনে টিনিটাস-ম্যানেজমেন্ট প্ল্যানও যুক্ত করা হয়।",
        },
        {
          q: "ট্রায়ালের সময় ডিভাইস পছন্দ না হলে কী হবে?",
          a: "ট্রায়ালের উদ্দেশ্যই হলো এটি যাচাই করা। আপনি ডিভাইস ফিরিয়ে দিতে পারেন বা পরিবর্তন করতে পারেন। প্রকৃত কেনার সিদ্ধান্ত শুধুমাত্র আপনি সম্পূর্ণ সন্তুষ্ট হলেই নেওয়া হবে।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 4.  LARYNGOSCOPY & NASAL ENDOSCOPY
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
      en: "Many conditions that affect the nose, sinuses, vocal cords, and deep throat are invisible from the outside — and a torch and a tongue depressor do not reach them. Endoscopy is the modern standard for examining these areas directly, in real time. Our clinic is equipped with a high-definition endoscopy tower, flexible and rigid scopes, and a patient-facing live monitor so you can see what we see and what is being discussed. A topical anaesthetic spray makes the procedure comfortable; the actual examination takes only a few minutes. Indications include chronic nasal blockage, persistent post-nasal drip, recurrent sinusitis, unexplained hoarseness, vocal cord screening for professional voice users, swallowing difficulty, and pre-surgical mapping for FESS or septoplasty.",
      bn: "নাক, সাইনাস, ভোকাল কর্ড এবং গলার গভীর অংশের অনেক রোগই বাইরে থেকে দেখা যায় না — সাধারণ টর্চ ও জিভ চাপা দিয়ে সেগুলি পরীক্ষা করা সম্ভব নয়। এন্ডোস্কোপি এসব অংশ সরাসরি ও বাস্তব সময়ে দেখার আধুনিক পদ্ধতি। আমাদের ক্লিনিকে রয়েছে হাই-ডেফিনিশন এন্ডোস্কোপি টাওয়ার, ফ্লেক্সিবল ও রিজিড স্কোপ এবং রোগীর জন্য একটি লাইভ মনিটর — যাতে আমরা যা দেখি তা আপনিও দেখতে পান এবং আলোচনায় অংশ নিতে পারেন। লোকাল অ্যানেস্থেটিক স্প্রে দেওয়ায় প্রক্রিয়াটি আরামদায়ক হয়; মূল পরীক্ষা মাত্র কয়েক মিনিট সময় নেয়। যেসব ক্ষেত্রে এই পরীক্ষা প্রয়োজন: দীর্ঘস্থায়ী নাক বন্ধ, পোস্ট-নেজাল ড্রিপ, বারবার সাইনোসাইটিস, অজানা কারণে গলা বসা, পেশাদার কণ্ঠ ব্যবহারকারীদের ভোকাল কর্ড স্ক্রিনিং, গিলতে অসুবিধা এবং FESS বা সেপ্টোপ্লাস্টির আগে পূর্ব-পরিকল্পনা।",
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
        "আরামের জন্য সম্পূর্ণ প্রক্রিয়ায় লোকাল অ্যানেস্থেশিয়া",
        "নির্বাচিত স্থিরচিত্রসহ একই দিনে ডিজিটাল ইমেজিং রিপোর্ট",
        "FESS, সেপ্টোপ্লাস্টি ও মাইক্রোল্যারিঞ্জিয়াল সার্জারির আগে পূর্ব-পরিকল্পনা",
        "প্রাপ্তবয়স্ক ও সহযোগিতাকারী শিশুদের জন্য উপযুক্ত",
      ],
    },
    faqs: {
      en: [
        {
          q: "Is endoscopy painful?",
          a: "No. A local anaesthetic spray is used in the nose and throat, and patients usually report only mild pressure, not pain. The procedure is generally well tolerated, including by older patients.",
        },
        {
          q: "How long does the procedure take?",
          a: "The actual scope examination takes about 3 to 7 minutes. Including consent, anaesthesia, and explanation of findings, plan for about 20 to 25 minutes in clinic.",
        },
        {
          q: "Can I eat and drink normally afterwards?",
          a: "If the throat was anaesthetised, wait 45 to 60 minutes until full sensation returns. After that, normal eating and drinking can resume. For nasal-only endoscopy there is no eating restriction.",
        },
        {
          q: "Do I need someone to accompany me?",
          a: "Not for a routine diagnostic endoscopy under topical anaesthesia. You can drive yourself home and return to work the same day. An escort is needed only if you are receiving sedation, which is uncommon for diagnostic scopes.",
        },
        {
          q: "Will I get the video and images?",
          a: "Yes — selected still frames are included in your digital report. A video clip can be shared on request and is often useful for second opinions or surgical referral.",
        },
        {
          q: "Is endoscopy safe during pregnancy?",
          a: "Yes — diagnostic nasal endoscopy under topical anaesthesia is safe in pregnancy. We use the minimum required medication and proceed only when the information is clinically necessary.",
        },
        {
          q: "Is endoscopy safe for children?",
          a: "Flexible nasal endoscopy is safe and frequently performed in children old enough to cooperate. For very young or anxious children, alternative examination methods are used or the procedure is deferred.",
        },
      ],
      bn: [
        {
          q: "এন্ডোস্কোপি কি কষ্টদায়ক?",
          a: "না। নাকে ও গলায় লোকাল অ্যানেস্থেটিক স্প্রে দেওয়া হয়, এবং রোগীরা সাধারণত হালকা চাপ অনুভব করেন, ব্যথা নয়। বয়স্ক রোগীরাও সাধারণত এটি ভালোভাবে সহ্য করেন।",
        },
        {
          q: "পুরো প্রক্রিয়াটিতে কতক্ষণ সময় লাগে?",
          a: "মূল স্কোপ পরীক্ষায় প্রায় ৩ থেকে ৭ মিনিট সময় লাগে। সম্মতিপত্র, অ্যানেস্থেশিয়া ও রিপোর্ট ব্যাখ্যা সহ ক্লিনিকে মোট প্রায় ২০ থেকে ২৫ মিনিট ধরে রাখুন।",
        },
        {
          q: "পরে কি সাধারণভাবে খাওয়া-দাওয়া করা যাবে?",
          a: "গলায় অ্যানেস্থেশিয়া দেওয়া হলে সম্পূর্ণ অনুভূতি ফিরে আসা পর্যন্ত ৪৫ থেকে ৬০ মিনিট অপেক্ষা করুন। এরপর স্বাভাবিক খাওয়া-দাওয়া করা যাবে। শুধুমাত্র নাসাল এন্ডোস্কোপি হলে খাবারে কোনো বিধিনিষেধ নেই।",
        },
        {
          q: "কাউকে সঙ্গে আনা কি প্রয়োজন?",
          a: "লোকাল অ্যানেস্থেশিয়ায় রুটিন ডায়াগনস্টিক এন্ডোস্কোপির জন্য না। আপনি নিজেই বাড়ি যেতে পারবেন এবং একই দিনে কাজে ফিরতে পারবেন। সেডেশন (যা ডায়াগনস্টিক স্কোপে সাধারণত প্রয়োজন হয় না) দেওয়া হলে সঙ্গী প্রয়োজন।",
        },
        {
          q: "ভিডিও ও ছবি কি পাব?",
          a: "হ্যাঁ — আপনার ডিজিটাল রিপোর্টে নির্বাচিত স্থিরচিত্র সংযুক্ত থাকে। অনুরোধ করলে ভিডিও ক্লিপও দেওয়া যায়, যা সেকেন্ড অপিনিয়ন বা সার্জিকাল রেফারেলের জন্য সহায়ক হয়।",
        },
        {
          q: "গর্ভাবস্থায় এন্ডোস্কোপি কি নিরাপদ?",
          a: "হ্যাঁ — গর্ভাবস্থায় লোকাল অ্যানেস্থেশিয়ায় ডায়াগনস্টিক নাসাল এন্ডোস্কোপি নিরাপদ। আমরা ন্যূনতম প্রয়োজনীয় ওষুধ ব্যবহার করি এবং কেবল যখন তথ্যটি ক্লিনিকালভাবে প্রয়োজন তখনই এটি করি।",
        },
        {
          q: "শিশুদের জন্য এন্ডোস্কোপি নিরাপদ?",
          a: "যেসব শিশু সহযোগিতা করতে পারে, তাদের ফ্লেক্সিবল নাসাল এন্ডোস্কোপি নিরাপদ এবং নিয়মিত করা হয়। খুব ছোট বা ভীত শিশুদের ক্ষেত্রে বিকল্প পরীক্ষা ব্যবহার করা হয় বা প্রক্রিয়া পরে করা হয়।",
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
      en: "Children are not small adults — their ENT anatomy, the disease patterns they present with, and the way they tolerate examination are all distinct. Our paediatric ENT service is structured around the four most common reasons a child sees an ENT in the Barak Valley: recurrent ear infections (otitis media), mouth-breathing and snoring from enlarged adenoids or tonsils, persistent nasal blockage and allergic rhinitis, and accidental insertion of a foreign body into the ear, nose, or throat. The clinic uses child-sized instruments, a calm consultation pace, and parents-present examination — children stay on a parent's lap throughout for as long as possible, and every visit includes a parent-counselling segment.",
      bn: "শিশুরা শুধুই ছোট প্রাপ্তবয়স্ক নয় — তাদের নাক-কান-গলার গঠন, রোগের ধরন এবং পরীক্ষার সময়ের আচরণ — সবই আলাদা। আমাদের শিশু ইএনটি বিভাগ বরাক উপত্যকায় শিশুদের সবচেয়ে সাধারণ চারটি ইএনটি সমস্যাকে কেন্দ্র করে গঠিত: বারবার কানের সংক্রমণ (ওটাইটিস মিডিয়া), অ্যাডেনয়েড বা টনসিল বড় হওয়ায় মুখ দিয়ে শ্বাস ও নাক ডাকা, দীর্ঘস্থায়ী নাক বন্ধ ও অ্যালার্জিক রাইনাইটিস, এবং কান, নাক বা গলায় ভুলবশত ঢুকে যাওয়া যে কোনো বস্তু (ফরেন বডি)। আমরা শিশু-উপযোগী ছোট আকারের যন্ত্রপাতি, শান্ত গতিতে কনসালটেশন এবং অভিভাবকের সামনে পরীক্ষা করি — শিশু যতক্ষণ সম্ভব মা-বাবার কোলেই থাকে, এবং প্রতিটি ভিজিটে অভিভাবক-কাউন্সেলিং অন্তর্ভুক্ত থাকে।",
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
        "শিশু-উপযোগী আকারের অটোস্কোপ, এন্ডোস্কোপ ও যন্ত্রপাতি",
        "বারবার কানের সংক্রমণ (অ্যাকিউট ও সিরাস ওটাইটিস মিডিয়া) মূল্যায়ন",
        "মুখ দিয়ে শ্বাস ও নাক ডাকার জন্য অ্যাডেনয়েড ও টনসিল মূল্যায়ন",
        "কান, নাক ও গলা থেকে নিরাপদে ফরেন বডি অপসারণ",
        "কথা বলতে দেরি বা অস্পষ্ট শিশুর জন্য শ্রবণ স্ক্রিনিং",
        "অ্যালার্জি মূল্যায়ন ও পরাগ / ধূলিকণা সংবেদনশীলতার পরামর্শ",
        "প্রতিটি ভিজিটে অভিভাবক-কাউন্সেলিং; তাড়াহুড়োহীন পরীক্ষা",
      ],
    },
    faqs: {
      en: [
        {
          q: "My child gets ear infections every few months. What can be done?",
          a: "Recurrent otitis media is common between ages 2 and 6. We examine for fluid behind the eardrum, screen for adenoid enlargement, and review allergy or feeding-position contributions. Most cases respond to structured medical management with follow-up; a small proportion benefit from minor procedures.",
        },
        {
          q: "Why does my child snore and breathe through the mouth?",
          a: "The commonest cause in young children is enlarged adenoids and / or tonsils. This affects sleep quality, school performance, and dental development. Early assessment matters — many children improve without surgery once the cause is identified.",
        },
        {
          q: "My child has put a small object in their ear or nose. What should I do?",
          a: "Stay calm. Do not try to remove it at home, as this often pushes it deeper and can cause injury. Bring the child to clinic the same day; foreign-body removal is a routine and safe procedure performed regularly here.",
        },
        {
          q: "When should a child have a hearing test?",
          a: "Any child with delayed speech, frequent ear pain, poor school performance, or a family history of hearing loss should be tested. Our paediatric-friendly booth makes the test feasible from school age onward, and earlier with parent participation.",
        },
        {
          q: "Is anaesthesia involved in routine paediatric ENT visits?",
          a: "No — routine consultation, otoscopy, and most foreign-body removals are done in OPD without anaesthesia. Anaesthesia is reserved for specific procedures, discussed in advance with the parent.",
        },
        {
          q: "Are adenoid and tonsil surgeries safe in children?",
          a: "Modern adenoidectomy and tonsillectomy are well-established day-care procedures. The indication is reviewed carefully — surgery is recommended only when conservative care has failed or when sleep, hearing, or growth is being affected.",
        },
        {
          q: "Should I bring vaccination and growth records?",
          a: "Yes — please bring the immunisation card, growth chart, prior ENT consults, and a written list of any concerns. A complete picture helps the consultation go faster and more accurately.",
        },
      ],
      bn: [
        {
          q: "আমার শিশুর কয়েক মাস পরপরই কানের সংক্রমণ হয়, কী করা যায়?",
          a: "২ থেকে ৬ বছর বয়সে বারবার ওটাইটিস মিডিয়া হওয়া সাধারণ। আমরা কানের পর্দার পেছনে তরল আছে কি না, অ্যাডেনয়েড বড় কি না এবং অ্যালার্জি বা দুধ খাওয়ানোর ভঙ্গির ভূমিকা মূল্যায়ন করি। বেশিরভাগ ক্ষেত্রে সুসংগঠিত মেডিকাল চিকিৎসা ও ফলো-আপে সমস্যা ভালো হয়; অল্প সংখ্যক ক্ষেত্রে ছোট প্রক্রিয়া প্রয়োজন হয়।",
        },
        {
          q: "আমার শিশু কেন নাক ডাকে এবং মুখ দিয়ে শ্বাস নেয়?",
          a: "ছোট শিশুদের ক্ষেত্রে সবচেয়ে সাধারণ কারণ হলো অ্যাডেনয়েড ও / বা টনসিল বড় হয়ে যাওয়া। এতে ঘুমের মান, স্কুলের ফলাফল ও দাঁতের বিকাশ প্রভাবিত হয়। সময়মতো পরীক্ষা গুরুত্বপূর্ণ — কারণ সঠিকভাবে নির্ণয় করা গেলে অনেক শিশু সার্জারি ছাড়াই ভালো হয়।",
        },
        {
          q: "আমার শিশু কান বা নাকে কিছু ঢুকিয়ে ফেলেছে, কী করব?",
          a: "শান্ত থাকুন। বাড়িতে নিজে বের করার চেষ্টা করবেন না — এতে বস্তুটি আরও ভেতরে চলে যেতে পারে এবং আঘাত লাগতে পারে। একই দিনে শিশুকে ক্লিনিকে নিয়ে আসুন; ফরেন বডি অপসারণ এখানে নিয়মিত ও নিরাপদে করা হয়।",
        },
        {
          q: "শিশুর শ্রবণ পরীক্ষা কখন করানো উচিত?",
          a: "যে শিশুর কথা বলতে দেরি হচ্ছে, বারবার কানে ব্যথা, স্কুলে মনোযোগের সমস্যা, বা পারিবারিকভাবে শ্রবণহানির ইতিহাস আছে — তার পরীক্ষা করানো উচিত। আমাদের শিশু-বান্ধব বুথে স্কুল বয়স থেকেই পরীক্ষা সম্ভব, এবং অভিভাবকের সহায়তায় তার আগেও।",
        },
        {
          q: "শিশুদের রুটিন ইএনটি ভিজিটে কি অ্যানেস্থেশিয়া লাগে?",
          a: "না — সাধারণ কনসালটেশন, অটোস্কোপি এবং বেশিরভাগ ফরেন বডি অপসারণ OPD-তে অ্যানেস্থেশিয়া ছাড়াই করা হয়। অ্যানেস্থেশিয়া শুধুমাত্র নির্দিষ্ট প্রক্রিয়ার জন্য সংরক্ষিত এবং আগে থেকে অভিভাবকের সঙ্গে আলোচনা করে নেওয়া হয়।",
        },
        {
          q: "শিশুদের অ্যাডেনয়েড ও টনসিল সার্জারি কি নিরাপদ?",
          a: "আধুনিক অ্যাডেনয়েডেক্টমি ও টনসিলেক্টমি সুপ্রতিষ্ঠিত ডে-কেয়ার প্রক্রিয়া। সার্জারির প্রয়োজন সতর্কভাবে যাচাই করা হয় — শুধুমাত্র যখন কনজারভেটিভ চিকিৎসায় কাজ হয়নি, অথবা ঘুম, শ্রবণ বা শারীরিক বৃদ্ধি প্রভাবিত হচ্ছে তখনই সার্জারি সুপারিশ করা হয়।",
        },
        {
          q: "টিকা ও বৃদ্ধি রেকর্ড কি আনব?",
          a: "হ্যাঁ — টিকার কার্ড, গ্রোথ চার্ট, আগের ইএনটি কনসালটেশন এবং উদ্বেগগুলির একটি লিখিত তালিকা আনুন। সম্পূর্ণ ছবি থাকলে কনসালটেশন দ্রুত ও আরও সঠিকভাবে এগোয়।",
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
      en: "The voice is produced by the vibration of two thin folds of tissue in the larynx. Small changes — a nodule from overuse, swelling from acid reflux, paralysis after a viral infection — can have major effects on how a patient sounds and how easily they can speak through the day. Our Voice & Throat Clinic combines flexible laryngoscopy, structured voice therapy, and, where indicated, coordinated microlaryngeal surgical care. Particular attention is given to professional voice users — teachers, singers, lawyers, broadcasters, call-centre staff — whose work depends on a reliable, fatigue-free voice.",
      bn: "ল্যারিংসে দুটি পাতলা টিস্যুর কম্পনে কণ্ঠস্বর তৈরি হয়। ছোট পরিবর্তন — অতিরিক্ত ব্যবহারে নোডিউল, অ্যাসিড রিফ্লাক্সে ফোলা, ভাইরাল সংক্রমণের পরে প্যারালাইসিস — গলার শব্দ ও সারাদিন স্বচ্ছন্দে কথা বলার ক্ষমতায় বড় প্রভাব ফেলতে পারে। আমাদের ভয়েস ও গলা ক্লিনিকে ফ্লেক্সিবল ল্যারিঙ্গোস্কোপি, সুসংগঠিত ভয়েস থেরাপি এবং প্রয়োজনে সমন্বিত মাইক্রোল্যারিঞ্জিয়াল সার্জিকাল চিকিৎসা একসঙ্গে দেওয়া হয়। শিক্ষক, গায়ক, আইনজীবী, ব্রডকাস্টার, কল-সেন্টার কর্মীদের মতো পেশাদার কণ্ঠ-ব্যবহারকারীদের প্রতি বিশেষ মনোযোগ দেওয়া হয়, যাঁদের কাজ ক্লান্তিহীন ও নির্ভরযোগ্য কণ্ঠের উপর নির্ভরশীল।",
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
        "সূক্ষ্ম ভোকাল ফোল্ড বিশ্লেষণের জন্য স্ট্রোবোস্কোপি রেফারেল",
        "প্রয়োজনে মাইক্রোল্যারিঞ্জিয়াল সার্জারির সমন্বয়",
        "দীর্ঘস্থায়ী গলা বসার জন্য দীর্ঘমেয়াদি ফলো-আপ",
      ],
    },
    faqs: {
      en: [
        {
          q: "How long should hoarseness last before I see an ENT?",
          a: "Any hoarseness lasting more than three weeks should be examined, especially in adults over 40 or in regular voice users. Persistent hoarseness can occasionally indicate a serious cause where early diagnosis matters.",
        },
        {
          q: "What is reflux laryngitis?",
          a: "Acid from the stomach can travel up — particularly at night — and irritate the vocal folds, causing morning hoarseness, throat clearing, and a sensation of a lump in the throat. It usually responds to medication, posture changes, and dietary adjustment.",
        },
        {
          q: "Are vocal nodules permanent?",
          a: "No — most vocal nodules respond well to voice therapy and improved vocal hygiene. Surgery is reserved for the small proportion of cases that do not respond to conservative care.",
        },
        {
          q: "Can I continue singing while in therapy?",
          a: "That depends on the findings. Singers are usually advised on a graded return-to-voice plan rather than complete silence, which can itself cause deconditioning. Each plan is individual.",
        },
        {
          q: "Will I lose my voice after microlaryngeal surgery?",
          a: "Microlaryngeal surgery is precise and aims to preserve voice quality. A short period of voice-rest and structured rehabilitation follows, after which most patients return to their previous level of speaking voice.",
        },
        {
          q: "What habits damage the voice most?",
          a: "Smoking, chronic shouting, untreated acid reflux, poor hydration, and speaking at length while suffering from a cold or laryngitis. Voice-care guidance is part of every consultation.",
        },
        {
          q: "I am a teacher and lose my voice by Friday — is this treatable?",
          a: "Yes — this pattern is very common and usually reflects vocal overuse plus suboptimal technique. A short voice-therapy programme combined with vocal-hygiene changes often resolves it, allowing you to teach the full week without strain.",
        },
      ],
      bn: [
        {
          q: "কতদিন গলা বসা থাকলে ইএনটি ডাক্তারের কাছে যাব?",
          a: "তিন সপ্তাহের বেশি গলা বসা থাকলেই পরীক্ষা করানো উচিত — বিশেষ করে ৪০ বছরের উপরের প্রাপ্তবয়স্কদের বা নিয়মিত কণ্ঠ ব্যবহারকারীদের। দীর্ঘস্থায়ী গলা বসা কখনো কখনো গুরুতর কারণ নির্দেশ করতে পারে, যেখানে সময়মতো রোগ নির্ণয় গুরুত্বপূর্ণ।",
        },
        {
          q: "রিফ্লাক্স ল্যারিনজাইটিস কী?",
          a: "পেটের অ্যাসিড — বিশেষত রাতে — উপরে উঠে ভোকাল ফোল্ডকে জ্বালাতন করতে পারে, যার ফলে সকালে গলা ভাঙা, গলা পরিষ্কার করার অভ্যাস এবং গলায় কিছু আটকে থাকার অনুভূতি হয়। ওষুধ, ভঙ্গি পরিবর্তন ও খাদ্যের সমন্বয়ে সাধারণত এটি ভালো হয়।",
        },
        {
          q: "ভোকাল নোডিউল কি স্থায়ী?",
          a: "না — বেশিরভাগ ভোকাল নোডিউল ভয়েস থেরাপি ও ভোকাল হাইজিন উন্নয়নে ভালোভাবে সাড়া দেয়। যেসব অল্প সংখ্যক ক্ষেত্রে কনজারভেটিভ চিকিৎসায় কাজ হয় না, শুধুমাত্র সেখানেই সার্জারি বিবেচনা করা হয়।",
        },
        {
          q: "থেরাপি চলাকালীন গান গাওয়া যাবে?",
          a: "এটি পরীক্ষার ফলাফলের উপর নির্ভর করে। গায়কদের সাধারণত পুরো নীরবতার বদলে ধাপে ধাপে ভয়েস ফিরে পাওয়ার পরিকল্পনা দেওয়া হয়, কারণ দীর্ঘ নীরবতা নিজেই ভোকাল ডিকন্ডিশনিং ঘটাতে পারে। প্রতিটি পরিকল্পনা ব্যক্তিগত।",
        },
        {
          q: "মাইক্রোল্যারিঞ্জিয়াল সার্জারির পরে কি কণ্ঠ চলে যাবে?",
          a: "মাইক্রোল্যারিঞ্জিয়াল সার্জারি সূক্ষ্ম এবং কণ্ঠের গুণমান সংরক্ষণ করাই এর লক্ষ্য। অল্প সময়ের ভয়েস রেস্ট ও সুসংগঠিত পুনর্বাসনের পরে বেশিরভাগ রোগী আগের মতো স্বাভাবিক কথা বলায় ফিরে আসেন।",
        },
        {
          q: "কোন অভ্যাসগুলি কণ্ঠের সবচেয়ে বেশি ক্ষতি করে?",
          a: "ধূমপান, প্রতিনিয়ত চিৎকার, অচিকিৎসিত অ্যাসিড রিফ্লাক্স, পর্যাপ্ত পানি না পান করা এবং ঠান্ডা বা ল্যারিনজাইটিসের সময়ে দীর্ঘ কথা বলা। প্রতিটি কনসালটেশনে ভয়েস-কেয়ার পরামর্শ অন্তর্ভুক্ত থাকে।",
        },
        {
          q: "আমি একজন শিক্ষক, প্রতি শুক্রবারে গলা বসে যায় — এটি কি সারানো যায়?",
          a: "হ্যাঁ — এই প্যাটার্ন খুবই সাধারণ এবং সাধারণত অতিরিক্ত কণ্ঠ ব্যবহার ও অপর্যাপ্ত কৌশলের কারণে হয়। স্বল্পমেয়াদি ভয়েস থেরাপি এবং ভোকাল হাইজিন পরিবর্তনের সমন্বয়ে এটি সমাধান হয়, যাতে আপনি সারা সপ্তাহ ক্লান্তি ছাড়াই পড়াতে পারেন।",
        },
      ],
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 7.  CRANIO CORPO GRAPHY (CCG)
   * ────────────────────────────────────────────────────────────────────── */
  {
    id: "craniocorpography",
    icon: Activity,
    bgImage: "/images/craniocorpography.webp",
    title: {
      en: "Cranio Corpo Graphy (CCG)",
      bn: "ক্র্যানিও কর্পো গ্রাফি (CCG)",
    },
    tagline: {
      en: "Objective testing for vertigo, dizziness, and balance disorders",
      bn: "ভার্টিগো, মাথা ঘোরা ও ভারসাম্যহীনতার নৈর্ব্যক্তিক পরীক্ষা",
    },
    outcome: {
      en: "Objective insight into vertigo and balance.",
      bn: "ভার্টিগো ও ভারসাম্যহীনতার নৈর্ব্যক্তিক বিশ্লেষণ।",
    },
    description: {
      en: "Vertigo and dizziness have many possible causes — and the most useful first step is to determine whether the problem lies in the inner ear (peripheral) or somewhere in the central nervous system (central). Craniocorpography records the spontaneous and induced movements of the head and body during standardised balance tests, producing an objective tracing of how a patient's vestibular system is performing. Among the few centres in the region equipped to perform and interpret this test, the clinic uses CCG findings to clarify diagnoses including Benign Paroxysmal Positional Vertigo (BPPV), Meniere's disease, vestibular neuritis, and post-traumatic dizziness, and to design individualised vestibular rehabilitation plans.",
      bn: "ভার্টিগো ও মাথা ঘোরার অনেক কারণ থাকতে পারে — এবং প্রথম গুরুত্বপূর্ণ ধাপ হলো নির্ধারণ করা যে সমস্যাটি অন্তঃকর্ণে (পেরিফেরাল) নাকি কেন্দ্রীয় স্নায়ুতন্ত্রে (সেন্ট্রাল)। ক্র্যানিও কর্পো গ্রাফি (CCG) মানসম্মত ভারসাম্য পরীক্ষার সময়ে মাথা ও শরীরের স্বতঃস্ফূর্ত ও প্ররোচিত নড়াচড়া রেকর্ড করে — একটি নৈর্ব্যক্তিক ট্রেসিং তৈরি করে যা দেখায় রোগীর ভেস্টিবুলার সিস্টেম কীভাবে কাজ করছে। এই অঞ্চলের অল্প কয়েকটি কেন্দ্রের মধ্যে আমাদের ক্লিনিকে এই পরীক্ষা ও তার ব্যাখ্যা উপলব্ধ; CCG-র ফলাফল ব্যবহার করে BPPV (বেনাইন পজিশনাল ভার্টিগো), মেনিয়ার রোগ, ভেস্টিবুলার নিউরাইটিস ও আঘাত-পরবর্তী মাথা ঘোরার রোগ নির্ণয় স্পষ্ট করা হয় এবং ব্যক্তিগত ভেস্টিবুলার রিহ্যাবিলিটেশন পরিকল্পনা তৈরি করা হয়।",
    },
    timing: {
      en: "Prior appointment recommended",
      bn: "পূর্বে অ্যাপয়েন্টমেন্ট নেওয়ার পরামর্শ দেওয়া হচ্ছে",
    },
    features: {
      en: [
        "Objective recording of head and body sway during balance challenges",
        "Differentiation of peripheral vs. central causes of vertigo",
        "Useful in BPPV, vestibular neuritis, and Meniere's disease",
        "Entirely non-invasive — no needles, no contrast, no medication",
        "Integration with audiometric and ENT examination findings",
        "Personalised vestibular rehabilitation therapy (VRT) plans",
        "Re-test capability to demonstrate progress after rehabilitation",
      ],
      bn: [
        "ভারসাম্য পরীক্ষার সময়ে মাথা ও শরীরের নড়াচড়ার নৈর্ব্যক্তিক রেকর্ডিং",
        "ভার্টিগোর পেরিফেরাল ও সেন্ট্রাল কারণের পার্থক্য নির্ণয়",
        "BPPV, ভেস্টিবুলার নিউরাইটিস ও মেনিয়ার রোগে উপযোগী",
        "সম্পূর্ণ নন-ইনভেসিভ — কোনো সুঁচ, কনট্রাস্ট বা ওষুধ নয়",
        "অডিওমেট্রি ও ইএনটি পরীক্ষার ফলাফলের সঙ্গে সমন্বয়",
        "ব্যক্তিগত ভেস্টিবুলার রিহ্যাবিলিটেশন থেরাপি (VRT) পরিকল্পনা",
        "পুনর্বাসনের পরে অগ্রগতি দেখাতে পুনঃপরীক্ষার সুবিধা",
      ],
    },
    faqs: {
      en: [
        {
          q: "How is CCG different from a routine balance check?",
          a: "A routine balance examination is subjective and observer-dependent. CCG produces a recorded, measurable tracing — objective evidence of how the vestibular system is performing, which can be reviewed later and compared after treatment.",
        },
        {
          q: "Is the test safe?",
          a: "Entirely non-invasive. No injections, no medication, no radiation. Most patients complete the test in 20 to 30 minutes and walk out unaided.",
        },
        {
          q: "I get dizzy when I roll over in bed. Is this serious?",
          a: "That pattern is highly suggestive of Benign Paroxysmal Positional Vertigo (BPPV) — one of the most treatable causes of vertigo. A simple repositioning manoeuvre in clinic resolves it in many patients.",
        },
        {
          q: "Can vertigo be caused by stress?",
          a: "Anxiety and chronic stress can worsen existing vestibular symptoms, but it is important to first rule out an ENT or neurological cause before attributing dizziness to stress alone.",
        },
        {
          q: "What is vestibular rehabilitation (VRT)?",
          a: "A series of structured head and body exercises that retrain the brain to compensate for inner-ear imbalance. Most patients improve significantly over 4 to 8 weeks of regular practice, with periodic clinic review.",
        },
        {
          q: "I had a head injury six months ago and still feel unbalanced. Will CCG help?",
          a: "Yes — post-traumatic dizziness is one of the clinical settings where CCG is especially useful, both in clarifying the cause and in guiding rehabilitation.",
        },
        {
          q: "Should I bring my prior MRI?",
          a: "Yes — please bring any previous MRI, audiogram, or neurology consults. They help us interpret your CCG findings within the full clinical picture rather than in isolation.",
        },
      ],
      bn: [
        {
          q: "CCG কীভাবে সাধারণ ভারসাম্য পরীক্ষার থেকে আলাদা?",
          a: "সাধারণ ভারসাম্য পরীক্ষা ব্যক্তিগত পর্যবেক্ষণনির্ভর। CCG একটি রেকর্ডকৃত, পরিমাপযোগ্য ট্রেসিং তৈরি করে — যা ভেস্টিবুলার সিস্টেমের কার্যকারিতার নৈর্ব্যক্তিক প্রমাণ এবং চিকিৎসার পরে তুলনার জন্য সংরক্ষণ করা যায়।",
        },
        {
          q: "পরীক্ষাটি কি নিরাপদ?",
          a: "সম্পূর্ণ নন-ইনভেসিভ। কোনো ইনজেকশন, ওষুধ বা বিকিরণ নয়। বেশিরভাগ রোগী ২০ থেকে ৩০ মিনিটে পরীক্ষা সম্পন্ন করে নিজে হেঁটে বেরিয়ে যান।",
        },
        {
          q: "বিছানায় পাশ ফিরলে মাথা ঘোরে — এটা কি গুরুতর?",
          a: "এই প্যাটার্ন BPPV (বেনাইন পজিশনাল ভার্টিগো)-র খুবই ইঙ্গিতপূর্ণ — যা ভার্টিগোর সবচেয়ে চিকিৎসাযোগ্য কারণগুলির একটি। অনেক রোগীর ক্ষেত্রে ক্লিনিকেই একটি সাধারণ রিপজিশনিং কৌশলে এটি ভালো হয়ে যায়।",
        },
        {
          q: "মানসিক চাপের কারণে কি ভার্টিগো হতে পারে?",
          a: "উদ্বেগ ও দীর্ঘস্থায়ী মানসিক চাপ পূর্ববর্তী ভেস্টিবুলার লক্ষণ বাড়াতে পারে, তবে শুধু চাপকে দায়ী করার আগে ইএনটি বা স্নায়বিক কারণ বাদ দেওয়া জরুরি।",
        },
        {
          q: "ভেস্টিবুলার রিহ্যাবিলিটেশন (VRT) কী?",
          a: "এটি একগুচ্ছ সুসংগঠিত মাথা ও শরীরের ব্যায়াম যা মস্তিষ্ককে অন্তঃকর্ণের ভারসাম্যহীনতা পূরণ করতে নতুন করে প্রশিক্ষিত করে। নিয়মিত অনুশীলনে বেশিরভাগ রোগী ৪ থেকে ৮ সপ্তাহে উল্লেখযোগ্যভাবে উন্নতি লাভ করেন, ক্লিনিকে নিয়মিত পর্যালোচনার সঙ্গে।",
        },
        {
          q: "ছয় মাস আগে মাথায় চোট পেয়েছি, এখনো ভারসাম্য নেই। CCG কি সাহায্য করবে?",
          a: "হ্যাঁ — আঘাত-পরবর্তী মাথা ঘোরা এমন একটি ক্লিনিকাল পরিস্থিতি যেখানে CCG কারণ স্পষ্ট করতে এবং পুনর্বাসনের দিকনির্দেশনা দিতে বিশেষভাবে উপযোগী।",
        },
        {
          q: "আগের MRI কি আনব?",
          a: "হ্যাঁ — আগের যে কোনো MRI, অডিওগ্রাম বা নিউরোলজি কনসালটেশন আনুন। সম্পূর্ণ ক্লিনিকাল প্রেক্ষাপটে CCG-র ফলাফল ব্যাখ্যা করতে এগুলি গুরুত্বপূর্ণ।",
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
      en: "A range of advanced ENT surgical procedures performed in modern operating environments with internationally accepted safety protocols. The clinic's emphasis is on minimally invasive techniques where appropriate — Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis, microscopic ear surgery (tympanoplasty, mastoidectomy) for hearing restoration in chronic ear disease, septoplasty for deviated septum, and tonsillectomy / adenoidectomy in children. Every surgical decision is preceded by a thorough trial of conservative management; surgery is offered only when its benefits clearly outweigh continuing non-surgical care. Pre-operative counselling, anaesthetic clearance, and a structured post-operative recovery plan are part of every case.",
      bn: "আন্তর্জাতিকভাবে স্বীকৃত নিরাপত্তা প্রোটোকল অনুসরণ করে আধুনিক অপারেটিং পরিবেশে একগুচ্ছ উন্নত ইএনটি সার্জিকাল প্রক্রিয়া পরিচালিত হয়। আমাদের ক্লিনিকের জোর সর্বদাই উপযুক্ত ক্ষেত্রে ন্যূনতম আক্রমণাত্মক কৌশলের উপর — দীর্ঘস্থায়ী সাইনোসাইটিসের জন্য FESS (ফাংশনাল এন্ডোস্কোপিক সাইনাস সার্জারি), দীর্ঘস্থায়ী কর্ণরোগে শ্রবণ পুনরুদ্ধারের জন্য মাইক্রোস্কোপিক ইয়ার সার্জারি (টিম্পানোপ্লাস্টি, মাস্টয়েডেক্টমি), বাঁকা নাকের পর্দার জন্য সেপ্টোপ্লাস্টি এবং শিশুদের টনসিলেক্টমি ও অ্যাডেনয়েডেক্টমি। প্রতিটি সার্জিকাল সিদ্ধান্তের আগে কনজারভেটিভ চিকিৎসার পূর্ণ চেষ্টা করা হয়; সার্জারি কেবল তখনই সুপারিশ করা হয় যখন এর সুবিধা চলমান নন-সার্জিকাল চিকিৎসার চেয়ে স্পষ্টভাবে বেশি। প্রি-অপারেটিভ কাউন্সেলিং, অ্যানেস্থেটিক ক্লিয়ারেন্স এবং সুসংগঠিত পোস্ট-অপারেটিভ রিকভারি প্ল্যান প্রতিটি কেসের অংশ।",
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
        "দীর্ঘস্থায়ী সাইনোসাইটিসের জন্য FESS (ফাংশনাল এন্ডোস্কোপিক সাইনাস সার্জারি)",
        "কানের পর্দা ফেটে যাওয়ায় টিম্পানোপ্লাস্টি ও ওসিকুলোপ্লাস্টি",
        "দীর্ঘস্থায়ী কর্ণরোগে মাস্টয়েডেক্টমি",
        "নাক বন্ধের জন্য সেপ্টোপ্লাস্টি ও টার্বিনোপ্লাস্টি",
        "টনসিলেক্টমি ও অ্যাডেনয়েডেক্টমি (শিশু ও প্রাপ্তবয়স্ক)",
        "ভোকাল ফোল্ডের ক্ষতিকর জন্য মাইক্রোল্যারিঞ্জিয়াল সার্জারি",
        "ক্লিনিকালভাবে উপযুক্ত হলে ডে-কেয়ার প্রক্রিয়া",
        "সুসংগঠিত প্রি-অপারেটিভ কাউন্সেলিং ও পোস্ট-অপ ফলো-আপ",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do I know if I really need surgery?",
          a: "Most ENT conditions are managed without surgery. We recommend a procedure only when conservative care has been adequately tried and the underlying anatomy requires correction — for example, a severely deviated septum, a hole in the eardrum, or obstructive tonsils affecting sleep and growth.",
        },
        {
          q: "Are these surgeries performed as day-care?",
          a: "Many — including tympanoplasty, septoplasty, tonsillectomy, adenoidectomy, and FESS — can be day-care procedures depending on patient factors, allowing return home the same day or after one overnight observation.",
        },
        {
          q: "What is the typical recovery time?",
          a: "Recovery varies by procedure. FESS and septoplasty: typical return to office work in 7 to 10 days. Adult tonsillectomy: 10 to 14 days. Ear surgery: 1 to 2 weeks of limited activity, with water precautions for 4 to 6 weeks.",
        },
        {
          q: "Will I need general anaesthesia?",
          a: "Most major ENT procedures use general anaesthesia for patient comfort and surgical precision. A pre-operative anaesthetist consultation reviews your medical history and confirms suitability.",
        },
        {
          q: "What are the risks involved?",
          a: "Every surgery carries some risk. ENT procedures in experienced hands have low but non-zero risks of bleeding, infection, anaesthetic reaction, and procedure-specific complications. These are discussed in full at pre-operative counselling, with written information provided.",
        },
        {
          q: "Are post-operative consultations included in the care plan?",
          a: "Yes — structured follow-up at week 1, week 4, and three months is standard, with additional visits added as clinically required. Recovery is monitored, not just the surgery itself.",
        },
        {
          q: "Should I stop my regular medications before surgery?",
          a: "Some medications — blood thinners, certain herbal supplements, and a few diabetes medications — need to be paused well in advance. A full medicine review is part of pre-operative consultation; do not stop anything on your own.",
        },
        {
          q: "How long should I plan to be off work?",
          a: "This depends on your job and the procedure. A desk-based worker recovering from FESS or septoplasty is usually back in 7 to 10 days; a teacher or singer may need 2 to 3 weeks of voice rest after throat surgery. A realistic plan is given at pre-operative counselling.",
        },
      ],
      bn: [
        {
          q: "আমার সত্যিই সার্জারি লাগবে কি না, কীভাবে জানব?",
          a: "বেশিরভাগ ইএনটি সমস্যা সার্জারি ছাড়াই চিকিৎসা করা যায়। আমরা শুধুমাত্র তখনই সার্জারি সুপারিশ করি যখন কনজারভেটিভ চিকিৎসা পর্যাপ্তভাবে চেষ্টা করা হয়েছে এবং অন্তর্নিহিত কাঠামোগত সমস্যা সংশোধন প্রয়োজন — যেমন তীব্র বাঁকা সেপ্টাম, কানের পর্দায় ছিদ্র, বা ঘুম ও বৃদ্ধিকে প্রভাবিত করা বড় টনসিল।",
        },
        {
          q: "এই সার্জারিগুলি কি ডে-কেয়ার হিসেবে করা হয়?",
          a: "অনেকগুলি — যেমন টিম্পানোপ্লাস্টি, সেপ্টোপ্লাস্টি, টনসিলেক্টমি, অ্যাডেনয়েডেক্টমি ও FESS — রোগীর অবস্থা অনুযায়ী ডে-কেয়ার প্রক্রিয়া হিসেবে করা যায়; ফলে রোগী একই দিনে অথবা একরাত পর্যবেক্ষণের পরে বাড়ি ফিরতে পারেন।",
        },
        {
          q: "সাধারণত পুনরুদ্ধারে কতদিন লাগে?",
          a: "প্রক্রিয়া অনুযায়ী আলাদা। FESS ও সেপ্টোপ্লাস্টি: সাধারণত ৭ থেকে ১০ দিনে অফিসের কাজে ফেরা যায়। প্রাপ্তবয়স্কের টনসিলেক্টমি: ১০ থেকে ১৪ দিন। কানের সার্জারি: ১ থেকে ২ সপ্তাহ সীমিত কার্যকলাপ, ৪ থেকে ৬ সপ্তাহ পানির সংস্পর্শ বাঁচিয়ে চলা।",
        },
        {
          q: "জেনারেল অ্যানেস্থেশিয়া কি লাগবে?",
          a: "বেশিরভাগ বড় ইএনটি প্রক্রিয়ায় রোগীর আরাম ও সার্জিকাল সূক্ষ্মতার জন্য জেনারেল অ্যানেস্থেশিয়া ব্যবহার করা হয়। প্রি-অপারেটিভ অ্যানেস্থেটিস্ট কনসালটেশনে আপনার মেডিকাল ইতিহাস পর্যালোচনা করে উপযুক্ততা নিশ্চিত করা হয়।",
        },
        {
          q: "এতে কী কী ঝুঁকি আছে?",
          a: "প্রতিটি সার্জারিতে কিছু ঝুঁকি থাকে। অভিজ্ঞ হাতে ইএনটি সার্জারিতে রক্তপাত, সংক্রমণ, অ্যানেস্থেটিক প্রতিক্রিয়া এবং প্রক্রিয়া-নির্দিষ্ট জটিলতার ঝুঁকি কম তবে শূন্য নয়। এগুলি প্রি-অপারেটিভ কাউন্সেলিংয়ে বিস্তারিত আলোচনা করা হয় এবং লিখিত তথ্যও দেওয়া হয়।",
        },
        {
          q: "সার্জারির পরের কনসালটেশন কি যত্নের অংশ?",
          a: "হ্যাঁ — ১ম সপ্তাহ, ৪র্থ সপ্তাহ ও ৩ মাসে সুসংগঠিত ফলো-আপ স্ট্যান্ডার্ড, প্রয়োজন হলে আরও ভিজিট যোগ করা হয়। শুধু সার্জারি নয়, পুনরুদ্ধার প্রক্রিয়াও নিয়মিতভাবে পর্যবেক্ষণ করা হয়।",
        },
        {
          q: "সার্জারির আগে কি নিয়মিত ওষুধ বন্ধ করতে হবে?",
          a: "কিছু ওষুধ — রক্ত পাতলা করার ওষুধ, নির্দিষ্ট ভেষজ সম্পূরক এবং কিছু ডায়াবেটিসের ওষুধ — অগ্রিম বন্ধ করতে হয়। প্রি-অপারেটিভ কনসালটেশনে সম্পূর্ণ ওষুধ পর্যালোচনা করা হয়; নিজে থেকে কিছু বন্ধ করবেন না।",
        },
        {
          q: "কতদিন কাজ থেকে ছুটি নিতে হবে?",
          a: "এটি আপনার কাজ এবং প্রক্রিয়ার ধরনের উপর নির্ভর করে। FESS বা সেপ্টোপ্লাস্টির পরে ডেস্ক-ভিত্তিক কর্মী সাধারণত ৭ থেকে ১০ দিনে ফিরে যেতে পারেন; গলার সার্জারির পরে শিক্ষক বা গায়কের ২ থেকে ৩ সপ্তাহ ভয়েস রেস্ট প্রয়োজন হতে পারে। প্রি-অপারেটিভ কাউন্সেলিংয়ে বাস্তবসম্মত পরিকল্পনা দেওয়া হয়।",
        },
      ],
    },
  },
];