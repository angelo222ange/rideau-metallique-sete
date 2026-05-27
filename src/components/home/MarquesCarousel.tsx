import Image from "next/image";

const marques = [
  { name: "Somfy", img: "/images/marques/moteur-simu-rideau-metallique.webp", alt: "Logo Somfy — moteur rideau métallique" },
  { name: "Simu", img: "/images/marques/moteur-simu-rideau-metallique.webp", alt: "Logo Simu — moteur tubulaire rideau métallique" },
  { name: "ACM", img: "/images/marques/moteur-acm-italian-rolling-power.webp", alt: "Logo ACM — moteur central italien rideau métallique" },
  { name: "Sommer", img: "/images/marques/logo-sommer-moteur-rideau-metallique.webp", alt: "Logo Sommer — motorisation rideau métallique" },
  { name: "AFCA", img: "/images/marques/logo-afca-moteur-rideau-metallique.webp", alt: "Logo AFCA — moteur rideau métallique" },
  { name: "Masinara", img: "/images/marques/logo-masinara-moteur-rideau-metallique.webp", alt: "Logo Masinara — centrale rideau métallique" },
  { name: "G-Doorgate", img: "/images/marques/logo-moteur-g-doorgate-rideau-metallique-drm.webp", alt: "Logo G-Doorgate — moteur rideau métallique" },
];

export default function MarquesCarousel() {
  return (
    <section className="bg-white py-12 md:py-14 px-5 md:px-10 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-7 md:gap-9">
        <p className="text-[#4A5560] text-[13px] tracking-[0.25em] uppercase text-center max-w-[680px]">
          Distribution officielle — pièces d&apos;origine constructeur garanties
        </p>
        <ul className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
          {marques.map((m) => (
            <li key={m.name} className="relative w-full h-[70px] md:h-[80px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src={m.img}
                alt={m.alt}
                title={`Partenaire ${m.name} — DRM Sète`}
                fill
                sizes="(min-width: 1024px) 140px, (min-width: 768px) 160px, 100px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
