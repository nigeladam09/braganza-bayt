# AGENTS.md

- Next.js static export (App Router, TypeScript). No backend, no API routes, no server actions, no ISR.
- "Booking" opens a prefilled WhatsApp chat (`lib/whatsapp.ts`) — there is no real reservation system.
- Node 20+, pnpm. Commands: `pnpm install`, `pnpm dev`, `pnpm build` (outputs `out/`), `pnpm preview` (serves `out/`; static export has no `next start`).
- Structure:
  - `app/` — root layout, fonts, global tokens (`globals.css`), the single page.
  - `app/fonts/` — self-hosted woff2 files loaded via `next/font/local`. Do not switch to `next/font/google`: it fetches from Google's CDN at build time and intermittently 404s on stale edge-cached URLs, breaking deploys.
  - `components/<Name>/` — one component per folder, co-located `.module.css`. Shared UI state (modal, lightbox, booking selection) lives in a `context.tsx` provider per feature.
  - `lib/*.ts` — all site content (rooms, reviews, hosts, guest photos, group-stay table, WhatsApp message logic).
  - `public/images/{hosts,rooms/<slug>,kitchen,guests}/` — every photo as a real file, no base64.
  - `scripts/extract-images.mjs` — one-time migration script that pulled the original inline base64 images out of `index.html`; kept for provenance, not run again.
- Edit copy, room data, reviews, etc. in `lib/*.ts`, not component JSX.
- `app/globals.css` `:root` is the single source of truth for design tokens (color, radius). Component CSS Modules should reference `var(--token)`, not hardcode values.
- Images must go through `next/image` with `unoptimized: true` (set in `next.config.ts`) since static export has no image optimization server.
- New images follow `public/images/<category>/<slug>/<name>.jpg`.
