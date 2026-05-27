import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog rideau métallique — Conseils, entretien, motorisation",
  description:
    "Conseils, guides et actualités DRM Sète sur l'entretien, la motorisation et le dépannage des rideaux métalliques à Sète et sur le Bassin de Thau.",
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
