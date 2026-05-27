// Mapping image catalogue DRM → page/service. Référence : reference_drm_image_mapping.md
// Catalogue 253 images dans public/images/gallery/

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
    intro: "depannage-rideau-metallique-DRM-reparation.webp",
    seo1: "rideau-metallique-bloque-depannage-rideau-metallique.webp",
    seo2: "depannage-rideau-metallique-drm-services.webp",
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
    intro: "depannage-rideau-metallique-DRM-reparation.webp",
    seo1: "moteur-acm-76-eclate.webp",
    seo2: "lame-pleine-rideau-metallique.webp",
    realisation: "axe-enroulement-rideau-metallique-france.webp",
    cta: "depannage-rideau-metallique-drm-france-rm.webp",
  },
  motorisation: {
    hero: "moteur-tubulaire-rideau-metallique-drm.webp",
    intro: "BI-Moteur-ACM-76-rideau-metallique.webp",
    seo1: "Kit-moteur-complet-ACM-rideau-metallique.webp",
    seo2: "Moteur-tubulaire-simu-rideau-metallique.webp",
    realisation: "Centrale-de-commande-M-Plus-Masinara-rideau-metallique.webp",
    cta: "Bouton-poussoir-industriel-GEBA-3-boutons-rideau-metallique.webp",
  },
  deblocage: {
    hero: "rideau-metallique-bloque-depannage-rideau-metallique.webp",
    intro: "depannage-rideau-metallique-DRM-reparation.webp",
    seo1: "Joint-pour-coulisse-en-U-rideau-metallique.webp",
    seo2: "Serrure-rideau-metallique-profil-europeen-lame-finale-avec-cylindre.webp",
    realisation: "depannage-rideau-metallique-drm-france-rm.webp",
    cta: "rideau-metallique-depannage-rideau-metallique.webp",
  },
  entretien: {
    hero: "entretien-rideau-metallique-drm-france.webp",
    intro: "entretien-rideau-metallique-rideau-de-fer.webp",
    seo1: "Boite-ressort-rideau-metallique-france.webp",
    seo2: "Joint-lame-finale-rideau-metallique.webp",
    realisation: "entretien-rideau-metallique-france-entretien.webp",
    cta: "entretien-rideau-metallique-drm-rideau-metallique.webp",
  },
  fabrication: {
    hero: "fabrication-rideau-metallique-entreprise-drm.webp",
    intro: "Fabrication-express-4H-rideau-metallique.webp",
    seo1: "fabrication-axe-rideau-metallique-express.webp",
    seo2: "lame-P57-rideau-metallique-france.webp",
    realisation: "Coffre-3-faces-sur-mesure-rideau-metallique.webp",
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
export const heroBackground = "hero-grille-extensible.webp";
