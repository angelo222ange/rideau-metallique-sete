import Image from "next/image";
import Link from "next/link";

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
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
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
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
