export interface GalleryItem {
  id: string;
  src: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  spanHomepage?: string;
  spanFullpage?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "reception",
    src: "/images/gallery/reception.webp",
    title: {
      en: "Reception & Waiting Lounge",
      bn: "অভ্যর্থনা ও ওয়েটিং লাউঞ্জ"
    },
    description: {
      en: "A warm, calming space designed to ease patient anxiety before consultations.",
      bn: "পরামর্শের আগে রোগীদের মানসিক স্বস্তি দেওয়ার জন্য পরিকল্পিত একটি শান্ত পরিবেশ।"
    },
    spanHomepage: "lg:col-span-8 lg:row-span-2",
    spanFullpage: "lg:col-span-8 lg:row-span-2"
  },
  {
    id: "consultation",
    src: "/images/gallery/doctors-chamber.webp",
    title: {
      en: "Doctor's Consultation Chamber",
      bn: "ডাক্তারের পরামর্শ কক্ষ"
    },
    description: {
      en: "The private room where Dr. Abhishek Ray conducts precise clinical examinations.",
      bn: "ব্যক্তিগত কক্ষ যেখানে ডাঃ অভিষেক রায় নিখুঁতভাবে রোগীদের পরীক্ষা করেন।"
    },
    spanHomepage: "lg:col-span-4 lg:row-span-1",
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "audiometry_booth",
    src: "/images/gallery/audiometry_booth.webp",
    title: {
      en: "Calibrated Audiometry Booth",
      bn: "ক্যালিব্রেটেড অডিওমেট্রি বুথ"
    },
    description: {
      en: "Double-walled soundproof chamber ensuring precision pure tone hearing assessments.",
      bn: "সদস্যদের সঠিক শ্রবণ পরীক্ষার জন্য শব্দরোধী ডাবল-ওয়ালড অডিওমেট্রি বুথ।"
    },
    spanHomepage: "lg:col-span-4 lg:row-span-1",
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "speech_therapy",
    src: "/images/gallery/speech-therapy-room.webp",
    title: {
      en: "Speech Therapy & Rehab",
      bn: "স্পিচ থেরাপি ও রিহ্যাবিলিটেশন"
    },
    description: {
      en: "Specially equipped therapeutic environment for children and adult speech sessions.",
      bn: "শিশু ও প্রাপ্তবয়স্কদের স্পিচ সেশনের জন্য বিশেষ থেরাপিউটিক স্পিচ থেরাপি কক্ষ।"
    },
    spanHomepage: "lg:col-span-4 lg:row-span-1",
    spanFullpage: "lg:col-span-4 lg:row-span-2"
  },
  {
    id: "clinic_close_up",
    src: "/images/gallery/close-up-shot.webp",
    title: {
      en: "The ENT Clinic, Silchar",
      bn: "দি ইএনটি ক্লিনিক, শিলচর"
    },
    description: {
      en: "A premier diagnostic and therapeutic institute dedicated to high-fidelity ear, nose, throat, and hearing care.",
      bn: "কান, নাক, গলা এবং শ্রবণ সংক্রান্ত উন্নত ও আধুনিক চিকিৎসার জন্য শিলচরের একটি নির্ভরযোগ্য প্রতিষ্ঠান।"
    },
    spanHomepage: "lg:col-span-4 lg:row-span-1",
    spanFullpage: "lg:col-span-8 lg:row-span-2"
  },
  {
    id: "exterior",
    src: "/images/gallery/exterior.webp",
    title: {
      en: "Clinic Building Exterior",
      bn: "ক্লিনিক ভবনের বহির্ভাগ"
    },
    description: {
      en: "Conveniently located facility on Ground Floor with excellent parking and regional access.",
      bn: "পার্কিং সুবিধা সহ গ্রাউন্ড ফ্লোরে অবস্থিত সহজে যাতায়াতযোগ্য ক্লিনিক ভবন।"
    },
    spanHomepage: "lg:col-span-4 lg:row-span-1",
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "entrance",
    src: "/images/gallery/entrance.webp",
    title: {
      en: "Main Clinic Entrance",
      bn: "ক্লিনিকের মূল প্রবেশদ্বার"
    },
    description: {
      en: "Welcoming entrance to the state-of-the-art ENT care institute in Silchar.",
      bn: "শিলচরের অত্যাধুনিক ইএনটি কেয়ার ইনস্টিটিউটের স্বাগত প্রবেশপথ।"
    },
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "audiometry_equipment",
    src: "/images/gallery/audiometry-equipment.webp",
    title: {
      en: "Advanced Audiology Equipment",
      bn: "উন্নত অডিওলজি সরঞ্জাম"
    },
    description: {
      en: "State-of-the-art diagnostic audiometers and tympanometers for middle ear analysis.",
      bn: "মধ্যকর্ণ পরীক্ষার জন্য অত্যাধুনিক ডায়াগনস্টিক অডিওমিটার ও টাইম্পানোমিটার।"
    },
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "audiometry_booth_2",
    src: "/images/gallery/audiometry_booth_2.webp",
    title: {
      en: "Clinical Testing Facility",
      bn: "ক্লিনিক্যাল টেস্টিং সুবিধা"
    },
    description: {
      en: "Sound-controlled diagnostic booth for clinical audiologist assessments.",
      bn: "অডিওলজিস্টদের সঠিক পরীক্ষা ও মূল্যায়নের জন্য শব্দ-নিয়ন্ত্রিত বুথ।"
    },
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "awards",
    src: "/images/gallery/awards-and-achievements.webp",
    title: {
      en: "Recognitions & Credentials",
      bn: "স্বীকৃতি ও যোগ্যতা"
    },
    description: {
      en: "Showcasing clinical certifications and awards reflecting decades of commitment.",
      bn: "ক্লিনিক্যাল শংসাপত্র এবং পুরষ্কার যা আমাদের বহু দশকের প্রতিশ্রুতির পরিচায়ক।"
    },
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "exterior_1",
    src: "/images/gallery/exterior_1.webp",
    title: {
      en: "Street-Side Profile",
      bn: "রাস্তা সংলগ্ন প্রোফাইল"
    },
    description: {
      en: "Easily visible landmark located on the prominent street of Silchar.",
      bn: "শিলচরের প্রধান রাস্তায় অবস্থিত সহজে চেনা যাওয়ার মতো ল্যান্ডমার্ক।"
    },
    spanFullpage: "lg:col-span-4 lg:row-span-1"
  }
];
