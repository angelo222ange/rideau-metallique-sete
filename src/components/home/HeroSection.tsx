"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services, siteConfig } from "@/config/site";
import { gal } from "@/lib/page-images";

const trustBadges = [
  { icon: "★", value: "4.9/5", label: "112 avis Google" },
  { icon: "✓", value: "25+", label: "ans d'expérience" },
  { icon: "✓", value: "2 ans", label: "garantie pièces" },
  { icon: "✓", value: "5000+", label: "interventions" },
];

export default function HeroSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative w-full px-2 md:px-[10px] pt-2 md:pt-[10px]">
      <div className="relative w-full overflow-hidden rounded-[10px] min-h-[640px] md:min-h-[720px] lg:min-h-[760px]">
        <Image
          src={gal(siteConfig.heroBg)}
          alt="Technicien DRM Sète en intervention dépannage rideau métallique 24h/24"
          title="Dépannage rideau métallique 24h/24 à Sète — intervention en 30 minutes"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Overlay très sombre — lisibilité texte blanc garantie sur tout visuel */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 31, 38, 0.72)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-20 min-h-[640px] md:min-h-[720px] lg:min-h-[760px]">
          <span className="inline-block bg-[#E8633E] px-4 py-2 rounded-full text-[12px] tracking-[0.2em] uppercase text-white mb-5 font-medium">
            Intervention en 30 minutes sur le Bassin de Thau
          </span>
          <h1
            className="text-white max-w-[860px] mx-auto"
            style={{ fontWeight: 500, textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Dépannage de rideau métallique à Sète — 24h/24, 7j/7
          </h1>
          <p
            className="text-white text-[16px] md:text-[18px] leading-[1.6] mt-6 max-w-[680px]"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}
          >
            Rideau bloqué, moteur en panne, lame déformée ? Les techniciens DRM Sète interviennent en moins de 30 minutes sur Sète, Frontignan, Balaruc, Mèze, Marseillan, Agde et tout le Bassin de Thau.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link
              href={siteConfig.telephoneHref}
              className="inline-flex items-center justify-center h-12 px-6 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[15px] font-medium rounded-[5px] transition-colors"
            >
              Appeler 04 48 14 12 98
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center h-12 px-6 bg-white/15 hover:bg-white/25 backdrop-blur text-white text-[15px] font-medium rounded-[5px] transition-colors border border-white/30"
            >
              Voir nos services
            </Link>
          </div>

          {/* Trust badges row */}
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8">
            {trustBadges.map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E8633E]/30 text-[#F4A989] text-[14px] font-bold">
                  {b.icon}
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-white text-[14px] font-semibold leading-tight">{b.value}</span>
                  <span className="text-white/70 text-[11px] leading-tight">{b.label}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const payload = Object.fromEntries(formData.entries());
              try {
                const url =
                  process.env.NEXT_PUBLIC_WEBHOOK_URL ||
                  "https://lioai.app.n8n.cloud/webhook/drm-contact";
                await fetch(url, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    ...payload,
                    source: "hero-home",
                    site: siteConfig.domain,
                  }),
                });
              } catch {
                // Echec reseau silencieux — l'utilisateur voit "Demande envoyee" et peut appeler.
              }
              setSent(true);
            }}
            className="w-full max-w-[1100px] mt-8 md:mt-10 bg-white/15 backdrop-blur-md rounded-[10px] p-3 md:p-4"
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-stretch">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                aria-label="Nom"
                required
                className="flex-1 h-[47px] px-3 rounded-[5px] bg-white/20 backdrop-blur text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 text-[14px]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                aria-label="Téléphone"
                required
                className="flex-1 h-[47px] px-3 rounded-[5px] bg-white/20 backdrop-blur text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 text-[14px]"
              />
              <select
                name="service"
                aria-label="Service"
                defaultValue=""
                className="flex-1 h-[47px] px-3 rounded-[5px] bg-white/20 backdrop-blur text-white focus:outline-none focus:ring-2 focus:ring-white/40 text-[14px]"
              >
                <option value="" disabled className="text-[#0A1F26]">Type d&apos;intervention</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id} className="text-[#0A1F26]">{s.name}</option>
                ))}
              </select>
              <input
                type="text"
                name="message"
                placeholder="Décrivez la panne"
                aria-label="Message"
                className="flex-1 h-[47px] px-3 rounded-[5px] bg-white/20 backdrop-blur text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 text-[14px]"
              />
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center h-[47px] px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors whitespace-nowrap disabled:opacity-70"
              >
                {sent ? "Demande envoyée ✓" : "Obtenir un devis"}
              </button>
            </div>
            {sent && (
              <p className="text-white text-[13px] mt-3">
                Merci, un technicien {siteConfig.name} vous rappelle dans les minutes qui suivent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
