# Architecture: The ENT Clinic, Silchar

## 1. Tech Stack
| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 (App Router) | React framework with Server Components (RSC) |
| **Styling** | Tailwind CSS | Utility-first CSS for predictable LCP and zero runtime overhead |
| **CMS** | Sanity.io | Bilingual content management (EN + BN) and Image CDN |
| **Motion** | GSAP 3 + Lenis | Scroll-triggered editorial animations and smooth scrolling |
| **Database/Cache** | Vercel KV (Redis) | Caching slot lookups and API responses for <200ms TTFB |
| **Booking** | Cal.com / Google Cal | Appointment scheduling engine and conflict prevention |
| **Messaging** | WhatsApp Business API | Automated confirmations and T-24h reminders |
| **Deployment** | Vercel | Global Edge hosting with Mumbai region pinning |

## 2. System Boundaries
| Directory | Responsibility |
| :--- | :--- |
| `app/` | Next.js App Router: Routes, layouts, and Server Components |
| `app/(en)/` | English language localized routes |
| `app/(bn)/` | Bengali language localized routes |
| `components/ui/` | Primitive, reusable UI components (custom-styled, no stock defaults) |
| `components/editorial/` | High-fidelity section components (Hero, Story, Journal) |
| `lib/sanity/` | Sanity client, schemas, and GROQ query logic |
| `lib/booking/` | Cal.com/WhatsApp integration logic and API wrappers |
| `context/` | Six-file methodology documentation and build specs |

## 3. Storage Model
- **Sanity.io:** Source of truth for all "Medical" content (Doctor bio, service descriptions, journal articles, fees).
- **Vercel KV:** Transient cache for live appointment slots to prevent API rate-limiting and ensure instant page loads.
- **Local Assets:** Only branding SVG icons. All clinical photography is served via Sanity CDN (AVIF/WebP).

## 4. Auth & Access Model
- **Public Access:** No sign-up required for patients.
- **Booking Flow:** Contact-based authentication (Mobile/WhatsApp verification).
- **Admin Access:** Sanity Studio for the doctor and staff to manage content and articles.

## 5. Invariants (Unbreakable Rules)
1.  **Performance First:** Every page must ship <100KB of initial JavaScript. Pull requests fail if LCP exceeds 2.5s on slow 4G.
2.  **No Stock Photos:** Only real photography provided by the clinic is permitted. If an image is missing, use a branded placeholder.
3.  **Bilingual Parity:** Every `/en/` route must have a corresponding `/bn/` route with proper `hreflang` metadata.
4.  **Static-by-Default:** Every page must be statically generated (SSG/ISR) unless it requires real-time booking data.
5.  **Motion Constraint:** Animations must be disabled for users with `prefers-reduced-motion`. Motion must enhance readability, never delay it.
6.  **Price Transparency:** The consultation fee must be visible on the Home, Doctor, and Booking pages — never hidden behind a "Call for info" barrier.
