import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, services, zones } from "@/config/site";

export const metadata: Metadata = {
  title: "Page introuvable (404)",
  description:
    "Cette page n'existe pas. Découvrez nos zones d'intervention et nos services de dépannage rideau métallique à Sète et sur le Bassin de Thau.",
  robots: { index: false, follow: true },
};

const defaultZoneSlug = zones[0].slug;

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        {/* Hero 404 — fond sombre, lisible */}
        <section className="bg-[#0A2A33] text-white px-5 md:px-10 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto text-center">
            <span
              className="inline-block bg-[#E8633E] px-4 py-2 rounded-full text-[12px] tracking-[0.2em] uppercase font-medium mb-6"
              style={{ color: "#FFFFFF" }}
            >
              Erreur 404
            </span>
            <h1
              className="text-white mb-5"
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--font-manrope)",
                fontWeight: 500,
                fontSize: "clamp(40px, 6vw, 72px)",
                letterSpacing: "-2px",
                lineHeight: 1.05,
                textShadow: "0 2px 12px rgba(0,0,0,0.4)",
              }}
            >
              Cette page n&apos;existe pas
            </h1>
            <p
              className="text-[17px] md:text-[19px] leading-[1.6] mb-8 max-w-[640px] mx-auto"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Le lien est obsolète ou la page a été déplacée. Besoin d&apos;un dépannage urgent
              de rideau métallique à {siteConfig.city} ou sur le Bassin de Thau&nbsp;? Nos techniciens
              interviennent en moins de 30&nbsp;minutes, 24h/24, 7j/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link
                href={siteConfig.telephoneHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#E8633E] hover:bg-[#C44A26] text-[15px] font-semibold rounded-[5px] transition-colors"
                style={{ color: "#FFFFFF" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Appeler {siteConfig.phone}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 bg-white/15 hover:bg-white/25 backdrop-blur text-[15px] font-medium rounded-[5px] transition-colors border border-white/30"
                style={{ color: "#FFFFFF" }}
              >
                Retour à l&apos;accueil
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[640px] mx-auto">
              <Link
                href="/zones/"
                className="bg-white/10 hover:bg-white/15 rounded-[5px] px-4 py-3 text-left transition-colors"
                style={{ color: "#FFFFFF" }}
              >
                <span className="block text-[14px] font-semibold mb-1">Toutes les zones d&apos;intervention</span>
                <span className="block text-[12px]" style={{ color: "rgba(255,255,255,0.7)" }}>Sète, Frontignan, Balaruc, Mèze, Marseillan…</span>
              </Link>
              <Link
                href="/contact/"
                className="bg-white/10 hover:bg-white/15 rounded-[5px] px-4 py-3 text-left transition-colors"
                style={{ color: "#FFFFFF" }}
              >
                <span className="block text-[14px] font-semibold mb-1">Devis gratuit en ligne</span>
                <span className="block text-[12px]" style={{ color: "rgba(255,255,255,0.7)" }}>Réponse sous 30 minutes</span>
              </Link>
              <Link
                href="/blog/"
                className="bg-white/10 hover:bg-white/15 rounded-[5px] px-4 py-3 text-left transition-colors"
                style={{ color: "#FFFFFF" }}
              >
                <span className="block text-[14px] font-semibold mb-1">Conseils &amp; guides</span>
                <span className="block text-[12px]" style={{ color: "rgba(255,255,255,0.7)" }}>Entretien, motorisation, choix moteur</span>
              </Link>
              <Link
                href="/plan-du-site/"
                className="bg-white/10 hover:bg-white/15 rounded-[5px] px-4 py-3 text-left transition-colors"
                style={{ color: "#FFFFFF" }}
              >
                <span className="block text-[14px] font-semibold mb-1">Plan du site</span>
                <span className="block text-[12px]" style={{ color: "rgba(255,255,255,0.7)" }}>Toutes les pages disponibles</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Services rapides */}
        <section className="bg-white px-5 md:px-10 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-[#0A1F26] text-center mb-10"
              style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)" }}
            >
              Nos services rideau métallique
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/${s.slug}-${defaultZoneSlug}/`}
                  className="bg-[#F4F1EC] hover:bg-[#0E4F5C] rounded-[5px] px-5 py-4 transition-colors group"
                >
                  <span className="block text-[16px] font-semibold text-[#0A1F26] group-hover:text-white mb-1">
                    {s.name} de rideau métallique
                  </span>
                  <span className="block text-[13px] text-[#4A5560] group-hover:text-white/80">
                    {s.shortDescription}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Zones populaires */}
        <section className="bg-[#F4F1EC] px-5 md:px-10 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-[#0A1F26] text-center mb-3"
              style={{ fontWeight: 500, letterSpacing: "-1.2px", fontFamily: "var(--font-manrope)" }}
            >
              Zones d&apos;intervention
            </h2>
            <p className="text-[#4A5560] text-center text-[15px] mb-8 max-w-[640px] mx-auto">
              Sète et toutes les communes du Bassin de Thau, de l&apos;étang à la Méditerranée.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-[900px] mx-auto">
              {zones.slice(0, 12).map((z) => (
                <Link
                  key={z.slug}
                  href={`/depannage-rideau-metallique-${z.slug}/`}
                  className="bg-[#FFFFFF] hover:bg-[#0E4F5C] hover:text-[#FFFFFF] px-4 py-2 rounded-full text-[#0A1F26] text-[14px] transition-colors border border-[#0A1F26]/10"
                >
                  {z.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
