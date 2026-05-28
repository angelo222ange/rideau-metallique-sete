// PHONE_PUBLIC=true : téléphone câblé par Angelo le 26 mai 2026 → 04 48 14 12 98
export const PHONE_PUBLIC = true;

export const siteConfig = {
  name: "DRM Sète",
  fullName: "Dépannage Rideau Métallique Sète",
  domain: "depannage-rideau-metallique-sete.fr",
  url: "https://depannage-rideau-metallique-sete.fr",
  phone: "04 48 14 12 98",
  phoneLink: "tel:+33448141298",
  telephone: "04 48 14 12 98",
  telephoneHref: "tel:+33448141298",
  email: "contact@depannage-rideau-metallique-sete.fr",
  city: "Sète",
  cityShort: "Sète",
  citySlug: "sete",
  postalCode: "34200",
  department: "Hérault",
  departmentCode: "34",
  region: "Occitanie",
  // Adresse intérim — à VALIDER par Angelo avant déploiement (find-gbp-address.py auto-pick #1)
  address: "1174 Boulevard Jean-Mathieu Grangent, 34200 Sète",
  geo: {
    latitude: 43.4039,
    longitude: 3.6939,
  },
  openingHours: "24h/24, 7j/7",
  experience: "25+",
  delai: "30",
  rating: "4.9",
  ratingCount: "112",
  interventions: "5000+",
  heroBg: "depannage-rideau-metallique-drm-france-rm.webp",
};

export const services = [
  {
    id: "depannage",
    name: "Dépannage",
    slug: "depannage-rideau-metallique",
    description: "Intervention urgence 24h/24 sur rideau métallique en panne à Sète et autour du bassin de Thau",
    shortDescription: "Rideau bloqué ? Intervention en moins de 30 minutes sur Sète.",
  },
  {
    id: "installation",
    name: "Installation",
    slug: "installation-rideau-metallique",
    description: "Pose complète de rideaux métalliques neufs pour commerces du quai, vitrines de la Bourse et entrepôts du Mas-Coulet",
    shortDescription: "Pose sur-mesure pour commerces, bureaux et entrepôts à Sète.",
  },
  {
    id: "reparation",
    name: "Réparation",
    slug: "reparation-rideau-metallique",
    description: "Remise en état de rideaux métalliques endommagés à Sète",
    shortDescription: "Lames, moteur, axe, serrure : réparation garantie.",
  },
  {
    id: "motorisation",
    name: "Motorisation",
    slug: "motorisation-rideau-metallique",
    description: "Automatisation de rideaux métalliques manuels existants à Sète",
    shortDescription: "Passez à l'électrique avec Somfy, Simu, ACM ou Nice.",
  },
  {
    id: "deblocage",
    name: "Déblocage",
    slug: "deblocage-rideau-metallique",
    description: "Libération urgente de rideaux métalliques coincés à Sète",
    shortDescription: "Rideau coincé ? Libération rapide sans dégradation.",
  },
  {
    id: "entretien",
    name: "Entretien",
    slug: "entretien-rideau-metallique",
    description: "Maintenance préventive et contrats annuels — air marin Méditerranée",
    shortDescription: "Évitez les pannes liées à l'air marin avec un entretien régulier.",
  },
  {
    id: "fabrication",
    name: "Fabrication",
    slug: "fabrication-rideau-metallique",
    description: "Fabrication sur-mesure de rideaux métalliques à Sète",
    shortDescription: "Acier galvanisé, aluminium, inox marine : fabrication aux dimensions exactes.",
  },
];

// 22 zones autour de Sète — Bassin de Thau, étang, communes Hérault (34)
export const zones = [
  { name: "Sète Centre",         slug: "sete-centre",            postalCode: "34200", distance: "0 km" },
  { name: "Mont Saint-Clair",    slug: "mont-saint-clair",       postalCode: "34200", distance: "2 km" },
  { name: "Île de Thau",         slug: "ile-de-thau",            postalCode: "34200", distance: "2 km" },
  { name: "Quartier Haut",       slug: "quartier-haut",          postalCode: "34200", distance: "1 km" },
  { name: "Pointe Courte",       slug: "pointe-courte",          postalCode: "34200", distance: "1 km" },
  { name: "Frontignan",          slug: "frontignan",             postalCode: "34110", distance: "7 km" },
  { name: "Balaruc-les-Bains",   slug: "balaruc-les-bains",      postalCode: "34540", distance: "6 km" },
  { name: "Balaruc-le-Vieux",    slug: "balaruc-le-vieux",       postalCode: "34540", distance: "8 km" },
  { name: "Bouzigues",           slug: "bouzigues",              postalCode: "34140", distance: "10 km" },
  { name: "Loupian",             slug: "loupian",                postalCode: "34140", distance: "12 km" },
  { name: "Mèze",                slug: "meze",                   postalCode: "34140", distance: "16 km" },
  { name: "Marseillan",          slug: "marseillan",             postalCode: "34340", distance: "13 km" },
  { name: "Marseillan-Plage",    slug: "marseillan-plage",       postalCode: "34340", distance: "17 km" },
  { name: "Vic-la-Gardiole",     slug: "vic-la-gardiole",        postalCode: "34110", distance: "12 km" },
  { name: "Mireval",             slug: "mireval",                postalCode: "34110", distance: "15 km" },
  { name: "Gigean",              slug: "gigean",                 postalCode: "34770", distance: "13 km" },
  { name: "Poussan",             slug: "poussan",                postalCode: "34560", distance: "11 km" },
  { name: "Montbazin",           slug: "montbazin",              postalCode: "34560", distance: "15 km" },
  { name: "Villeveyrac",         slug: "villeveyrac",            postalCode: "34560", distance: "18 km" },
  { name: "Cournonsec",          slug: "cournonsec",             postalCode: "34660", distance: "18 km" },
  { name: "Cournonterral",       slug: "cournonterral",          postalCode: "34660", distance: "20 km" },
  { name: "Villeneuve-lès-Maguelone", slug: "villeneuve-les-maguelone", postalCode: "34750", distance: "22 km" },
  { name: "Agde",                slug: "agde",                   postalCode: "34300", distance: "22 km" },
  { name: "Pinet",               slug: "pinet",                  postalCode: "34850", distance: "18 km" },
  { name: "Pomerols",            slug: "pomerols",               postalCode: "34810", distance: "16 km" },
  { name: "Florensac",           slug: "florensac",              postalCode: "34510", distance: "22 km" },
];

export const colors = {
  // Respect identité Roofinity (primary orange + accent teal).
  // Adaptation Sète : corail #E8633E (urgence DRM + tuiles Sud) en primary,
  // teal Méditerranée #0E4F5C (étang de Thau) en accent secondaire.
  primary: "#E8633E",
  primaryHover: "#C44A26",
  accent: "#0E4F5C",
  accentHover: "#093945",
  accentLight: "#F4A989",
  lightBg: "#F4F1EC",      // sable/calcaire local
  warmBg: "#FAF6EF",
  darkBg: "#0A2A33",       // bleu nuit port
  white: "#FFFFFF",
  textDark: "#0A1F26",
  textMuted: "#4A5560",
  textLight: "#F4F1EC",
  border: "rgba(10, 31, 38, 0.10)",
  starColor: "#F59E0B",
};

export const marques = [
  "Somfy", "Simu", "ACM", "Came", "Nice", "FAAC", "BFT", "Sommer", "Masinara",
];
