import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog rideau métallique — Conseils & entretien",
  description:
    "Conseils, guides et actualités sur l'entretien, la motorisation et le dépannage des rideaux métalliques à Sète et sur le Bassin de Thau.",
  alternates: { canonical: `${siteConfig.url}/blog/` },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Conseils & actualités rideau métallique"
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />

        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10 md:mb-12 max-w-[820px]">
              <h2
                className="text-[#0A1F26] mb-4"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-1.2px",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.15,
                }}
              >
                Conseils experts rideau métallique à Sète
              </h2>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7] mb-4">
                Guides, retours d&apos;expérience et bonnes pratiques pour entretenir, motoriser et dépanner un rideau métallique
                sur le littoral du Bassin de Thau — rédigés par notre équipe terrain DRM Sète.
              </p>
              <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.75] mb-4">
                Sète, Frontignan, Balaruc, Mèze, Marseillan : nos commerçants partagent un point commun, l&apos;exposition à
                l&apos;air iodé de l&apos;étang de Thau et du golfe du Lion. Cette spécificité méditerranéenne raccourcit la durée
                de vie d&apos;un rideau métallique mal entretenu de 30 à 40 %. Nos articles techniques s&apos;adressent en priorité
                aux gérants de boutiques, restaurants, garages, pharmacies et entrepôts du Bassin de Thau qui veulent
                comprendre comment leur équipement fonctionne, comment l&apos;entretenir et comment choisir le bon
                fournisseur en cas de panne.
              </p>
              <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.75] mb-4">
                Chaque article est rédigé par un technicien DRM Sète à partir de cas réels rencontrés sur le terrain :
                rideaux bloqués un dimanche matin, moteurs grillés après un orage, serrures rongées par le sel, ressorts
                d&apos;équilibrage cassés sous le poids d&apos;un tablier trop lourd. Vous y trouverez les bonnes décisions
                à prendre avant que la panne ne survienne — et les bons réflexes quand elle survient quand même.
              </p>
              <h3
                className="text-[#0A1F26] mb-2 mt-6 text-[18px] md:text-[20px]"
                style={{ fontWeight: 500, fontFamily: "var(--font-manrope)", letterSpacing: "-0.4px" }}
              >
                Thématiques couvertes
              </h3>
              <ul className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.7] list-disc pl-5 mb-4">
                <li>Entretien préventif d&apos;un rideau métallique sur le littoral méditerranéen</li>
                <li>Choix de motorisation (ACM, Somfy, Simu, Sommer) selon le poids et l&apos;usage</li>
                <li>Différences entre rideau plein, micro-perforé, grille extensible et cobra</li>
                <li>Signaux d&apos;alerte avant une panne moteur ou un blocage de tablier</li>
                <li>Réglementation, normes EN 13241-1, niveaux de résistance à l&apos;effraction</li>
                <li>Bonnes pratiques de pose pour les commerces du Quartier Haut, Mont Saint-Clair, Pointe Courte</li>
              </ul>
              <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.7]">
                Une question précise ? Appelez directement au {siteConfig.telephone} : un technicien décroche 24h/24
                et 7j/7. Pour un devis gratuit, passez par notre <Link className="text-[#E8633E] underline" href="/contact/">page contact</Link>.
              </p>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="flex flex-col gap-4 group">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="relative w-full aspect-[3/2] rounded-[10px] overflow-hidden"
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 413px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex flex-col gap-3">
                  <span className="text-[#4A5560] text-[13px] uppercase tracking-[0.15em]">
                    {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}/`}>
                    <h3
                      className="text-[#0A1F26] text-[20px] md:text-[22px] hover:text-[#E8633E] transition-colors"
                      style={{
                        fontWeight: 500,
                        fontFamily: "var(--font-manrope)",
                        letterSpacing: "-0.4px",
                        lineHeight: 1.25,
                      }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-[#4A5560] text-[15px] leading-[1.6]">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-2 self-start text-[#E8633E] text-[14px] font-medium border-b border-[#E8633E] pb-1 hover:text-[#C44A26] hover:border-[#C44A26] transition-colors mt-1"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Lire l&apos;article →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
