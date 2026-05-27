# Roofinity — Full Site Topology

Reconnaissance date: 2026-04-29
Source: https://roofinity.framer.website/
Viewport: 1440px desktop

## Site-wide layout

- `<nav data-framer-name="Desktop">` fixed top, height 76px, white pill on scroll
- `<footer data-framer-name="Desktop">` shared across all pages, height ~1267px (CTA banner with bg image + 4-column links)
- Page header strip (440px) on every internal page: small hero with breadcrumb + page title

## Pages

### / (homepage)
Total height: 9965px

| # | Section | Height | Notes |
|---|---|---|---|
| 1 | Hero Section (HEADER) | 776 | Bg image (close-up roof) + headline + form "Request for a service" |
| 2 | About Section | 688 | "Protecting what matters most…" + 4 check-list items + 80% stat card |
| 3 | Process Section | 741 | 3-column process steps with images |
| 4 | Service Section | 2405 | 4 stacked horizontal cards (alternating image/text) |
| 5 | Mini CTA section | 730 | Full-bleed bg image (man with drill) + headline + CTA |
| 6 | Works Section | 1131 | Project gallery 2x2 grid |
| 7 | Review Section | 721 | Testimonial cards row with avatars (3 unique × 4) |
| 8 | FAQ Section | 670 | Accordion |
| 9 | Article Section | 836 | 3 blog teaser cards |
| - | Footer | 1267 | CTA bg image + footer links 4-col |

### /about
Total height: 6673px

| # | Section | Height | Notes |
|---|---|---|---|
| 1 | Page Header | 440 | "About Us" H1 + breadcrumb |
| 2 | Purpose Section | 1010 | "We serve peoples living place for peace" + image + checklist |
| 3 | Stat Section | 635 | "A few numbers we're proud of" — stats grid |
| 4 | Process / Service Areas | 1086 | "Our service areas" with location icons |
| 5 | Our Value Section | 737 | "Our core values" — 3 value cards |
| 6 | Team Section | 1423 | "Our professional roofers" — 6 team avatars (397w each) |
| 7 | CTA + Footer | inherit | "Ready to protect your home?" |

### /service
Total height: 4407px

| # | Section | Height | Notes |
|---|---|---|---|
| 1 | Page Header | 440 | "Our Services" H1 |
| 2 | Service Section | 1955 | List of services (4 cards alternating like homepage) |
| 3 | FAQ Section | 670 | "Everything you need to know" |
| - | CTA + Footer | inherit | |

### /services-details/[slug]
Total height: 2072px

| # | Section | Height | Notes |
|---|---|---|---|
| 1 | Page Header | 440 | Service name H1 + breadcrumb |
| 2 | Service Details | 945 | Hero image (1420w) + content text |
| - | CTA + Footer | inherit | |

→ 4 services exist: roof-inspection-maintenance, roof-replacement, roof-repair, roof-maintenance

### /blog
Total height: 3560px

| # | Section | Height | Notes |
|---|---|---|---|
| 1 | Page Header | 440 | "News & Articles" H1 |
| 2 | Article Section | 1777 | Blog cards grid (6 cards visible — 3 image teasers + 3 text cards likely) |
| - | CTA + Footer | inherit | |

### /blog-details/[slug]
Total height: 3734px

| # | Section | Notes |
|---|---|---|
| 1 | Hero with title image (1200w) + H1 | |
| 2 | Article body content | |
| 3 | "Read More Article" 3-card grid | |
| - | CTA + Footer | inherit |

→ 3 articles: signs-of-poor-roof-installation, why-proper-roof-ventilation, how-regular-roof-inspections

### /contact
Total height: 3004px

| # | Section | Height | Notes |
|---|---|---|---|
| 1 | Page Header | 440 | "Contact Us" H1 |
| 2 | Contact Section | 872 | Form (Name, Email, Number, Location select, Message) + sidebar |
| 3 | Process / Office Location | 1005 | "Our office location" — likely map + addresses |
| - | CTA + Footer | inherit | |

### /legal/privacy-policy + /legal/terms-conditions
Standard text-content pages. Page header + body + footer.

## Routing structure to implement

```
src/app/
├── page.tsx                                  # homepage
├── layout.tsx
├── globals.css
├── about/page.tsx
├── service/page.tsx
├── services-details/[slug]/page.tsx
├── blog/page.tsx
├── blog-details/[slug]/page.tsx
├── contact/page.tsx
├── legal/
│   ├── privacy-policy/page.tsx
│   └── terms-conditions/page.tsx
└── components/
    ├── Header.tsx              # shared fixed nav
    ├── Footer.tsx              # shared CTA + links
    ├── PageHeader.tsx          # 440px hero strip on internal pages
    └── (homepage sections)
```

## Interaction model summary

- **Header**: fixed position, white pill style with shadow. No scroll-driven shrink detected (height stays 76px).
- **Service cards (homepage)**: 4 stacked horizontal cards, each is `<a>` link to `/services-details/[slug]`. Likely hover state.
- **FAQ**: accordion, click-driven.
- **Form**: Framer Form Block (POST to Framer endpoint). For our clone, we replace with our own form action.
- **No smooth scroll library** detected (no `.lenis` class).
- **Animations**: Framer fade-up appear animations on scroll into view.
