import Image from "next/image";
import { realisationsPool, gal } from "@/lib/page-images";

const projects = [
  {
    img: gal(realisationsPool[1]),
    title: "Rideau métallique lame pleine — bar à tapas",
    location: "Sète Quartier Haut · 34200",
  },
  {
    img: gal(realisationsPool[5]),
    title: "Motorisation ACM 76 — restaurant de l'étang",
    location: "Mèze · 34140",
  },
  {
    img: gal(realisationsPool[7]),
    title: "Rideau polycarbonate — boulangerie de plage",
    location: "Marseillan-Plage · 34340",
  },
  {
    img: gal(realisationsPool[11]),
    title: "Grille extensible — boutique de mode",
    location: "Frontignan Centre · 34110",
  },
  {
    img: gal(realisationsPool[3]),
    title: "Rideau métallique entrepôt conchylicole",
    location: "Bouzigues · 34140",
  },
  {
    img: gal(realisationsPool[9]),
    title: "Grille cobra — bijouterie centre-ville",
    location: "Agde · 34300",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            Nos réalisations
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Quelques chantiers récents sur le Bassin de Thau
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
            Bars, restaurants, boutiques, pharmacies, entrepôts conchylicoles — DRM Sète intervient pour tous types de commerces.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col gap-3 group">
              <div className="relative w-full h-[230px] md:h-[260px] lg:h-[290px] rounded-[10px] overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.title} — ${p.location}`}
                  title={`${p.title} — DRM Sète`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-1 px-1">
                <h3
                  className="text-[#0A1F26] text-[18px] md:text-[19px]"
                  style={{ fontWeight: 500, letterSpacing: "-0.3px", lineHeight: 1.3 }}
                >
                  {p.title}
                </h3>
                <p className="text-[#4A5560] text-[13px]">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
