export type BlogPost = {
  slug: string;
  title: string;
  // Titre SEO court pour <title> (≤54c — layout ajoute " | DRM Sète" = total ≤65c)
  metaTitle?: string;
  // Description SEO ≤170c
  metaDescription?: string;
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
    metaTitle: "Entretenir un rideau métallique à Sète — 5 gestes clés",
    metaDescription:
      "Air iodé du Bassin de Thau : 5 gestes simples pour prolonger la vie d'un rideau métallique à Sète. Nettoyage, graissage, tension du ressort.",
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
      {
        type: "h2",
        content: "Pourquoi le climat de Sète accélère l'usure",
      },
      {
        type: "p",
        content:
          "Sète est exposée à un cocktail inhabituel : embruns marins du golfe du Lion à l'ouest, brouillards salins de l'étang de Thau à l'est, vents violents (mistral, marin) et amplitudes thermiques importantes entre hiver doux et été méditerranéen. Les techniciens du fabricant ACM ont mesuré qu'un rideau métallique posé sur le quai Maximin Licciardi a une durée de vie utile de 12 à 15 ans, contre 20 à 25 ans pour le même équipement installé à Carcassonne ou Toulouse. Le sel n'attaque pas seulement les lames : il oxyde aussi les goupilles d'axe, gripe les serrures profil européen, et corrode lentement le bobinage des moteurs tubulaires si l'étanchéité du caisson est défaillante.",
      },
      {
        type: "h2",
        content: "Le piège des produits ménagers grand public",
      },
      {
        type: "p",
        content:
          "Beaucoup de commerçants utilisent par habitude un dégraissant cuisine ou un produit type Saint-Marc pour nettoyer les lames. Erreur fréquente : ces produits contiennent souvent de la soude caustique ou des solvants chlorés qui attaquent le revêtement thermolaqué et accélèrent l'apparition de cloques de rouille sous la peinture. Préférez un savon noir dilué (50 ml dans 1 L d'eau tiède), ou un dégraissant alimentaire neutre type Synto. Rincez systématiquement à l'eau claire et essuyez avec un chiffon microfibre, surtout dans les coulisses latérales où l'eau peut stagner et créer des points de corrosion ponctuelle.",
      },
      {
        type: "h2",
        content: "Le calendrier d'entretien recommandé sur le littoral",
      },
      {
        type: "ul",
        content: [
          "Tous les 15 jours : essuyage des lames avec un chiffon humide pour ôter le sel de surface",
          "Tous les mois : nettoyage approfondi savon noir + rinçage + séchage des coulisses",
          "Tous les 3 mois : pulvérisation de silicone marin sur coulisses, axe, serrure",
          "Tous les 6 mois : test des fins de course moteur, écoute du bruit de fonctionnement",
          "Tous les ans : visite technique complète (tension ressort, état des lames, étanchéité caisson, état des poulies)",
          "Tous les 5 ans : remplacement préventif des joints d'étanchéité du caisson moteur",
        ],
      },
      {
        type: "h2",
        content: "Signaux d'alerte à ne jamais ignorer",
      },
      {
        type: "p",
        content:
          "Certains symptômes annoncent une panne imminente et coûteuse si rien n'est fait. Un grincement métallique aigu au démarrage signale souvent un manque de graissage des poulies ou une amorce de désaxage. Un rideau qui se ferme par à-coups indique une butée de fin de course encrassée ou des contacts oxydés dans la centrale de commande. Une remontée lente, avec un moteur qui chauffe ou qui sent le brûlé, est le signe d'un ressort d'équilibrage fatigué : le moteur travaille seul contre tout le poids du tablier, ce qui le grille en quelques mois. Dans tous ces cas, une intervention rapide (50 à 150 € HT) évite un changement de moteur complet (800 à 1 800 € HT).",
      },
      {
        type: "h2",
        content: "Quand confier l'entretien à un professionnel",
      },
      {
        type: "p",
        content:
          "L'entretien quotidien et hebdomadaire peut tout à fait être réalisé par le commerçant lui-même, à condition de respecter les gestes décrits ci-dessus. En revanche, dès qu'il s'agit de toucher au ressort d'équilibrage, à l'axe, au moteur ou à la centrale électrique, il est impératif de passer par un technicien certifié. Le ressort d'équilibrage stocke une énergie considérable (équivalent à un poids de plusieurs centaines de kg) : un démontage non maîtrisé peut blesser gravement. DRM Sète intervient à Sète, Frontignan, Balaruc, Mèze, Marseillan et toutes les communes du Bassin de Thau pour ces opérations délicates, avec un délai d'intervention inférieur à 30 minutes en cas de blocage.",
      },
    ],
  },
  {
    slug: "choisir-moteur-acm-somfy-rideau-metallique",
    title: "Choisir entre un moteur ACM 76 et un Somfy tubulaire pour son commerce",
    metaTitle: "Moteur ACM 76 ou Somfy tubulaire — comparatif",
    metaDescription:
      "Comparatif moteur ACM 76 vs Somfy tubulaire pour rideau métallique commerce : poids supporté, bruit, prix, fiabilité, recommandations DRM Sète.",
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
      {
        type: "h2",
        content: "Différences techniques détaillées",
      },
      {
        type: "p",
        content:
          "L'ACM 76 est un moteur dit central (l'axe traverse le moteur), avec frein électromagnétique intégré, débrayage manuel par chaîne ou manivelle de secours, et électronique de commande déportée dans un coffret mural. Sa réserve de puissance permet de supporter ponctuellement des dépassements de charge sans dommage. Le Somfy LT 60 (et plus largement la gamme tubulaire Simu, Cardin, Becker) est un moteur axial : il est logé à l'intérieur même du tube d'enroulement, avec son frein, ses fins de course et son condensateur dans un boîtier de 60 mm de diamètre. C'est compact, discret, mais la chaleur dissipée s'évacue moins bien et la maintenance impose de démonter le tablier complet.",
      },
      {
        type: "h2",
        content: "Bruit, consommation, ouverture/fermeture",
      },
      {
        type: "p",
        content:
          "Côté nuisance sonore, l'ACM 76 est légèrement plus bruyant à vide (52 dB à 1 m) que le Somfy LT 60 (44 dB), mais la perception change selon la longueur du tablier : plus le rideau est long et lourd, plus la différence s'inverse car le tubulaire force davantage en fin de course. La consommation est proche : 250 à 400 W pour les deux modèles selon la charge. La vitesse de déroulement est de 0,12 m/s pour le tubulaire contre 0,15 m/s pour l'ACM, soit environ 20 secondes de différence sur une fermeture complète de 3 m de hauteur — anecdotique pour la majorité des usages.",
      },
      {
        type: "h2",
        content: "Garantie, pièces détachées et disponibilité à Sète",
      },
      {
        type: "p",
        content:
          "ACM bénéficie d'un réseau italien de pièces détachées très bien implanté en France (centrale Lyon, sous-traitants Marseille et Montpellier) : un moteur ACM 76 hors garantie peut être réparé en 48-72h. Somfy, en tant que leader français de la motorisation, garantit une disponibilité de pièces sur 10 ans pour ses gammes commerciales LT, et notre stock atelier à Sète couvre 90% des SAV courants. Les deux marques offrent une garantie constructeur de 5 ans pièces (DRM Sète y ajoute 2 ans sur la pose et la main-d'œuvre).",
      },
      {
        type: "h2",
        content: "Coût total de possession sur 10 ans",
      },
      {
        type: "ul",
        content: [
          "ACM 76 : 1 200 à 1 800 € HT pose comprise + 80 € entretien annuel = 2 000 à 2 600 € sur 10 ans",
          "Somfy LT 60 : 750 à 1 100 € HT pose comprise + 50 € entretien annuel = 1 250 à 1 600 € sur 10 ans",
          "À noter : si le tablier dépasse 350 kg, prévoir un changement de moteur Somfy au bout de 6-8 ans (+ 600 €)",
          "À noter : l'ACM 76 est plus économe en pièces consommables (pas de condensateur électrolytique à changer)",
        ],
      },
      {
        type: "h2",
        content: "Cas concrets observés sur le Bassin de Thau",
      },
      {
        type: "p",
        content:
          "Sur les 240 motorisations posées par DRM Sète entre 2023 et 2026, le ratio s'établit à 78% Somfy/Simu (commerces standards 200-300 kg : boulangeries, mode, restaurants, tabac-presse, pharmacies) et 22% ACM 76 (entrepôts d'huîtres à Bouzigues, garages, parking souterrain de la zone Maraîchère, supermarché de Frontignan, hangar viticole de Loupian). Le taux de pannes à 5 ans est de 4% pour les ACM 76 et de 7% pour les Somfy LT 60, ce qui reste très bas pour les deux marques. La grande majorité des SAV concerne en réalité les fins de course mal réglées ou les ressorts d'équilibrage, pas les moteurs eux-mêmes.",
      },
      {
        type: "h2",
        content: "Conclusion : ne pas se tromper de combat",
      },
      {
        type: "p",
        content:
          "Le vrai débat n'est pas ACM vs Somfy. C'est le bon dimensionnement du moteur par rapport au poids du tablier, à la fréquence d'usage et à l'environnement (air marin, poussières, températures extrêmes). Un Somfy correctement dimensionné durera 15 ans sans broncher ; un ACM sous-dimensionné cassera en 4 ans. C'est pourquoi nous prenons toujours le temps, lors du devis, de mesurer précisément la hauteur, la largeur, le poids estimé du tablier et le nombre de cycles attendus par jour avant de recommander l'un ou l'autre modèle. Si vous hésitez, appelez-nous : on vient mesurer gratuitement votre installation sur Sète et le Bassin de Thau.",
      },
    ],
  },
  {
    slug: "rideau-metallique-ou-grille-extensible-sete",
    title: "Rideau métallique ou grille extensible : que choisir pour une boutique de Sète ?",
    metaTitle: "Rideau métallique ou grille extensible à Sète ?",
    metaDescription:
      "Rideau métallique vs grille extensible pour une boutique à Sète : sécurité, esthétique, prix, normes. Conseil DRM Sète pour choisir la bonne solution.",
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
      {
        type: "h2",
        content: "Tableau de décision rapide selon votre activité",
      },
      {
        type: "ul",
        content: [
          "Bijouterie, horlogerie, numismatique : rideau plein P77 ou P90 + serrure 3 points obligatoire",
          "Tabac-presse, débit de boissons : rideau plein P77, idéalement micro-perforé pour visibilité partielle",
          "Boulangerie, pâtisserie : rideau micro-perforé (laisse passer l'air, évite la condensation nocturne)",
          "Mode, prêt-à-porter, chausseurs : grille extensible ou rideau cobra (vitrine visible la nuit = vente d'image)",
          "Restaurant, bar : grille extensible (terrasses) ou rideau micro-perforé (vitrine intérieure)",
          "Pharmacie, parapharmacie : rideau plein P57 minimum (sécurité produits) + caisson anti-effraction",
          "Garage, atelier automobile : rideau plein P77 grand format ou porte sectionnelle motorisée",
          "Supermarché, grande surface : rideau plein P90 + double moteur ACM + serrure motorisée centralisée",
        ],
      },
      {
        type: "h2",
        content: "Niveaux de sécurité selon les normes",
      },
      {
        type: "p",
        content:
          "Les rideaux métalliques pleins sont classés selon la norme européenne EN 13241-1. Les lames P57 (5,7 mm d'épaisseur) résistent à une effraction manuelle simple (10 min de leviers, pieds de biche). Les lames P77 (7,7 mm) résistent à 30 minutes d'attaque avec outils manuels. Les lames P90 (9 mm) à plus d'une heure, et stoppent les disqueuses thermiques d'entrée de gamme. Pour les commerces très exposés (Quartier Haut, Pointe Courte la nuit, halles), la P77 reste le bon compromis prix/sécurité. Les grilles extensibles offrent un niveau dit RC2 (résistance à effraction modérée), suffisant pour la majorité des boutiques classiques en zone urbaine animée.",
      },
      {
        type: "h2",
        content: "Esthétique : un atout commercial sous-estimé",
      },
      {
        type: "p",
        content:
          "Une vitrine fermée par un rideau plein la nuit éteint complètement le commerce vis-à-vis des passants. Une grille extensible ou un rideau micro-perforé, au contraire, garde le commerce visible : éclairage tamisé, produits exposés, identité visuelle préservée. Sur des artères passantes comme la rue Alsace-Lorraine, le Grand Rue Mario Roustan ou l'avenue Victor Hugo, ce détail peut faire 5 à 10 % de chiffre d'affaires en plus (effet vitrine permanente). De nombreux franchisés (Optic 2000, Tape à l'Œil, Sephora) imposent désormais cette obligation contractuelle à leurs commerçants.",
      },
      {
        type: "h2",
        content: "Coût comparé sur 10 ans",
      },
      {
        type: "ul",
        content: [
          "Rideau plein P77 motorisé 3x3 m : 2 600 à 3 800 € HT + 80 € entretien/an",
          "Grille extensible motorisée 3x3 m : 1 800 à 2 600 € HT + 60 € entretien/an",
          "Rideau micro-perforé motorisé 3x3 m : 2 400 à 3 400 € HT + 80 € entretien/an",
          "Rideau cobra (mixte plein/ajouré) motorisé 3x3 m : 2 800 à 4 200 € HT + 90 € entretien/an",
        ],
      },
      {
        type: "h2",
        content: "Mixer les solutions sur une même façade",
      },
      {
        type: "p",
        content:
          "Pour les commerces de plus de 6 mètres de front (concessions auto, opticiens panoramiques, magasins de literie), il est tout à fait possible de mixer : rideau plein côté caisse et stockage, grille extensible côté vitrine et présentoirs. Cette configuration est ce qu'on retrouve sur les grands magasins du centre-ville et garantit le meilleur compromis sécurité/visibilité. Nous installons régulièrement ce type d'architecture à Sète Centre et sur les commerces du Grand Rue.",
      },
      {
        type: "h2",
        content: "Demandez un audit gratuit à votre adresse",
      },
      {
        type: "p",
        content:
          "Avant de choisir, le mieux reste de faire venir un technicien sur place : il mesure la façade, évalue le passage piéton, observe l'orientation par rapport aux vents dominants (Mistral / Marin) et au niveau de risque cambriolage du quartier. DRM Sète propose cet audit gratuitement à Sète, Frontignan, Balaruc-les-Bains, Mèze, Marseillan et toutes les communes du Bassin de Thau, avec devis chiffré sous 48h et accompagnement complet jusqu'à la pose et au contrat d'entretien.",
      },
    ],
  },
];
