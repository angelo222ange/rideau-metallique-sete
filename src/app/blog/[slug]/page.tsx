import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.img, width: 1200, height: 800, alt: post.title }],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={post.title}
          bgImage={post.img}
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: post.title.length > 60 ? post.title.slice(0, 57) + "..." : post.title },
          ]}
        />

        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <article className="max-w-[800px] mx-auto flex flex-col gap-5">
            <div className="flex items-center gap-4 text-[14px] text-[#4A5560] mb-2">
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <div className="relative w-full aspect-[16/9] rounded-[10px] overflow-hidden mb-6">
              <Image src={post.img} alt={post.title} fill sizes="(min-width: 768px) 800px, 100vw" className="object-cover" />
            </div>

            <p className="text-[#0A1F26] text-[17px] md:text-[18px] leading-[1.7] font-medium">
              {post.excerpt}
            </p>

            {post.body.map((block, i) => {
              if (block.type === "p") {
                return (
                  <p key={i} className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.75]">
                    {block.content as string}
                  </p>
                );
              }
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-[#0A1F26] mt-4"
                    style={{
                      fontWeight: 500,
                      fontFamily: "var(--font-manrope)",
                      letterSpacing: "-0.8px",
                      fontSize: "clamp(24px, 3vw, 32px)",
                    }}
                  >
                    {block.content as string}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="text-[#0A1F26] mt-2" style={{ fontWeight: 500, fontSize: "20px" }}>
                    {block.content as string}
                  </h3>
                );
              }
              if (block.type === "blockquote") {
                return (
                  <blockquote key={i} className="border-l-4 border-[#E8633E] pl-5 py-2 my-3 italic text-[#0A1F26]">
                    {block.content as string}
                  </blockquote>
                );
              }
              return (
                <ul key={i} className="flex flex-col gap-2 mt-1">
                  {(block.content as string[]).map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8633E] mt-3 shrink-0" aria-hidden />
                      <span className="text-[#4A5560] text-[16px] leading-[1.7]">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            })}

            <div className="mt-10 p-6 md:p-8 rounded-[10px] bg-[#F4F1EC] flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
              <div>
                <h3
                  className="text-[#0A1F26] mb-1"
                  style={{ fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: "22px" }}
                >
                  Besoin d&apos;un devis rideau métallique à Sète ?
                </h3>
                <p className="text-[#4A5560] text-[15px] leading-[1.6]">
                  Diagnostic gratuit sur site, intervention 24h/24, pièces d&apos;origine.
                </p>
              </div>
              <Link
                href={siteConfig.telephoneHref}
                className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors whitespace-nowrap"
              >
                Demander un devis
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
