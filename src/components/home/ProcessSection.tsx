const steps = [
  {
    n: 1,
    title: "Appel & diagnostic",
    desc: "Vous nous décrivez la panne par téléphone ou via le formulaire. Un technicien DRM Sète vous rappelle dans les minutes qui suivent pour un pré-diagnostic.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    n: 2,
    title: "Devis transparent",
    desc: "Diagnostic sur site offert. Vous recevez un devis détaillé, poste par poste, validé avant toute intervention. Tarif annoncé = tarif facturé.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    n: 3,
    title: "Intervention express",
    desc: "Technicien sur place sous 30 minutes à Sète, 45-60 min sur le Bassin de Thau. Véhicule équipé de pièces ACM, Somfy, Simu pour réparer immédiatement.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    n: 4,
    title: "Garantie 2 ans",
    desc: "Test complet, réglage des fins de course, formation à l'utilisation. Garantie 2 ans pièces, 1 an main-d'œuvre. Rapport d'intervention écrit remis sur place.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F4F1EC] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[720px]">
          <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Notre méthode
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Comment ça se passe ? Quatre étapes claires
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
            De l&apos;appel à la remise en service, DRM Sète vous garantit transparence, rapidité et qualité d&apos;exécution.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <article key={s.n} className="bg-white rounded-[10px] p-6 md:p-7 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[#F4F1EC] text-[80px] md:text-[100px] font-bold leading-none -mt-2 -mr-2 select-none pointer-events-none" aria-hidden>
                {String(s.n).padStart(2, "0")}
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-[#E8633E]/10 flex items-center justify-center text-[#E8633E]">
                {s.icon}
              </div>
              <h3 className="relative z-10 text-[#0A1F26] text-[20px] md:text-[22px]" style={{ fontWeight: 500, letterSpacing: "-0.5px" }}>
                {s.title}
              </h3>
              <p className="relative z-10 text-[#4A5560] text-[14px] md:text-[15px] leading-[1.6]">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
