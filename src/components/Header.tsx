"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, services } from "@/config/site";

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
      <span
        aria-hidden
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white text-[12px] font-bold tracking-wide"
        style={{ background: "#0E4F5C", fontFamily: "var(--font-manrope)" }}
      >
        DRM
      </span>
      <span
        className="text-[18px] font-bold"
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
              style={{ minWidth: 280 }}
            >
              <div className="bg-white rounded-[8px] shadow-xl border border-black/5 py-2">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/${s.slug}-${citySlug}/`}
                    className="block px-5 py-2.5 text-[14px] text-[#0A1F26] hover:bg-[#F4F1EC] hover:text-[#E8633E] transition-colors"
                  >
                    {s.name} — rideau métallique
                  </Link>
                ))}
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

        <div className="hidden md:flex items-center">
          <Link
            href={siteConfig.telephoneHref}
            className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
          >
            Demander un devis
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
              href={siteConfig.telephoneHref}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] text-white text-[14px] font-medium rounded-[5px] mt-3"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
