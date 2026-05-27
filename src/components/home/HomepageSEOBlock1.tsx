import Image from "next/image";

export default function HomepageSEOBlock1() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] rounded-[10px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
            alt="Rideau métallique lame pleine installé sur commerce centre-ville Sète"
            title="Réalisation DRM Sète — rideau métallique lame pleine"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 order-1 lg:order-2">
          <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Spécificité locale
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Pourquoi un <strong>rideau métallique à Sète</strong> demande un savoir-faire particulier
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            Installer ou dépanner un <strong>rideau métallique à Sète</strong> n&apos;a rien d&apos;une intervention standard.
            Les commerces du <strong>Quartier Haut</strong>, du quai du Maréchal de Lattre, de la Pointe Courte ou du
            <strong> Mont Saint-Clair</strong> subissent quotidiennement le même ennemi invisible : l&apos;<strong>air iodé</strong> de la
            Méditerranée. Le sel marin remonte de l&apos;<strong>étang de Thau</strong>, attaque l&apos;acier galvanisé,
            grippe les axes tubulaires et oxyde les composants électroniques bien plus vite que dans l&apos;arrière-pays héraultais.
          </p>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            Notre équipe DRM Sète intervient sur le territoire depuis 25 ans. Nous connaissons les particularités de chaque
            quartier : les vitrines du Canal Royal exposées plein vent, les ateliers de
            <strong> conchyliculture</strong> de Bouzigues, Mèze et Marseillan qui demandent des coulisses anti-corrosion,
            les restaurants de poissons aux halles, les boutiques du Quartier de la Bourse, sans oublier les entrepôts du
            Mas-Coulet et les commerces de Frontignan plage. Chaque rideau métallique installé à Sète reçoit un traitement
            adapté : pièces inox marine, joints renforcés, graisses au silicone marin et lames en acier prélaqué double face.
            Résultat : une durée de vie multipliée par deux par rapport à un montage standard.
          </p>
        </div>
      </div>
    </section>
  );
}
