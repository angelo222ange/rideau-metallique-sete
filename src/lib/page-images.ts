// Mapping image catalogue DRM → page/service. Référence : reference_drm_image_mapping.md
// Catalogue 154 images dans public/images/gallery/
// Toutes refs en lowercase (Linux VPS case-sensitive).

// Helper : préfixe path gallery (évite template literals lus comme "uppercase paths" par lint).
export function gal(name: string): string {
  return "/images/gallery/" + (name || "").toLowerCase();
}

export const serviceImages: Record<string, {
  hero: string;
  intro: string;
  seo1: string;
  seo2: string;
  realisation: string;
  cta: string;
}> = {
  depannage: {
    hero: "hero-bg-technicien-drm.webp",
    intro: "depannage-rideau-metallique-drm-services.webp",
    seo1: "rideau-metallique-bloque-depannage-rideau-metallique.webp",
    seo2: "depannage-rideau-metallique-rm-drm-france.webp",
    realisation: "depannage-rideau-metallique-drm-france-rm.webp",
    cta: "depannage-rideau-metallique-drm.webp",
  },
  installation: {
    hero: "installation-rideau-metallique-drm.webp",
    intro: "installation-rideau-metallique-sur-mesure-france.webp",
    seo1: "pose-axe-rideau-metallique-drm.webp",
    seo2: "pose-coulisse-tablier-rideau-metallique.webp",
    realisation: "realisation-rideau-metallique-lame-pleine-commerce.webp",
    cta: "raccordement-rideau-metallique-drm.webp",
  },
  reparation: {
    hero: "depannage-rideau-metallique-drm-services.webp",
    intro: "depannage-rideau-metallique-rm-drm-france.webp",
    seo1: "depannage-rideau-metallique-drm-france-rm.webp",
    seo2: "lame-pleine-rideau-metallique.webp",
    realisation: "axe-enroulement-rideau-metallique-france.webp",
    cta: "depannage-rideau-metallique-drm-france-rm.webp",
  },
  motorisation: {
    hero: "moteur-tubulaire-rideau-metallique-drm.webp",
    intro: "motorisation-rideau-metallique-rideau-metallique-drm.webp",
    seo1: "motorisation-rideau-metallique-drm-depannage.webp",
    seo2: "moteur-externe-rideau-metallique-drm.webp",
    realisation: "motorisation-rideau-metallique-rm-rideau-metallique.webp",
    cta: "raccordement-rideau-metallique-drm.webp",
  },
  deblocage: {
    hero: "rideau-metallique-bloque-depannage-rideau-metallique.webp",
    intro: "depannage-rideau-metallique-drm-services.webp",
    seo1: "depannage-rideau-metallique-rm-drm-france.webp",
    seo2: "lame-finale-avec-serrure-rideau-metallique-rm.webp",
    realisation: "depannage-rideau-metallique-drm-france-rm.webp",
    cta: "rideau-metallique-depannage-rideau-metallique.webp",
  },
  entretien: {
    hero: "entretien-rideau-metallique-drm-france.webp",
    intro: "entretien-rideau-metallique-rideau-de-fer.webp",
    seo1: "entretien-rideau-metallique-france-entretien.webp",
    seo2: "entretien-rideau-metallique-drm-rideau-metallique.webp",
    realisation: "entretien-rideau-metallique-france-entretien.webp",
    cta: "entretien-rideau-metallique-drm-rideau-metallique.webp",
  },
  fabrication: {
    hero: "fabrication-rideau-metallique-entreprise-drm.webp",
    intro: "fabrication-axe-rideau-metallique-france.webp",
    seo1: "fabrication-axe-rideau-metallique-express.webp",
    seo2: "fabrication-axe-rideau-metallique-locale.webp",
    realisation: "fabrication-francaise-rideau-metallique.webp",
    cta: "fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
  },
};

// Realisations pool — rotation par zone pour éviter doublons inter-pages
export const realisationsPool = [
  "realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
  "realisation-rideau-metallique-lame-pleine-commerce.webp",
  "realisation-rideau-metallique-lame-pleine-industriel-france.webp",
  "realisation-rideau-metallique-garage.webp",
  "realisation-rideau-metallique-lame-pleinela-cantoche-france.webp",
  "realisation-rideau-metallique-lame-pleinela-jdsport-france.webp",
  "rideau-metallique-cobra-realisation-drm.webp",
  "rideau-metallique-polycarbonate-drm-realisation.webp",
  "rideau-metallique-micro-perforee-realisation-france.webp",
  "rideau-metallique-grille-bijoutier-realisation.webp",
  "rideau-metallique-grille-extensible-drm.webp",
  "rideau-metallique-restaurant-grille-extensible.webp",
];

export function getRealisationForZone(zoneSlug: string, index = 0): string {
  let h = 0;
  for (let i = 0; i < zoneSlug.length; i++) h = (h * 31 + zoneSlug.charCodeAt(i)) | 0;
  return realisationsPool[Math.abs(h + index) % realisationsPool.length];
}

// Hero pool (anti-doublon entre sites DRM) — index attribué Phase 0
export const heroBackground = "hero-bg-technicien-drm.webp";

// Background suitable images (paysages, scènes, intervention) — pour hero/CTA fullbleed
export const bgSuitablePool = [
  "hero-bg-technicien-drm.webp",
  "depannage-rideau-metallique-drm-france-rm.webp",
  "depannage-rideau-metallique-drm-services.webp",
  "depannage-rideau-metallique-rm-drm-france.webp",
  "installation-rideau-metallique-drm.webp",
  "fabrication-rideau-metallique-entreprise-drm.webp",
  "entretien-rideau-metallique-drm-france.webp",
  "realisation-rideau-metallique-lame-pleine-commerce.webp",
  "realisation-rideau-metallique-lame-pleine-industriel-france.webp",
  "realisation-rideau-metallique-garage.webp",
];

export function getBgSuitableForKey(key: string, salt = 0): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0;
  return bgSuitablePool[Math.abs(h + salt) % bgSuitablePool.length];
}
