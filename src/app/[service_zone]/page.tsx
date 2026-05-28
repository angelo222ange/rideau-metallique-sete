import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, services, zones } from "@/config/site";
import { parseSlug, generateSlug } from "@/lib/content";
import { generateServicePageContent, getZoneLocalData, generateZoneNarrative } from "@/lib/service-content";
import { serviceImages, getRealisationForZone, gal } from "@/lib/page-images";

const citySlug = siteConfig.citySlug;

export function generateStaticParams() {
  const params: { service_zone: string }[] = [];
  // REGLE 6.8 : services × zones uniquement (pas service-{citySlug} qui cannibalise la home).
  for (const s of services) {
    for (const z of zones) {
      if (z.slug === citySlug) continue;
      params.push({ service_zone: generateSlug(s.slug, z.slug) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service_zone: string }>;
}): Promise<Metadata> {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) return { title: "Page introuvable" };
  const isVille = parsed.zone === null;
  const zoneName = parsed.zone ? parsed.zone.name : siteConfig.city;
  const zoneCp = parsed.zone ? parsed.zone.postalCode : siteConfig.postalCode;
  // Pas de suffixe ici — layout.tsx ajoute "| DRM Sète" via metadata.title.template
  // Cible <= 65c total. "| DRM Sète" ajoute 11 caractères -> base <= 54.
  const baseTitle = `${parsed.service.name} rideau métallique ${zoneName} (${zoneCp})`;
  const titleNoCp = `${parsed.service.name} rideau métallique ${zoneName}`;
  // Zone longue (ex. Villeneuve-lès-Maguelone) : on garde aussi court qu'on peut.
  // Si meme sans CP > 54, on bypass le template suffix en ajoutant " — DRM Sète" inline
  // -- mais Next.js title template ajoute "| DRM Sète" via layout, donc on doit faire confiance au format final.
  // Solution : pour les zones >= 24c, on retire le CP ET on garde la base. Total max attendu ~ 67c (toleré par Google).
  const title = baseTitle.length > 54 ? titleNoCp : baseTitle;
  const description = isVille
    ? `${parsed.service.name} de rideau métallique à ${zoneName} ${zoneCp} : intervention 24h/24, devis gratuit, garantie 2 ans, Bassin de Thau.`
    : `${parsed.service.name} de rideau métallique à ${zoneName} ${zoneCp} : intervention 24h/24, devis gratuit, garantie 2 ans.`;
  // Anti-cannibalisation home : pour les pages service x ville-principale (isVille),
  // canonical = home + noindex (mémoire feedback_drm_cannibalisation_home_service)
  const canonical = isVille ? `${siteConfig.url}/` : `${siteConfig.url}/${service_zone}/`;
  const robots = isVille
    ? { index: false, follow: true, googleBot: { index: false, follow: true } }
    : undefined;
  return {
    title,
    description: description.slice(0, 158),
    alternates: { canonical },
    robots,
    openGraph: {
      title,
      description,
      images: [
        {
          url: gal(serviceImages[parsed.service.id]?.hero || "hero-grille-extensible.webp"),
          width: 1200,
          height: 630,
          alt: `${parsed.service.name} rideau métallique à ${zoneName}`,
        },
      ],
    },
  };
}

const iconSvg: Record<string, ReactElement> = {
  clock: <path d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  package: <path d="M21 8L12 3 3 8m18 0v8l-9 5-9-5V8m18 0l-9 5m0 0L3 8m9 5v8" />,
  calendar: <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM16 2v4M8 2v4M3 10h18" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  ruler: <path d="M16 4h4v16h-4M4 8v12h12V8M8 8V4h8v4M4 12h4M4 16h4" />,
  factory: <path d="M2 20h20M4 20V8l5 4V8l5 4V8l5 4v8M9 14h2M14 14h2M9 18h2M14 18h2" />,
  tools: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  magnifier: <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35" />,
  euro: <path d="M4 10h11M4 14h11M19 5a8 8 0 1 0 0 14" />,
  star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />,
  "shield-check": <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />,
  lightbulb: <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.74V18h8v-3.26A7 7 0 0 0 12 2z" />,
  tags: <path d="M20.59 13.41L11 22 1 12V2h10l9.59 9.59a2 2 0 0 1 0 2.83zM7 7v.01" />,
  droplet: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />,
  document: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />,
};

function Icon({ name }: { name: string }) {
  const path = iconSvg[name] || iconSvg.shield;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 sur 5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l2.9 6.6L22 9.6l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.5 2 9.6l7.1-1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default async function ServiceZonePage({
  params,
}: {
  params: Promise<{ service_zone: string }>;
}) {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) notFound();

  const service = parsed.service;
  const zone = parsed.zone;
  const isVille = zone === null;
  const zoneName = zone ? zone.name : siteConfig.city;
  const zoneSlug = zone ? zone.slug : citySlug;
  const zoneCp = zone ? zone.postalCode : siteConfig.postalCode;

  const content = generateServicePageContent(service.id, zoneName, zoneSlug);
  const imgs = serviceImages[service.id] || serviceImages.depannage;
  const zoneLocal = zone ? getZoneLocalData(zone.slug) : null;
  const zoneNarrative = zone ? generateZoneNarrative(service.id, zoneName, zone.slug) : null;

  const realisationImg = getRealisationForZone(zoneSlug, 0);

  // Maillage interne
  const otherServices = services.filter((s) => s.id !== service.id);
  // Pour la page ville principale : montrer 10 zones voisines (pills). Pour zone : 6 zones voisines.
  const zonesForPills = isVille ? zones.slice(0, 12) : zones.filter((z) => z.slug !== zoneSlug).slice(0, 8);

  // ============================================================================
  // JSON-LD Schema.org Service + FAQPage
  // ============================================================================
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/${service_zone}/#service`,
    name: `${service.name} de rideau métallique à ${zoneName}`,
    serviceType: `${service.name} rideau métallique`,
    description: content.intro,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.fullName,
      telephone: siteConfig.telephone || undefined,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1174 Boulevard Jean-Mathieu Grangent",
        addressLocality: siteConfig.city,
        postalCode: siteConfig.postalCode,
        addressRegion: siteConfig.region,
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
    },
    areaServed: {
      "@type": "Place",
      name: zoneName,
      address: {
        "@type": "PostalAddress",
        addressLocality: zoneName,
        postalCode: zoneCp,
        addressCountry: "FR",
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      areaServed: zoneName,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      ...(isVille
        ? []
        : [{ "@type": "ListItem", position: 2, name: zoneName, item: `${siteConfig.url}/zones/` }]),
      {
        "@type": "ListItem",
        position: isVille ? 2 : 3,
        name: service.name,
        item: `${siteConfig.url}/${service_zone}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* 1. HERO + BREADCRUMB */}
        <section className="relative w-full px-2 md:px-[10px] pt-2 md:pt-[10px]">
          <div className="relative w-full overflow-hidden rounded-[10px] min-h-[440px] md:min-h-[520px]">
            <Image
              src={gal(imgs.hero)}
              alt={`${service.name} de rideau métallique à ${zoneName} (${zoneCp}) — technicien DRM`}
              title={`${service.name} rideau métallique ${zoneName}`}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10, 31, 38, 0.70)" }} aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" aria-hidden />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-20 min-h-[440px] md:min-h-[520px]">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/80 text-[13px] mb-5">
                <Link href="/" className="hover:text-white">Accueil</Link>
                <span className="text-white/50">/</span>
                {isVille ? (
                  <span className="text-white">{service.name}</span>
                ) : (
                  <>
                    <Link href="/zones/" className="hover:text-white">{zoneName}</Link>
                    <span className="text-white/50">/</span>
                    <span className="text-white">{service.name}</span>
                  </>
                )}
              </nav>
              <h1
                className="text-white max-w-[920px] text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05]"
                style={{ fontWeight: 500, fontFamily: "var(--font-manrope)", letterSpacing: "-1.2px", color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                {isVille ? content.h1 : `${service.name} de rideau métallique à ${zoneName}`}
              </h1>
              <p
                className="text-white/90 text-[16px] md:text-[18px] leading-[1.6] mt-5 max-w-[720px]"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}
              >
                Intervention 24h/24 sur {zoneName} ({zoneCp}) — devis gratuit, garantie 2 ans pièces, techniciens DRM certifiés air marin Méditerranée.
              </p>
              <Link
                href={siteConfig.telephoneHref}
                className="inline-flex items-center justify-center h-11 px-6 mt-7 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
              >
                Appeler 04 48 14 12 98
              </Link>
            </div>
          </div>
        </section>

        {/* 1.5 NARRATIF ZONE-SPÉCIFIQUE (en tête pour dominer l'analyse sémantique cross-zones) */}
        {zoneNarrative && (
          <section className="bg-white py-12 md:py-16 px-5 md:px-10 border-b border-[#0A1F26]/5">
            <div className="max-w-[1000px] mx-auto">
              <div className="flex flex-col gap-5 items-center text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-[#E8633E]/10 text-[#E8633E] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h2
                  className="text-[#0A1F26]"
                  style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(26px, 3vw, 38px)" }}
                >
                  {zoneNarrative.contextTitle}
                </h2>
              </div>
              <div className="flex flex-col gap-5 max-w-[820px] mx-auto">
                {zoneNarrative.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.8]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2. STATS BANNER */}
        <section className="bg-white py-12 md:py-16 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { v: siteConfig.delai + " min", l: "Délai d'intervention" },
                { v: siteConfig.interventions, l: "Interventions réussies" },
                { v: siteConfig.experience, l: "Années d'expérience" },
                { v: siteConfig.rating + "/5", l: `Sur ${siteConfig.ratingCount} avis` },
              ].map((s) => (
                <div key={s.l} className="bg-[#0E4F5C] text-white rounded-[10px] p-6 md:p-7 text-center">
                  <div
                    className="text-[36px] md:text-[48px] leading-none mb-2"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 500, letterSpacing: "-1.2px" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-white/80 text-[14px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. INTRO SERVICE */}
        <section className="bg-white pb-16 md:pb-20 px-5 md:px-10">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative w-full h-[300px] md:h-[420px] rounded-[10px] overflow-hidden">
              <Image
                src={gal(imgs.intro)}
                alt={`${service.name} rideau métallique à ${zoneName} — intervention DRM Sète`}
                title={`${service.name} rideau métallique — ${zoneName}`}
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                {service.name} {isVille ? "à Sète" : `— ${zoneName}`}
              </span>
              <h2
                className="text-[#0A1F26] mb-5"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(26px, 3.2vw, 38px)" }}
              >
                {service.description}
              </h2>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75]">
                {content.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={siteConfig.telephoneHref}
                  className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
                >
                  Appeler 04 48 14 12 98
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center h-11 px-5 bg-[#FFFFFF] border border-[#0E4F5C] text-[#0E4F5C] hover:bg-[#0E4F5C] hover:text-[#FFFFFF] text-[14px] font-medium rounded-[5px] transition-colors"
                >
                  Nous écrire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TYPES D'INTERVENTION */}
        <section className="bg-[#F4F1EC] py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Nos prestations
              </span>
              <h2
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Types d&apos;intervention {service.name.toLowerCase()} à {zoneName}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {content.types.map((t, i) => (
                <article
                  key={i}
                  className="bg-white rounded-[10px] p-6 md:p-7 flex flex-col gap-3 shadow-[0_1px_2px_rgba(10,31,38,0.04)] hover:shadow-[0_4px_16px_rgba(10,31,38,0.08)] transition-shadow"
                >
                  <div className="w-12 h-12 rounded-[5px] bg-[#E8633E]/10 text-[#E8633E] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <span className="text-[#E8633E] text-[12px] tracking-[0.2em] uppercase font-medium">
                    Type {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[#0A1F26] text-[18px]" style={{ fontWeight: 600, fontFamily: "var(--font-manrope)" }}>
                    {t.title}
                  </h3>
                  <p className="text-[#4A5560] text-[14px] leading-[1.65]">{t.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5-6-7. SEO CONTENT BLOCKS (3 blocs alternés) */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-14 md:gap-20">
            {content.seoBlocks.map((block, idx) => {
              const reverse = idx % 2 === 1;
              const blockImg =
                idx === 0 ? imgs.seo1 : idx === 1 ? imgs.seo2 : imgs.realisation;
              return (
                <article
                  key={idx}
                  className={`w-full flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-[60px]`}
                >
                  <div className="relative w-full lg:w-[560px] h-[260px] md:h-[360px] lg:h-[400px] rounded-[10px] overflow-hidden shrink-0">
                    <Image
                      src={gal(blockImg)}
                      alt={`${service.name} rideau métallique ${zoneName} — illustration ${idx + 1}`}
                      title={`${service.name} ${zoneName} — détail ${idx + 1}`}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <span className="text-[#E8633E] text-[12px] tracking-[0.25em] uppercase font-medium">
                      [ {String(idx + 1).padStart(2, "0")} ]
                    </span>
                    <h2
                      className="text-[#0A1F26] text-[28px] md:text-[36px]"
                      style={{ fontWeight: 500, letterSpacing: "-1.2px", lineHeight: 1.15, fontFamily: "var(--font-manrope)" }}
                    >
                      {block.title}
                    </h2>
                    <p
                      className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75] max-w-[640px]"
                      dangerouslySetInnerHTML={{ __html: block.body }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 8. POURQUOI NOUS */}
        <section className="bg-[#0A2A33] py-16 md:py-20 px-5 md:px-10 text-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block bg-white/10 px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-white/70 mb-4">
                Pourquoi DRM Sète
              </span>
              <h2
                className="text-white"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {isVille
                  ? `Pourquoi confier votre ${service.name.toLowerCase()} à DRM Sète`
                  : `Pourquoi choisir DRM Sète pour ${service.name.toLowerCase()} à ${zoneName}`}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {content.pourquoi.map((p, i) => (
                <article
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-[10px] p-6 md:p-7 flex flex-col gap-3 border border-white/10"
                >
                  <div className="w-11 h-11 rounded-[5px] bg-[#E8633E] text-white flex items-center justify-center">
                    <Icon name={p.icon} />
                  </div>
                  <h3 className="text-white text-[17px]" style={{ fontWeight: 600, fontFamily: "var(--font-manrope)" }}>
                    {p.title}
                  </h3>
                  <p className="text-white/75 text-[14px] leading-[1.65]">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 9. REVIEWS LOCALISÉS */}
        <section className="bg-[#F4F1EC] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
            <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
              <div className="flex items-center gap-3">
                <div className="relative w-[80px] h-[28px]">
                  <Image
                    src="/images/marques/logo-google-avis.webp"
                    alt="Logo Google Avis"
                    title="Avis Google vérifiés"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <Stars />
                <span className="text-[#0A1F26] text-[14px] font-medium">
                  {siteConfig.rating}/5 · {siteConfig.ratingCount} avis
                </span>
              </div>
              <h2
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Avis sur notre service {service.name.toLowerCase()} à {zoneName}
              </h2>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
                Six retours d&apos;expérience de commerçants de Sète, Frontignan, Mèze, Marseillan et Balaruc — vérifiés Google, spécifiques au {service.name.toLowerCase()} de rideau métallique.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.reviews.map((r, i) => (
                <article
                  key={i}
                  className="bg-white rounded-[10px] p-6 md:p-7 flex flex-col gap-4 shadow-[0_1px_2px_rgba(10,31,38,0.04)]"
                >
                  <div className="flex items-center justify-between">
                    <Stars />
                    <div className="relative w-[60px] h-[20px]">
                      <Image
                        src="/images/marques/logo-google-avis.webp"
                        alt="Avis Google"
                        title="Avis Google vérifié"
                        fill
                        sizes="60px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-[#0A1F26] text-[15px] leading-[1.65] flex-1">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                    <div
                      className="w-[52px] h-[52px] rounded-full shrink-0 flex items-center justify-center text-white text-[20px]"
                      style={{ background: r.bg, fontFamily: "var(--font-manrope)", fontWeight: 600 }}
                      aria-label={`Initiale ${r.name}`}
                    >
                      {r.letter}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#0A1F26] text-[15px]" style={{ fontWeight: 600 }}>{r.name}</span>
                      <span className="text-[#4A5560] text-[12px]">{r.location}</span>
                      <span className="text-[#4A5560] text-[12px] mt-0.5">{r.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 10. PROCESS / ÉTAPES D'INTERVENTION */}
        <section className="bg-white py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Notre méthode
              </span>
              <h2
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Étapes de notre intervention {service.name.toLowerCase()}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {content.steps.map((step, i) => (
                <article
                  key={i}
                  className="bg-[#F4F1EC] rounded-[10px] p-6 md:p-7 flex flex-col gap-3 relative"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0E4F5C] text-white flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="text-[#E8633E] text-[36px] leading-none" style={{ fontFamily: "var(--font-manrope)", fontWeight: 500 }}>
                    {step.step}
                  </div>
                  <h3 className="text-[#0A1F26] text-[18px]" style={{ fontWeight: 600, fontFamily: "var(--font-manrope)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#4A5560] text-[14px] leading-[1.65]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zone spécifique (uniquement pour pages service×zone) */}
        {zoneLocal && (
          <section className="bg-[#F4F1EC] py-16 md:py-20 px-5 md:px-10">
            <div className="max-w-[1100px] mx-auto">
              <h2
                className="text-[#0A1F26] mb-6"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                {service.name} de rideau métallique sur {zoneName}, quartier par quartier
              </h2>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7] mb-8">
                {zoneLocal.specifique}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-[10px] p-6">
                  <h3 className="text-[#0A1F26] text-[18px] mb-3" style={{ fontWeight: 600 }}>Quartiers desservis</h3>
                  <ul className="flex flex-wrap gap-2">
                    {zoneLocal.quartiers.map((q) => (
                      <li key={q} className="text-[13px] bg-[#F4F1EC] text-[#0A1F26] px-3 py-1.5 rounded-full">{q}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-[10px] p-6">
                  <h3 className="text-[#0A1F26] text-[18px] mb-3" style={{ fontWeight: 600 }}>Rues d&apos;intervention</h3>
                  <ul className="flex flex-wrap gap-2">
                    {zoneLocal.streets.slice(0, 8).map((r) => (
                      <li key={r} className="text-[13px] bg-[#F4F1EC] text-[#0A1F26] px-3 py-1.5 rounded-full">{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-[10px] p-6">
                  <h3 className="text-[#0A1F26] text-[18px] mb-3" style={{ fontWeight: 600 }}>Lieux &amp; repères</h3>
                  <ul className="flex flex-wrap gap-2">
                    {zoneLocal.landmarks.slice(0, 8).map((l) => (
                      <li key={l} className="text-[13px] bg-[#F4F1EC] text-[#0A1F26] px-3 py-1.5 rounded-full">{l}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-[10px] p-6">
                  <h3 className="text-[#0A1F26] text-[18px] mb-3" style={{ fontWeight: 600 }}>Commerces &amp; professionnels</h3>
                  <ul className="flex flex-wrap gap-2">
                    {zoneLocal.commerces.map((c) => (
                      <li key={c} className="text-[13px] bg-[#F4F1EC] text-[#0A1F26] px-3 py-1.5 rounded-full">{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Réalisation phare */}
        <section className="bg-white py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative w-full h-[300px] md:h-[420px] rounded-[10px] overflow-hidden">
              <Image
                src={gal(realisationImg)}
                alt={`Réalisation ${service.name.toLowerCase()} rideau métallique à ${zoneName} par DRM Sète`}
                title={`Réalisation ${service.name} ${zoneName}`}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Une réalisation récente
              </span>
              <h2
                className="text-[#0A1F26] mb-4"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                {service.name} de rideau métallique exécuté à {zoneName}
              </h2>
              {zoneLocal ? (
                <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75] mb-6">
                  Notre équipe DRM Sète intervient sur <strong>{zoneName} ({zoneCp})</strong> et son périmètre, notamment {zoneLocal.streets.slice(0, 3).join(", ")} et autour des repères de {zoneLocal.landmarks.slice(0, 2).join(" et ")}. Véhicule équipé de toutes les pièces critiques (moteurs ACM, lames P57/P90, axes tubulaires, serrures profil européen) pour servir les {zoneLocal.commerces.slice(0, 2).join(" et ")} de votre quartier. Vous reprenez votre activité dans la journée.
                </p>
              ) : (
                <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75] mb-6">
                  Nos équipes DRM Sète interviennent sur {zoneName} et son périmètre avec un véhicule d&apos;intervention équipé de toutes les pièces critiques : moteurs ACM, lames P57/P90, axes tubulaires, serrures profil européen. Vous reprenez votre activité dans la journée, avec une attestation de garantie écrite.
                </p>
              )}
              <Link
                href={siteConfig.telephoneHref}
                className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
              >
                Appeler 04 48 14 12 98
              </Link>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="bg-[#F4F1EC] py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Questions fréquentes
              </span>
              <h2
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(28px, 3.5vw, 40px)" }}
              >
                FAQ — {service.name} de rideau métallique à {zoneName}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {content.faq.map((f, i) => (
                <details key={i} className="bg-white rounded-[10px] p-5 md:p-6 group">
                  <summary
                    className="cursor-pointer text-[#0A1F26] text-[17px] md:text-[18px] flex items-center justify-between gap-4 list-none"
                    style={{ fontWeight: 500, fontFamily: "var(--font-manrope)" }}
                  >
                    <span>{f.q}</span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#F4F1EC] text-[#0A1F26] flex items-center justify-center group-open:rotate-45 transition-transform">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.7] mt-4">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 12. MAILLAGE SERVICES (6 cards) */}
        <section className="bg-white py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Notre offre complète
              </span>
              <h2
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Nos autres services rideau métallique {isVille ? "à Sète" : `à ${zoneName}`}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {otherServices.map((s) => {
                const sImgs = serviceImages[s.id] || serviceImages.depannage;
                // Pages /{service}-{citySlug}/ supprimées (cannibalisation home) — fallback sur zone courante,
                // ou sur zones[0] si on est sur la ville-principale (cas légacy, ne devrait plus arriver).
                const targetSlug = isVille ? `${s.slug}-${zones[0].slug}` : `${s.slug}-${zoneSlug}`;
                return (
                  <Link
                    key={s.id}
                    href={`/${targetSlug}/`}
                    className="group bg-[#F4F1EC] rounded-[10px] overflow-hidden hover:shadow-[0_4px_16px_rgba(10,31,38,0.08)] transition-shadow"
                  >
                    <div className="relative w-full h-[180px]">
                      <Image
                        src={gal(sImgs.intro)}
                        alt={`${s.name} rideau métallique ${zoneName} — DRM`}
                        title={`${s.name} rideau métallique ${zoneName}`}
                        fill
                        sizes="(min-width: 1024px) 400px, 100vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-[#0A1F26] text-[17px] mb-2" style={{ fontWeight: 600, fontFamily: "var(--font-manrope)" }}>
                        {s.name} rideau métallique {isVille ? "à Sète" : `— ${zoneName}`}
                      </h3>
                      <p className="text-[#4A5560] text-[14px] leading-[1.6] mb-3">
                        {s.shortDescription}
                      </p>
                      <span className="text-[#E8633E] text-[13px] font-medium inline-flex items-center gap-1">
                        Voir le service <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Zones d'intervention pills (lien vers ce service dans 8-12 zones) */}
        <section id="zones-intervention" className="bg-[#F4F1EC] py-16 md:py-20 px-5 md:px-10" aria-labelledby="zones-heading">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="w-14 h-14 rounded-full bg-[#0E4F5C] text-white mx-auto mb-5 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Zones d&apos;intervention
              </span>
              <h2
                id="zones-heading"
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                {service.name} de rideau métallique dans le Bassin de Thau
              </h2>
              <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.7] mt-4 max-w-[760px] mx-auto">
                DRM Sète intervient au-delà de {zoneName} sur l&apos;ensemble du pourtour de l&apos;étang de Thau et du littoral héraultais. Notre flotte couvre toutes les communes du Bassin de Thau, jusqu&apos;à 25 km autour de Sète.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {zonesForPills.map((z) => (
                <Link
                  key={z.slug}
                  href={`/${service.slug}-${z.slug}/`}
                  className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#0E4F5C] hover:text-[#FFFFFF] px-4 py-2.5 rounded-full text-[#0A1F26] text-[14px] transition-colors"
                  aria-label={`${service.name} rideau métallique dans la commune de ${z.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{service.name} — {z.name}</span>
                  <span className="text-[12px] opacity-70">({z.postalCode})</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/zones/"
                className="text-[#0E4F5C] hover:text-[#E8633E] text-[14px] font-medium underline underline-offset-2"
              >
                Voir toutes nos zones d&apos;intervention
              </Link>
            </div>
          </div>
        </section>

        {/* 12.5 Carte zone d'intervention (OSM embed) — REGLE 6.7.G */}
        <section className="bg-white py-12 md:py-16 px-5 md:px-10" aria-labelledby="service-zone-map-heading">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2 max-w-[820px]">
              <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
                Zone d&apos;intervention
              </span>
              <h2
                id="service-zone-map-heading"
                className="text-[#0A1F26]"
                style={{ fontWeight: 500, letterSpacing: "-1.4px", fontFamily: "var(--font-manrope)", fontSize: "clamp(22px, 2.6vw, 32px)" }}
              >
                Carte d&apos;intervention DRM Sète à {zoneName}
              </h2>
              <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.6]">
                Notre technicien rejoint {zoneName} en 30 minutes pour toute urgence rideau métallique : déblocage, dépannage, motorisation, fabrication express.
              </p>
            </div>
            <div className="relative w-full h-[320px] md:h-[420px] rounded-[10px] overflow-hidden border border-[#0A1F26]/10">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=3.6%2C43.35%2C3.75%2C43.45&layer=mapnik&marker=43.4045%2C3.6968`}
                title={`Carte d'intervention DRM Sète à ${zoneName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                style={{ border: 0 }}
                aria-label={`Zone d'intervention rideau métallique à ${zoneName}`}
              />
            </div>
            <p className="text-[#4A5560] text-[13px] leading-[1.5]">
              Source : <a href="https://www.openstreetmap.org/?mlat=43.4045&mlon=3.6968#map=12/43.4045/3.6968" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0E4F5C]">OpenStreetMap</a> · Sète Agglopôle Méditerranée, Hérault (34).
            </p>
          </div>
        </section>

        {/* 13. CTA URGENCE */}
        <section className="bg-[#0A2A33] py-12 md:py-16 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
            <div>
              <h2
                className="text-white mb-2"
                style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)", fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                Urgence rideau métallique à {zoneName} ?
              </h2>
              <p className="text-white/80 text-[16px] leading-[1.6]">
                Un technicien DRM Sète est disponible 24h/24, 7j/7 — même le dimanche, sans majoration weekend ni nuit.
              </p>
            </div>
            <Link
              href={siteConfig.telephoneHref}
              className="inline-flex items-center justify-center h-12 px-6 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[15px] font-medium rounded-[5px] transition-colors whitespace-nowrap"
            >
              Appeler 04 48 14 12 98
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
