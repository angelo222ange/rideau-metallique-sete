import Image from "next/image";

const features = [
  {
    title: "Intervention < 30 min",
    desc: "Centre-ville et agglomération de Sète",
  },
  {
    title: "Devis gratuit",
    desc: "Diagnostic et déplacement offerts",
  },
  {
    title: "Garantie 2 ans pièces",
    desc: "Pièces d'origine constructeur",
  },
  {
    title: "24h/24, 7j/7",
    desc: "Weekend et jours fériés sans majoration",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#0A2A33] py-6 md:py-8 px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-10">
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-[90px] h-[30px]">
            <Image
              src="/images/marques/logo-google-avis.webp"
              alt="Logo Google Avis — note clients DRM Sète"
              title="Google Avis"
              fill
              sizes="90px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1" aria-label="4.9 sur 5 étoiles">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M12 2l2.9 6.6L22 9.6l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.5 2 9.6l7.1-1L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-[13px] mt-0.5">
              <strong className="font-semibold">4.9/5</strong> · 112 avis Google
            </span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-12 bg-white/15" aria-hidden />

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-1 w-full">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#E8633E]/20 flex items-center justify-center mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8633E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-white text-[14px] font-semibold leading-tight">{f.title}</span>
                <span className="text-white/70 text-[12px] leading-tight mt-1">{f.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
