import type { Metadata, Viewport } from "next";

/* ============================================================================
 * SITE CONSTANTS
 * The single source of truth. If a string about the clinic appears anywhere in
 * the app, it should originate here.
 * ========================================================================== */

export const SITE = {
  domain: "https://theentclinicsilchar.com",

  // Brand
  name: "The ENT Clinic, Silchar",
  nameBn: "দি ইএনটি ক্লিনিক, শিলচর",
  tagline: "Considered ENT care in the Barak Valley.",
  taglineBn: "বরাক উপত্যকায় যত্নবান ইএনটি চিকিৎসা।",
  defaultDescription:
    "The ENT Clinic is a premier institute in Silchar led by Dr. Abhishek Ray (10+ years experience). Dedicated Ear Clinic (Audiometry, Tympanometry, BERA, OAE), Vertigo Clinic (VEMP, VNG), and Speech Therapy.",
  defaultDescriptionBn:
    "দি ইএনটি ক্লিনিক শিলচরের একটি অগ্রণী নাক, কান ও গলা চিকিৎসা প্রতিষ্ঠান। ডাঃ অভিষেক রায় (১০+ বছরের অভিজ্ঞতা) এর অধীনে অডিওমেট্রি, ভেরটিগো ক্লিনিক (VEMP, VNG), এবং স্পিচ থেরাপি প্রদান করা হয়।",
  ogImage: "/og-image.png",

  // Doctor
  doctor: {
    name: "Dr. Abhishek Ray",
    nameBn: "ডাঃ অভিষেক রায়",
    qualification: "MS (Otorhinolaryngology)",
    medicalSpecialty: "Otolaryngologic",
    languages: ["Bengali", "Hindi", "English", "Assamese"],
    nmcRegistration: "", // TODO: fill from clinic
    image: "/doctor.jpg",
  },

  // Address (NAP — keep identical to GBP, JustDial, Practo)
  address: {
    streetAddress:
      "RR82+M3V, HRIDAY RAJANI COMPLEX, Lochan Bairagi Rd, beside DURGA BADI, Bilpar",
    locality: "Silchar",
    region: "Assam",
    postalCode: "788001",
    country: "IN",
  },
  geo: { latitude: 24.8163027, longitude: 92.8007081 },

  // Contact (replace placeholders before launch)
  telephone: "+91-9435070156",
  whatsapp: "+91-9435070156",
  email: "abhishek.hister@gmail.com",

  // Hours — keep aligned with GBP "openingHoursSpecification"
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
    { days: ["Sunday"], opens: null, closes: null },
  ] as const,

  // Social / external profiles for sameAs
  sameAs: [
    // "https://www.google.com/maps/...",
    // "https://www.practo.com/silchar/doctor/...",
    // "https://www.facebook.com/...",
    // "https://www.instagram.com/...",
  ] as string[],

  // Twitter / X handle (leave empty if none)
  twitterHandle: "",

  // Brand colors (used in the viewport themeColor)
  color: {
    paper: "#F6F1E6",
    ink: "#14181A",
    forest: "#1E3A2B",
    rust: "#B65C36",
  },
} as const;

/* ============================================================================
 * TYPES
 * ========================================================================== */

export type Lang = "en" | "bn";

export interface MetadataProps {
  /** Page-level title. Brand name is appended automatically. Omit on home. */
  title?: string;
  /** SEO description, 150–160 chars ideal. Falls back to a localized default. */
  description?: string;
  /** Path under the language root, e.g. "/book". Leading slash optional. */
  path?: string;
  /** OpenGraph image. Absolute path from the public folder. */
  image?: string;
  /** Content language. Affects locale, hreflang, and default copy. */
  lang?: Lang;
  /** Block this page from indexing (use for /booked-thank-you, drafts, etc). */
  noIndex?: boolean;
  /** "article" for journal posts; defaults to "website". */
  type?: "website" | "article";
  /** Article publish time (ISO 8601) — only for type: "article". */
  publishedTime?: string;
  /** Article last-modified time (ISO 8601) — only for type: "article". */
  modifiedTime?: string;
  /** Author display name(s) — only for type: "article". */
  authors?: string[];
  /** Per-page keyword overrides. Optional — defaults are generated per lang. */
  keywords?: string[];
}

/* ============================================================================
 * VIEWPORT
 * Exported separately per Next.js 14+ App Router recommendation. Pair with the
 * metadata export at the root layout.
 * ========================================================================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SITE.color.paper },
    { media: "(prefers-color-scheme: dark)", color: SITE.color.ink },
  ],
};

/* ============================================================================
 * METADATA CONSTRUCTOR
 * ========================================================================== */

export function constructMetadata({
  title,
  description,
  image = SITE.ogImage,
  path = "",
  lang = "en",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: MetadataProps = {}): Metadata {
  // Normalize path: "" or "/" → "" (lang root); "book" or "/book" → "/book"
  const cleanPath = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE.domain}/${lang}${cleanPath}`;

  // Localized copy
  const brand = lang === "bn" ? SITE.nameBn : SITE.name;
  const tagline = lang === "bn" ? SITE.taglineBn : SITE.tagline;
  const defaultDesc = lang === "bn" ? SITE.defaultDescriptionBn : SITE.defaultDescription;
  const locale = lang === "bn" ? "bn_IN" : "en_IN";
  const altLocale = lang === "bn" ? "en_IN" : "bn_IN";

  // Title resolution: avoid the "Brand | Brand" duplication of the old version.
  // - Page title provided  → "Page Title | Brand"
  // - No page title        → "Brand — Tagline"
  const resolvedTitle = title ? `${title} | ${brand}` : `${brand} — ${tagline}`;
  const resolvedDescription = description ?? defaultDesc;
  const absoluteImageUrl = image.startsWith("http") ? image : `${SITE.domain}${image}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(SITE.domain),
    applicationName: SITE.name,
    authors: authors ? authors.map((name) => ({ name })) : [{ name: SITE.doctor.name }],
    creator: SITE.doctor.name,
    publisher: SITE.name,
    keywords: keywords ?? defaultKeywords(lang),

    // Disable iOS auto-detection — we render real tap-to-call buttons everywhere.
    formatDetection: { email: false, telephone: false, address: false },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": `${SITE.domain}/en${cleanPath}`,
        "bn-IN": `${SITE.domain}/bn${cleanPath}`,
        "x-default": `${SITE.domain}/en${cleanPath}`,
      },
    },

    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonicalUrl,
      siteName: SITE.name,
      locale,
      alternateLocale: [altLocale],
      type,
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime, authors }
        : {}),
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [{ url: absoluteImageUrl, alt: resolvedTitle }],
      ...(SITE.twitterHandle
        ? { creator: SITE.twitterHandle, site: SITE.twitterHandle }
        : {}),
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.ico",
    },

    manifest: "/site.webmanifest",

    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: SITE.name,
    },

    // Geo meta — assists local pack indexing
    other: {
      "geo.region": `${SITE.address.country}-AS`,
      "geo.placename": SITE.address.locality,
      "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    },

    verification: {
      // google: "your-search-console-verification-code",
      // yandex: "...",
      // other: { "facebook-domain-verification": "..." },
    },
  };
}

/* ============================================================================
 * DEFAULT KEYWORDS (per language)
 * ========================================================================== */

function defaultKeywords(lang: Lang): string[] {
  if (lang === "bn") {
    return [
      "ইএনটি ক্লিনিক শিলচর",
      "শিলচর ইএনটি ডাক্তার",
      "অভিষেক রায় ইএনটি",
      "কান নাক গলা ডাক্তার শিলচর",
      "শ্রবণযন্ত্র শিলচর",
      "সাইনাস চিকিৎসা শিলচর",
      "বরাক উপত্যকা ইএনটি",
      "শিশু ইএনটি শিলচর",
    ];
  }
  return [
    "ENT clinic Silchar",
    "ENT doctor Silchar",
    "otolaryngologist Silchar",
    "Dr Abhishek Ray ENT",
    "ear nose throat Silchar",
    "hearing aid Silchar",
    "sinusitis treatment Silchar",
    "snoring treatment Cachar",
    "paediatric ENT Silchar",
    "Barak Valley ENT specialist",
  ];
}

/* ============================================================================
 * JSON-LD SCHEMA HELPERS
 * Drop the returned objects into a <script type="application/ld+json"> tag via
 * dangerouslySetInnerHTML={jsonLd(schema)}.
 * ========================================================================== */

const CLINIC_ID = `${SITE.domain}/#clinic`;
const PHYSICIAN_ID = `${SITE.domain}/#physician`;

/** Inject as { __html: '...' } for <script dangerouslySetInnerHTML={...}>. */
export function jsonLd(schema: object | object[]) {
  return { __html: JSON.stringify(schema) };
}

/** Sitewide MedicalClinic schema — include on every page via root layout. */
export function medicalClinicSchema() {
  const openingHours = SITE.hours
    .filter((h) => h.opens !== null && h.closes !== null)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE.name,
    url: SITE.domain,
    image: `${SITE.domain}${SITE.ogImage}`,
    logo: `${SITE.domain}/favicon.svg`,
    description: SITE.defaultDescription,
    medicalSpecialty: SITE.doctor.medicalSpecialty,
    priceRange: "₹",
    telephone: SITE.telephone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: openingHours,
    sameAs: SITE.sameAs,
    physician: { "@id": PHYSICIAN_ID },
    areaServed: [
      { "@type": "City", name: "Silchar" },
      { "@type": "AdministrativeArea", name: "Cachar" },
      { "@type": "AdministrativeArea", name: "Karimganj" },
      { "@type": "AdministrativeArea", name: "Hailakandi" },
      { "@type": "AdministrativeArea", name: "Barak Valley" },
    ],
  };
}

/** Physician schema — include on /doctor and home. */
export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: SITE.doctor.name,
    medicalSpecialty: SITE.doctor.medicalSpecialty,
    url: `${SITE.domain}/en/doctor`,
    image: `${SITE.domain}${SITE.doctor.image}`,
    workLocation: { "@id": CLINIC_ID },
    knowsLanguage: SITE.doctor.languages,
    ...(SITE.doctor.nmcRegistration
      ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "NMC Registration",
            value: SITE.doctor.nmcRegistration,
          },
        }
      : {}),
  };
}

/** Breadcrumb schema — include on every non-home page. */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.domain}${item.url}`,
    })),
  };
}

/** FAQ schema — include on service pages and journal articles with FAQs. */
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** MedicalProcedure schema — for /services/[slug] pages. */
export function medicalProcedureSchema(args: {
  name: string;
  description: string;
  url: string;
  procedureType?: "Surgical" | "Diagnostic" | "Therapeutic" | "PercutaneousProcedure";
  bodyLocation?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: args.name,
    description: args.description,
    url: args.url.startsWith("http") ? args.url : `${SITE.domain}${args.url}`,
    procedureType: args.procedureType,
    bodyLocation: args.bodyLocation,
    performer: { "@id": PHYSICIAN_ID },
  };
}

/** MedicalWebPage schema — for condition microsites and clinical content. */
export function medicalWebPageSchema(args: {
  title: string;
  description: string;
  url: string;
  lastReviewed: string; // YYYY-MM-DD
  reviewedByName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: args.title,
    description: args.description,
    url: args.url.startsWith("http") ? args.url : `${SITE.domain}${args.url}`,
    lastReviewed: args.lastReviewed,
    reviewedBy: {
      "@type": "Physician",
      name: args.reviewedByName ?? SITE.doctor.name,
    },
  };
}

/** Article schema — for /journal/[slug] posts. */
export function articleSchema(args: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    image: args.image.startsWith("http") ? args.image : `${SITE.domain}${args.image}`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@type": "Person", name: args.authorName ?? SITE.doctor.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.domain}/favicon.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": args.url.startsWith("http") ? args.url : `${SITE.domain}${args.url}`,
    },
  };
}

/** MedicalOrganization schema — alternative root identity if needed. */
export function medicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/favicon.svg`,
    sameAs: SITE.sameAs,
  };
}
