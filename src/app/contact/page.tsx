"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteConfig, services } from "@/config/site";

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const url = process.env.NEXT_PUBLIC_WEBHOOK_URL || "/api/contact";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "contact-page", site: siteConfig.domain }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const mapsQuery = encodeURIComponent(`${siteConfig.address}`);

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Demandez un devis gratuit"
          bgImage="/images/gallery/depannage-rideau-metallique-DRM-reparation.webp"
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* Form + Info */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="flex flex-col gap-5">
              <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
                Nous contacter
              </span>
              <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
                Décrivez votre besoin, on vous rappelle dans la foulée
              </h2>
              <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6] max-w-[520px]">
                Précisez votre commune, le type de rideau métallique et la nature de la panne. Un technicien DRM Sète vous rappelle sous 15 minutes, 24h/24.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom complet"
                    required
                    className="bg-[#F4F1EC] text-[#0A1F26] placeholder-[#4A5560] text-[14px] rounded-[5px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#E8633E]/40"
                    aria-label="Nom complet"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    required
                    className="bg-[#F4F1EC] text-[#0A1F26] placeholder-[#4A5560] text-[14px] rounded-[5px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#E8633E]/40"
                    aria-label="Téléphone"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-[#F4F1EC] text-[#0A1F26] placeholder-[#4A5560] text-[14px] rounded-[5px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#E8633E]/40"
                    aria-label="Email"
                  />
                  <select
                    name="service"
                    defaultValue=""
                    className="bg-[#F4F1EC] text-[#0A1F26] text-[14px] rounded-[5px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#E8633E]/40"
                    aria-label="Service"
                  >
                    <option value="" disabled>Type d&apos;intervention</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>{s.name} — rideau métallique</option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Décrivez la panne, la marque du rideau, la commune..."
                  rows={5}
                  required
                  className="bg-[#F4F1EC] text-[#0A1F26] placeholder-[#4A5560] text-[14px] rounded-[5px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8633E]/40 resize-none"
                  aria-label="Message"
                />
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="self-start inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors disabled:opacity-70"
                >
                  {status === "sending" ? "Envoi..." : status === "sent" ? "Demande envoyée ✓" : "Envoyer ma demande →"}
                </button>
                {status === "sent" && (
                  <p className="text-[#0E4F5C] text-[14px]">
                    Merci. Un technicien DRM Sète vous rappelle dans les minutes qui suivent.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[#C44A26] text-[14px]">
                    Erreur d&apos;envoi. Réessayez ou écrivez-nous à {siteConfig.email}.
                  </p>
                )}
              </form>
            </div>

            <aside className="bg-[#F4F1EC] rounded-[10px] p-6 md:p-10 flex flex-col gap-6 lg:sticky lg:top-24">
              <h3
                className="text-[#0A1F26]"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.5px",
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                }}
              >
                Nous joindre directement
              </h3>

              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white text-[#E8633E] inline-flex items-center justify-center shrink-0">
                    <IconMail />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#4A5560] text-[13px] uppercase tracking-[0.15em]">Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#0A1F26] text-[16px] md:text-[17px] hover:text-[#E8633E] transition-colors break-all"
                      style={{ fontWeight: 500, fontFamily: "var(--font-manrope)" }}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white text-[#E8633E] inline-flex items-center justify-center shrink-0">
                    <IconPin />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#4A5560] text-[13px] uppercase tracking-[0.15em]">Adresse</span>
                    <span
                      className="text-[#0A1F26] text-[16px] md:text-[17px]"
                      style={{ fontWeight: 500, fontFamily: "var(--font-manrope)" }}
                    >
                      {siteConfig.address}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white text-[#E8633E] inline-flex items-center justify-center shrink-0">
                    <IconClock />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#4A5560] text-[13px] uppercase tracking-[0.15em]">Horaires</span>
                    <span
                      className="text-[#0A1F26] text-[16px] md:text-[17px]"
                      style={{ fontWeight: 500, fontFamily: "var(--font-manrope)" }}
                    >
                      {siteConfig.openingHours}
                    </span>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Maps */}
        <section className="bg-[#F4F1EC] py-12 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto rounded-[10px] overflow-hidden bg-white">
            <iframe
              title="Carte DRM Sète"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
