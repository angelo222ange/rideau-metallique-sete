"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Qui appeler en cas d'urgence rideau métallique à Sète ?",
    a: "DRM Sète assure une astreinte 24h/24, 7j/7, weekend et jours fériés inclus, pour tout commerce du centre-ville de Sète, du Quartier Haut, de la Pointe Courte ou du Mont Saint-Clair. Un technicien dédié arrive en moins de 30 minutes sur l'agglomération et en moins d'une heure sur Frontignan, Balaruc-les-Bains, Mèze ou Marseillan. Demandez votre devis sur la page contact, nous vous rappelons immédiatement.",
  },
  {
    q: "Quels sont les délais d'intervention sur le Bassin de Thau ?",
    a: "Notre équipe sillonne Sète et le Bassin de Thau en continu. Comptez moins de 30 minutes pour les commerces du centre, des halles, du quai du Maréchal de Lattre ou du Quartier de la Bourse. Sur les communes périphériques (Frontignan, Balaruc, Bouzigues, Mèze, Marseillan, Agde, Villeneuve-lès-Maguelone), 45 à 60 minutes maximum. Aucun frais de déplacement supplémentaire dans un rayon de 25 km autour de Sète.",
  },
  {
    q: "Combien coûte un dépannage rideau métallique à Sète ?",
    a: "Le déplacement et le diagnostic sont gratuits. Un dépannage standard démarre autour de 150 € HT pour un déblocage simple, et varie selon la panne : remplacement de moteur tubulaire (450-650 € HT), réparation d'un axe (250-400 € HT), changement de lames endommagées (350 € HT et plus). Le devis est systématiquement validé avec vous avant toute intervention, sans surprise sur la facture.",
  },
  {
    q: "Mon rideau métallique grince à cause de l'air marin, que faire ?",
    a: "Le grincement est le premier symptôme de l'oxydation due à l'air iodé du Bassin de Thau. Avant que le mécanisme ne se grippe, demandez une visite d'entretien : nous démontons les coulisses, appliquons un dégraissant marin, vérifions les ressorts et les joints, puis lubrifions avec un silicone résistant à l'air salin. Cette opération préventive coûte 90 à 130 € HT et évite un dépannage urgent à plusieurs centaines d'euros quelques mois plus tard.",
  },
  {
    q: "Quelle garantie DRM Sète propose sur ses interventions ?",
    a: "Toutes les pièces installées par DRM Sète sont d'origine constructeur (ACM, Somfy, Simu, Came, Nice, FAAC, BFT, Sommer, Masinara). Vous bénéficiez d'une garantie 2 ans pièces, extensible jusqu'à 5 ans selon le modèle de moteur, et d'une garantie 1 an main-d'œuvre sur la pose. Chaque intervention est attestée par un rapport écrit et une facture détaillée, conformes aux exigences des assurances commerciales.",
  },
  {
    q: "Intervenez-vous le weekend et la nuit à Sète ?",
    a: "Oui, sans majoration. Notre astreinte locale tourne 24h/24 et 7j/7 toute l'année, samedi, dimanche, 1er mai, 14 juillet et 25 décembre inclus. Le tarif d'une intervention nocturne ou dominicale est identique à celui du jour ouvré : pas de surfacturation, pas de frais supplémentaires, pas de minimum facturé. C'est notre engagement écrit auprès des commerçants et restaurateurs du Bassin de Thau.",
  },
  {
    q: "Quelle est la différence entre rideau métallique à lame pleine et grille cobra ?",
    a: "Le rideau à lame pleine offre une sécurité maximale (recommandé pour bijouteries, tabacs, pharmacies, banques), un isolement total et une excellente résistance anti-effraction. La grille cobra (ou rideau micro-perforée) laisse passer la lumière et permet la visibilité depuis l'extérieur — idéale pour boutiques de mode, parfumeries, vitrines de centre-ville qui veulent rester attractives même fermées. À Sète, nous installons les deux types selon le besoin du commerce et l'exposition au vent marin.",
  },
  {
    q: "Quel moteur choisir pour un commerce à Sète ?",
    a: "Pour un commerce moyen avec rideau jusqu'à 4 mètres de large, un moteur tubulaire Somfy ou Simu (gamme RolUP/CentralS) suffit largement. Pour les rideaux lourds, larges (>4 m) ou très utilisés (restaurants, supermarchés), nous recommandons un moteur central ACM 76 italien : couple supérieur, longévité accrue et meilleure résistance à l'humidité du littoral. DRM Sète vous oriente lors du diagnostic gratuit selon votre vitrine, votre fréquence d'usage et votre budget.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-[415px] shrink-0 flex flex-col gap-5">
          <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
            FAQ
          </span>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Vos questions sur le rideau métallique à Sète
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
            Une question qui n&apos;est pas dans la liste ? Notre équipe vous répond par le formulaire de contact.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 self-start text-[#E8633E] text-[14px] font-medium border-b border-[#E8633E] pb-1 hover:text-[#C44A26] hover:border-[#C44A26] transition-colors"
          >
            Nous contacter →
          </Link>
        </div>

        <div className="flex-1 flex flex-col">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className="border-b border-[#0A1F26]/10">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                >
                  <span
                    className="text-[#0A1F26] text-[17px] md:text-[18px] pr-4"
                    style={{ fontWeight: 500, fontFamily: "var(--font-manrope)", letterSpacing: "-0.3px" }}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#F4F1EC] text-[#0A1F26] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.6] pb-6 pr-10">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
