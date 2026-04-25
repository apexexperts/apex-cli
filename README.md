# APEX Experts AI Solutions — Website

A premium, production-grade marketing website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a signature cinematic CLI hero experience inspired by modern developer tool aesthetics.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system tokens, utilities, scanlines
│   ├── layout.tsx           # Root layout — fonts, metadata, header/footer
│   ├── page.tsx             # Main page — section orchestration
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/
│   ├── TerminalHero.tsx     # CLI hero — boot, ASCII logo, nav menu
│   ├── Header.tsx           # Sticky header — desktop + mobile nav
│   ├── Footer.tsx           # Site footer
│   ├── SectionReveal.tsx    # Scroll-triggered animation wrapper
│   └── sections/
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ProcessSection.tsx
│       └── ContactSection.tsx
```

## Where to Update Content

All placeholder content is labeled with `[PLACEHOLDER: ...]` markers. Key locations:

| Content             | File                                     |
|---------------------|------------------------------------------|
| Company copy        | `src/components/sections/AboutSection.tsx` |
| Service definitions | `src/components/sections/ServicesSection.tsx` |
| Project case studies| `src/components/sections/ProjectsSection.tsx` |
| Contact details     | `src/components/sections/ContactSection.tsx`, `src/components/Footer.tsx` |

## Where to Update SEO

| Setting             | File                   |
|---------------------|------------------------|
| Global metadata     | `src/app/layout.tsx`   |
| Sitemap             | `src/app/sitemap.ts`   |
| Robots              | `src/app/robots.ts`    |
| Domain URL          | All three files above — search for `apexexperts.net` |

## Contact Form Configuration

The contact form uses [Resend](https://resend.com) for reliable email delivery, [Upstash](https://upstash.com) for rate limiting, and [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for invisible spam protection.

To enable full production features:
1. Copy `.env.example` to `.env.local`.
2. Add your `RESEND_API_KEY`.
3. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` from your Upstash console.
4. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` from your Cloudflare dashboard.

The system includes:
- **Server-side Zod Validation**: Strict schema checking for all fields.
- **Honeypot Protection**: Detects automated bots.
- **Sliding Window Rate Limiting**: Prevents API abuse (3 requests per 10 mins per IP).
- **Turnstile Verification**: Advanced bot protection without UX friction.

## How the Hero Animation Works

The terminal hero (`src/components/TerminalHero.tsx`) is a state machine with these phases:

1. **idle** → Page loads, nothing visible
2. **booting** → Boot log lines appear sequentially
3. **logo** → ASCII "APEX" logo reveals line by line with glow
4. **prompt** → `apex ~$ navigate` is typed character by character
5. **menu** → Interactive navigation menu appears (keyboard + click)
6. **complete** → Ready state with blinking cursor

Timing is controlled by `setTimeout` chains in `useEffect` hooks. Each phase triggers the next.

**Reduced motion**: If `prefers-reduced-motion` is set, the entire sequence skips to the `complete` state instantly.

**Keyboard support**: Arrow keys / j/k navigate the menu, Enter scrolls to the selected section.

## Tech Stack

- **Next.js 16** — App Router, static generation
- **TypeScript** — strict mode
- **Tailwind CSS v4** — custom theme tokens
- **Framer Motion** — hero animation + scroll reveals
- **JetBrains Mono** — terminal typography
- **Inter** — UI typography
