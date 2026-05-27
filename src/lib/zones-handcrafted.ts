// Contenu HANDCRAFTED zone-spécifique pour les 10 zones principales du Bassin de Thau.
// Chaque entrée fournit un intro override commun aux 7 services (mais zone-specific)
// + 1 SEO block service-specific zone-aware + 2 FAQs zone-aware + 1 narrative 3 paragraphes.
//
// Objectif anti-duplicate : faire dominer le contenu vraiment local (rues, landmarks,
// commerces réels) dans la composition de chaque page, sur les 10 zones principales
// (les 17 zones secondaires utilisent la rotation des banks de service-content.ts).

export interface ZoneHandcraftedEntry {
  intros: Record<string, string>;
  seoBlocks: Record<string, { title: string; body: string }>;
  faqs: Record<string, Array<{ q: string; a: string }>>;
  narrative?: {
    contextTitle: string;
    paragraphs: string[];
  };
}

// Helper : un intro de base partagé entre services pour une zone, mais réécrit par service
// pour rester naturel. Chaque intro fait ~120-180 mots et inclut au moins 2 rues, 2 landmarks,
// 1 quartier, 2 commerces réels de la zone.

export const zonesHandcrafted: Record<string, ZoneHandcraftedEntry> = {

  // ============================================================================
  // 1. SETE-CENTRE — coeur du port, canal Royal, Halles, restaurants de poissons
  // ============================================================================
  "sete-centre": {
    intros: {
      depannage: "Sète Centre concentre la plus forte densité de commerces du Bassin de Thau : restaurants de poissons du Quai de la Marine, bars à tapas de la Rue Alsace-Lorraine, boutiques de mode de la Grand'Rue Mario Roustan, tabacs-presse de la Rue Gambetta. Quand un rideau métallique tombe en panne ici, à deux pas du Canal Royal et des Halles de Sète, DRM Sète arrive en moins de 25 minutes — notre véhicule d'astreinte est posté à proximité du Pont des Belges. Les modèles installés sur le Centre sont connus de nos techniciens : tubulaires Simu T5 sur les boulangeries, ACM 76 sur les commerces de luxe de la Bourse, grilles cobra sur les parkings souterrains du Théâtre Molière.",
      installation: "Installer un rideau métallique à Sète Centre demande de composer avec le bâti historique : façades en pierre du Quai du Maréchal de Lattre de Tassigny, linteaux étroits Rue Honoré Euzet, vitrines sur trumeaux Rue Paul Valéry. DRM Sète métreurise sous 48h, propose une pose en applique extérieure ou en linteau encastré selon la configuration, et adapte le coffre pour respecter le règlement d'urbanisme du secteur sauvegardé du Canal Royal. Les restaurants de poissons des Halles, les bars à tapas autour du Pont de la Civette et les tabacs-presse de la Grand'Rue bénéficient d'un planning de pose tôt matin (6h-9h) pour ne pas perturber l'activité touristique du jour.",
      reparation: "Réparer un rideau métallique à Sète Centre, c'est intervenir dans le coeur économique de la ville : 800 mètres de Quai du Maréchal de Lattre de Tassigny, 600 mètres de Grand'Rue Mario Roustan, les Halles de Sète et leurs allées commerçantes. DRM Sète connaît chaque devanture du secteur, qu'il s'agisse d'un restaurant de poissons avec un rideau micro-perforé 4 mètres, d'une bijouterie de la Rue Alsace-Lorraine avec lame A2P ou d'un tabac-presse de la Rue Gambetta avec moteur ACM. Notre stock embarqué couvre 95% des pièces critiques rencontrées dans le centre historique, ce qui évite un retour atelier.",
      motorisation: "Motoriser un rideau métallique à Sète Centre transforme le quotidien des commerçants du Canal Royal et du Pont des Belges : plus de chaîne à tirer chaque matin avant le marché des Halles, plus d'effort répété pour les boulangers de la Rue Paul Valéry qui ouvrent à 6h. DRM Sète propose à Sète Centre les trois niveaux de motorisation : entrée de gamme Simu T5 pour les petits commerces de la Rue Honoré Euzet, intermédiaire Somfy RS100 silencieuse pour les restaurants gastronomiques du Quai de la Marine, premium ACM 76 pour les bijouteries A2P et magasins de luxe de la Grand'Rue Mario Roustan.",
      deblocage: "Un rideau métallique bloqué à Sète Centre, c'est une urgence absolue : votre commerce expose son fond sur l'une des artères les plus passantes du Bassin de Thau, entre les Halles, le Théâtre Molière et le Pont de la Civette. DRM Sète intervient en moins de 25 minutes — notre véhicule d'astreinte est positionné à proximité immédiate du secteur sauvegardé. Le déblocage s'effectue sans casse dans 8 cas sur 10, que vous soyez sur le Quai de la Marine, dans la Rue Alsace-Lorraine ou sur la Grand'Rue Mario Roustan. La manivelle de secours, le kit décoinçage came et la perceuse à choc nous accompagnent en permanence.",
      entretien: "L'entretien préventif à Sète Centre est plus stratégique qu'ailleurs : les commerces du Canal Royal et du Quai du Maréchal de Lattre de Tassigny sont en première ligne face à l'air iodé de l'étang. Les rideaux des restaurants de poissons, des bars à tapas de la Rue Alsace-Lorraine et des tabacs-presse de la Rue Gambetta s'oxydent en 12-18 mois sans intervention. DRM Sète propose à Sète Centre des contrats sur-mesure avec protocole maritime : graisse lithium anti-saumure sur l'axe, lanoline marine sur les ressorts, joints EPDM remplacés tous les 24 mois. Visite planifiée tôt matin avant l'ouverture des Halles.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Sète Centre, c'est répondre à des contraintes esthétiques fortes : secteur sauvegardé autour du Canal Royal, façades classées Rue Paul Valéry, intégration coffre encastré pour les boutiques de luxe de la Grand'Rue Mario Roustan. DRM Sète conçoit dans son atelier français des rideaux aux cotes exactes du bâti sétois historique, avec finition Qualicoat anthracite, bordeaux ou sur-mesure pour matcher l'enseigne. Les bijouteries de la Rue Alsace-Lorraine bénéficient d'une option A2P niveau 2, les restaurants de poissons du Quai de la Marine d'un acier galvanisé Z275 spécifique embruns.",
    },
    seoBlocks: {
      depannage: {
        title: "Notre couverture quotidienne du centre de Sète",
        body: "Notre véhicule d'astreinte sillonne quotidiennement le coeur de Sète : <strong>Grand'Rue Mario Roustan</strong> dans toute sa longueur, <strong>Rue Alsace-Lorraine</strong>, <strong>Quai du Maréchal de Lattre de Tassigny</strong>, <strong>Rue Gambetta</strong>, <strong>Rue Paul Valéry</strong>, <strong>Rue Honoré Euzet</strong>. Nous connaissons les boulangeries qui ouvrent à 5h45 près des Halles, les restaurants de poissons qui ferment tard sur le Quai de la Marine, les bars à tapas qui ouvrent en fin d'après-midi autour du Pont de la Civette. Cette présence permanente sur Sète Centre permet une arrivée moyenne en 22 minutes sur les pannes urgentes, jusqu'à 18 minutes pour les commerces situés à moins de 400 mètres du Pont des Belges. Le secteur sauvegardé du Canal Royal et le quartier de la Bourse sont en zone rouge de notre planning d'astreinte : priorité absolue, équipe la plus expérimentée mobilisée.",
      },
      installation: {
        title: "Installer un rideau dans le secteur sauvegardé du Canal Royal",
        body: "Le centre historique de Sète est un secteur sauvegardé : toute installation de rideau métallique <strong>Grand'Rue Mario Roustan</strong>, <strong>Rue Alsace-Lorraine</strong> ou autour du <strong>Canal Royal</strong> doit composer avec le règlement d'urbanisme et l'avis de l'architecte des Bâtiments de France pour certaines façades classées. DRM Sète métreurise avec ces contraintes en tête : coffre encastré dans le linteau pour préserver la façade en pierre du Quai du Maréchal de Lattre de Tassigny, finition RAL bordeaux ou anthracite mate Qualicoat pour matcher les devantures voisines, lames pleines acier galvanisé Z275 spécifique embruns pour les commerces du Quai de la Marine. Nos installations passées sur la Rue Paul Valéry et la Rue Honoré Euzet bénéficient d'une coordination avec les corps de métier locaux : maçon habitué à la pierre de Sète, électricien familier des tableaux anciens, vitrier pour les vitrines avec trumeau.",
      },
      reparation: {
        title: "Notre fichier technique des commerces de Sète Centre",
        body: "DRM Sète tient un fichier technique des commerces de <strong>Sète Centre</strong> que nous avons déjà dépannés ou installés : modèle de rideau, type de moteur, dimensions du tablier, numéro de série, marque de la serrure. Cela couvre désormais plus de 300 commerces sur la <strong>Grand'Rue Mario Roustan</strong>, la <strong>Rue Alsace-Lorraine</strong>, le <strong>Quai du Maréchal de Lattre de Tassigny</strong>, autour des <strong>Halles de Sète</strong>, du <strong>Théâtre Molière</strong>, du <strong>Pont des Belges</strong>, et dans les rues adjacentes comme la <strong>Rue Gambetta</strong> et la <strong>Rue Honoré Euzet</strong>. Quand vous nous appelez pour une réparation à Sète Centre, ce fichier nous permet d'arriver avec la bonne pièce dès le premier passage dans 9 cas sur 10 — moteur ACM 76 ou tubulaire Simu T5 selon votre installation, ressort calibré, cylindre profil européen au bon entraxe. Cette mémoire technique distingue un vrai partenaire local d'un dépanneur générique.",
      },
      motorisation: {
        title: "Motorisation silencieuse pour le coeur de Sète",
        body: "Sète Centre est un secteur dense en restaurants gastronomiques et commerces de proximité où le bruit d'un rideau qui ferme se remarque : <strong>Rue Paul Valéry</strong>, autour du <strong>Théâtre Molière</strong>, le long du <strong>Canal Royal</strong>. DRM Sète propose pour ces commerces une motorisation Somfy RS100 avec niveau acoustique inférieur à 55 dB, idéale pour les bars à tapas qui ferment à 1h du matin et les restaurants de poissons qui ouvrent à 11h pile. Pour les commerces lourds (bijouteries de la <strong>Rue Alsace-Lorraine</strong>, banques de la <strong>Grand'Rue Mario Roustan</strong>), le moteur central ACM 76 reste la référence : silencieux, fiable sur 1200 kg de tablier acier, garantie 5 ans constructeur. Module connecté TaHoma Somfy ou Nice MyNice pour piloter à distance — utile pour les enseignes multi-sites Sète/Frontignan/Mèze qui ont besoin d'une gestion centralisée.",
      },
      deblocage: {
        title: "Astreinte prioritaire pour Sète Centre",
        body: "Le coeur de Sète est notre <strong>zone rouge</strong> d'astreinte : un rideau métallique bloqué <strong>Grand'Rue Mario Roustan</strong>, autour du <strong>Canal Royal</strong>, sur le <strong>Quai du Maréchal de Lattre de Tassigny</strong> ou aux abords des <strong>Halles de Sète</strong> mobilise immédiatement notre véhicule le plus proche. Délai moyen d'arrivée : 20 à 25 minutes selon l'heure. Nos techniciens connaissent les zones piétonnes saisonnières (<strong>Rue Paul Valéry</strong> en été), les difficultés de stationnement autour du <strong>Théâtre Molière</strong>, les sens de circulation autour du <strong>Pont des Belges</strong> et du <strong>Pont de la Civette</strong>. Cette connaissance fine du terrain gagne 5 à 10 minutes sur chaque intervention urgente. Quand un bar à tapas reste bloqué à 23h un samedi sur la Rue Alsace-Lorraine, nous arrivons avant la fermeture du dernier service.",
      },
      entretien: {
        title: "Protocole maritime renforcé sur le Quai de Sète",
        body: "Les commerces de Sète Centre exposés au Canal Royal et au Quai de la Marine subissent en moyenne <strong>1,5x plus de corrosion saline</strong> que ceux situés à 500 mètres à l'intérieur des terres. DRM Sète déploie sur <strong>Grand'Rue Mario Roustan</strong>, <strong>Quai du Maréchal de Lattre de Tassigny</strong>, autour des <strong>Halles</strong> et du <strong>Pont des Belges</strong> un protocole d'entretien renforcé : graisse lithium-calcium anti-saumure tous les 6 mois (au lieu de 12 mois en zone protégée), lanoline marine sur les ressorts, joints EPDM remplacés tous les 18-24 mois (au lieu de 30 mois standard). Le contrat Confort de DRM Sète pour les commerces du centre (boulangeries Rue Paul Valéry, restaurants Quai de la Marine, tabacs Rue Gambetta) inclut deux visites annuelles synchronisées sur les saisons : avril avant la haute saison touristique, octobre après le pic d'été.",
      },
      fabrication: {
        title: "Fabriquer pour le bâti historique de Sète Centre",
        body: "Fabriquer un rideau métallique sur-mesure pour Sète Centre, c'est composer avec le secteur sauvegardé : largeur précise du linteau souvent atypique (<strong>Grand'Rue Mario Roustan</strong> a des devantures de 2,80 à 4,20 m), hauteur sous linteau variable (<strong>Rue Honoré Euzet</strong> avec ses 2,30 m bas, <strong>Quai du Maréchal de Lattre de Tassigny</strong> avec ses 3 m hauts), exigences esthétiques de l'architecte des Bâtiments de France pour les façades visibles depuis le <strong>Canal Royal</strong>. DRM Sète conçoit dans son atelier français des rideaux qui respectent ces contraintes : coffre encastré sur 90% des chantiers, finition thermolaquée RAL anthracite ou bordeaux, lames pleines acier Z275 avec traitement embruns renforcé. Pour les bijouteries de la <strong>Rue Alsace-Lorraine</strong>, option A2P niveau 2 validée par les principales assurances pro (AXA, Allianz, MMA Pro).",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel est le délai de dépannage rideau métallique à Sète Centre ?", a: "DRM Sète arrive en moyenne en 20 à 25 minutes sur Sète Centre. Notre véhicule d'astreinte est posté à proximité du Pont des Belges, ce qui couvre Grand'Rue Mario Roustan, Rue Alsace-Lorraine, Quai du Maréchal de Lattre de Tassigny, autour des Halles de Sète et du Théâtre Molière en moins de 25 minutes. Pour les commerces en zone rouge (Canal Royal, secteur sauvegardé), le délai descend à 18-22 minutes la nuit et le weekend." },
        { q: "DRM Sète intervient-il sur les bijouteries A2P de la Rue Alsace-Lorraine ?", a: "Oui, DRM Sète est formé sur les rideaux lame pleine A2P niveau 2 installés dans les bijouteries de la Rue Alsace-Lorraine, de la Grand'Rue Mario Roustan et de la Rue Paul Valéry. Nous tenons en stock les pièces compatibles : cylindres profil européen anti-snap, ressorts calibrés pour tabliers lourds, condensateurs ACM 76. Intervention sous astreinte avec respect strict du protocole anti-effraction (présence de deux techniciens si requis par votre assurance)." },
      ],
      installation: [
        { q: "Combien coûte une installation rideau métallique Grand'Rue Mario Roustan ?", a: "Une installation Grand'Rue Mario Roustan démarre à 2 800 € HT pour un rideau lame pleine acier 3,5 m × 2,8 m motorisé Simu T5 pose comprise. Pour les bijouteries et magasins de luxe, l'option A2P niveau 2 ajoute environ 800 €. La pose en linteau encastré (souvent requise par le règlement d'urbanisme du secteur sauvegardé) ne génère pas de surcoût si le bâti le permet — notre métreur évalue lors de la visite gratuite sous 48h." },
        { q: "Faut-il l'accord des Bâtiments de France pour installer un rideau à Sète Centre ?", a: "Pour les façades classées ou situées dans le périmètre de protection du secteur sauvegardé du Canal Royal et de la Grand'Rue Mario Roustan, oui. DRM Sète gère la demande administrative pour vous : dossier graphique avec photo de la façade, plan d'installation, choix coffre encastré et RAL compatible patrimoine. Délai d'instruction : 1 à 2 mois selon la mairie de Sète. Nous adaptons le planning de fabrication en conséquence." },
      ],
      reparation: [
        { q: "Combien coûte une réparation moteur sur Quai du Maréchal de Lattre de Tassigny ?", a: "Sur le Quai du Maréchal de Lattre de Tassigny, les commerces ont souvent des moteurs ACM 76 ou tubulaires Simu T5. Le remplacement condensateur (cause la plus fréquente des pannes silencieuses) coûte 90 € TTC main-d'œuvre comprise. Le remplacement moteur ACM 76 complet démarre à 580 € TTC. Le remplacement axe tubulaire (en cas d'axe cintré par un choc) démarre à 420 € TTC. Devis transparent avant tout démontage." },
        { q: "DRM Sète répare-t-il les rideaux des restaurants de poissons des Halles ?", a: "Oui, nous intervenons régulièrement sur les rideaux des restaurants des Halles de Sète et du Quai de la Marine. Ces commerces ont des spécificités : air marin direct, ouverture tôt le matin (5h-6h), exposition aux écailles et résidus organiques qui accélèrent la corrosion des coulisses. DRM Sète applique un protocole de nettoyage renforcé et un traitement anti-corrosion spécifique sur les pièces remplacées pour prolonger la durée de vie." },
      ],
      motorisation: [
        { q: "Quel moteur choisir pour un commerce de la Rue Paul Valéry ?", a: "La Rue Paul Valéry concentre des commerces de moyenne taille : boulangeries, restaurants, boutiques de mode. Pour un tablier jusqu'à 350 kg, DRM Sète recommande un moteur tubulaire Somfy RS100 ou Simu T5 : silencieux (<55 dB), fiable, garantie constructeur 5 ans. Pour les commerces plus lourds (lame pleine acier, devanture large 4 m+), un moteur central ACM 76 est plus adapté. Devis comparatif sur place pour choisir selon votre usage réel." },
        { q: "Peut-on installer un module smartphone pour un commerce Grand'Rue ?", a: "Oui, DRM Sète installe des modules connectés Somfy TaHoma ou Nice MyNice sur les motorisations des commerces de la Grand'Rue Mario Roustan. Idéal pour les enseignes qui ont plusieurs points de vente sur le Bassin de Thau (Sète, Frontignan, Mèze) : ouverture/fermeture centralisée depuis smartphone, programmation horaire pour les jours fériés, alertes en cas de tentative d'effraction. Paramétrage et formation incluses à la pose." },
      ],
      deblocage: [
        { q: "Que faire si mon rideau Grand'Rue Mario Roustan est bloqué en pleine fête de la Saint-Louis ?", a: "Pendant la fête de la Saint-Louis (août) à Sète, l'accès véhicule au centre est restreint. DRM Sète a un protocole spécial pour cette période : véhicule de plus petit gabarit, technicien à pied avec malette si nécessaire, arrivée en 30-40 minutes maximum sur la Grand'Rue Mario Roustan ou autour du Canal Royal. Aucune majoration appliquée. Notre astreinte est renforcée pendant les fêtes locales (Saint-Louis, joutes nautiques)." },
        { q: "Comment éviter qu'un rideau se bloque sur le Quai de la Marine ?", a: "Sur le Quai de la Marine, l'exposition à l'air iodé du Canal Royal et de l'étang de Thau accélère la corrosion saline qui est la cause numéro un des blocages. DRM Sète recommande un entretien semestriel renforcé (deux visites par an) avec graisse lithium anti-saumure sur l'axe et lanoline sur les ressorts. Sur 5 ans, cette prévention divise par 3 la probabilité de blocage urgent. Contrat à partir de 320 € HT/an pour un commerce moyen." },
      ],
      entretien: [
        { q: "Pourquoi un contrat d'entretien renforcé pour Sète Centre ?", a: "Les commerces de Sète Centre exposés au Canal Royal et au Quai de la Marine subissent 1,5x plus de corrosion saline qu'à 500 mètres à l'intérieur des terres. Sans entretien, un rideau standard perd 40% de durée de vie en bord de port. DRM Sète déploie un protocole renforcé : graisses lithium tous les 6 mois, joints EPDM remplacés tous les 18-24 mois (au lieu de 30 mois standard). Contrat Confort à partir de 380 € HT/an pour les commerces Grand'Rue Mario Roustan, Quai du Maréchal de Lattre de Tassigny." },
        { q: "Quelle fréquence de visite pour une boulangerie Rue Paul Valéry ?", a: "Une boulangerie Rue Paul Valéry ouvre 7j/7 dès 5h45, ce qui implique 700-730 cycles d'ouverture/fermeture par an. À ce rythme intensif, DRM Sète recommande une formule Confort (2 visites/an : avril et octobre) ou Sérénité (3 visites/an si fort exposition embruns). Le moteur tubulaire est contrôlé en intensité absorbée, les ressorts en tension, les coulisses en alignement. Rapport écrit après chaque visite, devis chiffré si pièce à surveiller." },
      ],
      fabrication: [
        { q: "Quel délai pour fabriquer un rideau pour la Grand'Rue Mario Roustan ?", a: "Le délai standard de fabrication pour la Grand'Rue Mario Roustan est de 7 à 12 jours ouvrés en raison des exigences esthétiques du secteur sauvegardé (RAL spécifique, coffre encastré, lames acier Z275 traitement renforcé). En urgence (effraction, reprise de fonds de commerce), DRM Sète peut activer une fabrication express en 4-5 jours, pose 1-2 jours après livraison. Devis transparent avec date d'enlèvement précisée à la signature." },
        { q: "Peut-on fabriquer un coffre encastré pour une vitrine Quai de la Marine ?", a: "Oui, DRM Sète fabrique régulièrement des coffres encastrés pour les vitrines du Quai de la Marine. Configuration la plus fréquente : coffre 200×220 mm dissimulé dans le linteau, tablier acier galvanisé Z275 spécifique embruns thermolaqué RAL bordeaux ou anthracite, lame finale renforcée avec serrure cylindre profil européen. Délai fabrication 10-12 jours en raison de la prise de mesure précise du linteau ancien et de la finition spécifique." },
      ],
    },
    narrative: {
      contextTitle: "Sète Centre : intervention au coeur du port et du Canal Royal",
      paragraphs: [
        "Sète Centre est le poumon économique du Bassin de Thau : 1,2 km de Grand'Rue Mario Roustan, 800 mètres de Quai du Maréchal de Lattre de Tassigny, les Halles de Sète et leurs allées commerçantes, le Canal Royal et ses restaurants de poissons, le quartier de la Bourse et ses banques. DRM Sète a recensé plus de 300 commerces actifs dans ce périmètre, chacun avec son équipement rideau métallique propre. Notre fichier technique permet d'arriver avec la bonne pièce dès le premier passage dans 9 cas sur 10.",
        "Le secteur sauvegardé qui entoure le Canal Royal impose des contraintes spécifiques : façades classées Rue Paul Valéry, règlement d'urbanisme strict Grand'Rue Mario Roustan, avis de l'architecte des Bâtiments de France pour certaines installations. DRM Sète a appris à composer avec ces contraintes : coffre encastré dans 90% des chantiers, finition thermolaquée RAL anthracite ou bordeaux qui matche les devantures voisines, lames acier galvanisé Z275 spécifique embruns pour les commerces du Quai de la Marine en première ligne face à l'air iodé.",
        "L'astreinte sur Sète Centre est notre zone rouge : véhicule positionné en permanence à proximité du Pont des Belges, délai moyen d'arrivée 22 minutes, technicien le plus expérimenté mobilisé sur les urgences nocturnes du Quai du Maréchal de Lattre de Tassigny et de la Rue Alsace-Lorraine. Pendant les fêtes locales (Saint-Louis en août, joutes nautiques), notre astreinte est renforcée avec un véhicule plus petit adapté aux restrictions de circulation. Aucune majoration weekend ou jour férié — c'est la règle DRM Sète appliquée uniformément sur tout le centre.",
      ],
    },
  },

  // ============================================================================
  // MEZE — capitale ostréicole de l'étang de Thau, 12 000 hab
  // ============================================================================
  "meze": {
    intros: {
      depannage: "Mèze est le premier port conchylicole de l'étang de Thau : 8 000 tonnes d'huîtres et de moules produites chaque année, des dizaines de mareyeurs, restaurants de poissons et caves vinicoles concentrés autour du Port de Mèze, de la Rue Marcel Pagnol et du Quai des Moulins. Quand un rideau métallique tombe en panne ici, DRM Sète arrive en 30-35 minutes — notre véhicule remonte la D613 puis traverse le centre médiéval Saint-Hilaire. Les commerces de Mèze (restaurants de poissons et fruits de mer, caves Picpoul AOP, boulangeries, boutiques saisonnières en haute saison) ont des horaires métier précis qui guident notre planning d'intervention.",
      installation: "Installer un rideau métallique à Mèze, c'est répondre aux contraintes d'un port conchylicole en activité : exposition directe à l'air iodé de l'étang de Thau, climat chargé d'aérosols salins toute l'année, devantures alignées le long du Quai des Moulins et de la Rue Massaloup. DRM Sète recommande pour Mèze l'acier galvanisé Z275 thermolaqué renforcé ou l'aluminium marin selon l'exposition exacte. Notre métreur passe gratuitement sous 48h, propose une configuration adaptée au bâti médiéval Saint-Hilaire ou aux constructions récentes du quartier de la Plage du Taurus, et garantit une pose 1-2 jours.",
      reparation: "Réparer un rideau métallique à Mèze, c'est intervenir dans la capitale ostréicole de l'étang : 800 mètres de Rue Marcel Pagnol, le Quai des Moulins et son alignement de restaurants, la Rue Massaloup et ses caves Picpoul. DRM Sète a un fichier technique des commerces de Mèze : moteurs ACM des mareyeurs, tubulaires Simu des boulangeries, grilles cobra des entrepôts ostréicoles. Stock embarqué adapté aux pannes typiques du port (corrosion saline avancée, ressorts oxydés en 8-10 ans, joints EPDM dégradés rapidement). Diagnostic gratuit, réparation souvent en demi-journée pour 9 cas sur 10.",
      motorisation: "Motoriser un rideau métallique à Mèze, c'est un investissement courant des mareyeurs et des restaurants du Port de Mèze. DRM Sète installe des moteurs Somfy RS100 silencieux (<55 dB) pour les restaurants de la Rue Marcel Pagnol qui ferment tard, des moteurs centraux ACM 76 pour les commerces lourds du Quai des Moulins, et des modules connectés TaHoma pour les enseignes multi-sites Mèze/Sète/Marseillan. Pose en demi-journée, télécommande RTS apprise, formation utilisateur, attestation EN 12453 fournie. Garantie 2 à 5 ans constructeur.",
      deblocage: "Un rideau métallique bloqué à Mèze, c'est une urgence en bord d'étang : les restaurants du Quai des Moulins doivent ouvrir pour le service du midi, les mareyeurs du Port de Mèze ne peuvent pas attendre, les boulangeries de la Rue Marcel Pagnol démarrent à 6h. DRM Sète arrive en 30-35 minutes, débloque sans casse dans 8 cas sur 10 (manivelle de secours, kit décoinçage came, perceuse à choc). Astreinte 24h/24, dimanches et jours fériés inclus, sans majoration — c'est la règle DRM Sète appliquée aussi à Mèze qu'à Sète Centre.",
      entretien: "L'entretien préventif à Mèze est particulièrement stratégique : l'exposition à l'air iodé de l'étang de Thau et la proximité immédiate du Port de Mèze accélèrent la corrosion saline des mécanismes. Sans intervention, un rideau standard perd 40-50% de durée de vie en bord de port conchylicole. DRM Sète déploie sur la Rue Marcel Pagnol, le Quai des Moulins et la Rue Massaloup un protocole renforcé : graisses lithium-calcium tous les 6 mois (au lieu de 12 mois standard), joints EPDM remplacés tous les 18-24 mois. Contrat Confort à partir de 380 € HT/an pour les commerces du centre-ville.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Mèze, c'est dimensionner pour 15-20 ans malgré l'exposition agressive du port conchylicole. DRM Sète recommande pour Mèze l'aluminium marin (durée 18-22 ans, garantie 3 ans) ou l'acier Z275 traité embruns renforcé. Finition Qualicoat anthracite ou bordeaux pour matcher le bâti médiéval Saint-Hilaire, ou RAL sur-mesure pour les enseignes des restaurants du Quai des Moulins. Fabrication en atelier français 5-10 jours, pose 1-2 jours, attestation TVA 10% et garantie 2 ans pièces.",
    },
    seoBlocks: {
      depannage: {
        title: "Notre couverture du port conchylicole de Mèze",
        body: "DRM Sète couvre <strong>Mèze</strong> et son périmètre depuis Sète via la D613 ou la D2. Notre véhicule d'astreinte connaît le tissu commerçant local : <strong>Rue Marcel Pagnol</strong> et ses restaurants, <strong>Rue Massaloup</strong> et ses caves Picpoul, <strong>Quai des Moulins</strong> et ses commerces touristiques saisonniers, abords des <strong>Halles aux poissons</strong> et du <strong>Port de Mèze</strong>. Délai moyen d'arrivée : 30 à 35 minutes hors haute saison touristique. En juillet-août, le pic de fréquentation autour du port et de la Plage du Taurus peut allonger le délai à 35-40 minutes — DRM Sète positionne dans ce cas un véhicule dédié au pourtour de l'étang pour limiter l'impact. Stock embarqué adapté aux modèles installés sur le port : ressorts oxydés (8-10 ans à Mèze contre 12-15 ans en zone abritée), joints EPDM marin de remplacement, condensateurs ACM, cylindres profil européen anti-snap.",
      },
      installation: {
        title: "Matières adaptées à l'exposition portuaire de Mèze",
        body: "L'air iodé du <strong>Port de Mèze</strong> et de l'<strong>étang de Thau</strong> impose pour Mèze un choix matière spécifique : DRM Sète ne recommande pas l'acier galvanisé standard, mais l'<strong>aluminium marin</strong> (durée 18-22 ans, garantie 3 ans constructeur) ou l'<strong>acier galvanisé Z275 traité embruns renforcé</strong> (durée 15-18 ans). Surcoût initial 20-30%, mais le ROI s'amortit sur 12-15 ans. Pour les commerces du centre médiéval Saint-Hilaire (<strong>Rue Marcel Pagnol</strong>, <strong>Rue Massaloup</strong>), finition thermolaquée Qualicoat anthracite ou bordeaux qui matche le bâti ancien. Pour les commerces touristiques saisonniers du <strong>Quai des Moulins</strong>, finition RAL sur-mesure adaptée à l'enseigne. Pose en applique extérieure ou en linteau encastré selon le règlement d'urbanisme local.",
      },
      reparation: {
        title: "Notre fichier technique des commerces de Mèze",
        body: "DRM Sète tient un fichier technique de plus de 150 commerces de <strong>Mèze</strong> que nous avons dépannés ou installés : modèle, moteur, dimensions, numéro de série, marque de serrure. Cela couvre les restaurants de la <strong>Rue Marcel Pagnol</strong>, les caves de la <strong>Rue Massaloup</strong>, les commerces du <strong>Quai des Moulins</strong>, les boutiques du centre médiéval Saint-Hilaire, les locaux ostréicoles du <strong>Port de Mèze</strong>. Quand vous nous appelez pour une réparation, ce fichier permet d'arriver avec la bonne pièce dès le premier passage dans 9 cas sur 10. Les pannes typiques de Mèze : condensateur ACM HS (cause numéro 1, remplacement 90 €), ressorts oxydés en 8-10 ans (remplacement par paire 320-450 €), joints EPDM dégradés à 18 mois en bord de port (remplacement complet 180-280 €).",
      },
      motorisation: {
        title: "Motorisation pour mareyeurs et restaurants de Mèze",
        body: "Les mareyeurs du <strong>Port de Mèze</strong> ouvrent à 4h30 du matin pour le tri des huîtres ; les restaurants du <strong>Quai des Moulins</strong> ferment à 23h ; les boulangeries de la <strong>Rue Marcel Pagnol</strong> démarrent à 5h45. DRM Sète propose pour ces commerces des motorisations adaptées : <strong>moteur central ACM 76</strong> pour les rideaux lourds des locaux ostréicoles (tabliers acier 500-1200 kg), <strong>tubulaire Somfy RS100 silencieux</strong> pour les restaurants gastronomiques (acoustique <55 dB qui ne dérange ni clients ni voisinage), <strong>module connecté TaHoma Somfy</strong> pour les enseignes multi-sites Mèze/Sète/Marseillan avec gestion centralisée depuis smartphone. Pose en demi-journée, télécommande RTS multi-canaux, formation incluse, attestation EN 12453 délivrée.",
      },
      deblocage: {
        title: "Astreinte 24h/24 pour le port conchylicole de Mèze",
        body: "Notre astreinte 24h/24 couvre <strong>Mèze</strong> 7 jours sur 7, dimanches et jours fériés inclus, <strong>sans majoration</strong>. Un rideau bloqué à 4h30 du matin chez un mareyeur du <strong>Port de Mèze</strong> mobilise immédiatement le véhicule le plus proche (généralement positionné entre Sète et Mèze pour minimiser le délai de couverture du Bassin de Thau). Délai moyen 30 minutes en saison creuse, 35 minutes en haute saison touristique. Outillage complet : manivelle de secours, perceuse à choc, kit décoinçage came, jeu de clés cylindre passe — 8 déblocages sur 10 sans aucune pièce changée. Pour les urgences avant le service du midi sur la <strong>Rue Marcel Pagnol</strong>, priorité absolue : le commerce rouvre dans l'heure qui suit l'appel.",
      },
      entretien: {
        title: "Protocole renforcé pour le bord du Port de Mèze",
        body: "Les commerces de <strong>Mèze</strong> exposés au <strong>Port</strong> et au <strong>Quai des Moulins</strong> subissent une corrosion saline 1,5x plus rapide qu'en zone abritée. DRM Sète a calibré un protocole d'entretien renforcé : <strong>graisses lithium-calcium anti-saumure tous les 6 mois</strong> (au lieu de 12 mois en zone protégée), <strong>lanoline marine sur ressorts tous les 8 mois</strong>, <strong>joints EPDM remplacés tous les 18-24 mois</strong> (au lieu de 30 mois standard). Pour les commerces du centre médiéval Saint-Hilaire (<strong>Rue Marcel Pagnol</strong>, <strong>Rue Massaloup</strong>), formule Confort à partir de 380 € HT/an (2 visites annuelles, avril + octobre). Pour les commerces directement en bord de port, formule Sérénité à partir de 680 € HT/an (3 visites + 2h curatif inclus).",
      },
      fabrication: {
        title: "Fabrication aluminium marin pour Mèze",
        body: "Pour les commerces de <strong>Mèze</strong>, DRM Sète recommande la fabrication en <strong>aluminium marin</strong> plutôt qu'en acier galvanisé standard. Pourquoi ? L'exposition portuaire constante (<strong>Port de Mèze</strong>, <strong>étang de Thau</strong>, <strong>Quai des Moulins</strong>) divise par 2 la durée de vie d'un acier standard, mais maintient celle d'un aluminium marin (18-22 ans). Surcoût initial 25-30%, ROI amorti sur 12-15 ans. Finition Qualicoat haute résistance UV qui ne ternit pas malgré le plein soleil méditerranéen. Pour les mareyeurs et restaurants de la <strong>Rue Marcel Pagnol</strong>, option <strong>lame finale renforcée</strong> avec serrure cylindre profil européen anti-snap. Délai fabrication 8-12 jours, pose 1-2 jours, garantie 2 ans pièces + 1 an main-d'œuvre.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel est le délai de dépannage à Mèze ?", a: "DRM Sète arrive à Mèze en moyenne en 30 à 35 minutes depuis notre base de Sète. Le trajet via la D613 ou la D2 nous est familier. En haute saison touristique (juillet-août), nous positionnons un véhicule dédié au pourtour de l'étang de Thau pour maintenir le délai sous 35 minutes même les jours de pic." },
        { q: "DRM Sète intervient-il pour les mareyeurs du Port de Mèze ?", a: "Oui, DRM Sète intervient régulièrement pour les mareyeurs du Port de Mèze, qui ouvrent dès 4h30 du matin pour le tri des huîtres. Astreinte 24h/24 sans majoration, intervention prioritaire avant l'ouverture pour ne pas perturber l'activité. Stock embarqué adapté aux rideaux acier lourds des locaux ostréicoles." },
      ],
      installation: [
        { q: "Quel matériau choisir pour installer un rideau à Mèze ?", a: "À Mèze, l'exposition au Port et à l'étang de Thau impose l'aluminium marin (durée 18-22 ans) ou l'acier galvanisé Z275 traité embruns renforcé (durée 15-18 ans). DRM Sète ne recommande pas l'acier galvanisé standard à Mèze : durée de vie divisée par 2 sans entretien. Surcoût initial 20-30% mais ROI amorti sur 12-15 ans." },
        { q: "Combien coûte une installation Rue Marcel Pagnol ?", a: "Une installation Rue Marcel Pagnol démarre à 2 800 € HT pour un rideau aluminium marin 3,5 m × 2,8 m motorisé Simu T5, pose comprise. Pour les restaurants gastronomiques de la rue, option moteur Somfy RS100 silencieux. Pour les caves Picpoul, lame pleine acier galvanisé Z275 anti-effraction." },
      ],
      reparation: [
        { q: "Pourquoi les rideaux du Port de Mèze tombent-ils si souvent en panne ?", a: "L'exposition portuaire continue (sel, embruns, humidité) divise par 2 la durée de vie d'un rideau acier standard à Mèze : axes oxydés en 8-12 ans, ressorts fatigués en 7-10 ans, joints EPDM dégradés en 18 mois. DRM Sète recommande un entretien semestriel renforcé (graisses tous les 6 mois) pour limiter ces pannes prématurées et prolonger la durée de vie de l'équipement de 5-8 ans." },
        { q: "Combien coûte une réparation moteur à Mèze ?", a: "Le remplacement condensateur ACM 76 (panne numéro 1) coûte 90 € main-d'œuvre comprise à Mèze. Le remplacement moteur ACM complet démarre à 580 € TTC. Le remplacement axe tubulaire (en cas de cintrage par choc) démarre à 420 € TTC. Devis transparent avant tout démontage, garantie 2 ans pièces constructeur." },
      ],
      motorisation: [
        { q: "Quel moteur choisir pour un mareyeur du Port de Mèze ?", a: "Pour un mareyeur du Port de Mèze avec rideau acier lourd (500-1200 kg), DRM Sète recommande le moteur central ACM 76 : couple adapté, fiable sur tabliers lourds, garantie 5 ans constructeur. Budget 1 500 à 2 500 € HT pose comprise. Pour les restaurants avec rideau plus léger, tubulaire Somfy RS100 silencieux : 1 100 à 1 400 € HT." },
        { q: "Peut-on piloter un rideau de Mèze depuis Sète ?", a: "Oui, DRM Sète installe à Mèze des modules connectés Somfy TaHoma ou Nice MyNice qui permettent un pilotage à distance via smartphone (iOS/Android). Idéal pour les enseignes multi-sites Mèze/Sète/Marseillan qui gèrent plusieurs points de vente. Paramétrage et formation inclus à la pose, garantie 2 ans pièces module." },
      ],
      deblocage: [
        { q: "Que faire si mon rideau est bloqué un dimanche à Mèze ?", a: "DRM Sète intervient 24h/24, 7j/7, dimanches et jours fériés inclus, sans majoration. Délai moyen à Mèze 30-35 minutes. Notre technicien arrive avec manivelle de secours, kit décoinçage came et perceuse à choc — 8 déblocages sur 10 sans aucune casse. Forfait à partir de 150 € TTC tout compris." },
        { q: "Mon rideau de cave Picpoul est bloqué fermé Rue Massaloup — combien de temps ?", a: "Sur la Rue Massaloup, DRM Sète arrive en 30-35 minutes. Le déblocage proprement dit prend 15-45 minutes selon la cause (lame sortie de rail, ressort cassé, came désaxée). Dans 9 cas sur 10, votre cave Picpoul rouvre dans l'heure qui suit l'appel. Astreinte 24h/24 sans majoration." },
      ],
      entretien: [
        { q: "Pourquoi un protocole d'entretien renforcé à Mèze ?", a: "Les commerces de Mèze exposés au Port et à l'étang de Thau subissent une corrosion saline 1,5x plus rapide qu'en zone abritée. Sans entretien renforcé, un rideau standard perd 40-50% de durée de vie. DRM Sète recommande des graisses lithium tous les 6 mois (au lieu de 12), joints EPDM remplacés tous les 18-24 mois (au lieu de 30). Contrat Confort à partir de 380 € HT/an pour le centre-ville de Mèze." },
        { q: "Quelle formule d'entretien pour un restaurant du Quai des Moulins ?", a: "Pour un restaurant du Quai des Moulins (exposition directe à l'étang de Thau, cycles intensifs en saison), DRM Sète recommande la formule Sérénité (3 visites/an + 2h curatif inclus) à partir de 680 € HT/an. Visite en avril avant la haute saison, juillet en plein été, octobre après fermeture saisonnière. Tarif dégressif si plusieurs commerces sous contrat." },
      ],
      fabrication: [
        { q: "Faut-il commander un rideau aluminium marin pour Mèze ?", a: "DRM Sète recommande l'aluminium marin pour Mèze à cause de l'exposition continue au Port et à l'étang de Thau. Durée de vie 18-22 ans (contre 12-15 ans en acier standard), garantie 3 ans constructeur, surcoût initial 25-30%. ROI amorti sur 12-15 ans. Finition Qualicoat haute résistance UV qui ne ternit pas en plein soleil méditerranéen." },
        { q: "Quel délai pour fabriquer un rideau pour le Quai des Moulins ?", a: "Pour un commerce du Quai des Moulins, délai standard fabrication 8-12 jours en aluminium marin (10-12 jours pour une finition RAL sur-mesure adaptée à l'enseigne). Pose 1-2 jours après livraison. En urgence (effraction, sinistre, reprise de fonds), fabrication express 4 heures sur axes/coffres standards, pose sous 5 jours." },
      ],
    },
    narrative: {
      contextTitle: "Mèze : capitale ostréicole de l'étang de Thau",
      paragraphs: [
        "Mèze est le premier port conchylicole de l'étang de Thau : 8 000 tonnes d'huîtres et de moules produites chaque année, des dizaines de mareyeurs concentrés autour du Port de Mèze, plusieurs caves Picpoul de Pinet AOP sur la Rue Massaloup, et un alignement de restaurants de poissons et fruits de mer le long du Quai des Moulins. La commune compte 12 000 habitants permanents et triple en haute saison touristique. DRM Sète y intervient régulièrement sur les trois axes commerçants principaux : Rue Marcel Pagnol, Rue Massaloup et Quai des Moulins.",
        "L'exposition de Mèze au Port conchylicole et à l'étang de Thau impose une approche technique spécifique : air iodé continu, embruns directs en bord de quai, sel marin agressif sur tous les mécanismes. Cette exposition divise par 2 la durée de vie d'un rideau acier standard sans entretien. DRM Sète recommande pour Mèze l'aluminium marin (durée 18-22 ans) ou l'acier Z275 traité embruns renforcé (durée 15-18 ans). Pour les réparations, stock embarqué adapté : ressorts par paire diamètre 25 et 35 mm, axes acier diam 60-76 mm, condensateurs ACM 6-12 microF, joints EPDM marin de remplacement.",
        "Notre logistique d'intervention sur Mèze est calibrée pour la D613 et la D2 qui relient Sète : véhicule positionné stratégiquement à mi-parcours pour minimiser le délai sur le pourtour de l'étang de Thau. Délai moyen 30 minutes en saison creuse, 35 minutes en haute saison touristique avec un véhicule dédié pendant juillet-août. Astreinte 24h/24 sans majoration, dimanches et jours fériés inclus — c'est essentiel pour les mareyeurs qui ouvrent à 4h30 du matin et pour les restaurants qui doivent absolument ouvrir le service du midi. Formule Sérénité recommandée pour les commerces directement en bord de port.",
      ],
    },
  },

  // ============================================================================
  // 2. MONT-SAINT-CLAIR — résidentiel chic perché, panorama, embruns rapprochés
  // ============================================================================
  "mont-saint-clair": {
    intros: {
      depannage: "Le Mont Saint-Clair domine Sète : villas du Chemin du Pioch, cabinets de professions libérales de l'Avenue du Mont Saint-Clair, petits commerces de proximité Rue Antonin Vivès. Quand un rideau métallique tombe en panne sur les coteaux Saint-Clair, près de la Chapelle Notre-Dame de la Salette ou du panorama Saint-Clair, DRM Sète arrive en 25 à 30 minutes — le trajet par les lacets nous est familier. Le climat marin renforcé en altitude (embruns directs, vent dominant) accélère la corrosion saline : les axes des cabinets de l'Allée Marc Sangnier sont nos clients réguliers. Astreinte 24h/24 sans majoration, comme partout sur le Bassin de Thau.",
      installation: "Installer un rideau métallique au Mont Saint-Clair, c'est répondre à un cahier des charges particulier : résidences pavillonnaires aux abords du panorama Saint-Clair, cabinets libéraux discrets Avenue du Mont Saint-Clair, garages ouvrant sur le Chemin du Pioch. DRM Sète métreurise sous 48h, propose une pose souvent en applique extérieure (linteaux disponibles dans les constructions années 70-90), choisit des lames pleines acier Z275 avec traitement embruns renforcé pour résister à l'exposition directe au vent marin du Théâtre de la Mer et des Pierres Blanches. Finition thermolaquée Qualicoat anthracite ou blanc cassé pour s'intégrer dans le bâti résidentiel chic du quartier.",
      reparation: "Réparer un rideau métallique au Mont Saint-Clair, c'est intervenir sur des installations souvent anciennes (résidences 1970-1995) qui subissent un climat marin sévère : embruns directs depuis le Théâtre de la Mer, vent dominant rafales, ensoleillement intense sur les coteaux Saint-Clair sud. DRM Sète remplace fréquemment ici : ressorts de torsion oxydés (durée de vie raccourcie à 12-15 ans au lieu de 18-20 ans en zone abritée), axes cintrés par fatigue cyclique, joints EPDM dégradés UV+sel. Stock embarqué adapté : ressorts diam. 25 et 35 mm, axes 60 et 70 mm, condensateurs 6 et 8 microF pour les vieux moteurs ACM des cabinets libéraux.",
      motorisation: "Motoriser un rideau métallique au Mont Saint-Clair répond souvent à un confort recherché par les propriétaires des villas du Chemin du Pioch et de l'Avenue du Mont Saint-Clair : plus d'effort manuel sur la sangle ou la chaîne, télécommande RTS pour ouvrir depuis la voiture en arrivant. DRM Sète installe en demi-journée le moteur dans l'axe existant si l'état le permet (axe non cintré, ressorts non fatigués), sinon un kit complet axe+moteur. Pour les cabinets professions libérales Rue Antonin Vivès, un module TaHoma Somfy permet d'ouvrir/fermer à distance entre deux rendez-vous patients. Garantie 2 à 5 ans moteur.",
      deblocage: "Un rideau métallique bloqué au Mont Saint-Clair pose une difficulté logistique : les lacets pour monter, le stationnement parfois étroit Rue Antonin Vivès, le sens unique sur l'Allée Marc Sangnier. DRM Sète planifie l'intervention pour optimiser l'arrivée : véhicule adapté, technicien qui connaît les accès au panorama Saint-Clair et aux Pierres Blanches. Délai moyen 28-32 minutes, parfois 25 minutes en heure creuse. Déblocage sans casse pour les villas du Chemin du Pioch (rideaux de garage souvent) et pour les cabinets libéraux de l'Avenue du Mont Saint-Clair. Astreinte 24h/24 sans majoration, dimanche inclus.",
      entretien: "L'entretien préventif au Mont Saint-Clair est crucial : les villas et cabinets exposés plein vent au panorama Saint-Clair et au Théâtre de la Mer subissent une corrosion saline accélérée par les embruns directs. Sans intervention, un rideau au Mont Saint-Clair perd 30 à 50% de durée de vie par rapport à un équipement situé dans le centre-ville abrité. DRM Sète propose ici une formule Sérénité (3 visites/an) pour les cabinets de professions libérales Avenue du Mont Saint-Clair, ou une formule Confort renforcée pour les villas du Chemin du Pioch. Graisse lithium anti-saumure tous les 4 mois, joints EPDM remplacés tous les 18 mois.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour le Mont Saint-Clair, c'est anticiper les conditions climatiques sévères : embruns directs, vent dominant rafales, ensoleillement plein sud sur les coteaux Saint-Clair. DRM Sète recommande pour ce secteur l'aluminium marin ou l'inox 316L plutôt que l'acier galvanisé standard, avec garantie de durée 25-30 ans. Finition thermolaquée Qualicoat haute résistance UV et air iodé, RAL au choix (anthracite, blanc cassé, bordeaux profond). Pour les villas du Chemin du Pioch, lame pleine renforcée avec serrure cylindre haute sécurité. Délai 8-12 jours fabrication, pose 1-2 jours en horaire ajusté pour ne pas gêner le voisinage.",
    },
    seoBlocks: {
      depannage: {
        title: "Climat marin renforcé sur les coteaux Saint-Clair",
        body: "Le Mont Saint-Clair est en première ligne face au climat marin du Bassin de Thau : embruns directs depuis le <strong>Théâtre de la Mer</strong> et les <strong>Pierres Blanches</strong>, vent dominant rafales jusqu'à 100 km/h en automne, ensoleillement plein sud sur les coteaux Saint-Clair sud. Ces conditions <strong>accélèrent de 30 à 50%</strong> la corrosion saline des mécanismes de rideau métallique : axes oxydés en 12 ans (au lieu de 18-20 en zone abritée), ressorts fatigués en 8-10 ans (au lieu de 12-15), joints EPDM dégradés en 18 mois (au lieu de 30). DRM Sète intervient sur les villas du <strong>Chemin du Pioch</strong>, les cabinets de l'<strong>Avenue du Mont Saint-Clair</strong>, les commerces de proximité de la <strong>Rue Antonin Vivès</strong> avec un stock embarqué adapté à ce vieillissement accéléré : ressorts neufs par paire, axes en stock toutes diamètres, joints EPDM marin de remplacement.",
      },
      installation: {
        title: "Choix matière : aluminium marin pour le Mont Saint-Clair",
        body: "Au Mont Saint-Clair, DRM Sète ne recommande pas l'acier galvanisé standard pour les installations neuves : l'exposition aux embruns directs depuis le <strong>panorama Saint-Clair</strong>, les <strong>Pierres Blanches</strong> et le <strong>Théâtre de la Mer</strong> dégrade le galvanisé en 5-7 ans contre 12-15 ans en zone abritée. Nous proposons à la place <strong>aluminium marin</strong> (durée 18-22 ans, garantie 3 ans constructeur) ou <strong>inox 316L</strong> (durée 25-30 ans, garantie 5 ans). Le surcoût initial est de 25 à 40% mais le ROI s'amortit sur 15 ans. Pour les villas du <strong>Chemin du Pioch</strong> et de l'<strong>Allée Marc Sangnier</strong>, finition thermolaquée Qualicoat haute résistance UV qui ne ternit pas en plein soleil. Les cabinets libéraux du <strong>Mont Saint-Clair sud</strong> apprécient l'esthétique discrète anthracite mat.",
      },
      reparation: {
        title: "Notre stock embarqué pour les pannes du Mont Saint-Clair",
        body: "Sur le Mont Saint-Clair, les pannes que nous rencontrons le plus fréquemment sont liées à la corrosion saline : <strong>ressorts de torsion oxydés</strong> (45% des interventions), <strong>axes cintrés par fatigue cyclique</strong> (20%), <strong>moteurs ACM avec condensateur HS</strong> (15%), <strong>serrures cylindre rouillées</strong> (12%), <strong>joints EPDM dégradés</strong> (8%). DRM Sète embarque dans son véhicule d'astreinte les pièces correspondantes : ressorts neufs par paire diam. 25 et 35 mm, axes acier traité diam. 60/70/76 mm, condensateurs 6/8/12 microF, cylindres profil européen anti-snap, joints EPDM marin. Cette préparation spécifique aux pannes du quartier (<strong>Chemin du Pioch</strong>, <strong>Avenue du Mont Saint-Clair</strong>, <strong>Rue Antonin Vivès</strong>, <strong>Allée Marc Sangnier</strong>) permet 9 réparations sur 10 en un seul passage.",
      },
      motorisation: {
        title: "Motorisation discrète pour résidentiel chic",
        body: "Le Mont Saint-Clair est un quartier résidentiel chic : villas individuelles, cabinets de professions libérales, petits commerces de proximité. DRM Sète propose ici des motorisations <strong>silencieuses et discrètes</strong> : moteur tubulaire Somfy RS100 (niveau acoustique <55 dB) pour les villas du <strong>Chemin du Pioch</strong>, télécommande RTS multi-canaux pour les cabinets de l'<strong>Avenue du Mont Saint-Clair</strong> qui veulent éviter le va-et-vient manuel entre deux patients, module connecté TaHoma Somfy pour piloter depuis smartphone en arrivant en voiture. Aucun bruit qui dérange le voisinage immédiat, intégration esthétique soignée (commande filaire encastrée si demandée), formation complète à l'utilisation et au remplacement de la pile télécommande.",
      },
      deblocage: {
        title: "Logistique d'intervention sur les lacets du Mont Saint-Clair",
        body: "Intervenir au Mont Saint-Clair demande une connaissance fine du terrain : lacets en montée depuis le centre-ville, sens uniques sur l'<strong>Allée Marc Sangnier</strong>, stationnement étroit Rue Antonin Vivès, accès parfois bloqués aux abords du panorama Saint-Clair en haute saison. DRM Sète a optimisé sa logistique pour ce secteur : véhicule de gabarit moyen adapté aux rues étroites, technicien qui connaît tous les accès au quartier, point de stationnement préidentifié sur chaque rue d'intervention. Délai moyen d'arrivée 28-32 minutes (un peu plus long qu'en centre-ville en raison du parcours), mais maintenu sous 30 minutes en heure creuse. Pour les urgences nocturnes ou weekend sur le <strong>Chemin du Pioch</strong> ou autour de la <strong>Chapelle Notre-Dame de la Salette</strong>, notre astreinte mobilise le véhicule disponible le plus proche du Mont.",
      },
      entretien: {
        title: "Pourquoi le Mont Saint-Clair exige un protocole renforcé",
        body: "Le climat sévère du Mont Saint-Clair impose un <strong>protocole d'entretien renforcé</strong> que DRM Sète a calibré au fil des années : <strong>graisses lithium-calcium anti-saumure tous les 4 mois</strong> (au lieu de 6 mois en zone abritée), <strong>lanoline marine sur ressorts tous les 6 mois</strong>, <strong>joints EPDM remplacés tous les 18 mois</strong> (au lieu de 30 mois standard). Les cabinets de professions libérales <strong>Avenue du Mont Saint-Clair</strong> et les villas du <strong>Chemin du Pioch</strong> bénéficient de ce calendrier serré. Formule Sérénité recommandée (3 visites/an + 2h curatif inclus) à partir de 680 € HT/an. Cette approche prolonge la durée de vie des équipements de 5 à 8 ans malgré l'exposition climatique défavorable. Sur 15 ans, le ROI dépasse 3x le coût du contrat.",
      },
      fabrication: {
        title: "Aluminium marin et inox 316L pour les villas du Mont Saint-Clair",
        body: "Pour les villas du <strong>Chemin du Pioch</strong>, de l'<strong>Avenue du Mont Saint-Clair</strong> et de l'<strong>Allée Marc Sangnier</strong>, DRM Sète fabrique en aluminium marin ou en inox 316L plutôt qu'en acier galvanisé standard. Pourquoi ce choix ? L'exposition climatique sévère du Mont (embruns directs depuis le <strong>Théâtre de la Mer</strong> et les <strong>Pierres Blanches</strong>) divise par 2 la durée de vie d'un rideau acier standard, mais maintient celle d'un aluminium marin (18-22 ans) ou d'un inox 316L (25-30 ans). Surcoût initial 25-40%, mais le ROI s'amortit sur 15 ans. Finition Qualicoat haute résistance UV. Pour les cabinets libéraux et garages de particuliers, lame finale renforcée avec serrure cylindre haute sécurité — option appréciée dans un quartier résidentiel ouvert sur le panorama Saint-Clair sud.",
      },
    },
    faqs: {
      depannage: [
        { q: "Pourquoi les rideaux du Mont Saint-Clair tombent-ils plus souvent en panne ?", a: "Le Mont Saint-Clair est exposé plein vent aux embruns directs depuis le Théâtre de la Mer et les Pierres Blanches. Cette exposition climatique sévère accélère la corrosion saline : axes oxydés en 12 ans au lieu de 18-20, ressorts fatigués en 8-10 ans au lieu de 12-15, joints EPDM dégradés en 18 mois au lieu de 30. DRM Sète recommande un entretien semestriel renforcé pour limiter ces pannes prématurées sur le Chemin du Pioch et l'Avenue du Mont Saint-Clair." },
        { q: "DRM Sète intervient-il rapidement au Mont Saint-Clair la nuit ?", a: "Oui, notre astreinte 24h/24 couvre le Mont Saint-Clair sans majoration. Délai moyen d'arrivée nocturne : 28-32 minutes (un peu plus que le centre en raison des lacets). Notre véhicule d'astreinte connaît parfaitement les accès Rue Antonin Vivès, Allée Marc Sangnier, Chemin du Pioch. Pour les urgences sur les villas individuelles et les cabinets libéraux, intervention prioritaire en cas de risque vol (rideau bloqué ouvert)." },
      ],
      installation: [
        { q: "Quel matériau choisir pour installer un rideau au Mont Saint-Clair ?", a: "Au Mont Saint-Clair, DRM Sète ne recommande pas l'acier galvanisé standard à cause de l'exposition climatique sévère. Nous proposons l'aluminium marin (durée 18-22 ans, garantie 3 ans) ou l'inox 316L (durée 25-30 ans, garantie 5 ans). Surcoût 25-40% mais ROI amorti sur 15 ans. Finition thermolaquée Qualicoat haute résistance UV qui ne ternit pas en plein soleil sur les coteaux Saint-Clair sud." },
        { q: "Combien coûte installer un rideau de garage à Mont Saint-Clair ?", a: "Une installation rideau de garage au Mont Saint-Clair démarre à 2 600 € HT pour une largeur 2,5-3 m, lame pleine acier galvanisé motorisée Simu T5, télécommande RTS, pose comprise. Pour un produit aluminium marin (recommandé en bord d'embruns directs), comptez 3 200 à 3 800 € HT. Délai standard 8-12 jours fabrication + 1 jour de pose. Métreur gratuit sous 48h." },
      ],
      reparation: [
        { q: "Pourquoi mon ressort de rideau a-t-il cassé en 8 ans au Mont Saint-Clair ?", a: "Au Mont Saint-Clair, l'exposition aux embruns directs accélère la corrosion des ressorts de torsion. Durée de vie typique sur le Mont : 8-10 ans contre 12-15 ans en zone abritée. DRM Sète remplace par paire (pour garder l'équilibre du tablier) avec des ressorts traités lanoline marine. Coût : 320-450 € selon le diamètre. Garantie 2 ans constructeur. Nous recommandons aussi un graissage renforcé tous les 4 mois pour prolonger la durée de vie." },
        { q: "Peut-on réparer un vieux moteur ACM au Mont Saint-Clair ?", a: "Oui, DRM Sète répare les vieux moteurs ACM des cabinets libéraux Avenue du Mont Saint-Clair et des villas du Chemin du Pioch. Le plus souvent, c'est le condensateur 6 ou 8 microF qui est HS (cause numéro un des pannes silencieuses) — remplacement 90 € main-d'œuvre comprise. Si l'enroulement est grillé, remplacement moteur complet à partir de 580 €. Diagnostic gratuit, devis transparent avant tout démontage." },
      ],
      motorisation: [
        { q: "Quelle motorisation pour une villa du Chemin du Pioch ?", a: "Pour une villa du Chemin du Pioch avec rideau de garage standard (2,5-3 m largeur, lame pleine acier 250 kg), DRM Sète recommande un moteur tubulaire Somfy RS100 silencieux (<55 dB) avec télécommande RTS 4 canaux. Budget 1 100 à 1 400 € HT pose comprise. Module TaHoma Somfy en option pour piloter depuis smartphone (idéal pour ouvrir en arrivant en voiture après une journée de travail)." },
        { q: "Le module smartphone fonctionne-t-il bien au Mont Saint-Clair ?", a: "Oui, le module TaHoma Somfy ou Nice MyNice fonctionne via le WiFi de la villa et la 4G/5G. Au Mont Saint-Clair, la couverture mobile est excellente (vue dégagée sur le Bassin de Thau). DRM Sète paramètre le module à la pose, ajoute votre smartphone (iOS/Android) et forme l'utilisateur. Programmation horaire possible pour ouvrir/fermer automatiquement le rideau de garage à heures fixes. Garantie 2 ans pièces module + 1 an main-d'œuvre." },
      ],
      deblocage: [
        { q: "Que faire si mon rideau Avenue du Mont Saint-Clair est bloqué un dimanche ?", a: "DRM Sète intervient 24h/24, 7j/7, dimanches et jours fériés inclus, sans majoration. Sur l'Avenue du Mont Saint-Clair, délai moyen 28-32 minutes pour un déblocage urgent. Notre technicien arrive avec manivelle de secours, kit décoinçage came et perceuse à choc — 8 déblocages sur 10 sans aucune casse. Forfait à partir de 150 € TTC tout compris, pièces en sus si remplacement nécessaire." },
        { q: "Mon rideau a cogné un véhicule au Chemin du Pioch et reste bloqué — que faire ?", a: "Ne forcez pas manuellement, vous risquez d'aggraver. Sur le Chemin du Pioch, après un choc commercial ou véhicule, la lame peut être sortie de rail ou la came désaxée. DRM Sète intervient en 28-32 minutes avec outillage spécifique pour remettre la lame en rail sans démonter le tablier complet. Si une lame est trop déformée, remplacement unitaire sans démontage du tablier complet (compter 35-80 € la lame selon modèle)." },
      ],
      entretien: [
        { q: "Pourquoi un protocole renforcé pour le Mont Saint-Clair ?", a: "Le climat sévère du Mont Saint-Clair (embruns directs Théâtre de la Mer, Pierres Blanches) divise par 2 la durée de vie d'un rideau acier standard sans entretien. DRM Sète a calibré un protocole renforcé : graisses lithium-calcium anti-saumure tous les 4 mois (au lieu de 6 mois), lanoline marine sur ressorts tous les 6 mois, joints EPDM remplacés tous les 18 mois. Formule Sérénité (3 visites/an) recommandée pour les villas Chemin du Pioch et cabinets Avenue du Mont Saint-Clair. Budget 680 € HT/an." },
        { q: "Le contrat Sérénité couvre-t-il les pannes au Mont Saint-Clair ?", a: "Oui, la formule Sérénité inclut jusqu'à 2h/an de curatif (pièces en sus) sur le Mont Saint-Clair. Si une panne survient entre deux visites, délai prioritaire 30 minutes garanti + remise 15% sur pièces et main-d'œuvre. Sur 5 ans, le ROI dépasse 3x le coût du contrat — c'est l'argument financier qui décide les cabinets libéraux et les propriétaires de villas exposées plein vent." },
      ],
      fabrication: [
        { q: "Faut-il commander un rideau aluminium marin pour le Mont Saint-Clair ?", a: "DRM Sète recommande l'aluminium marin pour les villas et cabinets du Mont Saint-Clair exposés plein vent au panorama Saint-Clair, aux Pierres Blanches et au Théâtre de la Mer. Durée de vie 18-22 ans (contre 12-15 ans en acier galvanisé standard), garantie 3 ans constructeur, surcoût 25-30%. Finition Qualicoat haute résistance UV qui ne ternit pas en plein soleil. Délai fabrication 10-12 jours, pose 1 jour après livraison." },
        { q: "Quel coffre pour une villa du Chemin du Pioch ?", a: "Sur le Chemin du Pioch, la majorité des villas ont des linteaux disponibles permettant une pose en applique extérieure avec coffre 2 faces apparent. DRM Sète fabrique aux cotes exactes (généralement 200×220 mm), finition thermolaquée RAL au choix (anthracite, blanc cassé, bordeaux). Pour les villas qui souhaitent un coffre encastré (finition haut de gamme), nous fabriquons sur-mesure en coordination avec le maçon qui ajuste le linteau si nécessaire. Délai 10-12 jours." },
      ],
    },
    narrative: {
      contextTitle: "Mont Saint-Clair : intervention sur les coteaux exposés plein vent",
      paragraphs: [
        "Le Mont Saint-Clair est un quartier résidentiel chic perché au-dessus de Sète : 8 km² de villas individuelles, cabinets de professions libérales, petits commerces de proximité. DRM Sète y intervient régulièrement sur trois axes principaux : Chemin du Pioch et ses villas avec garages, Avenue du Mont Saint-Clair et ses cabinets libéraux, Rue Antonin Vivès et ses commerces de quartier. La Chapelle Notre-Dame de la Salette et le panorama Saint-Clair attirent une clientèle touristique saisonnière qui impacte le trafic routier — nos techniciens connaissent les heures creuses pour optimiser le délai d'arrivée.",
        "Le climat marin renforcé au Mont Saint-Clair impose une approche technique spécifique : embruns directs depuis le Théâtre de la Mer et les Pierres Blanches, vent dominant rafales jusqu'à 100 km/h en automne, ensoleillement plein sud sur les coteaux Saint-Clair sud. Cette exposition divise par 2 la durée de vie d'un rideau acier standard sans entretien. DRM Sète recommande pour les installations neuves l'aluminium marin (durée 18-22 ans) ou l'inox 316L (durée 25-30 ans) plutôt que l'acier galvanisé. Pour les réparations, stock embarqué adapté aux pannes typiques du quartier : ressorts oxydés par paire, axes cintrés par fatigue, condensateurs ACM, joints EPDM marin.",
        "Notre logistique d'intervention au Mont Saint-Clair est calibrée pour les lacets : véhicule de gabarit moyen, technicien qui connaît tous les accès, point de stationnement préidentifié sur chaque rue. Délai moyen 28-32 minutes en astreinte, parfois 25 minutes en heure creuse. La formule Sérénité (3 visites/an + 2h curatif inclus) est la plus adaptée au climat sévère du Mont — graisses tous les 4 mois, joints tous les 18 mois, suivi régulier des points de fragilité. Sur 15 ans, cette approche prolonge la durée de vie des équipements de 5 à 8 ans malgré l'exposition climatique défavorable.",
      ],
    },
  },

  // ============================================================================
  // BALARUC-LES-BAINS — première station thermale de France
  // ============================================================================
  "balaruc-les-bains": {
    intros: {
      depannage: "Balaruc-les-Bains, première station thermale de France avec 56 000 curistes annuels, est une ville unique sur le Bassin de Thau : Thermes O'Balia, Casino, hôtels-restaurants, pharmacies, boutiques de bien-être concentrés autour de l'Avenue de Montpellier, de la Rue Pasteur et du Boulevard du Front-de-Mer. Quand un rideau métallique tombe en panne à Balaruc-les-Bains, DRM Sète arrive en 25-30 minutes via la D2. L'exposition à l'air iodé du bord de l'étang et la fréquentation touristique année-pleine guident notre planning d'intervention.",
      installation: "Installer un rideau métallique à Balaruc-les-Bains, c'est répondre aux contraintes d'une station thermale active 11 mois sur 12 : devantures alignées sur l'Avenue de Montpellier, hôtels-restaurants exposés au front de mer, pharmacies et boutiques de bien-être de la Rue Pasteur avec horaires métier précis (curistes 7h-20h). DRM Sète recommande l'acier galvanisé Z275 traité embruns ou l'aluminium marin selon l'exposition. Finition Qualicoat anthracite ou blanc cassé pour matcher l'esthétique thermale.",
      reparation: "Réparer un rideau métallique à Balaruc-les-Bains, c'est intervenir dans une station thermale qui ne ferme jamais (sauf janvier) : les Thermes O'Balia ouvrent à 6h45, les hôtels-restaurants tournent en haute saison toute la semaine. DRM Sète intervient avec diagnostic gratuit, devis transparent et stock embarqué adapté aux pannes typiques du littoral (corrosion saline avancée, ressorts oxydés en 8-10 ans, joints EPDM dégradés rapidement).",
      motorisation: "Motoriser un rideau métallique à Balaruc-les-Bains transforme le quotidien des hôteliers et restaurateurs : plus d'effort manuel à 6h, télécommande RTS pour gérer le va-et-vient. DRM Sète installe en demi-journée des moteurs Somfy RS100 silencieux pour les hôtels, des moteurs centraux ACM 76 pour les commerces lourds de l'Avenue de Montpellier, et des modules connectés TaHoma pour les enseignes multi-sites.",
      deblocage: "Un rideau métallique bloqué à Balaruc-les-Bains, c'est une urgence pour les hôteliers qui doivent accueillir les curistes dès 6h45 et les pharmacies qui ouvrent à 8h pile. DRM Sète arrive en 25-30 minutes via la D2 depuis Sète, débloque sans casse dans 8 cas sur 10. Astreinte 24h/24 sans majoration.",
      entretien: "L'entretien préventif à Balaruc-les-Bains est crucial : exposition continue à l'air iodé du bord de l'étang, fréquentation thermale toute l'année qui impose une fiabilité absolue. DRM Sète déploie sur l'Avenue de Montpellier, la Rue Pasteur et le Boulevard du Front-de-Mer un protocole adapté : graisses lithium tous les 6 mois, joints EPDM remplacés tous les 24 mois.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Balaruc-les-Bains, c'est dimensionner pour résister à l'exposition thermale continue et à l'air iodé de l'étang. DRM Sète recommande l'aluminium marin (durée 18-22 ans) ou l'acier Z275 traité embruns renforcé. Finition Qualicoat anthracite, blanc cassé ou bleu thermal pour matcher l'esthétique de la station.",
    },
    seoBlocks: {
      depannage: {
        title: "Astreinte 24h/24 pour la station thermale de Balaruc",
        body: "DRM Sète couvre <strong>Balaruc-les-Bains</strong> et son périmètre via la D2 depuis Sète, délai moyen 25-30 minutes. Notre véhicule d'astreinte connaît l'<strong>Avenue de Montpellier</strong> et ses hôtels-restaurants, la <strong>Rue Pasteur</strong> et ses pharmacies thermales, le <strong>Boulevard du Front-de-Mer</strong> et ses boutiques de bien-être, les abords des <strong>Thermes O'Balia</strong> et du <strong>Casino</strong>. La fréquentation thermale toute l'année (56 000 curistes) impose une fiabilité absolue : nos techniciens interviennent en priorité absolue sur les commerces ouverts dès 6h45.",
      },
      installation: {
        title: "Matières adaptées à l'environnement thermal de Balaruc",
        body: "L'exposition à l'air iodé du <strong>bord de l'étang</strong> et la fréquentation thermale continue imposent pour <strong>Balaruc-les-Bains</strong> un choix matière spécifique : <strong>acier galvanisé Z275 traité embruns renforcé</strong> (durée 15-18 ans) ou <strong>aluminium marin</strong> (durée 18-22 ans, garantie 3 ans). Pour les hôtels-restaurants de l'<strong>Avenue de Montpellier</strong>, finition Qualicoat anthracite ou blanc cassé. Pour les pharmacies et boutiques de bien-être de la <strong>Rue Pasteur</strong>, option polycarbonate transparent.",
      },
      reparation: {
        title: "Fichier technique des commerces thermaux",
        body: "Sur <strong>Balaruc-les-Bains</strong>, DRM Sète a un fichier technique de plus de 100 commerces : hôtels-restaurants de l'<strong>Avenue de Montpellier</strong>, pharmacies thermales de la <strong>Rue Pasteur</strong>, boutiques de bien-être du <strong>Boulevard du Front-de-Mer</strong>, commerces autour des <strong>Thermes O'Balia</strong> et du <strong>Casino</strong>. Pannes typiques de Balaruc : condensateur ACM HS (90 € main-d'œuvre), ressorts oxydés en 8-10 ans (320-450 €), joints EPDM dégradés à 24 mois (180-280 €). Diagnostic gratuit, devis transparent avant tout démontage.",
      },
      motorisation: {
        title: "Motorisation silencieuse pour station thermale",
        body: "Les hôteliers et restaurateurs de <strong>Balaruc-les-Bains</strong> ouvrent dès 6h pour accueillir les curistes dès 6h45 aux <strong>Thermes O'Balia</strong>. DRM Sète propose : <strong>moteur tubulaire Somfy RS100 silencieux</strong> (<55 dB) pour les hôtels-restaurants, <strong>moteur central ACM 76</strong> pour les commerces lourds de l'<strong>Avenue de Montpellier</strong>, <strong>module connecté TaHoma Somfy</strong> pour les enseignes multi-sites. Pose en demi-journée, télécommande RTS multi-canaux, formation incluse.",
      },
      deblocage: {
        title: "Priorité absolue pour les commerces thermaux",
        body: "À <strong>Balaruc-les-Bains</strong>, certains commerces ouvrent dès 6h pour accueillir les curistes : hôtels-restaurants de l'<strong>Avenue de Montpellier</strong>, pharmacies thermales de la <strong>Rue Pasteur</strong>, boulangeries du centre. Un rideau métallique bloqué à 5h30 mobilise immédiatement notre astreinte : DRM Sète arrive en 25-30 minutes via la D2 depuis Sète. Outillage complet (manivelle de secours, perceuse à choc, kit décoinçage came) qui permet 8 déblocages sur 10 sans aucune casse.",
      },
      entretien: {
        title: "Protocole adapté à l'environnement thermal",
        body: "Les commerces de <strong>Balaruc-les-Bains</strong> tournent 11 mois sur 12 avec des cycles intensifs liés à la fréquentation thermale. DRM Sète a calibré un protocole spécifique : <strong>graisses lithium-calcium tous les 6 mois</strong> (avril + octobre, hors saison curiste), <strong>contrôle moteur trimestriel</strong> pour les hôtels-restaurants, <strong>joints EPDM remplacés tous les 24 mois</strong>. Contrat Confort à partir de 380 € HT/an pour le centre thermal.",
      },
      fabrication: {
        title: "Fabrication pour la station thermale",
        body: "Pour les commerces de <strong>Balaruc-les-Bains</strong>, DRM Sète fabrique en aluminium marin ou acier Z275 traité embruns renforcé. Aluminium marin : 18-22 ans, garantie 3 ans. Acier Z275 traité : 15-18 ans, garantie 2 ans. Finition Qualicoat anthracite, blanc cassé ou bleu thermal. Pour les pharmacies et boutiques de bien-être de la <strong>Rue Pasteur</strong>, option polycarbonate transparent pour mise en valeur vitrine 24/7.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel est le délai de dépannage à Balaruc-les-Bains ?", a: "DRM Sète arrive à Balaruc-les-Bains en moyenne en 25-30 minutes via la D2 depuis Sète. Astreinte 24h/24 sans majoration. Intervention prioritaire sur les hôtels-restaurants et pharmacies thermales qui ouvrent dès 6h pour les curistes des Thermes O'Balia." },
        { q: "DRM Sète intervient-il sur les Thermes O'Balia ?", a: "Oui, DRM Sète intervient régulièrement sur les commerces qui entourent les Thermes O'Balia : hôtels, restaurants, pharmacies thermales, boutiques de bien-être. Astreinte 24h/24 sans majoration, intervention prioritaire avant l'ouverture thermale 6h45." },
      ],
      installation: [
        { q: "Quel matériau pour installer un rideau à Balaruc ?", a: "À Balaruc-les-Bains, exposition au bord de l'étang continue : DRM Sète recommande l'aluminium marin (durée 18-22 ans) ou l'acier galvanisé Z275 traité embruns renforcé. Surcoût initial 20-30% mais ROI amorti sur 12-15 ans." },
        { q: "Combien coûte une installation Avenue de Montpellier ?", a: "Une installation Avenue de Montpellier démarre à 2 800 € HT pour un rideau aluminium marin 3,5 m × 2,8 m motorisé Simu T5. Pour hôtels-restaurants exigeant un moteur silencieux, option Somfy RS100 (<55 dB)." },
      ],
      reparation: [
        { q: "Combien coûte une réparation à Balaruc-les-Bains ?", a: "Le remplacement condensateur ACM 76 coûte 90 € TTC main-d'œuvre comprise. Le remplacement moteur ACM complet démarre à 580 € TTC. Garantie 2 ans pièces constructeur. Intervention prioritaire pour les commerces thermaux." },
        { q: "Pourquoi mes pannes sont-elles plus fréquentes ici ?", a: "L'exposition au bord de l'étang à Balaruc accélère la corrosion saline : axes oxydés en 8-10 ans, joints EPDM dégradés à 18 mois. Entretien semestriel renforcé recommandé." },
      ],
      motorisation: [
        { q: "Quel moteur pour un hôtel thermal de Balaruc ?", a: "Pour un hôtel thermal de Balaruc-les-Bains, DRM Sète recommande le moteur tubulaire Somfy RS100 silencieux (<55 dB) : ne dérange ni curistes ni voisinage. Budget 1 100 à 1 400 € HT pose comprise." },
        { q: "Module smartphone pour enseigne multi-sites thermale ?", a: "Oui, DRM Sète installe des modules connectés TaHoma ou MyNice pour piloter à distance les rideaux d'enseignes multi-sites (hôtels Balaruc/Sète, pharmacies réseau)." },
      ],
      deblocage: [
        { q: "Rideau d'hôtel thermal bloqué à 5h ?", a: "DRM Sète intervient 24h/24 sans majoration. Pour un hôtel thermal de Balaruc avec rideau bloqué avant 6h, priorité absolue : astreinte arrive en 25-30 minutes via la D2." },
        { q: "Éviter les blocages sur le Boulevard du Front-de-Mer ?", a: "Sur le Boulevard du Front-de-Mer, exposition continue accélère la corrosion saline. Entretien semestriel renforcé (graisses tous les 6 mois) divise par 3 les blocages urgents. Contrat à partir de 380 € HT/an." },
      ],
      entretien: [
        { q: "Pourquoi un protocole adapté à Balaruc ?", a: "L'exposition au bord de l'étang et la fréquentation thermale continue imposent : graisses lithium tous les 6 mois, joints EPDM remplacés tous les 24 mois. Contrat Confort à partir de 380 € HT/an. ROI 2x-5x sur 5 ans." },
        { q: "Quelle formule pour un hôtel ouvert 11 mois ?", a: "Pour un hôtel-restaurant de Balaruc-les-Bains ouvert 11 mois sur 12, formule Sérénité (3 visites/an + 2h curatif) à partir de 680 € HT/an. Tarif dégressif multi-sites." },
      ],
      fabrication: [
        { q: "Pourquoi aluminium marin pour Balaruc ?", a: "DRM Sète recommande l'aluminium marin : exposition continue au bord de l'étang divise par 1,5 la durée de vie d'un rideau acier standard. Aluminium marin : 18-22 ans, garantie 3 ans." },
        { q: "Délai de fabrication pour un hôtel thermal ?", a: "Pour un hôtel thermal de Balaruc-les-Bains, délai standard fabrication 8-12 jours en aluminium marin avec finition Qualicoat. Pose 1-2 jours en horaire ajusté pour ne pas gêner l'accueil curistes." },
      ],
    },
    narrative: {
      contextTitle: "Balaruc-les-Bains : première station thermale de France",
      paragraphs: [
        "Balaruc-les-Bains est la première station thermale de France en nombre de curistes : 56 000 personnes accueillies annuellement par les Thermes O'Balia, soit 11 mois d'activité commerciale continue (fermeture généralement janvier). La ville concentre hôtels-restaurants sur l'Avenue de Montpellier, pharmacies thermales sur la Rue Pasteur, boutiques de bien-être sur le Boulevard du Front-de-Mer.",
        "L'exposition de Balaruc au bord de l'étang de Thau impose une approche technique adaptée : air iodé continu, corrosion saline accélérée, fréquentation thermale qui exige une fiabilité absolue. DRM Sète recommande l'aluminium marin (durée 18-22 ans) ou l'acier Z275 traité embruns renforcé pour les installations neuves. Pour les réparations, stock embarqué adapté aux pannes typiques.",
        "Notre logistique d'intervention à Balaruc-les-Bains est calibrée sur la D2 qui relie Sète : véhicule d'astreinte positionné stratégiquement, délai moyen 25-30 minutes. Priorité absolue sur les commerces ouverts avant 7h (hôtels-restaurants pour curistes, pharmacies thermales). Astreinte 24h/24 sans majoration.",
      ],
    },
  },

  // ============================================================================
  // AGDE — cité grecque historique, station balnéaire
  // ============================================================================
  "agde": {
    intros: {
      depannage: "Agde, cité grecque historique sur les rives de l'Hérault, mêle patrimoine médiéval (Cathédrale Saint-Étienne en basalte noir, vieille ville) et station balnéaire active (Cap d'Agde, Grau d'Agde). Quand un rideau métallique tombe en panne à Agde, DRM Sète arrive en 30-35 minutes — notre véhicule remonte par la D612. Les commerces de la Rue Jean Jaurès, du Quai du Chapitre et de l'Avenue de la Méditerranée ont des horaires saisonniers spécifiques qui guident notre planning.",
      installation: "Installer un rideau métallique à Agde, c'est composer avec un bâti à double identité : façades médiévales en basalte noir du centre historique, constructions balnéaires modernes du Cap d'Agde et de la Grange. DRM Sète recommande pour le centre historique des coffres encastrés et finitions sombres (anthracite, noir), pour le front de mer des matières renforcées (aluminium marin, acier Z275 traité embruns). Métreur gratuit sous 48h, pose 1-2 jours.",
      reparation: "Réparer un rideau métallique à Agde, c'est intervenir sur un tissu commerçant varié : restaurants et poissonneries du Quai du Chapitre, boutiques de mode de la Rue Jean Jaurès, supérettes saisonnières de l'Avenue de la Méditerranée, commerces du Cap d'Agde et du Grau d'Agde. DRM Sète a un fichier technique des modèles installés, ce qui accélère le diagnostic et limite les déplacements pour pièces complémentaires.",
      motorisation: "Motoriser un rideau métallique à Agde répond aux besoins de commerces très divers : restaurants gastronomiques du centre médiéval, boutiques de plage saisonnières, locaux portuaires du Port d'Agde. DRM Sète installe des moteurs adaptés : Somfy RS100 silencieux pour le centre historique, ACM 76 pour les commerces lourds, modules TaHoma pour les enseignes saisonnières avec gestion centralisée smartphone.",
      deblocage: "Un rideau métallique bloqué à Agde, c'est une urgence saisonnière : en juillet-août les commerces du Cap d'Agde et de l'Avenue de la Méditerranée ne peuvent pas se permettre d'attendre lundi pour ouvrir. DRM Sète arrive en 30-35 minutes via la D612, débloque sans casse dans 8 cas sur 10. Astreinte 24h/24 sans majoration, dimanches et jours fériés inclus.",
      entretien: "L'entretien préventif à Agde est stratégique : les commerces du Cap d'Agde et du Grau d'Agde sont exposés directement à l'air marin du Golfe du Lion, ceux du centre médiéval sont à 2 km mais subissent encore les embruns. DRM Sète déploie un protocole adapté : graisses lithium tous les 6 mois, joints EPDM remplacés tous les 24 mois pour le front de mer, tous les 30 mois pour le centre médiéval.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Agde, c'est répondre aux contraintes esthétiques du patrimoine médiéval (basalte noir, ABF requis pour certaines façades) et techniques du front de mer (aluminium marin obligatoire pour le Cap d'Agde et le Grau d'Agde). DRM Sète conçoit dans son atelier français, finition Qualicoat adaptée à chaque secteur, garantie 2 ans pièces.",
    },
    seoBlocks: {
      depannage: {
        title: "Couverture du centre historique et du Cap d'Agde",
        body: "DRM Sète couvre <strong>Agde</strong> et son périmètre via la D612 depuis Sète, délai moyen 30-35 minutes. Notre véhicule d'astreinte intervient sur trois secteurs distincts : le centre historique autour de la <strong>Cathédrale Saint-Étienne</strong> (façades en basalte noir, règlement d'urbanisme strict), le <strong>Cap d'Agde</strong> et la <strong>Grange</strong> (front de mer, commerces saisonniers), le <strong>Grau d'Agde</strong> et son <strong>Port d'Agde</strong> (commerces portuaires, pêcheurs). Stock embarqué adapté : ressorts oxydés (front de mer 8-10 ans), joints EPDM marin, condensateurs ACM, cylindres profil européen pour le centre médiéval.",
      },
      installation: {
        title: "Bâti médiéval et station balnéaire — deux approches",
        body: "<strong>Agde</strong> a un bâti à double identité que DRM Sète intègre dès la prise de mesure : <strong>centre historique en basalte noir</strong> (Cathédrale Saint-Étienne, Quai du Chapitre, Rue Jean Jaurès) avec règlement d'urbanisme strict — coffres encastrés, finitions anthracite ou noir Qualicoat ; <strong>front de mer Cap d'Agde et Grange</strong> (Avenue de la Méditerranée, Phare du Cap d'Agde) avec matières renforcées — aluminium marin (durée 18-22 ans) ou acier Z275 traité embruns renforcé. Notre métreur évalue chaque cas et propose la configuration adaptée.",
      },
      reparation: {
        title: "Fichier technique des commerces d'Agde",
        body: "DRM Sète tient un fichier technique de plus de 200 commerces d'<strong>Agde</strong> : restaurants et poissonneries du <strong>Quai du Chapitre</strong>, boutiques de mode de la <strong>Rue Jean Jaurès</strong>, supérettes saisonnières de l'<strong>Avenue de la Méditerranée</strong>, locaux portuaires du <strong>Grau d'Agde</strong>. Quand vous nous appelez, ce fichier permet d'arriver avec la bonne pièce dans 9 cas sur 10. Pannes typiques d'Agde : condensateur ACM HS (90 €), ressorts par paire (320-450 €), joints EPDM (180-280 € en zone front de mer).",
      },
      motorisation: {
        title: "Motorisation adaptée au profil saisonnier d'Agde",
        body: "Les commerces du <strong>Cap d'Agde</strong> et de la <strong>Grange</strong> ouvrent 5-6 mois par an (avril-octobre) avec une intensité maximale en juillet-août. Pour ces saisonniers, DRM Sète installe : <strong>moteur tubulaire Simu T5</strong> robuste (idéal cycles intensifs estivaux), <strong>module connecté TaHoma Somfy</strong> pour programmer les fermetures hebdomadaires hors saison, <strong>télécommande RTS multi-canaux</strong> pour partager plusieurs commerces saisonniers d'une même enseigne. Pour le centre historique (<strong>Rue Jean Jaurès</strong>), motorisation silencieuse Somfy RS100.",
      },
      deblocage: {
        title: "Astreinte saisonnière renforcée pour Agde",
        body: "En juillet-août, la <strong>haute saison touristique d'Agde</strong> (Cap d'Agde, Grange, Grau d'Agde) impose à DRM Sète une astreinte renforcée : véhicule supplémentaire dédié au littoral Hérault-Sud entre Marseillan-Plage et Agde. Délai d'arrivée maintenu sous 30 minutes même les jours de pic touristique. Outillage complet (manivelle de secours, perceuse à choc, kit came), 8 déblocages sur 10 sans casse. Astreinte 24h/24 sans majoration, essentiel pour les restaurants et boutiques saisonnières de l'<strong>Avenue de la Méditerranée</strong>.",
      },
      entretien: {
        title: "Protocole différencié centre vs front de mer",
        body: "DRM Sète déploie sur <strong>Agde</strong> un protocole différencié selon l'exposition : <strong>centre médiéval</strong> (Cathédrale Saint-Étienne, Quai du Chapitre, Rue Jean Jaurès) à 2 km du front de mer = graisses lithium tous les 8 mois, joints EPDM remplacés tous les 30 mois ; <strong>front de mer</strong> (Cap d'Agde, Grange, Grau d'Agde, Avenue de la Méditerranée) = protocole renforcé, graisses tous les 6 mois, joints EPDM tous les 24 mois. Contrat Confort à partir de 350 € HT/an pour le centre, 420 € HT/an pour le front de mer.",
      },
      fabrication: {
        title: "Fabrication adaptée au bâti historique et balnéaire d'Agde",
        body: "Pour le centre médiéval d'<strong>Agde</strong> (Cathédrale Saint-Étienne en basalte noir, Quai du Chapitre, Rue Jean Jaurès), DRM Sète fabrique des coffres encastrés et finitions Qualicoat anthracite ou noir pour respecter le règlement d'urbanisme et l'avis ABF si requis. Pour le <strong>Cap d'Agde</strong> et la <strong>Grange</strong>, fabrication en aluminium marin (durée 18-22 ans) ou inox 316L (durée 25-30 ans) avec finition Qualicoat anti-UV. Délai fabrication 8-12 jours, pose 1-2 jours, garantie 2 ans pièces + 1 an main-d'œuvre.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel délai de dépannage à Agde ?", a: "DRM Sète arrive à Agde en moyenne en 30-35 minutes via la D612 depuis Sète. En haute saison touristique (juillet-août), véhicule supplémentaire dédié au littoral Hérault-Sud maintient le délai sous 30 minutes." },
        { q: "Astreinte renforcée en saison au Cap d'Agde ?", a: "Oui, en juillet-août DRM Sète positionne un véhicule supplémentaire dédié au littoral Hérault-Sud entre Marseillan-Plage et Agde. Délai maintenu sous 30 minutes même les jours de pic touristique." },
      ],
      installation: [
        { q: "Faut-il un avis ABF pour installer à Agde centre ?", a: "Pour les façades classées du centre médiéval d'Agde (autour de la Cathédrale Saint-Étienne, Quai du Chapitre), oui. DRM Sète gère la demande administrative : dossier graphique, coffre encastré, finition Qualicoat anthracite ou noir compatible patrimoine basalte." },
        { q: "Combien coûte une installation au Cap d'Agde ?", a: "Au Cap d'Agde, exposition front de mer impose l'aluminium marin : 3 200 à 3 800 € HT pour un rideau 3 m × 2,8 m motorisé Simu T5, pose comprise. Surcoût vs acier standard 25-30% mais durée doublée." },
      ],
      reparation: [
        { q: "DRM Sète répare-t-il les commerces du Grau d'Agde ?", a: "Oui, DRM Sète intervient régulièrement sur les commerces et locaux portuaires du Grau d'Agde et du Port d'Agde. Exposition front de mer = corrosion saline accélérée : stock embarqué adapté." },
        { q: "Combien coûte une réparation moteur à Agde ?", a: "Remplacement condensateur ACM (panne numéro 1) : 90 € main-d'œuvre comprise. Moteur ACM complet : 580 € TTC. Axe tubulaire : 420 € TTC. Devis transparent avant tout démontage." },
      ],
      motorisation: [
        { q: "Quel moteur pour un commerce saisonnier du Cap d'Agde ?", a: "Pour un commerce saisonnier du Cap d'Agde, DRM Sète recommande le moteur tubulaire Simu T5 robuste (idéal cycles intensifs estivaux) avec module TaHoma Somfy pour programmer les fermetures hebdomadaires hors saison." },
        { q: "Motoriser un rideau du centre médiéval d'Agde ?", a: "Pour le centre médiéval (Rue Jean Jaurès, Quai du Chapitre), DRM Sète recommande la motorisation tubulaire Somfy RS100 silencieuse (<55 dB) qui ne dérange pas les voisins du quartier ancien." },
      ],
      deblocage: [
        { q: "Rideau bloqué un samedi soir au Cap d'Agde ?", a: "DRM Sète intervient 24h/24 sans majoration. Au Cap d'Agde en haute saison, véhicule supplémentaire dédié : délai 25-30 minutes même un samedi soir de pic touristique. Forfait à partir de 150 € TTC tout compris." },
        { q: "Éviter les blocages au Grau d'Agde ?", a: "Au Grau d'Agde, exposition front de mer accélère la corrosion saline (cause numéro 1 des blocages). Entretien semestriel renforcé (graisses tous les 6 mois) divise par 3 les blocages urgents." },
      ],
      entretien: [
        { q: "Pourquoi un protocole différencié pour Agde ?", a: "Agde a un bâti à double identité : centre médiéval à 2 km du front de mer (graisses tous les 8 mois, joints EPDM tous les 30 mois) vs Cap d'Agde/Grau front de mer (graisses tous les 6 mois, joints EPDM tous les 24 mois)." },
        { q: "Contrat pour commerce saisonnier ouvert 5 mois ?", a: "Pour un commerce saisonnier du Cap d'Agde ouvert avril-septembre, DRM Sète propose un contrat adapté : visite en avril avant ouverture, visite en octobre après fermeture saisonnière. Tarif à partir de 280 € HT/an." },
      ],
      fabrication: [
        { q: "Quel matériau pour le Cap d'Agde ?", a: "Au Cap d'Agde, exposition front de mer impose l'aluminium marin (durée 18-22 ans, garantie 3 ans) ou l'inox 316L (durée 25-30 ans). DRM Sète ne recommande pas l'acier galvanisé standard sur le front de mer." },
        { q: "Coffre encastré pour façade médiévale d'Agde ?", a: "Oui, DRM Sète fabrique des coffres encastrés pour les façades médiévales en basalte noir d'Agde (Rue Jean Jaurès, Quai du Chapitre). Finition Qualicoat anthracite ou noir pour respecter le patrimoine. Délai 10-12 jours." },
      ],
    },
    narrative: {
      contextTitle: "Agde : cité grecque entre patrimoine et station balnéaire",
      paragraphs: [
        "Agde a une identité unique sur l'Hérault : cité grecque fondée au VIe siècle av. JC, centre médiéval autour de la Cathédrale Saint-Étienne en basalte noir, station balnéaire active du Cap d'Agde et de la Grange (8 km de plages), port de pêche du Grau d'Agde. DRM Sète y intervient sur trois secteurs distincts avec des approches différenciées : centre historique (règlement d'urbanisme strict, finitions sombres), front de mer (matières renforcées), Grau d'Agde (commerces portuaires).",
        "L'exposition d'Agde varie selon le secteur : le centre médiéval est à 2 km du front de mer, mais subit encore des embruns ; le Cap d'Agde et la Grange sont en exposition directe au Golfe du Lion ; le Grau d'Agde combine exposition portuaire et front fluvial (Hérault). DRM Sète a calibré un protocole d'entretien différencié : graisses tous les 6 ou 8 mois selon zone, joints EPDM tous les 24 ou 30 mois.",
        "Notre logistique d'intervention à Agde s'appuie sur la D612 depuis Sète : délai moyen 30-35 minutes. En haute saison touristique (juillet-août), DRM Sète positionne un véhicule supplémentaire dédié au littoral Hérault-Sud entre Marseillan-Plage et Agde pour maintenir le délai sous 30 minutes même les jours de pic. Astreinte 24h/24 sans majoration, essentiel pour les restaurants et boutiques saisonnières.",
      ],
    },
  },

  // ============================================================================
  // BOUZIGUES — village conchylicole, capitale mondiale de l'huître
  // ============================================================================
  "bouzigues": {
    intros: {
      depannage: "Bouzigues est le village ostréicole emblématique de l'étang de Thau, capitale mondiale de l'huître de Thau (Crassostrea gigas) avec son port conchylicole, son Musée de l'Étang de Thau et ses dégustations en bord d'étang. Quand un rideau métallique tombe en panne à Bouzigues, DRM Sète arrive en 30-35 minutes via la D613. Les mareyeurs du Rue du Port, les restaurants de bord d'étang sur l'Avenue Louis Tudesq et les épiceries de la Rue de la Mairie ont des horaires métier précis qui guident notre planning.",
      installation: "Installer un rideau métallique à Bouzigues, c'est répondre aux contraintes d'un village ostréicole en activité 7j/7 : devantures alignées en bord d'étang, hangars de conditionnement d'huîtres, restaurants saisonniers, dégustations à la cabane. DRM Sète recommande pour Bouzigues l'aluminium marin (exposition portuaire directe) ou l'acier Z275 traité embruns renforcé. Métreur gratuit sous 48h, pose 1-2 jours.",
      reparation: "Réparer un rideau métallique à Bouzigues, c'est intervenir dans un village ostréicole de 1 600 habitants avec une économie 100% conchylicole : dizaines de mareyeurs, hangars de tri d'huîtres, restaurants de bord d'étang, épiceries. DRM Sète a un fichier technique des installations locales et un stock embarqué adapté à l'exposition portuaire (ressorts oxydés en 8-10 ans, joints EPDM dégradés rapidement).",
      motorisation: "Motoriser un rideau métallique à Bouzigues répond aux besoins des mareyeurs qui ouvrent à 4h30 du matin pour le tri des huîtres et des restaurants de bord d'étang qui ferment tard. DRM Sète installe en demi-journée des moteurs Simu T5 robustes pour les hangars conchylicoles, des moteurs Somfy RS100 silencieux pour les restaurants, et des modules TaHoma pour la gestion centralisée multi-cabanes.",
      deblocage: "Un rideau métallique bloqué à Bouzigues, c'est une urgence pour les mareyeurs qui démarrent à 4h30 et pour les restaurants qui doivent ouvrir pour le service du midi face à l'étang de Thau. DRM Sète arrive en 30-35 minutes via la D613 depuis Sète, débloque sans casse dans 8 cas sur 10. Astreinte 24h/24 sans majoration.",
      entretien: "L'entretien préventif à Bouzigues est crucial : exposition directe au port conchylicole et à l'étang de Thau, cycles intensifs des mareyeurs (4h30-13h tous les jours), restaurants 7j/7. DRM Sète déploie sur le Rue du Port et l'Avenue Louis Tudesq un protocole renforcé : graisses lithium tous les 6 mois, joints EPDM remplacés tous les 18 mois.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Bouzigues, c'est dimensionner pour résister à l'exposition conchylicole continue. DRM Sète recommande l'aluminium marin (durée 18-22 ans) ou l'acier Z275 traité embruns renforcé pour les hangars de mareyeurs, le polycarbonate transparent pour les dégustations en cabane (visibilité 24/7), la grille cobra ventilée pour les locaux de stockage.",
    },
    seoBlocks: {
      depannage: {
        title: "Astreinte 24h/24 pour le port ostréicole de Bouzigues",
        body: "DRM Sète couvre <strong>Bouzigues</strong> via la D613 depuis Sète, délai moyen 30-35 minutes. Notre véhicule d'astreinte connaît le tissu commerçant local : <strong>Rue du Port</strong> et ses mareyeurs (ouverture 4h30 pour tri huîtres), <strong>Avenue Louis Tudesq</strong> et ses restaurants de bord d'étang, <strong>Rue de la Mairie</strong> et son centre village. Stock embarqué adapté à l'exposition portuaire : ressorts oxydés (8-10 ans en bord d'étang), joints EPDM marin, condensateurs ACM. Priorité absolue sur les mareyeurs avant 5h du matin.",
      },
      installation: {
        title: "Aluminium marin obligatoire pour Bouzigues",
        body: "L'exposition directe au <strong>port conchylicole</strong> et à l'<strong>étang de Thau</strong> impose à <strong>Bouzigues</strong> l'aluminium marin (durée 18-22 ans) ou l'acier galvanisé Z275 traité embruns renforcé. DRM Sète ne recommande pas l'acier galvanisé standard à Bouzigues : durée divisée par 2. Pour les mareyeurs de la <strong>Rue du Port</strong>, lames pleines anti-effraction. Pour les restaurants de l'<strong>Avenue Louis Tudesq</strong>, motorisation Somfy RS100 silencieuse.",
      },
      reparation: {
        title: "Fichier technique des mareyeurs de Bouzigues",
        body: "Sur <strong>Bouzigues</strong>, DRM Sète a un fichier technique des installations rideau métallique des mareyeurs et restaurants : modèles, moteurs, dimensions, numéros de série. Cela couvre la <strong>Rue du Port</strong>, l'<strong>Avenue Louis Tudesq</strong>, les abords du <strong>Musée de l'Étang de Thau</strong> et de l'<strong>Église Saint-Jacques</strong>. Pannes typiques : condensateur ACM HS (90 €), ressorts oxydés (320-450 €), joints EPDM dégradés (180-280 €).",
      },
      motorisation: {
        title: "Motorisation pour mareyeurs et restaurants conchylicoles",
        body: "Les mareyeurs du <strong>Port de Bouzigues</strong> ouvrent à 4h30 pour le tri des huîtres ; les restaurants de l'<strong>Avenue Louis Tudesq</strong> tournent en service du midi et du soir 7j/7. DRM Sète propose : <strong>moteur Simu T5</strong> robuste pour les hangars conchylicoles, <strong>moteur Somfy RS100 silencieux</strong> pour les restaurants, <strong>module TaHoma</strong> pour gestion centralisée multi-cabanes. Garantie 5 ans constructeur.",
      },
      deblocage: {
        title: "Priorité absolue pour les mareyeurs de Bouzigues",
        body: "À <strong>Bouzigues</strong>, les mareyeurs ouvrent dès 4h30 pour le tri des huîtres. Un rideau bloqué à cette heure mobilise immédiatement notre astreinte : DRM Sète arrive en 30-35 minutes via la D613 depuis Sète. Outillage complet (manivelle de secours, perceuse à choc, kit décoinçage came) qui permet 8 déblocages sur 10 sans casse. Astreinte 24h/24 sans majoration, dimanches inclus — essentiel pour les mareyeurs qui travaillent tous les matins.",
      },
      entretien: {
        title: "Protocole renforcé pour bord d'étang conchylicole",
        body: "Les commerces de <strong>Bouzigues</strong> exposés au <strong>Port</strong> et à l'<strong>étang de Thau</strong> subissent une corrosion saline 1,5x plus rapide qu'en zone abritée. DRM Sète a calibré un protocole renforcé : <strong>graisses lithium tous les 6 mois</strong>, <strong>joints EPDM remplacés tous les 18 mois</strong>, contrôle moteur trimestriel pour les mareyeurs à fort cycle. Contrat Confort à partir de 380 € HT/an.",
      },
      fabrication: {
        title: "Fabrication aluminium marin pour Bouzigues",
        body: "Pour les commerces de <strong>Bouzigues</strong>, DRM Sète fabrique en aluminium marin : durée 18-22 ans, garantie 3 ans constructeur. Pour les mareyeurs de la <strong>Rue du Port</strong>, lames pleines acier galvanisé Z275 traité embruns avec serrure cylindre profil européen anti-snap. Pour les restaurants de l'<strong>Avenue Louis Tudesq</strong>, lames micro-perforées ou polycarbonate. Délai 8-12 jours, pose 1-2 jours.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel délai à Bouzigues ?", a: "DRM Sète arrive à Bouzigues en moyenne en 30-35 minutes via la D613 depuis Sète. Astreinte 24h/24 sans majoration. Priorité absolue sur les mareyeurs ouverts dès 4h30 et les restaurants pour service du midi." },
        { q: "Intervention sur les mareyeurs de Bouzigues ?", a: "Oui, DRM Sète intervient régulièrement sur les mareyeurs et hangars conchylicoles de Bouzigues. Ouverture matinale 4h30 = intervention prioritaire. Stock embarqué adapté aux rideaux acier lourds des locaux ostréicoles." },
      ],
      installation: [
        { q: "Quel matériau pour installer à Bouzigues ?", a: "À Bouzigues, exposition au port conchylicole continue : aluminium marin (18-22 ans) ou acier Z275 traité embruns renforcé. DRM Sète ne recommande pas l'acier galvanisé standard." },
        { q: "Installation pour un mareyeur ?", a: "Pour un mareyeur de Bouzigues avec hangar conchylicole, configuration : largeur 4-6 m, lame pleine acier Z275, moteur central ACM 76. Budget 3 800 à 5 500 € HT pose comprise." },
      ],
      reparation: [
        { q: "Combien coûte une réparation à Bouzigues ?", a: "Remplacement condensateur ACM (cause numéro 1) : 90 € main-d'œuvre. Moteur ACM complet : 580 € TTC. Axe tubulaire : 420 € TTC. Garantie 2 ans pièces constructeur." },
        { q: "Pourquoi mes pannes sont-elles fréquentes ?", a: "Bouzigues étant en bord d'étang conchylicole, exposition saline continue accélère la corrosion : axes oxydés en 8-10 ans, joints EPDM dégradés à 18 mois. Entretien semestriel renforcé recommandé." },
      ],
      motorisation: [
        { q: "Quel moteur pour un mareyeur de Bouzigues ?", a: "Pour un mareyeur de Bouzigues avec rideau acier lourd, DRM Sète recommande le moteur Simu T5 robuste (cycles intensifs ostréicoles) ou ACM 76 si tablier 500+ kg. Budget 1 100 à 2 500 € HT pose comprise." },
        { q: "Module connecté pour plusieurs cabanes ?", a: "Oui, DRM Sète installe des modules TaHoma Somfy pour piloter à distance plusieurs cabanes ostréicoles d'un même mareyeur ou plusieurs sites d'une même enseigne." },
      ],
      deblocage: [
        { q: "Rideau de mareyeur bloqué à 4h du matin ?", a: "DRM Sète intervient 24h/24 sans majoration. Pour un mareyeur de Bouzigues avec rideau bloqué avant 5h, priorité absolue : astreinte arrive en 30-35 minutes via la D613. Outillage complet, 8 déblocages sur 10 sans casse." },
        { q: "Éviter les blocages au Port de Bouzigues ?", a: "Au Port de Bouzigues, exposition continue accélère la corrosion saline. Entretien semestriel renforcé (graisses tous les 6 mois) divise par 3 les blocages urgents. Contrat à partir de 380 € HT/an." },
      ],
      entretien: [
        { q: "Pourquoi un protocole renforcé à Bouzigues ?", a: "L'exposition au port conchylicole impose un protocole renforcé : graisses lithium tous les 6 mois, joints EPDM remplacés tous les 18 mois. Pour les mareyeurs à fort cycle, contrôle moteur trimestriel inclus." },
        { q: "Formule pour restaurant 7j/7 de bord d'étang ?", a: "Pour un restaurant 7j/7 de l'Avenue Louis Tudesq, formule Sérénité (3 visites/an + 2h curatif) à partir de 680 € HT/an. Tarif dégressif multi-sites Bouzigues/Mèze/Sète." },
      ],
      fabrication: [
        { q: "Quel matériau pour un hangar conchylicole de Bouzigues ?", a: "Pour un hangar conchylicole, DRM Sète recommande l'aluminium marin ou l'acier galvanisé Z275 traité embruns renforcé. Lames pleines anti-effraction ou grille cobra ventilée selon besoin de ventilation." },
        { q: "Délai pour fabriquer un rideau de mareyeur ?", a: "Pour un mareyeur de Bouzigues, délai fabrication 8-12 jours en aluminium marin avec finition Qualicoat anthracite. Pose 1-2 jours après livraison en horaire ajusté pour ne pas gêner le tri matinal." },
      ],
    },
    narrative: {
      contextTitle: "Bouzigues : terroir conchylicole de référence",
      paragraphs: [
        "Bouzigues, petite commune de 1600 habitants perchée sur les rives nord de la lagune, donne son nom aux fameuses moules de Bouzigues et abrite le berceau historique de l'ostréiculture languedocienne. Le Musée de l'Étang de Thau y retrace l'histoire de la conchyliculture régionale. Le centre village s'articule autour de l'Église Saint-Jacques, point de repère depuis la D613. Les commerces locaux — cabanes de dégustation, ateliers conchylicoles, petite restauration familiale — fonctionnent en symbiose avec l'activité lagunaire.",
        "Le climat lagunaire de Bouzigues présente des spécificités techniques marquées : variations d'humidité importantes, condensation matinale fréquente, salinité d'eau saumâtre légèrement différente de la pleine mer. Ces facteurs imposent un choix de matières spécifique pour les rideaux métalliques : nous orientons vers l'aluminium marin grade 6082 ou l'acier Z275 finition Qualicoat 1500 heures, avec joints EPDM haute résilience. Les axes acier traité diam. 60-76 mm restent standards.",
        "Notre couverture de Bouzigues depuis Sète passe par la D613, longeant la rive nord de l'étang. Délai de réponse calibré 30-35 minutes en saison régulière. Les ateliers conchylicoles ouvrant aux aurores bénéficient d'une priorité de réception d'appels matinaux, avec engagement de tournée prioritaire. Astreinte 24h/24 sans majoration weekend, ce qui sécurise l'activité ostréicole continue de la commune.",
      ],
    },
  },

  // ============================================================================
  // FLORENSAC — bourg viticole AOP Côtes de Thau
  // ============================================================================
  "florensac": {
    intros: {
      depannage: "Florensac est un bourg viticole de 5500 habitants au bord de l'Hérault, capitale de la cave coopérative Vinipolis et des Côtes de Thau AOP. Quand un rideau métallique tombe en panne à Florensac, DRM Sète arrive en 35-40 minutes via la D612 + D13. Les commerces de la Rue de la République, de l'Avenue des Vignerons et du Boulevard de la Liberté ont une activité agricole, commerciale et industrielle (ZAE des Aires) qui guide notre planning.",
      installation: "Installer un rideau métallique à Florensac, c'est répondre aux contraintes d'un bourg viticole avec triple identité : centre historique autour de l'Église Saint-Jean-Baptiste classée, cave coopérative Vinipolis (capitale AOP Côtes de Thau), zone d'activité ZAE des Aires en périphérie. DRM Sète propose des configurations adaptées à chaque secteur : coffres encastrés pour le centre, lames pleines lourdes pour les caves, grilles cobra pour les hangars de la ZAE.",
      reparation: "Réparer un rideau métallique à Florensac, c'est intervenir dans un bourg viticole avec deux pics d'intensité : commerces de centre-ville toute l'année, caves coopératives Vinipolis en vendanges (septembre-octobre). DRM Sète a un fichier technique des installations locales : moteurs ACM des caves, tubulaires Simu des boulangeries, condensateurs des pharmacies de la Rue de la République.",
      motorisation: "Motoriser un rideau métallique à Florensac répond aux besoins variés du bourg : commerces de la Rue de la République (motorisation tubulaire silencieuse), caves Vinipolis (moteur central ACM lourd), hangars ZAE des Aires (Nice Era pour grilles cobra). DRM Sète installe en demi-journée avec télécommande RTS multi-canaux et formation utilisateur incluse.",
      deblocage: "Un rideau métallique bloqué à Florensac, c'est une urgence en vendanges pour la cave coopérative Vinipolis (16h/jour de réception du raisin en septembre-octobre) et pour les commerces de la Rue de la République (boulangeries 6h, pharmacie 8h30). DRM Sète arrive en 35-40 minutes via la D612 + D13 depuis Sète, débloque sans casse dans 8 cas sur 10.",
      entretien: "L'entretien préventif à Florensac est calibré sur le cycle viticole : visite annuelle en juin (avant vendanges) pour les caves Vinipolis, visite semestrielle pour les commerces de centre-ville exposés modérément, contrôle trimestriel pour les hangars ZAE à fort cycle. DRM Sète propose des contrats Essentiel à partir de 220 € HT/an et Confort à partir de 350 € HT/an.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Florensac, c'est dimensionner selon le type de commerce : <strong>caves Vinipolis</strong> = grandes largeurs 4-8 m, lames pleines acier Z275 thermolaqué, moteur central ACM 76 ; <strong>centre historique</strong> = coffres encastrés respectant l'Église Saint-Jean-Baptiste classée ; <strong>ZAE des Aires</strong> = grilles cobra ventilées ou rideaux pleins anti-effraction.",
    },
    seoBlocks: {
      depannage: {
        title: "Couverture du bourg viticole de Florensac",
        body: "DRM Sète couvre <strong>Florensac</strong> et son périmètre via la D612 + D13 depuis Sète, délai moyen 35-40 minutes. Notre véhicule d'astreinte connaît les trois zones du bourg : centre historique autour de l'<strong>Église Saint-Jean-Baptiste classée</strong> (Rue de la République, Boulevard de la Liberté), cave coopérative <strong>Vinipolis</strong> (Avenue des Vignerons), zone d'activité <strong>ZAE des Aires</strong>. En vendanges (sept-oct), priorité absolue sur Vinipolis qui tourne 16h/jour pour la réception du raisin Côtes de Thau AOP.",
      },
      installation: {
        title: "Trois configurations pour les trois zones de Florensac",
        body: "<strong>Florensac</strong> a trois zones distinctes que DRM Sète adresse différemment : <strong>centre historique</strong> (Rue de la République, Église Saint-Jean-Baptiste) = coffres encastrés et finition Qualicoat patrimoine ; <strong>cave Vinipolis</strong> (Avenue des Vignerons) = grandes largeurs 4-8 m, lames pleines acier Z275, motorisation centrale ACM 76 ; <strong>ZAE des Aires</strong> = grilles cobra pour ventilation ou rideaux pleins anti-effraction. Métreur gratuit sous 48h, devis détaillé sous 48h.",
      },
      reparation: {
        title: "Fichier technique des installations de Florensac",
        body: "Sur <strong>Florensac</strong>, DRM Sète a un fichier technique de plus de 100 commerces : centre-ville Rue de la République, cave coopérative Vinipolis Avenue des Vignerons, hangars ZAE des Aires. Pannes typiques : condensateur ACM HS pour les caves (90 €), ressorts fatigués par vendanges (320-450 €), joints EPDM dégradés en ZAE (180-280 €). Diagnostic gratuit, devis transparent.",
      },
      motorisation: {
        title: "Motorisation Vinipolis et commerces Rue de la République",
        body: "À <strong>Florensac</strong>, DRM Sète installe des motorisations différenciées : <strong>moteur central ACM 76</strong> pour la cave Vinipolis (Avenue des Vignerons, tabliers 500-1200 kg, cycles intensifs vendanges), <strong>moteur tubulaire Somfy RS100 silencieux</strong> pour les commerces de la Rue de la République (boulangeries, pharmacie), <strong>moteur Nice Era</strong> pour les grilles cobra des hangars ZAE des Aires. Module TaHoma en option.",
      },
      deblocage: {
        title: "Astreinte vendanges pour Vinipolis",
        body: "En vendanges (septembre-octobre), la cave coopérative <strong>Vinipolis</strong> tourne 16h/jour pour la réception du raisin Côtes de Thau AOP. Un rideau bloqué arrête la chaîne et coûte plusieurs milliers d'euros par heure. DRM Sète propose pour cette période une astreinte renforcée : délai sous 35 minutes via la D612 + D13, priorité absolue sur Vinipolis et les caves environnantes. Outillage pour rideaux lourds (perceuse 18V, manivelle longue, kit came lourde).",
      },
      entretien: {
        title: "Entretien adapté au cycle vendanges de Florensac",
        body: "DRM Sète a calibré pour <strong>Florensac</strong> un protocole d'entretien adapté : <strong>visite annuelle en juin</strong> pour la cave Vinipolis (avant les vendanges), avec graissage axe + ressorts, contrôle moteur ACM 76 ; <strong>visite semestrielle</strong> pour les commerces de la Rue de la République ; <strong>contrôle trimestriel</strong> pour les hangars ZAE des Aires à fort cycle. Contrat Confort à partir de 350 € HT/an, Sérénité 680 € HT/an pour Vinipolis.",
      },
      fabrication: {
        title: "Fabrication pour cave Vinipolis et centre historique",
        body: "Pour la cave coopérative <strong>Vinipolis</strong> de <strong>Florensac</strong>, DRM Sète fabrique des rideaux grandes largeurs (4-8 m) : lames pleines acier galvanisé Z275 thermolaqué, motorisation centrale ACM 76, garantie 2 ans pièces + 1 an main-d'œuvre. Pour le centre historique (Rue de la République, abords de l'Église Saint-Jean-Baptiste classée), coffres encastrés et finition Qualicoat patrimoine. Pour la ZAE des Aires, grilles cobra ventilées avec motorisation Nice Era.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel délai à Florensac ?", a: "DRM Sète arrive à Florensac en moyenne en 35-40 minutes via la D612 + D13 depuis Sète. En vendanges (sept-oct), priorité absolue sur la cave coopérative Vinipolis qui tourne 16h/jour." },
        { q: "Astreinte vendanges pour Vinipolis ?", a: "Oui, DRM Sète propose pendant les vendanges une astreinte renforcée pour la cave Vinipolis : délai sous 35 minutes, priorité absolue, outillage spécifique pour rideaux lourds (perceuse 18V, manivelle longue, kit came lourde)." },
      ],
      installation: [
        { q: "Quel rideau pour la cave Vinipolis ?", a: "Pour la cave coopérative Vinipolis de Florensac, DRM Sète recommande un rideau lames pleines acier galvanisé Z275, grande largeur 4-8 m, motorisation centrale ACM 76. Budget 4 500 à 7 000 € HT pose comprise selon dimensions." },
        { q: "Configuration pour hangar ZAE des Aires ?", a: "Pour un hangar ZAE des Aires à Florensac, configuration classique : grille cobra ventilée ou lames pleines anti-effraction selon usage, motorisation Nice Era ou Simu T5. Budget 3 800 à 5 500 € HT pose comprise." },
      ],
      reparation: [
        { q: "Combien coûte une réparation à Florensac ?", a: "Forfait diagnostic à Florensac : 100 € (déplacement zone rurale inclus). Condensateur ACM 76 : 90 €. Moteur ACM complet : 580 € TTC. Axe tubulaire : 420 € TTC. Garantie 2 ans pièces constructeur." },
        { q: "Pannes typiques en cave viticole ?", a: "Pour Vinipolis, pannes typiques : ressorts fatigués par cycles intensifs de vendanges (8 000-12 000 cycles cumulés), axes désaxés après chocs commerciaux, joints EPDM dégradés par poussières et résidus." },
      ],
      motorisation: [
        { q: "Quel moteur pour Vinipolis ?", a: "Pour la cave Vinipolis avec rideau acier lourd 500-1200 kg, DRM Sète recommande le moteur central ACM 76 : couple adapté, fiable sur tabliers lourds, garantie 5 ans constructeur. Budget 1 500 à 2 500 € HT pose comprise." },
        { q: "Module connecté multi-domaines à Florensac ?", a: "Oui, DRM Sète installe à Florensac des modules TaHoma Somfy pour piloter à distance plusieurs rideaux (cave Vinipolis + hangars ZAE + locaux administratifs) depuis smartphone." },
      ],
      deblocage: [
        { q: "Rideau Vinipolis bloqué en vendanges ?", a: "DRM Sète a une astreinte renforcée en vendanges (sept-oct) : délai sous 35 minutes via la D612 + D13, priorité absolue sur Vinipolis. Outillage spécifique pour rideaux lourds." },
        { q: "Éviter blocages dans la ZAE des Aires ?", a: "Dans la ZAE des Aires à Florensac, visite préventive trimestrielle recommandée pour les hangars à fort cycle. Graissage axe, contrôle moteur, nettoyage coulisses divisent par 3 les blocages urgents." },
      ],
      entretien: [
        { q: "Quelle formule pour Vinipolis ?", a: "Pour la cave coopérative Vinipolis (cycles intensifs vendanges + activité annuelle), DRM Sète recommande la formule Sérénité (3 visites + 2h curatif inclus) à partir de 680 € HT/an. Visites : juin pré-vendanges, novembre post-vendanges, mars contrôle." },
        { q: "Contrat pour boulangerie Rue de la République ?", a: "Pour une boulangerie de la Rue de la République à Florensac (cycles modérés, 7j/7), DRM Sète propose la formule Confort (2 visites/an) à partir de 350 € HT/an : avril + octobre, graissage et contrôle moteur." },
      ],
      fabrication: [
        { q: "Délai pour fabriquer un rideau Vinipolis ?", a: "Pour la cave Vinipolis de Florensac, délai fabrication 10-12 jours en atelier français selon dimensions (largeurs 4-8 m) et motorisation centrale ACM 76. Pose 1-2 jours après livraison en horaire ajusté hors vendanges." },
        { q: "Faut-il l'avis ABF pour le centre de Florensac ?", a: "Pour les façades classées autour de l'Église Saint-Jean-Baptiste à Florensac, oui. DRM Sète gère la demande administrative : coffre encastré, finition Qualicoat patrimoine, dossier graphique." },
      ],
    },
    narrative: {
      contextTitle: "Florensac : bourg viticole AOP Côtes de Thau",
      paragraphs: [
        "Florensac est un bourg viticole de 5 500 habitants au bord de l'Hérault, capitale de la cave coopérative Vinipolis et des Côtes de Thau AOP. Le tissu commerçant local s'organise sur trois zones distinctes : centre historique autour de l'Église Saint-Jean-Baptiste classée (Rue de la République, Boulevard de la Liberté), cave coopérative Vinipolis (Avenue des Vignerons), zone d'activité ZAE des Aires en périphérie.",
        "L'activité économique de Florensac est dominée par la viticulture (Vinipolis tourne 16h/jour en vendanges) et le tissu commercial du centre-ville. DRM Sète a calibré une approche différenciée : astreinte vendanges renforcée pour Vinipolis (sept-oct), entretien semestriel pour le centre-ville, contrôle trimestriel pour les hangars ZAE à fort cycle.",
        "Notre logistique d'intervention à Florensac s'appuie sur la D612 + D13 depuis Sète : délai moyen 35-40 minutes. En vendanges, véhicule supplémentaire dédié aux caves coopératives Côtes de Thau pour maintenir le délai sous 35 minutes. Astreinte 24h/24 sans majoration, essentiel pour les caves qui ne peuvent pas se permettre un arrêt en pleine réception du raisin.",
      ],
    },
  },

  // ============================================================================
  // MARSEILLAN-PLAGE — station balnéaire familiale, 4 km de plage
  // ============================================================================
  "marseillan-plage": {
    intros: {
      depannage: "Marseillan-Plage est une station balnéaire familiale du Languedoc avec 4 km de plage de sable fin, économie 100% saisonnière avril-septembre. Quand un rideau métallique tombe en panne à Marseillan-Plage, DRM Sète arrive en 35-40 minutes via la D612 + D51. Les restaurants saisonniers de l'Avenue de la Méditerranée, les boutiques de souvenirs de la Promenade Maritime et les supérettes du Boulevard de la Mer ont des horaires spécifiques aux saisons touristiques.",
      installation: "Installer un rideau métallique à Marseillan-Plage, c'est répondre aux contraintes d'une station 100% saisonnière en front de mer direct : exposition agressive à l'air iodé du Golfe du Lion, vent marin direct, cycles intensifs avril-septembre puis hibernation 6 mois. DRM Sète recommande exclusivement l'aluminium marin (18-22 ans) ou l'inox 316L (25+ ans) pour résister à l'exposition extrême.",
      reparation: "Réparer un rideau métallique à Marseillan-Plage, c'est intervenir sur des installations qui subissent une exposition climatique extrême : front de mer direct, vent marin chargé en sel, cycles intensifs avril-septembre. DRM Sète remplace fréquemment ici : ressorts oxydés en 6-8 ans (au lieu de 12-15 en zone abritée), joints EPDM dégradés en 12-15 mois, axes cintrés par fatigue + corrosion.",
      motorisation: "Motoriser un rideau métallique à Marseillan-Plage transforme le quotidien des saisonniers : plus d'effort manuel pendant les 6 mois d'activité intensive (avril-septembre), programmation horaire des fermetures en basse saison via module TaHoma. DRM Sète installe des moteurs robustes Simu T5 (cycles intensifs estivaux) avec télécommandes RTS multi-canaux pour les enseignes saisonnières multi-sites.",
      deblocage: "Un rideau métallique bloqué à Marseillan-Plage en haute saison (juillet-août), c'est une urgence absolue : les commerces saisonniers ne peuvent pas se permettre un arrêt de plusieurs heures avec 4 km de plage à fréquentation maximale. DRM Sète propose une astreinte renforcée en saison : véhicule supplémentaire dédié au littoral, délai sous 35 minutes via la D612 + D51.",
      entretien: "L'entretien préventif à Marseillan-Plage est ABSOLU : front de mer direct = corrosion saline extrême, vent marin chargé, cycles intensifs 6 mois. Sans entretien renforcé, un rideau acier perd 60-70% de durée de vie à Marseillan-Plage. DRM Sète recommande : visite en avril (avant ouverture saisonnière), visite en septembre (après fermeture), traitement anti-saumure renforcé.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Marseillan-Plage, c'est dimensionner pour l'exposition climatique la plus sévère du Bassin de Thau : front de mer direct, vent marin permanent. DRM Sète recommande exclusivement l'aluminium marin (durée 18-22 ans) ou l'inox 316L (durée 25-30 ans). Acier galvanisé standard contre-indiqué : durée divisée par 3.",
    },
    seoBlocks: {
      depannage: {
        title: "Astreinte saisonnière renforcée pour Marseillan-Plage",
        body: "En juillet-août, la <strong>haute saison de Marseillan-Plage</strong> impose à DRM Sète une astreinte renforcée : véhicule supplémentaire dédié au littoral Hérault-Sud entre Marseillan-Plage et Agde. Notre véhicule connaît l'<strong>Avenue de la Méditerranée</strong> et ses restaurants saisonniers, la <strong>Promenade Maritime</strong> et ses boutiques de souvenirs, le <strong>Boulevard de la Mer</strong> et ses supérettes. Délai moyen 35-40 minutes via la D612 + D51, maintenu même les jours de pic touristique grâce au véhicule dédié.",
      },
      installation: {
        title: "Aluminium marin ou inox 316L obligatoires à Marseillan-Plage",
        body: "À <strong>Marseillan-Plage</strong>, exposition front de mer directe = matières renforcées obligatoires. DRM Sète recommande exclusivement : <strong>aluminium marin</strong> (durée 18-22 ans, garantie 3 ans) ou <strong>inox 316L</strong> (durée 25-30 ans, garantie 5 ans). Acier galvanisé standard ou Z275 standard contre-indiqués : durée divisée par 3 face au vent marin direct. Pour les restaurants saisonniers de l'<strong>Avenue de la Méditerranée</strong>, lames pleines aluminium thermolaqué.",
      },
      reparation: {
        title: "Pannes prématurées en front de mer Marseillan-Plage",
        body: "À <strong>Marseillan-Plage</strong>, exposition climatique extrême accélère drastiquement les pannes : <strong>ressorts oxydés en 6-8 ans</strong> (au lieu de 12-15 en zone abritée), <strong>joints EPDM dégradés en 12-15 mois</strong> (au lieu de 30), <strong>axes cintrés par fatigue + corrosion</strong> en 10-12 ans. DRM Sète stock embarqué adapté : ressorts par paire renforcés, joints EPDM marin haute performance, axes acier traité diam. 60-76 mm. Réparation prioritaire en haute saison.",
      },
      motorisation: {
        title: "Motorisation robuste pour cycles saisonniers de Marseillan-Plage",
        body: "À <strong>Marseillan-Plage</strong>, les commerces saisonniers tournent 6 mois (avril-septembre) avec des cycles très intensifs en juillet-août. DRM Sète installe des moteurs robustes adaptés : <strong>Simu T5</strong> pour les restaurants et boutiques de la <strong>Promenade Maritime</strong> (cycles intensifs estivaux), <strong>module TaHoma Somfy</strong> pour programmer les fermetures hebdomadaires en basse saison, <strong>télécommande RTS multi-canaux</strong> pour les enseignes saisonnières multi-sites.",
      },
      deblocage: {
        title: "Astreinte haute saison pour Marseillan-Plage",
        body: "En juillet-août, un rideau bloqué à <strong>Marseillan-Plage</strong> est une urgence absolue : 4 km de plage à fréquentation maximale, restaurants saisonniers en plein rush, boutiques de souvenirs à flux continu. DRM Sète maintient une astreinte renforcée pendant la haute saison : véhicule supplémentaire dédié, délai sous 35 minutes via la D612 + D51 même les jours de pic. Outillage complet (manivelle, perceuse à choc, kit came), 8 déblocages sur 10 sans casse.",
      },
      entretien: {
        title: "Protocole extrême pour exposition front de mer directe",
        body: "Les commerces de <strong>Marseillan-Plage</strong> en front de mer directe subissent une corrosion saline 2x plus rapide qu'à Sète-Centre. DRM Sète a calibré un protocole extrême : <strong>visite en avril</strong> avant l'ouverture saisonnière (graissage complet, joints EPDM remplacés si dégradés, contrôle moteur), <strong>visite en septembre</strong> après fermeture (protection hivernale, rapport d'état). Joints EPDM remplacés tous les 12-15 mois (au lieu de 30 mois standard). Contrat à partir de 380 € HT/an.",
      },
      fabrication: {
        title: "Fabrication inox 316L pour exposition extrême",
        body: "Pour <strong>Marseillan-Plage</strong>, DRM Sète recommande l'inox 316L (durée 25-30 ans, garantie 5 ans constructeur) ou l'aluminium marin (durée 18-22 ans, garantie 3 ans). L'acier galvanisé standard ou Z275 traité standard est contre-indiqué : durée divisée par 3 face au vent marin direct du Golfe du Lion. Finition thermolaquée Qualicoat haute résistance UV+sel qui ne ternit pas malgré l'exposition extrême. Pour les restaurants saisonniers, lames finales renforcées avec serrure cylindre profil européen anti-snap.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel délai à Marseillan-Plage en saison ?", a: "DRM Sète arrive à Marseillan-Plage en 35-40 minutes via la D612 + D51 depuis Sète. En juillet-août, véhicule supplémentaire dédié au littoral Hérault-Sud maintient le délai sous 35 minutes même les jours de pic." },
        { q: "Astreinte renforcée pour la haute saison ?", a: "Oui, en juillet-août DRM Sète positionne un véhicule supplémentaire dédié au littoral Hérault-Sud entre Marseillan-Plage et Agde pour les urgences saisonnières. Délai maintenu sous 35 minutes." },
      ],
      installation: [
        { q: "Acier galvanisé interdit à Marseillan-Plage ?", a: "L'acier galvanisé standard et même le Z275 traité standard sont contre-indiqués à Marseillan-Plage : durée divisée par 3 face au vent marin direct du Golfe du Lion. DRM Sète recommande exclusivement l'aluminium marin (18-22 ans) ou l'inox 316L (25+ ans)." },
        { q: "Combien coûte une installation en front de mer ?", a: "À Marseillan-Plage, exposition extrême impose aluminium marin minimum : 3 500 à 4 200 € HT pour un rideau 3 m × 2,8 m motorisé Simu T5, pose comprise. Inox 316L : 4 800 à 6 200 € HT. Durée 25+ ans amortit le surcoût." },
      ],
      reparation: [
        { q: "Pourquoi des pannes si fréquentes à Marseillan-Plage ?", a: "Exposition front de mer directe à Marseillan-Plage = corrosion saline extrême : ressorts oxydés en 6-8 ans (au lieu de 12-15), joints EPDM dégradés en 12-15 mois (au lieu de 30), axes cintrés en 10-12 ans. Entretien semestriel renforcé indispensable." },
        { q: "Combien coûte un remplacement moteur à Marseillan-Plage ?", a: "Remplacement condensateur ACM (cause numéro 1) : 90 € main-d'œuvre comprise. Moteur ACM complet : 580 € TTC. Axe tubulaire (souvent cintré par fatigue + corrosion) : 420 € TTC. Garantie 2 ans pièces constructeur." },
      ],
      motorisation: [
        { q: "Quel moteur pour un restaurant saisonnier de Marseillan-Plage ?", a: "Pour un restaurant saisonnier (avril-septembre, cycles intensifs estivaux), DRM Sète recommande le moteur Simu T5 robuste : fiable sur 5 000+ cycles annuels concentrés sur 6 mois. Budget 1 100 à 1 400 € HT pose comprise." },
        { q: "Module pour programmer les fermetures hors saison ?", a: "Oui, DRM Sète installe à Marseillan-Plage des modules TaHoma Somfy pour programmer les fermetures hebdomadaires en basse saison (octobre-mars). Pratique pour les commerces saisonniers qui ferment plusieurs jours par semaine hors juillet-août." },
      ],
      deblocage: [
        { q: "Rideau bloqué un samedi soir au Front-de-Mer ?", a: "DRM Sète intervient 24h/24 sans majoration. À Marseillan-Plage en haute saison, véhicule supplémentaire dédié : délai sous 35 minutes même un samedi soir de juillet. Forfait à partir de 150 € TTC tout compris." },
        { q: "Éviter les blocages en haute saison ?", a: "Visite préventive en avril (avant ouverture saisonnière) divise par 3 les blocages urgents en juillet-août. DRM Sète propose un contrat saisonnier adapté : 2 visites (avril + septembre) à partir de 380 € HT/an." },
      ],
      entretien: [
        { q: "Quelle formule pour un saisonnier de Marseillan-Plage ?", a: "Pour un commerce saisonnier de Marseillan-Plage (avril-septembre), DRM Sète propose un contrat adapté : visite en avril avant ouverture (graissage complet, joints EPDM si dégradés, contrôle moteur), visite en septembre après fermeture (protection hivernale). Tarif à partir de 380 € HT/an." },
        { q: "Combien de fois remplacer les joints EPDM ?", a: "À Marseillan-Plage, exposition front de mer directe = joints EPDM remplacés tous les 12-15 mois (au lieu de 30 mois standard). DRM Sète intègre ce remplacement dans le contrat Confort ou Sérénité." },
      ],
      fabrication: [
        { q: "Inox 316L ou aluminium marin pour Marseillan-Plage ?", a: "À Marseillan-Plage, exposition extrême impose : aluminium marin (durée 18-22 ans, garantie 3 ans) ou inox 316L (durée 25-30 ans, garantie 5 ans). Inox 316L plus durable mais surcoût 25-30% vs aluminium. ROI inox amorti sur 20-25 ans." },
        { q: "Délai de fabrication pour commerce saisonnier ?", a: "Pour un commerce saisonnier de Marseillan-Plage, planification idéale : commande en janvier-février pour fabrication 8-12 jours puis pose en mars avant l'ouverture saisonnière d'avril. Cela évite les chantiers en haute saison." },
      ],
    },
    narrative: {
      contextTitle: "Marseillan-Plage : station balnéaire familiale 4 km de plage",
      paragraphs: [
        "Marseillan-Plage est une station balnéaire familiale du Languedoc avec 4 km de plage de sable fin et une économie 100% saisonnière (avril-septembre). Le tissu commerçant local concentre restaurants saisonniers sur l'Avenue de la Méditerranée, boutiques de souvenirs sur la Promenade Maritime, supérettes sur le Boulevard de la Mer. DRM Sète y intervient pendant les 6 mois d'activité intensive et calibre une astreinte saisonnière renforcée juillet-août.",
        "L'exposition climatique de Marseillan-Plage est la plus sévère du Bassin de Thau : front de mer direct, vent marin permanent chargé en sel, ensoleillement intense. Cela divise par 2-3 la durée de vie d'un rideau acier standard. DRM Sète recommande exclusivement l'aluminium marin (18-22 ans) ou l'inox 316L (25+ ans). Pour les réparations, stock embarqué adapté aux pannes prématurées : ressorts par paire renforcés, joints EPDM marin haute performance.",
        "Notre logistique d'intervention à Marseillan-Plage s'appuie sur la D612 + D51 depuis Sète : délai moyen 35-40 minutes. En juillet-août, véhicule supplémentaire dédié au littoral Hérault-Sud entre Marseillan-Plage et Agde pour maintenir le délai sous 35 minutes même les jours de pic touristique. Astreinte 24h/24 sans majoration, essentiel pour les commerces saisonniers qui ne peuvent pas se permettre un arrêt en haute saison.",
      ],
    },
  },

  // ============================================================================
  // LOUPIAN — village gallo-romain, oléiculture
  // ============================================================================
  "loupian": {
    intros: {
      depannage: "Loupian est un village languedocien rural connu pour sa villa gallo-romaine du Ve siècle classée monument historique, économie tournée vers la viticulture Picpoul et l'oléiculture traditionnelle. Quand un rideau métallique tombe en panne à Loupian, DRM Sète arrive en 35-40 minutes via la D613 + D51 depuis Sète. Les commerces de la Rue de la Mairie, l'Avenue du 11 Novembre et la Rue de la Plaine ont une activité agricole et de proximité.",
      installation: "Installer un rideau métallique à Loupian, c'est répondre aux besoins d'un village rural de 2000 habitants : caves coopératives Picpoul, atelier oléicole, boulangerie traditionnelle, bar-tabac, quelques lotissements résidentiels. DRM Sète recommande pour Loupian des configurations classiques (acier Z275 thermolaqué) pour les commerces et grilles cobra pour les hangars agricoles.",
      reparation: "Réparer un rideau métallique à Loupian, c'est intervenir dans un village gallo-romain avec une économie agricole : caves coopératives Picpoul, atelier oléicole, commerces traditionnels du centre. DRM Sète propose un diagnostic gratuit, devis transparent, et stock embarqué adapté aux pannes typiques en zone rurale modérément exposée.",
      motorisation: "Motoriser un rideau métallique à Loupian répond aux besoins des caves coopératives Picpoul (cycles intensifs vendanges septembre-octobre) et des commerces traditionnels du centre village. DRM Sète installe des moteurs Simu T5 pour les hangars agricoles et Somfy RS100 silencieux pour les commerces de la Rue de la Mairie. Pose en demi-journée, formation incluse.",
      deblocage: "Un rideau métallique bloqué à Loupian, c'est une urgence en vendanges pour les caves coopératives Picpoul, et un événement plus rare le reste de l'année. DRM Sète arrive en 35-40 minutes via la D613 + D51 depuis Sète. Outillage complet (manivelle, perceuse à choc, kit came), 8 déblocages sur 10 sans casse. Astreinte 24h/24 sans majoration.",
      entretien: "L'entretien préventif à Loupian est adapté au profil rural-viticole : exposition modérée (le village est à 14 km de la mer), cycles intensifs en vendanges (septembre-octobre) pour les caves Picpoul. DRM Sète propose pour les caves coopératives une visite annuelle en juin (avant vendanges), pour les commerces traditionnels une visite annuelle classique. Contrat Essentiel à partir de 220 € HT/an, Confort 350 € HT/an pour les caves.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Loupian, c'est dimensionner selon le type de commerce : caves coopératives Picpoul = grandes largeurs avec lames pleines acier Z275, atelier oléicole = grille cobra ventilée, commerces du centre village = configurations classiques. DRM Sète conçoit en atelier français, fabrication 8-12 jours, pose 1-2 jours.",
    },
    seoBlocks: {
      depannage: {
        title: "Intervention rurale pour Loupian et son arrière-pays",
        body: "DRM Sète couvre <strong>Loupian</strong> via la D613 + D51 depuis Sète, délai moyen 35-40 minutes. Notre véhicule d'astreinte connaît le village : <strong>Rue de la Mairie</strong>, <strong>Avenue du 11 Novembre</strong>, <strong>Rue de la Plaine</strong>, abords de la <strong>Villa gallo-romaine</strong> classée et de l'<strong>Église Sainte-Cécile</strong>. Stock embarqué adapté aux installations agricoles et commerces de proximité : ressorts standards, axes diam 60-76 mm, condensateurs ACM, joints EPDM standards (exposition rurale modérée).",
      },
      installation: {
        title: "Configurations adaptées au village de Loupian",
        body: "À <strong>Loupian</strong>, DRM Sète installe selon trois profils : <strong>caves coopératives Picpoul</strong> = grandes largeurs 4-6 m, lames pleines acier Z275, motorisation centrale ACM 76 ; <strong>atelier oléicole</strong> = grille cobra ventilée, motorisation Nice Era ; <strong>commerces traditionnels</strong> (boulangerie, bar-tabac de la <strong>Rue de la Mairie</strong>) = configurations classiques, motorisation tubulaire Simu T5. Métreur gratuit sous 48h.",
      },
      reparation: {
        title: "Réparation pour le tissu rural de Loupian",
        body: "Sur <strong>Loupian</strong>, DRM Sète a un fichier technique des installations rideau métallique : caves coopératives Picpoul de la <strong>Rue de la Plaine</strong>, atelier oléicole, commerces de la <strong>Rue de la Mairie</strong>, boulangerie de l'<strong>Avenue du 11 Novembre</strong>. Pannes typiques en zone rurale : condensateur ACM HS (90 €), ressorts standards (280-380 €), joints EPDM standards (140-220 €). Diagnostic gratuit, intervention programmée en horaire ouvré.",
      },
      motorisation: {
        title: "Motorisation pour caves Picpoul et commerces de Loupian",
        body: "À <strong>Loupian</strong>, DRM Sète installe : <strong>moteur central ACM 76</strong> pour les caves coopératives Picpoul (cycles intensifs vendanges, tabliers 500-1200 kg), <strong>moteur tubulaire Simu T5</strong> pour les commerces traditionnels de la <strong>Rue de la Mairie</strong>, <strong>moteur Nice Era</strong> pour l'atelier oléicole avec grille cobra. Télécommandes RTS multi-canaux, module TaHoma en option pour gestion à distance.",
      },
      deblocage: {
        title: "Astreinte rurale pour Loupian",
        body: "À <strong>Loupian</strong>, les urgences sont concentrées en vendanges (sept-oct) pour les caves coopératives Picpoul et plus rares le reste de l'année. DRM Sète arrive en 35-40 minutes via la D613 + D51 depuis Sète. Outillage complet pour rideaux agricoles (perceuse 18V, manivelle longue pour tabliers lourds, kit came lourde). Astreinte 24h/24 sans majoration, dimanches et jours fériés inclus.",
      },
      entretien: {
        title: "Entretien modéré pour le profil rural de Loupian",
        body: "DRM Sète a calibré pour <strong>Loupian</strong> un protocole adapté à l'exposition rurale modérée (14 km de la mer, pas d'embruns directs) : <strong>visite annuelle en juin</strong> pour les caves coopératives Picpoul (avant les vendanges), <strong>visite annuelle classique</strong> pour les commerces traditionnels du centre, graissage axe + ressorts, contrôle moteur, nettoyage coulisses. Joints EPDM standards remplacés tous les 30-36 mois. Contrat Essentiel à partir de 220 € HT/an.",
      },
      fabrication: {
        title: "Fabrication pour caves Picpoul et atelier oléicole",
        body: "Pour les caves coopératives Picpoul et l'atelier oléicole de <strong>Loupian</strong>, DRM Sète fabrique en atelier français : <strong>lames pleines acier galvanisé Z275</strong> pour les caves (largeurs 4-6 m, motorisation ACM 76), <strong>grilles cobra ajourées</strong> pour l'atelier oléicole (ventilation, motorisation Nice Era), <strong>configurations classiques</strong> pour les commerces de la <strong>Rue de la Mairie</strong>. Finition Qualicoat anthracite ou vert mousse (couleur vignoble). Délai 8-12 jours, pose 1-2 jours.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel délai à Loupian ?", a: "DRM Sète arrive à Loupian en moyenne en 35-40 minutes via la D613 + D51 depuis Sète. Astreinte 24h/24 sans majoration. En vendanges (sept-oct), priorité absolue sur les caves coopératives Picpoul." },
        { q: "DRM Sète intervient-il sur l'atelier oléicole ?", a: "Oui, DRM Sète intervient sur l'atelier oléicole de Loupian et autres commerces agricoles. Stock embarqué adapté aux installations rurales (grilles cobra ventilées, lames pleines acier)." },
      ],
      installation: [
        { q: "Quel rideau pour une cave Picpoul de Loupian ?", a: "Pour une cave coopérative Picpoul de Loupian, DRM Sète recommande un rideau lames pleines acier galvanisé Z275, largeur 4-6 m, motorisation centrale ACM 76. Budget 4 000 à 6 000 € HT pose comprise." },
        { q: "Combien coûte une installation Rue de la Mairie ?", a: "Une installation Rue de la Mairie à Loupian démarre à 2 500 € HT pour un rideau acier Z275 standard 3 m × 2,5 m motorisé Simu T5, pose comprise. Délai 8-12 jours fabrication + 1 jour de pose." },
      ],
      reparation: [
        { q: "Combien coûte une réparation à Loupian ?", a: "Forfait diagnostic à Loupian : 100 € (déplacement zone rurale inclus). Condensateur ACM 76 : 90 €. Moteur ACM complet : 580 € TTC. Axe tubulaire : 420 € TTC. Garantie 2 ans pièces constructeur." },
        { q: "Pannes typiques en zone rurale ?", a: "À Loupian (zone rurale modérément exposée), pannes typiques : ressorts fatigués par cycles cumulés (12 000+ cycles), axes désaxés après chocs, condensateurs ACM HS, joints EPDM dégradés en 30-36 mois (durée standard rurale)." },
      ],
      motorisation: [
        { q: "Quel moteur pour la cave Picpoul de Loupian ?", a: "Pour la cave coopérative Picpoul de Loupian avec rideau acier lourd 500-1200 kg, DRM Sète recommande le moteur central ACM 76 : couple adapté, fiable sur tabliers lourds, garantie 5 ans constructeur. Budget 1 500 à 2 500 € HT pose comprise." },
        { q: "Module connecté pour plusieurs sites ?", a: "Oui, DRM Sète installe à Loupian des modules TaHoma Somfy pour piloter à distance plusieurs rideaux (caves + atelier + locaux administratifs) depuis smartphone." },
      ],
      deblocage: [
        { q: "Rideau bloqué un dimanche à Loupian ?", a: "DRM Sète intervient 24h/24, 7j/7, dimanches et jours fériés inclus, sans majoration. À Loupian, délai 35-40 minutes via la D613 + D51 depuis Sète. Outillage complet, 8 déblocages sur 10 sans casse." },
        { q: "Astreinte renforcée en vendanges à Loupian ?", a: "Oui, DRM Sète propose pendant les vendanges (sept-oct) une astreinte renforcée pour les caves coopératives Picpoul de Loupian : délai sous 35 minutes, outillage spécifique pour rideaux lourds." },
      ],
      entretien: [
        { q: "Quelle formule pour la cave Picpoul de Loupian ?", a: "Pour la cave coopérative Picpoul de Loupian (cycles intensifs vendanges), DRM Sète recommande la formule Confort à partir de 350 € HT/an : 2 visites (juin pré-vendanges + novembre post-vendanges) avec contrôle moteur, graissage, nettoyage." },
        { q: "Contrat pour la boulangerie de la Rue de la Mairie ?", a: "Pour une boulangerie de la Rue de la Mairie à Loupian (cycles modérés, 7j/7), DRM Sète propose la formule Essentiel à partir de 220 € HT/an : 1 visite annuelle en juin avec graissage et contrôle moteur. Joints EPDM remplacés tous les 30-36 mois." },
      ],
      fabrication: [
        { q: "Délai pour fabriquer un rideau de cave à Loupian ?", a: "Pour une cave coopérative Picpoul de Loupian, délai fabrication 8-12 jours en atelier français selon dimensions (largeurs 4-6 m possibles). Pose 1-2 jours après livraison, en horaire ajusté hors vendanges (sept-oct)." },
        { q: "Configuration pour atelier oléicole ?", a: "Pour l'atelier oléicole de Loupian, DRM Sète recommande une grille cobra ajourée pour ventilation, motorisation Nice Era, finition thermolaquée vert mousse ou anthracite. Budget 3 200 à 4 500 € HT pose comprise." },
      ],
    },
    narrative: {
      contextTitle: "Loupian : village gallo-romain et bourg viticole",
      paragraphs: [
        "Loupian est un village languedocien rural de 2 000 habitants connu pour sa Villa gallo-romaine du Ve siècle classée monument historique et son musée archéologique. L'économie locale est tournée vers la viticulture Picpoul AOP (caves coopératives) et l'oléiculture traditionnelle (atelier oléicole), avec un tissu commerçant de proximité : boulangerie, bar-tabac, épicerie. DRM Sète y intervient régulièrement, principalement sur les caves coopératives en vendanges et les commerces du centre village toute l'année.",
        "Loupian est à 14 km de la mer : exposition rurale modérée, pas d'embruns directs, climat méditerranéen continental. Cela permet d'utiliser l'acier galvanisé Z275 standard (durée 15-18 ans) plutôt que l'aluminium marin obligatoire en bord d'étang. DRM Sète recommande pour les installations neuves des configurations classiques avec finition Qualicoat vert mousse ou anthracite (couleurs vignoble).",
        "Notre logistique d'intervention à Loupian s'appuie sur la D613 + D51 depuis Sète : délai moyen 35-40 minutes. En vendanges, véhicule supplémentaire dédié aux caves Picpoul du périmètre pour maintenir le délai sous 35 minutes. Astreinte 24h/24 sans majoration. Formule Confort recommandée pour les caves (350 € HT/an, 2 visites), formule Essentiel pour les commerces traditionnels (220 € HT/an, 1 visite).",
      ],
    },
  },

  // ============================================================================
  // VILLEVEYRAC — bourg viticole, Abbaye de Valmagne
  // ============================================================================
  "villeveyrac": {
    intros: {
      depannage: "Villeveyrac est un bourg viticole de l'arrière-pays héraultais, renommé pour l'Abbaye de Valmagne (cellier monumental classé) et le Picpoul de Pinet AOP. Quand un rideau métallique tombe en panne à Villeveyrac, DRM Sète arrive en 35-40 minutes — le trajet depuis Sète passe par la D2 puis la D5. Les commerces de la Rue de la Mairie et de l'Avenue de Montagnac ont une activité agricole et oléicole qui guide notre planning d'intervention.",
      installation: "Installer un rideau métallique à Villeveyrac, c'est répondre aux contraintes d'un bourg rural viticole : façades anciennes du village historique, hangars agricoles et caves coopératives Picpoul AOP en périphérie, lotissements neufs du Quartier de l'Abbaye. DRM Sète recommande pour le centre historique des configurations classiques (acier Z275 thermolaqué) et pour les caves des grilles cobra ventilées ou rideaux pleins anti-effraction.",
      reparation: "Réparer un rideau métallique à Villeveyrac, c'est intervenir dans un bourg de 3 800 habitants avec une économie agricole forte : caves coopératives Picpoul, domaines viticoles familiaux, boulangeries artisanales, épiceries. DRM Sète propose un diagnostic gratuit, devis transparent, et stock embarqué adapté aux modèles installés dans les hangars agricoles (grilles cobra, lames pleines).",
      motorisation: "Motoriser un rideau métallique à Villeveyrac répond souvent aux besoins des caves coopératives Picpoul et des domaines viticoles : ouverture/fermeture matinale et soirée, fréquence saisonnière (vendanges septembre). DRM Sète installe des moteurs Simu T5 robustes pour les hangars agricoles, des moteurs Nice Era pour les grilles cobra de ventilation, des télécommandes RTS multi-canaux pour gérer plusieurs ouvertures sur un même domaine.",
      deblocage: "Un rideau métallique bloqué à Villeveyrac, c'est une urgence en période de vendanges (septembre-octobre) : les caves coopératives et domaines viticoles ne peuvent pas se permettre d'arrêter la chaîne de réception du raisin. DRM Sète arrive en 35-40 minutes via la D2 et la D5 depuis Sète, débloque sans casse dans 8 cas sur 10. Astreinte 24h/24 sans majoration.",
      entretien: "L'entretien préventif à Villeveyrac est adapté au profil rural-viticole : exposition modérée (le bourg est à 18 km de la mer), mais cycles intensifs en période de vendanges (septembre-octobre). DRM Sète recommande pour les caves coopératives et domaines viticoles une visite annuelle en juin (avant les vendanges) avec contrôle moteur et graissage axe. Contrat Essentiel à partir de 220 € HT/an, Confort à partir de 350 € HT/an pour les caves multi-portes.",
      fabrication: "Fabriquer un rideau métallique sur-mesure pour Villeveyrac, c'est répondre aux besoins des caves viticoles Picpoul et des hangars agricoles : grandes largeurs (4-8 m), tabliers lourds (lames pleines acier ou grilles cobra ventilées), motorisation centrale ACM 76 pour les chaînes de réception. DRM Sète conçoit en atelier français, fabrication 8-12 jours, pose 1-2 jours, attestation TVA 10%.",
    },
    seoBlocks: {
      depannage: {
        title: "Couverture rurale de Villeveyrac et son arrière-pays",
        body: "DRM Sète couvre <strong>Villeveyrac</strong> et son périmètre via la D2 puis la D5 depuis Sète, délai moyen 35-40 minutes. Notre véhicule d'astreinte connaît le bourg : <strong>Rue de la Mairie</strong> et son tissu commerçant, <strong>Avenue de Montagnac</strong> et ses domaines viticoles, abords de l'<strong>Abbaye de Valmagne</strong> (cellier monumental classé) et du <strong>Lac du Pestel</strong>. Stock embarqué adapté aux modèles installés en zone agricole : grilles cobra des hangars, lames pleines des caves Picpoul, axes lourds des chaînes de réception vendanges. En septembre-octobre, période des vendanges, priorité absolue sur les caves coopératives qui ne peuvent pas se permettre un arrêt.",
      },
      installation: {
        title: "Installation pour caves viticoles et hangars agricoles",
        body: "À <strong>Villeveyrac</strong>, DRM Sète installe régulièrement pour les caves coopératives <strong>Picpoul AOP</strong> et les domaines viticoles familiaux. Configurations courantes : <strong>grandes largeurs 4-8 m</strong>, tabliers lourds (lames pleines acier ou grilles cobra ventilées), motorisation centrale ACM 76 pour gérer le poids et la fréquence de cycle en vendanges. Pour le centre du village (<strong>Rue de la Mairie</strong>), configurations classiques avec coffre apparent. Pour le quartier de l'Abbaye, intégration esthétique avec finition Qualicoat couleur vignoble (anthracite, vert mousse, terre cuite).",
      },
      reparation: {
        title: "Réparation pour le tissu agricole de Villeveyrac",
        body: "DRM Sète a un fichier technique des installations rideau métallique des caves viticoles, domaines et commerces de <strong>Villeveyrac</strong>. Pannes typiques en zone rurale viticole : ressorts fatigués par cycles intensifs de vendanges (8 000-12 000 cycles cumulés), axes désaxés après chocs commerciaux ou agricoles, condensateurs ACM HS, joints EPDM dégradés par poussières et résidus de vendanges. Diagnostic gratuit, réparation programmée en horaire ouvré pour ne pas gêner l'activité, stock embarqué adapté.",
      },
      motorisation: {
        title: "Motorisation pour caves Picpoul et hangars de Villeveyrac",
        body: "À <strong>Villeveyrac</strong>, les caves coopératives Picpoul et les domaines viticoles ont des besoins de motorisation spécifiques : <strong>moteur central ACM 76</strong> pour les tabliers lourds (500-1200 kg, lames pleines acier des caves), <strong>moteur Nice Era</strong> pour les grilles cobra ventilées des hangars de stockage, <strong>moteur tubulaire Simu T5</strong> pour les locaux administratifs des domaines. Télécommandes RTS multi-canaux pour gérer plusieurs ouvertures sur un même site. Module TaHoma Somfy pour les enseignes multi-domaines.",
      },
      deblocage: {
        title: "Astreinte vendanges renforcée pour Villeveyrac",
        body: "En septembre-octobre, période des vendanges, les caves coopératives <strong>Picpoul AOP</strong> et domaines viticoles de <strong>Villeveyrac</strong> tournent 16h/jour pour la réception du raisin. Un rideau bloqué interrompt la chaîne et coûte plusieurs milliers d'euros par heure. DRM Sète propose pour cette période une astreinte renforcée : délai maintenu sous 35 minutes via la D2 + D5, priorité absolue sur les caves en vendanges, intervention avec outillage spécifique pour rideaux lourds (manivelle de secours longue, perceuse à choc 18V, kit décoinçage came lourde).",
      },
      entretien: {
        title: "Entretien adapté au cycle viticole de Villeveyrac",
        body: "DRM Sète a calibré pour <strong>Villeveyrac</strong> un protocole d'entretien adapté au cycle viticole : <strong>visite annuelle en juin</strong> (avant les vendanges, période creuse pour les caves), avec graissage axe + ressorts, contrôle moteur (intensité absorbée, fins de course), nettoyage coulisses, vérification serrure et lame finale. Pour les caves coopératives Picpoul à fort cycle, <strong>contrôle complémentaire en novembre</strong> (après vendanges, pour anticiper les pannes liées à l'intensité d'usage). Contrat Essentiel à partir de 220 € HT/an, Confort à partir de 350 € HT/an.",
      },
      fabrication: {
        title: "Fabrication pour caves Picpoul et hangars viticoles",
        body: "Pour les caves <strong>Picpoul AOP</strong> et hangars viticoles de <strong>Villeveyrac</strong>, DRM Sète fabrique en atelier français des rideaux grandes largeurs (4-8 m) avec tabliers lourds : <strong>lames pleines acier galvanisé Z275 thermolaqué</strong> pour les caves de stockage anti-effraction, <strong>grilles cobra ajourées</strong> pour les hangars ventilés (réception raisin), <strong>polycarbonate transparent</strong> pour les vitrines de dégustation œnotouristique. Motorisation centrale ACM 76 calibrée pour les charges importantes. Finition Qualicoat couleur vignoble (anthracite, vert mousse, terre cuite). Délai 8-12 jours, pose 1-2 jours.",
      },
    },
    faqs: {
      depannage: [
        { q: "Quel délai à Villeveyrac ?", a: "DRM Sète arrive à Villeveyrac en moyenne en 35-40 minutes via la D2 puis la D5 depuis Sète. En période de vendanges (septembre-octobre), priorité absolue sur les caves coopératives Picpoul AOP." },
        { q: "Astreinte spéciale vendanges pour les caves ?", a: "Oui, DRM Sète propose pendant les vendanges (sept-oct) une astreinte renforcée : délai sous 35 minutes, priorité sur les caves coopératives, outillage spécifique pour rideaux lourds (manivelle longue, perceuse 18V, kit came lourde)." },
      ],
      installation: [
        { q: "Quel rideau pour une cave Picpoul de Villeveyrac ?", a: "Pour une cave coopérative Picpoul de Villeveyrac, DRM Sète recommande un rideau lames pleines acier galvanisé Z275 (anti-effraction) ou grille cobra ajourée (ventilation), grande largeur 4-6 m, motorisation centrale ACM 76. Budget 4 000 à 6 500 € HT pose comprise." },
        { q: "Configuration pour hangar viticole ?", a: "Pour un hangar viticole de Villeveyrac, configuration classique : grille cobra ajourée pour ventilation, motorisation Nice Era, télécommande RTS multi-canaux pour gérer plusieurs ouvertures du même domaine." },
      ],
      reparation: [
        { q: "Combien coûte une réparation à Villeveyrac ?", a: "Le forfait diagnostic à Villeveyrac démarre à 100 € (déplacement zone rurale inclus). Remplacement condensateur ACM 76 : 90 €. Moteur ACM complet : 580 € TTC. Axe tubulaire : 420 € TTC. Devis transparent avant tout démontage." },
        { q: "Pannes typiques en zone viticole ?", a: "À Villeveyrac (zone rurale viticole), pannes typiques : ressorts fatigués par cycles intensifs de vendanges (8 000-12 000 cycles cumulés), axes désaxés après chocs agricoles, joints EPDM dégradés par poussières et résidus." },
      ],
      motorisation: [
        { q: "Quel moteur pour une cave Picpoul ?", a: "Pour une cave coopérative Picpoul de Villeveyrac avec rideau acier lourd 500-1200 kg, DRM Sète recommande le moteur central ACM 76 : couple adapté, fiable sur tabliers lourds, garantie 5 ans constructeur. Budget 1 500 à 2 500 € HT pose comprise." },
        { q: "Module connecté pour plusieurs domaines ?", a: "Oui, DRM Sète installe à Villeveyrac des modules TaHoma Somfy pour piloter à distance plusieurs rideaux d'un même domaine viticole (hangar, cave, local administratif) ou de plusieurs domaines d'une même enseigne." },
      ],
      deblocage: [
        { q: "Rideau de cave Picpoul bloqué en vendanges ?", a: "DRM Sète a une astreinte renforcée en vendanges (septembre-octobre) : délai sous 35 minutes via la D2 + D5, priorité absolue sur les caves coopératives. Outillage spécifique pour rideaux lourds (perceuse 18V, manivelle longue, kit came lourde)." },
        { q: "Éviter les blocages en vendanges ?", a: "Visite préventive en juin (avant vendanges) recommandée par DRM Sète : graissage axe + ressorts, contrôle moteur, vérification fins de course, nettoyage coulisses. Cela divise par 3 les blocages urgents en pleine saison." },
      ],
      entretien: [
        { q: "Quelle formule pour une cave Picpoul ?", a: "Pour une cave coopérative Picpoul à fort cycle (vendanges + activité annuelle), DRM Sète recommande la formule Confort à partir de 350 € HT/an : 2 visites (juin pré-vendanges + novembre post-vendanges) avec contrôle moteur, graissage, nettoyage." },
        { q: "Contrat pour domaine viticole familial ?", a: "Pour un domaine viticole familial de Villeveyrac (activité saisonnière, cycles modérés hors vendanges), DRM Sète propose la formule Essentiel à partir de 220 € HT/an : 1 visite annuelle en juin avant les vendanges." },
      ],
      fabrication: [
        { q: "Délai pour fabriquer un rideau de cave Picpoul ?", a: "Pour une cave coopérative Picpoul de Villeveyrac, délai fabrication 8-12 jours en atelier français selon dimensions (largeurs 4-8 m possibles) et finitions. Pose 1-2 jours après livraison, en horaire ajusté pour ne pas gêner l'activité." },
        { q: "Configuration grille cobra pour hangar ?", a: "DRM Sète fabrique des grilles cobra ajourées pour les hangars viticoles de Villeveyrac : ventilation maximale, motorisation Nice Era, finition thermolaquée anthracite ou vert mousse. Budget 3 500 à 5 500 € HT pose comprise selon largeur." },
      ],
    },
    narrative: {
      contextTitle: "Villeveyrac : bourg viticole Picpoul AOP",
      paragraphs: [
        "Villeveyrac est un bourg viticole de 3 800 habitants dans l'arrière-pays héraultais, renommé pour l'Abbaye de Valmagne (cellier monumental classé monument historique) et le Picpoul de Pinet AOP. Le tissu commerçant local s'organise autour de la Rue de la Mairie et de l'Avenue de Montagnac, avec en périphérie les caves coopératives Picpoul, les domaines viticoles familiaux et le Lac du Pestel (base de loisirs).",
        "L'activité économique de Villeveyrac est dominée par la viticulture, avec un pic d'intensité en vendanges (septembre-octobre). Les caves coopératives Picpoul AOP tournent 16h/jour pendant cette période pour la réception du raisin, ce qui sollicite leurs rideaux métalliques au-delà du cycle normal. DRM Sète a calibré pour ces clients une astreinte renforcée en vendanges et un protocole d'entretien avec visite préventive en juin (avant la saison) et visite curative en novembre (après).",
        "Notre logistique d'intervention à Villeveyrac s'appuie sur la D2 + D5 depuis Sète : délai moyen 35-40 minutes. Stock embarqué adapté aux installations agricoles : grandes largeurs, tabliers lourds, motorisation centrale ACM 76, grilles cobra de ventilation. Astreinte 24h/24 sans majoration, dimanches et jours fériés inclus, essentiel pour les caves coopératives en vendanges qui ne peuvent pas se permettre un arrêt.",
      ],
    },
  },

};
