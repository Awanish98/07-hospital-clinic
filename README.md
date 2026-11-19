# CAREWELL MEDICAL CENTRE — website demo

A standalone, client-showcase demo for a fictional multi-specialty clinic. It is a **non-operational sample website**: there is no real medical centre, no care is provided, and no data is transmitted anywhere.

## Brand and design system

- **Brand:** CAREWELL MEDICAL CENTRE — an invented, non-operational clinic concept.
- **Art direction:** calm, highly readable healthcare editorial. White and soft blue/teal surfaces with navy typography, generous spacing, clear rules, pill-shaped controls and a prominent amber demo notice.
- **Typography:** Lora (display headings) + Source Sans 3 (body and UI), loaded from the pre-existing Google Fonts links in `index.html`.
- **Palette tokens:** navy `#0d2d40` / `#123b52`, teal `#0b6b73` / `#0f818b`, soft blue `#e8f3f5` / `#f4f9fa`, warm amber demo notice `#fff4dc`.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px, exposed as `--space-1`…`--space-9`.
- **Shape and depth:** 8/14/22/30 px radii plus pill controls; restrained shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`).
- **Iconography:** Lucide icons at a consistent 1.6–1.9 stroke width, usually inside soft blue rounded squares.
- **Motion:** short 160–320 ms opacity/transform transitions only; `prefers-reduced-motion: reduce` disables all animation and smooth scrolling.
- **Imagery:** only the local JPGs in `public/images` are used. They are illustrative sample photographs, not images of a real facility or real clinicians. `assets/website-design-preview.png` is a preserved reference and is not used as site content.

## Sections and interactions

Single-page site with anchored sections:

- **Home** — split hero, prominent demo disclosure, illustrative photography, demo snapshot strip.
- **Departments** — six sample departments; each card selects that department in the directory and scrolls to it.
- **Doctor directory** — fictional names, illustrative portraits, sample biographies, filter chips with `aria-pressed`, live results count and a real empty state. No degrees, registrations, years of experience or other credentials are shown. “Enquire about this area” preselects the department in the form.
- **Facilities** — four-image gallery with an accessible lightbox (keyboard arrows, Escape, labelled close, focus trap and restore, captions, visible backdrop).
- **Patient guide** — example four-step pathway and checklist, explicitly marked as non-clinical.
- **Appointment request** — controlled form collecting only name, email, department, preferred date and an optional note. Blur/submit validation, `aria-invalid`/`aria-describedby`, focus moves to the first invalid field, and a demo-only success panel. Nothing is sent or saved.
- **Emergency / contact** — urgent-help notice, placeholder click-to-call link, documented placeholder WhatsApp link, `.invalid` email placeholder and address/hours placeholders.
- **FAQs** — accessible accordion with `aria-expanded`/`aria-controls`, keyboard operation and labelled regions.
- **Footer** — full demo notice, section links and back-to-top link.

Global behaviour: sticky responsive header, mobile menu with Escape/outside-click close and focus return, skip link, single `h1`, semantic landmarks, visible focus rings, AA-conscious contrast and no horizontal overflow at narrow widths.

## Commands

Run these from this folder (`P:\Demo_websites\07-hospital-clinic`):

```bash
npm install
npm run dev        # local development server
npm run typecheck  # TypeScript / lint check (tsc --noEmit)
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

No environment variables or API keys are required.

> Build note: `package.json` pins Rollup to `@rollup/wasm-node@4.68.7` through an npm override. This build environment blocks native `.node` binaries via Application Control, so the WASM Rollup build is used. On unrestricted machines the override may be removed to use the standard native Rollup package.

## Deployment

The build output in `dist/` is entirely static. Deploy it to any static host (Netlify, Vercel, GitHub Pages, S3/CloudFront, or a simple nginx/Apache static root). Set the deploy base path if the site is served from a sub-path. There is no backend, form endpoint, database or analytics integration. `index.html` includes `<meta name="robots" content="noindex,nofollow">` so the sample content is not intended for search indexing. Structured data is intentionally omitted because the business facts would be fictional.

## Sample-data disclosure

Everything on this site is sample content: the brand, departments, department descriptions, doctor names and biographies, gallery captions, guide text, FAQ answers, dates, availability and contact details. The doctors are fictional and their professional credentials are intentionally omitted. The photography is illustrative local demo imagery. There are no testimonials, ratings, awards or verified business facts. No diagnosis, prescription, patient portal or sensitive health-data collection exists.

## Placeholders a real client must replace

| Placeholder | Where | Replacement needed |
| --- | --- | --- |
| `0000 000 000` / `tel:0000000000` | Contact section | Real verified phone number (click-to-call) |
| `https://wa.me/000000000000` | Contact section | Real WhatsApp number; update the accessible label too |
| `hello@example.invalid` | Contact section | Real monitored email address |
| “Sample address to be supplied”, “Demo hours · not operational” | Contact section | Verified address and opening hours |
| “Fictional sample” doctor names, portraits and bios | Doctor directory | Client-approved names, images, biographies **and verified credentials** |
| Department names and descriptions | Departments | Real service list and approved copy |
| Gallery captions and facility photography | Facilities | Verified location images and captions |
| Demo success message and form flow | Appointment request | Client's confirmed booking/enquiry process and any real backend |
| FAQ copy and demo notice wording | FAQs / banner / footer | Real policies and legal copy |
| `© 2026 CAREWELL MEDICAL CENTRE` | Footer | Real legal entity, year and required notices |

Before launch, remove the demo banner/pills and `noindex` tag, replace all sample data, and connect any form handling through the client's own confirmed process. Do not reuse the demo profiles or claims as real professional credentials.
