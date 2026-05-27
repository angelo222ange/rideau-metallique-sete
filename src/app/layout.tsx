import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DRM Sète — Dépannage Rideau Métallique 24h/24 · Bassin de Thau",
    template: "%s | DRM Sète",
  },
  description:
    "Dépannage, installation, motorisation et réparation de rideaux métalliques à Sète et sur le Bassin de Thau. Intervention en moins de 30 minutes, 24h/24 et 7j/7, devis gratuit, garantie 2 ans pièces.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "DRM Sète — Dépannage Rideau Métallique 24h/24",
    description:
      "Intervention en moins de 30 minutes sur Sète, Frontignan, Balaruc, Mèze, Marseillan, Agde et tout le Bassin de Thau.",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/gallery/hero-grille-extensible.webp",
        width: 1200,
        height: 630,
        alt: "Dépannage rideau métallique à Sète",
      },
    ],
  },
  other: {
    "geo.region": "FR-34",
    "geo.placename": "Sète",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/gallery/hero-grille-extensible.webp`,
  logo: `${siteConfig.url}/favicon.png`,
  description:
    "Spécialiste rideau métallique à Sète et sur le Bassin de Thau. Dépannage 24h/24, installation, motorisation, réparation, déblocage, entretien et fabrication.",
  email: siteConfig.email,
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
  areaServed: [
    "Sète", "Frontignan", "Balaruc-les-Bains", "Balaruc-le-Vieux", "Bouzigues",
    "Loupian", "Mèze", "Marseillan", "Marseillan-Plage", "Vic-la-Gardiole",
    "Mireval", "Gigean", "Poussan", "Montbazin", "Villeveyrac",
    "Villeneuve-lès-Maguelone", "Agde", "Pinet", "Pomerols", "Florensac",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.ratingCount,
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <Link href={siteConfig.telephoneHref} className="floating-cta-round" aria-label="Demander un devis">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Demander un devis
        </Link>
      </body>
    </html>
  );
}
