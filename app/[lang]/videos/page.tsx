import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import ClosingCTA from "@/components/editorial/ClosingCTA";
import VideoPlayerBlock from "@/components/editorial/VideoPlayerBlock";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({
    lang: lang as "en" | "bn",
    title: lang === "bn" ? "শিক্ষামূলক ভিডিও ও গাইড - দি ইএনটি ক্লিনিক" : "Educational Videos & Health Guides - The ENT Clinic",
    description: lang === "bn"
      ? "আপনার স্নায়বিক ও ইএনটি সুস্থতা বজায় রাখতে ডাঃ অভিষেক রায়ের তৈরি করা গুরুত্বপূর্ণ স্বাস্থ্য ব্যায়াম ও ক্লিনিকাল নির্দেশিকা।"
      : "Access medical tutorials, brain exercises, and clinical health tips shared by Dr. Abhishek Ray to support your neurological and ENT wellness.",
    path: "/videos",
  });
}

const translations = {
  en: {
    eyebrow: "Education Hub",
    title: "Clinical Video Guides",
    subtitle: "Dr. Abhishek Ray shares essential exercises, medical insights, and guidelines to help you maintain ear, nose, throat, and brain health.",
    back: "Back to Home",
    featuredTag: "Active Featured Guide",
    videoTitle: "Stop Doomscrolling: 1-Minute Brain Exercise",
    videoContext: "Instead of doomscrolling, take a quick hand exercise break to stimulate neural paths and prevent cognitive decline. These simple neuro-motor movements boost coordination and brain connectivity.",
    playLabel: "Play brain exercise video",
    upcoming: "Upcoming Video Series",
    comingSoon: "Coming Soon",
    tinnitusTitle: "Understanding Tinnitus: Causes & Relief",
    tinnitusDesc: "Learn how the brain processes ear ringing and explore modern habituation and sound therapies.",
    hygieneTitle: "Safe Ear Hygiene: The Gold Standards",
    hygieneDesc: "Dr. Ray explains why cotton buds are harmful and how ears naturally self-clean.",
    sleepTitle: "Snoring & Sleep Apnea: What to Look For",
    sleepDesc: "Recognize the signs of obstructive sleep apnea and discover modern non-invasive therapies."
  },
  bn: {
    eyebrow: "শিক্ষা হাব",
    title: "ক্লিনিকাল ভিডিও গাইড",
    subtitle: "আপনার কান, নাক, গলা এবং মস্তিষ্কের সুস্থতা বজায় রাখতে সাহায্য করার জন্য ডাঃ অভিষেক রায় গুরুত্বপূর্ণ ব্যায়াম ও পরামর্শ শেয়ার করেছেন।",
    back: "হোমে ফিরে যান",
    featuredTag: "সক্রিয় বিশেষ গাইড",
    videoTitle: "ডুমস্ক্রলিং বন্ধ করুন: ১ মিনিটের মস্তিষ্কের ব্যায়াম",
    videoContext: "ডুমস্ক্রলিং করার পরিবর্তে ডিমেনশিয়া প্রতিরোধ করতে একটি হাতের ব্যায়ামের বিরতি নিন। এই সহজ নিউরো-মোটর আন্দোলনগুলো মস্তিষ্কের সংযোগকে উদ্দীপিত করে এবং মনোযোগ বাড়ায়।",
    playLabel: "শিক্ষামূলক ভিডিও প্লে করুন",
    upcoming: "আসন্ন ভিডিও সিরিজ",
    comingSoon: "আসন্ন",
    tinnitusTitle: "টিনিটাস বোঝা: কারণ ও উপশম",
    tinnitusDesc: "মস্তিষ্ক কীভাবে কানের ভেতর ক্রমাগত শব্দ হওয়া প্রক্রিয়া করে এবং আধুনিক সাউন্ড থেরাপি সম্পর্কে জানুন।",
    hygieneTitle: "নিরাপদ কানের স্বাস্থ্যবিধি: সঠিক নিয়ম",
    hygieneDesc: "কটন বাড কেন ক্ষতিকর এবং কান প্রাকৃতিকভাবে কীভাবে পরিষ্কার হয় তা ডাঃ রায় ব্যাখ্যা করেছেন।",
    sleepTitle: "নাক ডাকা ও স্লিপ অ্যাপনিয়া: লক্ষণসমূহ",
    sleepDesc: "অবস্ট্রাকটিভ স্লিপ অ্যাপনিয়ার লক্ষণগুলো চিনুন এবং আধুনিক থেরাপি সম্পর্কে ধারণা নিন।"
  }
};

// Shorts shared on the clinic's YouTube channel.
// Add a new entry here to publish another guide on this page.
const clinicalGuides = [
  {
    videoId: "tz0iTniM9W8",
    serviceId: "otology-clinic",
    credit: "ENT Doctors – Dr BenZ",
    linkLabel: { en: "Explore the Otology Clinic", bn: "অটোলজি ক্লিনিক দেখুন" },
    en: {
      title: "Otosclerosis Explained: Why the Ear Bone Gets Stuck",
      context: "A quick animated look at how abnormal bone growth locks the stapes in the middle ear, causing gradual hearing loss — and why an early ENT check-up matters.",
      playLabel: "Play otosclerosis video",
      heading: "What Is Otosclerosis?",
      body: "In a healthy ear, the tiny stapes bone vibrates freely to carry sound to the inner ear. In otosclerosis, abnormal bone growth fixes the stapes in place, so sound can't pass through properly. The result is gradual hearing loss, often with ringing in the ears.",
      listTitle: "Common Signs",
      points: [
        "Hearing slowly getting worse in one or both ears",
        "Ringing or buzzing in the ears (tinnitus)",
        "Hearing better in noisy places",
      ],
      footer: "Otosclerosis can be treated with hearing aids or surgery. An early check-up matters.",
    },
    bn: {
      title: "অটোস্ক্লেরোসিস: কানের হাড় কেন আটকে যায়",
      context: "মধ্যকর্ণে অস্বাভাবিক হাড় বৃদ্ধি কীভাবে স্টেপিসকে আটকে দিয়ে ধীরে ধীরে শ্রবণশক্তি কমিয়ে দেয়, এবং কেন দ্রুত ইএনটি পরীক্ষা জরুরি — একটি সংক্ষিপ্ত অ্যানিমেটেড ব্যাখ্যা।",
      playLabel: "অটোস্ক্লেরোসিস ভিডিও প্লে করুন",
      heading: "অটোস্ক্লেরোসিস কী?",
      body: "সুস্থ কানে ছোট্ট স্টেপিস হাড়টি স্বাধীনভাবে কম্পিত হয়ে শব্দকে অন্তঃকর্ণে পৌঁছে দেয়। অটোস্ক্লেরোসিসে অস্বাভাবিক হাড় বৃদ্ধির ফলে স্টেপিস আটকে যায়, তাই শব্দ ঠিকমতো যেতে পারে না। এর ফলে ধীরে ধীরে শ্রবণশক্তি কমে যায়, প্রায়ই কানে শব্দ হওয়ার সঙ্গে।",
      listTitle: "সাধারণ লক্ষণ",
      points: [
        "এক বা দুই কানে ধীরে ধীরে শ্রবণশক্তি কমে যাওয়া",
        "কানে ভোঁ ভোঁ বা ঝিঁঝিঁ শব্দ (টিনিটাস)",
        "কোলাহলপূর্ণ জায়গায় তুলনামূলক ভালো শোনা",
      ],
      footer: "হিয়ারিং এইড বা অস্ত্রোপচারের মাধ্যমে অটোস্ক্লেরোসিসের চিকিৎসা সম্ভব। দ্রুত পরীক্ষা করানো জরুরি।",
    },
  },
  {
    videoId: "NErDakr1N7M",
    serviceId: "otology-clinic",
    credit: "ENT Doctors – Dr BenZ",
    linkLabel: { en: "Explore the Otology Clinic", bn: "অটোলজি ক্লিনিক দেখুন" },
    en: {
      title: "Inside the Cochlea: The Nerves That Let You Hear",
      context: "A close-up of the snail-shaped hearing organ in your inner ear and the nerve fibres that carry sound to the brain.",
      playLabel: "Play cochlea video",
      heading: "How the Cochlea Lets You Hear",
      body: "The cochlea is a tiny, snail-shaped organ inside your inner ear. Thousands of hair cells inside it turn sound vibrations into electrical signals, and the fibres of the cochlear (hearing) nerve carry those signals to the brain — that's how you hear.",
      listTitle: "When Hearing Aids Aren't Enough",
      points: [
        "Badly damaged hair cells can cause severe hearing loss",
        "A cochlear implant bypasses the damaged hair cells",
        "It stimulates the hearing nerve directly, helping many children and adults hear again",
      ],
      footer: "If a child or an elderly family member can't hear properly, consult an ENT specialist without delay.",
    },
    bn: {
      title: "ককলিয়ার ভেতরে: যে স্নায়ু আমাদের শুনতে সাহায্য করে",
      context: "অন্তঃকর্ণের শামুক-আকৃতির শ্রবণ অঙ্গ এবং যে স্নায়ুতন্তু শব্দকে মস্তিষ্কে পৌঁছে দেয় — তার একটি কাছ থেকে দেখা।",
      playLabel: "ককলিয়া ভিডিও প্লে করুন",
      heading: "ককলিয়া কীভাবে আমাদের শুনতে সাহায্য করে",
      body: "ককলিয়া হলো অন্তঃকর্ণের ভেতরে একটি ছোট, শামুক-আকৃতির অঙ্গ। এর ভেতরের হাজারো হেয়ার সেল শব্দের কম্পনকে বৈদ্যুতিক সংকেতে রূপান্তর করে, আর ককলিয়ার (শ্রবণ) স্নায়ুর তন্তুগুলো সেই সংকেত মস্তিষ্কে পৌঁছে দেয় — এভাবেই আমরা শুনি।",
      listTitle: "যখন হিয়ারিং এইড যথেষ্ট নয়",
      points: [
        "হেয়ার সেল গুরুতরভাবে ক্ষতিগ্রস্ত হলে মারাত্মক শ্রবণশক্তি হ্রাস হতে পারে",
        "ককলিয়ার ইমপ্লান্ট ক্ষতিগ্রস্ত হেয়ার সেলকে এড়িয়ে কাজ করে",
        "এটি সরাসরি শ্রবণ স্নায়ুকে উদ্দীপিত করে, অনেক শিশু ও প্রাপ্তবয়স্ককে আবার শুনতে সাহায্য করে",
      ],
      footer: "শিশু বা বয়স্ক – কেউ ঠিকমতো শুনতে না পেলে দেরি না করে ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
  {
    videoId: "oU_aEI4aPk8",
    serviceId: "vertigo-balance-clinic",
    credit: "Ujjwal Anatomy Guru",
    linkLabel: { en: "Explore the Vertigo & Balance Clinic", bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক দেখুন" },
    en: {
      title: "How Your Ear Keeps Your Eyes Steady: The Vestibulo-Ocular Reflex",
      context: "Why your vision doesn't shake when you walk or turn your head — a look at the inner-ear reflex that keeps your eyes steady.",
      playLabel: "Play balance system video",
      heading: "Your Inner Ear and Steady Vision",
      body: "Your inner ear has three semicircular canals that sense every head movement. They send signals through the vestibular nerve to the brainstem, which instantly tells your eye muscles to move the opposite way. This is the Vestibulo-Ocular Reflex (VOR), and it keeps your vision steady.",
      listTitle: "When the Balance System Is Disturbed",
      points: [
        "Dizziness or a spinning sensation (vertigo)",
        "Blurred or jumping vision when moving",
        "Feeling unsteady while walking",
      ],
      footer: "Inner ear problems such as BPPV, vestibular neuritis or Ménière's disease can disturb this system. If you have dizziness or balance problems, consult an ENT specialist.",
    },
    bn: {
      title: "কান কীভাবে চোখকে স্থির রাখে: ভেস্টিবুলো-অকুলার রিফ্লেক্স",
      context: "হাঁটার সময় বা মাথা ঘোরালে কেন দৃষ্টি কাঁপে না — অন্তঃকর্ণের যে রিফ্লেক্স চোখকে স্থির রাখে, তার একটি ব্যাখ্যা।",
      playLabel: "ভারসাম্য ব্যবস্থার ভিডিও প্লে করুন",
      heading: "অন্তঃকর্ণ ও স্থির দৃষ্টি",
      body: "অন্তঃকর্ণে তিনটি অর্ধবৃত্তাকার নালী মাথার প্রতিটি নড়াচড়া টের পায়। এগুলো ভেস্টিবুলার স্নায়ুর মাধ্যমে ব্রেনস্টেমে সংকেত পাঠায়, যা সঙ্গে সঙ্গে চোখের পেশিকে বিপরীত দিকে নড়তে নির্দেশ দেয়। একে ভেস্টিবুলো-অকুলার রিফ্লেক্স (VOR) বলে, যা দৃষ্টিকে স্থির রাখে।",
      listTitle: "ভারসাম্য ব্যবস্থা বিঘ্নিত হলে",
      points: [
        "মাথা ঘোরা বা চারপাশ ঘুরছে মনে হওয়া (ভার্টিগো)",
        "নড়াচড়ার সময় ঝাপসা বা লাফানো দৃষ্টি",
        "হাঁটার সময় অস্থির বা টলমল লাগা",
      ],
      footer: "BPPV, ভেস্টিবুলার নিউরাইটিস বা মেনিয়ার্স রোগের মতো অন্তঃকর্ণের সমস্যা এই ব্যবস্থাকে বিঘ্নিত করতে পারে। মাথা ঘোরা বা ভারসাম্যের সমস্যা হলে ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
  {
    videoId: "tOROz7qZWFc",
    serviceId: "vertigo-balance-clinic",
    credit: "ENT Doctors – Dr BenZ",
    linkLabel: { en: "Explore the Vertigo & Balance Clinic", bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক দেখুন" },
    en: {
      title: "How Your Inner Ear Senses Head Rotation: The Crista Ampullaris",
      context: "How your body knows when your head turns — a look at the tiny motion sensor inside each semicircular canal.",
      playLabel: "Play head rotation video",
      heading: "The Inner Ear's Rotation Sensor",
      body: "Inside each semicircular canal of your inner ear is a tiny sensor called the crista ampullaris. When you turn your head, the fluid inside the canal (endolymph) lags behind and pushes a jelly-like cap called the cupula. The bending activates sensitive hair cells, and the vestibular nerve sends the signal to your brain — this is how you sense rotation and stay balanced.",
      listTitle: "What Can Disturb It",
      points: [
        "Loose ear crystals (BPPV)",
        "Inner ear infection",
        "Inflammation of the balance system",
      ],
      footer: "Any of these can cause sudden spinning dizziness (vertigo). If you have sudden dizziness or lose your balance, consult an ENT specialist.",
    },
    bn: {
      title: "অন্তঃকর্ণ কীভাবে মাথা ঘোরানো টের পায়: ক্রিস্টা অ্যাম্পুলারিস",
      context: "মাথা ঘোরালে শরীর কীভাবে তা বুঝতে পারে — প্রতিটি অর্ধবৃত্তাকার নালীর ভেতরের ছোট্ট গতি-সেন্সরের একটি ব্যাখ্যা।",
      playLabel: "মাথা ঘোরানোর ভিডিও প্লে করুন",
      heading: "অন্তঃকর্ণের ঘূর্ণন সেন্সর",
      body: "অন্তঃকর্ণের প্রতিটি অর্ধবৃত্তাকার নালীর ভেতরে ক্রিস্টা অ্যাম্পুলারিস নামে একটি ছোট্ট সেন্সর থাকে। মাথা ঘোরালে নালীর ভেতরের তরল (এন্ডোলিম্ফ) পিছিয়ে পড়ে এবং কিউপুলা নামের জেলির মতো একটি আবরণকে ঠেলে দেয়। এই বাঁকানোর ফলে সংবেদনশীল হেয়ার সেল সক্রিয় হয়, আর ভেস্টিবুলার স্নায়ু সংকেতটি মস্তিষ্কে পাঠায় — এভাবেই আমরা ঘূর্ণন টের পাই এবং ভারসাম্য বজায় রাখি।",
      listTitle: "যা এটিকে বিঘ্নিত করতে পারে",
      points: [
        "কানের আলগা ক্রিস্টাল (BPPV)",
        "অন্তঃকর্ণের সংক্রমণ",
        "ভারসাম্য ব্যবস্থার প্রদাহ",
      ],
      footer: "এগুলোর যেকোনোটি হঠাৎ মাথা ঘোরা (ভার্টিগো) ঘটাতে পারে। হঠাৎ মাথা ঘোরা বা ভারসাম্য হারানোর সমস্যা হলে ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
  {
    videoId: "vVQCQtn0oBc",
    serviceId: "vertigo-balance-clinic",
    credit: "ENT Doctors – Dr BenZ",
    linkLabel: { en: "Explore the Vertigo & Balance Clinic", bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক দেখুন" },
    en: {
      title: "Vertigo: How Your Balance System Works, from Inner Ear to Brain",
      context: "Why you feel dizzy or like the room is spinning — an overview of the whole balance system, from the inner ear sensors to the brain.",
      playLabel: "Play balance system overview video",
      heading: "How Your Balance System Works",
      body: "Your inner ear has two types of balance sensors: the semicircular canals, which sense head rotation, and the otolith organs, which sense straight-line movement and gravity. They send signals through the vestibular nerve to the brainstem, which passes them along four pathways.",
      listTitle: "The Four Balance Pathways",
      points: [
        "Vestibulo-ocular — keeps your vision steady",
        "Vestibulo-spinal — controls posture and balance",
        "Vestibulo-cerebellar — fine-tunes coordination",
        "Vestibulo-cortical — gives you the feeling of motion",
      ],
      footer: "When any part of this system is disturbed, the brain gets mixed signals, and the result is vertigo, dizziness or unsteadiness. If you have dizziness, blurred vision or trouble keeping your balance while walking, consult an ENT specialist.",
    },
    bn: {
      title: "ভার্টিগো: অন্তঃকর্ণ থেকে মস্তিষ্ক পর্যন্ত ভারসাম্য ব্যবস্থা কীভাবে কাজ করে",
      context: "কেন মাথা ঘোরে বা মনে হয় ঘর ঘুরছে — অন্তঃকর্ণের সেন্সর থেকে মস্তিষ্ক পর্যন্ত পুরো ভারসাম্য ব্যবস্থার একটি পরিচিতি।",
      playLabel: "ভারসাম্য ব্যবস্থার পরিচিতি ভিডিও প্লে করুন",
      heading: "ভারসাম্য ব্যবস্থা কীভাবে কাজ করে",
      body: "অন্তঃকর্ণে দুই ধরনের ভারসাম্য সেন্সর আছে: অর্ধবৃত্তাকার নালী, যা মাথার ঘূর্ণন টের পায়, এবং অটোলিথ অঙ্গ, যা সোজা পথে চলা ও মাধ্যাকর্ষণ টের পায়। এগুলো ভেস্টিবুলার স্নায়ুর মাধ্যমে ব্রেনস্টেমে সংকেত পাঠায়, যা সেগুলোকে চারটি পথে এগিয়ে দেয়।",
      listTitle: "ভারসাম্যের চারটি পথ",
      points: [
        "ভেস্টিবুলো-অকুলার — দৃষ্টি স্থির রাখে",
        "ভেস্টিবুলো-স্পাইনাল — দেহভঙ্গি ও ভারসাম্য নিয়ন্ত্রণ করে",
        "ভেস্টিবুলো-সেরিবেলার — সমন্বয় সূক্ষ্মভাবে ঠিক রাখে",
        "ভেস্টিবুলো-কর্টিকাল — নড়াচড়ার অনুভূতি দেয়",
      ],
      footer: "এই ব্যবস্থার যেকোনো অংশ বিঘ্নিত হলে মস্তিষ্ক মিশ্র সংকেত পায়, ফলে ভার্টিগো, মাথা ঘোরা বা অস্থিরতা দেখা দেয়। মাথা ঘোরা, চোখে ঝাপসা দেখা বা হাঁটতে ভারসাম্য হারালে ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
  {
    videoId: "q92l8IOwh2g",
    serviceId: "vertigo-balance-clinic",
    credit: "ENT Doctors – Dr BenZ",
    linkLabel: { en: "Explore the Vertigo & Balance Clinic", bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক দেখুন" },
    en: {
      title: "How Your Ear Senses Gravity & Head Tilt: Otoliths Explained",
      context: "How your brain knows your head is tilted, even with your eyes closed — a look at the tiny crystals in your inner ear that sense gravity.",
      playLabel: "Play otoliths video",
      heading: "The Ear Stones That Sense Gravity",
      body: "Inside your inner ear are two small sensors called the utricle and saccule. Each has a patch called the macula, covered with a jelly-like layer holding tiny calcium crystals called otoliths (“ear stones”). This system senses head position and straight-line movement, known as static equilibrium.",
      listTitle: "When You Tilt Your Head",
      points: [
        "Gravity pulls the otoliths",
        "The jelly layer shifts",
        "Hair cells underneath bend",
        "The vestibular nerve tells your brain your head's position",
      ],
      footer: "If these crystals come loose and drift into the wrong part of the ear, they can cause BPPV, one of the most common causes of sudden spinning dizziness when you turn in bed or look up. BPPV is treatable; consult an ENT specialist.",
    },
    bn: {
      title: "কান কীভাবে মাধ্যাকর্ষণ ও মাথা হেলানো টের পায়: অটোলিথ",
      context: "চোখ বন্ধ থাকলেও মস্তিষ্ক কীভাবে বোঝে মাথা হেলে আছে — অন্তঃকর্ণের যে ছোট্ট ক্রিস্টালগুলো মাধ্যাকর্ষণ টের পায়, তার একটি ব্যাখ্যা।",
      playLabel: "অটোলিথ ভিডিও প্লে করুন",
      heading: "মাধ্যাকর্ষণ টের পাওয়া কানের পাথর",
      body: "অন্তঃকর্ণে ইউট্রিকল ও স্যাকিউল নামে দুটি ছোট সেন্সর আছে। প্রতিটিতে ম্যাকুলা নামে একটি অংশ থাকে, যা জেলির মতো একটি স্তরে ঢাকা, আর সেই স্তরে থাকে অটোলিথ (“কানের পাথর”) নামের ছোট্ট ক্যালসিয়াম ক্রিস্টাল। এই ব্যবস্থা মাথার অবস্থান ও সোজা পথে চলা টের পায়, যাকে স্ট্যাটিক ইকুইলিব্রিয়াম বলে।",
      listTitle: "মাথা হেলালে যা ঘটে",
      points: [
        "মাধ্যাকর্ষণ অটোলিথকে টানে",
        "জেলির স্তরটি সরে যায়",
        "নিচের হেয়ার সেলগুলো বেঁকে যায়",
        "ভেস্টিবুলার স্নায়ু মস্তিষ্ককে মাথার অবস্থান জানায়",
      ],
      footer: "এই ক্রিস্টালগুলো আলগা হয়ে কানের ভুল অংশে চলে গেলে BPPV হতে পারে — বিছানায় পাশ ফিরলে বা উপরে তাকালে হঠাৎ মাথা ঘোরার অন্যতম সাধারণ কারণ। BPPV-র চিকিৎসা সম্ভব; ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
  {
    videoId: "byXr8droDso",
    serviceId: "otology-clinic",
    linkLabel: { en: "Explore the Otology Clinic", bn: "অটোলজি ক্লিনিক দেখুন" },
    en: {
      title: "CT Scan of the Ear in 3D: See the Ear Bones & Cochlea",
      context: "What the inside of your ear looks like on a CT scan — a normal image of the right ear turned into a 3D model.",
      playLabel: "Play ear CT scan video",
      heading: "Seeing Inside the Ear with a CT Scan",
      body: "ENT doctors use CT scans of the ear (temporal bone) to look for problems such as chronic ear infections, cholesteatoma and damage to the ear bones, and to plan surgeries like cochlear implants.",
      listTitle: "What the 3D Model Shows",
      points: [
        "The ear bones (ossicles) — the smallest bones in your body, which carry sound",
        "The cochlea — the snail-shaped hearing organ",
        "The semicircular canals — your balance sensors",
      ],
      footer: "Long-standing ear problems, pus discharge from the ear or reduced hearing? Consult an ENT specialist for the right tests and treatment.",
    },
    bn: {
      title: "কানের সিটি স্ক্যান থ্রিডি-তে: কানের হাড় ও ককলিয়া দেখুন",
      context: "সিটি স্ক্যানে কানের ভেতরটা কেমন দেখায় — ডান কানের একটি স্বাভাবিক ছবিকে থ্রিডি মডেলে রূপান্তর।",
      playLabel: "কানের সিটি স্ক্যান ভিডিও প্লে করুন",
      heading: "সিটি স্ক্যানে কানের ভেতর দেখা",
      body: "দীর্ঘস্থায়ী কানের সংক্রমণ, কোলেস্টিয়াটোমা ও কানের হাড়ের ক্ষতির মতো সমস্যা খুঁজতে এবং ককলিয়ার ইমপ্লান্টের মতো অস্ত্রোপচারের পরিকল্পনা করতে ইএনটি চিকিৎসকেরা কানের (টেম্পোরাল বোন) সিটি স্ক্যান ব্যবহার করেন।",
      listTitle: "থ্রিডি মডেলে যা দেখা যায়",
      points: [
        "কানের হাড় (অসিকল) — শরীরের সবচেয়ে ছোট হাড়, যা শব্দ বহন করে",
        "ককলিয়া — শামুক-আকৃতির শ্রবণ অঙ্গ",
        "অর্ধবৃত্তাকার নালী — ভারসাম্যের সেন্সর",
      ],
      footer: "কানের পুরনো সমস্যা, কান দিয়ে পুঁজ পড়া বা কম শোনা? সঠিক পরীক্ষা ও চিকিৎসার জন্য ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
  {
    videoId: "pTanBTeFL68",
    serviceId: "vertigo-balance-clinic",
    credit: "ENT Doctors – Dr BenZ",
    linkLabel: { en: "Explore the Vertigo & Balance Clinic", bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক দেখুন" },
    en: {
      title: "Why Water in Your Ear Can Make You Dizzy: The Caloric Effect",
      context: "Ever felt dizzy after cold water got into your ear while swimming or bathing? Here's why it happens.",
      playLabel: "Play caloric effect video",
      heading: "How Water Tricks Your Balance Sensors",
      body: "When cold (or warm) water enters the ear canal, it changes the temperature of the fluid inside your inner ear's balance canals. The fluid starts to move, tricking your balance sensors into thinking your head is spinning. ENT doctors use this same effect in the “caloric test” to check how well each inner ear's balance system is working.",
      listTitle: "What Happens Next",
      points: [
        "The inner ear sends signals through the vestibular nerve to the brainstem",
        "The brainstem makes your eyes move involuntarily (nystagmus)",
        "You feel dizzy, even though you're not moving",
      ],
      footer: "If you have a hole in your eardrum, water can reach the middle ear more easily and cause dizziness or infection, so take care while bathing and swimming. If water in the ear brings dizziness, ear pain or pus discharge, consult an ENT specialist without delay.",
    },
    bn: {
      title: "কানে জল ঢুকলে কেন মাথা ঘোরে: ক্যালোরিক এফেক্ট",
      context: "সাঁতার কাটা বা স্নানের সময় কানে ঠান্ডা জল ঢুকে কখনো মাথা ঘুরেছে? কেন এমন হয়, জেনে নিন।",
      playLabel: "ক্যালোরিক এফেক্ট ভিডিও প্লে করুন",
      heading: "জল যেভাবে ভারসাম্য সেন্সরকে বিভ্রান্ত করে",
      body: "কানের নালীতে ঠান্ডা (বা গরম) জল ঢুকলে অন্তঃকর্ণের ভারসাম্য নালীর ভেতরের তরলের তাপমাত্রা বদলে যায়। তরলটি নড়তে শুরু করে, ফলে ভারসাম্য সেন্সর ভুল করে মনে করে মাথা ঘুরছে। প্রতিটি অন্তঃকর্ণের ভারসাম্য ব্যবস্থা কতটা ভালো কাজ করছে তা পরীক্ষা করতে ইএনটি চিকিৎসকেরা এই একই প্রভাব “ক্যালোরিক টেস্ট”-এ ব্যবহার করেন।",
      listTitle: "এরপর যা ঘটে",
      points: [
        "অন্তঃকর্ণ ভেস্টিবুলার স্নায়ুর মাধ্যমে ব্রেনস্টেমে সংকেত পাঠায়",
        "ব্রেনস্টেম চোখকে অনিচ্ছাকৃতভাবে নড়ায় (নিস্ট্যাগমাস)",
        "আপনি না নড়লেও মাথা ঘোরে",
      ],
      footer: "কানের পর্দায় ফুটো থাকলে জল সহজে মধ্যকর্ণে পৌঁছে মাথা ঘোরা বা সংক্রমণ ঘটাতে পারে, তাই স্নান ও সাঁতারের সময় সাবধান থাকুন। কানে জল ঢুকলে মাথা ঘোরা, কান ব্যথা বা কান দিয়ে পুঁজ পড়লে দেরি না করে ইএনটি বিশেষজ্ঞের পরামর্শ নিন।",
    },
  },
];

export default async function VideosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";
  const content = translations[lang as "en" | "bn"] || translations.en;

  const videoId = "qIOWrB3A5gI";

  return (
    <main className="flex-1 overflow-x-hidden pt-24 md:pt-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 pb-24">
        
        {/* Breadcrumb Back Link */}
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-forest hover:text-forest-soft transition-colors mb-8 text-xs font-semibold tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.back}
        </Link>

        {/* Page Hero Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-semibold block">
            {content.eyebrow}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-forest font-light leading-tight">
            {content.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed font-light">
            {content.subtitle}
          </p>
        </div>

        {/* Dynamic 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Active Video Block */}
          <div className="lg:col-span-6">
            <VideoPlayerBlock
              videoId={videoId}
              title={content.videoTitle}
              context={content.videoContext}
              playLabel={content.playLabel}
            />
          </div>

          {/* Right Column: Hand Exercise Instructions & Benefits */}
          <div className="lg:col-span-6 space-y-8 bg-paper-warm border border-hairline rounded-sm p-8 shadow-xl">
            <h2 className="text-2xl font-serif text-forest border-b border-hairline pb-4">
              {isEn ? "How Hand Exercises Prevent Dementia" : "যেভাবে হাতের ব্যায়াম ডিমেনশিয়া প্রতিরোধ করে"}
            </h2>

            <div className="space-y-6">
              <p className="text-sm text-ink-soft leading-relaxed font-light">
                {isEn 
                  ? "Bimanual and complex finger-coordination exercises activate motor regions of the frontal cortex and stimulate neuroplasticity. Clinical research suggests that brief cognitive-motor breaks reduce stress, interrupt automatic doomscrolling, and build synaptic resilience."
                  : "দ্বি-হস্ত এবং জটিল আঙুল-সমন্বয় ব্যায়ামগুলো ফ্রন্টাল কর্টেক্সের মোটর অঞ্চলগুলোকে সক্রিয় করে এবং নিউরোপ্লাস্টিসিটিকে উদ্দীপিত করে। ক্লিনিকাল গবেষণায় দেখা গেছে যে ছোট বিরতি মানসিক চাপ কমায়, স্বয়ংক্রিয় ডুমস্ক্রলিং বন্ধ করে এবং সিনাপটিক স্থিতিস্থাপকতা তৈরি করে।"}
              </p>

              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest font-bold text-gold">
                  {isEn ? "Step-by-Step Coordination Drill" : "ধাপে ধাপে সমন্বয় ব্যায়াম"}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-forest font-serif block">{isEn ? "Finger Opposition (Thumb Taps)" : "আঙুলের স্পর্শ (বুড়ো আঙুলের সাথে)"}</strong>
                      <span className="text-xs text-ink-soft leading-relaxed font-light block mt-1">
                        {isEn 
                          ? "Touch each finger of your hand to your thumb sequentially (Index, Middle, Ring, Pinky), then go backward. Repeat with both hands simultaneously."
                          : "পর্যায়ক্রমে আপনার প্রতিটি আঙুল দিয়ে বুড়ো আঙুল স্পর্শ করুন (তর্জনি, মধ্যমা, অনামিকা, কনিষ্ঠা) এবং আবার উল্টো পথে ফিরে আসুন। দুই হাতেই এটি একসাথে করুন।"}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-forest font-serif block">{isEn ? "Finger Tapping Sequence" : "আঙুল টোকার পর্যায়ক্রম"}</strong>
                      <span className="text-xs text-ink-soft leading-relaxed font-light block mt-1">
                        {isEn 
                          ? "Place both hands flat on a table. Lift each finger one by one, starting from the pinky to the thumb. Alternate between hands to stimulate motor pathways."
                          : "একটি টেবিলের উপর দুই হাত ফ্ল্যাট রাখুন। কনিষ্ঠা থেকে শুরু করে বুড়ো আঙুল পর্যন্ত প্রতিটি আঙুল একে একে ওপরের দিকে তুলুন। দুই হাতের মধ্যে পর্যায়ক্রমে করুন।"}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-forest font-serif block">{isEn ? "Alternating Fist and Palm" : "মুষ্টি এবং তালু পরিবর্তন"}</strong>
                      <span className="text-xs text-ink-soft leading-relaxed font-light block mt-1">
                        {isEn 
                          ? "Make a fist with one hand while keeping the other flat. Alternating rapidly between making a fist and keeping the hand flat."
                          : "এক হাত দিয়ে মুষ্টি তৈরি করুন এবং অন্য হাত ফ্ল্যাট রাখুন। দ্রুত মুষ্টি তৈরি করা এবং ফ্ল্যাট রাখার মধ্যে পরিবর্তন করুন।"}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Clinical Guides */}
        {clinicalGuides.map((guide) => {
          const g = isEn ? guide.en : guide.bn;
          return (
            <div
              key={guide.videoId}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-hairline"
            >
              {/* Left Column: Video Block */}
              <div className="lg:col-span-6">
                <VideoPlayerBlock
                  videoId={guide.videoId}
                  title={g.title}
                  context={g.context}
                  playLabel={g.playLabel}
                />
              </div>

              {/* Right Column: Explanation */}
              <div className="lg:col-span-6 space-y-8 bg-paper-warm border border-hairline rounded-sm p-8 shadow-xl">
                <h2 className="text-2xl font-serif text-forest border-b border-hairline pb-4">
                  {g.heading}
                </h2>

                <div className="space-y-6">
                  <p className="text-sm text-ink-soft leading-relaxed font-light">{g.body}</p>

                  <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-gold">
                      {g.listTitle}
                    </h3>

                    <ul className="space-y-4">
                      {g.points.map((point, i) => (
                        <li key={i} className="flex gap-4 items-start text-sm">
                          <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <span className="text-ink-soft leading-relaxed font-light">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-ink-soft leading-relaxed font-light">{g.footer}</p>

                  <Link
                    href={`/${lang}/services/${guide.serviceId}`}
                    className="inline-flex items-center gap-2 text-forest hover:text-forest-soft transition-colors text-xs font-semibold tracking-widest uppercase"
                  >
                    {isEn ? guide.linkLabel.en : guide.linkLabel.bn}
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>

                  <p className="text-xs text-ink-soft/70 leading-relaxed font-light border-t border-hairline pt-4">
                    {guide.credit && (isEn ? `Video credit: ${guide.credit}. ` : `ভিডিও সৌজন্যে: ${guide.credit}। `)}
                    {isEn
                      ? "For educational purposes only; not a substitute for medical advice."
                      : "শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে; চিকিৎসা পরামর্শের বিকল্প নয়।"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      <ClosingCTA lang={lang} />
    </main>
  );
}
