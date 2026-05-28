"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, services } from "@/config/site";
import { serviceImages } from "@/lib/page-images";

const citySlug = siteConfig.citySlug;

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Zones", href: "/zones/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logos/drm-sete-logo.png"
        alt="DRM Sète"
        width={44}
        height={44}
        className="w-11 h-11 object-contain"
      />
      <span
        className="text-[18px] font-bold hidden sm:inline"
        style={{ color: "#0A1F26", fontFamily: "var(--font-manrope)", letterSpacing: "-0.4px" }}
      >
        DRM Sète
      </span>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      {/* Topbar urgence — visible toutes tailles, conversion mobile */}
      <Link
        href={siteConfig.telephoneHref}
        className="flex items-center justify-center gap-2 bg-[#0A2A33] text-white text-[13px] md:text-[14px] py-2 px-4 hover:bg-[#093945] transition-colors"
        style={{ color: "#FFFFFF" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="font-semibold">Urgence 24h/24 — {siteConfig.phone}</span>
        <span className="hidden sm:inline text-white/70">— intervention 30 min Bassin de Thau</span>
      </Link>
      <div className="flex items-center justify-between h-[76px] px-5 md:px-10">
        <Link href="/" aria-label="DRM Sète — Accueil">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-[14px] font-medium text-[#0A1F26] hover:text-[#E8633E] transition-colors"
          >
            Accueil
          </Link>

          {/* Services dropdown */}
          <div className="relative group" style={{ paddingTop: 4 }}>
            <button
              type="button"
              className="text-[14px] font-medium text-[#0A1F26] hover:text-[#E8633E] transition-colors inline-flex items-center gap-1"
              aria-haspopup="true"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              style={{ minWidth: 420 }}
            >
              <div className="bg-white rounded-[10px] shadow-2xl border border-black/5 p-2">
                <div className="grid grid-cols-1 gap-0.5">
                  {services.map((s) => {
                    const img = serviceImages[s.id]?.hero || "depannage-rideau-metallique-DRM-reparation.webp";
                    return (
                      <Link
                        key={s.id}
                        href={`/${s.slug}-${citySlug}/`}
                        className="group/item flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F4F1EC] transition-colors"
                      >
                        <span
                          className="flex-shrink-0 w-12 h-12 rounded-[6px] overflow-hidden bg-[#F4F1EC]"
                          style={{
                            backgroundImage: `url(/images/gallery/${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          aria-hidden
                        />
                        <span className="flex flex-col min-w-0">
                          <span className="text-[14px] font-semibold text-[#0A1F26] group-hover/item:text-[#E8633E] transition-colors">
                            {s.name}
                          </span>
                          <span className="text-[12px] text-[#4A5560] truncate">
                            {s.shortDescription}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#0A1F26] hover:text-[#E8633E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center h-11 px-5 bg-[#0E4F5C] hover:bg-[#093945] text-white text-[14px] font-medium rounded-[5px] transition-colors"
          >
            Devis gratuit
          </Link>
          <Link
            href={siteConfig.telephoneHref}
            className="inline-flex items-center justify-center gap-2 h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-semibold rounded-[5px] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            04 48 14 12 98
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-6 h-[2px] bg-[#0A1F26]" />
          <span className="w-6 h-[2px] bg-[#0A1F26]" />
          <span className="w-6 h-[2px] bg-[#0A1F26]" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <nav className="flex flex-col px-5 py-4 gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="text-[14px] font-medium text-[#0A1F26] py-3">
              Accueil
            </Link>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between text-[14px] font-medium text-[#0A1F26] py-3"
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l border-black/10 mb-2 flex flex-col">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/${s.slug}-${citySlug}/`}
                    onClick={() => setOpen(false)}
                    className="text-[13px] text-[#4A5560] py-2"
                  >
                    {s.name} — rideau métallique
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[14px] font-medium text-[#0A1F26] py-3"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-11 px-5 bg-[#0E4F5C] text-white text-[14px] font-medium rounded-[5px] mt-3"
            >
              Devis gratuit
            </Link>
            <Link
              href={siteConfig.telephoneHref}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 bg-[#E8633E] text-white text-[14px] font-semibold rounded-[5px] mt-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              04 48 14 12 98
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
