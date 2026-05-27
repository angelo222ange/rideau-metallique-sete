import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteConfig, zones } from "@/config/site";

export const metadata: Metadata = {
  title: "Zones d'intervention — DRM Sète et Bassin de Thau",
  description:
    "DRM Sète intervient sur Sète, Frontignan, Balaruc, Mèze, Marseillan, Agde et toutes les communes du Bassin de Thau. Découvrez la liste complète.",
  alternates: { canonical: `${siteConfig.url}/zones/` },
};

export default function ZonesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Zones d'intervention DRM Sète"
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Zones" },
          ]}
        />

        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12 max-w-[820px] mx-auto">
              <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-4">
                Bassin de Thau · Hérault
              </span>
              <h2 className="text-[#0A1F26] mb-5" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
                26 communes desservies depuis Sète
              </h2>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
                Nos techniciens DRM Sète interviennent sur l&apos;ensemble du Bassin de Thau, de la Pointe Courte à Florensac, en passant par Frontignan, Balaruc, Mèze, Marseillan et Agde. Cliquez sur votre commune pour découvrir nos services rideau métallique sur place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {zones.map((z) => (
                <Link
                  key={z.slug}
                  href={`/depannage-rideau-metallique-${z.slug}/`}
                  className="flex items-center justify-between p-5 rounded-[10px] bg-[#F4F1EC] hover:bg-[#0E4F5C] hover:text-white transition-colors group"
                >
                  <div>
                    <div className="text-[#0A1F26] group-hover:text-white text-[18px] font-medium" style={{ fontFamily: "var(--font-manrope)" }}>
                      {z.name}
                    </div>
                    <div className="text-[#4A5560] group-hover:text-white/80 text-[13px] mt-1">
                      {z.postalCode} · {z.distance} de Sète
                    </div>
                  </div>
                  <span className="text-[#E8633E] group-hover:text-white text-[20px]" aria-hidden>→</span>
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
