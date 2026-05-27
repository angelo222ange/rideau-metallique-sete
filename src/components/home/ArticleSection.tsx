import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    img: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
    title: "Entretenir un rideau métallique sur le littoral de Sète : 5 gestes essentiels",
    date: "12 mai 2026",
    slug: "entretenir-rideau-metallique-sete",
    alt: "Entretien d'un rideau métallique sur le littoral méditerranéen",
  },
  {
    img: "/images/gallery/BI-Moteur-ACM-76-rideau-metallique.webp",
    title: "Choisir entre un moteur ACM 76 et un Somfy tubulaire pour son commerce",
    date: "28 avril 2026",
    slug: "choisir-moteur-acm-somfy-rideau-metallique",
    alt: "Comparaison moteurs ACM 76 et Somfy pour rideau métallique",
  },
  {
    img: "/images/gallery/rideau-metallique-grille-extensible-drm.webp",
    title: "Rideau métallique ou grille extensible : que choisir pour une boutique de Sète ?",
    date: "10 avril 2026",
    slug: "rideau-metallique-ou-grille-extensible-sete",
    alt: "Grille extensible installée sur boutique de Sète",
  },
];

export default function ArticleSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
              Conseils & actualités
            </span>
            <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
              Notre blog rideau métallique
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 self-start md:self-end text-[#E8633E] text-[14px] font-medium border-b border-[#E8633E] pb-1 hover:text-[#C44A26] hover:border-[#C44A26] transition-colors"
          >
            Voir tous les articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}/`}
              className="group flex flex-col gap-4"
            >
              <div className="relative w-full h-[260px] md:h-[276px] rounded-[10px] overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-3 px-1">
                <span className="text-[#4A5560] text-[13px]">{a.date}</span>
                <h3
                  className="text-[#0A1F26] text-[20px] md:text-[22px]"
                  style={{ fontWeight: 500, letterSpacing: "-0.4px", lineHeight: 1.25 }}
                >
                  {a.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-[#E8633E] text-[14px] font-medium mt-2 group-hover:text-[#C44A26] transition-colors">
                  Lire l&apos;article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
