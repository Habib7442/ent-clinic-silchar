import { 
  Ear, 
  Wind, 
  Baby, 
  Mic2, 
  ShieldCheck, 
  Brain, 
  Activity,
  Volume2,
  LucideIcon
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
  {
    id: "audiometry-speech-therapy",
    icon: Volume2,
    bgImage: "/images/audiometry_therapy.webp",
    title: { en: "Audiometry & Speech Therapy", bn: "অডিওমেট্রি এবং স্পিচ থেরাপি" },
    tagline: { en: "Clinical Hearing and Speech Excellence", bn: "ক্লিনিকাল শ্রবণ ও স্পিচ থেরাপি শ্রেষ্ঠত্ব" },
    outcome: { en: "Restore clarity to your conversations.", bn: "আপনার কথোপকথনে স্বচ্ছতা ফিরিয়ে আনুন।" },
    description: {
      en: "A state-of-the-art diagnostic unit providing standard hearing threshold evaluations inside our calibrated soundproof booth, paired with scientific pediatric and adult speech therapy sessions.",
      bn: "আমাদের শব্দরোধী বুথে গোল্ড-স্ট্যান্ডার্ড শ্রবণ ক্ষমতা পরীক্ষা এবং শিশু ও প্রাপ্তবয়স্কদের বৈজ্ঞানিক স্পিচ থেরাপির বিশেষায়িত ব্যবস্থা।"
    },
    timing: { en: "By Appointment Only", bn: "অ্যাপয়েন্টমেন্ট অনুযায়ী" },
    features: {
      en: [
        "Gold-standard Pure Tone Audiometry (PTA)",
        "Soundproof double-walled testing booth",
        "Pediatric and adult language assessment",
        "Experienced clinical speech-language therapists"
      ],
      bn: [
        "গোল্ড-স্ট্যান্ডার্ড পিওর টোন অডিওমেট্রি (PTA)",
        "সম্পূর্ণ শব্দরোধী ডাবল-ওয়ালড টেস্টিং বুথ",
        "শিশু ও প্রাপ্তবয়স্কদের ভাষা ও কণ্ঠ মূল্যায়ন",
        "অভিজ্ঞ ক্লিনিকাল স্পিচ থেরাপিস্টদের নিবিড় যত্ন"
      ]
    },
    faqs: {
      en: [
        { q: "How long does an audiometry test take?", a: "A standard test takes about 20 to 30 minutes inside our calibrated booth. The reports are issued immediately." },
        { q: "Is prior booking mandatory for speech therapy?", a: "Yes, speech therapy sessions require dedicated slots. Please book in advance to secure your session." }
      ],
      bn: [
        { q: "শ্রবণ পরীক্ষা করতে কতক্ষণ সময় লাগে?", a: "আমাদের শব্দরোধী বুথে একটি সাধারণ পরীক্ষা করতে ২০ থেকে ৩০ মিনিট সময় লাগে এবং রিপোর্ট সাথে সাথেই দেওয়া হয়।" },
        { q: "স্পিচ থেরাপির জন্য কি আগে বুকিং করা বাধ্যতামূলক?", a: "হ্যাঁ, স্পিচ থেরাপির সেশনগুলির জন্য নির্দিষ্ট সময় বরাদ্দ করতে হয়। দয়া করে আগে বুক করুন।" }
      ]
    }
  },
  {
    id: "headache-clinic",
    icon: Brain,
    bgImage: "/images/headache_clinic.webp",
    title: { en: "Headache Clinic", bn: "মাথাব্যথা ক্লিনিক" },
    tagline: { en: "Specialized Management for Chronic Headaches", bn: "দীর্ঘস্থায়ী মাথাব্যথার বিশেষায়িত চিকিৎসা" },
    outcome: { en: "Permanent relief from migraines & sinus pain.", bn: "মাইগ্রেন এবং সাইনাসের মাথাব্যথা থেকে স্থায়ী মুক্তি।" },
    description: {
      en: "A specialized weekly clinic designed to diagnose, trace, and scientifically manage chronic headaches, neurological sinus pains, and persistent migraines.",
      bn: "ক্রনিক মাথাব্যথা, সাইনাসের স্নায়বিক ব্যথা এবং মাইগ্রেনের কারণ নির্ণয় ও বৈজ্ঞানিক চিকিৎসার জন্য বিশেষায়িত সাপ্তাহিক ক্লিনিক।"
    },
    timing: { en: "Wednesdays from 4:00 PM to 8:00 PM", bn: "প্রতি বুধবার বিকেল ৪:০০ টা থেকে রাত ৮:০০ টা" },
    features: {
      en: [
        "Comprehensive sinus and neurological screening",
        "Migraine trigger identification and tracking",
        "Customized pharmacotherapy plans",
        "Stress management and lifestyle advisory"
      ],
      bn: [
        "পূর্ণাঙ্গ সাইনাস এবং স্নায়বিক স্ক্রিনিং",
        "মাইগ্রেনের ট্রিগার সনাক্তকরণ এবং ট্র্যাকিং",
        "কাস্টমাইজড ফারামাকোথেরাপি পরিকল্পনা",
        "মানসিক চাপ নিয়ন্ত্রণ ও জীবনধারা পরামর্শ"
      ]
    },
    faqs: {
      en: [
        { q: "When runs the Headache Clinic?", a: "Every Wednesday from 4 PM to 8 PM. It is highly recommended for patients with recurring headaches." },
        { q: "Do sinus issues cause severe headaches?", a: "Yes, chronic sinusitis and nasal blockages can cause severe pressure headaches, often mistaken for typical migraines." }
      ],
      bn: [
        { q: "মাথাব্যথা ক্লিনিক কখন খোলা থাকে?", a: "প্রতি বুধবার বিকেল ৪টা থেকে রাত ৮টা পর্যন্ত। দীর্ঘস্থায়ী মাথাব্যথার রোগীদের জন্য এটি অত্যন্ত কার্যকর।" },
        { q: "সাইনাসের সমস্যা কি তীব্র মাথাব্যথার কারণ হতে পারে?", a: "হ্যাঁ, ক্রনিক সাইনোসাইটিস এবং নাক বন্ধ থাকার কারণে তীব্র চাপের মাথাব্যথা হতে পারে, যা অনেক সময় সাধারণ মাইগ্রেন বলে ভুল হয়।" }
      ]
    }
  },
  {
    id: "hearing-aids",
    icon: Ear,
    bgImage: "/images/hearing_aids.webp",
    title: { en: "Hearing Aids Center", bn: "হিয়ারিং এইডস সেন্টার" },
    tagline: { en: "Transparent Multi-Brand Hearing Aid Trials", bn: "স্বচ্ছ মাল্টি-ব্র্যান্ড হিয়ারিং এইড ট্রায়াল" },
    outcome: { en: "Premium digital hearing aids & expert fittings.", bn: "প্রিমিয়াম ডিজিটাল হিয়ারিং এইডস এবং নিখুঁত ফিটিং।" },
    description: {
      en: "We offer multi-brand digital hearing aid trials from Siemens, Alps, and Oticon, ensuring complete transparency with zero purchase pressure, calibrated precisely to your audiometry pathology.",
      bn: "আমরা সিমেন্স (Siemens), অ্যাল্পস (Alps) এবং ওটিকন (Oticon) এর মতো বিশ্বমানের ব্র্যান্ডের ডিজিটাল হিয়ারিং এইড ট্রায়াল প্রদান করি, যা সম্পূর্ণ চাপমুক্ত ও স্বচ্ছ।"
    },
    timing: { en: "Regular Clinical Hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Bespoke trials with global leading brands",
        "Computer-aided precision fitting and adjustments",
        "Lifelong servicing and tuning assistance",
        "Transparent pricing with no hidden charges"
      ],
      bn: [
        "বিশ্বের শীর্ষস্থানীয় ব্র্যান্ডগুলির ট্রায়াল সুবিধা",
        "কম্পিউটার-নিয়ন্ত্রিত নিখুঁত ফিটিং ও টিউনিং",
        "সারাজীবনের জন্য সার্ভিসিং এবং টিউনিং সহায়তা",
        "কোনো অতিরিক্ত বা গোপন চার্জ ছাড়া স্বচ্ছ মূল্য তালিকা"
      ]
    },
    faqs: {
      en: [
        { q: "Which brands do you provide?", a: "We provide digital aids from Siemens, Alps, and Oticon, subject to availability." },
        { q: "How long does a hearing aid trial take?", a: "A trial and computer fitting take approximately 45 minutes, ensuring the device is perfectly tuned to your hearing loss." }
      ],
      bn: [
        { q: "আপনার ক্লিনিকে কোন ব্র্যান্ডের হিয়ারিং এইড পাওয়া যায়?", a: "আমরা সিমেন্স, অ্যাল্পস এবং ওটিকনের ডিজিটাল এইড সরবরাহ করি (স্টক থাকা সাপেক্ষে)।" },
        { q: "হিয়ারিং এইড ট্রায়ালে কতক্ষণ সময় লাগে?", a: "ট্রায়াল এবং কম্পিউটারাইজড ফিটিং করতে প্রায় ৪৫ মিনিট সময় লাগে, যাতে এটি আপনার শ্রবণশক্তির সাথে নিখুঁতভাবে মেলে।" }
      ]
    }
  },
  {
    id: "laryngoscopy-endoscopy",
    icon: Wind,
    bgImage: "/images/laryngoscopy_endoscopy.webp",
    title: { en: "Laryngoscopy & Nasal Endoscopy", bn: "ল্যারিঙ্গোস্কোপি ও এন্ডোস্কোপি" },
    tagline: { en: "High-Definition Video Diagnostic Scopes", bn: "হাই-ডেফিনিশন ভিডিও ডায়াগনস্টিক স্কোপ" },
    outcome: { en: "Ultra-precise endoscopic diagnostic imaging.", bn: "সঠিক রোগ নির্ণয়ের জন্য এন্ডোস্কোপিক ডায়াগনস্টিক ইমেজিং।" },
    description: {
      en: "Advanced clinical diagnostic imaging using specialized endoscopy towers to visualize the nasal passages, vocal cords, and deep throat anatomy with complete safety and comfort.",
      bn: "নাক, ভোকাল কর্ড এবং গলার গভীর অংশগুলি সম্পূর্ণ নিরাপত্তা ও আরামের সাথে দেখার জন্য বিশেষ এন্ডোস্কোপি টাওয়ারের সাহায্যে উন্নত ডায়াগনস্টিক ইমেজিং।"
    },
    timing: { en: "Available Every Working Day", bn: "প্রতিটি কর্মদিবসে উপলব্ধ" },
    features: {
      en: [
        "High-definition video nasal endoscopy",
        "Flexible and rigid laryngoscopy scopes",
        "Live monitor visualization for patients",
        "Instant digital video diagnostic reports"
      ],
      bn: [
        "উচ্চ-মানের হাই-ডেফিনিশন ভিডিও নাসাল এন্ডোস্কোপি",
        "ফ্লেক্সিবল ও রিজিড ল্যারিঙ্গোস্কোপি স্কোপ সুবিধা",
        "রোগীদের জন্য লাইভ মনিটর ভিজ্যুয়ালাইজেশন",
        "তাত্ক্ষণিক ডিজিটাল ভিডিও ডায়াগনস্টিক রিপোর্ট"
      ]
    },
    faqs: {
      en: [
        { q: "Is the endoscopy procedure painful?", a: "No, a local anesthetic spray is applied to the nose or throat, making the procedure extremely comfortable and pain-free." },
        { q: "How long does laryngoscopy take?", a: "The actual scope examination takes less than 5 minutes. You can return to normal activities immediately." }
      ],
      bn: [
        { q: "এন্ডোস্কোপি প্রক্রিয়াটি কি বেদনাদায়ক?", a: "না, নাকে বা গলায় একটি লোকাল অ্যানেস্থেটিক স্প্রে দেওয়া হয়, যার ফলে প্রক্রিয়াটি সম্পূর্ণ আরামদায়ক ও ব্যথামুক্ত হয়।" },
        { q: "ল্যারিঙ্গোস্কোপি করতে কতক্ষণ সময় লাগে?", a: "মূল স্কোপ পরীক্ষাটি করতে ৫ মিনিটেরও কম সময় লাগে। আপনি সাথে সাথেই সাধারণ কাজে ফিরতে পারবেন।" }
      ]
    }
  },
  {
    id: "pediatric-ent",
    icon: Baby,
    bgImage: "/images/pediatric_ent.webp",
    title: { en: "Pediatric ENT Clinic", bn: "শিশু নাক কান গলা ক্লিনিক" },
    tagline: { en: "Gentle Care for Ears, Nose, and Throat in Children", bn: "শিশুদের নাক, কান ও গলার জন্য বিশেষ কোমল যত্ন" },
    outcome: { en: "Gentle care & emergency foreign body removal.", bn: "শিশুদের কোমল যত্ন এবং জরুরি ফরেন বডি অপসারণ।" },
    description: {
      en: "Compassionate and expert care for children suffering from ear infections, mouth-breathing, tonsil problems, adenoids, with specialized facility for the safe removal of accidentally inserted foreign bodies.",
      bn: "শিশুদের কানের সংক্রমণ, মুখ দিয়ে শ্বাস নেওয়া, টনসিল ও অ্যাডেনয়েডের চিকিৎসার পাশাপাশি ভুলবশত কান, নাক বা গলার ভেতর ঢুকে যাওয়া যেকোনো জিনিস (ফরেন বডি) নিরাপদে অপসারণের বিশেষায়িত ব্যবস্থা।"
    },
    timing: { en: "Regular Clinical Hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Pediatric specialized examination instruments",
        "Rapid emergency foreign body removal unit",
        "Tonsillitis and Adenoid hypertrophy therapies",
        "Child-friendly and comforting environment"
      ],
      bn: [
        "শিশুদের জন্য বিশেষভাবে তৈরি আধুনিক পরীক্ষার যন্ত্রপাতি",
        "ক্লিনিকে দ্রুত ও নিরাপদ ফরেন বডি অপসারণের ব্যবস্থা",
        "টনসিলাইটিস এবং অ্যাডেনয়েড সমস্যার আধুনিক চিকিৎসা",
        "শিশুদের জন্য আনন্দদায়ক ও ভীতিহীন পরিবেশ"
      ]
    },
    faqs: {
      en: [
        { q: "What should I do if my child swallows or inserts a small toy?", a: "Remain calm and bring the child immediately to our clinic. Dr. Ray specializes in safe, non-surgical extraction of foreign bodies." },
        { q: "Are enlarged adenoids dangerous?", a: "They can cause mouth-breathing, snoring, and recurring ear infections. Early evaluation helps treat them conservatively without surgery." }
      ],
      bn: [
        { q: "আমার শিশু যদি নাকে বা কানে কোনো খেলনা ঢুকিয়ে ফেলে, তবে কী করব?", a: "শান্ত থাকুন এবং শিশুটিকে অবিলম্বে আমাদের ক্লিনিকে নিয়ে আসুন। ডাঃ রায় খেলনা বা ফরেন বডি নিরাপদে বের করার বিষয়ে বিশেষভাবে দক্ষ।" },
        { q: "বর্ধিত অ্যাডেনয়েড কি ক্ষতিকর?", a: "এর কারণে শিশুর মুখ দিয়ে শ্বাস নেওয়া, নাক ডাকা এবং কানের সংক্রমণ হতে পারে। দ্রুত পরীক্ষা করালে কোনো সার্জারি ছাড়াই এটি নিরাময় করা সম্ভব।" }
      ]
    }
  },
  {
    id: "voice-clinic",
    icon: Mic2,
    bgImage: "/images/voice_clinic.webp",
    title: { en: "Voice & Throat Clinic", bn: "ভয়েস ও গলা ক্লিনিক" },
    tagline: { en: "Professional Voice and Vocal Fold Restoration", bn: "পেশাদার ভয়েস এবং ভোকাল ফোল্ড পুনরুদ্ধার" },
    outcome: { en: "Clear communication, voice change therapy.", bn: "স্পষ্ট যোগাযোগ ও গলা বসা দূর করার থেরাপি।" },
    description: {
      en: "A dedicated clinical service for voice changes, hoarseness, and professional vocalists, equipped with diagnostic laryngoscopy and customized therapeutic rehabilitation plans.",
      bn: "কণ্ঠস্বরের পরিবর্তন বা ভেঙে যাওয়া এবং পেশাদার কণ্ঠশিল্পীদের কণ্ঠের সুরক্ষায় ল্যারিঙ্গোস্কোপি ও কাস্টমাইজড থেরাপিউটিক রিহ্যাবিলিটেশন সেবা।"
    },
    timing: { en: "Regular Clinical Hours", bn: "নিয়মিত ক্লিনিকাল সময়" },
    features: {
      en: [
        "Detailed vocal fold movement analysis",
        "Therapy for hoarse voice and vocal abuse",
        "Care models for professional speakers & singers",
        "Laryngoscopy and stroboscopy pathways"
      ],
      bn: [
        "ভোকাল ফোল্ডের নড়াচড়া ও ক্ষমতার বিস্তারিত বিশ্লেষণ",
        "গলা বসা এবং অতিরিক্ত ভয়েস ব্যবহারের থেরাপিউটিক সমাধান",
        "পেশাদার বক্তা ও সঙ্গীতশিল্পীদের কণ্ঠের বিশেষ যত্ন",
        "ল্যারিঙ্গোস্কোপি এবং ভোকাল কর্ড পরীক্ষা"
      ]
    },
    faqs: {
      en: [
        { q: "What causes chronic hoarseness?", a: "It can be caused by vocal nodules, severe acid reflux, or muscle tension. A laryngoscopy will pinpoint the exact cause." },
        { q: "Does voice therapy really help?", a: "Yes, voice therapy exercises teach you how to speak efficiently without straining your vocal cords, resolving most hoarseness." }
      ],
      bn: [
        { q: "ক্রনিক গলা বসা বা ভাঙার কারণ কী?", a: "ভোকাল নোডিউল, অতিরিক্ত অ্যাসিড রিফ্লাক্স বা পেশীর টানের কারণে এটি হতে পারে। ল্যারিঙ্গোস্কোপি করলে সঠিক কারণটি জানা যাবে।" },
        { q: "ভয়েস থেরাপি কি সত্যিই সাহায্য করে?", a: "হ্যাঁ, ভয়েস থেরাপির ব্যায়ামগুলি আপনাকে ভোকাল কর্ডের ওপর অতিরিক্ত চাপ না দিয়ে কথা বলতে শেখায়, যা অধিকাংশ ক্ষেত্রে গলা বসা নিরাময় করে।" }
      ]
    }
  },
  {
    id: "craniocorpography",
    icon: Activity,
    bgImage: "/images/craniocorpography.webp",
    title: { en: "Cranio Corpo Graphy (CCG)", bn: "ক্র্যানিও কর্পো গ্রাফি (CCG)" },
    tagline: { en: "Gold-Standard Vertigo Balance Diagnostics", bn: "ভার্টিগো ও ব্যালেন্স নির্ণয়ের গোল্ড-স্ট্যান্ডার্ড ব্যবস্থা" },
    outcome: { en: "Advanced vestibular balance & vertigo testing.", bn: "ভার্টিগো ও মাথা ঘোরার জন্য উন্নত ব্যালেন্স পরীক্ষা।" },
    description: {
      en: "Craniocorpography is a highly advanced, non-invasive diagnostic test for vertigo, dizziness, and vestibular balance disorders. The ENT Clinic Silchar proudly introduces this gold-standard balance tracking system.",
      bn: "ভার্টিগো, মাথা ঘোরা এবং শরীরের ভারসাম্যহীনতার কারণ নির্ণয় করার জন্য ক্র্যানিও কর্পো গ্রাফি (CCG) একটি অত্যন্ত উন্নত ও আধুনিক পরীক্ষা। বরাক উপত্যকায় আমরাই প্রথম এই ব্যবস্থা চালু করেছি।"
    },
    timing: { en: "Prior Appointment Recommended", bn: "পূর্ববর্তী অ্যাপয়েন্টমেন্টের পরামর্শ দেওয়া হচ্ছে" },
    features: {
      en: [
        "Objective spatial tracking of vestibular reflexes",
        "Non-invasive balance dysfunction mapping",
        "Precise vertigo pathology identification",
        "Personalized vestibular rehabilitation therapy (VRT)"
      ],
      bn: [
        "ভেস্টিবুলার রিফ্লেক্সের সুনির্দিষ্ট স্পেশাল ট্র্যাকিং",
        "শারীরিক ভারসাম্যহীনতার নন-ইনভেসিভ ম্যাপিং",
        "ভার্টিগো এবং মাথা ঘোরার আসল কারণ সনাক্তকরণ",
        "ব্যক্তিগত ভেস্টিবুলার রিহ্যাবিলিটেশন থেরাপি (VRT)"
      ]
    },
    faqs: {
      en: [
        { q: "What is Craniocorpography (CCG)?", a: "It is an objective diagnostic tool that records your body movements during specific balance tests, helping to differentiate between peripheral (ear) and central (brain) vertigo." },
        { q: "Is CCG test safe?", a: "Yes, it is entirely non-invasive, safe, and does not involve any needles or medication." }
      ],
      bn: [
        { q: "ক্র্যানিও কর্পো গ্রাফি (CCG) কী?", a: "এটি একটি আধুনিক রোগ নির্ণয়কারী পরীক্ষা যা কায়িক ভারসাম্যের নড়াচড়া রেকর্ড করে। এটি কানের কারণে মাথা ঘোরা (Peripheral Vertigo) এবং মস্তিষ্কের কারণে মাথা ঘোরার (Central Vertigo) পার্থক্য স্পষ্ট করে।" },
        { q: "সিসিজি পরীক্ষাটি কি নিরাপদ?", a: "হ্যাঁ, এটি সম্পূর্ণ ব্যথামুক্ত, নিরাপদ এবং এতে কোনো সুচ বা ওষুধ ব্যবহারের প্রয়োজন হয় না।" }
      ]
    }
  },
  {
    id: "surgical-ent",
    icon: ShieldCheck,
    bgImage: "/images/surgical_ent.webp",
    title: { en: "Surgical ENT Services", bn: "সার্জিক্যাল ইএনটি সেবাসমূহ" },
    tagline: { en: "Advanced Minimally Invasive ENT Surgeries", bn: "উন্নত এবং ন্যূনতম আক্রমণাত্মক ইএনটি সার্জারি" },
    outcome: { en: "Precision microsurgeries for throat, ear & sinus.", bn: "কান, নাক ও গলার সমস্যার জন্য আধুনিক মাইক্রোসার্জারি।" },
    description: {
      en: "Advanced, minimally invasive day-care and inpatient surgeries including Tympanoplasty, FESS (Functional Endoscopic Sinus Surgery), Tonsillectomy, Septoplasty, and Adenoidectomy.",
      bn: "টিম্পানোপ্লাস্টি, ফেস (FESS), টনসিলেক্টমি, সেপ্টোপ্লাস্টি এবং অ্যাডেনয়েক্টমি সহ উন্নত ও আধুনিক ন্যূনতম আক্রমণাত্মক নাক কান ও গলার শল্যচিকিৎসা বা অস্ত্রোপচার।"
    },
    timing: { en: "Scheduled Surgical Sessions", bn: "নির্ধারিত অস্ত্রোপচার সূচি অনুযায়ী" },
    features: {
      en: [
        "Endoscopic sinus surgeries (FESS) for sinusitis",
        "Micro-ear surgeries (Tympanoplasty, Mastoidectomy)",
        "Painless and advanced tonsillectomy procedures",
        "USFDA approved surgical safety protocols"
      ],
      bn: [
        "সাইনোসাইটিসের জন্য এন্ডোস্কোপিক সাইনাস সার্জারি (FESS)",
        "কানের পর্দার জন্য মাইক্রো-ইয়ার সার্জারি (Tympanoplasty)",
        "বেদনাদায়ক টনসিল অপারেশনের অত্যাধুনিক ও সহজ সমাধান",
        "USFDA অনুমোদিত অস্ত্রোপচার নিরাপত্তা প্রোটোকল অনুসরণ"
      ]
    },
    faqs: {
      en: [
        { q: "Is hospital admission mandatory for these surgeries?", a: "Many of our surgeries like Tympanoplasty and Septoplasty are performed as daycare procedures, allowing you to return home on the same day." },
        { q: "Do you offer post-surgery consults?", a: "Yes, regular post-operative care and follow-up consultations are fully integrated to ensure complete recovery." }
      ],
      bn: [
        { q: "অস্ত্রোপচারের জন্য কি হাসপাতালে ভর্তি থাকা বাধ্যতামূলক?", a: "টিম্পানোপ্লাস্টি এবং সেপ্টোপ্লাস্টির মতো অনেক সার্জারি ডে-কেয়ার হিসেবে করা হয়, যার ফলে রোগী একই দিনে বাড়ি ফিরতে পারেন।" },
        { q: "আপনারা কি অস্ত্রোপচার পরবর্তী পরামর্শ দিয়ে থাকেন?", a: "হ্যাঁ, সম্পূর্ণ সুস্থতা নিশ্চিত করতে নিয়মিত ফলো-আপ এবং পোস্ট-অপারেটিভ যত্নের সুবিধা আমাদের ক্লিনিকে রয়েছে।" }
      ]
    }
  }
];
