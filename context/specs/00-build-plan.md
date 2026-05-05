# Build Plan: The ENT Clinic, Silchar

This document breaks the project into scoped, verifiable units. Each unit must be completed and verified before moving to the next.

## Phase 1: Foundation (Current)
| Unit | Name | Description | Visibility / Outcome |
| :--- | :--- | :--- | :--- |
| **01** | **Project Init** | Install core dependencies (GSAP, Lenis, Sanity) and set up folder structure. | Successful `npm run dev` with base folders. |
| **02** | **Sanity Setup** | Initialize Sanity Studio and define schemas for Doctor, Services, and Articles. | Access to Sanity Studio with working bilingual fields. |
| **03** | **Localization Core** | Implement App Router middleware/layouts for `/[lang]` routing (EN/BN). | `/en` and `/bn` routes render separate layout states. |

## Phase 2: Design System & UI Primitives
| Unit | Name | Description | Visibility / Outcome |
| :--- | :--- | :--- | :--- |
| **04** | **Aesthetic Baseline** | Configure Tailwind tokens, Fraunces/Inter fonts, and global CSS resets. | Site matches ARCHIE cream/forest palette and typography. |
| **05** | **UI Primitives** | Build Buttons (magnetic), Inputs, Modals, and "Paper" card components. | Storybook-like test page showing all base components. |
| **06** | **Global Nav** | Responsive bilingual Navbar and Sticky Mobile Action Bar (Tap-to-call). | Navigation works across lang switches; sticky bar on mobile. |

## Phase 3: Editorial Components & Layouts
| Unit | Name | Description | Visibility / Outcome |
| :--- | :--- | :--- | :--- |
| **07** | **Hero Narrative** | Build the Home Hero with GSAP word-reveal motion and LCP optimization. | Stunning, fast-loading Hero section with editorial pacing. |
| **08** | **Section Templates** | Build "Story", "Trust Gallery", and "Timeline" (First Visit) components. | Reusable sections that follow the ARCHIE layout rules. |
| **09** | **Doctor Profile** | Editorial page layout for `/doctor` with NMC credentials and portrait. | Professional doctor profile page with high trust signals. |

## Phase 4: Services & Content
| Unit | Name | Description | Visibility / Outcome |
| :--- | :--- | :--- | :--- |
| **10** | **Services Engine** | Build `/services` hub and the dynamic `/[slug]` service template. | All 6 services rendering bilingual content from Sanity. |
| **11** | **Journal / Blog** | Build `/journal` list and article view with FAQ schema. | Working blog with Portable Text and medical "Reviewed by" stamps. |

## Phase 5: Functional Features
| Unit | Name | Description | Visibility / Outcome |
| :--- | :--- | :--- | :--- |
| **12** | **Booking Engine** | Integrate Cal.com slot picker and Vercel KV for slot caching. | Users can pick a slot without leaving the site. |
| **13** | **Notification Flow** | Setup WhatsApp Business API / SMS bridge for booking confirmations. | Confirmation message received after test booking. |
| **14** | **Location & Access** | Implement custom Mapbox/Google map and location-specific SEO schema. | `/location` page with drive-times and custom-styled map. |

## Phase 6: SEO & Scale
| Unit | Name | Description | Visibility / Outcome |
| :--- | :--- | :--- | :--- |
| **15** | **Condition Moat** | Generate 12 condition microsites with full bilingual SEO metadata. | Searchable condition pages ranking for local symptoms. |
| **16** | **Final Polish** | Lighthouse audit, motion performance tuning, and cross-browser testing. | 95+ score on all metrics; perfect smooth-scroll performance. |
