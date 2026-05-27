import Image from "next/image";
import Link from "next/link";
import { siteConfig, services } from "@/config/site";
import { serviceImages } from "@/lib/page-images";

const citySlug = siteConfig.citySlug;

// Tagline court par service pour la grille de 7 cards
const taglines: Record<string, string> = {
  depannage: "Rideau bloqué, moteur HS, lame déformée — technicien sur place sous 30 min.",
  installation: "Pose sur-mesure pour vitrines, commerces et entrepôts du Bassin de Thau.",
  reparation: "Lames, axes, ressorts, serrures et moteurs — pièces d'origine constructeur.",
  motorisation: "Passez à l'électrique : Somfy, Simu, ACM ou Nice avec formation utilisateur.",
  deblocage: "Rideau coincé en position haute ou basse — libération sans dégradation.",
  entretien: "Contrats annuels anti-corrosion adaptés à l'air iodé du littoral.",
  fabrication: "Acier galvanisé, aluminium, inox marine — sur-mesure dès 4 heures.",
};

export default function ServiceSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Nos services
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Tout le rideau métallique à Sète, sous un seul numéro
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
            Sept expertises intégrées pour les commerçants et artisans de Sète, Frontignan, Mèze, Marseillan et de tout le Bassin de Thau.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((s) => {
            const img = serviceImages[s.id]?.hero ?? serviceImages.depannage.hero;
            return (
              <Link
                key={s.id}
                href={`/${s.slug}-${citySlug}/`}
                className="group flex flex-col bg-[#F4F1EC] hover:bg-[#0E4F5C] rounded-[10px] overflow-hidden transition-colors"
              >
                <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden">
                  <Image
                    src={`/images/gallery/${img}`}
                    alt={`${s.name} rideau métallique à Sète — DRM Sète`}
                    title={`${s.name} rideau métallique Sète`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5 md:p-6 flex-1">
                  <h3
                    className="text-[#0A1F26] group-hover:text-white text-[20px] md:text-[22px] transition-colors"
                    style={{ fontWeight: 500, letterSpacing: "-0.5px" }}
                  >
                    {s.name} rideau métallique
                  </h3>
                  <p className="text-[#4A5560] group-hover:text-white/85 text-[14px] md:text-[15px] leading-[1.55] transition-colors flex-1">
                    {taglines[s.id] ?? s.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#E8633E] group-hover:text-white text-[13px] font-medium mt-3 transition-colors">
                    Découvrir →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
