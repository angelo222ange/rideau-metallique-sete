import Image from "next/image";

export default function HomepageSEOBlock3() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] rounded-[10px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/gallery/BI-Moteur-ACM-76-rideau-metallique.webp"
            alt="Moteur central ACM 76 — pièce d'origine constructeur DRM Sète"
            title="Moteur ACM 76 — DRM Sète"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 order-1 lg:order-2">
          <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Marques partenaires
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Des <strong>pièces d&apos;origine constructeur</strong>, jamais de copies
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            DRM Sète travaille en distribution officielle avec les fabricants leaders du secteur :
            <strong> ACM</strong> (moteurs centraux italiens, idéaux pour les rideaux lourds des commerces de Sète),
            <strong> Simu</strong> et <strong>Somfy</strong> (moteurs tubulaires français, parfaits pour les vitrines moyennes),
            <strong> Came</strong>, <strong>Nice</strong>, <strong>FAAC</strong>, <strong>BFT</strong> et <strong>Sommer</strong>. Chaque pièce installée sur un
            <strong> rideau métallique à Sète</strong> est livrée scellée, avec son numéro de série et sa facture constructeur,
            traçable à 100%. Aucun moteur reconditionné, aucune lame d&apos;importation parallèle.
          </p>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            Cette politique d&apos;approvisionnement officiel garantit une <strong>garantie 2 ans pièces</strong> systématique,
            extensible à 5 ans selon les modèles haut de gamme. Nous stockons en permanence dans nos véhicules les pièces
            les plus demandées (moteurs ACM 76, axes tubulaires Ø60 et Ø76, joints lame finale, serrures profil européen,
            boîtes à ressort, lames P57 et P89 prélaquées) afin de réparer dans la même heure sans repasser à l&apos;atelier.
            Ce niveau de service est aujourd&apos;hui rarement atteint sur le Bassin de Thau et constitue la raison principale
            pour laquelle nos clients commerçants nous renouvellent leur contrat d&apos;entretien année après année.
          </p>
        </div>
      </div>
    </section>
  );
}
