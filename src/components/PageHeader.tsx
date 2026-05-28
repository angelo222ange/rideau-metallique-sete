import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  bgImage,
  breadcrumb,
}: {
  title: string;
  bgImage: string;
  breadcrumb?: Crumb[];
}) {
  return (
    <section className="relative px-2.5 md:px-2.5 pt-2.5">
      <div className="relative w-full h-[440px] rounded-[10px] overflow-hidden">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 31, 38, 0.70)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-10">
          {breadcrumb && breadcrumb.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-white/80 text-[13px] md:text-[14px] mb-5"
            >
              {breadcrumb.map((c, i) => {
                const isLast = i === breadcrumb.length - 1;
                return (
                  <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                    {c.href && !isLast ? (
                      <Link
                        href={c.href}
                        className="hover:text-white transition-colors"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-white" : ""}>{c.label}</span>
                    )}
                    {!isLast && <span className="text-white/50">/</span>}
                  </span>
                );
              })}
            </nav>
          )}

          <h1
            className="text-white max-w-[1000px]"
            style={{
              fontWeight: 500,
              fontFamily: "var(--font-manrope)",
              letterSpacing: "-2.4px",
              lineHeight: 1.05,
              color: "#FFFFFF",
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            }}
          >
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link
              href={siteConfig.telephoneHref}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[15px] font-semibold rounded-[5px] transition-colors"
              style={{ color: "#FFFFFF" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Appeler {siteConfig.phone}
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center h-12 px-6 bg-white/15 hover:bg-white/25 backdrop-blur text-white text-[15px] font-medium rounded-[5px] transition-colors border border-white/30"
              style={{ color: "#FFFFFF" }}
            >
              Devis gratuit en ligne
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
