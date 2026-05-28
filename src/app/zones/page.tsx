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

            <div className="max-w-[820px] mx-auto mt-16 md:mt-20 flex flex-col gap-5">
              <h3
                className="text-[#0A1F26]"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-1px",
                  fontSize: "clamp(22px, 2.6vw, 28px)",
                  lineHeight: 1.2,
                }}
              >
                Comment nous organisons l&apos;intervention sur le Bassin de Thau
              </h3>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75]">
                Notre dépôt central est situé à Sète, sur le boulevard Jean-Mathieu Grangent. Trois camions ateliers
                équipés en pièces moteur (ACM, Somfy, Simu, Sommer), lames, ressorts et serrures, sillonnent en
                permanence le département : un véhicule couvre l&apos;axe Sète–Frontignan–Vic-la-Gardiole, un autre
                la rive sud Mèze–Bouzigues–Loupian–Poussan, et le troisième l&apos;axe Marseillan–Agde–Florensac.
                Cette organisation nous permet de garantir une intervention en moins de 30 minutes sur les 26 communes
                listées ci-dessus, 24h/24 et 7j/7.
              </p>
              <h3
                className="text-[#0A1F26]"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-1px",
                  fontSize: "clamp(22px, 2.6vw, 28px)",
                  lineHeight: 1.2,
                }}
              >
                Une couverture pensée pour le tissu commercial du Bassin de Thau
              </h3>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75]">
                Au-delà de Sète intra-muros (Centre, Mont Saint-Clair, Île de Thau, Quartier Haut, Pointe Courte), nous
                desservons toutes les communes du Bassin de Thau et de la frange littorale Hérault. Cela inclut les
                communes balnéaires (Marseillan-Plage, Vic-la-Gardiole, Frontignan-Plage), les villages conchylicoles
                (Bouzigues, Loupian, Mèze), les zones rurales viticoles (Gigean, Poussan, Montbazin, Villeveyrac), les
                franges périurbaines (Cournonsec, Cournonterral, Villeneuve-lès-Maguelone) et la zone Agde-Florensac-Pinet-Pomerols
                au sud-ouest. Si votre commune n&apos;apparaît pas, appelez-nous : nous étudions au cas par cas les
                interventions sur l&apos;Hérault élargi (Sérignan, Bessan, Marsillargues sur demande).
              </p>
              <h3
                className="text-[#0A1F26]"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-1px",
                  fontSize: "clamp(22px, 2.6vw, 28px)",
                  lineHeight: 1.2,
                }}
              >
                Délais d&apos;intervention indicatifs
              </h3>
              <ul className="text-[#4A5560] text-[16px] leading-[1.75] list-disc pl-5">
                <li>Sète et toutes les zones intra-muros : 15 à 25 minutes en horaires standards, 30 minutes la nuit</li>
                <li>Frontignan, Balaruc-les-Bains, Balaruc-le-Vieux : 20 à 30 minutes</li>
                <li>Mèze, Bouzigues, Loupian, Poussan : 25 à 40 minutes</li>
                <li>Marseillan, Marseillan-Plage, Pinet, Pomerols : 30 à 45 minutes</li>
                <li>Agde, Florensac : 35 à 50 minutes</li>
                <li>Villeneuve-lès-Maguelone, Vic-la-Gardiole, Mireval, Gigean : 35 à 50 minutes</li>
                <li>Cournonsec, Cournonterral, Montbazin, Villeveyrac : 40 à 55 minutes</li>
              </ul>
              <p className="text-[#4A5560] text-[16px] leading-[1.75]">
                Pour toute urgence en dehors de ces zones, appelez-nous au {siteConfig.telephone}. Un technicien
                évalue immédiatement la faisabilité et vous communique un délai ferme.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
