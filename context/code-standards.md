# Code Standards: The ENT Clinic, Silchar

## 1. Core Principles
- **Server-First:** Use React Server Components (RSC) by default. Only add `'use client'` when interactivity or browser APIs are strictly required.
- **Strictly Typed:** Zero use of `any`. Every interface and type must be explicitly defined.
- **Performance-Centric:** All images must use `next/image` with optimized sizes. Fonts must be self-hosted via `next/font`.

## 2. TypeScript & React
- **Functional Components:** Use `const Component = ({ props }: Props) => { ... }`.
- **Props Naming:** Use `interface Props { ... }` or `interface ComponentProps { ... }`.
- **Data Fetching:** Fetch data as high up as possible in Server Components. Use the `lib/sanity` client with appropriate caching tags.

## 3. Styling (Tailwind CSS)
- **Token Usage:** Always use the design tokens defined in `ui-context.md` (e.g., `bg-paper`, `text-forest`).
- **Class Ordering:** Use the standard Tailwind order (Layout → Box Model → Typography → Visuals → Misc).
- **Responsive Design:** Mobile-first approach. Use `md:` and `lg:` prefixes for larger screens.
- **Avoid Arbitrary Values:** Use standard scale values unless specifically required by the blueprint.

## 4. File Organization
- **PascalCase** for component files (`HeroSection.tsx`).
- **kebab-case** for route directories (`/paediatric-ent`).
- **Co-location:** Keep tests and small sub-components in the same directory as the main component.

## 5. Bilingual Implementation
- **Translation Strategy:** Do not use runtime translation libraries. Use localized routes (`/en` and `/bn`) and pass a `lang` prop down to components.
- **Copy Management:** Store all text in Sanity.io. Hard-coded text in components is prohibited for any content that requires translation.

## 6. Naming Conventions
- **Variables:** `camelCase`
- **Constants:** `UPPER_SNAKE_CASE`
- **Files:** `PascalCase` for components, `camelCase` for utilities.
- **Functions:** Use verb prefixes (`getDoctorData`, `formatPrice`, `handleBooking`).

## 7. Comments & Documentation
- **JSDoc:** Required for complex utility functions and shared hooks.
- **Reasoning:** Comment on "why" a piece of logic exists, especially if it relates to a specific performance or medical compliance requirement.
