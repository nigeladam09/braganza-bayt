# Braganza Bayt

Braganza Bayt is the marketing and booking site for a small guesthouse in **Candolim, North Goa, India**. It showcases five individually styled rooms, real guest reviews, and a simple way for travelers to book a stay.

## What it does

- **Room showcase** — presents five rooms (The Stylish Boho, Trendy Terracotta Nest, The Olive Room, The Rainforest Suite, and Birdsong Nature Stylish), each with its own description, amenity list, photo gallery, and guest rating.
- **Host introductions** — introduces the hosts behind the property.
- **Guest reviews** — displays real reviews and ratings per room.
- **Group stays** — surfaces options for guests booking multiple rooms or larger groups.
- **Guest photo gallery** — shares photos submitted by past guests.
- **WhatsApp booking** — "Booking" opens a prefilled WhatsApp chat with the host rather than a traditional reservation system, keeping the booking flow simple and personal.

## Tech stack

- **Next.js** (App Router, TypeScript) — built as a fully static export, with no backend, API routes, or server actions.
- **CSS Modules** for component styling, driven by a shared set of design tokens (color, radius) defined in `app/globals.css`.
- **next/image** with `unoptimized: true`, since static export has no image optimization server.
- Self-hosted fonts via `next/font/local` (Bricolage Grotesque, Plus Jakarta Sans, IBM Plex Mono, Caveat).

## Project structure

- `app/` — root layout, fonts, global design tokens, the home page, and `app/privacy/` (privacy policy route).
- `components/<Name>/` — one component per folder, each with co-located styles; shared UI state (modals, lightbox, booking selection) lives in per-feature context providers.
- `lib/*.ts` — all site content: rooms, reviews, hosts, guest photos, group-stay details, and WhatsApp booking logic.
- `public/images/` — room, host, kitchen, and guest photos.
- `scripts/` — one-off migration tooling (not part of the regular build).

## Getting started

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # static export, output in out/
pnpm preview   # serve the out/ directory locally
```

See `AGENTS.md` for contributor and coding-agent guidelines, and `DESIGN.md` for the design token reference.
