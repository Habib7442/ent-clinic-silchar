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
  /* ──────────────────────────────────────────────────────────────────────────
   * 1.  TYMPANOPLASTY  (ear)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "tympanoplasty",
    category: "ear",
    titleEn: "Tympanoplasty",
    titleBn: "টিম্পানোপ্লাস্টি",
    descEn:
      "Microsurgical repair of a perforated eardrum to restore hearing and prevent recurring ear infection.",
    descBn:
      "ছিদ্রযুক্ত কানের পর্দা মেরামত করে শ্রবণশক্তি পুনরুদ্ধার ও বারবার সংক্রমণ প্রতিরোধের জন্য মাইক্রোসার্জারি।",
    image: "/images/ear_treatment.webp",
    detailedDescEn:
      "A hole in the eardrum (tympanic membrane perforation) is one of the most common reasons for long-standing ear discharge, fluctuating hearing loss, and recurrent middle-ear infection. Tympanoplasty is the microsurgical procedure that closes that hole, using the patient's own tissue — most commonly temporalis fascia from above the ear, or perichondrium from the tragus — as a graft. The surgery is performed under microscope or endoscope through the ear canal or via a small post-auricular incision hidden in the crease behind the ear. The aim is two-fold: a stable, intact eardrum that stops fluid and infection, and improved sound conduction so that hearing recovers in line with the underlying middle-ear status. Where ossicular bones are also damaged, the surgeon may add an ossiculoplasty in the same sitting.",
    detailedDescBn:
      "কানের পর্দায় ছিদ্র (টিম্পানিক মেমব্রেন পারফোরেশন) দীর্ঘস্থায়ী কান দিয়ে পানি পড়া, ওঠা-নামা করা শ্রবণহানি ও বারবার মধ্যকর্ণের সংক্রমণের অন্যতম প্রধান কারণ। টিম্পানোপ্লাস্টি হলো সেই ছিদ্র বন্ধ করার একটি মাইক্রোসার্জিকাল পদ্ধতি, যেখানে রোগীর নিজের টিস্যু — সাধারণত কানের উপর থেকে টেমপোরালিস ফেসিয়া অথবা ট্রাগাস থেকে পেরিকন্ড্রিয়াম — গ্রাফট হিসেবে ব্যবহার করা হয়। অস্ত্রোপচারটি মাইক্রোস্কোপ বা এন্ডোস্কোপের সাহায্যে কানের ভেতর দিয়ে অথবা কানের পেছনের ভাঁজে লুকানো একটি ছোট কাটার মাধ্যমে করা হয়। লক্ষ্য দুটি: একটি স্থিতিশীল, অখণ্ড কানের পর্দা যা পানি ও সংক্রমণ আটকায়, এবং উন্নত শব্দ পরিবহন যা মধ্যকর্ণের অবস্থা অনুযায়ী শ্রবণশক্তি ফিরিয়ে আনতে সাহায্য করে। কানের হাড়গুলিও যদি ক্ষতিগ্রস্ত থাকে, সার্জন একই অস্ত্রোপচারে ওসিকুলোপ্লাস্টি যোগ করতে পারেন।",
    faqsEn: [
      {
        q: "Why do I need surgery — can't medicine close the hole?",
        a: "Antibiotics can clear an active infection, but a persistent hole in the eardrum will not heal on its own once it has been present for more than a few weeks. Surgery is the only way to restore the eardrum's barrier function.",
      },
      {
        q: "Will I be awake during the surgery?",
        a: "Most tympanoplasties are performed under general anaesthesia for comfort and stillness. Smaller perforations in cooperative adults can sometimes be repaired under local anaesthesia. The choice is discussed at pre-operative counselling.",
      },
      {
        q: "Where does the graft tissue come from?",
        a: "Most often from the temporalis fascia — a thin sheet of tissue from above your own ear — or from cartilage and perichondrium taken from the tragus, the small flap in front of the ear canal. Both leave the donor area essentially unaffected.",
      },
      {
        q: "Will my hearing definitely improve?",
        a: "Hearing usually improves once the eardrum is intact and fluid clears, although the extent depends on the size and location of the perforation and the condition of the middle-ear bones. The realistic expected gain is reviewed before surgery using your audiogram.",
      },
      {
        q: "How painful is recovery?",
        a: "Pain is generally mild to moderate for the first 48 to 72 hours and is well controlled with simple oral analgesia. A blocked, full feeling in the ear is normal for several weeks while the packing dissolves and the eardrum heals.",
      },
      {
        q: "When can I return to work or school?",
        a: "A desk-based worker or older student can usually return in 7 to 10 days. Avoid heavy lifting, swimming, sneezing with a closed mouth, and ear-canal water exposure for 4 to 6 weeks while the graft takes up.",
      },
      {
        q: "When can I fly after the surgery?",
        a: "Air travel is generally avoided for 4 to 6 weeks, until the eardrum has healed and middle-ear pressure equalises normally. A specific clearance date is given at follow-up.",
      },
      {
        q: "What is the follow-up schedule?",
        a: "Typical reviews are at week 1 (packing assessment), week 4 (graft check and otoscopy), three months (hearing test), and six months. Long-term outcomes are best when the post-operative review schedule is kept.",
      },
    ],
    faqsBn: [
      {
        q: "অস্ত্রোপচার কেন প্রয়োজন — ওষুধ কি ছিদ্র বন্ধ করতে পারে না?",
        a: "অ্যান্টিবায়োটিক চলমান সংক্রমণ পরিষ্কার করতে পারে, কিন্তু কয়েক সপ্তাহের পুরনো একটি স্থায়ী ছিদ্র নিজে থেকে সারে না। কানের পর্দার বাধা-ভূমিকা ফিরিয়ে আনার একমাত্র উপায় অস্ত্রোপচার।",
      },
      {
        q: "অস্ত্রোপচারের সময় আমি কি জেগে থাকব?",
        a: "আরাম ও স্থিরতার জন্য বেশিরভাগ টিম্পানোপ্লাস্টি জেনারেল অ্যানেস্থেশিয়ায় করা হয়। সহযোগিতাকারী প্রাপ্তবয়স্কদের ছোট ছিদ্রের ক্ষেত্রে কখনো কখনো লোকাল অ্যানেস্থেশিয়াতেও করা যায়। প্রি-অপারেটিভ কাউন্সেলিংয়ে এটি আলোচনা করা হয়।",
      },
      {
        q: "গ্রাফট টিস্যু কোথা থেকে নেওয়া হয়?",
        a: "সবচেয়ে সাধারণভাবে আপনার নিজের কানের উপর থেকে টেমপোরালিস ফেসিয়া — একটি পাতলা টিস্যুর স্তর — অথবা কানের সামনের ট্রাগাসের কার্টিলেজ ও পেরিকন্ড্রিয়াম থেকে। উভয় ক্ষেত্রেই দাতা স্থানটি প্রায় অপ্রভাবিত থাকে।",
      },
      {
        q: "আমার শ্রবণশক্তি কি অবশ্যই উন্নত হবে?",
        a: "কানের পর্দা অখণ্ড হলে এবং তরল পরিষ্কার হলে সাধারণত শ্রবণশক্তি উন্নত হয়, তবে এর মাত্রা ছিদ্রের আকার, অবস্থান এবং মধ্যকর্ণের হাড়গুলির অবস্থার উপর নির্ভর করে। অস্ত্রোপচারের আগে আপনার অডিওগ্রাম দেখে বাস্তবসম্মত প্রত্যাশিত উন্নতি নিয়ে আলোচনা করা হয়।",
      },
      {
        q: "পুনরুদ্ধার কতটা কষ্টদায়ক?",
        a: "প্রথম ৪৮ থেকে ৭২ ঘণ্টায় ব্যথা সাধারণত হালকা থেকে মাঝারি এবং সাধারণ ওরাল ব্যথানাশকেই নিয়ন্ত্রণে আসে। প্যাকিং দ্রবীভূত হওয়া ও পর্দা সারার সময়ে কয়েক সপ্তাহ কানে চাপ-চাপ ভাব স্বাভাবিক।",
      },
      {
        q: "কাজ বা স্কুলে কবে ফিরতে পারব?",
        a: "ডেস্ক-ভিত্তিক কর্মী বা বড় ছাত্র সাধারণত ৭ থেকে ১০ দিনে ফিরতে পারেন। গ্রাফট ভালোভাবে বসার জন্য ৪ থেকে ৬ সপ্তাহ ভারী জিনিস তোলা, সাঁতার কাটা, মুখ বন্ধ রেখে হাঁচি দেওয়া এবং কানে পানি লাগা এড়িয়ে চলুন।",
      },
      {
        q: "অস্ত্রোপচারের পরে কবে বিমানে যাত্রা করতে পারব?",
        a: "সাধারণত ৪ থেকে ৬ সপ্তাহ বিমান যাত্রা এড়ানো হয় — যতক্ষণ না পর্দা সেরে যায় এবং মধ্যকর্ণের চাপ স্বাভাবিকভাবে সমন্বয় করে। ফলো-আপে নির্দিষ্ট ক্লিয়ারেন্স তারিখ দেওয়া হয়।",
      },
      {
        q: "ফলো-আপ সময়সূচি কেমন হবে?",
        a: "সাধারণত ১ম সপ্তাহ (প্যাকিং মূল্যায়ন), ৪র্থ সপ্তাহ (গ্রাফট ও অটোস্কোপি পরীক্ষা), ৩ মাস (শ্রবণ পরীক্ষা) এবং ৬ মাসে পর্যালোচনা হয়। ফলো-আপ সময়সূচি মেনে চললে দীর্ঘমেয়াদি ফলাফল সবচেয়ে ভালো হয়।",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 2.  FESS  (Functional Endoscopic Sinus Surgery — nose)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "fess-surgery",
    category: "nose",
    titleEn: "FESS — Functional Endoscopic Sinus Surgery",
    titleBn: "FESS — ফাংশনাল এন্ডোস্কোপিক সাইনাস সার্জারি",
    descEn:
      "Minimally invasive endoscopic surgery to restore sinus drainage in chronic sinusitis and nasal polyps.",
    descBn:
      "দীর্ঘস্থায়ী সাইনোসাইটিস ও নাকের পলিপে সাইনাসের নিষ্কাশন পথ পুনঃস্থাপনের জন্য ন্যূনতম আক্রমণাত্মক এন্ডোস্কোপিক সার্জারি।",
    image: "/images/nose_treatment.webp",
    detailedDescEn:
      "Functional Endoscopic Sinus Surgery (FESS) is the modern surgical approach to chronic rhinosinusitis that has not responded to a complete course of medical management. Working entirely through the nostrils with high-definition endoscopes, the surgeon opens the natural drainage pathways of the maxillary, ethmoid, frontal, and sphenoid sinuses — relieving the obstruction that traps mucus and sustains infection. The procedure preserves the normal mucosal lining wherever possible, rather than stripping it; this is what 'functional' means in FESS. There are no external incisions and therefore no facial scars. Indications include chronic sinusitis with or without nasal polyps, recurrent acute sinusitis, fungal sinusitis, mucocele, and pre-operative mapping prior to skull-base or orbital procedures. Post-operatively, saline rinses and a short course of medication continue the cleaning process the surgery initiates.",
    detailedDescBn:
      "FESS হলো দীর্ঘস্থায়ী রাইনোসাইনোসাইটিসের আধুনিক সার্জিকাল পদ্ধতি — যখন সম্পূর্ণ মেডিকাল চিকিৎসায় ফল হয় না। সম্পূর্ণরূপে নাকের ছিদ্র দিয়ে হাই-ডেফিনিশন এন্ডোস্কোপের সাহায্যে সার্জন ম্যাক্সিলারি, এথময়েড, ফ্রন্টাল ও স্ফেনয়েড সাইনাসের স্বাভাবিক নিষ্কাশন পথ খুলে দেন — যে বাধা মিউকাস আটকে রেখে সংক্রমণ চালিয়ে যাচ্ছিল, তা দূর হয়। যেখানে সম্ভব স্বাভাবিক মিউকোসাল আস্তরণ সংরক্ষণ করা হয়, ছাড়িয়ে ফেলা হয় না; এই কারণেই FESS-এর 'ফাংশনাল' অংশ। কোনো বাহ্যিক কাটাছেঁড়া নেই, তাই মুখে কোনো দাগও থাকে না। সংকেত: পলিপসহ বা ছাড়া দীর্ঘস্থায়ী সাইনোসাইটিস, বারবার অ্যাকিউট সাইনোসাইটিস, ফাঙ্গাল সাইনোসাইটিস, মিউকোসিল এবং খুলির ভিত্তি বা অরবিটাল সার্জারির আগে ম্যাপিং। অস্ত্রোপচার যা শুরু করে, পরবর্তী স্যালাইন রিন্স ও স্বল্পমেয়াদি ওষুধ সেই পরিষ্কারকরণ প্রক্রিয়া চালিয়ে নিয়ে যায়।",
    faqsEn: [
      {
        q: "When is FESS actually needed?",
        a: "FESS is considered when sinusitis has persisted for 12 weeks or more despite a properly conducted course of antibiotics, intranasal steroid sprays, and saline irrigation — or when CT shows specific findings (polyps, fungal disease, mucocele) that medication alone cannot clear.",
      },
      {
        q: "Will I have any scars on my face?",
        a: "No. FESS is performed entirely through the nostrils. There are no external incisions, no facial swelling, and no visible scar.",
      },
      {
        q: "Will the sinusitis come back?",
        a: "FESS opens the drainage pathways but it does not change the underlying tendency to sinus disease. With saline rinses, allergy control, and follow-up, the great majority of patients see a long-lasting reduction in symptoms. A minority — especially those with nasal polyps or strong allergy — may need ongoing medical management.",
      },
      {
        q: "How painful is recovery?",
        a: "Pain is usually surprisingly mild — most patients describe pressure and blocked nose rather than sharp pain. Simple oral analgesia is sufficient for the first few days. The main discomfort is breathing through the mouth until the nose clears.",
      },
      {
        q: "What is the saline rinse routine I have to follow?",
        a: "Large-volume saline rinses (a sinus-rinse bottle) once or twice daily, started the day after surgery and continued for 4 to 8 weeks. This is the single most important post-operative measure for a smooth recovery and a stable result.",
      },
      {
        q: "When can I return to work?",
        a: "Most desk-based workers return in 7 to 10 days. Heavy lifting, vigorous exercise, and air travel are usually deferred for 2 to 3 weeks, until follow-up confirms healing.",
      },
      {
        q: "Will I lose my sense of smell?",
        a: "On the contrary — patients with chronic sinusitis or polyps often experience improvement in smell after FESS, because the airflow to the olfactory area is restored. A temporary reduction in smell during the first 2 to 3 weeks is normal while healing progresses.",
      },
      {
        q: "Is general anaesthesia required?",
        a: "Yes, FESS is performed under general anaesthesia for patient comfort and precise surgical control of the operative field. A pre-operative anaesthetic review confirms suitability.",
      },
    ],
    faqsBn: [
      {
        q: "FESS কখন আসলে প্রয়োজন?",
        a: "যখন সঠিকভাবে অ্যান্টিবায়োটিক, ইন্ট্রানেজাল স্টেরয়েড স্প্রে ও স্যালাইন রিন্স চালানোর পরেও ১২ সপ্তাহ বা তার বেশি সময় ধরে সাইনোসাইটিস থাকে — অথবা CT-তে এমন কিছু পাওয়া যায় (পলিপ, ফাঙ্গাল রোগ, মিউকোসিল) যা শুধু ওষুধে ভালো হয় না, তখনই FESS বিবেচনা করা হয়।",
      },
      {
        q: "মুখে কি কোনো দাগ থাকবে?",
        a: "না। FESS সম্পূর্ণরূপে নাকের ছিদ্র দিয়ে করা হয়। কোনো বাহ্যিক কাটা নেই, মুখ ফোলে না, এবং কোনো দৃশ্যমান দাগও থাকে না।",
      },
      {
        q: "সাইনোসাইটিস কি আবার হবে?",
        a: "FESS নিষ্কাশন পথ খুলে দেয়, কিন্তু সাইনাস রোগের অন্তর্নিহিত প্রবণতা পরিবর্তন করে না। স্যালাইন রিন্স, অ্যালার্জি নিয়ন্ত্রণ ও ফলো-আপের সঙ্গে বেশিরভাগ রোগী দীর্ঘস্থায়ী উপশম দেখেন। অল্প সংখ্যক — বিশেষত পলিপ বা তীব্র অ্যালার্জিযুক্ত — রোগীদের চলমান মেডিকাল চিকিৎসার প্রয়োজন হতে পারে।",
      },
      {
        q: "পুনরুদ্ধার কতটা কষ্টদায়ক?",
        a: "ব্যথা সাধারণত আশ্চর্যজনকভাবে হালকা — বেশিরভাগ রোগী তীক্ষ্ণ ব্যথার চেয়ে চাপ ও নাক বন্ধের কথা বলেন। প্রথম কয়েকদিন সাধারণ ওরাল ব্যথানাশকেই যথেষ্ট। প্রধান অস্বস্তি — নাক পরিষ্কার না হওয়া পর্যন্ত মুখ দিয়ে শ্বাস নেওয়া।",
      },
      {
        q: "স্যালাইন রিন্সের নিয়ম কী?",
        a: "অস্ত্রোপচারের পরের দিন থেকে শুরু করে ৪ থেকে ৮ সপ্তাহ ধরে দিনে একবার বা দুইবার বড়-পরিমাণ স্যালাইন রিন্স (সাইনাস-রিন্স বোতল) করতে হয়। মসৃণ পুনরুদ্ধার ও স্থিতিশীল ফলাফলের জন্য এটিই সবচেয়ে গুরুত্বপূর্ণ পোস্ট-অপারেটিভ পদক্ষেপ।",
      },
      {
        q: "কাজে কবে ফিরতে পারব?",
        a: "বেশিরভাগ ডেস্ক-ভিত্তিক কর্মী ৭ থেকে ১০ দিনে ফিরে যান। ভারী জিনিস তোলা, কঠোর ব্যায়াম ও বিমান যাত্রা সাধারণত ২ থেকে ৩ সপ্তাহের জন্য স্থগিত থাকে — যতক্ষণ না ফলো-আপে নিরাময় নিশ্চিত হয়।",
      },
      {
        q: "ঘ্রাণশক্তি কি হারিয়ে ফেলব?",
        a: "বরং উল্টোটি — দীর্ঘস্থায়ী সাইনোসাইটিস বা পলিপযুক্ত রোগীরা প্রায়ই FESS-এর পরে গন্ধের উন্নতি অনুভব করেন, কারণ ঘ্রাণ অঞ্চলে বায়ুপ্রবাহ ফিরে আসে। প্রথম ২ থেকে ৩ সপ্তাহে সাময়িক ঘ্রাণহ্রাস স্বাভাবিক, যা সারার সঙ্গে উন্নতি লাভ করে।",
      },
      {
        q: "জেনারেল অ্যানেস্থেশিয়া কি প্রয়োজন?",
        a: "হ্যাঁ, রোগীর আরাম এবং অপারেটিভ ফিল্ডের নির্ভুল নিয়ন্ত্রণের জন্য FESS জেনারেল অ্যানেস্থেশিয়ায় করা হয়। প্রি-অপারেটিভ অ্যানেস্থেটিক পর্যালোচনায় উপযুক্ততা নিশ্চিত করা হয়।",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 3.  TONSILLECTOMY  (throat)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "tonsillectomy",
    category: "throat",
    titleEn: "Tonsillectomy",
    titleBn: "টনসিলেক্টমি",
    descEn:
      "Removal of the tonsils for recurrent infection or sleep-disordered breathing.",
    descBn:
      "বারবার সংক্রমণ বা ঘুমের শ্বাসজনিত সমস্যার জন্য টনসিল অপসারণ।",
    image: "/images/throat_treatment.webp",
    detailedDescEn:
      "Tonsillectomy is the surgical removal of the palatine tonsils — two oval lymphoid pads at the back of the throat. Modern indications are well defined: recurrent acute tonsillitis (seven or more episodes in one year, or five per year for two years), obstructive sleep-disordered breathing from enlarged tonsils, recurrent peritonsillar abscess, and persistent halitosis from tonsillar stones. The procedure is performed under general anaesthesia, usually as a day-care or single-overnight admission. Established techniques include classical cold-steel dissection, electrosurgery, and coblation. In children with enlarged adenoids in addition to tonsils, adenoidectomy is often performed in the same sitting. Recovery is most demanding in adults and easier in children, but with structured pain control, hydration, and dietary advice, patients return to normal life within two weeks.",
    detailedDescBn:
      "টনসিলেক্টমি হলো গলার পিছনের প্যালাটিন টনসিল — দুটি ডিম্বাকৃতি লিম্ফয়েড প্যাড — অস্ত্রোপচারের মাধ্যমে অপসারণ করা। আধুনিক সংকেত সুনির্দিষ্ট: এক বছরে সাতবার বা তার বেশি অ্যাকিউট টনসিলাইটিস (অথবা পরপর দুই বছরে বছরে পাঁচবার), বড় টনসিলের কারণে ঘুমে শ্বাসকষ্ট, বারবার পেরিটনসিলার ফোড়া এবং টনসিল-স্টোনজনিত স্থায়ী মুখের গন্ধ। অস্ত্রোপচার জেনারেল অ্যানেস্থেশিয়ায় করা হয়, সাধারণত ডে-কেয়ার বা একরাতের ভর্তির ভিত্তিতে। প্রতিষ্ঠিত পদ্ধতির মধ্যে রয়েছে ক্লাসিকাল কোল্ড-স্টিল ডিসেকশন, ইলেক্ট্রোসার্জারি এবং কোব্লেশন। যেসব শিশুর টনসিলের পাশাপাশি অ্যাডেনয়েডও বড়, তাদের ক্ষেত্রে একই অস্ত্রোপচারে অ্যাডেনয়েডেক্টমিও করা হয়। প্রাপ্তবয়স্কদের পুনরুদ্ধার তুলনামূলকভাবে কঠিন, শিশুদের সহজ; তবে সুসংগঠিত ব্যথা নিয়ন্ত্রণ, পর্যাপ্ত তরল গ্রহণ ও খাদ্যের পরামর্শে রোগী দুই সপ্তাহের মধ্যে স্বাভাবিক জীবনে ফিরে আসেন।",
    faqsEn: [
      {
        q: "When is tonsillectomy actually indicated?",
        a: "The mainstream criteria are seven or more episodes of tonsillitis in one year, five episodes per year for two years, or three per year for three years; obstructive sleep apnea / sleep-disordered breathing from enlarged tonsils; history of peritonsillar abscess; and biopsy concern. Surgery is not offered for a single bad attack.",
      },
      {
        q: "At what age is tonsillectomy usually done?",
        a: "It can be performed at any age, but the most common groups are children aged 3 to 10 with recurrent infections or sleep-disordered breathing, and adults whose tonsillitis is interfering with work and life. Very young children below 2 are operated only when absolutely indicated.",
      },
      {
        q: "What can my child eat after surgery?",
        a: "Cool, soft foods are ideal in the first week — ice cream, custard, yoghurt, soft khichdi, cool rice porridge, mashed potato, smoothies. Spicy, hot, sharp-edged (biscuits, chips), and acidic foods are avoided for 10 to 14 days.",
      },
      {
        q: "How long does the throat pain last?",
        a: "Throat pain is significant for the first 5 to 7 days and gradually settles by day 10 to 14. Ear pain on swallowing is referred pain (not an ear infection) and is normal. Regular paracetamol and ibuprofen on the schedule given are far more effective than waiting for pain to start.",
      },
      {
        q: "When can my child return to school, or I return to work?",
        a: "Children typically return to school in 10 to 14 days. Working adults often need a full two weeks off, especially in jobs involving speaking or physical activity. Avoid swimming, sports, and air travel for 2 to 3 weeks.",
      },
      {
        q: "What is the risk of bleeding after the surgery?",
        a: "A small amount of pink-tinged saliva in the first 24 hours is normal. The main risk window for delayed bleeding is between day 5 and day 10 when scabs separate. Fresh red blood from the mouth at any stage is a reason to come straight back to the clinic or the nearest emergency department.",
      },
      {
        q: "Will removing the tonsils weaken my child's immunity?",
        a: "No clinically meaningful immune compromise has been demonstrated after tonsillectomy. Other lymphoid tissue in the body continues normal immune function. The benefit of removing chronically infected tonsils generally outweighs their immune contribution.",
      },
      {
        q: "Will sleep apnea improve after the surgery?",
        a: "In children, tonsillectomy (often with adenoidectomy) is highly effective for sleep-disordered breathing caused by enlarged tonsils and adenoids — snoring, restless sleep, and daytime tiredness typically resolve. In adults with sleep apnea, the response is more variable and additional measures may be needed.",
      },
    ],
    faqsBn: [
      {
        q: "টনসিলেক্টমি কখন আসলে নির্দেশিত?",
        a: "মূল মাপকাঠি — এক বছরে সাতবার বা তার বেশি টনসিলাইটিস, পরপর দুই বছরে বছরে পাঁচবার, অথবা তিন বছরে বছরে তিনবার; বড় টনসিলের কারণে অবস্ট্রাকটিভ স্লিপ অ্যাপনিয়া; পেরিটনসিলার ফোড়ার ইতিহাস; এবং বায়োপসি প্রয়োজনের সন্দেহ। একটিমাত্র খারাপ আক্রমণের জন্য সার্জারি দেওয়া হয় না।",
      },
      {
        q: "টনসিলেক্টমি সাধারণত কোন বয়সে করা হয়?",
        a: "যে কোনো বয়সে করা যায়, তবে সবচেয়ে সাধারণ গোষ্ঠী হলো বারবার সংক্রমণ বা ঘুমের শ্বাসজনিত সমস্যাযুক্ত ৩ থেকে ১০ বছরের শিশু এবং যেসব প্রাপ্তবয়স্কের টনসিলাইটিস কাজ ও জীবনে বাধা সৃষ্টি করছে। ২ বছরের নিচে অস্ত্রোপচার শুধুমাত্র একান্তই প্রয়োজন হলে করা হয়।",
      },
      {
        q: "অস্ত্রোপচারের পরে আমার শিশু কী খেতে পারবে?",
        a: "প্রথম সপ্তাহে ঠান্ডা, নরম খাবার আদর্শ — আইসক্রিম, কাস্টার্ড, দই, নরম খিচুড়ি, ঠান্ডা চালের পায়েস, মাশড পটেটো, স্মুদি। ১০ থেকে ১৪ দিন ঝাল, গরম, ধারালো (বিস্কুট, চিপস) ও অম্লযুক্ত খাবার এড়িয়ে চলুন।",
      },
      {
        q: "গলার ব্যথা কতদিন থাকে?",
        a: "গলার ব্যথা প্রথম ৫ থেকে ৭ দিন তীব্র থাকে এবং ১০ থেকে ১৪ দিনের মধ্যে ধীরে ধীরে কমে যায়। গিলতে গেলে কানে ব্যথা — এটি রেফার্ড পেইন (কানের সংক্রমণ নয়) এবং স্বাভাবিক। ব্যথা শুরু হওয়ার অপেক্ষা না করে নির্ধারিত সময় অনুযায়ী নিয়মিত প্যারাসিটামল ও আইবুপ্রোফেন অনেক বেশি কার্যকর।",
      },
      {
        q: "আমার শিশু কবে স্কুলে ফিরবে, বা আমি কবে কাজে ফিরব?",
        a: "শিশুরা সাধারণত ১০ থেকে ১৪ দিনে স্কুলে ফেরে। কর্মরত প্রাপ্তবয়স্কদের প্রায়শই পুরো দুই সপ্তাহ ছুটি লাগে — বিশেষত যাঁদের কাজে কথা বলা বা শারীরিক কাজ আছে। ২ থেকে ৩ সপ্তাহ সাঁতার, খেলাধুলা ও বিমান যাত্রা এড়িয়ে চলুন।",
      },
      {
        q: "অস্ত্রোপচারের পরে রক্তপাতের ঝুঁকি কী?",
        a: "প্রথম ২৪ ঘণ্টায় অল্প গোলাপি-আভাযুক্ত লালা স্বাভাবিক। ৫ম থেকে ১০ম দিন প্রধান বিলম্বিত রক্তপাতের সময়, যখন ক্ষতস্থানের ছাল আলাদা হয়। যেকোনো পর্যায়ে মুখ থেকে তাজা লাল রক্ত এলে অবিলম্বে ক্লিনিকে অথবা নিকটতম জরুরি বিভাগে ফিরে আসুন।",
      },
      {
        q: "টনসিল অপসারণ কি আমার শিশুর রোগ প্রতিরোধ ক্ষমতা দুর্বল করবে?",
        a: "টনসিলেক্টমির পরে চিকিৎসাগতভাবে অর্থবহ কোনো রোগ-প্রতিরোধ ক্ষতি প্রমাণিত হয়নি। শরীরের অন্যান্য লিম্ফয়েড টিস্যু স্বাভাবিক ইমিউন কার্যকারিতা চালিয়ে যায়। দীর্ঘস্থায়ী সংক্রামিত টনসিল অপসারণের সুবিধা সাধারণত তাদের ইমিউন অবদানের চেয়ে বেশি।",
      },
      {
        q: "অস্ত্রোপচারের পরে স্লিপ অ্যাপনিয়া কি ভালো হবে?",
        a: "শিশুদের ক্ষেত্রে বড় টনসিল ও অ্যাডেনয়েডজনিত ঘুমের শ্বাসকষ্টে টনসিলেক্টমি (প্রায়ই অ্যাডেনয়েডেক্টমিসহ) অত্যন্ত কার্যকর — নাক ডাকা, অস্থির ঘুম ও দিনের ক্লান্তি সাধারণত সম্পূর্ণ চলে যায়। প্রাপ্তবয়স্কদের স্লিপ অ্যাপনিয়ার ক্ষেত্রে ফলাফল আরও পরিবর্তনশীল এবং অতিরিক্ত ব্যবস্থা লাগতে পারে।",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 4.  SEPTOPLASTY  (nose)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "septoplasty",
    category: "nose",
    titleEn: "Septoplasty",
    titleBn: "সেপ্টোপ্লাস্টি",
    descEn:
      "Internal correction of a deviated nasal septum to restore comfortable nasal breathing.",
    descBn:
      "আরামদায়ক নাকে শ্বাস ফিরিয়ে আনতে বাঁকা নাকের পর্দার অভ্যন্তরীণ সংশোধন।",
    image: "/images/nose_treatment.webp",
    detailedDescEn:
      "The nasal septum is the wall of cartilage and bone that divides the nasal cavity into left and right airways. When this wall deviates significantly — from a childhood injury, a sports impact, or developmental variation — one or both sides of the nose become persistently blocked, often worse on one side, often worse at night. Septoplasty straightens the deviated portion through a small internal incision inside the nostril; the external shape of the nose is not altered. It is typically combined with turbinate reduction when the inferior turbinates have hypertrophied secondarily. The aim is functional — easier breathing, better sleep, reduced post-nasal drip, fewer sinus infections — rather than cosmetic. When a patient wishes external reshaping as well, septoplasty can be combined with rhinoplasty (septorhinoplasty) in the same sitting.",
    detailedDescBn:
      "নাকের সেপ্টাম হলো কার্টিলেজ ও হাড়ের একটি প্রাচীর যা নাকের গহ্বরকে বাম ও ডান দুই অংশে বিভক্ত করে। শৈশবের আঘাত, খেলার আঘাত বা জন্মগত গঠনের কারণে এই প্রাচীর উল্লেখযোগ্যভাবে বেঁকে গেলে নাকের এক বা উভয় দিক ক্রমাগত বন্ধ থাকে — প্রায়ই এক দিকে বেশি, প্রায়ই রাতে বেশি। সেপ্টোপ্লাস্টি একটি ছোট অভ্যন্তরীণ ছিদ্রের মাধ্যমে বাঁকা অংশটি সোজা করে; নাকের বাহ্যিক আকৃতি পরিবর্তিত হয় না। সাধারণত যখন নিচের টার্বিনেটগুলি অতিরিক্তভাবে বড় হয়ে যায়, তখন এর সঙ্গে টার্বিনেট রিডাকশনও যুক্ত করা হয়। লক্ষ্য কসমেটিক নয় — কার্যকরী: সহজ শ্বাস, ভালো ঘুম, পোস্ট-নেজাল ড্রিপ কমা, কম সাইনাস সংক্রমণ। যদি রোগী বাহ্যিক আকৃতি পরিবর্তনও চান, তাহলে একই অস্ত্রোপচারে সেপ্টোপ্লাস্টির সঙ্গে রাইনোপ্লাস্টি যুক্ত করা যায় (সেপ্টোরাইনোপ্লাস্টি)।",
    faqsEn: [
      {
        q: "Will the surgery change the shape of my nose?",
        a: "No — pure septoplasty corrects only the internal partition and does not change the external contour of the nose. If you want an external shape change as well, that is a different procedure (rhinoplasty) and is discussed and consented separately.",
      },
      {
        q: "How is the surgery performed — are there external cuts?",
        a: "The entire procedure is done through a small incision inside one nostril. There are no external incisions, no external scars, and no bruising on the face under the eyes.",
      },
      {
        q: "Will my breathing definitely improve?",
        a: "When the deviation is the main cause of blockage, breathing usually improves substantially. If allergic rhinitis, polyps, or chronic sinusitis are coexisting, those are addressed separately or in the same sitting. The realistic gain is reviewed before surgery with the help of nasal endoscopy.",
      },
      {
        q: "Is the surgery done under general anaesthesia?",
        a: "Yes, septoplasty is typically performed under general anaesthesia, allowing precise correction without patient movement. A pre-operative anaesthetic review confirms suitability.",
      },
      {
        q: "Will I have packing in my nose?",
        a: "Modern septoplasty often uses dissolvable internal splints rather than traditional gauze packing, which is much more comfortable. If packing is used, it is removed at 24 to 48 hours under direct vision.",
      },
      {
        q: "When can I return to work?",
        a: "Desk-based workers typically return in 5 to 7 days. Heavy lifting and vigorous exercise are avoided for 2 to 3 weeks. Air travel is generally avoided for the first 2 weeks.",
      },
      {
        q: "Can septoplasty be done in children?",
        a: "Septoplasty is generally deferred in young children unless the deviation is severe and significantly affecting breathing, growth, or sleep. In adolescents and adults, it is a routine procedure.",
      },
      {
        q: "Does the deviated septum come back over time?",
        a: "A properly performed septoplasty corrects the deviation permanently in the great majority of patients. A small minority — usually those with significant cartilage memory or recurrent nasal injury — may develop a residual or new deviation that can need revision.",
      },
    ],
    faqsBn: [
      {
        q: "অস্ত্রোপচার কি আমার নাকের আকার পরিবর্তন করবে?",
        a: "না — শুধু সেপ্টোপ্লাস্টি কেবল অভ্যন্তরীণ পর্দা সংশোধন করে এবং নাকের বাহ্যিক রূপ বদলায় না। যদি বাহ্যিক আকৃতিও পরিবর্তন করতে চান, সেটি ভিন্ন একটি প্রক্রিয়া (রাইনোপ্লাস্টি) এবং আলাদাভাবে আলোচনা ও সম্মতিপত্রে উল্লেখ করা হয়।",
      },
      {
        q: "অস্ত্রোপচার কীভাবে করা হয় — বাহ্যিক কোনো কাটা আছে?",
        a: "পুরো প্রক্রিয়াটি একটি নাকের ছিদ্রের ভেতরে ছোট একটি কাটার মাধ্যমে করা হয়। কোনো বাহ্যিক কাটা নেই, বাহ্যিক দাগ নেই এবং চোখের নিচে কোনো ছোপ পড়ে না।",
      },
      {
        q: "আমার শ্বাস কি অবশ্যই উন্নত হবে?",
        a: "যখন বাঁকাটিই বন্ধের প্রধান কারণ, শ্বাস সাধারণত যথেষ্ট উন্নত হয়। অ্যালার্জিক রাইনাইটিস, পলিপ বা দীর্ঘস্থায়ী সাইনোসাইটিসও থাকলে সেগুলি আলাদাভাবে বা একই অস্ত্রোপচারে সম্বোধন করা হয়। নাসাল এন্ডোস্কোপির সাহায্যে অস্ত্রোপচারের আগে বাস্তবসম্মত উন্নতি নিয়ে আলোচনা করা হয়।",
      },
      {
        q: "অস্ত্রোপচার কি জেনারেল অ্যানেস্থেশিয়ায় করা হয়?",
        a: "হ্যাঁ, রোগীর নড়াচড়া ছাড়াই সূক্ষ্ম সংশোধনের জন্য সেপ্টোপ্লাস্টি সাধারণত জেনারেল অ্যানেস্থেশিয়ায় করা হয়। প্রি-অপারেটিভ অ্যানেস্থেটিক পর্যালোচনায় উপযুক্ততা নিশ্চিত করা হয়।",
      },
      {
        q: "নাকে কি প্যাকিং থাকবে?",
        a: "আধুনিক সেপ্টোপ্লাস্টিতে প্রায়ই ঐতিহ্যবাহী গজ প্যাকিংয়ের বদলে দ্রবণীয় ইন্টারনাল স্প্লিন্ট ব্যবহার করা হয়, যা অনেক বেশি আরামদায়ক। প্যাকিং ব্যবহৃত হলে তা ২৪ থেকে ৪৮ ঘণ্টায় সরাসরি দেখে অপসারণ করা হয়।",
      },
      {
        q: "কাজে কবে ফিরতে পারব?",
        a: "ডেস্ক-ভিত্তিক কর্মী সাধারণত ৫ থেকে ৭ দিনে ফিরে যান। ভারী জিনিস তোলা ও কঠোর ব্যায়াম ২ থেকে ৩ সপ্তাহ এড়িয়ে চলতে হয়। প্রথম ২ সপ্তাহ বিমান যাত্রা সাধারণত এড়ানো হয়।",
      },
      {
        q: "শিশুদের কি সেপ্টোপ্লাস্টি করা যায়?",
        a: "ছোট শিশুদের ক্ষেত্রে সাধারণত সেপ্টোপ্লাস্টি স্থগিত রাখা হয়, যদি না বাঁকা শ্বাসকষ্ট, বৃদ্ধি বা ঘুমকে গুরুতরভাবে প্রভাবিত করছে। কিশোর ও প্রাপ্তবয়স্কদের ক্ষেত্রে এটি একটি রুটিন প্রক্রিয়া।",
      },
      {
        q: "বাঁকা সেপ্টাম কি সময়ের সঙ্গে আবার ফিরে আসে?",
        a: "সঠিকভাবে করা সেপ্টোপ্লাস্টি বেশিরভাগ রোগীর ক্ষেত্রে স্থায়ীভাবে বাঁকা সংশোধন করে। ছোট কিছু ক্ষেত্রে — সাধারণত কার্টিলেজের তীব্র মেমরি বা বারবার নাকে আঘাতপ্রাপ্ত রোগীদের — অবশিষ্ট বা নতুন বাঁকা দেখা দিতে পারে, যার জন্য রিভিশনের প্রয়োজন হতে পারে।",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 5.  ADENOIDECTOMY  (throat)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "adenoidectomy",
    category: "throat",
    titleEn: "Adenoidectomy",
    titleBn: "অ্যাডেনয়ডেক্টমি",
    descEn:
      "Removal of enlarged adenoid tissue to relieve mouth-breathing, snoring, and recurrent ear problems in children.",
    descBn:
      "শিশুদের মুখ দিয়ে শ্বাস নেওয়া, নাক ডাকা ও বারবার কানের সমস্যা দূর করতে বড় অ্যাডেনয়েড টিস্যু অপসারণ।",
    image: "/images/throat_treatment.webp",
    detailedDescEn:
      "The adenoids are a pad of lymphoid tissue at the back of the nose, above the soft palate, hidden from view in routine examination. In many children they enlarge between the ages of three and seven and then shrink naturally. In a sub-group, they remain large long enough to cause persistent mouth-breathing, snoring, restless sleep, nasal speech, recurrent middle-ear effusion ('glue ear'), and chronic nasal discharge. Adenoidectomy is the removal of this overgrown tissue, performed through the mouth — there are no external incisions and no visible scar. It is usually a day-care procedure under general anaesthesia, often combined with tonsillectomy or with placement of grommets where there is associated middle-ear fluid. Children typically return to school within a week. Long-term benefits include better sleep, better daytime alertness, fewer ear infections, and normalised facial growth in those operated at the right age.",
    detailedDescBn:
      "অ্যাডেনয়েড হলো নাকের পেছনে, নরম তালুর উপরে অবস্থিত একটি লিম্ফয়েড টিস্যুর প্যাড — সাধারণ পরীক্ষায় দেখা যায় না। অনেক শিশুর ক্ষেত্রে ৩ থেকে ৭ বছর বয়সে এটি বড় হয় এবং তারপর স্বাভাবিকভাবেই ছোট হয়ে যায়। কিছু শিশুর ক্ষেত্রে এটি দীর্ঘ সময় বড় থেকে যায় — যার ফলে স্থায়ী মুখ-শ্বাস, নাক ডাকা, অস্থির ঘুম, নাকে কথা বলা, বারবার মধ্যকর্ণে তরল ('গ্লু ইয়ার') এবং দীর্ঘস্থায়ী নাকের সর্দি হয়। অ্যাডেনয়ডেক্টমি হলো এই বড় হওয়া টিস্যু অপসারণ — মুখের মাধ্যমে করা হয়, কোনো বাহ্যিক কাটা বা দাগ থাকে না। সাধারণত জেনারেল অ্যানেস্থেশিয়ায় ডে-কেয়ার প্রক্রিয়া হিসেবে করা হয়, প্রায়ই টনসিলেক্টমি বা মধ্যকর্ণে তরল থাকলে গ্রমেট স্থাপনের সঙ্গে। শিশুরা সাধারণত এক সপ্তাহের মধ্যে স্কুলে ফেরে। দীর্ঘমেয়াদি সুবিধা: ভালো ঘুম, দিনের বেলায় ভালো মনোযোগ, কম কানের সংক্রমণ এবং সঠিক বয়সে অস্ত্রোপচার করালে স্বাভাবিক মুখের গঠনে বিকাশ।",
    faqsEn: [
      {
        q: "How do I know if my child needs adenoidectomy?",
        a: "Common signs are persistent mouth-breathing day and night, loud snoring, restless sleep with pauses in breathing, a chronically blocked or runny nose, repeated ear infections or 'glue ear' on examination, and nasal-sounding speech. Diagnosis is confirmed by clinical examination, an X-ray of the nasopharynx, or a flexible nasal endoscopy.",
      },
      {
        q: "Are adenoids necessary for my child's immunity?",
        a: "Adenoids contribute to immunity early in life, but their role is small relative to the rest of the lymphoid system. When they are enlarged enough to cause sleep, ear, or growth problems, the benefit of removing them outweighs their immune contribution. No clinically meaningful immune compromise has been demonstrated after the procedure.",
      },
      {
        q: "Is the surgery done as day-care?",
        a: "Yes, adenoidectomy is typically a day-care procedure. The child arrives in the morning, is operated on under general anaesthesia, observed for a few hours, and discharged the same evening — provided eating, drinking, and post-anaesthesia recovery are normal.",
      },
      {
        q: "Will my child be in a lot of pain afterwards?",
        a: "Pain after isolated adenoidectomy is mild. Children may have a mildly sore throat, slight bad breath for a few days, and a transient nasal voice. Regular paracetamol covers it well. When combined with tonsillectomy, the throat pain is more significant and is managed with a structured pain plan.",
      },
      {
        q: "What can my child eat after surgery?",
        a: "Cool soft foods are best for the first three to five days — ice cream, yoghurt, custard, soft khichdi, mashed potato. Spicy and very hot foods are avoided for a week. Return to normal diet is usually quick.",
      },
      {
        q: "Will the breathing improve immediately?",
        a: "Yes — most children breathe noticeably better through the nose within the first week, and snoring usually settles. Daytime alertness, school performance, and mood often improve gradually over the following months as sleep quality recovers.",
      },
      {
        q: "Can the adenoids grow back?",
        a: "In a small minority, residual adenoid tissue can regrow, especially when the surgery was done very young or where allergic rhinitis is poorly controlled. A repeat procedure is rarely required.",
      },
      {
        q: "When does my child go back to school?",
        a: "Most children return to school in 5 to 7 days. Swimming, contact sport, and air travel are avoided for the first 2 weeks.",
      },
    ],
    faqsBn: [
      {
        q: "আমার শিশুর অ্যাডেনয়ডেক্টমি দরকার কি না কীভাবে বুঝব?",
        a: "সাধারণ লক্ষণ — দিন-রাত মুখ দিয়ে শ্বাস নেওয়া, জোরে নাক ডাকা, ঘুমে অস্থিরতা ও শ্বাস থেমে যাওয়া, দীর্ঘস্থায়ী নাক বন্ধ বা সর্দি, বারবার কানের সংক্রমণ বা পরীক্ষায় 'গ্লু ইয়ার', এবং নাকে কথা বলা। নির্ণয় ক্লিনিকাল পরীক্ষা, ন্যাসোফ্যারিংসের এক্স-রে অথবা ফ্লেক্সিবল নাসাল এন্ডোস্কোপির মাধ্যমে নিশ্চিত করা হয়।",
      },
      {
        q: "অ্যাডেনয়েড কি আমার শিশুর রোগ-প্রতিরোধ ক্ষমতার জন্য প্রয়োজনীয়?",
        a: "অ্যাডেনয়েড জীবনের শুরুতে রোগ-প্রতিরোধে অবদান রাখে, কিন্তু সমগ্র লিম্ফয়েড সিস্টেমের তুলনায় তাদের ভূমিকা ছোট। যখন এগুলি ঘুম, কান বা বৃদ্ধির সমস্যা সৃষ্টি করার মতো বড় হয়, তখন অপসারণের সুবিধা ইমিউন অবদানের চেয়ে বেশি। প্রক্রিয়ার পরে চিকিৎসাগতভাবে অর্থবহ কোনো ইমিউন ক্ষতি প্রমাণিত হয়নি।",
      },
      {
        q: "এটি কি ডে-কেয়ার হিসেবে করা হয়?",
        a: "হ্যাঁ, অ্যাডেনয়ডেক্টমি সাধারণত ডে-কেয়ার প্রক্রিয়া। শিশু সকালে আসে, জেনারেল অ্যানেস্থেশিয়ায় অস্ত্রোপচার হয়, কয়েক ঘণ্টা পর্যবেক্ষণের পরে — খাওয়া, পান করা ও অ্যানেস্থেশিয়া-পরবর্তী পুনরুদ্ধার স্বাভাবিক হলে — একই সন্ধ্যায় ছেড়ে দেওয়া হয়।",
      },
      {
        q: "অস্ত্রোপচারের পরে আমার শিশুর কি অনেক ব্যথা হবে?",
        a: "শুধু অ্যাডেনয়ডেক্টমির পরে ব্যথা হালকা। শিশুদের গলায় হালকা ব্যথা, কয়েকদিন মুখে গন্ধ এবং সাময়িক নাকে কথা বলা থাকতে পারে। নিয়মিত প্যারাসিটামল ভালোভাবেই ঢেকে দেয়। টনসিলেক্টমির সঙ্গে করা হলে গলার ব্যথা বেশি হয়, যা সুসংগঠিত ব্যথা পরিকল্পনায় সামলানো হয়।",
      },
      {
        q: "অস্ত্রোপচারের পরে শিশু কী খেতে পারবে?",
        a: "প্রথম ৩ থেকে ৫ দিন ঠান্ডা নরম খাবার সবচেয়ে ভালো — আইসক্রিম, দই, কাস্টার্ড, নরম খিচুড়ি, মাশড পটেটো। এক সপ্তাহ ঝাল ও খুব গরম খাবার এড়িয়ে চলুন। স্বাভাবিক খাবারে ফেরা সাধারণত দ্রুত হয়।",
      },
      {
        q: "শ্বাস কি সঙ্গে সঙ্গে ভালো হবে?",
        a: "হ্যাঁ — বেশিরভাগ শিশু প্রথম সপ্তাহের মধ্যে নাকে দিয়ে স্পষ্টভাবে ভালো শ্বাস নিতে পারে এবং নাক ডাকা সাধারণত বন্ধ হয়। ঘুমের মান ফিরে আসার সঙ্গে সঙ্গে দিনের মনোযোগ, স্কুলের ফলাফল ও মেজাজ পরের কয়েক মাসে ক্রমান্বয়ে উন্নত হয়।",
      },
      {
        q: "অ্যাডেনয়েড কি আবার বড় হতে পারে?",
        a: "ছোট সংখ্যক ক্ষেত্রে অবশিষ্ট অ্যাডেনয়েড টিস্যু আবার বাড়তে পারে — বিশেষ করে যদি খুব ছোট বয়সে অস্ত্রোপচার করা হয় বা অ্যালার্জিক রাইনাইটিস ভালোভাবে নিয়ন্ত্রণে না থাকে। পুনঃঅস্ত্রোপচার খুব কমই প্রয়োজন হয়।",
      },
      {
        q: "শিশু কবে স্কুলে ফিরবে?",
        a: "বেশিরভাগ শিশু ৫ থেকে ৭ দিনে স্কুলে ফেরে। প্রথম ২ সপ্তাহ সাঁতার, কন্টাক্ট স্পোর্ট ও বিমান যাত্রা এড়ানো হয়।",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 6.  MASTOIDECTOMY  (ear)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "mastoidectomy",
    category: "ear",
    titleEn: "Mastoidectomy",
    titleBn: "মাস্টয়ডেক্টমি",
    descEn:
      "Microsurgical clearance of chronic disease from the mastoid bone behind the ear.",
    descBn:
      "কানের পেছনের মাস্টয়েড হাড় থেকে দীর্ঘস্থায়ী রোগ পরিষ্কারের মাইক্রোসার্জারি।",
    image: "/images/ear_treatment.webp",
    detailedDescEn:
      "The mastoid is the honeycomb-like bone immediately behind the ear, in direct continuity with the middle-ear cavity. In chronic suppurative otitis media — particularly the cholesteatoma type — disease and skin cells migrate into the mastoid and erode bone, threatening hearing, facial nerve function, balance, and rarely the lining of the brain. Mastoidectomy is the microsurgical procedure that removes this diseased tissue and creates a safe, dry ear that no longer requires repeated medical treatment. The procedure ranges from a cortical mastoidectomy (limited clearance) to a modified radical mastoidectomy (more extensive) depending on the extent of disease. Wherever possible the eardrum is reconstructed in the same sitting (tympanomastoidectomy), and the small bones of hearing are preserved or reconstructed. The aim, in order of priority, is: a safe ear free of disease, a dry ear free of discharge, and improved or preserved hearing.",
    detailedDescBn:
      "মাস্টয়েড হলো কানের ঠিক পেছনে অবস্থিত মৌচাকের মতো একটি হাড়, যা মধ্যকর্ণের গহ্বরের সরাসরি ধারাবাহিকতায় থাকে। দীর্ঘস্থায়ী সাপুরেটিভ ওটাইটিস মিডিয়া — বিশেষত কোলেস্টিয়াটোমা ধরনে — রোগ ও ত্বকের কোষ মাস্টয়েডে ছড়িয়ে হাড় ক্ষয় করে, যা শ্রবণশক্তি, ফেসিয়াল নার্ভ, ভারসাম্য এবং বিরল ক্ষেত্রে মস্তিষ্কের আবরণকে হুমকি দিতে পারে। মাস্টয়ডেক্টমি হলো সেই রোগাক্রান্ত টিস্যু অপসারণের মাইক্রোসার্জিকাল পদ্ধতি — যা একটি নিরাপদ, শুকনো কান তৈরি করে যাতে আর বারবার চিকিৎসার প্রয়োজন না হয়। রোগের বিস্তার অনুযায়ী এটি কর্টিকাল মাস্টয়ডেক্টমি (সীমিত) থেকে মোডিফায়েড র‍্যাডিকাল মাস্টয়ডেক্টমি (বিস্তৃত) পর্যন্ত হতে পারে। সম্ভব হলে একই অস্ত্রোপচারে কানের পর্দা পুনর্নির্মাণ করা হয় (টিম্পানোমাস্টয়ডেক্টমি) এবং শ্রবণের ছোট হাড়গুলি সংরক্ষিত বা পুনর্নির্মিত হয়। অগ্রাধিকারের ক্রমে লক্ষ্য: রোগমুক্ত নিরাপদ কান, স্রাবমুক্ত শুকনো কান, এবং উন্নত বা সংরক্ষিত শ্রবণশক্তি।",
    faqsEn: [
      {
        q: "Why is this surgery necessary — can't antibiotics control the discharge?",
        a: "Antibiotics can suppress active infection temporarily, but cholesteatoma and chronic mastoid disease physically erode bone over time and cannot be cleared by medicine alone. Surgery is the only definitive treatment for these conditions.",
      },
      {
        q: "Will my hearing improve or get worse after the surgery?",
        a: "The primary aim of mastoidectomy is a safe and dry ear. Hearing outcomes depend on how much of the conductive mechanism (ossicles, eardrum) the disease has damaged before surgery. Where reconstruction is possible, hearing typically improves; in advanced disease, the priority is to preserve what remains. Realistic expected outcomes are reviewed with you before surgery.",
      },
      {
        q: "How long is the hospital stay?",
        a: "Most patients stay in hospital for one to two nights. The discharge plan, dressing schedule, and antibiotic regimen are explained in writing before you leave.",
      },
      {
        q: "Will there be a visible scar?",
        a: "There is a small incision in the crease behind the ear, which heals as a thin line and is rarely visible once the hair grows back. There is no facial scar.",
      },
      {
        q: "What are the water precautions?",
        a: "The ear must stay dry for 4 to 6 weeks. No swimming, no diving, and head-washing should be done with a cotton plug soaked in petroleum jelly. A specific timeline is given at follow-up.",
      },
      {
        q: "Are there risks to the facial nerve?",
        a: "The facial nerve runs through the mastoid, and protecting it is the surgeon's central concern. Modern microsurgical technique, facial-nerve monitoring where indicated, and good imaging make injury uncommon, but the risk is non-zero and is fully discussed at pre-operative counselling.",
      },
      {
        q: "How likely is the disease to come back?",
        a: "Where the disease has been completely cleared and the ear is reconstructed and reviewed long-term, recurrence is uncommon. Cholesteatoma in particular needs lifelong periodic follow-up, even after a fully successful operation, because residual disease can present years later.",
      },
      {
        q: "When can I return to work?",
        a: "Desk-based workers usually return in 2 to 3 weeks. Heavy lifting, sport, and air travel are typically deferred for 6 to 8 weeks, until follow-up confirms healing.",
      },
    ],
    faqsBn: [
      {
        q: "এই অস্ত্রোপচার কেন প্রয়োজন — অ্যান্টিবায়োটিক কি স্রাব নিয়ন্ত্রণ করতে পারে না?",
        a: "অ্যান্টিবায়োটিক সাময়িকভাবে চলমান সংক্রমণ চাপা দিতে পারে, কিন্তু কোলেস্টিয়াটোমা এবং দীর্ঘস্থায়ী মাস্টয়েড রোগ সময়ের সঙ্গে শারীরিকভাবে হাড় ক্ষয় করে — যা শুধু ওষুধে পরিষ্কার করা যায় না। এই অবস্থার একমাত্র চূড়ান্ত চিকিৎসা অস্ত্রোপচার।",
      },
      {
        q: "অস্ত্রোপচারের পরে আমার শ্রবণশক্তি ভালো হবে নাকি খারাপ?",
        a: "মাস্টয়ডেক্টমির প্রাথমিক লক্ষ্য একটি নিরাপদ ও শুকনো কান। শ্রবণের ফলাফল নির্ভর করে অস্ত্রোপচারের আগে রোগ কতটুকু কন্ডাক্টিভ মেকানিজম (ওসিকল, পর্দা) ক্ষতিগ্রস্ত করেছে তার উপর। যেখানে পুনর্নির্মাণ সম্ভব সেখানে সাধারণত শ্রবণ উন্নত হয়; অগ্রসর রোগে অগ্রাধিকার অবশিষ্ট শ্রবণশক্তি সংরক্ষণ করা। অস্ত্রোপচারের আগে আপনার সঙ্গে বাস্তবসম্মত প্রত্যাশিত ফলাফল আলোচনা করা হয়।",
      },
      {
        q: "হাসপাতালে কতদিন থাকতে হবে?",
        a: "বেশিরভাগ রোগী এক থেকে দুই রাত হাসপাতালে থাকেন। ডিসচার্জ পরিকল্পনা, ড্রেসিংয়ের সময়সূচি ও অ্যান্টিবায়োটিকের নিয়ম যাওয়ার আগে লিখিতভাবে ব্যাখ্যা করা হয়।",
      },
      {
        q: "কোনো দৃশ্যমান দাগ থাকবে কি?",
        a: "কানের পেছনের ভাঁজে একটি ছোট কাটা থাকে, যা পাতলা রেখা হিসেবে সেরে যায় এবং চুল গজানোর পর প্রায় দেখা যায় না। মুখে কোনো দাগ থাকে না।",
      },
      {
        q: "পানি থেকে কী কী সতর্কতা মানতে হবে?",
        a: "কান ৪ থেকে ৬ সপ্তাহ শুকনো রাখতে হবে। সাঁতার নয়, ডুব নয়, এবং মাথা ধোয়ার সময়ে পেট্রোলিয়াম জেলিতে ভেজানো তুলো দিয়ে কান বন্ধ রাখতে হয়। ফলো-আপে নির্দিষ্ট সময়সূচি দেওয়া হয়।",
      },
      {
        q: "ফেসিয়াল নার্ভের কি ঝুঁকি আছে?",
        a: "ফেসিয়াল নার্ভ মাস্টয়েডের মধ্য দিয়ে যায়, এবং একে রক্ষা করা সার্জনের প্রধান উদ্বেগ। আধুনিক মাইক্রোসার্জিকাল কৌশল, প্রয়োজনে ফেসিয়াল-নার্ভ মনিটরিং এবং ভালো ইমেজিং দিয়ে আঘাত অস্বাভাবিক, তবে ঝুঁকি শূন্য নয় এবং প্রি-অপারেটিভ কাউন্সেলিংয়ে এটি সম্পূর্ণ আলোচনা করা হয়।",
      },
      {
        q: "রোগটি কি আবার ফিরে আসতে পারে?",
        a: "যেখানে রোগ সম্পূর্ণরূপে পরিষ্কার করা হয়েছে এবং কান পুনর্নির্মিত ও দীর্ঘমেয়াদে পর্যালোচিত, পুনরাবৃত্তি অস্বাভাবিক। বিশেষ করে কোলেস্টিয়াটোমার ক্ষেত্রে — সম্পূর্ণ সফল অপারেশনের পরেও বছর পরে অবশিষ্ট রোগ দেখা দিতে পারে বলে আজীবন পর্যায়ক্রমিক ফলো-আপ প্রয়োজন।",
      },
      {
        q: "কাজে কবে ফিরতে পারব?",
        a: "ডেস্ক-ভিত্তিক কর্মী সাধারণত ২ থেকে ৩ সপ্তাহে ফিরে যান। ভারী জিনিস তোলা, খেলাধুলা ও বিমান যাত্রা সাধারণত ৬ থেকে ৮ সপ্তাহ স্থগিত রাখা হয় — যতক্ষণ না ফলো-আপে নিরাময় নিশ্চিত হয়।",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
   * 7.  THYROIDECTOMY  (throat)
   * ────────────────────────────────────────────────────────────────────── */
  {
    slug: "thyroidectomy",
    category: "throat",
    titleEn: "Thyroidectomy",
    titleBn: "থাইরয়ডেক্টমি",
    descEn:
      "Surgical removal of part or all of the thyroid gland with vocal cord and parathyroid preservation.",
    descBn:
      "ভোকাল কর্ড ও প্যারাথাইরয়েড সংরক্ষণসহ থাইরয়েড গ্রন্থির আংশিক বা সম্পূর্ণ অপসারণ।",
    image: "/images/throat_treatment.webp",
    detailedDescEn:
      "The thyroid is a butterfly-shaped gland in the lower front of the neck that produces hormones controlling metabolism, heart rate, and body temperature. Thyroidectomy is indicated for suspicious or confirmed thyroid cancer, large goitres causing compression symptoms (difficulty swallowing or breathing, voice change, neck discomfort), hyperthyroidism that has not responded to medical management or radio-iodine, and certain cosmetic concerns when other treatments are not appropriate. The procedure may be a hemithyroidectomy (one lobe removed) or a total thyroidectomy (the whole gland). The surgeon's central concerns during the operation are the recurrent laryngeal nerves on each side (controlling the vocal cords) and the four small parathyroid glands (which control calcium balance); modern technique includes nerve-monitoring protocols and meticulous parathyroid identification to protect both. The neck incision is hidden in a natural skin crease and usually heals as a fine line.",
    detailedDescBn:
      "থাইরয়েড হলো গলার নিচের সামনে অবস্থিত একটি প্রজাপতির আকৃতির গ্রন্থি, যা বিপাক, হৃদস্পন্দন ও শরীরের তাপমাত্রা নিয়ন্ত্রণকারী হরমোন তৈরি করে। থাইরয়ডেক্টমি নির্দেশিত হয়: সন্দেহজনক বা নিশ্চিত থাইরয়েড ক্যান্সারে, যে বড় গলগণ্ড চাপ সৃষ্টিকারী উপসর্গ (গিলতে বা শ্বাস নিতে কষ্ট, কণ্ঠ পরিবর্তন, গলায় অস্বস্তি) দিচ্ছে, মেডিকাল চিকিৎসা বা রেডিও-আয়োডিনে সাড়া না দেওয়া হাইপারথাইরয়েডিজমে এবং কিছু কসমেটিক ক্ষেত্রে যখন অন্য চিকিৎসা উপযুক্ত নয়। প্রক্রিয়াটি হেমিথাইরয়ডেক্টমি (একটি লোব অপসারণ) বা সম্পূর্ণ থাইরয়ডেক্টমি (পুরো গ্রন্থি) হতে পারে। অস্ত্রোপচারের সময়ে সার্জনের প্রধান উদ্বেগ — উভয় দিকের রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ (যা ভোকাল কর্ড নিয়ন্ত্রণ করে) এবং চারটি ছোট প্যারাথাইরয়েড গ্রন্থি (যা ক্যালসিয়াম ভারসাম্য নিয়ন্ত্রণ করে); আধুনিক কৌশলে নার্ভ-মনিটরিং প্রোটোকল এবং সূক্ষ্ম প্যারাথাইরয়েড সনাক্তকরণ অন্তর্ভুক্ত — যাতে উভয়কেই রক্ষা করা যায়। গলার কাটাটি একটি স্বাভাবিক ত্বকের ভাঁজে লুকানো থাকে এবং সাধারণত পাতলা রেখা হিসেবে সেরে যায়।",
    faqsEn: [
      {
        q: "Why is my thyroid being removed instead of just treated with medicine?",
        a: "Surgery is recommended when imaging, biopsy (FNAC), or symptoms point to a problem that medicine alone cannot resolve — suspicious or confirmed cancer, a large goitre pressing on the airway or food pipe, hyperthyroidism that has failed medical and radio-iodine treatment, or a nodule that has grown significantly on follow-up. The decision is reviewed in detail before proceeding.",
      },
      {
        q: "Will I need to take medication for the rest of my life?",
        a: "If the entire thyroid is removed (total thyroidectomy), lifelong thyroid hormone replacement is needed — usually a single tablet once a day, with periodic blood-test review. If only one lobe is removed (hemithyroidectomy), many patients do not need replacement; this is confirmed with a thyroid blood test at six weeks.",
      },
      {
        q: "Will the surgery affect my voice?",
        a: "The recurrent laryngeal nerve runs immediately behind the thyroid and controls vocal-cord movement. Modern surgical technique includes nerve identification and, where indicated, nerve-monitoring, which keeps the risk of permanent voice change low. A temporary mild hoarseness in the first few weeks is sometimes seen and usually settles. The risks are reviewed in full at pre-operative counselling.",
      },
      {
        q: "How prominent will the scar be?",
        a: "The incision is placed in a natural skin crease at the lower neck — typically 4 to 6 cm long — and usually heals as a fine pale line. Scar care advice is given at discharge. In suitable cases, alternative approaches that minimise the visible scar can be discussed.",
      },
      {
        q: "What about my calcium levels after the surgery?",
        a: "The four parathyroid glands sit on the back of the thyroid and control blood calcium. After total thyroidectomy, calcium levels can drop temporarily, causing tingling around the mouth or in the fingertips — usually managed with calcium and vitamin D supplementation for a few weeks. A small minority need longer-term supplementation. Levels are monitored carefully after the surgery.",
      },
      {
        q: "How long is the hospital stay?",
        a: "Most patients stay in hospital for one to two nights. Calcium levels, voice, and the wound are reviewed before discharge. A written discharge plan and a follow-up calendar are provided.",
      },
      {
        q: "How long until I can return to work?",
        a: "Desk-based workers usually return in 1 to 2 weeks. Heavy lifting, vigorous exercise, and contact sport are avoided for 4 to 6 weeks. A specific clearance date is given at the first follow-up visit.",
      },
      {
        q: "If it is cancer, what is the follow-up plan?",
        a: "Thyroid cancer follow-up depends on the type and stage. It typically involves blood tests (thyroglobulin), neck ultrasound at regular intervals, and in some cases radio-iodine therapy. A structured oncological follow-up calendar is set up with you before discharge.",
      },
    ],
    faqsBn: [
      {
        q: "শুধু ওষুধ চিকিৎসার বদলে থাইরয়েড কেন অপসারণ করা হচ্ছে?",
        a: "যখন ইমেজিং, বায়োপসি (FNAC) বা উপসর্গ এমন কোনো সমস্যা নির্দেশ করে যা শুধু ওষুধে সমাধান হয় না — সন্দেহজনক বা নিশ্চিত ক্যান্সার, শ্বাসনালী বা খাদ্যনালীতে চাপ সৃষ্টিকারী বড় গলগণ্ড, মেডিকাল ও রেডিও-আয়োডিন চিকিৎসায় ব্যর্থ হাইপারথাইরয়েডিজম, অথবা ফলো-আপে উল্লেখযোগ্যভাবে বেড়ে যাওয়া নোডিউল — তখনই অস্ত্রোপচার সুপারিশ করা হয়। অগ্রসর হওয়ার আগে সিদ্ধান্ত বিস্তারিতভাবে পর্যালোচনা করা হয়।",
      },
      {
        q: "সারাজীবন কি ওষুধ খেতে হবে?",
        a: "যদি পুরো থাইরয়েড অপসারণ করা হয় (টোটাল থাইরয়ডেক্টমি), আজীবন থাইরয়েড হরমোন রিপ্লেসমেন্ট প্রয়োজন — সাধারণত দিনে একটি ট্যাবলেট, পর্যায়ক্রমিক রক্ত পরীক্ষাসহ। শুধু একটি লোব অপসারণ করা হলে (হেমিথাইরয়ডেক্টমি) অনেক রোগীর রিপ্লেসমেন্ট লাগে না; এটি ছয় সপ্তাহে থাইরয়েড রক্ত পরীক্ষায় নিশ্চিত করা হয়।",
      },
      {
        q: "অস্ত্রোপচার কি আমার কণ্ঠস্বরকে প্রভাবিত করবে?",
        a: "রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ থাইরয়েডের ঠিক পেছনে থাকে এবং ভোকাল কর্ডের নড়াচড়া নিয়ন্ত্রণ করে। আধুনিক সার্জিকাল কৌশলে নার্ভ সনাক্তকরণ এবং প্রয়োজনে নার্ভ-মনিটরিং অন্তর্ভুক্ত, যা স্থায়ী কণ্ঠ পরিবর্তনের ঝুঁকি কম রাখে। প্রথম কয়েক সপ্তাহে সাময়িক হালকা গলা ভাঙা কখনো কখনো হয় এবং সাধারণত সেরে যায়। ঝুঁকিগুলি প্রি-অপারেটিভ কাউন্সেলিংয়ে সম্পূর্ণভাবে আলোচনা করা হয়।",
      },
      {
        q: "দাগ কতটা প্রকট হবে?",
        a: "কাটাটি গলার নিচে একটি স্বাভাবিক ত্বকের ভাঁজে — সাধারণত ৪ থেকে ৬ সেমি দীর্ঘ — স্থাপন করা হয় এবং সাধারণত পাতলা ফ্যাকাশে রেখা হিসেবে সেরে যায়। ডিসচার্জে দাগ-যত্নের পরামর্শ দেওয়া হয়। উপযুক্ত ক্ষেত্রে দৃশ্যমান দাগ ন্যূনতম করার বিকল্প পদ্ধতিও আলোচনা করা যায়।",
      },
      {
        q: "অস্ত্রোপচারের পরে আমার ক্যালসিয়ামের কী হবে?",
        a: "চারটি প্যারাথাইরয়েড গ্রন্থি থাইরয়েডের পেছনে থাকে এবং রক্তের ক্যালসিয়াম নিয়ন্ত্রণ করে। টোটাল থাইরয়ডেক্টমির পরে ক্যালসিয়াম সাময়িকভাবে কমে গিয়ে মুখের চারপাশে বা আঙুলের ডগায় ঝিনঝিন অনুভব হতে পারে — সাধারণত কয়েক সপ্তাহ ক্যালসিয়াম ও ভিটামিন D সাপ্লিমেন্টে সামলানো হয়। ছোট সংখ্যক রোগীর দীর্ঘমেয়াদি সাপ্লিমেন্ট প্রয়োজন হয়। অস্ত্রোপচারের পরে মাত্রা সতর্কভাবে পর্যবেক্ষণ করা হয়।",
      },
      {
        q: "হাসপাতালে কতদিন থাকতে হবে?",
        a: "বেশিরভাগ রোগী এক থেকে দুই রাত হাসপাতালে থাকেন। ডিসচার্জের আগে ক্যালসিয়াম মাত্রা, কণ্ঠস্বর ও ক্ষতস্থান পর্যালোচনা করা হয়। লিখিত ডিসচার্জ পরিকল্পনা ও ফলো-আপ ক্যালেন্ডার দেওয়া হয়।",
      },
      {
        q: "কাজে কবে ফিরতে পারব?",
        a: "ডেস্ক-ভিত্তিক কর্মী সাধারণত ১ থেকে ২ সপ্তাহে ফিরে যান। ৪ থেকে ৬ সপ্তাহ ভারী জিনিস তোলা, কঠোর ব্যায়াম ও কন্টাক্ট স্পোর্ট এড়িয়ে চলতে হয়। প্রথম ফলো-আপ ভিজিটে নির্দিষ্ট ক্লিয়ারেন্স তারিখ দেওয়া হয়।",
      },
      {
        q: "যদি ক্যান্সার হয়, তাহলে ফলো-আপ পরিকল্পনা কী?",
        a: "থাইরয়েড ক্যান্সারের ফলো-আপ ধরন ও পর্যায়ের উপর নির্ভর করে। এতে সাধারণত রক্ত পরীক্ষা (থাইরোগ্লোবুলিন), নিয়মিত ব্যবধানে গলার আলট্রাসাউন্ড এবং কিছু ক্ষেত্রে রেডিও-আয়োডিন থেরাপি অন্তর্ভুক্ত। ডিসচার্জের আগেই আপনার সঙ্গে একটি সুসংগঠিত অনকোলজিকাল ফলো-আপ ক্যালেন্ডার তৈরি করা হয়।",
      },
    ],
  },
];