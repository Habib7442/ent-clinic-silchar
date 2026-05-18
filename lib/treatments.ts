export interface Treatment {
  slug: string;
  category: "ear" | "nose" | "throat";
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  image: string;
  detailedDescEn: string;
  detailedDescBn: string;
  faqsEn: { q: string; a: string }[];
  faqsBn: { q: string; a: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "tympanoplasty",
    category: "ear",
    titleEn: "Tympanoplasty",
    titleBn: "টিম্পানোপ্লাস্টি",
    descEn: "Surgery for hearing loss reversal due to perforated eardrum.",
    descBn: "কানের পর্দা ছিঁড়ে যাওয়ার কারণে শ্রবণশক্তি হ্রাসের জন্য অস্ত্রোপচার।",
    image: "/images/ear_treatment.png",
    detailedDescEn: "Tympanoplasty is a surgical procedure performed to repair a hole in the eardrum. It helps restore hearing and prevents recurrent ear infections. The surgery utilizes a graft, usually taken from your own tissues, to close the perforation securely.",
    detailedDescBn: "টিম্পানোপ্লাস্টি হলো কানের পর্দার ছিদ্র মেরামতের একটি অস্ত্রোপচার। এটি শ্রবণশক্তি ফিরে পেতে সাহায্য করে এবং বারবার কানের সংক্রমণ রোধ করে। অস্ত্রোপচারে সাধারণত আপনার নিজের টিস্যু থেকে নেওয়া গ্রাফ্ট ব্যবহার করা হয়।",
    faqsEn: [
      { q: "Is the surgery painful?", a: "The procedure is performed under anesthesia, so you won't feel pain during the surgery. Post-operative discomfort is usually mild and manageable with medication." },
      { q: "How long is the recovery time?", a: "Most patients recover within a few weeks, but complete healing of the eardrum may take a couple of months." }
    ],
    faqsBn: [
      { q: "অস্ত্রোপচার কি বেদনাদায়ক?", a: "অস্ত্রোপচারটি অ্যানেস্থেসিয়ার অধীনে করা হয়, তাই আপনি কোন ব্যথা অনুভব করবেন না। অস্ত্রোপচারের পরে অস্বস্তি সাধারণত হালকা হয়।" },
      { q: "সুস্থ হতে কত সময় লাগে?", a: "অধিকাংশ রোগী কয়েক সপ্তাহের মধ্যে সুস্থ হয়ে ওঠেন, তবে কানের পর্দা সম্পূর্ণ নিরাময় হতে কয়েক মাস সময় লাগতে পারে।" }
    ]
  },
  {
    slug: "fess-surgery",
    category: "nose",
    titleEn: "FESS Surgery",
    titleBn: "ফেস (FESS) সার্জারি",
    descEn: "Functional Endoscopic Sinus Surgery for chronic sinusitis.",
    descBn: "ক্রনিক সাইনোসাইটিসের জন্য ফাংশনাল এন্ডোস্কোপিক সাইনাস সার্জারি।",
    image: "/images/nose_treatment.png",
    detailedDescEn: "Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure used to treat chronic sinus infections. By using an endoscope, the surgeon widens the sinus drainage pathways, restoring normal function without external incisions.",
    detailedDescBn: "ফাংশনাল এন্ডোস্কোপিক সাইনাস সার্জারি (FESS) একটি ন্যূনতম আক্রমণাত্মক পদ্ধতি যা ক্রনিক সাইনাস সংক্রমণের চিকিৎসায় ব্যবহৃত হয়। সার্জন এন্ডোস্কোপ ব্যবহার করে সাইনাস নিষ্কাশনের পথগুলি প্রশস্ত করেন।",
    faqsEn: [
      { q: "Will I have scars after FESS?", a: "No, FESS is performed entirely through the nostrils using an endoscope, so there are no external scars." },
      { q: "How quickly can I return to work?", a: "Most patients can return to work within 1 to 2 weeks, depending on the physical demands of their job." }
    ],
    faqsBn: [
      { q: "অস্ত্রোপচারের পরে কি দাগ থাকবে?", a: "না, এই অস্ত্রোপচারটি এন্ডোস্কোপ ব্যবহার করে নাকের ভিতর দিয়ে করা হয়, তাই কোন বাহ্যিক দাগ থাকে না।" },
      { q: "আমি কত তাড়াতাড়ি কাজে ফিরতে পারি?", a: "বেশিরভাগ রোগী ১ থেকে ২ সপ্তাহের মধ্যে কাজে ফিরে যেতে পারেন।" }
    ]
  },
  {
    slug: "tonsillectomy",
    category: "throat",
    titleEn: "Tonsillectomy",
    titleBn: "টনসিলেক্টমি",
    descEn: "Surgical removal of infected or inflamed tonsils.",
    descBn: "সংক্রমিত বা প্রদাহযুক্ত টনসিল অস্ত্রোপচারের মাধ্যমে অপসারণ।",
    image: "/images/throat_treatment.png",
    detailedDescEn: "Tonsillectomy is the surgical removal of the tonsils, two oval-shaped pads of tissue at the back of the throat. It is commonly performed to treat recurrent tonsillitis or sleep apnea caused by enlarged tonsils.",
    detailedDescBn: "টনসিলেক্টমি হলো গলার পিছনে থাকা টনসিল অপসারণের একটি অস্ত্রোপচার। এটি সাধারণত বারবার টনসিলাইটিস বা বর্ধিত টনসিলের কারণে হওয়া স্লিপ অ্যাপনিয়ার চিকিৎসায় ব্যবহৃত হয়।",
    faqsEn: [
      { q: "At what age is tonsillectomy usually done?", a: "It can be performed at any age, though it is very common in children experiencing recurrent throat infections or sleep-disordered breathing." },
      { q: "What can I eat after the surgery?", a: "Soft, cool foods like ice cream, yogurt, and pudding are recommended initially. Avoid spicy, rough, or acidic foods." }
    ],
    faqsBn: [
      { q: "টনসিলেক্টমি সাধারণত কোন বয়সে করা হয়?", a: "এটি যে কোনো বয়সে করা যেতে পারে, তবে শিশুদের ক্ষেত্রে এটি খুব সাধারণ।" },
      { q: "অস্ত্রোপচারের পরে আমি কী খেতে পারি?", a: "প্রাথমিকভাবে আইসক্রিম, দইয়ের মতো নরম, ঠাণ্ডা খাবারের পরামর্শ দেওয়া হয়।" }
    ]
  },
  {
    slug: "septoplasty",
    category: "nose",
    titleEn: "Septoplasty",
    titleBn: "সেপ্টোপ্লাস্টি",
    descEn: "Surgical procedure to straighten a deviated nasal septum.",
    descBn: "নাকের বাঁকা হাড় সোজা করার অস্ত্রোপচার পদ্ধতি।",
    image: "/images/nose_treatment.png",
    detailedDescEn: "Septoplasty straightens a deviated nasal septum (the wall dividing the nasal cavity). A deviated septum can obstruct breathing and contribute to sinus issues. The surgery improves airflow and overall quality of life.",
    detailedDescBn: "সেপ্টোপ্লাস্টি নাকের বাঁকা সেপ্টামকে সোজা করে। একটি বাঁকা সেপ্টাম শ্বাসকষ্ট সৃষ্টি করতে পারে এবং সাইনাসের সমস্যা বাড়াতে পারে। এই অস্ত্রোপচার বায়ুপ্রবাহ উন্নত করে।",
    faqsEn: [
      { q: "Will septoplasty change the shape of my nose?", a: "Generally, no. Septoplasty corrects the internal structure to improve breathing. If external cosmetic changes are desired, it can be combined with rhinoplasty." },
      { q: "Is the procedure done under general anesthesia?", a: "Yes, septoplasty is typically performed under general anesthesia to ensure your comfort." }
    ],
    faqsBn: [
      { q: "সেপ্টোপ্লাস্টি কি আমার নাকের আকার পরিবর্তন করবে?", a: "সাধারণত না। এটি শ্বাসযন্ত্রের উন্নতির জন্য অভ্যন্তরীণ কাঠামো সংশোধন করে।" },
      { q: "পদ্ধতিটি কি সাধারণ অ্যানেস্থেসিয়ার অধীনে করা হয়?", a: "হ্যাঁ, আপনার আরাম নিশ্চিত করতে সাধারণত সাধারণ অ্যানেস্থেসিয়ার অধীনে সেপ্টোপ্লাস্টি করা হয়।" }
    ]
  },
  {
    slug: "adenoidectomy",
    category: "throat",
    titleEn: "Adenoidectomy",
    titleBn: "অ্যাডেনয়েক্টমি",
    descEn: "Removal of infected or inflamed adenoid glands.",
    descBn: "সংক্রমিত বা প্রদাহযুক্ত অ্যাডেনয়েড গ্রন্থি অপসারণ।",
    image: "/images/throat_treatment.png",
    detailedDescEn: "Adenoidectomy removes the adenoid glands situated high in the throat behind the nose. Enlarged adenoids can cause breathing problems, chronic ear infections, and snoring, particularly in children.",
    detailedDescBn: "অ্যাডেনয়েক্টমি নাকের পিছনে গলায় অবস্থিত অ্যাডেনয়েড গ্রন্থিগুলি অপসারণ করে। বর্ধিত অ্যাডেনয়েডগুলি শিশুদের শ্বাসকষ্ট, কানের সংক্রমণ এবং নাক ডাকার কারণ হতে পারে।",
    faqsEn: [
      { q: "Are adenoids necessary?", a: "While they help fight infection early in life, removing enlarged adenoids that cause breathing or ear problems does not compromise the immune system." },
      { q: "Is it an outpatient procedure?", a: "Yes, adenoidectomy is usually performed as an outpatient procedure, allowing patients to go home the same day." }
    ],
    faqsBn: [
      { q: "অ্যাডেনয়েড কি প্রয়োজনীয়?", a: "যদিও তারা জীবনের প্রথম দিকে সংক্রমণের বিরুদ্ধে লড়াই করতে সহায়তা করে, সমস্যা সৃষ্টিকারী অ্যাডেনয়েডগুলি অপসারণ করলে ইমিউন সিস্টেমের কোনও ক্ষতি হয় না।" },
      { q: "রোগী কি একই দিনে বাড়ি যেতে পারেন?", a: "হ্যাঁ, এটি সাধারণত আউটপেশেন্ট পদ্ধতি হিসেবে করা হয়, যার ফলে রোগীরা একই দিনে বাড়ি যেতে পারেন।" }
    ]
  },
  {
    slug: "mastoidectomy",
    category: "ear",
    titleEn: "Mastoidectomy",
    titleBn: "মাস্টয়ডেক্টমি",
    descEn: "Surgery to remove diseased mastoid air cells.",
    descBn: "রোগাক্রান্ত মাস্টয়েড এয়ার কোষ অপসারণের অস্ত্রোপচার।",
    image: "/images/ear_treatment.png",
    detailedDescEn: "Mastoidectomy removes diseased mastoid air cells sitting behind the ear in the skull. This is typically done to treat chronic ear infections that have spread into the skull bone and don't respond to antibiotics.",
    detailedDescBn: "মাস্টয়ডেক্টমি কানের পিছনে মাথার খুলিতে থাকা রোগাক্রান্ত মাস্টয়েড এয়ার কোষগুলিকে অপসারণ করে। এটি সাধারণত ক্রনিক কানের সংক্রমণের চিকিৎসায় করা হয়।",
    faqsEn: [
      { q: "Will I lose hearing after mastoidectomy?", a: "The goal is to clear the infection and preserve or improve hearing. Your surgeon will discuss the expected outcomes based on your specific case." },
      { q: "How long is the hospital stay?", a: "Depending on the extent of the surgery, you may go home the same day or stay overnight for observation." }
    ],
    faqsBn: [
      { q: "মাস্টয়ডেক্টমির পরে কি আমি শ্রবণশক্তি হারাবো?", a: "এর লক্ষ্য হলো সংক্রমণ পরিষ্কার করা এবং শ্রবণশক্তি সংরক্ষণ করা।" },
      { q: "হাসপাতালে কত দিন থাকতে হবে?", a: "অস্ত্রোপচারের পরিমাণের উপর নির্ভর করে আপনি একই দিনে বাড়ি যেতে পারেন বা রাতে পর্যবেক্ষণের জন্য থাকতে পারেন।" }
    ]
  },
  {
    slug: "thyroidectomy",
    category: "throat",
    titleEn: "Thyroidectomy",
    titleBn: "থাইরয়েডেক্টমি",
    descEn: "Surgical removal of all or part of the thyroid gland.",
    descBn: "থাইরয়েড গ্রন্থির সম্পূর্ণ বা আংশিক অপসারণ।",
    image: "/images/throat_treatment.png",
    detailedDescEn: "Thyroidectomy is the removal of the thyroid gland, usually indicated for thyroid cancer, hyperthyroidism, or large goiters causing swallowing difficulties. Modern techniques emphasize vocal cord protection.",
    detailedDescBn: "থাইরয়েডেক্টমি হলো থাইরয়েড গ্রন্থি অপসারণ, যা সাধারণত থাইরয়েড ক্যান্সার বা বড় গলগন্ডের জন্য নির্দেশিত হয়। আধুনিক কৌশলগুলি ভোকাল কর্ড সুরক্ষায় জোর দেয়।",
    faqsEn: [
      { q: "Will I need to take medication after my thyroid is removed?", a: "Yes, if the entire gland is removed, you will need lifelong thyroid hormone replacement therapy." },
      { q: "Will the surgery affect my voice?", a: "While there is a small risk to the nerves controlling the vocal cords, expert surgeons take meticulous care to protect them." }
    ],
    faqsBn: [
      { q: "থাইরয়েড অপসারণের পরে কি ওষুধ খেতে হবে?", a: "হ্যাঁ, সম্পূর্ণ গ্রন্থি অপসারণ করা হলে আপনার সারাজীবন থাইরয়েড হরমোন রিপ্লেসমেন্ট থেরাপির প্রয়োজন হবে।" },
      { q: "অস্ত্রোপচার কি আমার কণ্ঠস্বরকে প্রভাবিত করবে?", a: "ভোকাল কর্ড নিয়ন্ত্রণকারী স্নায়ুগুলির কিছুটা ঝুঁকি থাকলেও বিশেষজ্ঞরা এগুলি রক্ষা করার জন্য সতর্ক থাকেন।" }
    ]
  }
];
