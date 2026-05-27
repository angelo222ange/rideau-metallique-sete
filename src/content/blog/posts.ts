export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  img: string;
  excerpt: string;
  author: string;
  readTime: string;
  body: { type: "p" | "h2" | "h3" | "ul" | "blockquote"; content: string | string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "entretenir-rideau-metallique-sete",
    title: "Entretenir un rideau métallique sur le littoral de Sète : 5 gestes essentiels",
    date: "12 mai 2026",
    img: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
    excerpt:
      "L'air iodé du Bassin de Thau attaque mécanismes et lames plus vite qu'ailleurs. Voici les cinq gestes simples pour prolonger la durée de vie de votre rideau métallique.",
    author: "Équipe DRM Sète",
    readTime: "6 min de lecture",
    body: [
      {
        type: "p",
        content:
          "Un rideau métallique installé à Sète n'a pas la même espérance de vie qu'un équipement identique posé à Toulouse ou à Lyon. L'air salin du Bassin de Thau dépose chaque jour une fine pellicule corrosive sur les lames, les axes et les coulisses. Voici comment ralentir ce phénomène avec quelques gestes accessibles à tous les commerçants.",
      },
      {
        type: "h2",
        content: "1. Nettoyer les lames une fois par mois",
      },
      {
        type: "p",
        content:
          "Un simple chiffon humide additionné d'un dégraissant doux suffit pour éliminer le sel marin qui s'incruste dans les rainures des lames. Évitez les produits acides ou abrasifs qui rayent le revêtement anti-corrosion.",
      },
      {
        type: "h2",
        content: "2. Graisser les coulisses au silicone marin",
      },
      {
        type: "p",
        content:
          "Tous les six mois, appliquez une fine pulvérisation de silicone marin (et non WD-40) sur les coulisses latérales. Le silicone résiste mieux à l'air iodé que les graisses pétrolières classiques.",
      },
      {
        type: "h2",
        content: "3. Surveiller la tension du ressort",
      },
      {
        type: "p",
        content:
          "Un rideau qui descend trop vite ou qui force à la remontée signale un ressort fatigué. Sur le littoral, la fatigue arrive 30% plus tôt qu'à l'intérieur des terres : faites contrôler la tension tous les ans.",
      },
      {
        type: "h2",
        content: "4. Vérifier la serrure et la lame finale",
      },
      {
        type: "p",
        content:
          "La serrure profil européen est le point faible le plus exposé : eau de pluie, sel, sable du Lido. Un coup de WD-40 contact ne suffit pas, il faut une révision annuelle avec démontage et regraissage.",
      },
      {
        type: "h2",
        content: "5. Faire intervenir un technicien certifié air marin",
      },
      {
        type: "p",
        content:
          "DRM Sète propose un contrat d'entretien annuel à 119 € HT par rideau, comprenant une visite complète, le graissage, le test des fins de course et un rapport d'état. À long terme, c'est l'investissement le plus rentable pour un commerce de Sète, Frontignan, Balaruc ou Mèze.",
      },
    ],
  },
  {
    slug: "choisir-moteur-acm-somfy-rideau-metallique",
    title: "Choisir entre un moteur ACM 76 et un Somfy tubulaire pour son commerce",
    date: "28 avril 2026",
    img: "/images/gallery/BI-Moteur-ACM-76-rideau-metallique.webp",
    excerpt:
      "Le débat revient à chaque devis de motorisation : faut-il privilégier un moteur central ACM 76 ou un tubulaire Somfy ? Voici les critères pour trancher selon votre commerce.",
    author: "Équipe DRM Sète",
    readTime: "5 min de lecture",
    body: [
      {
        type: "p",
        content:
          "Avant de motoriser un rideau métallique à Sète, deux familles de moteurs s'imposent : le moteur central ACM 76 (axe creux, freinage électromagnétique) et le moteur tubulaire Somfy ou Simu (intégré dans l'axe). Le choix dépend du poids du tablier, de la fréquence d'usage et du budget.",
      },
      {
        type: "h2",
        content: "Le moteur central ACM 76 : la robustesse industrielle",
      },
      {
        type: "p",
        content:
          "L'ACM 76 supporte des tabliers jusqu'à 600 kg et accepte plus de 100 cycles d'ouverture/fermeture par jour. Il est recommandé pour les commerces lourds : supermarchés, garages, entrepôts du Mas-Coulet, chambre froide de Mèze. Compter 1 200 à 1 800 € HT pose comprise.",
      },
      {
        type: "h2",
        content: "Le moteur Somfy tubulaire : le compromis discret",
      },
      {
        type: "p",
        content:
          "Le moteur Somfy tubulaire (LT60 ou plus) s'intègre dans l'axe existant et reste invisible. Limité à 250-350 kg, il convient parfaitement aux boulangeries, bars à tapas, boutiques de mode du centre-ville. Tarif posé : 750 à 1 100 € HT.",
      },
      {
        type: "h2",
        content: "Notre recommandation pour Sète et le Bassin de Thau",
      },
      {
        type: "p",
        content:
          "Pour 80% des commerces du centre-ville de Sète, un moteur tubulaire Somfy ou Simu suffit. Au-delà de 30 cycles/jour ou pour des tabliers >350 kg, basculez sur un ACM 76. Notre équipe DRM Sète vous oriente sans intérêt commercial : nous distribuons les deux gammes en officiel.",
      },
    ],
  },
  {
    slug: "rideau-metallique-ou-grille-extensible-sete",
    title: "Rideau métallique ou grille extensible : que choisir pour une boutique de Sète ?",
    date: "10 avril 2026",
    img: "/images/gallery/rideau-metallique-grille-extensible-drm.webp",
    excerpt:
      "Les deux solutions sécurisent une vitrine, mais elles n'offrent ni la même esthétique ni le même niveau de protection. Voici comment choisir selon votre commerce.",
    author: "Équipe DRM Sète",
    readTime: "4 min de lecture",
    body: [
      {
        type: "p",
        content:
          "À Sète, la question revient souvent chez les commerçants du centre-ville et des halles : rideau métallique plein ou grille extensible ? Les deux protègent une vitrine, mais leur usage diffère. Voici les critères concrets à prendre en compte.",
      },
      {
        type: "h2",
        content: "Le rideau métallique plein : protection maximale",
      },
      {
        type: "p",
        content:
          "Un rideau métallique à lames pleines (P57, P77, P90) offre la meilleure résistance à l'effraction et coupe totalement la visibilité depuis la rue. Il est recommandé pour les bijouteries, les tabacs-presse et tout commerce qui stocke des biens de valeur.",
      },
      {
        type: "h2",
        content: "La grille extensible : visibilité préservée",
      },
      {
        type: "p",
        content:
          "La grille extensible (modèles cobra, micro-perforée, polycarbonate) laisse passer la lumière et permet aux clients de voir l'intérieur la nuit. Elle est très utilisée par les boutiques de mode du Quartier Haut et les restaurants du quai à Sète Centre, qui veulent rester visibles tout en étant protégés.",
      },
      {
        type: "h2",
        content: "Notre conseil pratique",
      },
      {
        type: "p",
        content:
          "Pour une bijouterie ou un tabac : optez pour un rideau plein (lames P77 minimum). Pour une boutique de mode, un fleuriste ou un restaurant qui veulent garder une vitrine attractive de nuit : grille extensible ou rideau micro-perforé. DRM Sète installe les deux gammes et vous oriente selon votre activité, votre rue et votre budget.",
      },
    ],
  },
];
