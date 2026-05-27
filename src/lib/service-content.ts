// Rotation deterministe pour générer du contenu service×zone unique.
// Phase 3 : banks ÉLARGIES (intro 6, seoBlocks 8, faq 8, types 8, steps 6, pourquoi 6)
// + injection AGRESSIVE de tokens zone-local (streets/landmarks/quartiers/commerces/profile)
// dans CHAQUE bloc, pas seulement en append.
//
// Couplé avec zones-handcrafted.ts qui fournit un préfixe paragraphe zone-spécifique
// (overriding seul l'intro pour 9 zones principales), le résultat passe sous 40% Jaccard.

import { siteConfig } from "@/config/site";
import { zoneLocalData } from "@/lib/zone-local-data";
import { zonesHandcrafted } from "@/lib/zones-handcrafted";

export function hashZoneSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// Mix avec un sel (string) pour produire des seeds dérivés différents par bloc.
function seedFor(slug: string, salt: string): number {
  return hashZoneSlug(slug + ":" + salt);
}

function pick<T>(bank: T[], seed: number): T {
  return bank[seed % bank.length];
}

// Pick N éléments distincts du bank, en partant de l'offset = seed, sans répétition.
function pickN<T>(bank: T[], seed: number, n: number): T[] {
  const result: T[] = [];
  const len = bank.length;
  const used = new Set<number>();
  for (let i = 0; i < n && result.length < len; i++) {
    let idx = (seed + i * 7) % len;
    let tries = 0;
    while (used.has(idx) && tries < len) {
      idx = (idx + 1) % len;
      tries++;
    }
    used.add(idx);
    result.push(bank[idx]);
  }
  return result;
}

// ============================================================================
// 1. H1 variants par service (pour la PAGE VILLE PRINCIPALE)
// ============================================================================
export const h1ByService: Record<string, string> = {
  depannage: "Dépannage de rideau métallique à Sète",
  installation: "Installation de rideau métallique sur-mesure à Sète",
  reparation: "Réparation de rideau métallique à Sète",
  motorisation: "Motorisation de rideau métallique à Sète",
  deblocage: "Déblocage de rideau métallique à Sète — urgence 24h/24",
  entretien: "Entretien de rideau métallique à Sète — contrats préventifs",
  fabrication: "Fabrication sur-mesure de rideau métallique à Sète",
};

// ============================================================================
// 2. Intro angles — 6 variantes par service
// ============================================================================
const introAngles: Record<string, string[]> = {
  depannage: [
    "Un rideau métallique bloqué à <zone> stoppe net votre activité commerciale. Les techniciens DRM interviennent en moins de <delai> minutes, jour et nuit, sur l'ensemble du Bassin de Thau.",
    "À <zone>, l'air marin attaque les mécanismes des rideaux métalliques plus vite qu'ailleurs. DRM Sète envoie un technicien dépannage 24h/24, équipé pour les corrosions salines spécifiques au littoral.",
    "Le dépannage de rideau métallique à <zone> est une urgence pour les commerçants : DRM Sète propose une intervention express, sans déplacement caché, avec devis transparent avant chaque opération.",
    "DRM Sète intervient à <zone> pour tout type de rideau métallique en panne : moteur grippé, lame déformée, ressort cassé ou serrure forcée. Notre flotte sillonne <zone> et le pourtour de l'étang de Thau.",
    "Quand un rideau métallique tombe en panne à <zone>, chaque minute compte. DRM Sète garantit un diagnostic en moins de <delai> minutes et une remise en service dans la journée pour 9 interventions sur 10.",
    "Sur <zone>, notre véhicule d'astreinte rejoint votre commerce sans détour. Quinze ans de pannes traitées sur la côte héraultaise nous ont appris à anticiper les défauts récurrents : nous arrivons avec la pièce qu'il faut, pas avec celle qui ressemble.",
  ],
  installation: [
    "Installer un rideau métallique à <zone>, c'est protéger sa vitrine de l'air iodé et des effractions courantes en zone touristique. DRM Sète pose en sur-mesure, en applique ou en linteau, avec garantie 2 ans.",
    "L'installation d'un rideau métallique à <zone> demande une expertise du climat méditerranéen : épaisseur des lames, traitement anti-corrosion, joints renforcés. DRM Sète maîtrise chacun de ces paramètres.",
    "À <zone>, la pose d'un rideau métallique se fait sur prise de mesure précise. DRM Sète intervient en 48h pour la pose, avec moteur ACM/Simu/Somfy au choix selon votre budget et l'usage du commerce.",
    "DRM Sète installe à <zone> des rideaux métalliques neufs pour commerces, bureaux, entrepôts et parkings. Lames pleines, micro-perforées, polycarbonate ou grille cobra : nous adaptons la solution au flux clients.",
    "Une installation propre à <zone> commence avant le chantier : étude de l'ouverture, vérification de l'arrivée 230V dédiée, choix d'un coffre adapté au bâti local. DRM Sète refuse les compromis qui se paient en pannes deux ans après.",
    "Sur <zone>, l'exposition au sel marin conditionne tout : la traçabilité de l'acier, le grammage galvanique, la finition Qualicoat, la qualité des joints EPDM. DRM Sète installe un produit dimensionné pour 15-20 ans, pas pour 5.",
  ],
  reparation: [
    "Réparer un rideau métallique à <zone> revient souvent moins cher que le remplacer : DRM Sète remplace lames, moteurs, axes et serrures avec des pièces d'origine constructeur (ACM, Somfy, Simu).",
    "À <zone>, la réparation d'un rideau métallique s'impose dès qu'une lame se déforme, qu'un moteur force, ou qu'une serrure se grippe. DRM Sète diagnostique sur place et répare souvent dans la journée.",
    "DRM Sète propose à <zone> la réparation de rideaux métalliques manuels et motorisés, avec garantie 2 ans sur la pièce remplacée et 1 an sur l'intervention.",
    "La réparation d'un rideau métallique à <zone> évite jusqu'à 70% du coût d'un remplacement neuf. DRM Sète remet en état axe, moteur, lames, ressorts et serrures, sans démontage du coffre quand c'est possible.",
    "Avant tout devis de réparation à <zone>, notre technicien teste le moteur sous charge, mesure l'intensité absorbée, vérifie chaque ressort de torsion. Vous savez précisément ce qu'il faut changer et pourquoi.",
    "Sur <zone>, nous distinguons réparation curative (panne déclarée) et réparation préventive (point de fragilité repéré) : le devis sépare ce qui doit être fait maintenant de ce qui peut attendre, sans confusion.",
  ],
  motorisation: [
    "Motoriser un rideau métallique à <zone>, c'est gagner en confort et en sécurité. DRM Sète installe des kits Somfy, Simu, ACM ou Sommer adaptés au poids du tablier et à l'usage du commerce.",
    "À <zone>, la motorisation d'un rideau métallique existant prend une demi-journée. DRM Sète câble, raccorde et règle le moteur, livre la télécommande et forme l'utilisateur.",
    "DRM Sète motorise les rideaux métalliques manuels à <zone> avec moteurs central ACM (commerces lourds) ou tubulaire Simu (commerces moyens). Devis transparent, garantie 2 ans.",
    "Passer du rideau manuel au rideau motorisé à <zone> évite les efforts répétés sur la chaîne et les sangles. DRM Sète intègre un système d'arrêt obstacle aux normes EN 12453 et une commande filaire ou télécommandée.",
    "À <zone>, le passage en motorisation s'accompagne d'un audit de votre axe et de vos ressorts : un axe usé ou des ressorts fatigués condamnent vite le moteur neuf. Nous vous le disons avant d'engager les frais.",
    "DRM Sète propose à <zone> trois niveaux de motorisation : entrée de gamme tubulaire fiable, intermédiaire silencieuse Somfy RS100, premium ACM 76 sur tabliers lourds. Le choix dépend du poids et du cycle quotidien.",
  ],
  deblocage: [
    "Le déblocage d'un rideau métallique à <zone> est une intervention courante : lame sortie du rail, axe désaxé, moteur en panne. DRM Sète débloque sans dégradation, en moins de <delai> minutes.",
    "À <zone>, un rideau métallique bloqué à mi-hauteur expose votre commerce. DRM Sète intervient 24h/24 avec outillage spécifique pour relever ou descendre le tablier sans casse.",
    "DRM Sète débloque à <zone> tout type de rideau métallique coincé : lames déboîtées, ressorts cassés, serrures grippées par l'air marin.",
    "Un rideau métallique qui refuse de remonter à <zone> mobilise notre astreinte en priorité. DRM Sète arrive avec manivelle de secours, kit décoinçage came et perceuse à choc pour libérer la lame finale en quelques minutes.",
    "Sur <zone>, nos techniciens ne forcent jamais un tablier coincé : un mauvais geste peut désaxer l'axe ou faire sortir d'autres lames. La méthode DRM Sète repose sur un diagnostic en 5 minutes puis une libération calibrée.",
    "À <zone>, le déblocage urgent ne souffre pas l'amateurisme : un rideau forcé manuellement peut couter dix fois plus cher en réparation lourde derrière. DRM Sète intervient avec le bon outillage en moins de <delai> minutes.",
  ],
  entretien: [
    "L'entretien d'un rideau métallique à <zone> évite 80% des pannes. DRM Sète propose des contrats annuels avec graissage, vérification de tension, contrôle moteur et nettoyage des coulisses.",
    "À <zone>, l'air iodé corrode plus vite les mécanismes : DRM Sète recommande un entretien semestriel avec produits anti-corrosion marins spécifiques au littoral méditerranéen.",
    "DRM Sète assure l'entretien préventif de votre rideau métallique à <zone> : visite annuelle, rapport d'état, intervention en 24h si défaut critique détecté.",
    "Sur <zone>, le sel marin et les embruns oxydent rails, axes et ressorts en moins de 18 mois sans entretien. DRM Sète déploie un protocole de maintenance adapté avec graisses lithium calcium et joints EPDM résistants au littoral.",
    "Un contrat d'entretien à <zone> prolonge la durée de vie d'un rideau métallique de 5 à 8 ans en moyenne. DRM Sète ajuste la fréquence de visite à votre usage réel et à votre exposition au littoral.",
    "À <zone>, les enseignes multi-sites bénéficient d'un planning groupé et d'un interlocuteur unique. DRM Sète facture en un seul flux, ce qui simplifie la comptabilité et l'archivage administratif des interventions.",
  ],
  fabrication: [
    "La fabrication d'un rideau métallique sur-mesure à <zone> demande une prise de mesure précise et le choix des matériaux : acier galvanisé Z275 pour le littoral, aluminium pour les zones très exposées.",
    "À <zone>, DRM Sète fabrique en atelier des rideaux métalliques aux dimensions exactes de votre ouverture, avec traitement spécifique anti-corrosion adapté à l'air marin du Bassin de Thau.",
    "DRM Sète conçoit à <zone> des rideaux métalliques sur-mesure (lames pleines, micro-perforées, polycarbonate, grille cobra) en 4h en fabrication express, ou en délai standard de 5 jours.",
    "La fabrication française d'un rideau métallique à <zone> garantit une traçabilité totale des aciers, une finition thermolaquée RAL au choix et une compatibilité moteur Somfy/Simu/ACM dès la conception.",
    "À <zone>, chaque rideau métallique sortant de notre atelier partenaire a passé un contrôle qualité écrit : cotes vérifiées, soudure inspectée, finition thermolaquée Qualicoat certifiée. La facture inclut ce certificat.",
    "Sur <zone>, nos fabrications sur-mesure intègrent par défaut une lame finale renforcée et une serrure cylindre profil européen anti-snap. Ce sont les deux points faibles classiques des rideaux importés bon marché.",
  ],
};

// ============================================================================
// 3. SEO blocks par service — 8 variantes (rotation par seed sur 3 indexes)
// ============================================================================
const seoBlocksByService: Record<string, Array<{ title: string; body: string }>> = {
  depannage: [
    {
      title: "Pourquoi DRM Sète intervient si vite sur <zone>",
      body: "Notre flotte de véhicules d'intervention est postée à Sète et roule en permanence sur le Bassin de Thau. À <zone>, notre <strong>technicien dépannage</strong> arrive avec un stock embarqué complet : moteurs ACM 76, lames P57/P90, axes diam. 60-76 mm, serrures profil européen, ressorts de torsion. Cela évite un second passage et permet de remettre votre commerce en service dès la première intervention dans 9 cas sur 10. Notre engagement <strong><delai> minutes</strong> est tenu 95% du temps sur l'année.",
    },
    {
      title: "Diagnostic gratuit avant chaque dépannage à <zone>",
      body: "À <zone>, notre technicien établit d'abord un <strong>diagnostic complet</strong> : test moteur, contrôle ressort, vérification coulisses, état serrure, mesure tension électrique. Le devis écrit vous est remis sur place, signé avant tout démontage. Aucun frais caché, aucune facturation surprise. Si vous refusez, vous ne payez que les 80 € de déplacement-diagnostic. C'est la transparence que les commerçants de Sète, Frontignan et Mèze attendent d'un vrai professionnel du <strong>dépannage rideau métallique</strong>.",
    },
    {
      title: "Pièces d'origine constructeur garanties 2 ans à <zone>",
      body: "DRM Sète refuse les pièces d'occasion ou de contrefaçon. Sur <zone>, chaque remplacement utilise des composants d'origine <strong>Somfy, Simu, ACM, Came, Nice, FAAC, BFT ou Sommer</strong>, achetés en distribution officielle avec facture constructeur. Vous bénéficiez de la garantie d'origine, généralement 2 ans, jusqu'à 5 ans sur les moteurs haut de gamme. C'est l'assurance d'un dépannage durable, pas d'une rustine qui lâchera dans 6 mois sous l'effet de l'air marin.",
    },
    {
      title: "Astreinte 24h/24 sans majoration sur <zone>",
      body: "Notre astreinte couvre <zone> tous les jours de l'année : dimanches, jours fériés, nuits, ponts. <strong>Aucune majoration weekend ou nocturne</strong>. Le tarif que vous validez à 14h un mardi est le même qu'à 3h du matin un samedi. Pour les commerçants de <zone>, c'est la garantie d'un budget dépannage prévisible, et pour les bailleurs ou syndics d'une facturation lisible quel que soit le jour d'intervention.",
    },
    {
      title: "Couverture continue du Bassin de Thau, dont <zone>",
      body: "DRM Sète couvre l'ensemble du périmètre <strong>Sète — Frontignan — Mèze — Marseillan — Balaruc</strong> avec des véhicules d'astreinte mobiles. Sur <zone>, notre temps moyen d'arrivée est en deçà de <delai> minutes hors période d'affluence touristique extrême. Cette couverture continue permet d'assurer un service uniforme dans tous les quartiers, sans zones blanches ni délais à rallonge en bordure de notre rayon d'intervention.",
    },
    {
      title: "Spécialistes du moteur central ACM 76 sur <zone>",
      body: "Pour les commerces de <zone> équipés en lame pleine acier (350-1200 kg), nous sommes spécialistes du <strong>moteur central ACM 76</strong>. Calibration du couple, raccordement 230V, programmation des fins de course, test arrêt obstacle EN 12453 : chaque étape suit un protocole écrit. Nous sommes formés et certifiés sur cette gamme, ce qui sécurise votre dépannage si vous avez ce type de motorisation lourde sur votre rideau.",
    },
    {
      title: "Bonnes pratiques face à une panne à <zone>",
      body: "Sur <zone>, si votre rideau métallique tombe en panne, suivez 3 réflexes : <strong>(1)</strong> ne forcez pas manuellement (vous risquez d'aggraver) ; <strong>(2)</strong> coupez l'alimentation 230V au tableau si vous sentez une odeur de brûlé ; <strong>(3)</strong> appelez DRM Sète et décrivez précisément le symptôme. Nous arrivons en moins de <delai> minutes avec les bonnes pièces. Cette préparation simple raccourcit notre diagnostic sur place.",
    },
    {
      title: "Notre engagement écrit à <zone> : transparence totale",
      body: "Chaque intervention à <zone> est précédée d'un <strong>devis écrit signé sur place</strong> avant tout démontage. Coût déplacement (80 €), main-d'œuvre, pièces, garantie : tout est ligne par ligne, lisible, sans astérisque. Si vous refusez, vous ne payez que le déplacement. C'est la condition pour qu'un commerçant nous fasse confiance dès le premier appel — et c'est ce qui explique notre note 4,9/5 sur <strong>112 avis Google</strong>.",
    },
  ],
  installation: [
    {
      title: "Prise de mesure et étude technique sur <zone>",
      body: "Toute <strong>installation de rideau métallique</strong> à <zone> commence par une visite technique gratuite. Notre métreur relève hauteur, largeur, profondeur du linteau, type de mur (pierre de Sète, béton, parpaing) et présence d'arrivée électrique 230V. Nous validons ensuite le sens de pose (applique extérieure, applique intérieure, linteau encastré), la position du coffre et l'emplacement du moteur. Un plan technique vous est remis avec le devis : aucune mauvaise surprise le jour de la pose.",
    },
    {
      title: "Choix des matériaux adaptés au climat méditerranéen",
      body: "L'air iodé de <zone> impose un traitement anti-corrosion renforcé. DRM Sète installe par défaut des lames en <strong>acier galvanisé Z275</strong> avec finition thermolaquée polyester (RAL au choix), ou en aluminium marin selon l'exposition. Les axes sont en acier traité, les ressorts protégés, les joints EPDM résistants UV/sel. Pour les commerces à fort flux, lames pleines anti-effraction A2P. Pour les vitrines à mettre en valeur, micro-perforées 5 mm ou polycarbonate transparent.",
    },
    {
      title: "Pose en 1 à 2 jours, garantie 2 ans à <zone>",
      body: "Une fois le devis signé, DRM Sète planifie la <strong>pose à <zone></strong> sous 7 à 15 jours. Le chantier dure 1 jour pour une largeur standard (jusqu'à 4 m), 2 jours pour les grandes largeurs ou doubles rideaux. Nous fixons coulisses, posons l'axe, déroulons le tablier, raccordons le moteur 230V, réglons les fins de course haut/bas, contrôlons l'arrêt obstacle et formons l'utilisateur. Garantie 2 ans pièces et 1 an main-d'œuvre, attestation TVA 10% si commerce de plus de 2 ans.",
    },
    {
      title: "Pose en applique ou linteau — quel choix à <zone> ?",
      body: "À <zone>, deux configurations dominent. La <strong>pose en applique extérieure</strong> convient aux façades sans linteau intérieur : coffre apparent en haut de la vitrine, esthétique industrielle. La <strong>pose en linteau encastré</strong> dissimule le coffre dans le plafond du sas : finition haut de gamme, idéale pour les rénovations de commerces historiques. Notre métreur évalue chaque cas et propose la configuration la mieux adaptée à votre bâti.",
    },
    {
      title: "Coordination corps de métier sur les chantiers de <zone>",
      body: "Un projet d'installation à <zone> peut impliquer maçonnerie (création de linteau), électricité (arrivée 230V dédiée), vitrerie (remplacement de vitre adjacente). DRM Sète coordonne directement les corps de métier locaux quand vous le souhaitez : un seul interlocuteur, un seul planning, une seule réception de chantier. Cela accélère la mise en service de votre commerce et simplifie la gestion administrative pour vous.",
    },
    {
      title: "Sécurité d'installation EN 12453 et A2P sur <zone>",
      body: "Toute installation neuve à <zone> respecte la norme <strong>EN 12453</strong> (arrêt obstacle motorisé) et bénéficie d'une attestation écrite. Pour les commerces à risque (bijouteries, opticiens, pharmacies), nous proposons en option la certification <strong>A2P niveau 2</strong> : lame pleine spécifique anti-effraction, serrure cylindre haute sécurité, montage testé en effraction laboratoire. Cette double certification est exigée par certaines assurances pro et nous savons la fournir.",
    },
    {
      title: "Délais réalistes et planning de pose sur <zone>",
      body: "DRM Sète n'annonce jamais un délai d'installation à <zone> qu'il ne tient pas. <strong>Fabrication 5 à 10 jours ouvrés</strong>, livraison sur site, pose 1 à 2 jours. Pour les chantiers urgents (sinistre, effraction, reprise de fonds de commerce), nous proposons une fabrication express en 4h sur les axes et coffres standards. Le planning est validé à la signature du devis et confirmé par mail 7 jours avant la pose.",
    },
    {
      title: "Devis détaillé et TVA 10% à <zone>",
      body: "Le devis d'installation à <zone> est ligne par ligne : axe et ressort, coffre, tablier (lames pleines/microperforées/polycarbonate), motorisation, télécommande, formation. <strong>TVA 10% applicable</strong> si votre commerce est de plus de 2 ans : nous fournissons l'attestation sans qu'il faille la demander. Devis détaillé sous 48h après visite technique, validité 30 jours, signature numérique ou papier au choix.",
    },
  ],
  reparation: [
    {
      title: "Réparation moteur, axe, lames et ressorts à <zone>",
      body: "DRM Sète répare à <zone> tous les composants d'un rideau métallique. <strong>Moteur défaillant</strong> : remplacement central ACM 76 (charges 500-1200 kg) ou tubulaire Simu T5 (jusqu'à 350 kg). <strong>Axe désaxé ou cintré</strong> : redressement ou remplacement diam. 60/70/76 mm. <strong>Lames déformées</strong> : changement unitaire sans démontage complet du tablier. <strong>Ressorts cassés</strong> : remplacement par paire pour garder l'équilibre, retension calibrée. Chaque pièce d'origine est garantie 2 ans constructeur.",
    },
    {
      title: "Réparation programmée ou urgente — à vous de choisir",
      body: "À <zone>, vous pouvez choisir entre une <strong>réparation urgente</strong> (intervention le jour même, parfois la nuit, sans majoration) ou une <strong>réparation programmée</strong> (rendez-vous sous 48-72h, plus économique). Le devis distingue clairement les deux options. Pour les petits commerces, nous proposons aussi une réparation en deux temps : sécurisation immédiate du rideau (refermable manuellement), puis réparation définitive le lendemain en horaire ouvré.",
    },
    {
      title: "Garantie 2 ans pièces et 1 an main-d'œuvre à <zone>",
      body: "Toute <strong>réparation effectuée à <zone></strong> par DRM Sète bénéficie d'une garantie complète : 2 ans sur la pièce d'origine constructeur installée, 1 an sur la main-d'œuvre. En cas de récidive sur la même cause dans le délai, nous repassons gratuitement (déplacement, main-d'œuvre, pièce). Cette garantie figure noir sur blanc sur votre facture, contre-signée par le technicien. C'est l'engagement d'un réparateur qui assume son intervention sur la durée.",
    },
    {
      title: "Réparer ou remplacer — notre méthode de décision à <zone>",
      body: "À <zone>, nous appliquons une règle simple : si le coût de réparation atteint <strong>60% du prix d'un rideau neuf</strong>, nous recommandons le remplacement. Au-dessous, la réparation est rentable et nous l'argumentons. Cette transparence évite les remplacements abusifs (équipement encore valide) et les réparations bouchées sur du matériel en fin de vie qui repart en panne sous 6 mois.",
    },
    {
      title: "Réparation de toutes marques sur <zone>",
      body: "DRM Sète répare à <zone> tous les rideaux quel que soit le constructeur : <strong>ACM, Somfy, Simu, Came, Nice, FAAC, BFT, Sommer, La Toulousaine, Lecomble & Schmitt</strong>. Nos techniciens sont formés sur les principales gammes du marché ; nous disposons des références constructeur pour identifier rapidement la pièce d'origine compatible. Aucun risque d'incompatibilité ou de pièce universelle de mauvaise qualité installée à votre insu.",
    },
    {
      title: "Réparation préventive après diagnostic à <zone>",
      body: "Lors d'une réparation à <zone>, notre technicien ne se contente pas de traiter la panne déclarée : il examine l'ensemble du rideau et identifie les points de fragilité (joint EPDM usé, came en début de désalignement, ressort fatigué). Vous recevez un rapport écrit avec préconisations chiffrées en orange/rouge. À vous de décider si vous faites le préventif maintenant ou si vous attendez la prochaine panne.",
    },
    {
      title: "Délai d'intervention réparation sur <zone>",
      body: "DRM Sète à <zone> propose deux délais d'intervention en réparation : <strong>réparation urgente</strong> avec arrivée dans la journée (souvent dans l'heure) et <strong>réparation programmée</strong> sous 48-72h en horaire ouvré. La première coûte légèrement plus cher en main-d'œuvre, la seconde est plus économique. Le devis chiffre les deux options et c'est vous qui choisissez en fonction de l'impact sur votre activité.",
    },
    {
      title: "Pièces d'origine et facture constructeur à <zone>",
      body: "Toute pièce remplacée à <zone> par DRM Sète provient de la <strong>distribution officielle constructeur</strong> avec facture jointe. Aucune pièce d'occasion, aucune contrefaçon, aucune pièce universelle low-cost. Cette traçabilité est inscrite dans la facture client : le numéro de série de la pièce neuve y figure, ainsi que la durée de garantie constructeur. C'est la condition pour activer la garantie en cas de récidive.",
    },
  ],
  motorisation: [
    {
      title: "Quel moteur choisir pour motoriser à <zone> ?",
      body: "Le choix du moteur dépend du poids du tablier et de l'usage. À <zone>, DRM Sète installe en <strong>moteur central ACM 76</strong> pour les tabliers lourds (commerces 250-1200 kg, lames pleines acier), en <strong>moteur tubulaire Simu T5 ou Somfy RS100</strong> pour les tabliers moyens (jusqu'à 350 kg, micro-perforées ou polycarbonate). Pour les grilles cobra légères, un moteur Nice Era suffit. Notre technicien calcule le couple nécessaire selon hauteur × largeur × type de lame.",
    },
    {
      title: "Commande filaire, radio ou smartphone — sur <zone>",
      body: "DRM Sète propose à <zone> trois modes de commande : <strong>bouton poussoir filaire</strong> GEBA 3 boutons (montée/descente/stop), <strong>télécommande RTS</strong> Somfy ou Simu (portée 30 m, jusqu'à 16 canaux), ou <strong>module connecté</strong> Somfy TaHoma ou Nice MyNice pour ouverture depuis smartphone. La commande filaire est idéale pour un point unique, la télécommande pour un usage mobile, le smartphone pour un commerce multi-sites avec gestion centralisée.",
    },
    {
      title: "Sécurité obstacle EN 12453 obligatoire à <zone>",
      body: "Tout rideau métallique motorisé en France doit respecter la <strong>norme EN 12453</strong> (sécurité d'arrêt en cas d'obstacle). À <zone>, DRM Sète installe systématiquement la détection ampérométrique intégrée au moteur, parfois doublée d'une barre palpeuse en bas de lame finale pour les passages publics. Nous fournissons l'attestation de conformité, indispensable pour votre assurance pro et pour la responsabilité civile en cas d'accident lié au rideau.",
    },
    {
      title: "Motorisation d'un rideau manuel existant à <zone>",
      body: "À <zone>, vous pouvez motoriser un rideau manuel (chaîne, sangle ou manivelle) dans la majorité des cas. Conditions : axe en bon état, ressorts non fatigués, coulisses propres. Si l'un de ces éléments est dégradé, DRM Sète propose un kit complet (axe motorisé + tablier conservé) — devis transparent pour comparer la solution moteur-seul et la solution axe-complet.",
    },
    {
      title: "Apprentissage télécommande et formation à <zone>",
      body: "Toute motorisation installée à <zone> par DRM Sète inclut une <strong>formation utilisateur de 20-30 minutes</strong> : apprentissage de la télécommande, ajout/suppression de canaux, paramétrage smartphone si module connecté, gestes de secours en cas de panne secteur. Un livret écrit et un QR code vidéo sont remis sur place. Vos collaborateurs peuvent prendre le relais sans formation supplémentaire.",
    },
    {
      title: "Mise aux normes électriques à <zone>",
      body: "Sur <zone>, certaines vitrines anciennes n'ont pas d'arrivée 230V dédiée à proximité du rideau. DRM Sète peut <strong>poser une prise dédiée</strong> et mettre à niveau la portion de tableau concernée, en coordination avec un électricien partenaire si nécessaire. Coût intégré au devis global, attestation Consuel délivrée pour la nouvelle installation, conformité NF C 15-100.",
    },
    {
      title: "Tarif et budget motorisation à <zone>",
      body: "À <zone>, le budget motorisation se situe entre <strong>950 € et 1 800 € HT pose incluse</strong> pour une motorisation tubulaire standard (Simu T5 ou Somfy RS100, télécommande RTS, raccordement 230V, fins de course). Le moteur central ACM 76 pour tabliers lourds atteint <strong>1 500 à 2 500 € HT</strong>. Le devis détaille chaque ligne : matériel, main-d'œuvre, télécommande, formation, attestation EN 12453, garantie.",
    },
    {
      title: "Marques premium et garantie constructeur à <zone>",
      body: "DRM Sète motorise à <zone> exclusivement avec des marques premium : <strong>Somfy</strong> (garantie jusqu'à 5 ans), <strong>Simu</strong> (groupe Somfy), <strong>ACM</strong> (référence sur moteurs lourds), <strong>Nice</strong>, <strong>FAAC</strong>, <strong>BFT</strong>, <strong>Sommer</strong>. Pas d'importation low-cost non garantie. La facture mentionne la marque et le numéro de série du moteur, ce qui permet d'activer la garantie constructeur sans intermédiaire.",
    },
  ],
  deblocage: [
    {
      title: "Déblocage sans casse à <zone> — la méthode DRM",
      body: "À <zone>, un rideau métallique coincé n'oblige pas à casser une lame ou démonter le coffre. DRM Sète intervient avec un protocole précis : <strong>1. diagnostic visuel</strong> (lame sortie de rail, ressort cassé, came désaxée, moteur HS), <strong>2. ouverture manuelle</strong> via manivelle de secours ou perceuse à choc sur axe, <strong>3. remise en rail</strong> de la ou des lames, <strong>4. test de cycle complet</strong>. Le rideau redevient fonctionnel sans intervention destructive dans 8 cas sur 10.",
    },
    {
      title: "Intervention nuit / weekend / jours fériés à <zone>",
      body: "Notre astreinte <strong>déblocage 24h/24</strong> couvre <zone> tous les jours de l'année, y compris dimanches, jours fériés et nuit. <strong>Aucune majoration weekend ni nocturne</strong> : vous payez le même tarif qu'un jour ouvré. C'est essentiel pour les commerçants de Sète et du Bassin de Thau qui ne peuvent pas se permettre d'attendre lundi matin pour ouvrir leur boutique. Notre engagement <delai> minutes vaut aussi à 3h du matin un samedi soir.",
    },
    {
      title: "Causes fréquentes d'un blocage à <zone>",
      body: "Sur <zone>, les blocages de rideau métallique ont 5 causes principales : <strong>(1) air marin</strong> qui grippe l'axe et oxyde les ressorts en 12-18 mois sans entretien ; <strong>(2) lame sortie de rail</strong> après un choc ou une descente trop rapide ; <strong>(3) ressort de torsion cassé</strong> par fatigue cyclique (un ressort dure 8 000 à 12 000 cycles) ; <strong>(4) moteur grillé</strong> par surcharge ou court-circuit ; <strong>(5) serrure cylindre forcée</strong> ou rouillée. DRM Sète identifie la cause en moins de 5 minutes.",
    },
    {
      title: "Outillage embarqué pour déblocage rapide à <zone>",
      body: "Notre véhicule d'astreinte arrive à <zone> avec un outillage complet : <strong>manivelle de secours</strong> pour ouvrir manuellement, <strong>perceuse à choc</strong> pour entraîner l'axe motorisé bloqué, <strong>kit décoinçage came</strong> pour recentrer une came désaxée, <strong>jeu de clés cylindre passe</strong> pour serrure rouillée. Ces outils permettent un déblocage non destructif dans 8 cas sur 10 et évitent un second passage pour pièces.",
    },
    {
      title: "Erreurs à éviter face à un rideau bloqué sur <zone>",
      body: "À <zone>, ne forcez jamais un rideau métallique coincé : (a) tirer manuellement sur le tablier peut faire sortir d'autres lames du rail ; (b) débrancher le moteur sous tension peut griller le condensateur ; (c) tordre la serrure peut détruire le cylindre. La <strong>seule bonne réaction</strong> est d'appeler DRM Sète et de patienter. Un déblocage professionnel coûte 150 €, une réparation lourde derrière un mauvais geste peut dépasser 1 500 €.",
    },
    {
      title: "Sécurité commerce après déblocage à <zone>",
      body: "Si nous débloquons un rideau coincé en position fermée à <zone>, votre commerce peut rouvrir immédiatement après notre passage. Si nous débloquons en position ouverte ou intermédiaire, DRM Sète <strong>sécurise systématiquement le tablier</strong> avant de repartir : refermable manuellement, cylindre fonctionnel, lame finale verrouillée. Aucun rideau bloqué en position vulnérable n'est laissé après notre intervention à <zone>.",
    },
    {
      title: "Conseils anti-récidive après déblocage à <zone>",
      body: "Après un déblocage à <zone>, notre technicien explique la cause exacte (corrosion saline, choc, fatigue ressort, etc.) et propose des <strong>gestes simples anti-récidive</strong> : graissage trimestriel du cylindre, contrôle annuel des fins de course, contrat d'entretien semestriel adapté au littoral. Cette approche pédagogique réduit la probabilité d'un retour d'astreinte sur le même équipement dans les 12 mois.",
    },
    {
      title: "Tarif déblocage fixe sur <zone>",
      body: "Le forfait déblocage à <zone> démarre à <strong>150 € TTC tout compris</strong> (déplacement + diagnostic + intervention courte). Si le blocage nécessite remplacement d'une pièce (ressort, came, moteur), un devis transparent est signé avant remplacement. Pas de mauvaise surprise sur la facture finale, pas de majoration nuit ou weekend. C'est la base de notre relation de confiance avec les commerçants de <zone>.",
    },
  ],
  entretien: [
    {
      title: "Contrats d'entretien annuels personnalisés à <zone>",
      body: "DRM Sète propose à <zone> trois formules de <strong>contrat d'entretien</strong> : <strong>Essentiel</strong> (1 visite/an, graissage axe + ressorts, vérification serrure, rapport), <strong>Confort</strong> (2 visites/an, contrôle moteur + fins de course + arrêt obstacle, nettoyage coulisses), <strong>Sérénité</strong> (3 visites/an, intervention curative incluse jusqu'à 2h/an, remplacement joints EPDM). Tarifs dégressifs pour les enseignes multi-sites du Bassin de Thau (3+ commerces).",
    },
    {
      title: "Protocole maritime — protection air iodé à <zone>",
      body: "À <zone>, l'air marin impose un protocole d'entretien spécifique au littoral. DRM Sète applique des <strong>graisses lithium-calcium anti-saumure</strong> sur l'axe et les paliers, traite les ressorts au lanoline marine, remplace les joints EPDM tous les 24-30 mois (durée de vie raccourcie par le sel), contrôle l'éventuelle apparition de corrosion blanche sur le galvanisé des lames. Sans ce protocole, un rideau standard perd 40% de durée de vie en bord de Méditerranée.",
    },
    {
      title: "Rapport d'intervention détaillé après chaque visite",
      body: "Après chaque visite d'entretien à <zone>, DRM Sète remet un <strong>rapport écrit</strong> qui détaille : état du moteur (intensité absorbée, temps de cycle), état du ressort (tension mesurée), état des lames (jeu, déformation), état de la serrure (lubrification), état des coulisses (alignement, propreté). Toute pièce à surveiller est notée en orange ; toute pièce à changer rapidement en rouge avec devis joint. Vous gardez la traçabilité de votre équipement.",
    },
    {
      title: "Planning de visites programmées à <zone>",
      body: "Les visites d'entretien à <zone> sont planifiées à <strong>dates fixes</strong> définies à la signature du contrat. Rappel par email 7 jours avant la visite, créneau ajusté en horaire ouvré pour éviter votre rush commercial. Pour les enseignes multi-sites, nous proposons un planning groupé sur 1-2 jours qui simplifie la facturation et minimise les perturbations d'activité.",
    },
    {
      title: "Économies réalisées via l'entretien à <zone>",
      body: "Un contrat d'entretien à <zone> évite en moyenne <strong>1 à 2 pannes lourdes par an</strong> (entre 400 € et 1 500 € chacune). Sur 5 ans, le retour sur investissement est massif : 1 200 € de contrat Confort vs 2 500 à 5 000 € de pannes évitées. Plus la durée de vie de l'équipement prolongée de 5-8 ans : on amortit un rideau neuf à 4 000 € sur 15 ans au lieu de 8.",
    },
    {
      title: "Engagement dépannage prioritaire sous contrat à <zone>",
      body: "Tout client sous contrat d'entretien à <zone> bénéficie d'un <strong>délai prioritaire de <delai> minutes garantis</strong> en cas de panne entre deux visites, plus une <strong>remise de 15%</strong> sur les pièces et la main-d'œuvre du curatif. Avec la formule Sérénité, jusqu'à 2h/an de curatif sont incluses. C'est l'argument de tranquillité que demandent les commerçants exposés à un risque de fermeture en cas de panne.",
    },
    {
      title: "Tarifs dégressifs multi-sites sur <zone>",
      body: "Si vous gérez plusieurs commerces à <zone> ou sur le Bassin de Thau (3+ sites), DRM Sète applique un <strong>tarif dégressif de 15 à 25%</strong> sur les formules Confort et Sérénité. Visite groupée possible, planning unique, facturation centralisée. Cette solution est adaptée aux enseignes franchisées, aux groupes de restauration et aux pharmacies multi-officines opérant sur le pourtour de l'étang de Thau.",
    },
    {
      title: "Sans engagement de durée à <zone>",
      body: "Les contrats d'entretien DRM Sète à <zone> sont à <strong>reconduction annuelle libre</strong>, résiliables par lettre recommandée avec 60 jours de préavis avant l'échéance. Aucun engagement de durée minimale au-delà de la première année. Cette flexibilité distingue notre offre des contrats de longue durée du marché et permet aux commerçants d'ajuster leur budget sans pénalité.",
    },
  ],
  fabrication: [
    {
      title: "Fabrication française sur-mesure pour <zone>",
      body: "DRM Sète fabrique à <zone> des rideaux métalliques <strong>100% sur-mesure</strong> dans son atelier partenaire français. Nous choisissons les matériaux selon votre exposition : <strong>acier galvanisé Z275</strong> thermolaqué (lames pleines, micro-perforées, polycarbonate, grille cobra), <strong>aluminium marin</strong> pour les zones très exposées à l'air iodé, <strong>inox 316L</strong> pour les chantiers haut de gamme. Coffre, lame finale, axe, ressorts : chaque composant est dimensionné à vos cotes exactes.",
    },
    {
      title: "Délais fabrication standard ou express à <zone>",
      body: "Notre délai standard de fabrication d'un rideau métallique pour <zone> est de <strong>5 à 10 jours ouvrés</strong> selon les finitions (RAL spécifique, micro-perforations à motif, lames mixtes). En cas d'urgence, DRM Sète propose une <strong>fabrication express en 4 heures</strong> sur les axes et coffres standards, sous réserve de disponibilité atelier. Le délai de pose s'ajoute (1 à 2 jours après livraison). Devis transparent avec date d'enlèvement précisée à la signature.",
    },
    {
      title: "Choix lames : pleine, micro-perforée, polycarbonate, grille",
      body: "À <zone>, DRM Sète propose quatre familles de lames pour votre rideau métallique sur-mesure : <strong>lames pleines P57 ou P90</strong> (anti-effraction maximale, idéal bijoutiers, banques, opticiens), <strong>lames micro-perforées 5 mm</strong> (compromis sécurité/visibilité vitrine, restaurants, boutiques de mode), <strong>lames polycarbonate transparent</strong> (mise en valeur vitrine 24/7, joaillerie, parfumerie), <strong>grille cobra</strong> (ventilation, parkings, entrepôts). Le métreur vous conseille selon votre activité.",
    },
    {
      title: "Thermolaquage Qualicoat et tenue couleur à <zone>",
      body: "Toute pièce de notre fabrication à <zone> est thermolaquée selon la norme <strong>Qualicoat</strong>, certifiée pour une résistance UV et air marin de 10+ ans. Couleur RAL au choix illimité (anthracite, blanc cassé, bordeaux, vert mousse, sur-mesure). Ce traitement protège l'acier galvanisé en deuxième barrière contre la corrosion et conserve la couleur sur la durée, sans farinage ni perte de brillance.",
    },
    {
      title: "Coffres et imposte sur-mesure à <zone>",
      body: "DRM Sète fabrique pour <zone> tous types de coffres : <strong>coffre 2 faces</strong> (avant + dessous, le plus courant), <strong>coffre 3 faces</strong> (avant + dessous + arrière, pour intégration esthétique), <strong>imposte</strong> (coffre encastré dans le linteau, finition haut de gamme), <strong>coffre à découpe</strong> pour passage de tirant ou de réseau. Dimensions sur-mesure (largeur, hauteur, profondeur), finition thermolaquée RAL au choix.",
    },
    {
      title: "Sécurité fabrication A2P et serrures haute sécurité à <zone>",
      body: "Pour les commerces sensibles à <zone> (bijouteries, banques, opticiens, pharmacies), DRM Sète intègre dès la fabrication une <strong>lame pleine A2P niveau 2</strong> spécifique anti-effraction et une <strong>serrure cylindre profil européen anti-snap, anti-perçage, anti-crochetage</strong>. Mise à clé identique possible sur plusieurs commerces. Ces options sont validées par certaines assurances pro et nous fournissons les certifications écrites correspondantes.",
    },
    {
      title: "Traçabilité acier et certificats à <zone>",
      body: "Chaque rideau fabriqué à <zone> bénéficie d'une <strong>traçabilité complète</strong> : numéro de lot acier français, certificat de soudure, attestation Qualicoat, numéro de série moteur, garantie constructeur écrite. Ces documents accompagnent la facture et sont conservés par votre comptable pour les obligations administratives (assurance, passation de fonds, copropriété). Cette transparence distingue la fabrication française des produits importés non tracés.",
    },
    {
      title: "Délais de pose après fabrication à <zone>",
      body: "Une fois la fabrication terminée pour votre rideau à <zone>, la <strong>pose intervient sous 5 à 10 jours</strong> (1 à 2 jours de chantier selon la largeur). Pour les chantiers urgents (sinistre, effraction, reprise de commerce), DRM Sète peut activer une <strong>filière express</strong> : fabrication 4h + pose sous 3 jours, sur les axes et coffres standards uniquement. Le planning est confirmé par mail 7 jours avant le démarrage.",
    },
  ],
};

// ============================================================================
// 4. FAQ par service — 8 questions par service (rotation par seed sur 5 indexes)
// ============================================================================
const faqByService: Record<string, Array<{ q: string; a: string }>> = {
  depannage: [
    {
      q: "Qui appeler pour un dépannage de rideau métallique à <zone> ?",
      a: "DRM Sète intervient 24h/24 et 7j/7 sur <zone>. Composez le numéro de notre standard ou remplissez le formulaire de contact : un technicien rappelle dans les 10 minutes et arrive sur place en moins de <delai> minutes, équipé d'un véhicule d'intervention complet.",
    },
    {
      q: "Quel est le délai de dépannage à <zone> ?",
      a: "Nos techniciens basés à Sète interviennent à <zone> en moins de <delai> minutes, jour et nuit. Le délai varie légèrement selon la circulation, mais nous tenons l'engagement <delai> minutes pour 95% de nos interventions sur le Bassin de Thau.",
    },
    {
      q: "Combien coûte un dépannage DRM à <zone> ?",
      a: "Le déplacement et le diagnostic à <zone> coûtent à partir de 80 €. Le forfait dépannage standard démarre à 150 € (déplacement inclus). Les remplacements de pièces sont facturés en supplément, avec devis transparent avant validation.",
    },
    {
      q: "Le dépannage est-il facturé en plus la nuit ou le weekend à <zone> ?",
      a: "Non, DRM Sète n'applique aucune majoration weekend, nuit ou jour férié. Le tarif est identique du lundi au dimanche, 24h/24. Notre astreinte couvre <zone> en continu sans surcoût.",
    },
    {
      q: "Quelle garantie sur un dépannage DRM à <zone> ?",
      a: "Garantie 2 ans pièces d'origine constructeur et 1 an main-d'œuvre. En cas de récidive sur la même cause, nous repassons gratuitement sur <zone>. La garantie figure noir sur blanc sur votre facture.",
    },
    {
      q: "Peut-on obtenir un devis dépannage gratuit à <zone> ?",
      a: "Oui, le diagnostic et le devis sont gratuits à <zone> dès lors que vous validez l'intervention. Si vous refusez les travaux, seul le déplacement-diagnostic (80 €) reste dû. Aucun frais caché.",
    },
    {
      q: "DRM Sète intervient-il pour les bailleurs commerciaux sur <zone> ?",
      a: "Oui, DRM Sète intervient à <zone> pour les commerçants, les bailleurs, les syndics et les gestionnaires de patrimoine. La facturation peut être adressée au locataire, au propriétaire ou au mandataire selon le mode de gestion. Nous fournissons les pièces administratives demandées (Kbis, RC pro, assurance décennale).",
    },
    {
      q: "Quelles marques de rideau DRM Sète dépanne-t-il à <zone> ?",
      a: "Toutes : ACM, Somfy, Simu, Came, Nice, FAAC, BFT, Sommer, Masinara, La Toulousaine, Lecomble & Schmitt. Nos techniciens sont formés sur les principales gammes et disposent du stock embarqué adapté. Aucun risque d'incompatibilité ou de pièce universelle de mauvaise qualité.",
    },
  ],
  installation: [
    {
      q: "Qui appeler pour une installation de rideau métallique à <zone> ?",
      a: "DRM Sète installe à <zone> les rideaux métalliques neufs pour commerces, bureaux et entrepôts. Notre métreur passe gratuitement sous 48h, remet un devis sur-mesure et planifie la pose sous 7 à 15 jours.",
    },
    {
      q: "Combien coûte une installation de rideau métallique à <zone> ?",
      a: "Une installation complète à <zone> démarre à partir de 2 500 € HT pour une largeur 3 m, lame pleine acier galvanisé, motorisation tubulaire Simu, pose comprise. Devis détaillé après prise de mesure.",
    },
    {
      q: "Quel délai pour faire poser un rideau métallique à <zone> ?",
      a: "DRM Sète installe à <zone> sous 7 à 15 jours ouvrés à compter du devis signé : fabrication 5-10 jours, pose 1 à 2 jours. En urgence (sinistre, effraction), nous proposons une fabrication express 4h avec pose sous 5 jours.",
    },
    {
      q: "Quels matériaux choisir pour un rideau métallique à <zone> ?",
      a: "À <zone>, l'air marin impose l'acier galvanisé Z275 ou l'aluminium marin. DRM Sète propose lames pleines (sécurité), micro-perforées 5 mm (visibilité vitrine), polycarbonate (vitrine 24/7) ou grille cobra (ventilation). Notre métreur vous conseille selon l'activité.",
    },
    {
      q: "DRM Sète installe-t-il des rideaux pour parkings et entrepôts à <zone> ?",
      a: "Oui, DRM Sète installe à <zone> des rideaux métalliques pour tous usages : commerces de rue, vitrines de luxe, bureaux, entrepôts, parkings souterrains, locaux industriels. Tabliers jusqu'à 8 m de largeur et 1200 kg de poids avec moteur central ACM.",
    },
    {
      q: "L'installation est-elle garantie à <zone> ?",
      a: "Toute installation à <zone> est garantie 2 ans pièces d'origine constructeur et 1 an main-d'œuvre. Le moteur peut être garanti jusqu'à 5 ans (Somfy, Simu, ACM haut de gamme). Attestation TVA 10% si commerce de plus de 2 ans.",
    },
    {
      q: "Peut-on choisir la couleur RAL de son rideau à <zone> ?",
      a: "Oui, la couleur RAL est libre à <zone> : anthracite, blanc cassé, gris souris, bordeaux, vert mousse, sur-mesure pour une enseigne. Finition thermolaquée Qualicoat certifiée 10+ ans, sans surcoût pour les RAL standards et avec un délai légèrement étendu pour les RAL spécifiques.",
    },
    {
      q: "Comment se passe la formation utilisateur à <zone> ?",
      a: "Lors de la pose à <zone>, DRM Sète forme l'utilisateur (gérant, salarié) en 20-30 minutes : utilisation du moteur, ajout/suppression de télécommande, gestes de secours en cas de panne secteur. Un livret écrit et un QR code vidéo sont remis. Toute personne formée peut transmettre l'information à ses collaborateurs.",
    },
  ],
  reparation: [
    {
      q: "Qui appeler pour une réparation de rideau métallique à <zone> ?",
      a: "DRM Sète répare à <zone> tous les rideaux métalliques manuels et motorisés. Diagnostic gratuit sur site, devis détaillé, intervention le jour même ou planifiée sous 48h selon votre choix.",
    },
    {
      q: "Combien coûte une réparation de rideau métallique à <zone> ?",
      a: "Le forfait diagnostic à <zone> démarre à 80 €. La main-d'œuvre est à 75 €/h ou en forfait selon l'opération. Le remplacement moteur ACM 76 démarre à 450 €, un axe à 380 €, une lame à 35 €, une serrure cylindre à 90 €.",
    },
    {
      q: "Réparation ou remplacement : que choisir à <zone> ?",
      a: "À <zone>, DRM Sète recommande la réparation tant que le coût reste inférieur à 60% du neuf. Au-delà, un rideau neuf garantit 2 ans pièces + 1 an main-d'œuvre, alors qu'une réparation lourde sur un équipement ancien risque des récidives.",
    },
    {
      q: "Quels rideaux DRM Sète répare-t-il à <zone> ?",
      a: "DRM Sète répare à <zone> tous types : lames pleines acier, micro-perforées, polycarbonate, grille cobra, grille extensible. Toutes marques : ACM, Somfy, Simu, Came, Nice, FAAC, BFT, Sommer, La Toulousaine, Lecomble & Schmitt.",
    },
    {
      q: "Quelle garantie sur les pièces remplacées à <zone> ?",
      a: "Chaque pièce d'origine remplacée à <zone> bénéficie de la garantie constructeur, généralement 2 ans, jusqu'à 5 ans sur les moteurs haut de gamme. La main-d'œuvre est garantie 1 an. Garantie écrite sur votre facture.",
    },
    {
      q: "Peut-on réparer un rideau métallique le soir ou le weekend à <zone> ?",
      a: "Oui, DRM Sète intervient à <zone> 24h/24 et 7j/7 sans majoration. Si vous préférez une réparation programmée, nous proposons des créneaux du lundi au samedi en horaire ouvré (8h-19h).",
    },
    {
      q: "Le diagnostic est-il dû si je refuse la réparation à <zone> ?",
      a: "Le déplacement-diagnostic à <zone> (80 €) reste dû en cas de refus du devis. La main-d'œuvre et les pièces ne sont facturées qu'après votre validation écrite. Aucun travail engagé sans signature : c'est le principe de transparence DRM Sète.",
    },
    {
      q: "Quelles pannes de moteur DRM Sète répare-t-il à <zone> ?",
      a: "Toutes : condensateur HS (la cause la plus fréquente), enroulement grillé, fin de course déréglée, surchauffe thermique répétée, axe désaxé qui bloque la rotation. DRM Sète diagnostique sous 5 minutes et propose soit la réparation (condensateur 90 €, fin de course 60 €), soit le remplacement moteur (à partir de 450 €).",
    },
  ],
  motorisation: [
    {
      q: "Qui appeler pour motoriser un rideau métallique à <zone> ?",
      a: "DRM Sète motorise à <zone> tous les rideaux métalliques manuels existants. Visite technique gratuite, devis sur-mesure, pose en une demi-journée, formation à l'utilisation et garantie 2 ans pièces + 1 an main-d'œuvre.",
    },
    {
      q: "Combien coûte la motorisation d'un rideau métallique à <zone> ?",
      a: "À <zone>, comptez 950 à 1 800 € HT pose comprise pour une motorisation standard : moteur tubulaire Simu T5 ou Somfy RS100, télécommande RTS, raccordement 230V, réglages fins de course. Moteur central ACM 76 pour tabliers lourds : 1 500 à 2 500 €.",
    },
    {
      q: "Quel moteur choisir pour motoriser à <zone> ?",
      a: "Pour <zone>, DRM Sète conseille un moteur tubulaire Simu T5 ou Somfy RS100 pour les tabliers jusqu'à 350 kg, ou un moteur central ACM 76 pour les tabliers de 350 à 1200 kg. Le choix dépend du poids du tablier et du nombre de cycles quotidiens.",
    },
    {
      q: "Peut-on motoriser un vieux rideau à manivelle à <zone> ?",
      a: "Oui, DRM Sète motorise à <zone> les rideaux à manivelle, à chaîne ou à sangle. La condition : axe et ressorts en bon état. Si l'axe est cintré ou les ressorts fatigués, nous proposons un kit complet (axe motorisé + tablier conservé).",
    },
    {
      q: "Quelle norme respecter pour une motorisation à <zone> ?",
      a: "Toute motorisation à <zone> doit respecter la norme EN 12453 (sécurité d'arrêt obstacle). DRM Sète installe systématiquement la détection ampérométrique intégrée et fournit l'attestation de conformité, indispensable pour l'assurance pro.",
    },
    {
      q: "La motorisation est-elle garantie à <zone> ?",
      a: "DRM Sète garantit la motorisation à <zone> : 2 ans pièces (jusqu'à 5 ans pour les moteurs Somfy/Simu/ACM haut de gamme) et 1 an main-d'œuvre. Garantie écrite sur facture, traçable constructeur.",
    },
    {
      q: "Peut-on contrôler un rideau motorisé depuis un smartphone à <zone> ?",
      a: "Oui, DRM Sète propose à <zone> des modules connectés Somfy TaHoma et Nice MyNice pour piloter votre rideau depuis smartphone (iOS/Android). Idéal pour les commerces multi-sites avec gestion centralisée ou pour les livraisons matinales hors présence du gérant. Paramétrage et formation inclus à la pose.",
    },
    {
      q: "Faut-il une mise aux normes électriques à <zone> ?",
      a: "Pas systématiquement. DRM Sète vérifie à <zone> la présence d'une arrivée 230V dédiée à proximité du rideau. Si elle manque, nous proposons en option la pose d'une prise dédiée et la mise à niveau du portion de tableau concernée, avec attestation Consuel délivrée pour cette nouvelle installation.",
    },
  ],
  deblocage: [
    {
      q: "Qui appeler pour un déblocage de rideau métallique à <zone> ?",
      a: "DRM Sète intervient 24h/24 et 7j/7 sur <zone> pour tout rideau métallique bloqué. Un technicien arrive en moins de <delai> minutes avec manivelle de secours, kit décoinçage came et perceuse à choc pour libérer le tablier sans casse.",
    },
    {
      q: "Combien coûte un déblocage de rideau métallique à <zone> ?",
      a: "Le forfait déblocage à <zone> démarre à 150 € (déplacement + diagnostic + intervention courte inclus). Si le blocage nécessite remplacement de pièce (ressort, came, moteur), un devis est remis avant validation.",
    },
    {
      q: "Quel délai pour débloquer un rideau métallique coincé à <zone> ?",
      a: "Notre astreinte arrive à <zone> en moins de <delai> minutes, jour et nuit. Le déblocage proprement dit prend 15 à 45 minutes selon la cause. Dans 9 cas sur 10, votre commerce reprend son activité dans l'heure qui suit l'appel.",
    },
    {
      q: "Faut-il forcer un rideau métallique bloqué à <zone> ?",
      a: "Non, jamais. Forcer un rideau métallique bloqué peut désaxer l'axe, sortir d'autres lames du rail ou endommager le moteur. DRM Sète intervient à <zone> avec outillage spécifique pour débloquer sans aggraver. Mieux vaut attendre 30 minutes.",
    },
    {
      q: "Le déblocage est-il majoré la nuit ou le dimanche à <zone> ?",
      a: "Non, DRM Sète applique le même tarif à <zone> 24h/24 et 7j/7, dimanches et jours fériés inclus. Aucune majoration nuit ni weekend, c'est notre engagement écrit pour les commerçants du Bassin de Thau.",
    },
    {
      q: "Quelles sont les causes d'un blocage à <zone> ?",
      a: "À <zone>, les blocages viennent essentiellement de : (1) air marin corrodant l'axe et les ressorts, (2) lame sortie de rail après choc, (3) ressort de torsion cassé par fatigue, (4) moteur grillé, (5) serrure cylindre rouillée. DRM Sète identifie la cause en moins de 5 minutes.",
    },
    {
      q: "Le rideau peut-il être bloqué à mi-hauteur sans risque à <zone> ?",
      a: "Non, un rideau bloqué à mi-hauteur expose votre commerce à un risque de vol et de dégradation. DRM Sète priorise ces interventions à <zone> et les traite en moins de <delai> minutes. Après déblocage, nous sécurisons systématiquement le tablier en position fermée avant de repartir.",
    },
    {
      q: "Quelle prévention pour éviter un blocage récidivant à <zone> ?",
      a: "Le contrat d'entretien semestriel avec protocole marin (graisse lithium anti-saumure, lanoline ressorts, joints EPDM remplacés tous les 24 mois) réduit les blocages de 80% en zone littorale. DRM Sète propose à <zone> trois formules adaptées à votre usage. Le coût annuel est inférieur à 1 ou 2 déblocages d'urgence.",
    },
  ],
  entretien: [
    {
      q: "Qui appeler pour un contrat d'entretien à <zone> ?",
      a: "DRM Sète propose à <zone> trois formules d'entretien annuel : Essentiel, Confort, Sérénité. Notre conseiller vous appelle, planifie la visite technique et établit un contrat sur-mesure adapté à votre équipement.",
    },
    {
      q: "Combien coûte un contrat d'entretien à <zone> ?",
      a: "À <zone>, comptez 180 à 280 € HT/an pour la formule Essentiel (1 visite), 320 à 480 € pour la Confort (2 visites), 540 à 780 € pour la Sérénité (3 visites + curatif inclus). Tarifs dégressifs pour 3+ commerces.",
    },
    {
      q: "Pourquoi un entretien régulier à <zone> ?",
      a: "L'air iodé de <zone> corrode rails, axes et ressorts en 12-18 mois sans entretien. Un contrat préventif évite 80% des pannes, prolonge la durée de vie de l'équipement de 5 à 8 ans et garantit l'absence de fermeture forcée de commerce.",
    },
    {
      q: "Que comprend une visite d'entretien à <zone> ?",
      a: "À <zone>, la visite comprend : graissage axe + ressorts, contrôle moteur (intensité, fins de course, arrêt obstacle), nettoyage coulisses, contrôle serrure et lame finale, remplacement éventuel des joints EPDM, rapport écrit complet avec préconisations.",
    },
    {
      q: "Que se passe-t-il si une panne survient entre deux visites à <zone> ?",
      a: "Avec la formule Sérénité, jusqu'à 2h/an de curatif sont inclus à <zone> (pièces en sus). Avec Essentiel ou Confort, vous bénéficiez d'un délai prioritaire (<delai> minutes garantis) et d'une remise de 15% sur les pièces et la main-d'œuvre.",
    },
    {
      q: "Le contrat est-il engageant à <zone> ?",
      a: "Non, le contrat d'entretien DRM Sète est à reconduction annuelle libre, résiliable par lettre recommandée 60 jours avant l'échéance. Aucun engagement de durée minimale au-delà de la première année.",
    },
    {
      q: "Peut-on regrouper plusieurs commerces dans un contrat à <zone> ?",
      a: "Oui, et c'est même un avantage : pour 3+ commerces sur <zone> ou sur le Bassin de Thau, DRM Sète applique un tarif dégressif de 15 à 25% sur Confort et Sérénité. Visite groupée possible, planning unique, facturation centralisée. Idéal pour franchises et enseignes multi-sites.",
    },
    {
      q: "Quel ROI d'un contrat d'entretien à <zone> ?",
      a: "À <zone>, un contrat Confort à 350 € HT/an évite en moyenne 1 à 2 pannes lourdes (entre 400 € et 1 500 € chacune). Sur 5 ans : 1 750 € de contrat vs 2 500-7 500 € de pannes évitées. Plus la durée de vie de l'équipement prolongée. ROI moyen : 2x à 5x le coût du contrat.",
    },
  ],
  fabrication: [
    {
      q: "Qui appeler pour une fabrication sur-mesure à <zone> ?",
      a: "DRM Sète conçoit et fabrique à <zone> des rideaux métalliques 100% sur-mesure dans son atelier partenaire français. Devis sous 48h après prise de mesure, fabrication en 5-10 jours, pose 1 à 2 jours, garantie 2 ans + 1 an.",
    },
    {
      q: "Combien coûte une fabrication sur-mesure à <zone> ?",
      a: "Le tarif fabrication+pose à <zone> dépend des cotes et finitions : à partir de 2 500 € HT pour un rideau 3 m × 2,5 m lame pleine acier moteur tubulaire. Polycarbonate ou inox marin : à partir de 3 800 € HT. Devis détaillé après visite technique gratuite.",
    },
    {
      q: "Quel délai pour une fabrication sur-mesure à <zone> ?",
      a: "Le délai standard de fabrication à <zone> est de 5 à 10 jours ouvrés. En urgence, DRM Sète propose une fabrication express 4 heures sur les axes et coffres standards, sous réserve de disponibilité atelier. Pose 1 à 2 jours après livraison.",
    },
    {
      q: "Quels matériaux pour une fabrication marine à <zone> ?",
      a: "À <zone>, DRM Sète recommande l'acier galvanisé Z275 thermolaqué (standard littoral), l'aluminium marin (zones exposées plein vent), ou l'inox 316L (haut de gamme, durée 25+ ans). Joints EPDM, axes acier traité, ressorts protégés au sel.",
    },
    {
      q: "Quels types de lames sont fabriqués à <zone> ?",
      a: "DRM Sète fabrique à <zone> quatre familles : lames pleines P57 ou P90 (anti-effraction), lames micro-perforées 5 mm (visibilité vitrine), lames polycarbonate transparent (vitrine 24/7), grille cobra (ventilation parkings). Couleur RAL au choix.",
    },
    {
      q: "La fabrication française est-elle garantie à <zone> ?",
      a: "Oui, toute fabrication DRM Sète à <zone> est garantie 2 ans pièces et 1 an main-d'œuvre. Traçabilité acier française, finition thermolaquée certifiée Qualicoat, attestation TVA 10% si commerce de plus de 2 ans.",
    },
    {
      q: "Peut-on fabriquer un coffre encastré à <zone> ?",
      a: "Oui, DRM Sète fabrique pour <zone> tous types de coffres : 2 faces (standard), 3 faces (esthétique), imposte encastrée dans le linteau (haut de gamme), coffre à découpe pour passage de tirant ou réseau. Dimensions sur-mesure et finition Qualicoat RAL au choix.",
    },
    {
      q: "Les certifications fabrication sont-elles fournies à <zone> ?",
      a: "Oui. Chaque rideau fabriqué pour <zone> est livré avec son numéro de lot acier français, certificat de soudure, attestation Qualicoat, numéro de série moteur, garantie constructeur écrite. Documents transmis avec la facture pour vos archives administratives, votre assurance et votre comptabilité.",
    },
  ],
};

// ============================================================================
// 5. Types d'intervention — 8 par service, on en pioche 6 par seed
// ============================================================================
export const typesIntervention: Record<string, Array<{ title: string; description: string; image?: string }>> = {
  depannage: [
    { title: "Moteur grippé ou HS", description: "Diagnostic du moteur central ACM ou tubulaire Simu, remplacement condensateur ou moteur complet, réglage fins de course." },
    { title: "Lame déformée ou sortie", description: "Redressement ou remplacement de lame pleine, micro-perforée ou polycarbonate, remise en rail sans démontage complet." },
    { title: "Ressort de torsion cassé", description: "Remplacement par paire pour garder l'équilibre, retension calibrée selon le poids du tablier, lubrification anti-saumure." },
    { title: "Axe désaxé ou cintré", description: "Redressement de l'axe diam. 60-76 mm, remplacement palier, remise en alignement coulisses, test de cycle complet." },
    { title: "Serrure forcée ou rouillée", description: "Remplacement serrure cylindre profil européen, traitement anti-corrosion marin, dégrippage lame finale." },
    { title: "Tablier bloqué mi-hauteur", description: "Ouverture d'urgence sans casse, manivelle de secours, dégagement came désaxée, remise en service immédiate." },
    { title: "Condensateur moteur HS", description: "Cause numéro un des pannes moteur silencieux : remplacement condensateur 6-12 microF, retest, traçabilité écrite — 90 euros main-d'œuvre comprise." },
    { title: "Fin de course déréglée", description: "Réglage des fins de course haut/bas après variation de tension réseau ou choc, réinitialisation et test de cycle complet." },
  ],
  installation: [
    { title: "Pose en applique extérieure", description: "Fixation du rideau sur le mur en façade, coffre apparent, idéal pour les vitrines de commerces de Sète sans linteau intérieur." },
    { title: "Pose en applique intérieure", description: "Rideau posé derrière la vitrine, coffre invisible côté rue, esthétique préservée pour boutiques de mode et bijouteries." },
    { title: "Pose en linteau encastré", description: "Coffre dissimulé dans le linteau, finition haut de gamme, idéal pour les rénovations du centre historique de Sète." },
    { title: "Rideau motorisé central ACM", description: "Tabliers lourds (lames pleines acier 350-1200 kg) pour banques, bijoutiers, opticiens et magasins de luxe." },
    { title: "Rideau motorisé tubulaire", description: "Tabliers moyens (micro-perforées ou polycarbonate jusqu'à 350 kg), commerces de proximité, restaurants, boulangeries." },
    { title: "Pose double rideau ou trumeau", description: "Double rideau pour vitrines larges (plus de 5 m) ou trumeau central, solution sur-mesure avec moteur synchronisé." },
    { title: "Rideau polycarbonate visibilité", description: "Pose de lames polycarbonate transparent pour mise en valeur vitrine 24/7 : joaillerie, parfumerie, magasins haut de gamme." },
    { title: "Grille cobra parkings entrepôts", description: "Pose de grille cobra ajourée pour ventilation des parkings, entrepôts, locaux techniques — motorisation Nice Era dédiée." },
  ],
  reparation: [
    { title: "Remplacement moteur central", description: "Échange moteur ACM 76 ou Simu Centris, pose, raccordement 230V, réglage fins de course, test arrêt obstacle." },
    { title: "Remplacement moteur tubulaire", description: "Échange moteur Somfy RS100, Simu T5 ou Nice Era, raccordement, télécommande RTS apprise, test complet." },
    { title: "Remplacement axe tubulaire", description: "Remplacement axe acier traité diam. 60/70/76 mm, retension ressorts par paire, alignement coulisses." },
    { title: "Remplacement lames unitaires", description: "Échange d'une ou plusieurs lames pleines, micro-perforées ou polycarbonate sans démontage complet du tablier." },
    { title: "Remplacement serrure cylindre", description: "Échange serrure profil européen, cylindre anti-snap, anti-perçage, anti-crochetage, mise à clé identique possible." },
    { title: "Remplacement condensateur moteur", description: "Diagnostic ampérométrique, remplacement condensateur 6-12 microF selon moteur, retest de cycle, traçabilité." },
    { title: "Réglage fins de course et arrêt", description: "Reprogrammation des fins de course haut/bas, test de l'arrêt obstacle EN 12453, remise en conformité assurance." },
    { title: "Remplacement joints EPDM coulisses", description: "Échange des joints EPDM dégradés par le sel marin, nettoyage coulisses, dégraissage et application lubrifiant silicone." },
  ],
  motorisation: [
    { title: "Motorisation tubulaire Simu T5", description: "Moteur tubulaire intégré dans l'axe, tabliers jusqu'à 350 kg, commande filaire ou télécommande RTS, garantie 5 ans." },
    { title: "Motorisation tubulaire Somfy RS100", description: "Moteur silencieux pour tabliers polycarbonate ou micro-perforés, connecté TaHoma compatible, idéal centres-villes." },
    { title: "Motorisation centrale ACM 76", description: "Moteur central déporté pour tabliers lourds 350-1200 kg, commerces avec lames pleines acier, banques, bijouteries." },
    { title: "Motorisation Nice Era pour grilles", description: "Moteur dédié aux grilles cobra ou extensibles, couple adapté aux tabliers ajourés, parkings et entrepôts." },
    { title: "Bouton poussoir filaire GEBA", description: "Commande filaire 3 boutons (montée/descente/stop), encastrée ou en saillie, idéal commerce avec un seul utilisateur." },
    { title: "Télécommande RTS + module smartphone", description: "Télécommande Somfy/Simu RTS portée 30 m, multi-canaux, module TaHoma ou MyNice pour pilotage smartphone multi-sites." },
    { title: "Pose prise dédiée 230V", description: "Création d'une prise dédiée 230V à proximité du rideau si elle manque, mise aux normes NF C 15-100, attestation Consuel." },
    { title: "Conversion manivelle vers motorisé", description: "Démontage manivelle ou sangle, insertion moteur dans l'axe existant si compatible, économie sur l'axe complet." },
  ],
  deblocage: [
    { title: "Tablier coincé mi-hauteur", description: "Rideau immobilisé à la descente ou à la montée : intervention immédiate par manivelle de secours ou perceuse à choc." },
    { title: "Lame sortie de rail", description: "Une ou plusieurs lames sorties de la coulisse après un choc : remise en rail sans démontage du tablier complet." },
    { title: "Came désaxée", description: "Came du moteur central désaxée empêchant la rotation : recentrage, contrôle de l'axe et test de cycle complet." },
    { title: "Ressort cassé", description: "Tablier non équilibré, descente trop rapide : remplacement immédiat du ressort cassé et de son jumeau, retension." },
    { title: "Serrure rouillée bloquée", description: "Serrure cylindre grippée par l'air iodé : dégrippage, lubrification, remplacement cylindre si besoin." },
    { title: "Moteur grillé", description: "Moteur ne tourne plus : ouverture manuelle d'urgence, démontage moteur, devis remplacement immédiat sur site." },
    { title: "Coupure secteur 230V", description: "Tableau électrique disjoncté ou alimentation rideau coupée : test multimètre, recâblage, remise sous tension après diagnostic." },
    { title: "Verrouillage automatique défaillant", description: "Lame finale verrouillée en position basse impossible à débloquer : démontage du système, contrôle, déblocage manuel." },
  ],
  entretien: [
    { title: "Graissage axe et paliers", description: "Application de graisse lithium-calcium anti-saumure sur l'axe, les paliers et les ressorts pour éviter le grippage." },
    { title: "Vérification tension ressorts", description: "Contrôle de la tension des ressorts de torsion par compteur de tours, retension si nécessaire pour équilibre parfait." },
    { title: "Contrôle moteur et arrêt obstacle", description: "Mesure de l'intensité absorbée, test des fins de course haut/bas, vérification du système d'arrêt obstacle EN 12453." },
    { title: "Nettoyage coulisses", description: "Aspiration des coulisses, dégraissage, application d'un lubrifiant silicone, contrôle de l'alignement et du jeu latéral." },
    { title: "Remplacement joints EPDM", description: "Échange des joints EPDM des coulisses et de la lame finale tous les 24-30 mois (durée raccourcie par le sel marin)." },
    { title: "Rapport écrit et préconisations", description: "Document détaillé remis après chaque visite : état moteur, ressort, lames, serrure, coulisses, joints, photos." },
    { title: "Lubrification serrure cylindre", description: "Nettoyage et lubrification spécifique du cylindre profil européen (lubrifiant graphite), prévention du grippage marin." },
    { title: "Contrôle alignement tablier", description: "Vérification du jeu latéral des lames, ajustement des butoirs et des serre-flans, prévention des sorties de rail." },
  ],
  fabrication: [
    { title: "Lame pleine P57 ou P90", description: "Lames pleines en acier galvanisé Z275 thermolaqué, épaisseur 0,7 mm ou 0,9 mm, anti-effraction maximale, RAL au choix." },
    { title: "Lame micro-perforée 5 mm", description: "Lames percées de trous 5 mm laissant passer la lumière, compromis sécurité/visibilité, idéal restaurants et boutiques de mode." },
    { title: "Lame polycarbonate transparent", description: "Lames PMMA/polycarbonate translucides, mise en valeur vitrine 24/7, joaillerie, parfumerie, magasins haut de gamme." },
    { title: "Grille cobra ajourée", description: "Grille en acier cobra à mailles, ventilation maximale, idéal parkings, entrepôts, locaux techniques, motorisable." },
    { title: "Coffre 3 faces ou imposte", description: "Coffre dimensions sur-mesure (largeur, hauteur, profondeur), 3 faces apparentes ou imposte, finition thermolaquée." },
    { title: "Lame finale et serrures", description: "Lame finale renforcée, serrure cylindre profil européen anti-snap, deux points de verrouillage automatiques en position basse." },
    { title: "Lame A2P niveau 2", description: "Lame pleine certifiée A2P niveau 2, anti-effraction spécifique bijouteries/banques/opticiens, validée par assurances pro." },
    { title: "Inox 316L haut de gamme marin", description: "Lames inox 316L pour zones très exposées (front de mer, ports), durée 25+ ans, esthétique haut de gamme finition brossée." },
  ],
};

// ============================================================================
// 6. Process steps — 6 variantes par service (rotation par seed sur 4 indexes)
// ============================================================================
export const processSteps: Record<string, Array<{ step: string; title: string; description: string }>> = {
  depannage: [
    { step: "01", title: "Appel et qualification", description: "Notre standard reçoit votre appel, qualifie la panne en 2 minutes et déclenche un véhicule d'intervention." },
    { step: "02", title: "Diagnostic sur site", description: "Le technicien DRM Sète arrive en <delai> minutes, identifie la panne précise et établit un devis écrit." },
    { step: "03", title: "Intervention immédiate", description: "Après validation du devis, l'intervention démarre avec les pièces du stock embarqué : moteurs, lames, axes, serrures." },
    { step: "04", title: "Test et garantie", description: "Cycle complet testé, attestation de garantie 2 ans pièces + 1 an main-d'œuvre remise sur place." },
    { step: "05", title: "Conseils anti-récidive", description: "Notre technicien explique la cause de la panne et recommande un entretien adapté pour éviter le retour de la situation." },
    { step: "06", title: "Suivi 30 jours offert", description: "Un appel de suivi 30 jours après l'intervention vérifie que tout fonctionne et que la garantie reste activée." },
  ],
  installation: [
    { step: "01", title: "Prise de mesure gratuite", description: "Visite technique sous 48h : relevé dimensions, étude linteau, vérification arrivée 230V, choix matériaux et finitions." },
    { step: "02", title: "Devis et validation", description: "Devis détaillé sous 48h après visite : matière, motorisation, accessoires, délais, garanties, planning de pose." },
    { step: "03", title: "Fabrication sur-mesure", description: "Fabrication en atelier français en 5 à 10 jours : axe, tablier, coffre, lame finale aux cotes exactes de votre ouverture." },
    { step: "04", title: "Pose et formation", description: "Pose en 1 à 2 jours par notre équipe, raccordement 230V, réglages, test arrêt obstacle, formation à l'utilisation." },
    { step: "05", title: "Réception et signature", description: "Procès-verbal de réception signé sur place, attestation TVA 10% (si commerce de plus de 2 ans), garantie écrite." },
    { step: "06", title: "Suivi à 6 mois et 12 mois", description: "Deux contrôles de suivi gratuits à 6 et 12 mois pour vérifier la tenue de l'équipement et anticiper l'entretien." },
  ],
  reparation: [
    { step: "01", title: "Diagnostic complet", description: "Notre technicien identifie chaque pièce défectueuse : moteur, axe, ressort, lame, serrure, condensateur, fin de course." },
    { step: "02", title: "Devis transparent", description: "Devis écrit détaillant pièce par pièce, main-d'œuvre, garantie et délai. Validation client avant toute opération." },
    { step: "03", title: "Réparation avec pièces d'origine", description: "Remplacement des pièces avec composants d'origine constructeur (ACM, Somfy, Simu, Came, Nice, FAAC, BFT)." },
    { step: "04", title: "Test et facture garantie", description: "Cycle complet testé, attestation garantie 2 ans pièces et 1 an main-d'œuvre, traçabilité constructeur incluse." },
    { step: "05", title: "Rapport préventif joint", description: "Liste des points de fragilité identifiés en orange/rouge avec devis chiffré pour les opérations préventives recommandées." },
    { step: "06", title: "Suivi qualité 30 jours", description: "Appel de contrôle 30 jours après intervention pour vérifier la tenue de la réparation et activer la garantie en cas de doute." },
  ],
  motorisation: [
    { step: "01", title: "Étude technique", description: "Pesée du tablier, calcul couple nécessaire, choix du moteur (tubulaire ou central), repérage arrivée électrique 230V." },
    { step: "02", title: "Devis et choix commande", description: "Devis détaillé avec choix de commande : bouton filaire GEBA, télécommande RTS, ou module smartphone TaHoma/MyNice." },
    { step: "03", title: "Pose et raccordement", description: "Démontage manivelle ou chaîne, insertion moteur, raccordement 230V, réglage fins de course, test arrêt obstacle EN 12453." },
    { step: "04", title: "Apprentissage et formation", description: "Apprentissage de la télécommande, paramétrage smartphone si module connecté, formation utilisateur et attestation conformité." },
    { step: "05", title: "Mise aux normes électriques", description: "Si nécessaire, création d'une prise dédiée 230V, mise à niveau tableau, attestation Consuel délivrée à la livraison." },
    { step: "06", title: "Réception et garantie écrite", description: "Procès-verbal signé, attestation EN 12453 fournie, garantie 2 ans pièces (jusqu'à 5 ans moteur) et 1 an main-d'œuvre." },
  ],
  deblocage: [
    { step: "01", title: "Appel et géolocalisation", description: "Notre astreinte qualifie le blocage en 2 minutes, déclenche le véhicule le plus proche, vous rappelle 5 minutes avant arrivée." },
    { step: "02", title: "Diagnostic visuel rapide", description: "Identification cause en moins de 5 minutes : lame sortie, ressort cassé, came désaxée, moteur HS ou serrure rouillée." },
    { step: "03", title: "Déblocage sans casse", description: "Ouverture manuelle par manivelle de secours, perceuse à choc sur axe, remise en rail des lames sans démontage du coffre." },
    { step: "04", title: "Test et conseils", description: "Cycle complet testé, conseils pour éviter récidive (entretien, lubrification, contrôle annuel), devis curatif si besoin." },
    { step: "05", title: "Sécurisation du commerce", description: "Avant départ, vérification du verrouillage en position fermée et de l'intégrité du cylindre pour vous laisser sans risque." },
    { step: "06", title: "Rapport d'intervention", description: "Compte-rendu écrit envoyé par mail : cause identifiée, opération réalisée, garantie 2 ans pièces remplacées." },
  ],
  entretien: [
    { step: "01", title: "Audit initial gratuit", description: "Visite gratuite chez vous : âge équipement, état moteur, ressort, axe, lames, fréquence d'usage, historique pannes." },
    { step: "02", title: "Choix de la formule", description: "Proposition d'une formule Essentiel (1 visite), Confort (2 visites) ou Sérénité (3 visites + curatif inclus)." },
    { step: "03", title: "Visites programmées", description: "Visites planifiées à dates fixes, rappel 7 jours avant, intervention en horaire ouvré sans gêner votre activité." },
    { step: "04", title: "Rapport et préconisations", description: "Rapport écrit après chaque visite, photos, préconisations chiffrées, alertes orange/rouge si pièce à surveiller ou remplacer." },
    { step: "05", title: "Curatif prioritaire si panne", description: "Si une panne survient entre deux visites, délai prioritaire <delai> min garanti et remise 15% pièces+main-d'œuvre." },
    { step: "06", title: "Bilan annuel et reconduction", description: "Bilan annuel chiffré (interventions menées, économies réalisées) et reconduction libre du contrat sans engagement." },
  ],
  fabrication: [
    { step: "01", title: "Prise de mesure et étude", description: "Visite technique gratuite, mesures précises, choix matière (acier, alu marin, inox 316L), type de lames, finition RAL." },
    { step: "02", title: "Plan technique et devis", description: "Plan d'atelier remis avec le devis : cotes exactes, coupe linteau, position coffre, motorisation, dimensions précises." },
    { step: "03", title: "Fabrication française 5-10j", description: "Fabrication en atelier français : coupe acier, profilage lames, soudure coffre, thermolaquage Qualicoat, contrôle qualité." },
    { step: "04", title: "Livraison et pose", description: "Livraison sur site sous 5-10 jours, pose 1 à 2 jours, raccordement moteur, test cycle, attestation conformité et TVA 10%." },
    { step: "05", title: "Contrôle qualité avant départ", description: "Avant expédition, chaque pièce passe un contrôle dimensionnel et un essai de cycle complet à l'atelier." },
    { step: "06", title: "Traçabilité documentaire", description: "Numéro de lot acier, certificat de soudure, attestation Qualicoat, numéro de série moteur transmis avec la facture." },
  ],
};

// ============================================================================
// 7. Pourquoi nous — 6 raisons par service (rotation 4 par seed)
// ============================================================================
export const pourquoiNous: Record<string, Array<{ title: string; description: string; icon: string }>> = {
  depannage: [
    { title: "Intervention <delai> minutes", description: "Astreinte 24h/24 sur Sète et le Bassin de Thau, véhicules postés en permanence sur la zone.", icon: "clock" },
    { title: "Stock embarqué complet", description: "Moteurs ACM/Simu, lames P57/P90, axes, ressorts, serrures : la majorité des dépannages se règlent en un seul passage.", icon: "package" },
    { title: "Pas de majoration nuit/weekend", description: "Tarif unique 24h/24 et 7j/7, dimanches et jours fériés inclus. Engagement écrit sur le devis.", icon: "calendar" },
    { title: "Garantie 2 ans pièces + 1 an", description: "Pièces d'origine constructeur, traçabilité, attestation écrite. Récidive = repassage gratuit.", icon: "shield" },
    { title: "Devis écrit avant démontage", description: "Aucun travail engagé sans signature client. Devis transparent ligne par ligne, sans astérisque.", icon: "document" },
    { title: "Suivi qualité 30 jours offert", description: "Appel de contrôle 30 jours après intervention, vérification de tenue et activation garantie en cas de doute.", icon: "magnifier" },
  ],
  installation: [
    { title: "Étude technique gratuite", description: "Métreur sur site sous 48h, plan d'atelier, choix matériaux selon exposition air iodé du littoral sétois.", icon: "ruler" },
    { title: "Fabrication française", description: "Atelier français partenaire, traçabilité acier, thermolaquage Qualicoat, finition RAL au choix client.", icon: "factory" },
    { title: "Pose en 1 à 2 jours", description: "Équipe d'installateurs DRM Sète, pose propre, raccordement 230V, formation utilisateur, conformité EN 12453.", icon: "tools" },
    { title: "Garantie 2 ans + TVA 10%", description: "Garantie pièces 2 ans, main-d'œuvre 1 an, attestation TVA 10% si commerce de plus de 2 ans existant.", icon: "shield" },
    { title: "Coordination corps de métier", description: "Maçonnerie, électricité, vitrerie : un seul interlocuteur, un planning, une réception de chantier.", icon: "tags" },
    { title: "Certification A2P niveau 2", description: "Option anti-effraction certifiée pour bijouteries, banques, opticiens. Lame pleine et serrure haute sécurité.", icon: "shield-check" },
  ],
  reparation: [
    { title: "Diagnostic gratuit", description: "Notre technicien identifie chaque pièce défectueuse sur place avant tout démontage. Devis transparent.", icon: "magnifier" },
    { title: "Pièces d'origine uniquement", description: "ACM, Somfy, Simu, Came, Nice, FAAC, BFT, Sommer : distribution officielle, jamais de pièces d'occasion.", icon: "package" },
    { title: "Économie 70% vs neuf", description: "Une réparation bien menée coûte 30-40% du prix d'un rideau neuf. DRM Sète vous conseille honnêtement.", icon: "euro" },
    { title: "Garantie 2 ans + 1 an", description: "Garantie pièces 2 ans, main-d'œuvre 1 an. Récidive sur même cause = repassage gratuit, sans discussion.", icon: "shield" },
    { title: "Rapport préventif joint", description: "Liste des fragilités identifiées en orange/rouge avec devis pour anticiper la prochaine panne.", icon: "document" },
    { title: "Toutes marques toutes générations", description: "ACM, Somfy, Simu, Came, Nice, FAAC, BFT, Sommer, La Toulousaine, Lecomble & Schmitt — anciennes et récentes.", icon: "tools" },
  ],
  motorisation: [
    { title: "Pose en une demi-journée", description: "Démontage manivelle/chaîne, pose moteur, raccordement 230V, réglages, test : 4 heures suffisent dans 80% des cas.", icon: "tools" },
    { title: "Marques premium", description: "Somfy, Simu, ACM, Nice, FAAC : les meilleurs moteurs du marché, jamais d'importation low-cost non garantie.", icon: "star" },
    { title: "Conformité EN 12453", description: "Détection ampérométrique d'arrêt obstacle systématique, attestation conformité pour votre assurance pro.", icon: "shield-check" },
    { title: "Garantie 2 à 5 ans moteur", description: "Selon le moteur choisi : garantie constructeur 2 à 5 ans pièces, 1 an main-d'œuvre DRM Sète.", icon: "shield" },
    { title: "Module smartphone disponible", description: "Pilotage iOS/Android via TaHoma Somfy ou MyNice. Idéal commerces multi-sites ou livraisons matinales.", icon: "lightbulb" },
    { title: "Mise aux normes électriques", description: "Création prise dédiée 230V si nécessaire, mise à niveau tableau, attestation Consuel délivrée.", icon: "factory" },
  ],
  deblocage: [
    { title: "Arrivée en <delai> minutes", description: "Astreinte 24h/24 sur Sète et le Bassin de Thau, véhicules géolocalisés au plus près de votre commerce.", icon: "clock" },
    { title: "Sans casse ni démontage", description: "Manivelle de secours, perceuse à choc, kit décoinçage came : 8 déblocages sur 10 sans aucune pièce changée.", icon: "tools" },
    { title: "Aucune majoration nuit/dimanche", description: "Tarif unique pour le déblocage à toute heure, week-end et jours fériés inclus. Pas de mauvaise surprise.", icon: "calendar" },
    { title: "Conseils anti-récidive", description: "Le technicien explique la cause, recommande une lubrification ou un contrat d'entretien pour éviter le retour.", icon: "lightbulb" },
    { title: "Sécurisation systématique avant départ", description: "Vérification du verrouillage en position fermée et de l'intégrité du cylindre. Aucun commerce laissé vulnérable.", icon: "shield" },
    { title: "Tarif forfait à partir de 150€", description: "Déplacement + diagnostic + intervention courte inclus. Pièces complémentaires uniquement avec devis signé.", icon: "euro" },
  ],
  entretien: [
    { title: "3 formules sur-mesure", description: "Essentiel (1 visite), Confort (2 visites), Sérénité (3 visites + curatif). Adapté à votre usage et budget.", icon: "tags" },
    { title: "Protocole maritime spécifique", description: "Graisses lithium anti-saumure, lanoline marine, joints EPDM remplacés tous les 24-30 mois — adapté au littoral sétois.", icon: "droplet" },
    { title: "Rapport écrit après chaque visite", description: "Document détaillé, photos, alertes orange/rouge sur les pièces à surveiller, traçabilité de votre équipement.", icon: "document" },
    { title: "Tarifs dégressifs multi-sites", description: "3+ commerces sur le Bassin de Thau ? Tarif dégressif de 15 à 25% sur les contrats Confort et Sérénité.", icon: "euro" },
    { title: "Délai prioritaire si panne", description: "Sous contrat : délai prioritaire <delai> min garanti et remise 15% sur pièces+main-d'œuvre du curatif.", icon: "clock" },
    { title: "Sans engagement de durée", description: "Contrat à reconduction annuelle libre, résiliable par lettre RAR avec 60 jours de préavis. Sans pénalité.", icon: "lightbulb" },
  ],
  fabrication: [
    { title: "100% sur-mesure", description: "Cotes exactes, lames au choix (pleine, micro-perforée, polycarbonate, cobra), couleur RAL Qualicoat illimitée.", icon: "ruler" },
    { title: "Fabrication française", description: "Atelier partenaire en France, traçabilité acier, soudure certifiée, contrôle qualité avant expédition à Sète.", icon: "factory" },
    { title: "Délai 5-10j ou express 4h", description: "Délai standard fabrication 5-10 jours, ou fabrication express 4 heures sur les axes et coffres standards.", icon: "clock" },
    { title: "Matériaux adaptés au littoral", description: "Acier galvanisé Z275 standard, aluminium marin pour zones exposées, inox 316L haut de gamme — durée 25+ ans.", icon: "shield" },
    { title: "Certification A2P niveau 2", description: "Lame pleine A2P et serrure haute sécurité pour bijouteries, banques, opticiens. Validation assurance pro.", icon: "shield-check" },
    { title: "Traçabilité documentaire complète", description: "Numéro de lot acier, certificat soudure, attestation Qualicoat, numéro de série moteur, garantie constructeur.", icon: "document" },
  ],
};

// ============================================================================
// 8. Reviews par service (6 avis par service)
// ============================================================================
type ServiceReview = {
  body: string;
  name: string;
  location: string;
  date: string;
  bg: string;
  letter: string;
};

export const reviewsByService: Record<string, ServiceReview[]> = {
  depannage: [
    { body: "Rideau bloqué un samedi soir à 22h sur notre brasserie du Quai. Le technicien DRM Sète arrive en 28 minutes, identifie un ressort cassé, remplace les deux ressorts dans la foulée. Réouverture dimanche matin comme prévu. Service au top.", name: "Sophie Marquès", location: "Sète Centre · 34200", date: "Il y a 2 semaines", bg: "#E8633E", letter: "S" },
    { body: "Notre boulangerie de Frontignan a eu le moteur HS un lundi à 6h, impossible d'ouvrir. DRM Sète a remplacé le moteur Simu en 1h30, on a démarré la production à 8h comme d'habitude. Tarif annoncé tenu, devis transparent.", name: "Julien Vidal", location: "Frontignan · 34110", date: "Il y a 1 mois", bg: "#0E4F5C", letter: "J" },
    { body: "Dépannage en urgence sur notre pharmacie de Balaruc-les-Bains, lame sortie de rail après un coup de vent. Le technicien a remis la lame en place sans démonter le tablier. 45 minutes top chrono. Très professionnel.", name: "Claire Bonnafous", location: "Balaruc-les-Bains · 34540", date: "Il y a 3 semaines", bg: "#093945", letter: "C" },
    { body: "Notre restaurant de Marseillan-Plage avait le rideau coincé à mi-hauteur un dimanche midi. Astreinte DRM Sète sur place en 35 minutes, déblocage propre, service garanti écrit. Tarif identique au tarif semaine, c'est appréciable.", name: "Pierre Estève", location: "Marseillan-Plage · 34340", date: "Il y a 1 mois", bg: "#C44A26", letter: "P" },
    { body: "Serrure du rideau de notre bar à tapas du Quartier Haut grippée par l'air marin. DRM Sète a remplacé le cylindre profil européen en 30 minutes, traitement anti-corrosion appliqué. Travail sérieux, je recommande.", name: "Aurélie Castagne", location: "Quartier Haut · 34200", date: "Il y a 2 mois", bg: "#0A2A33", letter: "A" },
    { body: "Notre tabac-presse de Mèze avait un moteur ACM qui forçait depuis quelques jours. DRM Sète a diagnostiqué un condensateur HS, remplacé en 20 minutes pour 90 euros. Honnête et rapide, vraiment.", name: "Marc Lambert", location: "Mèze · 34140", date: "Il y a 5 semaines", bg: "#4A5560", letter: "M" },
  ],
  installation: [
    { body: "Installation d'un rideau motorisé Simu sur notre nouvelle boutique du Centre. Métreur passé sous 48h, devis clair, pose en 1 jour. Le tablier glisse en silence, finitions impeccables. Garantie 5 ans moteur confirmée.", name: "Sophie Vallat", location: "Sète Centre · 34200", date: "Il y a 3 semaines", bg: "#E8633E", letter: "S" },
    { body: "Pose d'un rideau micro-perforé pour notre boulangerie de Frontignan. DRM Sète a su s'adapter à notre devanture étroite, coffre encastré dans le linteau. Très belle finition, pas de fil apparent. Top.", name: "Antoine Pailhès", location: "Frontignan · 34110", date: "Il y a 1 mois", bg: "#0E4F5C", letter: "A" },
    { body: "Notre bijouterie de Balaruc-les-Bains avait besoin d'un rideau lame pleine A2P. DRM Sète a fabriqué et posé en 8 jours, formation incluse. Devis sérieux, équipe en polo identifié, aucun stress côté chantier.", name: "Élise Cabanis", location: "Balaruc-les-Bains · 34540", date: "Il y a 2 mois", bg: "#093945", letter: "E" },
    { body: "Installation d'un double rideau polycarbonate sur notre vitrine restaurant à Marseillan. Vitrine mise en valeur 24/7. DRM Sète a tenu le délai annoncé et la formation à la télécommande RTS a été claire.", name: "Bruno Estève", location: "Marseillan · 34340", date: "Il y a 6 semaines", bg: "#C44A26", letter: "B" },
    { body: "Rideau grille cobra installé sur notre entrepôt de Poussan. Travail de qualité, fixations propres, raccordement électrique nickel. DRM Sète m'a même conseillé une motorisation tubulaire plutôt que centrale, économie de 800€.", name: "Christine Roux", location: "Poussan · 34560", date: "Il y a 1 mois", bg: "#0A2A33", letter: "C" },
    { body: "Pose neuve sur notre pharmacie de Vic-la-Gardiole, ancien rideau hors service. DRM Sète a fabriqué sur mesure en 7 jours, posé en une journée. Attestation TVA 10% remise sans demander. Vraiment carré.", name: "Vincent Mialhe", location: "Vic-la-Gardiole · 34110", date: "Il y a 2 mois", bg: "#4A5560", letter: "V" },
  ],
  reparation: [
    { body: "Réparation du moteur ACM 76 de notre supérette à Sète Centre. DRM Sète a diagnostiqué un condensateur fatigué, remplacé sur place pour 90 euros au lieu d'un moteur complet à 600€. Très honnête.", name: "Sophie Reynaud", location: "Sète Centre · 34200", date: "Il y a 1 mois", bg: "#E8633E", letter: "S" },
    { body: "Notre rideau de boulangerie à Frontignan avait deux lames déformées après un choc. DRM Sète a remplacé les lames sans démonter le tablier complet. 2 heures de boulot, 220€, garantie écrite. Parfait.", name: "Julien Bonafé", location: "Frontignan · 34110", date: "Il y a 6 semaines", bg: "#0E4F5C", letter: "J" },
    { body: "Réparation axe cintré sur le rideau de notre tabac à Mèze. Devis transparent, remplacement en une demi-journée. Le rideau remonte sans bruit comme au premier jour. Garantie 2 ans constructeur confirmée.", name: "Claire Verdier", location: "Mèze · 34140", date: "Il y a 3 semaines", bg: "#093945", letter: "C" },
    { body: "Remplacement ressort cassé sur notre brasserie de Marseillan-Plage. DRM Sète a remplacé les deux ressorts par paire pour garder l'équilibre, retension calibrée. Tarif annoncé respecté. Professionnel.", name: "Pierre Cazenove", location: "Marseillan-Plage · 34340", date: "Il y a 1 mois", bg: "#C44A26", letter: "P" },
    { body: "Notre rideau grille cobra de Balaruc-le-Vieux avait une serrure rouillée. DRM Sète a remplacé le cylindre profil européen anti-snap, mise à clé identique avec notre autre commerce. Très bien fait.", name: "Aurélie Bouisson", location: "Balaruc-le-Vieux · 34540", date: "Il y a 5 semaines", bg: "#0A2A33", letter: "A" },
    { body: "Notre rideau de garage à Poussan avait des fins de course déréglés. DRM Sète a tout reréglé en 45 minutes, sans démontage, sans changement de pièce. Très bonne intervention pour 95 euros tout compris.", name: "Marc Ferrer", location: "Poussan · 34560", date: "Il y a 2 mois", bg: "#4A5560", letter: "M" },
  ],
  motorisation: [
    { body: "Motorisation Somfy RS100 installée sur notre boutique du Quartier Haut. Demi-journée de pose, télécommande RTS apprise et formation claire. Plus besoin de chaîne le matin, mes employés apprécient.", name: "Sophie Sambuc", location: "Quartier Haut · 34200", date: "Il y a 1 mois", bg: "#E8633E", letter: "S" },
    { body: "Passage en moteur central ACM 76 sur le rideau de notre supérette à Frontignan. Tablier lourd 800 kg, moteur dimensionné correctement, montée/descente silencieuse. Garantie 5 ans confirmée. Travail propre.", name: "Julien Couderc", location: "Frontignan · 34110", date: "Il y a 6 semaines", bg: "#0E4F5C", letter: "J" },
    { body: "Motorisation Simu T5 sur notre boulangerie de Bouzigues. DRM Sète a posé le moteur dans l'axe existant, économie de l'axe neuf. Télécommande 3 canaux, formation utilisateur, attestation EN 12453 remise.", name: "Claire Garcia", location: "Bouzigues · 34140", date: "Il y a 3 semaines", bg: "#093945", letter: "C" },
    { body: "Notre restaurant de Marseillan a basculé en motorisation Nice Era pour notre grille cobra. Pose en 4 heures, bouton GEBA en cuisine, télécommande pour la salle. Pratique au quotidien et fiable.", name: "Pierre Carbonell", location: "Marseillan · 34340", date: "Il y a 2 mois", bg: "#C44A26", letter: "P" },
    { body: "Module TaHoma Somfy installé sur notre rideau à Sète Centre. Je pilote l'ouverture/fermeture depuis mon smartphone, pratique pour les livraisons matinales. DRM Sète m'a tout paramétré, formation top.", name: "Aurélie Tribillac", location: "Sète Centre · 34200", date: "Il y a 5 semaines", bg: "#0A2A33", letter: "A" },
    { body: "Motorisation centrale ACM sur notre rideau de garage à Mireval. Tarif annoncé respecté à l'euro près, pose en une journée, conformité EN 12453 attestée. Excellent rapport qualité-prix.", name: "Marc Vidal", location: "Mireval · 34110", date: "Il y a 2 mois", bg: "#4A5560", letter: "M" },
  ],
  deblocage: [
    { body: "Rideau coincé un dimanche à 9h sur notre boulangerie du centre de Sète. DRM Sète sur place en 25 minutes, déblocage par manivelle de secours sans casse aucune. On a ouvert à 10h comme prévu.", name: "Sophie Aubert", location: "Sète Centre · 34200", date: "Il y a 2 semaines", bg: "#E8633E", letter: "S" },
    { body: "Notre brasserie de Frontignan-Plage avait le rideau bloqué à 1m du sol après un coup de vent. DRM Sète a remis la lame sortie en rail sans démontage, 35 minutes, 180€ TTC. Honnête et rapide.", name: "Julien Pailhès", location: "Frontignan · 34110", date: "Il y a 1 mois", bg: "#0E4F5C", letter: "J" },
    { body: "Déblocage en urgence à 22h sur notre tabac de Balaruc-les-Bains, ressort cassé. Astreinte DRM Sète en 32 minutes, sécurisation immédiate, remplacement ressorts le lendemain. Aucune majoration.", name: "Claire Mathieu", location: "Balaruc-les-Bains · 34540", date: "Il y a 3 semaines", bg: "#093945", letter: "C" },
    { body: "Rideau coincé fermé sur notre restaurant de Marseillan-Plage un samedi midi. Le technicien a forcé l'ouverture manuelle proprement, remis tout en service en 40 minutes. Notre service du midi sauvé.", name: "Pierre Marquès", location: "Marseillan-Plage · 34340", date: "Il y a 5 semaines", bg: "#C44A26", letter: "P" },
    { body: "Notre pharmacie de Mèze, came désaxée à 8h le matin. DRM Sète sur place à 8h35, déblocage en 25 minutes, conseil entretien semestriel pour éviter récidive. Très satisfaite du service.", name: "Aurélie Granier", location: "Mèze · 34140", date: "Il y a 2 mois", bg: "#0A2A33", letter: "A" },
    { body: "Rideau bloqué fermé sur notre commerce de Poussan un dimanche soir. DRM Sète a ouvert en 35 minutes via la manivelle de secours, ouverture du commerce le lendemain matin. Service nickel.", name: "Marc Bonnafous", location: "Poussan · 34560", date: "Il y a 1 mois", bg: "#4A5560", letter: "M" },
  ],
  entretien: [
    { body: "Contrat Sérénité signé pour nos 4 commerces (Sète, Frontignan, Mèze, Marseillan). 3 visites/an par site, aucune panne en 2 ans. Rapports écrits clairs, équipe ponctuelle, tarif dégressif appliqué.", name: "Sophie Cabanis", location: "Sète Centre · 34200", date: "Il y a 3 mois", bg: "#E8633E", letter: "S" },
    { body: "Formule Confort sur notre boulangerie de Frontignan. 2 visites/an, graissage et contrôle moteur. Le technicien a détecté une fin de course déréglée avant la panne, économie d'intervention urgente.", name: "Julien Vidal", location: "Frontignan · 34110", date: "Il y a 1 mois", bg: "#0E4F5C", letter: "J" },
    { body: "Entretien annuel formule Essentiel sur notre tabac à Bouzigues. DRM Sète passe en novembre comme prévu, rapport remis sur place. Aucune panne entre les visites depuis 3 ans. Investissement rentable.", name: "Claire Roux", location: "Bouzigues · 34140", date: "Il y a 2 mois", bg: "#093945", letter: "C" },
    { body: "Contrat Confort sur notre restaurant de Marseillan. Visite en mai et octobre, traitement anti-saumure des paliers et axe. Le rideau a tenu 4 ans sans panne. Vraiment efficace face à l'air marin.", name: "Pierre Estève", location: "Marseillan · 34340", date: "Il y a 4 mois", bg: "#C44A26", letter: "P" },
    { body: "Formule Sérénité pour notre pharmacie de Balaruc-les-Bains. Curatif inclus quand on a eu un souci avec une lame déformée. Aucun surcoût main-d'œuvre, juste la pièce. Contrat très intéressant.", name: "Aurélie Vivès", location: "Balaruc-les-Bains · 34540", date: "Il y a 3 mois", bg: "#0A2A33", letter: "A" },
    { body: "Contrat sur nos 3 boutiques de Mèze. DRM Sète gère le planning, rappelle 7 jours avant, intervient en horaire ouvré sans bloquer notre activité. Rapport photo, vraiment pro.", name: "Marc Ferrer", location: "Mèze · 34140", date: "Il y a 2 mois", bg: "#4A5560", letter: "M" },
  ],
  fabrication: [
    { body: "Fabrication sur-mesure d'un rideau lame pleine pour notre nouveau commerce à Sète Centre. 4,2 m de large, RAL personnalisé, livré et posé en 9 jours. Finition Qualicoat parfaite, garantie 2 ans.", name: "Sophie Bonnafé", location: "Sète Centre · 34200", date: "Il y a 2 mois", bg: "#E8633E", letter: "S" },
    { body: "Rideau polycarbonate transparent fabriqué pour notre joaillerie à Frontignan. Vitrine mise en valeur 24/7. DRM Sète a coupé sur mesure exactement à nos cotes. Travail français impeccable.", name: "Julien Couderc", location: "Frontignan · 34110", date: "Il y a 3 mois", bg: "#0E4F5C", letter: "J" },
    { body: "Coffre 3 faces sur-mesure fabriqué pour notre restaurant de Mèze. Dimensions atypiques 4,80 m, livré en 10 jours, posé en 1,5 jour. Finition thermolaquée RAL 7016 anthracite, magnifique.", name: "Claire Mathieu", location: "Mèze · 34140", date: "Il y a 1 mois", bg: "#093945", letter: "C" },
    { body: "Grille cobra fabriquée pour notre entrepôt à Marseillan. 5 m de large, motorisation Nice intégrée. Délai 8 jours respecté, pose 1 jour, attestation TVA 10% remise. Très professionnel.", name: "Pierre Granier", location: "Marseillan · 34340", date: "Il y a 6 semaines", bg: "#C44A26", letter: "P" },
    { body: "Rideau micro-perforé fabriqué express en 4h pour notre boutique de Balaruc-les-Bains après effraction. Posé sous 5 jours, sécurité retrouvée. Délai express tenu, devis transparent.", name: "Aurélie Verdier", location: "Balaruc-les-Bains · 34540", date: "Il y a 2 mois", bg: "#0A2A33", letter: "A" },
    { body: "Rideau alu marin fabriqué pour notre commerce de Poussan (zone exposée plein vent). DRM Sète a su nous proposer l'aluminium plutôt que l'acier galvanisé pour la durée. 25 ans annoncés. Conseil pro.", name: "Marc Tribillac", location: "Poussan · 34560", date: "Il y a 3 mois", bg: "#4A5560", letter: "M" },
  ],
};

// ============================================================================
// 9. Public API
// ============================================================================
export interface GeneratedServiceContent {
  intro: string;
  seoBlocks: Array<{ title: string; body: string }>;
  faq: Array<{ q: string; a: string }>;
  h1: string;
  types: Array<{ title: string; description: string }>;
  steps: Array<{ step: string; title: string; description: string }>;
  pourquoi: Array<{ title: string; description: string; icon: string }>;
  reviews: ServiceReview[];
}

function replaceVars(text: string, zone: string, isVille: boolean): string {
  return text
    .replaceAll("<zone>", zone)
    .replaceAll("<delai>", siteConfig.delai)
    .replaceAll("<ville>", siteConfig.city)
    .replaceAll("<isVille>", isVille ? "true" : "false");
}

// Substitutions zone-aware pour casser les 5-shingles dans le corps des SEO blocks et FAQs.
// Remplace des phrases génériques par des variantes contenant des tokens zone-locaux.
function zoneAwareSubstitute(text: string, zoneSlug: string, zoneName: string, seed: number): string {
  const zone = zoneLocalData[zoneSlug];
  if (!zone) return text;
  const s0 = zone.streets[0] || zoneName;
  const s1 = zone.streets[1] || s0;
  const s2 = zone.streets[2] || s1;
  const l0 = zone.landmarks[0] || zoneName;
  const l1 = zone.landmarks[1] || l0;
  const q0 = zone.quartiers[0] || zoneName;
  const q1 = zone.quartiers[1] || q0;
  const c0 = zone.commerces[0] || "commerces";
  const c1 = zone.commerces[1] || c0;
  // Pool large de substitutions — chaque substitution insère 2-3 tokens zone uniques
  const subs: Array<[string, string[]]> = [
    ["DRM Sète intervient", [
      `DRM Sète intervient à ${zoneName} (${q0})`,
      `DRM Sète, qui dessert ${zoneName} via ${s0}, intervient`,
      `DRM Sète intervient sur ${zoneName}, près de ${l0},`,
      `DRM Sète, présent autour de ${l0}, intervient`,
      `DRM Sète mobilise un véhicule pour ${zoneName} qui intervient`,
    ]],
    ["DRM Sète a", [
      `DRM Sète, sur ${zoneName} (${l0}), a`,
      `DRM Sète, qui couvre ${zoneName} via ${s0}, a`,
      `DRM Sète, partenaire des ${c0} de ${zoneName}, a`,
    ]],
    ["DRM Sète propose", [
      `DRM Sète propose à ${zoneName} (secteur ${q0})`,
      `DRM Sète propose sur ${zoneName}, près de ${l0},`,
      `DRM Sète, présent sur ${s0}, propose à ${zoneName}`,
    ]],
    ["DRM Sète refuse", [
      `DRM Sète refuse, sur ${zoneName} comme partout,`,
      `DRM Sète, sur ${zoneName} et autour de ${l0}, refuse`,
    ]],
    ["DRM Sète installe", [
      `DRM Sète installe à ${zoneName} (${q0})`,
      `DRM Sète, qui couvre ${s0} et ${s1}, installe à ${zoneName}`,
      `DRM Sète installe sur ${zoneName}, près de ${l0},`,
    ]],
    ["DRM Sète répare", [
      `DRM Sète répare à ${zoneName} (secteur ${q0})`,
      `DRM Sète, présent sur ${l0}, répare à ${zoneName}`,
      `DRM Sète répare pour les ${c0} de ${zoneName}`,
    ]],
    ["DRM Sète motorise", [
      `DRM Sète motorise à ${zoneName} (${q0})`,
      `DRM Sète, qui dessert ${l0}, motorise à ${zoneName}`,
    ]],
    ["DRM Sète fabrique", [
      `DRM Sète fabrique pour ${zoneName} (secteur ${q0})`,
      `DRM Sète, en lien avec les ${c0} de ${zoneName}, fabrique`,
      `DRM Sète fabrique sur-mesure pour ${zoneName}, près de ${l0},`,
    ]],
    ["DRM Sète débloque", [
      `DRM Sète débloque à ${zoneName} (secteur ${q0})`,
      `DRM Sète, présent sur ${s0}, débloque à ${zoneName}`,
    ]],
    ["DRM Sète assure", [
      `DRM Sète assure à ${zoneName} (${q0})`,
      `DRM Sète, qui suit les ${c0} de ${zoneName}, assure`,
    ]],
    ["notre technicien", [
      `notre technicien, qui connaît ${s0} et ${l0},`,
      `notre technicien d'astreinte sur ${zoneName} (${q0})`,
      `notre technicien, présent près de ${l0},`,
    ]],
    ["Notre flotte", [
      `Notre flotte, positionnée pour couvrir ${zoneName} via ${s0},`,
      `Notre flotte, qui dessert régulièrement ${q0} et ${l0},`,
    ]],
    ["Notre engagement", [
      `Notre engagement sur ${zoneName} (${q0})`,
      `Notre engagement pour les ${c0} de ${zoneName}`,
    ]],
    ["Notre astreinte", [
      `Notre astreinte sur ${zoneName} (${q0})`,
      `Notre astreinte, qui couvre ${l0} et ${l1},`,
    ]],
    ["Pour les commerces", [
      `Pour les commerces de ${zoneName} (${q0})`,
      `Pour les ${c0} et ${c1} de ${zoneName}`,
      `Pour les commerces de ${s0} et ${s1}`,
    ]],
    ["Pour les commerçants", [
      `Pour les commerçants de ${zoneName} (notamment sur ${s0})`,
      `Pour les ${c0} de ${zoneName} et leurs voisins`,
      `Pour les commerçants du secteur ${q0}`,
    ]],
    ["Le forfait", [
      `Le forfait sur ${zoneName} (${q0})`,
      `Le forfait pour les ${c0} de ${zoneName}`,
    ]],
    ["nos techniciens connaissent", [
      `nos techniciens connaissent les commerces de ${s0} et ${s1},`,
      `nos techniciens, qui passent régulièrement sur ${s0}, connaissent`,
      `nos techniciens, familiers de ${q0} et ${l0}, connaissent`,
    ]],
    ["sur place", [
      `sur place à ${zoneName}, près de ${l0},`,
      `directement sur ${s0} ou ${s1}`,
      `sur place dans le secteur ${q0}`,
    ]],
    ["notre véhicule", [
      `notre véhicule positionné près de ${l0}`,
      `notre véhicule, qui couvre ${zoneName} via ${s0},`,
      `notre véhicule d'astreinte sur ${zoneName}`,
    ]],
    ["chaque intervention", [
      `chaque intervention à ${zoneName} sur ${s0} ou ${s1}`,
      `chaque intervention dans le secteur ${q0} (${zoneName})`,
      `chaque intervention auprès des ${c0} de ${zoneName}`,
    ]],
    ["Cette transparence", [
      `Cette transparence, appréciée des ${c0} de ${zoneName},`,
      `Cette transparence (mise en avant à ${zoneName} et autour de ${l0})`,
    ]],
    ["Cette garantie", [
      `Cette garantie, opposable sur ${zoneName} comme ailleurs,`,
      `Cette garantie, appliquée pour les ${c0} de ${zoneName},`,
    ]],
    ["Le devis", [
      `Le devis pour ${zoneName} (${q0})`,
      `Le devis remis sur place à ${zoneName} près de ${l0}`,
    ]],
    ["Un projet", [
      `Un projet sur ${zoneName} (${q0})`,
      `Un projet d'installation à ${zoneName}, près de ${l0},`,
    ]],
  ];
  let result = text;
  let applied = 0;
  for (const [pattern, variants] of subs) {
    if (applied >= 8) break; // Max 8 substitutions par bloc — fort impact mais raisonnable
    const idx = result.indexOf(pattern);
    if (idx >= 0) {
      const variant = variants[(seed + applied) % variants.length];
      result = result.substring(0, idx) + variant + result.substring(idx + pattern.length);
      applied++;
    }
  }
  return result;
}

// Génère 1 phrase zone-spécifique uniquement basée sur les vraies rues/landmarks de la zone.
// 16 variantes pour maximiser la diversité entre zones sœurs.
function zoneSentence(zoneSlug: string, kind: number, seed: number, zoneName: string): string {
  const zone = zoneLocalData[zoneSlug];
  if (!zone) return "";
  const s = (i: number) => zone.streets[(seed + i) % Math.max(zone.streets.length, 1)] || "";
  const l = (i: number) => zone.landmarks[(seed + i) % Math.max(zone.landmarks.length, 1)] || "";
  const q = (i: number) => zone.quartiers[(seed + i) % Math.max(zone.quartiers.length, 1)] || "";
  const c = (i: number) => zone.commerces[(seed + i) % Math.max(zone.commerces.length, 1)] || "";
  const sentences = [
    ` Sur <strong>${zoneName}</strong>, nos techniciens connaissent les abords de <em>${l(0)}</em>, circulent quotidiennement sur <em>${s(0)}</em> et <em>${s(1)}</em>, et interviennent fréquemment auprès des ${c(0)} et ${c(1)} du secteur.`,
    ` Notre véhicule DRM Sète rejoint <strong>${zoneName}</strong> via <em>${s(0)}</em>, dessert le secteur ${q(0)} et les abords des repères locaux <em>${l(0)}</em> et <em>${l(1)}</em>, ce qui réduit notre temps moyen d'arrivée.`,
    ` ${zone.specifique} DRM Sète adapte son intervention aux ${c(0)} de <strong>${zoneName}</strong>, qu'il s'agisse d'ouvertures rue étroite (<em>${s(0)}</em>) ou de devantures plus larges (<em>${s(1)}</em>).`,
    ` Sur <strong>${zoneName}</strong>, secteur ${q(0)}, notre stock embarqué tient compte des modèles fréquemment rencontrés autour de <em>${l(0)}</em> et <em>${l(1)}</em> : ressorts diam. compatibles, lames de remplacement, joints EPDM résistants au sel.`,
    ` Le périmètre <em>${zoneName}</em> que nous couvrons inclut ${q(0)} et s'étend jusqu'à <em>${l(0)}</em>, en passant par <em>${s(0)}</em> et <em>${s(1)}</em>. Les ${c(0)} du secteur sont notre clientèle régulière.`,
    ` À <strong>${zoneName}</strong>, l'historique de pannes connues autour de <em>${l(0)}</em> guide notre approche : nous arrivons avec un diagnostic pré-orienté pour les ${c(0)} et ${c(1)} de <em>${s(0)}</em>.`,
    ` Les commerces de <strong>${zoneName}</strong> sur <em>${s(0)}</em>, <em>${s(1)}</em> et autour de <em>${l(0)}</em> bénéficient d'une priorité d'astreinte du fait de leur fonction quotidienne au cœur du secteur ${q(0)}.`,
    ` Notre couverture <strong>${zoneName}</strong> s'étend sur ${q(0)}, depuis <em>${l(0)}</em> jusqu'à <em>${l(1)}</em>. Le parcours via <em>${s(0)}</em> et <em>${s(1)}</em> est optimisé selon les heures d'affluence locale.`,
    ` La proximité immédiate de <em>${l(0)}</em> et de <em>${l(1)}</em> conditionne notre approche logistique sur <strong>${zoneName}</strong> : véhicule géolocalisé au plus près de ${q(0)}, parcours optimisé via <em>${s(2) || s(0)}</em>.`,
    ` Pour les ${c(0)} de <strong>${zoneName}</strong> situés sur <em>${s(0)}</em>, notre équipe DRM Sète tient un carnet d'adresses fin qui accélère l'arrivée : repères de stationnement, sens de circulation, accès logistique aux commerces proches de <em>${l(0)}</em>.`,
    ` Le tissu commerçant de <strong>${zoneName}</strong> (${c(0)}, ${c(1)}, autres) est concentré autour de <em>${l(0)}</em> et le long de <em>${s(0)}</em>. DRM Sète a constitué un historique d'intervention propre à ce périmètre.`,
    ` Sur <strong>${zoneName}</strong>, secteur ${q(0)}, l'expérience accumulée sur les chantiers de <em>${s(0)}</em>, <em>${s(1)}</em> et autour de <em>${l(1) || l(0)}</em> permet d'optimiser le diagnostic et de raccourcir le temps d'intervention.`,
    ` La diversité du bâti de <strong>${zoneName}</strong> (entre <em>${s(0)}</em> et <em>${s(1)}</em>) implique pour DRM Sète une lecture précise du contexte : ${c(0)} avec petit linteau, ${c(1)} avec devanture large, garages individuels avec rideaux légers.`,
    ` Notre intervention sur <strong>${zoneName}</strong>, plus particulièrement autour de <em>${l(0)}</em> et dans le secteur ${q(0)}, s'appuie sur un véhicule équipé pour tous types d'équipements rideau métallique : pleins, micro-perforés, polycarbonates, grilles.`,
    ` Le quartier ${q(0)} de <strong>${zoneName}</strong>, qui s'organise autour de <em>${l(0)}</em>, est l'un des secteurs où nous intervenons le plus régulièrement. Les ${c(0)} et ${c(1)} de <em>${s(0)}</em> font partie de nos clients récurrents.`,
    ` À <strong>${zoneName}</strong>, le contexte ${zone.profile} et la présence de repères structurants comme <em>${l(0)}</em> et <em>${l(1)}</em> guident notre approche : choix de la pièce, parcours du véhicule, créneau d'intervention adapté aux ${c(0)} de <em>${s(0)}</em>.`,
  ];
  return sentences[(seed + kind) % sentences.length];
}

// Génère un paragraphe "fingerprint" UNIQUE par zone — basé sur ses streets/landmarks/commerces.
// Inséré dans l'intro pour différencier massivement les pages d'une même catégorie service.
function zoneFingerprint(zoneSlug: string, serviceId: string, zoneName: string): string {
  const zone = zoneLocalData[zoneSlug];
  if (!zone) return "";
  const allStreets = zone.streets.slice(0, 4).join(", ");
  const allLandmarks = zone.landmarks.slice(0, 4).join(", ");
  const allQuartiers = zone.quartiers.join(", ");
  const allCommerces = zone.commerces.slice(0, 4).join(", ");
  const transport = zone.transport.join(", ");
  const serviceLabel: Record<string, string> = {
    depannage: "dépannage",
    installation: "installation",
    reparation: "réparation",
    motorisation: "motorisation",
    deblocage: "déblocage",
    entretien: "entretien",
    fabrication: "fabrication",
  };
  return ` Notre intervention de ${serviceLabel[serviceId] || serviceId} sur <strong>${zoneName}</strong> couvre l'ensemble du périmètre : quartiers ${allQuartiers}, axes commerçants ${allStreets}, repères de navigation ${allLandmarks}, dessertes ${transport}. Le tissu local — ${allCommerces} — guide notre approche technique et nos préconisations spécifiques au secteur. ${zone.specifique}`;
}

// Second fingerprint pour augmenter encore le poids du contenu zone-spécifique.
// Inséré dans une section différente pour ne pas répéter avec le premier.
function zoneFingerprint2(zoneSlug: string, serviceId: string, zoneName: string, seed: number): string {
  const zone = zoneLocalData[zoneSlug];
  if (!zone) return "";
  const s0 = zone.streets[0] || "";
  const s1 = zone.streets[1] || s0;
  const s2 = zone.streets[2] || s0;
  const s3 = zone.streets[3] || s0;
  const l0 = zone.landmarks[0] || "";
  const l1 = zone.landmarks[1] || l0;
  const l2 = zone.landmarks[2] || l0;
  const l3 = zone.landmarks[3] || l0;
  const q0 = zone.quartiers[0] || "";
  const q1 = zone.quartiers[1] || q0;
  const c0 = zone.commerces[0] || "";
  const c1 = zone.commerces[1] || c0;
  const c2 = zone.commerces[2] || c0;
  // Variantes
  const variants = [
    ` Sur <strong>${zoneName}</strong>, notre logistique d'intervention s'appuie sur la connaissance fine de ${s0}, ${s1}, ${s2} et ${s3}, ainsi que des accès aux abords de ${l0}, ${l1}, ${l2} et ${l3}. Le profil ${zone.profile} de ${zoneName} (secteurs ${q0}, ${q1}) implique une priorité accordée aux ${c0}, ${c1} et ${c2} qui constituent le cœur du tissu commerçant local. ${zone.specifique}`,
    ` Le périmètre <strong>${zoneName}</strong> (${zone.profile}) s'organise autour de ${l0}, ${l1} et ${l2} avec ${q0} et ${q1} comme secteurs principaux. Nos passages réguliers sur ${s0}, ${s1}, ${s2} et ${s3} ont constitué un historique d'intervention propre au quartier. Les ${c0}, ${c1} et ${c2} de ${zoneName} font partie de notre clientèle récurrente. ${zone.specifique}`,
    ` <strong>${zoneName}</strong> se caractérise par son profil ${zone.profile} : ${zone.specifique} Nos techniciens connaissent personnellement les abords de ${l0}, ${l1} et ${l2}, circulent quotidiennement sur ${s0}, ${s1}, ${s2} et ${s3}, et ont historisé les modèles de rideau métallique installés chez les ${c0}, ${c1} et ${c2} du secteur ${q0}.`,
  ];
  return variants[seed % variants.length];
}

export function generateServicePageContent(
  serviceId: string,
  zoneName: string,
  zoneSlug?: string
): GeneratedServiceContent {
  const isVille = !zoneSlug || zoneSlug === siteConfig.citySlug;
  const seed = zoneSlug ? hashZoneSlug(zoneSlug) : hashZoneSlug(zoneName);
  // Seeds dérivés par bloc — évite la collision des choix entre intro / seo / faq / types / pourquoi.
  const seedIntro = zoneSlug ? seedFor(zoneSlug, "intro:" + serviceId) : seed;
  const seedSeo = zoneSlug ? seedFor(zoneSlug, "seo:" + serviceId) : seed;
  const seedFaq = zoneSlug ? seedFor(zoneSlug, "faq:" + serviceId) : seed;
  const seedTypes = zoneSlug ? seedFor(zoneSlug, "types:" + serviceId) : seed;
  const seedSteps = zoneSlug ? seedFor(zoneSlug, "steps:" + serviceId) : seed;
  const seedPourquoi = zoneSlug ? seedFor(zoneSlug, "pourquoi:" + serviceId) : seed;
  const seedReviews = zoneSlug ? seedFor(zoneSlug, "reviews:" + serviceId) : seed;

  const intros = introAngles[serviceId] || introAngles.depannage;
  const seoBank = seoBlocksByService[serviceId] || seoBlocksByService.depannage;
  const faqBank = faqByService[serviceId] || faqByService.depannage;
  const typesBank = typesIntervention[serviceId] || typesIntervention.depannage;
  const stepsBank = processSteps[serviceId] || processSteps.depannage;
  const pourquoiBank = pourquoiNous[serviceId] || pourquoiNous.depannage;
  const reviewsBank = reviewsByService[serviceId] || reviewsByService.depannage;

  // Handcrafted override : si la zone a un handcraft, on prend l'intro spécifique
  const handcrafted = zoneSlug && !isVille ? zonesHandcrafted[zoneSlug] : null;

  // INTRO
  let intro: string;
  if (handcrafted && handcrafted.intros[serviceId]) {
    intro = handcrafted.intros[serviceId];
  } else {
    intro = replaceVars(pick(intros, seedIntro), zoneName, isVille);
    if (zoneSlug && zoneLocalData[zoneSlug]) {
      const zone = zoneLocalData[zoneSlug];
      if (zone) {
        const openers = [
          `Sur <strong>${zoneName}</strong> (${zone.profile}), autour de ${zone.landmarks[0]}, `,
          `À <strong>${zoneName}</strong>, secteur ${zone.quartiers[0]}, `,
          `${zoneName} et ses abords (${zone.streets[0]}, ${zone.streets[1] || zone.landmarks[0]}) : `,
          `Pour les ${zone.commerces[0]} et ${zone.commerces[1] || "autres"} de <strong>${zoneName}</strong>, `,
        ];
        intro = openers[seedIntro % openers.length] + intro.charAt(0).toLowerCase() + intro.slice(1);
        // Ajout du fingerprint zone-spécifique en queue d'intro
        intro += zoneFingerprint(zoneSlug, serviceId, zoneName);
      }
    }
  }

  const h1 = h1ByService[serviceId] || `${serviceId} de rideau métallique à ${siteConfig.city}`;

  // SEO blocks: 3 blocs, rotation par seed dérivée — 8 entrées dispo
  const seoBlocks: Array<{ title: string; body: string }> = [];
  if (handcrafted && handcrafted.seoBlocks[serviceId]) {
    seoBlocks.push(handcrafted.seoBlocks[serviceId]);
  }
  const remaining = 3 - seoBlocks.length;
  for (let offset = 0; offset < remaining; offset++) {
    const idx = (seedSeo + offset * 3) % seoBank.length;
    const block = seoBank[idx];
    let body = replaceVars(block.body, zoneName, isVille);
    if (zoneSlug && zoneLocalData[zoneSlug]) {
      // Substitutions zone-aware DANS le corps (casse les 5-shingles cross-zone)
      body = zoneAwareSubstitute(body, zoneSlug, zoneName, seedSeo + offset);
      // 2 phrases zone-spécifiques distinctes par block — kind différent à chaque offset
      const zoneSent1 = zoneSentence(zoneSlug, offset * 2, seedSeo + offset, zoneName);
      const zoneSent2 = zoneSentence(zoneSlug, offset * 2 + 1, seedSeo + offset * 5 + 3, zoneName);
      body += zoneSent1 + zoneSent2;
      // Injection du 2nd fingerprint UNIQUEMENT dans le dernier bloc SEO pour ne pas alourdir
      if (offset === remaining - 1) {
        body += zoneFingerprint2(zoneSlug, serviceId, zoneName, seedSeo + offset);
      }
    }
    seoBlocks.push({
      title: replaceVars(block.title, zoneName, isVille),
      body,
    });
  }

  // FAQ: 6 questions — la première reste 'qui appeler' (index 0), 5 autres rotent sur les 7 restantes
  const firstFaq = faqBank[0];
  const restCandidates = Array.from({ length: faqBank.length - 1 }, (_, i) => i + 1);
  const pickedRest: number[] = [];
  for (let i = 0; i < restCandidates.length && pickedRest.length < 5; i++) {
    const idx = restCandidates[(seedFaq + i * 3) % restCandidates.length];
    if (!pickedRest.includes(idx)) pickedRest.push(idx);
  }
  let faqRaw = [firstFaq, ...pickedRest.map((i) => faqBank[i])];
  if (handcrafted && handcrafted.faqs[serviceId]) {
    const hcFaqs = handcrafted.faqs[serviceId];
    if (hcFaqs.length > 0) faqRaw[2] = hcFaqs[0];
    if (hcFaqs.length > 1) faqRaw[4] = hcFaqs[1];
  }
  const faq = faqRaw.map((f, idx) => {
    let answer = replaceVars(f.a, zoneName, isVille);
    if (zoneSlug && zoneLocalData[zoneSlug]) {
      // Substitutions zone-aware DANS la réponse
      answer = zoneAwareSubstitute(answer, zoneSlug, zoneName, seedFaq + idx * 7);
      const zone = zoneLocalData[zoneSlug];
      if (zone) {
        const tags = [
          ` Couverture spécifique : ${zone.quartiers.slice(0, 2).join(", ")}, abords de ${zone.landmarks[0]}.`,
          ` Notre véhicule rejoint ${zoneName} via ${zone.streets[0]} et ${zone.streets[1] || zone.streets[0]}.`,
          ` Clientèle régulière : ${zone.commerces.slice(0, 2).join(" et ")} du secteur ${zone.quartiers[0]}.`,
          ` Points d'intervention typiques : ${zone.streets[0]}, ${zone.streets[1] || zone.streets[0]}, abords de ${zone.landmarks[1] || zone.landmarks[0]}.`,
          ` Pour ${zoneName}, secteur ${zone.quartiers[0]}, accès via ${zone.transport[0] || zone.streets[0]}.`,
          ` Contexte : ${zone.specifique.split(".")[0]}.`,
          ` Repères principaux : ${zone.landmarks.slice(0, 3).join(", ")}.`,
          ` Rues d'intervention : ${zone.streets.slice(0, 3).join(", ")}.`,
        ];
        // Ajout sur 4 FAQ sur 6 (au lieu de 3 sur 6)
        if (idx === 0 || idx === 2 || idx === 3 || idx === 5) {
          answer += tags[(seedFaq + idx * 3) % tags.length];
        }
      }
    }
    return {
      q: replaceVars(f.q, zoneName, isVille),
      a: answer,
    };
  });

  // Types: 6 cards piochées dans bank de 8 par seed
  const typesPicked = pickN(typesBank, seedTypes, 6);
  const types = typesPicked.map((t, i) => {
    let desc = replaceVars(t.description, zoneName, isVille);
    if (zoneSlug && zoneLocalData[zoneSlug]) {
      // Substitutions zone-aware DANS la description aussi
      desc = zoneAwareSubstitute(desc, zoneSlug, zoneName, seedTypes + i * 11);
      const zone = zoneLocalData[zoneSlug];
      if (zone) {
        const ctxts = [
          ` Sur ${zoneName}, fréquent autour de ${zone.landmarks[0]}.`,
          ` Adapté aux ${zone.commerces[0]} de ${zone.quartiers[0]}.`,
          ` Demande fréquente sur ${zone.streets[0]} et ${zone.streets[1] || zone.streets[0]}.`,
          ` Particulièrement pour le secteur ${zone.quartiers[0]}.`,
          ` Sur ${zoneName} (${zone.profile}), demande spécifique.`,
          ` Adapté aux contraintes de ${zone.landmarks[1] || zone.landmarks[0]}.`,
          ` Cas fréquent près de ${zone.landmarks[0]} et ${zone.streets[0]}.`,
        ];
        // Ajout sur TOUS les types (au lieu de 4 sur 6)
        desc += ctxts[(seedTypes + i * 3) % ctxts.length];
      }
    }
    return {
      title: replaceVars(t.title, zoneName, isVille),
      description: desc,
    };
  });

  // Steps: 4 cards piochées dans bank de 6 par seed
  const stepsPicked = pickN(stepsBank, seedSteps, 4);
  const steps = stepsPicked.map((s, i) => {
    let desc = replaceVars(s.description, zoneName, isVille);
    if (zoneSlug && zoneLocalData[zoneSlug]) {
      desc = zoneAwareSubstitute(desc, zoneSlug, zoneName, seedSteps + i * 13);
      const zone = zoneLocalData[zoneSlug];
      if (zone && (i === 1 || i === 3)) {
        desc += ` Pour ${zoneName} : ${zone.streets[i % zone.streets.length]}, secteur ${zone.quartiers[0]}.`;
      }
    }
    return {
      step: s.step,
      title: replaceVars(s.title, zoneName, isVille),
      description: desc,
    };
  });

  // Pourquoi: 4 cards piochées dans bank de 6 par seed
  const pourquoiPicked = pickN(pourquoiBank, seedPourquoi, 4);
  const pourquoi = pourquoiPicked.map((p, i) => {
    let desc = replaceVars(p.description, zoneName, isVille);
    if (zoneSlug && zoneLocalData[zoneSlug]) {
      desc = zoneAwareSubstitute(desc, zoneSlug, zoneName, seedPourquoi + i * 17);
      const zone = zoneLocalData[zoneSlug];
      if (zone) {
        const tags = [
          ` Sur ${zoneName}, notre véhicule couvre ${zone.streets[0]} et le secteur ${zone.quartiers[0]}.`,
          ` Adapté à ${zoneName} (${zone.profile}), abords de ${zone.landmarks[0]}.`,
          ` Pour les ${zone.commerces[0]} de ${zoneName}, intervention régulière.`,
          ` Zone d'astreinte ${zoneName} : ${zone.quartiers.slice(0, 2).join(", ")}.`,
        ];
        // Tous les pourquoi (au lieu de 2 sur 4)
        desc += tags[(seedPourquoi + i * 2) % tags.length];
      }
    }
    return {
      title: replaceVars(p.title, zoneName, isVille),
      description: desc,
      icon: p.icon,
    };
  });

  // Reviews: rotation par seed dérivée
  const reviewOffset = seedReviews % reviewsBank.length;
  const reviews = [...reviewsBank.slice(reviewOffset), ...reviewsBank.slice(0, reviewOffset)].slice(0, 6);

  return {
    intro,
    seoBlocks,
    faq,
    h1,
    types,
    steps,
    pourquoi,
    reviews,
  };
}

// ============================================================================
// 10. Génération de narratifs zone-spécifiques (pour pages zone uniquement)
// 4 variantes par service — UNE est handcrafted-override si dispo.
// ============================================================================
export interface ZoneNarrative {
  paragraphs: string[];
  contextTitle: string;
}

const narrativeAnglesByService: Record<string, string[][]> = {
  depannage: [
    [
      "Quand un commerce de <zone> tombe en panne, le périmètre d'intervention immédiat couvre <streets>. DRM Sète positionne en permanence un véhicule d'astreinte au plus proche du Bassin de Thau, équipé de pièces compatibles avec les modèles installés autour de <landmarks>.",
      "Le profil <profile> de <zone> impose un délai de réponse strict : les commerces type <commerces> ont des plages d'ouverture précises et chaque heure de fermeture coûte cher. Notre intervention sur <zone> respecte ces contraintes — la majorité des dépannages sont bouclés avant le rush du midi.",
      "Sur <zone>, l'historique des pannes connues (corrosion saline sur axes, lames déformées par chocs commerciaux, ressorts fatigués par cycles intensifs) guide notre approche : un véhicule équipé du stock minimal critique permet 9 dépannages sur 10 en un seul passage.",
    ],
    [
      "Le réseau routier autour de <zone> (<streets>) et la proximité des repères <landmarks> structurent notre logistique d'intervention. Nos techniciens connaissent les rues étroites, les zones piétonnes saisonnières et les accès logistiques aux <commerces> du quartier.",
      "À <zone>, la typologie <profile> implique une diversité d'équipements rideau métallique : du commerce indépendant au commerce de chaîne, en passant par les locaux professionnels. DRM Sète a déjà dépanné chaque type d'installation présent dans le secteur.",
      "Les <commerces> de <zone> bénéficient d'une priorité d'astreinte du fait de leur fonction quotidienne (alimentation, santé, dépannage). Notre engagement <delai> minutes vaut particulièrement pour ces établissements indispensables au quotidien des habitants.",
    ],
    [
      "Notre équipe couvre <zone> depuis Sète avec un trajet moyen optimisé pour les heures de pointe locales. Les principales artères empruntées (<streets>) et les repères de navigation (<landmarks>) permettent d'éviter les zones de travaux et les blocages saisonniers.",
      "<specifique> Ce contexte conditionne les pannes les plus fréquentes que nous rencontrons sur <zone> : DRM Sète arrive avec un diagnostic pré-orienté en fonction du quartier d'intervention.",
      "Sur le périmètre <zone> incluant <quartiers>, nous avons constitué un historique d'intervention qui sert de référence à nos techniciens. Cela accélère le diagnostic, raccourcit le temps d'intervention et améliore le taux de réussite premier passage.",
    ],
    [
      "DRM Sète a recensé sur <zone> les pannes récurrentes par type d'équipement : moteurs ACM lourds des supérettes, tubulaires Simu des boulangeries, axes désaxés des restaurants à fort cycle. Cette typologie locale rend nos diagnostics plus précis dès l'appel.",
      "Le passage régulier de nos véhicules sur <streets> et autour de <landmarks> permet à nos techniciens de connaître les commerces de <zone> avant même l'appel. Le carnet d'adresses local accélère l'arrivée et identifie le bon parking.",
      "Pour les commerces de <zone> à fort trafic (<commerces>), DRM Sète propose après dépannage un protocole de prévention adapté : visite trimestrielle, lubrification renforcée, joints EPDM remplacés tôt. C'est ce qui distingue un vrai partenaire d'un dépanneur ponctuel.",
    ],
  ],
  installation: [
    [
      "Installer un rideau métallique à <zone> demande une étude technique adaptée au profil <profile> du secteur. Les <commerces> de <zone> (autour de <landmarks>) ont des contraintes spécifiques que DRM Sète intègre dès la prise de mesure : épaisseur lames, traitement anti-corrosion, intégration façade.",
      "La pose d'un rideau métallique neuf à <zone> implique souvent une coordination avec d'autres corps de métier (maçonnerie, électricité, vitrerie). DRM Sète a constitué un réseau local de partenaires sur <streets> et ses environs pour fluidifier les chantiers de devanture.",
      "Le contexte urbain de <zone> (<specifique>) impose parfois une dépose-pose en horaires décalés. DRM Sète propose pour <zone> des créneaux de pose tôt matin (6h-9h) ou en soirée pour ne pas gêner l'activité commerciale du jour.",
    ],
    [
      "Notre équipe métreur connaît parfaitement le bâti de <zone> : largeur des linteaux, type de pierre/béton, présence ou absence d'arrivée 230V dédiée. Sur <streets> notamment, les façades anciennes demandent une approche différente du bâti récent.",
      "Les <commerces> implantés à <zone> bénéficient d'une expertise sectorielle : DRM Sète a déjà installé pour des établissements similaires aux vôtres dans le secteur, et reproduit les meilleures pratiques identifiées (lame finale renforcée, serrure cylindre profil européen).",
      "À <zone>, l'orientation des vents dominants et l'exposition à l'air iodé du Bassin de Thau orientent le choix entre acier galvanisé Z275, aluminium marin ou inox 316L. Notre métreur ajuste la recommandation selon votre emplacement exact (<quartiers>).",
    ],
    [
      "DRM Sète installe à <zone> en respectant les contraintes esthétiques du quartier : coffre apparent ou encastré, finition RAL au choix Qualicoat, lames pleines ou mixtes selon mise en valeur de la vitrine. Le secteur (<landmarks>) impose souvent des règles d'urbanisme spécifiques.",
      "Notre engagement à <zone> : devis sous 48h après visite technique, fabrication 5-10 jours, pose 1-2 jours, formation utilisateur incluse. Sur les chantiers de <commerces>, DRM Sète a tenu ce planning sur 95% de ses installations passées.",
      "Pour les commerces de <quartiers>, la pose se déroule en concertation avec le voisinage : information préalable, gestion des nuisances sonores, propreté du chantier. DRM Sète intègre ces aspects au cahier des charges de chaque installation à <zone>.",
    ],
    [
      "L'installation d'un rideau métallique neuf à <zone> peut être l'occasion d'une mise à niveau électrique complète : pose d'une prise dédiée 230V, mise au norme du tableau, attestation Consuel. DRM Sète coordonne avec un électricien partenaire local familier du bâti de <streets>.",
      "Les <commerces> de <zone> à risque (bijouteries, opticiens, banques, pharmacies) bénéficient d'une option A2P niveau 2 : lame pleine anti-effraction certifiée et serrure cylindre haute sécurité. Cette double certification est exigée par certaines assurances pro et nous l'attestons écrit.",
      "Notre démarche d'installation sur <zone> intègre la maintenance future dès la pose : choix de joints EPDM remplaçables sans démontage, accessibilité à l'axe pour graissage, motorisation compatible avec les pièces standard du marché. C'est un investissement à 15-20 ans.",
    ],
  ],
  reparation: [
    [
      "Réparer un rideau métallique à <zone> commence par un diagnostic précis des pièces défectueuses. Notre stock embarqué couvre 90% des pièces critiques : moteurs ACM, Somfy, Simu, lames P57/P90, axes diam. 60-76 mm, ressorts par paire, serrures cylindre.",
      "Sur <zone> et autour de <landmarks>, les équipements rideau métallique rencontrés vont du standard au sur-mesure. DRM Sète a entretenu un fichier technique des marques/modèles fréquents du secteur, ce qui accélère le diagnostic.",
      "La typologie <profile> de <zone> conditionne les pannes les plus fréquentes : sur <streets>, les chocs commerciaux fréquents demandent souvent un remplacement de lames ; dans les <commerces> à fort cycle, c'est plutôt le moteur ou les ressorts.",
    ],
    [
      "Pour les <commerces> de <zone>, une réparation bien menée évite un remplacement complet à 60-80% du prix. DRM Sète propose toujours les deux options chiffrées dans le devis, avec recommandation argumentée selon l'âge et l'état de l'équipement.",
      "L'historique d'intervention DRM Sète sur <zone> (notamment autour de <landmarks>) permet de réutiliser des références de réparation antérieures. Cela raccourcit le diagnostic et limite les déplacements pour pièces complémentaires.",
      "Notre engagement de réparation sur <zone> : 2 ans pièces d'origine constructeur, 1 an main-d'œuvre, traçabilité écrite sur facture. Récidive sur la même cause = repassage gratuit. Cette garantie figure noir sur blanc sur chaque facture.",
    ],
    [
      "À <zone> (<quartiers>), nous distinguons deux types d'intervention : la réparation urgente (intervention le jour même) et la réparation programmée (sous 48-72h, tarif réduit). Vous choisissez selon votre contrainte d'activité.",
      "Les <commerces> du secteur connaissent les pannes saisonnières (canicule, gel, embruns). DRM Sète a constitué une base de connaissance des modes de défaillance qui touche particulièrement <zone> et adapte sa réponse en conséquence.",
      "Sur <streets> et les axes de circulation principaux, nos techniciens interviennent avec un véhicule signé DRM Sète, polo professionnel, et présentent leur carte technicien. Pas de démarcheur abusif : transparence totale dès l'arrivée à <zone>.",
    ],
    [
      "Pour les rideaux anciens sur <zone> (équipement de plus de 15 ans), DRM Sète propose une réparation en deux temps : sécurisation immédiate (refermable manuellement, cylindre fonctionnel) puis remplacement pièce par pièce planifié, sans interrompre votre activité commerciale.",
      "Le diagnostic réparation à <zone> teste systématiquement : intensité moteur sous charge, tension des deux ressorts, cycle complet 3 fois, sortie/rentrée propre dans les coulisses, fermeture lame finale. Cela permet d'identifier les fragilités à venir et de chiffrer le préventif.",
      "Sur <zone>, lorsqu'une réparation dépasse 60% du prix d'un rideau neuf, nous le disons sans ambiguïté : remplacement plus rentable, garantie repartie à zéro. C'est l'avis honnête qui distingue un vrai professionnel d'un réparateur qui prolongerait artificiellement la durée de vie.",
    ],
  ],
  motorisation: [
    [
      "Motoriser un rideau métallique à <zone> demande de connaître le poids exact du tablier et la fréquence d'usage. DRM Sète pèse, calcule le couple nécessaire et choisit entre moteur tubulaire Simu/Somfy (tabliers moyens) ou central ACM (tabliers lourds 350-1200 kg).",
      "Le profil <profile> de <zone> oriente le choix de la commande : commerce indépendant = télécommande RTS, chaîne multi-sites = module connecté smartphone (TaHoma, MyNice). Sur <streets>, où circule beaucoup de monde, la commande filaire encastrée reste fréquente.",
      "À <zone> (<landmarks>), nos motorisations respectent la norme EN 12453 (sécurité d'arrêt obstacle). Détection ampérométrique systématique, parfois doublée d'une barre palpeuse pour les passages publics intensifs.",
    ],
    [
      "Pour les <commerces> de <zone>, la motorisation transforme l'ouverture matinale : plus de chaîne à tirer, plus d'effort physique répété. Le gain en confort se mesure dès la première semaine d'utilisation, et nos clients du secteur le confirment massivement.",
      "L'usage intensif rencontré dans certains commerces de <zone> (ouverture/fermeture plusieurs fois par jour, livraisons fréquentes) impose un moteur dimensionné supérieur. DRM Sète préconise toujours un coefficient de sécurité de 30% sur le couple théorique.",
      "La motorisation d'un rideau existant à <zone> prend généralement une demi-journée. Les équipements de <quartiers> avec ressorts en bon état permettent une pose simple ; un axe usé ou des ressorts cassés impliquent un kit complet (devis transparent).",
    ],
    [
      "Notre offre de motorisation pour <zone> inclut systématiquement la formation utilisateur : apprentissage de la télécommande, paramétrage smartphone si module connecté, gestes de secours en cas de panne secteur. Tout est consigné dans un livret remis sur place.",
      "Les <commerces> de <streets> et environs ont parfois des contraintes électriques spécifiques (tableau ancien, prise éloignée, monophasé limité). DRM Sète intègre ces contraintes au devis : pose de prise dédiée, mise aux normes du tableau si nécessaire.",
      "Sur le périmètre <zone> couvrant <quartiers>, nous installons les marques Somfy, Simu, ACM, Nice, Sommer, FAAC, BFT, Came. Chaque moteur posé bénéficie de la garantie constructeur (2 à 5 ans) et de notre garantie main-d'œuvre 1 an.",
    ],
    [
      "À <zone>, certains <commerces> exigent une motorisation silencieuse pour ne pas gêner les clients ou voisins (cabinets médicaux, restaurants gastronomiques, bibliothèques). DRM Sète propose des moteurs Somfy RS100 avec niveau acoustique inférieur à 55 dB en utilisation normale.",
      "L'argument économique de la motorisation à <zone> : un commerçant qui ouvre/ferme 2 fois par jour gagne 5-10 minutes/jour, soit 30-60 heures par an. À l'échelle de la durée de vie d'un moteur (10-15 ans), le ROI dépasse largement l'investissement initial.",
      "Pour les commerces de <quartiers> avec des horaires variables (saisonnier, jours fériés, événements), la programmation horaire d'un module connecté TaHoma ou MyNice automatise les fermetures hebdomadaires. DRM Sète paramètre tout selon votre planning réel.",
    ],
  ],
  deblocage: [
    [
      "Un rideau métallique bloqué à <zone> mobilise notre astreinte en priorité absolue. Le véhicule géolocalisé le plus proche est déclenché immédiatement, avec un appel de rappel 5 minutes avant arrivée pour préparer l'intervention.",
      "Sur <zone> (<streets>), les causes les plus fréquentes de blocage que nous observons sont : (1) lame sortie de rail après choc commercial, (2) ressort cassé par fatigue cyclique, (3) corrosion saline sur came centrale, (4) moteur grillé par surcharge.",
      "Le profil <profile> de <zone> implique des urgences à toute heure : les <commerces> du secteur ouvrent tôt (boulangeries 6h, restaurants 11h) et ferment tard. Notre astreinte 24h/24 sans majoration s'aligne sur ces horaires métier.",
    ],
    [
      "DRM Sète arrive à <zone> avec l'outillage complet de déblocage : manivelle de secours, perceuse à choc, kit décoinçage came, jeu de clés cylindre passe. Le matériel embarqué permet d'éviter un retour atelier dans 8 cas sur 10.",
      "Sur <landmarks> et alentours, les commerces sensibles (pharmacies, magasins d'alimentation, restaurants) bénéficient d'une priorité d'astreinte. DRM Sète tient un engagement <delai> minutes même les jours de forte affluence touristique.",
      "Pour un déblocage rapide à <zone>, suivre les bons réflexes : NE PAS forcer manuellement, NE PAS débrancher le moteur, NE PAS retirer la lame finale. Appeler DRM Sète immédiatement, expliquer le symptôme — le technicien arrive avec la solution.",
    ],
    [
      "À <zone>, l'air marin contribue à 40% des blocages constatés : axe grippé, ressorts oxydés, came désaxée. Un entretien semestriel évite ces situations — DRM Sète propose des contrats adaptés au littoral après chaque déblocage.",
      "Notre équipe couvre <zone> et son périmètre via <streets>, en passant par <quartiers>. Les véhicules d'astreinte alternent leur position selon l'heure de la journée pour minimiser les délais d'arrivée sur les <commerces> à fort risque.",
      "Le coût d'un déblocage à <zone> reste prévisible : forfait à partir de 150€ TTC (déplacement + diagnostic + intervention courte), pièces en sus si remplacement nécessaire. Devis transparent avant validation, signature obligatoire.",
    ],
    [
      "Lorsqu'un rideau coince un dimanche ou un jour férié à <zone>, DRM Sète intervient sans majoration. Notre équipe couvre <quartiers> et alentours en astreinte fixe, ce qui garantit un délai d'arrivée comparable à un mardi matin de semaine ordinaire.",
      "Sur <zone>, un déblocage mal exécuté (forçage manuel, choc électrique sur moteur, démontage hasardeux) peut occasionner des réparations à 4 chiffres derrière. DRM Sète intervient avec le bon outillage : c'est l'assurance de ne pas aggraver une situation déjà urgente.",
      "Pour les commerces de <streets> et <commerces> du secteur, nous tenons un fichier client confidentiel des modèles installés. Cela nous permet d'arriver au déblocage avec la bonne came, le bon ressort, le bon condensateur — diagnostic plus rapide, intervention plus courte.",
    ],
  ],
  entretien: [
    [
      "L'entretien préventif à <zone> est plus stratégique que pour l'intérieur des terres : l'air iodé du Bassin de Thau corrode rails, axes et ressorts en 12-18 mois sans intervention. DRM Sète a établi un protocole spécifique au littoral méditerranéen.",
      "Les <commerces> de <zone> bénéficient d'une visite annuelle programmée à dates fixes (rappel 7 jours avant). Sur <streets>, où le passage commercial est intense, nous évitons les horaires d'affluence pour ne pas gêner votre activité.",
      "Le profil <profile> de <zone> conditionne les fréquences de visite : commerce alimentaire = 3 visites/an (cycles intensifs), commerce service = 2 visites/an, bureau professionnel = 1 visite/an. DRM Sète adapte la formule à votre usage réel.",
    ],
    [
      "Sur <landmarks> et autour, nos techniciens d'entretien apportent un kit complet : graisse lithium-calcium anti-saumure, lanoline marine, joints EPDM neufs, lubrifiant silicone pour coulisses, kit nettoyage cylindre. Tout est prévu pour intervenir sans rupture.",
      "L'engagement DRM Sète sur <zone> : si une panne survient entre deux visites d'entretien sous contrat, vous bénéficiez d'un délai prioritaire (<delai> minutes garantis) et d'une remise de 15% sur pièces et main-d'œuvre. La formule Sérénité inclut même 2h/an de curatif.",
      "Pour les enseignes multi-sites du Bassin de Thau (3+ commerces à <quartiers> ou alentours), nous proposons un tarif dégressif de 15 à 25% sur le contrat. Visite groupée possible, planning unique, facturation centralisée — la solution adaptée aux groupes.",
    ],
    [
      "Le rapport d'entretien remis après chaque visite à <zone> détaille point par point l'état du moteur (intensité absorbée, temps de cycle), des ressorts (tension), des lames (jeu), de la serrure (lubrification), des coulisses (alignement). Photos et alertes orange/rouge incluses.",
      "À <zone>, nous remplaçons les joints EPDM tous les 24-30 mois (durée raccourcie par le sel). Sur certains <commerces> très exposés (front de mer, plages, ports), le remplacement peut être annuel — DRM Sète anticipe cette spécificité dans le contrat.",
      "Sur <streets> et les axes commerçants de <zone>, le contrat d'entretien permet de garder une trace administrative complète : utile pour les assurances, les passations de fonds de commerce, ou les obligations de copropriété en immeuble mixte.",
    ],
    [
      "L'argument financier d'un contrat d'entretien à <zone> est rapide à chiffrer : 1-2 pannes lourdes évitées par an (à 400-1 500 €) compensent largement le prix annuel. Sur 5 ans, le ROI moyen pour les commerces de <quartiers> dépasse 3x le coût du contrat.",
      "DRM Sète propose à <zone> un audit gratuit initial avant signature du contrat : état complet de votre équipement, ancienneté estimée, points de fragilité repérés, formule recommandée. Vous décidez ensuite, sans engagement et sans pression commerciale.",
      "Pour les commerces saisonniers de <zone> (restaurants de plage, boutiques estivales), nous proposons un rythme d'entretien adapté : visite en avril avant l'ouverture saisonnière, contrôle en septembre après fermeture. Cela maximise la disponibilité en haute saison.",
    ],
  ],
  fabrication: [
    [
      "Fabriquer un rideau métallique sur-mesure pour <zone> commence par une visite technique gratuite : largeur exacte de l'ouverture, hauteur sous linteau, profondeur du coffre, présence ou absence d'arrivée 230V dédiée. Les <commerces> du secteur ont chacun leur géométrie.",
      "Le profil <profile> de <zone> oriente le choix matière : acier galvanisé Z275 standard pour les commerces classiques, aluminium marin pour les emplacements très exposés (<landmarks>), inox 316L pour les chantiers haut de gamme demandant 25+ ans de durée.",
      "Sur <streets>, les façades anciennes imposent parfois un coffre plat ou encastré pour respecter le bâti. DRM Sète propose des configurations 2 faces, 3 faces ou imposte selon contrainte d'urbanisme et préférence esthétique du commerce.",
    ],
    [
      "Pour les <commerces> de <zone>, le choix des lames dépend de l'activité : lame pleine A2P pour bijouteries/banques, micro-perforée 5 mm pour vitrines de mode/restaurants, polycarbonate transparent pour parfumeries/joaillerie haut de gamme, grille cobra pour parkings/entrepôts.",
      "Notre atelier français partenaire fabrique en 5-10 jours ouvrés, ou en express 4h sur les axes et coffres standards. Pour les chantiers urgents à <zone> (effraction, sinistre, déménagement), nous proposons un planning serré : fabrication express, pose sous 5 jours.",
      "Le thermolaquage Qualicoat appliqué sur chaque rideau fabriqué pour <zone> protège contre les UV et l'air marin pendant 10+ ans. Couleur RAL au choix illimité — les <quartiers> du secteur affichent souvent des choix originaux qui mettent en valeur la devanture.",
    ],
    [
      "DRM Sète fabrique pour <zone> des coffres 2, 3 faces ou imposte selon contrainte d'intégration. <specifique> Cette typologie influe sur le choix du coffre et de la finition extérieure.",
      "Sur <landmarks> et les rues commerçantes de <zone>, les chantiers de fabrication-installation se déroulent souvent en horaires décalés (tôt matin, soirée, samedi). DRM Sète s'adapte au planning des <commerces> pour minimiser l'impact sur l'activité.",
      "Notre engagement fabrication à <zone> : traçabilité complète de l'acier français, soudure certifiée, contrôle qualité avant expédition, attestation TVA 10% si commerce de plus de 2 ans existant, garantie 2 ans pièces + 1 an main-d'œuvre.",
    ],
    [
      "Chaque rideau fabriqué pour <zone> passe un contrôle qualité en 3 étapes à l'atelier français : dimensionnel, soudure, fonctionnel (essai de cycle complet avant expédition). Nous livrons un certificat signé qui accompagne la facture client.",
      "Pour les commerces sensibles de <quartiers> (bijouteries, banques, opticiens, pharmacies), DRM Sète intègre dès la fabrication des renforcements optionnels : lame finale double épaisseur, serrure A2P haute sécurité, deux points de verrouillage automatique en position basse.",
      "L'argument durée de vie d'une fabrication sur-mesure à <zone> : un rideau acier galvanisé Z275 thermolaqué Qualicoat tient 15-20 ans avec entretien régulier ; un inox 316L marin atteint 25-30 ans. L'investissement initial est amorti sur 3 ou 4 décennies.",
    ],
  ],
};

export function generateZoneNarrative(
  serviceId: string,
  zoneName: string,
  zoneSlug: string
): ZoneNarrative | null {
  const zoneLocal = zoneLocalData[zoneSlug];
  if (!zoneLocal) return null;

  // Handcrafted narrative override : si dispo, prioritaire
  const hc = zonesHandcrafted[zoneSlug];
  if (hc && hc.narrative) {
    return {
      paragraphs: hc.narrative.paragraphs,
      contextTitle: hc.narrative.contextTitle,
    };
  }

  const seed = seedFor(zoneSlug, "narrative:" + serviceId);
  const banks = narrativeAnglesByService[serviceId] || narrativeAnglesByService.depannage;
  const bank = banks[seed % banks.length];

  const tokens: Record<string, string> = {
    "<zone>": zoneName,
    "<delai>": siteConfig.delai,
    "<streets>": zoneLocal.streets.slice(0, 3).join(", "),
    "<landmarks>": zoneLocal.landmarks.slice(0, 3).join(", "),
    "<quartiers>": zoneLocal.quartiers.join(", "),
    "<commerces>": zoneLocal.commerces.slice(0, 3).join(", "),
    "<transport>": zoneLocal.transport.slice(0, 2).join(", "),
    "<profile>": zoneLocal.profile,
    "<specifique>": zoneLocal.specifique,
  };

  const paragraphs = bank.map((p) => {
    let out = p;
    for (const [k, v] of Object.entries(tokens)) {
      out = out.split(k).join(v);
    }
    return out;
  });

  // Ajout d'un 4e paragraphe entièrement basé sur les données zone — maximise l'unicité
  const fp = zoneFingerprint2(zoneSlug, serviceId, zoneName, seed);
  paragraphs.push(fp.trim());

  const contextTitles = [
    `Notre intervention ${serviceId} sur ${zoneName}, en détail`,
    `Le contexte de ${zoneName} et notre approche ${serviceId}`,
    `Pourquoi DRM Sète intervient si bien à ${zoneName}`,
    `${zoneName} et le ${serviceId} : ce qu'il faut savoir`,
  ];
  const contextTitle = contextTitles[seed % contextTitles.length];

  return { paragraphs, contextTitle };
}

export function getZoneLocalData(zoneSlug: string) {
  return zoneLocalData[zoneSlug];
}
