import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteConfig, services, zones } from "@/config/site";

const citySlug = siteConfig.citySlug;

export const metadata: Metadata = {
  title: "Plan du site — DRM Sète",
  description:
    "Plan du site DRM Sète : services, zones d'intervention, pages légales et articles de blog rideau métallique.",
  alternates: { canonical: `${siteConfig.url}/plan-du-site/` },
};

export default function PlanDuSitePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Plan du site"
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Plan du site" },
          ]}
        />

        <section className="bg-white py-16 md:py-20 lg:py-[80px] px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-12">
            <div>
              <h2 className="text-[#0A1F26] mb-5" style={{ fontWeight: 500, letterSpacing: "-1.2px", fontSize: "clamp(24px, 3vw, 32px)", fontFamily: "var(--font-manrope)" }}>
                Pages principales
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li><Link className="text-[#0E4F5C] hover:text-[#E8633E]" href="/">Accueil DRM Sète</Link></li>
                <li><Link className="text-[#0E4F5C] hover:text-[#E8633E]" href="/zones/">Toutes les zones d&apos;intervention</Link></li>
                <li><Link className="text-[#0E4F5C] hover:text-[#E8633E]" href="/blog/">Blog rideau métallique</Link></li>
                <li><Link className="text-[#0E4F5C] hover:text-[#E8633E]" href="/contact/">Contact & devis</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#0A1F26] mb-5" style={{ fontWeight: 500, letterSpacing: "-1.2px", fontSize: "clamp(24px, 3vw, 32px)", fontFamily: "var(--font-manrope)" }}>
                Services à Sète
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link className="text-[#0E4F5C] hover:text-[#E8633E]" href={`/${s.slug}-${zones[0].slug}/`}>
                      {s.name} de rideau métallique — {zones[0].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {services.map((s) => (
              <div key={s.id}>
                <h2 className="text-[#0A1F26] mb-5" style={{ fontWeight: 500, letterSpacing: "-1.2px", fontSize: "clamp(20px, 2.4vw, 26px)", fontFamily: "var(--font-manrope)" }}>
                  {s.name} de rideau métallique — toutes les communes
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {zones.map((z) => (
                    <li key={z.slug}>
                      <Link className="text-[#0E4F5C] hover:text-[#E8633E] text-[14px]" href={`/${s.slug}-${z.slug}/`}>
                        {s.name} rideau métallique {z.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-[#0A1F26] mb-5" style={{ fontWeight: 500, letterSpacing: "-1.2px", fontSize: "clamp(24px, 3vw, 32px)", fontFamily: "var(--font-manrope)" }}>
                Pages légales
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li><Link className="text-[#0E4F5C] hover:text-[#E8633E]" href="/mentions-legales/">Mentions légales</Link></li>
                <li><Link className="text-[#0E4F5C] hover:text-[#E8633E]" href="/confidentialite/">Politique de confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
