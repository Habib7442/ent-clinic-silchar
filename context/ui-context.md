# UI Context: The ENT Clinic, Silchar

## 1. Design Philosophy
**"Editorial Apothecary"** — A high-end magazine aesthetic that prioritizes whitespace, sophisticated serif typography, and a warm, organic color palette. It should feel like a premium physical clinic: clean, expert, and unhurried.

## 2. Color Palette (The ARCHIE Palette)
| Token | Hex | Role |
| :--- | :--- | :--- |
| `paper` | `#F6F1E6` | Primary background (Warm cream, not cold white) |
| `paper-warm` | `#EFE7D4` | Secondary backgrounds and hover states |
| `paper-card` | `#FFFFFF` | Card backgrounds and elevated surfaces |
| `forest` | `#1E3A2B` | Primary trust accent (Logo, primary buttons, serif emphasis) |
| `forest-soft`| `#2F5740` | Secondary accents and subtle UI elements |
| `rust` | `#B65C36` | Action accent (Active links, notifications, eyebrows) |
| `gold` | `#C8A24A` | Subtle highlights and decorative elements |
| `ink` | `#14181A` | Primary text (High contrast) |
| `ink-soft` | `#2C322F` | Body text and secondary headings |
| `mute` | `#6B6B5C` | Tertiary text, captions, and disabled states |
| `hairline` | `rgba(20, 24, 26, 0.14)` | Borders and dividers |

## 3. Typography
| Use Case | Font | Weights | Notes |
| :--- | :--- | :--- | :--- |
| **Headlines** | `Fraunces` (Serif) | 300, 500, 700 | Variable font. Use `soft` axis for premium feel. |
| **Body** | `Inter` (Sans) | 400, 600 | Clean, readable, and professional. |
| **Monospace** | `JetBrains Mono` | 400 | Used for "Confidential" labels and small metadata. |

## 4. Spacing & Layout
- **Container:** Max-width `1180px` for desktop.
- **Whitespace:** Use generous padding (96px+ between sections) to avoid crowding.
- **Radius:** `4px` (Minimal rounding). Avoid the "bubbly" Tier-3 web look.
- **Borders:** Use `1px` hairlines.

## 5. Components & Interactions
- **Buttons:** Magnetic hover effect (max 6px displacement).
- **Images:** Mask-wipe reveals (bottom-up clip-path) instead of generic fades.
- **Cards:** Subtle `shadow-sm` on rest, `shadow-md` on hover with a `2px` upward translation.
- **Forms:** Focus states using `forest` hairlines, never default browser rings.

## 6. Iconography
- Use thin-stroke, sophisticated icons (e.g., Lucide or custom SVGs).
- Icons should be monochrome (`forest` or `mute`), using `rust` only for active conversion moments.
