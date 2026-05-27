import Image from "next/image";

export default function HomepageSEOBlock2() {
  return (
    <section className="bg-[#F4F1EC] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-block self-start bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Sept services intégrés
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Nos 7 expertises <strong>rideau métallique</strong> sous un seul numéro
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            DRM Sète couvre toute la chaîne de valeur du <strong>rideau métallique</strong> : le
            <strong> dépannage</strong> en urgence 24h/24, l&apos;<strong>installation</strong> sur-mesure pour commerces, vitrines et entrepôts,
            la <strong>motorisation</strong> de rideaux manuels, la <strong>réparation</strong> de moteurs, lames, axes, ressorts et serrures,
            le <strong>déblocage</strong> d&apos;urgence, l&apos;<strong>entretien</strong> annuel préventif et la <strong>fabrication</strong> aux dimensions
            exactes en acier galvanisé, aluminium ou inox marine. Vous n&apos;appelez qu&apos;un seul interlocuteur, qui prend en charge
            le diagnostic, le devis, l&apos;intervention et la mise en service.
          </p>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
            Sur Sète, Frontignan, Balaruc-les-Bains, Mèze, Marseillan, Agde et tout le Bassin de Thau, nous traitons aussi bien
            les rideaux à <strong>lame pleine</strong> (sécurité maximale pour bijouteries et tabacs-presse), les <strong>grilles cobra</strong>
            (vitrines de mode, restaurants), les <strong>micro-perforées</strong> (boutiques qui veulent rester visibles), les
            <strong> polycarbonates</strong> (commerces qui souhaitent conserver l&apos;éclairage naturel) et les <strong>grilles extensibles</strong>
            pour bars à tapas et restaurants du quai. Chaque type bénéficie d&apos;un protocole d&apos;intervention dédié, conçu pour
            résister à l&apos;air marin du littoral héraultais.
          </p>
        </div>

        <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] rounded-[10px] overflow-hidden">
          <Image
            src="/images/gallery/installation-rideau-metallique-drm.webp"
            alt="Installation rideau métallique sur commerce — équipe DRM Sète"
            title="Installation rideau métallique — DRM Sète"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
