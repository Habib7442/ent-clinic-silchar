# The ENT Clinic, Silchar — Website Product Requirements Document (PRD)

**Document:** ARCHIE Blueprint No. 0017
**Subject:** The ENT Clinic, Silchar
**Address:** Lochan Bairagi Rd, beside NEINS, adjacent Vivekananda Cooperative, Meherpur, Kanakpur Part-II, Silchar, Assam 788005
**Catchment:** Cachar · Karimganj · Hailakandi (~2.1M population)
**Prepared by:** ARCHIE Studio
**Date:** May 2026
**Status:** Confidential — for client review

---

## Table of Contents

0. [Executive Summary](#0-executive-summary)
1. [Business Intelligence Report](#1-business-intelligence-report)
2. [Current Site Audit](#2-current-site-audit)
3. [Sitemap](#3-sitemap)
4. [Page-by-Page Architecture](#4-page-by-page-architecture)
5. [Animation & Motion System](#5-animation--motion-system)
6. [Tech Stack Recommendation](#6-tech-stack-recommendation)
7. [SEO Blueprint](#7-seo-blueprint)
8. [Performance Plan](#8-performance-plan)
9. [The Premium Feel Checklist](#9-the-premium-feel-checklist)
10. [Closing — Rollout](#10-closing--rollout)

---

## 0. Executive Summary

The ENT Clinic, Silchar exists exclusively as a Google Maps pin. It has one of the largest unaddressed ENT catchments in Northeast India — and zero owned digital surface to capture it.

This blueprint converts that gap into a defensible asset: a 14-page bilingual website, a hyperlocal SEO moat across Cachar / Karimganj / Hailakandi, an appointment engine that books on WhatsApp tap-to-chat, and a calibrated motion language that signals expertise without theatre.

The build is engineered to outperform every metro hospital site on the metrics that actually matter to a Silchar mother holding a phone in her left hand and a feverish child in her right: **time-to-first-tap, clarity-of-next-step, and trust per scroll.**

### Headline Targets

| Metric | Target | Notes |
|---|---|---|
| Catchment served | ~2.1M | Cachar + Karimganj + Hailakandi |
| Lighthouse score | 95+ on all 4 metrics | Measured on mid-tier 4G Android |
| Pages, MVP | 14 core + 12 condition microsites | Bilingual EN + BN |
| Primary action distance | 1 tap | Call · WhatsApp · Book — never more than one tap away |
| First booking from site | Within 14 days of go-live | Soft launch via existing WhatsApp list |

---

## 1. Business Intelligence Report

> Read the business before you draw a pixel. Every architectural decision in this document descends from the answers below. If a section in the build cannot trace itself back to a line in this report, it gets cut.

### 1.1 The Core Offer, Decoded

An ENT clinic in a Tier-2 Indian city is not an "ear-nose-throat" business. It is, in practice, four overlapping businesses sharing a waiting room:

- **Parental anxiety triage** — for ear infections, tonsils, and adenoids in children
- **Chronic-condition management** — for working-age adults with sinusitis, allergic rhinitis, and snoring
- **Aging-well practice** — for hearing aids, vertigo, and tinnitus in patients over 55
- **Surgical referral destination** — for cases routed from local GPs and Silchar Medical College outpatient queues

Each segment arrives with a distinctly different emotional posture. The website must speak four languages, calmly, on a single canvas.

### 1.2 The Ideal Customer, by Segment

| Segment | Trigger | Emotional Posture on Landing | What They Need to Feel |
|---|---|---|---|
| **Parent of a young child** | Recurring earache, mouth-breathing, snoring at night | Worried, time-poor, mobile-thumb scrolling at 11 pm | "This doctor sees children every day. I can book without calling. I will not wait three hours." |
| **Working adult, 28–45** | Year-round sinus pain, dust allergy, snoring complaint from spouse | Resigned, pragmatic, has tried home remedies | "Modern equipment. Clear pricing. They will not push surgery." |
| **Senior, 55+** | Hearing loss, vertigo episodes, tinnitus, post-stroke swallow issues | Cautious, often accompanied by a son or daughter doing the research | "They take time. They explain. The clinic is accessible. The hearing-aid trial is honest." |
| **GP / hospital referral** | Pre-surgical consult, audiology, endoscopy, biopsy | Professional, brisk, moving on a referral letter | "Specialist credentials are visible. Reports get sent back. Logistics work." |

### 1.3 The Primary Conversion Goal

**One action, three rails.** The website's only job is to route the visitor into a booked appointment slot. That action lives on three parallel rails because Tier-2 mobile users behave very differently from metro web users:

- **Rail 1 — Tap-to-call** remains the Tier-2 default. Surfaced in the sticky header, sticky bottom bar, and inline at every scroll depth.
- **Rail 2 — WhatsApp Business** click-to-chat with a pre-filled "I'd like to book" message. This is the highest-converting rail in Bengali-speaking households.
- **Rail 3 — Online slot picker**, opened in a sheet (not a new page), pre-loaded with the next three available slots, ₹ consultation fee shown, calendar invite emailed, ICS file downloadable.

> **ARCHIE Principle:** Every page on this site has exactly one primary action. No page is permitted to be passive. If a page cannot answer the question *"what does the user do here next?"* in five words, it does not exist.

### 1.4 Trust Signals: Missing Today, Mandatory Tomorrow

A Silchar patient currently has no way to verify, before walking in, that this is a competent specialist clinic. The Maps pin shows photos and reviews; that is the entirety of the trust surface. The website must build an expert-trust ladder, top to bottom:

- **Credential transparency** — full name, MBBS / MS-ENT / fellowship registry numbers (NMC State Council ID), years in practice, current and former hospital affiliations.
- **Clinical photography** — real photographs of the consultation room, instruments (otoscope, endoscopy tower, tympanometer, audiometry booth), and the doctor mid-examination. No stock photos. *Never* stock photos.
- **Reviews integrated** — Google reviews pulled live (not screenshots), with reply-to-review visible.
- **Pricing transparency** — published consultation fee in ₹. Consultation fee is the trust gate; vague "call for fees" loses 40%+ of mobile bookings.
- **Process clarity** — what happens in a first visit, in seven steps, with realistic time durations.
- **NMC compliance** — registration number visible in footer, no superlatives, no "best", no guarantees, no comparative claims.

### 1.5 The Emotional Journey, End-to-End

The user arrives carrying a small fear and an open browser. The site's job, scroll by scroll, is to convert fear into **recognition**, recognition into **relief**, relief into **resolve**. The motion language, the copy, the colour, the imagery, the placement of the booking action — every element must lower cortisol, not raise it.

> *"The premium feel of a medical website is not luxury. It is the absence of friction in the moment a patient is most anxious."*

### 1.6 The Three Competitors That Actually Matter

| Competitor | Strength | Weakness | How We Position |
|---|---|---|---|
| **Silchar Medical College ENT** | Free, government-trusted, surgical depth | 3–5 hour waits, no continuity of care, no online presence | "Same expertise, no queue, your time respected." |
| **Practice on Practo / Lybrate** | Already discoverable online, online booking exists | Generic listing, no narrative, no specialisation depth | Own the specialist tier above the directory listings — a website beats a profile. |
| **Apollo / Manipal in Guwahati** | Brand recognition, surgical infrastructure | 5–6 hour drive, ₹15K+ travel cost per visit, impersonal | "Apollo-grade ENT care — without the Guwahati flight." |

---

## 2. Current Site Audit

> There is no site. That is the audit. A Google Business Profile is not a website. It is a rented room above someone else's shop.

### 2.1 Audit Scorecard (out of 10 per axis)

| Axis | Score | Diagnosis |
|---|---|---|
| **Discoverability** | 3 / 10 | Google Business Profile exists; ranks for branded queries only. Symptom-led queries ("ear pain doctor Silchar") return zero owned surface. |
| **Trust on landing** | 2 / 10 | No published doctor credentials, no clinical photography, no published consultation fee. Patients are asked to phone-and-find-out. |
| **Booking friction** | 4 / 10 | Tap-to-call works. WhatsApp not surfaced. No online slot picker. No calendar reminder. Asynchronous patients are lost. |
| **Mobile experience** | 3 / 10 | GBP mobile is generic Google chrome. No clinic identity, no narrative, no recovery from mid-funnel doubt. |
| **Bilingual reach** | 1 / 10 | Zero Bengali content surface. The dominant household language of the Barak Valley is invisible to Google. |
| **Schema / structured data** | 0 / 10 | No `MedicalClinic`, `Physician`, `FAQPage`, or `LocalBusiness` JSON-LD anywhere. Search-engine eligibility for rich results is nil. |
| **Content moat** | 0 / 10 | Patient-question-led content (the long-tail keyword universe) is unowned territory. First mover wins this market for a decade. |
| **Compliance posture** | 5 / 10 | No public claims means no public violations, but also no proactive trust artefacts (registration number, telemedicine policy, privacy notice). |

### 2.2 Composite Verdict

**Composite score: 18 / 80.** The asset is not broken — it is unbuilt. Which is rarer, and more valuable, than a redesign brief: nothing must be unlearned, nothing must be migrated, no legacy decisions are sunk-cost.

---

## 3. Sitemap

> 14 pages, 26 SEO destinations, zero dead corners. Every URL has a stated purpose, a primary action, and a measurable outcome. Pages with no measurable outcome are deleted before the figma file is opened.

### 3.1 The 14 Core Pages

```
/  The ENT Clinic, Silchar
├─ /                              [P1]  Home
├─ /about                         [P2]  About / story
├─ /doctor                        [P1]  Doctor profile
├─ /services                      [P1]  Services hub
│   ├─ /services/hearing-care
│   ├─ /services/sinus-allergy
│   ├─ /services/snoring-sleep
│   ├─ /services/paediatric-ent
│   ├─ /services/voice-throat
│   └─ /services/surgery
├─ /book                          [P1]  Booking flow
├─ /first-visit                   [P2]  What to expect
├─ /fees                          [P2]  Transparent pricing
├─ /location                      [P2]  Address + map + access
├─ /journal                       [P2]  Editorial blog hub
├─ /journal/[slug]                [P3]  Article template
├─ /contact                       [P3]
├─ /privacy                       [Compliance]
└─ /telemedicine-policy           [Compliance]
```

Priority key: **P1** = ship in MVP; **P2** = ship in weeks 4–6; **P3** = ship in weeks 7–10.

### 3.2 The 12 Condition Microsites (SEO Topical Authority)

These are not service pages. They are *patient-question pages* — each one a complete answer to a single high-intent search query in Silchar, written to win position one for that query and route the resolved patient into a booking.

```
/conditions/ear-pain-children-silchar
/conditions/sinusitis-treatment-silchar
/conditions/tinnitus-cure-cachar
/conditions/snoring-treatment-barak-valley
/conditions/hearing-aid-cost-silchar
/conditions/tonsil-surgery-cost-assam
/conditions/vertigo-specialist-silchar
/conditions/dust-allergy-treatment-silchar
/conditions/throat-infection-doctor-silchar
/conditions/sleep-apnea-test-silchar
/conditions/wax-removal-silchar
/conditions/nose-bleed-treatment-silchar
```

Each microsite ships in both `/en/` and `/bn/` with full hreflang annotation. The Bengali surface unlocks roughly 60% of the regional search universe that competitor metro hospitals do not address.

---

## 4. Page-by-Page Architecture

Below: the section-by-section blueprint for the seven highest-leverage pages. The remaining seven follow the same disciplines (one primary action, one emotional outcome, one measurable conversion).

### 4.1 Home — `/`

**Primary action:** Book an appointment.
**Hero scroll narrative:** recognition → trust → resolve.

| # | Section | Detail |
|---|---|---|
| i | **Hero** | Calm, full-bleed photograph of the consultation room (real, not stock). Headline in serif, set short: "Considered ENT care in the Barak Valley." Subhead: one line on the doctor and the clinic. Two buttons: *Book a slot* (primary, magnetic) and *WhatsApp* (secondary). Sticky tap-to-call appears on scroll. |
| ii | **The Doctor — at a glance** | Portrait, name, full credentials, NMC registration number, years in practice, languages spoken (Bengali, Hindi, English, Assamese). Two-line philosophy quote. |
| iii | **What we treat** | Six condition tiles — Hearing, Sinus, Snoring, Paediatric, Voice, Surgery — each linking to its full service page. Tile hover reveals a one-line outcome statement, not a feature list. |
| iv | **Patient stories** | Three real-name testimonials with the specific outcome ("My son's recurrent ear infections stopped after the third visit"). Pulled from Google Reviews via API; reviewer permission flow handled at intake. |
| v | **Inside the clinic** | Four-image gallery: reception, consultation room, audiometry booth, endoscopy setup. Lazy-loaded with LQIP blur-up. Caption each instrument by its clinical purpose (educates while it reassures). |
| vi | **How a first visit works** | Seven-step horizontal scroll on mobile, vertical timeline on desktop. Realistic durations beside each step. Anchor link to /first-visit. |
| vii | **Fees, plainly** | Consultation fee in ₹, with a one-line note on what is included. No "starting from", no asterisks. Price clarity is the highest-impact trust signal in this market. |
| viii | **Location & hours** | Embedded map (custom-styled, not Google default), drive-time chips for Silchar / Karimganj / Hailakandi, public-transport note, parking note, accessibility note (lift / step-free). |
| ix | **Closing — book a slot** | Single full-bleed dark-paper section. One question: *"Shall we see you this week?"* One action: book. WhatsApp + call as secondary rails. |

### 4.2 Doctor Profile — `/doctor`

**Primary action:** Book this specialist.
**Tone:** Quiet authority, not corporate bio.

| # | Section | Detail |
|---|---|---|
| i | **Editorial portrait** | Half-page photograph, natural light, eye-level, no white-coat-cliché. Caption: full name, MS (Otorhinolaryngology), fellowships, years in practice. |
| ii | **Practice philosophy — 200 words** | First-person voice. What the doctor believes about how ENT care should be delivered in the Barak Valley. The one paragraph a referring GP forwards to a patient. |
| iii | **Training & credentials** | Timeline: MBBS (institution, year), MS-ENT (institution, year), fellowships, hospital affiliations past and present. NMC registration number prominent. Verifiable, citable. |
| iv | **Areas of clinical interest** | Six bullet specialisations with one-line context — paediatric ENT, otology, rhinology, sleep medicine, voice, surgical ENT. |
| v | **Publications, talks, teaching** | Quiet credibility. Five most recent. Linked where public. |
| vi | **Languages** | Stated explicitly. Bengali / Hindi / English / Assamese. Removes a friction question patients are too polite to ask. |
| vii | **Book with the doctor** | Sticky-on-scroll booking card with the next three available slots and the consultation fee. |

### 4.3 Booking — `/book`

**Primary action:** Confirm a slot.
**Design discipline:** Three taps maximum from landing to confirmation.

| # | Section | Detail |
|---|---|---|
| i | **Slot picker** | Calendar collapsed by default to the next 14 days. Slots shown in 15-minute increments. ₹ fee shown beside each slot. Payment optional at booking; default is pay-at-clinic. |
| ii | **Patient details** | Three fields: name, mobile, reason-for-visit (optional). No email required. WhatsApp confirmation by default; SMS fallback. |
| iii | **Confirmation** | Confirmation page with .ics download, Add-to-Google-Calendar, "Get Directions" deep-link, and a what-to-bring list (ID, prior reports, list of medicines). |
| iv | **Reminder cadence** | WhatsApp reminder T-24h with one-tap reschedule. SMS reminder T-2h. Post-visit review request T+24h, on the channel the patient booked through. |

### 4.4 Service Page Template — `/services/[slug]`

**Primary action:** Book for this concern.
Template applies to all six service pages (Hearing Care, Sinus & Allergy, Snoring & Sleep, Paediatric ENT, Voice & Throat, Surgery).

| # | Section | Detail |
|---|---|---|
| i | **What this service treats — in plain language** | One paragraph, no jargon. The patient should recognise their own symptoms in three seconds. |
| ii | **When to see an ENT, not a GP** | Five bullet rules of thumb. Reduces wasted visits, builds long-term trust. |
| iii | **What we do at the clinic** | The clinical workflow: examination → diagnostic test → treatment options. Real instruments shown. |
| iv | **Treatment options, ranged conservatively** | Always start with the least invasive option. Surgery is presented as one of several paths, never the default. |
| v | **What it costs** | Range, in ₹, with what determines the position in the range. |
| vi | **FAQ — six questions, in patient voice** | Schema-marked. Targets the People Also Ask block. Bengali version at /bn/. |
| vii | **Book for this concern** | One-button CTA, pre-fills the booking reason field. |

### 4.5 First Visit, Explained — `/first-visit`

**Primary action:** Book.
**Why this page exists:** 30% of bookings convert *after* reading what to expect. Anxiety is a conversion blocker.

| # | Section | Detail |
|---|---|---|
| i | **Seven-step timeline** | Arrival → registration → vitals → consultation → examination → diagnostic tests if needed → treatment plan & follow-up. Realistic minutes alongside each step. Total time stated honestly. |
| ii | **What to bring** | Photo ID, prior reports (X-rays, audiograms, MRIs), a list of current medicines, your questions written down. |
| iii | **What we will not do** | An anti-pattern list. We will not recommend surgery on a first visit. We will not push hearing aids before audiometry. We will not test what we cannot interpret. Transparency is the entire trust play. |
| iv | **Coming with a child** | A short, kind paragraph for parents. Acknowledges anxiety; explains how children are examined gently. |

### 4.6 Location & Access — `/location`

**Primary action:** Get directions / Book.
**Local SEO weight:** highest-density NAP and schema page on the site.

| # | Section | Detail |
|---|---|---|
| i | **Address block** | Full address, NAP-perfect, copy-button beside it. Plus Code shown. Coordinates linked. |
| ii | **Custom-styled map** | Mapbox or Google with custom palette tuned to the brand cream. Marker is the clinic logo, not a default pin. Show NEINS landmark and Vivekananda Cooperative for orientation. |
| iii | **How to reach us** | Drive-time and distance from Silchar Railway Station, Silchar Airport, Silchar Medical College, Karimganj town centre, Hailakandi town centre. |
| iv | **Parking & accessibility** | Where to park, lift / step-free entry, wheelchair availability, paediatric pram access. |
| v | **Hours** | Day-by-day schedule, holiday calendar shown one week ahead. Currently-open status pulled from server time. |

### 4.7 Journal (the Content Moat) — `/journal`

**Primary action:** Read, then book.
**Strategic weight:** the entire long-tail SEO acquisition engine lives here.

| # | Section | Detail |
|---|---|---|
| i | **Editorial layout** | Magazine grid, not a blog list. Featured article hero, four secondary tiles, then chronological. Each card shows reading time, category, and the question the article answers. |
| ii | **Categories** | Hearing, Sinus & Allergy, Paediatric ENT, Sleep & Snoring, Voice & Throat, Hearing Aids, At-Home Care. |
| iii | **Article template** | Reviewed-by line with doctor's name + credentials. Last-updated date. Estimated reading time. Bilingual toggle. Inline FAQ schema. End-of-article CTA: "Worried about this for yourself or someone you love? Book a slot." |
| iv | **Cadence** | One article per week, year-round. Topics drawn from the question-mining keyword list (~340 unique queries identified for the SEO blueprint). |

---

## 5. Animation & Motion System

> Motion that signals expertise, not theatre. A medical website that moves like an Awwwards portfolio loses the patient. Motion here is editorial pacing, not flex. Every animation is on a budget, on a curve, and on a justification.

### 5.1 Foundation: Smoothness Without Compromise

- **Smooth scroll** — Lenis.js, instantiated globally, with `duration: 1.2` and a custom ease (`t * (2 - t)`). Disabled with `prefers-reduced-motion`.
- **Scroll-triggered animation** — GSAP `ScrollTrigger`, registered once at app root. All triggers batched; never one-trigger-per-element.
- **Page transitions** — Next.js App Router `view-transitions` API for native, fall back to a 220ms cross-fade. No Barba.js (pure overhead in a Next.js stack).
- **Easing language** — three curves only:
  - `cubic-bezier(0.16, 1, 0.3, 1)` for entrances
  - `cubic-bezier(0.7, 0, 0.84, 0)` for exits
  - `cubic-bezier(0.65, 0, 0.35, 1)` for stateful UI

### 5.2 Element-Level Motion Language

| Element | Motion | Trigger | Duration | Purpose |
|---|---|---|---|---|
| **Hero headline** | Staggered word reveal, 18px translateY → 0, opacity 0 → 1 | onload, post-font-ready | 900ms total, 60ms stagger | Editorial pacing, not splash |
| **Section serif headlines** | Single-line reveal with serif italic emphasis word arriving last | ScrollTrigger, 75% viewport | 650ms | Anchors attention without movement noise |
| **Body paragraphs** | Opacity 0 → 1, no translate | ScrollTrigger, 90% viewport | 500ms | Readable instantly; movement reserved for hierarchy |
| **Service tiles** | Stagger reveal, 24px translateY | ScrollTrigger, batched | 400ms each, 80ms stagger | Visual rhythm without strobe |
| **Number / KPI counters** | Animated count-up | ScrollTrigger, in-view | 1.4s, ease-out | Authority signal — only on hard data |
| **Image reveals** | Mask wipe (clip-path), bottom-up | ScrollTrigger | 900ms | Editorial; replaces fade |
| **CTA buttons** | Magnetic hover, max 6px displacement; 1.02 scale on press | mousemove + click | 180ms | Tactile confidence at decision moments |
| **Image hover** | 1.03 scale, 600ms ease | hover | 600ms | Subtle parallax of attention, no kineticism |
| **Loading state** | Skeleton screens — never spinners | route change, data fetch | matched to actual load | Spinners suggest waiting; skeletons suggest progress |
| **Form submission** | In-button micro-spinner; success → checkmark morph | submit | 320ms checkmark draw | Confirmation as motion, not modal |
| **Page transitions** | 180ms fade + 200ms shared-element on logo | route change | 200ms total | Continuity across navigation |

### 5.3 What We Explicitly Will NOT Do

- No parallax of large hero images (creates motion sickness on Tier-2 mid-tier devices).
- No background video on landing (unwatchable on metered mobile data — and unbookable when the LCP is a video).
- No looped Lottie illustrations (they consume main-thread budget and date the design within 18 months).
- No GSAP timeline scroll-jacking that overrides native scroll velocity. Lenis smooths; it does not hijack.
- No motion that runs while a form is open, focused, or in error state. Anxiety states deserve stillness.

> *"Motion is permitted only where it does work the static frame cannot do. Beauty without function is a liability."*

### 5.4 Performance Budget for Motion

| Layer | Budget | Why |
|---|---|---|
| GSAP + ScrollTrigger | ~28 KB gzip | Tree-shaken; only used plugins imported |
| Lenis | ~5 KB gzip | Single global instance |
| JS execution per scroll frame | < 4ms | Keeps main thread under 16ms for 60fps |
| Animation main-thread blocking on load | 0ms | All animations defer past first paint via `requestIdleCallback` |

---

## 6. Tech Stack Recommendation

> A stack chosen for speed in Silchar, not speed in Silicon Valley. Every dependency is justified by either performance, maintainability, or clinic-staff usability. Nothing exotic. Nothing fashionable. Everything boring, and that is the compliment.

### 6.1 Frontend

- **Next.js 15 (App Router, RSC)** — server components mean smaller client JS bundles, which means faster TTI on a Jio 4G handset in Silchar. The whole booking page can ship under 60 KB of client JS.
- **TypeScript, strict** — zero patient-data bug surface from typos.
- **Tailwind CSS** — utility classes inlined, no runtime CSS-in-JS, predictable LCP.
- **next/image** — AVIF first, WebP fallback, blur LQIP, responsive `sizes` properly set.
- **next/font (Fraunces + Inter, variable)** — self-hosted, `font-display: swap`, preloaded for the hero.

### 6.2 Motion & Interaction

- **GSAP 3 + ScrollTrigger** — industry standard; clinic license tier appropriate.
- **Lenis 1.x** — smooth scroll, 5 KB gzip.
- **Framer Motion** for component-level micro-interactions (button magnetism, modal sheets).

### 6.3 Content & Data

- **Sanity.io CMS** — bilingual document model (en + bn) with Portable Text. The doctor and a non-technical assistant can publish journal articles in 8 minutes from a phone.
- **Sanity Image CDN** — global edge transforms, perfect cropping, format negotiation per browser.
- **Vercel KV (Redis)** — caching the slot-availability lookups so the booking page hits 30ms TTFB.

### 6.4 Booking & Messaging

- **Cal.com (self-hosted) or Google Calendar API** — slot picker with conflict prevention and ICS generation.
- **WhatsApp Business Cloud API** via 360dialog or Wati — booking confirmations, T-24h reminders, post-visit review request. Templated messages for compliance.
- **Razorpay** — optional pay-at-booking; UPI primary, cards fallback. Supports international cards for diaspora bookings.
- **MSG91** — transactional SMS fallback for non-WhatsApp users.

### 6.5 Hosting & Edge

- **Vercel** — global edge with Mumbai region pinned for cold starts close to the catchment.
- **Cloudflare** in front for image hot-cache and DDoS / bot management.

### 6.6 Analytics & Observability

- **Plausible** (privacy-first, DPDP-friendly, no cookie banner needed).
- **Sentry** for client + server error tracking.
- **Vercel Analytics** for Core Web Vitals field measurement (real Silchar devices, not lab tests).

### 6.7 Why NOT WordPress / Webflow / Wix

Each ships ~280 KB of CSS and ~180 KB of JavaScript before a single character of content renders. On a mid-tier Android handset on a 3G-fallback connection in Kanakpur, that is a five-second hero-render delay — and a lost booking. The stack above ships under 90 KB initial JS to the booking page, which is the difference between a clinic that ranks and a clinic that does not.

### 6.8 Architecture in One Paragraph

Browser hits Cloudflare → Vercel edge serves a server-rendered Next.js page → static content streamed from the edge cache; dynamic slot data fetched from Vercel KV (warm) or Cal.com API (cold) → Sanity CDN serves the article body and images → on form submit, the booking is written to Cal.com, a WhatsApp message is queued via 360dialog, an SMS fallback is queued via MSG91, and the patient receives a confirmation page with the .ics file. **Total median end-to-end booking time, from landing to confirmation: under 90 seconds on a mid-tier Android.**

---

## 7. SEO Blueprint

> Local pack first. Topical authority second. Branded queries last. In Silchar, the ENT clinic that owns the local 3-pack and ranks page-one for ten symptom queries owns the entire market.

### 7.1 Layer 1 — The Google Business Profile is the Homepage

- Verify and own the GBP. Add the website URL, hours, all six service categories, 30+ photographs of the clinic and instruments, the doctor's profile, and a weekly Posts cadence.
- Categories: *Otolaryngologist* (primary), *ENT clinic, Audiologist, Hearing aid store, Sleep clinic* (secondary).
- Active Q&A — pre-seed the 12 most-asked patient questions.
- Service catalogue — list each of the six services with descriptions, link-back to the matching service page.
- Reply to 100% of reviews within 48 hours, in the language of the review.

### 7.2 Layer 2 — Technical SEO Architecture

- **Sitemap.xml** auto-generated, with `lastmod` on every page, separate sitemap for English and Bengali.
- **Robots.txt** permits all relevant crawlers, blocks staging.
- **Hreflang** annotations on every bilingual page: `en-IN`, `bn-IN`, `x-default`.
- **Canonical tags** on every page, pointing to the language-default version.
- **Breadcrumb structure** — visible breadcrumbs + `BreadcrumbList` JSON-LD on all non-home pages.
- **Internal linking** — every condition page links to two adjacent service pages and one journal article. Every journal article links to one service page. Spider hits depth-2 from any URL.
- **404 page** — surfaces site search, top services, and the booking CTA. A 404 still books.

### 7.3 Layer 3 — Schema.org Structured Data

```jsonc
// Sitewide, in <head> of every page
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "The ENT Clinic, Silchar",
  "medicalSpecialty": "Otolaryngologic",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lochan Bairagi Rd, Meherpur, Kanakpur",
    "addressLocality": "Silchar",
    "addressRegion": "Assam",
    "postalCode": "788005",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 24.8163027, "longitude": 92.8007081 },
  "openingHoursSpecification": [/* day-by-day */],
  "telephone": "+91-...",
  "sameAs": ["https://g.co/...", "https://www.practo.com/..."],
  "priceRange": "₹"
}

// On /doctor
{
  "@type": "Physician",
  "name": "Dr. ...",
  "medicalSpecialty": "Otolaryngologic",
  "availableService": [/* ... */],
  "hasCredential": [/* ... */]
}

// On /services/[slug]
{ "@type": "MedicalProcedure" /* or */ "MedicalTest" }

// On /journal/[slug]
{
  "@type": "MedicalWebPage",
  "reviewedBy": { "@type": "Physician", "name": "..." },
  "lastReviewed": "2026-..."
}

// On any page with FAQs
{ "@type": "FAQPage" }
```

### 7.4 Layer 4 — The Content Moat

~340 unique long-tail queries in the Barak Valley ENT vertical have no clear English winner today and no Bengali winner at all. The first publisher to systematically address them owns the topic for years. The journal is the engine.

| Cluster | Query Type | Article Cadence | Target |
|---|---|---|---|
| Symptom-led | "why does my child snore at night" | 2 / month | Top 3 organic, EN + BN |
| Cost-led | "hearing aid cost in silchar" | 1 / month | Featured snippet |
| Comparison-led | "hearing aid vs cochlear implant" | 1 / month | Authority + backlinks |
| Procedure-led | "what to expect after tonsil surgery" | 1 / month | Conversion-adjacent reading |
| Local condition-led | "dust allergy treatment cachar" | 1 / month | Local pack support |

### 7.5 Layer 5 — Off-Site Signals

- NAP-consistent listings on Practo, Lybrate, JustDial, Sehat, Apollo247 directory, Tata 1mg directory, IndiaMART healthcare, Sulekha, AskApollo, Bajaj Finserv Health, Healthgrades India.
- Doctoral society memberships listed on profile pages with do-follow backlinks: AOI (Association of Otolaryngologists of India), Cachar IMA chapter.
- Guest writing — one quarterly piece for The Sentinel (Assam) or The Telegraph (NE edition) on a public-health ENT topic.
- Press release on Wire19 / BusinessWorld Healthcare on opening / new equipment, syndicated to drive root-domain authority.

### 7.6 Layer 6 — Compliance Overlay (NMC 2023, DPDP Act 2023)

- No superlatives anywhere ("best", "top", "leading", "world-class") — auditable lint rule in the CMS publish flow.
- No before/after surgical photographs, no patient face photos without written consent on file.
- Doctor's NMC State Council registration number visible on /doctor and in the footer.
- Privacy policy details DPDP-compliant data handling, retention, deletion-on-request, and data fiduciary responsibilities.
- Telemedicine policy page references the Telemedicine Practice Guidelines (BoG, NMC) — published terms for any future virtual consult.
- Cookie / analytics: Plausible only — no third-party cookies; no DPDP consent banner needed.

---

## 8. Performance Plan

> 95+ Lighthouse on the only device that matters: a four-year-old Android in Kanakpur. The lab score is a starting line. The win condition is field performance — Real User Monitoring on actual patient devices in actual Silchar networks.

### 8.1 Core Web Vitals Targets

| Metric | Target | How |
|---|---|---|
| **LCP** | < 2.0s | Hero image preloaded, server-rendered, edge-cached |
| **CLS** | 0.00 | Every image, ad slot, embed has explicit width/height |
| **INP** | < 100ms | No long tasks > 50ms on main thread during interaction |
| **TTFB** | < 180ms | Vercel Mumbai edge for India catchment |

### 8.2 Image Strategy

- AVIF first, WebP fallback. Original JPEG/PNG never shipped to the browser.
- Hero image preloaded with `<link rel="preload" as="image" fetchpriority="high">`, served from the Sanity CDN with an explicit `w=` per breakpoint.
- Every image has a 24px-wide LQIP blur placeholder, base64-inlined into the HTML — zero CLS, zero blank flash.
- `loading="lazy"` on every below-the-fold image; `loading="eager"` on the hero only.
- Image budget per page: ≤ 320 KB total, ≤ 90 KB above the fold.

### 8.3 JavaScript Budget

- Initial JS to /book: ≤ 90 KB gzip.
- Initial JS to /: ≤ 70 KB gzip.
- GSAP + Lenis lazy-imported via `next/dynamic`, only on pages that use them, only after first paint.
- Third-party scripts: Plausible only on initial load. WhatsApp, Razorpay, Google Maps SDKs lazy-loaded on user intent.
- No analytics that block the main thread. No GTM. No Hotjar.

### 8.4 CSS Strategy

- Critical CSS inlined into `<head>` (≤ 14 KB).
- Remaining stylesheet async-loaded with `media="print"` swap pattern.
- No CSS-in-JS at runtime. Tailwind compiled at build time.
- Self-hosted variable fonts, subset to Latin + Bengali ranges.

### 8.5 Server & Edge Strategy

- Static-by-default — every page that can be statically rendered, is. Booking is the one ISR page (revalidate 60s).
- Vercel edge cache hit ratio target: > 95% for non-booking pages.
- Slot lookup cached in Vercel KV with 60-second TTL. Cold-start booking call: ≤ 200ms.
- Cloudflare in front: HTTP/3, Brotli compression, image hot-cache.

### 8.6 Field Measurement Protocol

- Vercel Speed Insights collects Real User Monitoring data, segmented by device class and connection type.
- Field 75th-percentile LCP target on Slow 4G: ≤ 2.5s.
- Field 75th-percentile INP on mid-tier Android: ≤ 200ms.
- Performance budget enforced in CI — pull request fails if any of: bundle > 90 KB on /book, hero image > 80 KB, total CLS > 0.05.

> **ARCHIE Standard:** A medical website is a public utility in the moment a patient needs it. Slow is unconscionable. Performance is a clinical concern.

---

## 9. The Premium Feel Checklist

Twenty things that make this site feel million-dollar — not because it cost a million, but because it earns it. Premium is the absence of every cheap default.

| # | Decision | Why |
|---|---|---|
| 01 | **Editorial typography over default sans-serif** | Fraunces (variable, optical-size axis) + Inter. Not Open Sans. Not Poppins. Visual class in the first three seconds. |
| 02 | **Warm cream background, not cold white** | #F6F1E6 reads like a magazine page. Pure white reads like a Word document. |
| 03 | **Forest green as the trust accent — not corporate blue** | Distinguishes from every Apollo / Manipal / Fortis lookalike in the country. |
| 04 | **Real photography, not stock** | Three half-day shoots: clinic interior, instrument detail, doctor at work. Stock is an instant downgrade signal. |
| 05 | **Generous, fearless whitespace** | If the design feels almost-empty, it is correct. Crowding is a Tier-3 default. |
| 06 | **Editorial pull quotes, set in italic serif** | One per major section. They invite slow reading; slow reading is high trust. |
| 07 | **Drop caps on long-form sections** | Magazine punctuation, not blog punctuation. |
| 08 | **Numbers in ranged italic** | "95+" with the + in italic. Tiny detail, enormous compounding effect. |
| 09 | **Custom-styled map, not default Google chrome** | The clinic's pin is the clinic's logo. The map palette matches the page palette. |
| 10 | **Sticky bottom action bar on mobile, hidden on desktop** | Tap-to-call is one thumb-stretch away from any scroll position. Premium is one-tap. |
| 11 | **Magnetic CTA buttons** | The cursor pulls slightly toward primary actions. Two pixels of attraction is the difference between feature and craftsmanship. |
| 12 | **Skeleton screens, never spinners** | Spinners say "we are slow". Skeletons say "we are coming". |
| 13 | **Mask-wipe image reveals, not fades** | The image emerges instead of arriving. Editorial cinema, not power-point fade. |
| 14 | **Booking confirmation with .ics download and a real "what to bring" list** | Confirmation is the highest-leverage trust moment. Most clinics waste it. |
| 15 | **Bilingual surface, not a Google Translate widget** | Bengali is hand-translated by a native medical writer. Translation widgets are an instant downgrade signal. |
| 16 | **NMC registration number visible in footer** | One line of text is the cheapest piece of credibility on the entire internet. |
| 17 | **"Reviewed by" line on every journal article** | "Reviewed by Dr. ____, MS-ENT, on ___" — Google's E-E-A-T currency, and a patient's reassurance. |
| 18 | **Published consultation fee in ₹, no asterisks** | Fee transparency is the single highest-converting trust signal in Indian healthcare. |
| 19 | **"What we will not do" section on /first-visit** | The list of what a clinic refuses to do is more memorable than the list of what it does. |
| 20 | **One question, repeated in the closing of every page** | "Shall we see you this week?" — set in italic serif. The same line everywhere. Patients begin to expect it. They begin to answer it. |

---

## 10. Closing — Rollout

The first booking from this site should arrive within **fourteen days** of go-live.

### 10.1 Phasing

- **Phase 1 — Weeks 1–3.** Copy, photography, design system, GBP optimisation. Ship: `/`, `/doctor`, `/services` (six pages), `/book`. Soft-launch to existing patients via WhatsApp on day 21.
- **Phase 2 — Weeks 4–8.** Journal engine, six condition microsites, Bengali surface, full schema rollout. `/first-visit`, `/fees`, `/location`, `/journal`.
- **Phase 3 — Weeks 9–12.** Full long-tail content cadence (1 article / week), RUM tuning, CRO on the booking funnel. Remaining 6 condition microsites. `/contact`, `/privacy`, `/telemedicine-policy`.

### 10.2 Contract Between Strategy and Execution

This document is the contract between strategy and execution. Every page in the build will be measured against the line it descends from in this blueprint. If the blueprint is wrong, we change the blueprint. If the build deviates from the blueprint, we change the build.

---

**ARCHIE Studio · Blueprint No. 0017 · The ENT Clinic, Silchar · May 2026 · Confidential — for client review**
