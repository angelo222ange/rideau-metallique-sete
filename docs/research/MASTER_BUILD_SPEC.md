# Roofinity Clone — Master Build Specification

> Single source of truth for the builder. Inline CSS values are exact computed styles from the live site (`getComputedStyle`).

## Foundation (already wired)

- **Fonts** in `src/app/layout.tsx` via `next/font/google`: Manrope (heading) + Inter (body), CSS variables `--font-manrope` / `--font-inter`
- **CSS tokens** in `src/app/globals.css`: orange primary `#FC5F2A`, teal accent `#085B69`, dark orange `#B8360B`, light grey bg `#F1F4F7`, white bg, dark text `#060607`
- **Section padding standard**: `100px 40px` (`py-[100px] px-10`)
- **Border radius**: 5px buttons/cards, 10px hero images
- **All assets** downloaded to `public/template-17/`:
  - `keep/` — roofing photos (Bucket A)
  - `replace/` — generic photos to swap later (Bucket B, kept as placeholders for now)
  - `avatars/` — review (3) + team (6)
  - `icons/` — checks, arrows, area icons
  - `brand/` — logos, favicons

## Site-wide components (build first)

### `src/components/Header.tsx`
Shared fixed nav, 76px tall, white bg.

```
<nav> position: relative (it appears fixed-overlay over hero in DOM, but in our React app: render once at top of layout, position: sticky top-0 z-50)
  Container: flex justify-between items-center
  padding: 18px 40px
  bg: #ffffff
  height: 76px
  Logo (left): /template-17/brand/logo-header.svg width 144
  Center nav: links Home / About / Services / Blog / Contact (font-medium 14px)
  Right CTA: <a href="/contact"> "Contact Us Now"
    bg: #FC5F2A  color: #fff  padding: 8px 14px  border-radius: 5px  height: 40px  gap: 20px
```

### `src/components/Footer.tsx`
Shared footer, ~1267px tall total.

Structure (top → bottom):
1. **CTA banner** (~676px) — full-bleed bg image `keep/footer-cta-bg.webp` with overlay 40% black
   - centered: H2 "Ready to protect your home?" white 56px Manrope 500
   - subtitle paragraph
   - 2 CTA buttons: "Get a free quote" (orange) + "Contact us" (white outline)
2. **Footer links** (~591px) — bg `#085B69` (teal), white text
   - 4 columns: Logo+about / Quick Links / Services / Contact
   - bottom: copyright "© 2025 Roofinity. All rights reserved."

### `src/components/PageHeader.tsx`
Shared header strip on internal pages. 440px tall.

Layout:
- Full-bleed bg image (varies per page — see ASSET_MAPPING)
- Vertical center: breadcrumb (Home / Page) in white
- H1 page title: white, 80px Manrope 500, line-height 84px

Props: `{ title: string; bgImage: string; breadcrumb?: { label: string; href: string }[] }`

## Homepage — `src/app/page.tsx`

Imports all section components in order, Header above main, Footer below.

### `<HeroSection />` — `src/components/home/HeroSection.tsx`

```
height: 776px (header 76px + content 700px)
position: relative

Background <img>:
  src: /template-17/keep/hero-roof-blue-sky.webp
  width: 1420px  height: 700px
  border-radius: 10px
  position: absolute inset-0 (with 10px margin around)
  object-fit: cover

Content overlay (above image, with dark gradient overlay):
  flex flex-col items-center justify-center
  H1 (white, 80px / 84px / -2.4px / Manrope 500):
    "Reliable Roofing,
     Built to Last"
    width: 600px text-center
  Paragraph (white 18px Inter 400):
    "At Roofinity, we specialize in top-quality roof installation, repair, and maintenance services that protect your home and boost its value of your house."
  Form "Request for a service" (horizontal pill, max-w 1220px, height 47px, gap 16px):
    Inputs row: [Name (text)] [Email (email)] [Phone (tel)] [Location (select)]
      Each input: bg rgba(255,255,255,0.2) backdrop-blur, white placeholder, padding 12px, border-radius 5px
    Submit button:
      bg #FC5F2A, color white, "Get a Quote →", padding 8px 14px, border-radius 5px
```

Real text content (verbatim from site):
- H1: "Reliable Roofing, Built to Last"
- Subtitle paragraph (use exact wording above)

### `<AboutSection />` — `src/components/home/AboutSection.tsx`

```
section: padding 100px 40px, white bg, height ~688px
flex flex-col items-center

Top container (flex row gap 40):
  Left: "Logo SVG" /template-17/icons/about-logo-deco.svg (229×129)
  Right H2 (56px / 61.6px / -1.68px / Manrope 500):
    "Protecting what matters most reliable roofing from a team you can trust & built on trust, backed by quality"
    color: #060607
    max-width: 800px

Bottom container (flex row gap 32, w-full max-w 1280px):
  Left CARD: 
    width 512px, height 248px
    bg: #085B69 (teal)
    border-radius: 5px
    padding: 24px
    flex flex-col gap 10
    
    Top row (flex justify-between items-center):
      "80%" — huge number (white 80px Manrope 500)
      Logo SVG (60×60 white)
    Body text (white 16px Inter):
      "Roofinity Customers Save Up to 80% on Energy Bills with Our Insulated Roofing Solutions"
  
  Right ACCORDION/POINTS list (stacked 4 items, each ~50px tall):
    Each item flex row gap 12 items-center:
      Icon SVG 24×24 (use icons/check-1.svg etc from public/template-17/icons/)
      Bold text 16px (#060607)
    Items text:
      1. "Top-Tier Roofing Specialists"
      2. "Premium Materials Guaranteed"
      3. "On-Time Project Delivery"
      4. "Trusted by 1000+ Homeowners"
```

### `<ProcessSection />` — `src/components/home/ProcessSection.tsx`

```
section: padding 100px 40px, bg #F1F4F7, height 741px
flex flex-col items-center gap 40

Header row:
  Tag pill: bg white, padding 6px 14px, border-radius 999px, "[ How It Works ]" small uppercase grey
  H2 (color #060607): "Our simple roofing process"
  Subtitle paragraph

3-column grid (gap 24, max-w 1280):
  Each col has:
    Image (height 245px width 401px border-radius 5px)
      Use: keep/process/step-1.webp, keep/two-couvreurs-roof.webp (step 2), keep/process/step-3.webp
    Step number badge (top-left corner of image, circle bg orange #FC5F2A 40px white text)
    H3 (24px Manrope 500): step title
    Paragraph (16px Inter)
  
  Step content:
    1. "Free Consultation" — "We start with a free site visit and detailed roof assessment."
    2. "Custom Roofing Plan" — "Our experts design a tailored solution to fit your home and budget."
    3. "Professional Installation" — "Skilled crews install your roof using premium materials and techniques."
```

### `<ServiceSection />` — `src/components/home/ServiceSection.tsx`

```
section: padding 100px 40px, bg white, height ~2405px
flex flex-col items-center gap 40

Header (similar pattern as Process):
  Tag pill "[ Our Services ]"
  H2 "Comprehensive roofing services tailored to your needs"

4 cards stacked vertically (gap 60), each card 1280×440:
  flex flex-row items-center gap 60 (alternating image-left / image-right)
  
  Image side: width 600 height 440 border-radius 10
  Text side: flex-1
    Number "[ 1 ]" small uppercase orange
    H3 (40px Manrope 500): service name
    Paragraph (16px Inter)
    "Read More →" button (border-bottom orange) → /services-details/[slug]

  Cards:
    1. "Roof Installation" — keep/process/step-1.webp (or keep/two-couvreurs-roof.webp) — desc: "Expert installation services with premium materials, ensuring lasting protection and exceptional curb appeal."
       link: /services-details/roof-inspection-maintenance
    2. "Roof Replacement" — replace/service-card-2-wooden-chairs.webp (placeholder) — "Professional roof replacement using top-quality materials, expert workmanship, and lasting durability."
       link: /services-details/roof-replacement
    3. "Roof Repair" — replace/service-card-1-woman-bridge.webp (placeholder) — "Our expert repair high-quality services restore your roof's strength and protection."
       link: /services-details/roof-repair
    4. "Roof Inspection & Maintenance" — replace/service-card-4.webp — "High-quality roof inspection and maintenance services to keep your roof safe and durable."
       link: /services-details/roof-maintenance
```

### `<MiniCtaSection />` — `src/components/home/MiniCtaSection.tsx`

```
section: padding 10px (full bleed), height 730px
relative overflow-clip

Background image absolute inset-10:
  src: /template-17/keep/couvreur-power-drill.webp
  width: full  height: 710px
  border-radius: 10px
  filter: brightness 0.6 (or dark overlay 50%)

Centered content (white text):
  Tag pill "[ Why Choose Us ]" (small white uppercase, border 1px white/30)
  H2 (white 56px Manrope 500 max-w 700):
    "Experienced roofers ready to protect your home"
  Paragraph (white 18px Inter)
  CTA button: orange "Schedule a Free Consultation"
```

### `<WorksSection />` — `src/components/home/WorksSection.tsx`

```
section: padding 100px 40px, white bg, height 1131px

Header (same pattern):
  Tag "[ Our Works ]"
  H2 "Recent roofing projects we've completed"

Grid 2x2 (gap 24, max-w 1280):
  Each tile: image 625×367 border-radius 10
  Use keep/projects/1.webp 2.webp 3.webp 4.webp
  On hover: scale image 1.03 + show overlay with title + arrow
  Each image has caption below: project title (Manrope 500 24px) + location small text
  
  Captions:
    1. "Modern Asphalt Shingle Roof" — "Brooklyn, NY"
    2. "Premium Metal Roof Installation" — "Austin, TX"
    3. "Slate Tile Replacement" — "San Diego, CA"
    4. "Eco-Friendly Roof Coating" — "Portland, OR"
```

### `<ReviewSection />` — `src/components/home/ReviewSection.tsx`

```
section: padding 100px 40px, bg #F1F4F7, height 721px

Header center:
  Tag "[ Testimonials ]"
  H2 "What our customers say about us"

Row of 4 cards (gap 24, may scroll-x or stack on mobile):
  Card: bg white, border-radius 10, padding 28, max-w 320
  
  Top: 5 yellow stars row
  Body paragraph (16px Inter italic): customer review
  Footer flex row gap 12 items-center:
    Avatar 60×60 round (use avatars/reviewer-a.webp / b / c / a — 3 unique, 4 cards)
    Right column:
      Name (Manrope 500 16px)
      Location/role (Inter 14px grey)
  
  Reviews:
    1. "Excellent work and very professional team. Our new roof looks amazing!" — "Sarah Mitchell" — "Brooklyn, NY"
    2. "Quick response, fair pricing, and quality installation. Highly recommended." — "James Carter" — "Austin, TX"
    3. "They saved our home from leaks during the storm season. Lifesavers!" — "Emily Davis" — "San Diego, CA"
    4. "Best roofing company I've worked with. Top-notch results every time." — "Michael Brown" — "Portland, OR"
```

### `<FaqSection />` — `src/components/home/FaqSection.tsx`

```
section: padding 100px 40px, white bg, height 670px
flex row justify-between gap 80, max-w 1280

Left col (width 415):
  Tag "[ FAQ ]"
  H2 "Everything you need to know" (56px Manrope 500)
  Subtitle paragraph
  CTA: "Contact us →" link

Right col (flex-1):
  Accordion of 5 items:
    Each: padding 24 0, border-bottom 1px #060607/10
    Header (button flex justify-between):
      Question (Manrope 500 18px)
      Plus icon (rotates to X when open)
    Body (collapse, padding-top 16): answer paragraph
  
  Items:
    Q1: "What types of roofing services do you offer?"
       A: "We offer a full range of roofing services including installation, replacement, repair, and inspection for residential and commercial properties."
    Q2: "How long does a typical roofing project take?"
       A: "Most residential roofing projects are completed within 2 to 5 days, depending on the size and complexity of the project."
    Q3: "Do you provide free estimates?"
       A: "Yes, we offer free, no-obligation estimates for all our roofing services."
    Q4: "What roofing materials do you work with?"
       A: "We work with all major roofing materials including asphalt shingles, metal, slate, tile, and eco-friendly options."
    Q5: "Are your services insured and warranted?"
       A: "Absolutely. All our services come with comprehensive insurance coverage and material warranties up to 25 years."
```

### `<ArticleSection />` — `src/components/home/ArticleSection.tsx`

```
section: padding 100px 40px, white bg, height 836px

Header row (flex justify-between items-end max-w 1280):
  Left:
    Tag "[ Latest Articles ]"
    H2 "Insights, tips, and roofing knowledge"
  Right: link "View all articles →" /blog

3-card grid (gap 24):
  Each card: width 413, image 413×276 border-radius 10
  
  Card content:
    Image (use keep/blog/1-pink-house.webp / 2 / 3)
    Below image:
      Date small grey: "18 June, 2025"
      H3 Manrope 500 22px: title
      Read more arrow → blog detail
    
  Cards:
    1. "Signs of Poor Roof Installation You Shouldn't Ignore Ever"
       slug: signs-of-poor-roof-installation-you-shouldn-t-ignore-ever
       date: "18 June, 2025"
    2. "Why Proper Roof Ventilation Extends the Life of Roofing"
       slug: why-proper-roof-ventilation-extends-the-life-of-roofing
       date: "01 Dec, 2025"
    3. "How Regular Roof Inspections Save You from Costly Repairs"
       slug: how-regular-roof-inspections-save-you-from-costly-repairs
       date: "09 Nov, 2025"
```

## Internal pages

### `src/app/about/page.tsx`

PageHeader: title "About Us", bgImage `keep/page-header-about.webp`

Sections in order:
1. **Purpose Section** (1010px): two-column, left big image (`keep/about-page-main.webp` 1020w) + checklist; right H2 "We serve peoples living place for peace" + 4 check-item rows + CTA button
2. **Stat Section** (635px): bg #F1F4F7, H2 "A few numbers we're proud of", 4-stat grid (each: huge number + label) — "10+ years experience" "1000+ projects" "24/7 support" "100% satisfaction"
3. **Service Areas** (1086px): H2 "Our service areas" + 6-column grid of icons (use `icons/area-1..6.svg`) with city labels (cities: New York / Brooklyn / Queens / Austin / San Diego / Portland)
4. **Our Value Section** (737px): H2 "Our core values" + 3 value cards (bg white, border, padding 32)
   - "Integrity" / "Excellence" / "Customer-First"
5. **Team Section** (1423px): H2 "Our professional roofers for your haven" + 6 team cards (avatar 397w + name + role)
6. CTA banner identical to Footer top half (or just the CTA inline before footer)

### `src/app/service/page.tsx`

PageHeader: title "Our Services", bgImage `keep/page-header-service.webp`

Sections:
1. Service list (same 4 cards as homepage `<ServiceSection />` but with full descriptions and breadcrumb)
2. FAQ (reuse `<FaqSection />` with H2 "Everything you need to know")

### `src/app/services-details/[slug]/page.tsx`

PageHeader: title (from slug map), bgImage `keep/page-header-service-detail.webp`

Section "Service Details" (945px tall):
- Container max-w 1280
- Hero image full-width 1420 (use `keep/page-header-service-detail.webp`) — actually NO, the page header already shows this. So content section instead.
- 2-column layout:
  - Left main content (text — H2/H3, paragraphs, lists, blockquote in #085B69)
  - Right sticky sidebar:
    - Card: list of all services (with current highlighted) + "Get a quote" form

Slug → title map:
```ts
const services = {
  'roof-inspection-maintenance': { title: 'Roof Inspection & Maintenance', desc: 'High-quality roof inspection...' },
  'roof-replacement': { title: 'Roof Replacement', desc: 'Professional roof replacement...' },
  'roof-repair': { title: 'Roof Repair', desc: 'Our expert repair...' },
  'roof-maintenance': { title: 'Roof Maintenance', desc: 'Regular maintenance keeps...' },
};
```

### `src/app/blog/page.tsx`

PageHeader: title "News & Articles", bgImage `keep/page-header-blog.webp`

Section: 6-card blog grid
- Each card: image 625×ratio + date + H3 + arrow
- Images use keep/blog/1.webp ... 6.webp
- 6 dummy articles (see slug list above + 3 more)

### `src/app/blog-details/[slug]/page.tsx`

Hero image (1200w) + Article H1 + author/date row + body content (Markdown-style ProseStyle: Manrope headings, Inter body, blockquote with teal border-left, lists)

Bottom section: "Read More Article" — 3-card grid of related posts.

Static articles:
```ts
const posts = {
  'signs-of-poor-roof-installation-you-shouldn-t-ignore-ever': { title: 'Signs of Poor Roof Installation You Shouldn\'t Ignore Ever', img: 'keep/blog/1-pink-house.webp', date: '18 June, 2025' },
  'why-proper-roof-ventilation-extends-the-life-of-roofing': { title: 'Why Proper Roof Ventilation Extends the Life of Roofing', img: 'keep/blog/2-brown-roof.webp', date: '01 Dec, 2025' },
  'how-regular-roof-inspections-save-you-from-costly-repairs': { title: 'How Regular Roof Inspections Save You from Costly Repairs', img: 'keep/blog/3-roof-tiles.webp', date: '09 Nov, 2025' },
};
```

Body: 5-7 paragraphs of placeholder lorem-style content but well-structured (H2, H3, paragraph, ul, blockquote).

### `src/app/contact/page.tsx`

PageHeader: title "Contact Us", bgImage `keep/page-header-contact.webp`

Sections:
1. **Contact Section** (872px): 2-column
   - Left: "Start your roofing project now" — H2 + paragraph + form (Name, Email, Phone, Location select [Brooklyn / Austin / San Diego / Portland], Message textarea, Submit orange btn)
   - Right: contact info card with phone, email, address, hours + small Google Maps embed placeholder
2. **Office Location** (1005px): "Our office location" — full-width Google Maps iframe placeholder + 4 office cards (city + address + phone)

### `src/app/legal/privacy-policy/page.tsx` and `terms-conditions/page.tsx`

Simple page: PageHeader (title) + container max-w 800 with prose text (lorem-style legal content, multiple H2/H3/paragraphs/lists).

## Responsive behavior

All sections must respond at:
- Desktop ≥ 1280: as above
- Tablet 768-1279: section padding becomes 80px 24px, headings scale with clamp() already in globals.css
- Mobile < 768:
  - Section padding 64px 20px
  - 4-col grids → 1 col, 2-col layouts → stack
  - H1 80px → clamp 40-80
  - H2 56px → clamp 32-56
  - Hero form: stack inputs vertically, full-width
  - Service cards: stack image above text, image full-width

## Build verification

After creating all files:
```bash
cd ~/templates/template-17
npx tsc --noEmit
npx next build
```

Both must pass with zero errors.
