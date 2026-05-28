import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function MiniCtaSection() {
  return (
    <section className="relative w-full px-2 md:px-[10px]">
      <div className="relative w-full overflow-hidden rounded-[10px] min-h-[520px] md:min-h-[620px] lg:min-h-[710px]">
        <Image
          src="/images/gallery/depannage-rideau-metallique-drm-france-rm.webp"
          alt="Équipe DRM Sète en intervention nocturne sur rideau métallique commerce"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(0.45)" }}
        />
        {/* Overlay sombre constant + gradient renforcé pour lisibilité texte blanc */}
        <div className="absolute inset-0" style={{ background: "rgba(10, 31, 38, 0.55)" }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" aria-hidden />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-10 py-20 md:py-24 min-h-[520px] md:min-h-[620px] lg:min-h-[710px]">
          <span className="inline-block border border-white/40 px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-white mb-6">
            Pourquoi DRM Sète
          </span>
          <h2
            className="text-white max-w-[820px] mx-auto"
            style={{ fontWeight: 500, letterSpacing: "-1.68px", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Des techniciens spécialisés air marin, prêts à intervenir 24h/24
          </h2>
          <p
            className="text-white text-[16px] md:text-[18px] leading-[1.6] mt-6 max-w-[640px]"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}
          >
            L&apos;iode du Bassin de Thau attaque les mécanismes plus vite qu&apos;ailleurs. DRM Sète utilise des pièces d&apos;origine constructeur et des produits anti-corrosion marins adaptés au littoral méditerranéen.
          </p>
          <Link
            href={siteConfig.telephoneHref}
            className="inline-flex items-center justify-center h-11 px-5 mt-8 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
          >
            Appeler 04 48 14 12 98
          </Link>
        </div>
      </div>
    </section>
  );
}
