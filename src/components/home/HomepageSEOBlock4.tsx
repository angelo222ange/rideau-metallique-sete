import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function HomepageSEOBlock4() {
  return (
    <section className="bg-[#F4F1EC] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-block self-start bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Engagement DRM Sète
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Transparence, <strong>garantie 2 ans</strong>, disponibilité 24h/24
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            Faire appel à DRM Sète, c&apos;est obtenir avant tout un <strong>devis gratuit</strong> et détaillé,
            poste par poste, sans aucun acompte demandé. Le tarif annoncé au téléphone est exactement celui que vous payez :
            pas de majoration weekend, pas de frais de nuit, pas de surcoût pour intervention en zone piétonne du centre-ville
            de Sète ou en bord à quai. Le déplacement et le diagnostic sont systématiquement offerts, que vous nous appeliez
            d&apos;un commerce du Quartier Haut, d&apos;un restaurant de Bouzigues ou d&apos;une boutique de Marseillan-Plage.
          </p>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            Une fois l&apos;intervention validée, vous bénéficiez d&apos;une <strong>garantie 2 ans pièces</strong> sur l&apos;ensemble des
            composants installés (moteurs, lames, axes, serrures, boîtes à ressort) et d&apos;<strong>1 an main-d&apos;œuvre</strong> sur la pose.
            Pour les rideaux soumis à un usage intensif, nous proposons des contrats d&apos;<strong>entretien annuel</strong> à partir de
            120 €/an qui couvrent visite technique, graissage, vérification des fins de course, contrôle du moteur et
            rapport d&apos;intervention écrit. <strong>L&apos;intervention 24h/24</strong> est assurée par une astreinte locale —
            jamais externalisée, jamais sous-traitée — composée uniquement de techniciens DRM expérimentés.
          </p>
          <Link
            href={siteConfig.telephoneHref}
            className="inline-flex items-center justify-center h-11 px-5 mt-2 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors self-start"
          >
            Demander un devis gratuit
          </Link>
        </div>

        <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/gallery/entretien-rideau-metallique-drm-france.webp"
            alt="Entretien préventif rideau métallique — air marin Méditerranée Sète"
            title="Entretien rideau métallique — DRM Sète"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
