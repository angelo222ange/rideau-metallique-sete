import Image from "next/image";
import Link from "next/link";
import { siteConfig, services, zones } from "@/config/site";

const citySlug = siteConfig.citySlug;
const footerZones = zones.slice(0, 12);

function SocialIcon({ name }: { name: "facebook" | "linkedin" | "pinterest" }) {
  if (name === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.5H5.67v7.84h2.67zM7 9.34a1.5 1.5 0 1 0 0-3.01 1.5 1.5 0 0 0 0 3.01zm11.34 9V13.9c0-2.47-1.33-3.6-3.1-3.6-1.43 0-2.07.78-2.43 1.34V10.5h-2.67c.04.78 0 7.84 0 7.84h2.67v-4.38c0-.24.02-.48.09-.66.2-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.21h2.74z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.62 7.83 6.32 9.29-.09-.79-.17-2 .04-2.86.18-.77 1.17-4.92 1.17-4.92s-.3-.6-.3-1.48c0-1.39.8-2.42 1.8-2.42.85 0 1.26.64 1.26 1.4 0 .85-.54 2.13-.82 3.31-.24.99.5 1.8 1.47 1.8 1.77 0 3.12-1.86 3.12-4.55 0-2.38-1.71-4.04-4.15-4.04-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.18.07.28-.07.32-.24.99-.27 1.13-.04.18-.14.22-.33.13-1.22-.57-1.98-2.34-1.98-3.77 0-3.07 2.23-5.89 6.43-5.89 3.38 0 6 2.4 6 5.62 0 3.35-2.11 6.05-5.05 6.05-.99 0-1.92-.51-2.24-1.12 0 0-.49 1.87-.61 2.32-.22.85-.82 1.92-1.22 2.57.92.28 1.89.44 2.91.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A2A33] text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 — logo + tagline + social */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logos/drm-sete-logo.png"
                alt="DRM Sète"
                width={52}
                height={52}
                className="w-13 h-13 object-contain rounded-full bg-white p-1"
                style={{ width: 52, height: 52 }}
              />
              <span
                className="text-[20px] font-bold text-white"
                style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.4px" }}
              >
                DRM Sète
              </span>
            </div>
            <p className="text-white/70 text-[15px] leading-[1.7] max-w-[320px] mb-6">
              Dépannage rideau métallique 24h/24 sur Sète et le Bassin de Thau. Intervention en moins de 30 minutes par des techniciens spécialistes du littoral méditerranéen.
            </p>
            <div className="flex items-center gap-3">
              {(["facebook", "linkedin", "pinterest"] as const).map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E8633E] transition-colors"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — services */}
          <div>
            <h4 className="text-white text-[16px] font-medium mb-5" style={{ letterSpacing: "-0.2px" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${s.slug}-${citySlug}/`}
                    className="text-white/70 text-[14px] hover:text-white transition-colors"
                  >
                    {s.name} de rideau métallique
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — zones */}
          <div>
            <h4 className="text-white text-[16px] font-medium mb-5" style={{ letterSpacing: "-0.2px" }}>
              Zones d&apos;intervention
            </h4>
            <ul className="flex flex-col gap-3">
              {footerZones.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/depannage-rideau-metallique-${z.slug}/`}
                    className="text-white/70 text-[14px] hover:text-white transition-colors"
                  >
                    {z.name} ({z.postalCode})
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zones/" className="text-[#E8633E] text-[14px] hover:text-white transition-colors font-medium">
                  Voir toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — contact */}
          <div>
            <h4 className="text-white text-[16px] font-medium mb-5" style={{ letterSpacing: "-0.2px" }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-white/70 mb-6">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
              <li>24h/24, 7j/7</li>
            </ul>
            <Link
              href={siteConfig.telephoneHref}
              className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
            >
              Appeler 04 48 14 12 98
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-white/60">
          <p>© 2026 DRM Sète. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales/" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/confidentialite/" className="hover:text-white">
              Confidentialité
            </Link>
            <Link href="/plan-du-site/" className="hover:text-white">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
      {/* placeholder Image import retained for compatibility */}
      <Image src="/favicon.png" alt="" width={1} height={1} className="hidden" aria-hidden />
    </footer>
  );
}
