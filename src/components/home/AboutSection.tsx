import Image from "next/image";

const stats = [
  { value: "5000+", label: "Interventions Bassin de Thau" },
  { value: "25+", label: "Années d'expérience locale" },
  { value: "30 min", label: "Délai moyen sur Sète" },
  { value: "4.9/5", label: "Note Google · 112 avis" },
];

const points = [
  { label: "Techniciens DRM certifiés Hérault" },
  { label: "Pièces d'origine Somfy, Simu, ACM" },
  { label: "Intervention en moins de 30 minutes" },
  { label: "Devis gratuit avant chaque opération" },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Top: image + texte intro */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative w-full h-[280px] md:h-[380px] lg:h-[460px] rounded-[10px] overflow-hidden">
            <Image
              src="/images/gallery/realisation-rideau-metallique-lame-pleine.webp"
              alt="Atelier DRM Sète — installation rideau métallique sur-mesure Bassin de Thau"
              title="Équipe DRM Sète — installation sur-mesure"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
              Qui sommes-nous
            </span>
            <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
              25 ans d&apos;expertise rideau métallique sur le littoral méditerranéen
            </h2>
            <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
              DRM Sète est une équipe locale spécialisée dans le rideau métallique, implantée sur le Bassin de Thau depuis
              plus de 25 ans. Nos techniciens vivent et travaillent à Sète — ils connaissent chaque ruelle du Quartier Haut,
              chaque vitrine du quai du Maréchal de Lattre, chaque commerce de Frontignan-Plage ou de Marseillan, et chaque
              ostréiculteur de Bouzigues et Mèze. Cette implantation locale fait toute la différence quand il faut intervenir
              en urgence un samedi soir ou un dimanche matin.
            </p>
            <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
              Notre savoir-faire est calibré pour le climat méditerranéen : air iodé, vents marins, embruns, sel qui ronge
              les mécanismes. Nous utilisons systématiquement des pièces d&apos;origine constructeur, des graisses au silicone
              marin et des coulisses traitées anti-corrosion. Le résultat se mesure : nos rideaux installés tiennent en
              moyenne deux fois plus longtemps que ceux posés par des entreprises non spécialisées en bord de mer. Plus de
              5000 commerçants du Bassin de Thau nous font déjà confiance.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-2">
              {points.map((p) => (
                <li key={p.label} className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#E8633E]/10 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8633E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[#0A1F26] text-[14px] md:text-[15px] font-medium leading-tight pt-0.5">
                    {p.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: 4 stat counters */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <li
              key={s.label}
              className="bg-[#0E4F5C] rounded-[8px] p-5 md:p-7 flex flex-col gap-2 min-h-[140px] justify-center"
            >
              <span
                className="text-white text-[40px] md:text-[52px] lg:text-[60px] leading-none"
                style={{ fontWeight: 500, letterSpacing: "-2px", fontFamily: "var(--font-manrope)" }}
              >
                {s.value}
              </span>
              <span className="text-white/80 text-[13px] md:text-[14px] leading-tight">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
