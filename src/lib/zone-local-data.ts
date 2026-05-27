// Données hyper-locales par zone — utilisées par service-content.ts (rotation deterministe)
// et ServiceZoneSpecific.tsx. PLACEHOLDER en Phase 0 — REMPLI EN PHASE 3 pour chaque zone.
// Sans ce fichier, check-duplicate.py retourne 100% identical FAIL.

export type ZoneProfile =
  | "urbain-port"
  | "balneaire"
  | "residentiel-thau"
  | "commerce-dense"
  | "residentiel-chic"
  | "rural-viticole"
  | "mixte";

export interface ZoneLocalData {
  profile: ZoneProfile;
  landmarks: string[];
  streets: string[];
  quartiers: string[];
  commerces: string[];
  transport: string[];
  specifique: string;
}

// Stub Phase 0 — chaque zone remplie au Phase 3 avec scraping + handcraft
export const zoneLocalData: Record<string, ZoneLocalData> = {
  "sete": {
    profile: "urbain-port",
    landmarks: ["Étang de Thau", "Phare du Mole Saint-Louis", "Conservatoire à Rayonnement Communal", "Espace Brassens", "Île Singulière", "Quartier des Salins"],
    streets: ["Boulevard Camille Blanc", "Rue Maréchal Foch", "Avenue Gilbert Martelli", "Avenue Maréchal Juin", "Rue du Mas Coulet", "Boulevard de Verdun"],
    quartiers: ["Île Singulière", "Salins de Villeroy", "Mas Coulet", "Sablassou", "Plagette", "Saint-Joseph"],
    commerces: ["supérettes", "auto-écoles", "pressings", "agences immobilières", "garages automobiles", "ateliers artisans"],
    transport: ["A9 sortie Sète", "Liaison TER Montpellier", "Réseau urbain de bus Mosaïque", "Cars régionaux Hérault"],
    specifique: "Sous-préfecture maritime de l'Hérault à l'échelle communale (44 000 habitants), couverture du tissu péri-urbain depuis l'A9 jusqu'aux Salins de Villeroy et aux quartiers résidentiels Sablassou et Mas Coulet.",
  },
  "sete-centre": {
    profile: "urbain-port",
    landmarks: ["Canal Royal", "Halles de Sète", "Théâtre Molière", "Mont Saint-Clair", "Pont de la Civette", "Pont des Belges", "Quai de la Marine"],
    streets: ["Grand'Rue Mario Roustan", "Rue Alsace-Lorraine", "Quai du Maréchal de Lattre de Tassigny", "Rue Gambetta", "Rue Paul Valéry", "Rue Honoré Euzet"],
    quartiers: ["Centre-ville", "Quartier de la Bourse", "Port de Pêche", "Quartier Haut"],
    commerces: ["restaurants de poissons", "bars à tapas", "boulangeries", "tabacs-presse", "boutiques de mode"],
    transport: ["Gare SNCF Sète", "Arrêt de bus Halles", "Port de plaisance"],
    specifique: "Centre historique animé bordé de canaux, commerces de bord à quai et restaurants de poissons exposés à l'air marin.",
  },
  "mont-saint-clair": {
    profile: "residentiel-chic",
    landmarks: ["Chapelle Notre-Dame de la Salette", "Panorama Saint-Clair", "Pierres Blanches", "Théâtre de la Mer"],
    streets: ["Avenue du Mont Saint-Clair", "Chemin du Pioch", "Rue Antonin Vivès", "Allée Marc Sangnier"],
    quartiers: ["Mont Saint-Clair haut", "Mont Saint-Clair sud", "Coteaux Saint-Clair"],
    commerces: ["maisons individuelles", "cabinets professions libérales", "petits commerces de proximité"],
    transport: ["Lignes de bus 4 et 5", "Stationnement résidentiel"],
    specifique: "Quartier résidentiel perché offrant des villas et commerces de proximité — climat marin et embruns rapprochés.",
  },
  "ile-de-thau": {
    profile: "residentiel-thau",
    landmarks: ["Étang de Thau", "Centre commercial Île de Thau", "Théâtre de l'Île de Thau"],
    streets: ["Boulevard Camille Blanc", "Avenue de l'Île de Thau", "Rue des Cigales", "Rue du Tarn"],
    quartiers: ["Île de Thau nord", "Île de Thau sud"],
    commerces: ["supermarchés", "pharmacies", "cabinets médicaux", "boulangeries"],
    transport: ["Arrêts de bus Île de Thau", "Pistes cyclables"],
    specifique: "Quartier moderne ouvert sur l'étang, immeubles d'habitation et galerie commerciale en bord de lagune.",
  },
  "quartier-haut": {
    profile: "urbain-port",
    landmarks: ["Cimetière Marin", "Musée Paul Valéry", "Fort Saint-Pierre", "Espace Brassens"],
    streets: ["Rue Garenne", "Rue Révolution", "Boulevard Joliot-Curie", "Rue Jean Jaurès"],
    quartiers: ["Quartier Haut historique", "Plagette"],
    commerces: ["bars à vin", "ateliers d'artisans", "boutiques d'artistes"],
    transport: ["Funiculaire (saisonnier)", "Bus 1"],
    specifique: "Faubourg pittoresque dominant la mer, anciennes maisons de pêcheurs italiens et commerces artisanaux.",
  },
  "pointe-courte": {
    profile: "urbain-port",
    landmarks: ["Quartier de la Pointe Courte", "Étang de Thau", "Pont de la Pointe Courte"],
    streets: ["Rue du Pont Levis", "Quai Léopold Suquet", "Rue Maurice Clavel"],
    quartiers: ["Pointe Courte"],
    commerces: ["mareyeurs", "ateliers pêcheurs", "petits restaurants traditionnels"],
    transport: ["Lignes de bus locales"],
    specifique: "Village de pêcheurs typique au bord de l'étang, maisons aux façades colorées et ateliers artisanaux.",
  },
  "frontignan": {
    profile: "balneaire",
    landmarks: ["Église Saint-Paul", "Muscat de Frontignan", "Plage de Frontignan"],
    streets: ["Rue Jean Jaurès", "Avenue Émile Pailhès", "Rue Lucien Salette"],
    quartiers: ["Frontignan Centre", "Frontignan Plage", "La Peyrade"],
    commerces: ["caves viticoles", "restaurants", "boulangeries", "pressings"],
    transport: ["Gare SNCF Frontignan", "Bus interurbain"],
    specifique: "Capitale du Muscat, ville étendue entre vignes du Languedoc et littoral méditerranéen.",
  },
  "balaruc-les-bains": {
    profile: "balneaire",
    landmarks: ["Thermes O'Balia", "Étang de Thau", "Casino de Balaruc"],
    streets: ["Avenue de Montpellier", "Rue Pasteur", "Boulevard du Front-de-Mer"],
    quartiers: ["Balaruc-les-Bains centre", "Bord de l'étang"],
    commerces: ["thermes", "hôtels", "restaurants", "pharmacies", "boutiques de bien-être"],
    transport: ["Bus Sète-Montpellier", "Parking thermal"],
    specifique: "Première station thermale de France, atmosphère touristique et commerciale toute l'année.",
  },
  "balaruc-le-vieux": {
    profile: "residentiel-thau",
    landmarks: ["Centre médiéval", "Église Saint-Maurice", "Centre commercial Carrefour"],
    streets: ["Rue de la Mairie", "Rue Saint-Maurice", "Route de Sète"],
    quartiers: ["Village ancien", "Zone commerciale"],
    commerces: ["centre commercial Carrefour", "boulangeries", "boucheries", "pharmacie"],
    transport: ["Bus 7 et 8", "Parking commerce"],
    specifique: "Cité médiévale perchée au-dessus de l'étang, doublée d'une vaste zone commerciale moderne.",
  },
  "bouzigues": {
    profile: "residentiel-thau",
    landmarks: ["Port conchylicole", "Musée de l'Étang de Thau", "Église Saint-Jacques"],
    streets: ["Rue du Port", "Avenue Louis Tudesq", "Rue de la Mairie"],
    quartiers: ["Centre village", "Port ostréicole"],
    commerces: ["dégustations d'huîtres", "restaurants de bord d'étang", "épiceries"],
    transport: ["Bus régional Hérault Transport"],
    specifique: "Village conchylicole emblématique, capitale mondiale de l'huître de Thau.",
  },
  "loupian": {
    profile: "rural-viticole",
    landmarks: ["Villa gallo-romaine", "Église Sainte-Cécile", "Musée de site archéologique", "Caves coopératives de Loupian"],
    streets: ["Rue de la Mairie", "Avenue du 11 Novembre", "Rue de la Plaine", "Chemin de la Capoulière"],
    quartiers: ["Loupian village", "Zones viticoles", "Quartier de la villa"],
    commerces: ["caves coopératives Picpoul", "boulangerie traditionnelle", "atelier oléicole", "bar-tabac"],
    transport: ["Bus régional Hérault Transport ligne 102", "Parking village place de la Mairie"],
    specifique: "Village languedocien rural connu pour sa villa gallo-romaine du Ve siècle classée monument historique, économie tournée vers la viticulture Picpoul et l'oléiculture traditionnelle.",
  },
  "meze": {
    profile: "balneaire",
    landmarks: ["Port de Mèze (premier port conchylicole)", "Étang de Thau", "Centre médiéval Saint-Hilaire", "Plage du Taurus", "Halles aux poissons"],
    streets: ["Rue Marcel Pagnol", "Rue Massaloup", "Quai des Moulins", "Rue Pasteur", "Avenue de Pézenas"],
    quartiers: ["Mèze centre-ville", "Port conchylicole", "Plage du Taurus", "Quartier Saint-Hilaire"],
    commerces: ["restaurants de poissons et fruits de mer", "caves Picpoul", "boulangeries", "boutiques mode", "mareyeurs"],
    transport: ["Bus régional Hérault Transport", "Port de plaisance Mèze"],
    specifique: "Plus grand port conchylicole de l'étang de Thau (8000 tonnes d'huîtres/an), commune de 12 000 habitants mêlant commerces touristiques saisonniers, activité maritime intensive et patrimoine médiéval Saint-Hilaire.",
  },
  "marseillan": {
    profile: "balneaire",
    landmarks: ["Maisons Noilly Prat", "Port de Marseillan", "Église Saint-Jean-Baptiste"],
    streets: ["Rue Général Pershing", "Avenue de la Méditerranée", "Quai Antonin Gros"],
    quartiers: ["Marseillan ville", "Marseillan port"],
    commerces: ["distilleries Noilly Prat", "boulangeries", "supérettes", "boutiques de souvenirs"],
    transport: ["Bus Hérault Transport", "Port"],
    specifique: "Village viticole renommé pour le Noilly Prat, commerces du quai et patrimoine maritime.",
  },
  "marseillan-plage": {
    profile: "balneaire",
    landmarks: ["Plage de Marseillan 4 km", "Cap d'Agde 3 km", "Front de mer", "Port de plaisance Marseillan-Plage"],
    streets: ["Avenue de la Méditerranée", "Promenade Maritime", "Boulevard de la Mer", "Avenue des Pins"],
    quartiers: ["Marseillan-Plage front de mer", "Camping municipal", "Quartier des Pinèdes"],
    commerces: ["restaurants saisonniers de plage", "boutiques de souvenirs", "bars-glaciers", "supérettes saisonnières"],
    transport: ["Bus saisonnier 7 et 12", "Parking plage payant été"],
    specifique: "Station balnéaire familiale du Languedoc avec 4 km de plage de sable fin, économie 100% saisonnière avril-septembre, commerces très exposés à l'air marin et au vent marin direct.",
  },
  "vic-la-gardiole": {
    profile: "rural-viticole",
    landmarks: ["Église fortifiée Sainte-Léocadie XIIe", "Étang de Vic Natura 2000", "Massif de la Gardiole", "Plage des Aresquiers"],
    streets: ["Rue de la Mairie", "Avenue de Frontignan", "Rue des Aresquiers", "Chemin de l'Étang"],
    quartiers: ["Vic centre médiéval", "Quartier des Aresquiers", "Bord d'étang"],
    commerces: ["caves coopératives", "boulangerie", "épicerie multi-services", "tabac-presse", "restaurant de plage"],
    transport: ["Bus régional Hérault Transport ligne 102"],
    specifique: "Village languedocien de 3200 habitants entre Étang de Vic (réserve Natura 2000) et Massif de la Gardiole, église fortifiée XIIe siècle et accès direct plage des Aresquiers.",
  },
  "mireval": {
    profile: "rural-viticole",
    landmarks: ["Muscat de Mireval AOC (berceau)", "Église Saint-Vincent XIIe", "Massif de la Gardiole", "Voie Domitienne romaine"],
    streets: ["Rue Henri Aiguillon", "Rue de la Voie Domitienne", "Avenue Frédéric Mistral", "Place du Marché"],
    quartiers: ["Mireval village historique", "Zone viticole Muscat", "Hameau de la Domitienne"],
    commerces: ["caves Muscat AOC", "boulangerie traditionnelle", "boucherie-charcuterie"],
    transport: ["Bus régional ligne 102", "Gare SNCF Frontignan 4 km"],
    specifique: "Berceau historique du Muscat de Mireval AOC, village viticole de 3500 habitants traversé par la voie Domitienne romaine, commerces traditionnels en cœur de village.",
  },
  "gigean": {
    profile: "rural-viticole",
    landmarks: ["Abbaye Saint-Félix-de-Montceau ruines XIIe", "Massif de la Gardiole", "Zone commerciale A9", "Église Notre-Dame"],
    streets: ["Avenue de Montbazin", "Rue de la République", "Route de Loupian", "Boulevard des Garrigues"],
    quartiers: ["Gigean village ancien", "ZAC du Pioch Saint-Pierre", "Lotissements neufs"],
    commerces: ["caves coopératives", "garages automobiles ZAC", "boulangeries", "supermarchés zone commerciale"],
    transport: ["Bus régional ligne 102", "Sortie A9 péage Sète-Frontignan"],
    specifique: "Bourg de 6200 habitants au piémont du Massif de la Gardiole, abbaye cistercienne en ruines classée, double tissu : village ancien + zone commerciale sortie A9.",
  },
  "poussan": {
    profile: "rural-viticole",
    landmarks: ["Église Saint-Pierre fortifiée", "Lavoir municipal classé", "Vignobles AOP Picpoul", "Mairie place du marché"],
    streets: ["Rue Foch", "Rue de la Mairie", "Avenue de Montpellier", "Cours Mistral"],
    quartiers: ["Poussan centre historique", "Quartier de la Gare", "Lotissements résidentiels"],
    commerces: ["caves vinicoles", "boulangeries", "tabac-presse PMU", "pharmacie", "marché hebdomadaire"],
    transport: ["Bus régional ligne 102 Hérault Transport"],
    specifique: "Bourg viticole de 5800 habitants entouré d'oliveraies et de vignes Picpoul, marché traditionnel le jeudi matin place de la Mairie, économie agricole et petits commerces de proximité.",
  },
  "montbazin": {
    profile: "rural-viticole",
    landmarks: ["Église Saint-Pierre-aux-Liens", "Tour de Montredon", "Massif de la Mourre", "Source de la Cougourlude"],
    streets: ["Rue de la Cougourlude", "Avenue de la Mairie", "Route de Gigean", "Chemin du Moulin"],
    quartiers: ["Centre village", "Lotissements résidentiels", "Quartier du Moulin"],
    commerces: ["boulangerie de village", "bar-tabac PMU", "épicerie multi-services"],
    transport: ["Bus régional ligne 102", "Parking église"],
    specifique: "Village languedocien tranquille au pied de la Tour de Montredon, point de vue panoramique sur le Bassin de Thau et l'étang.",
  },
  "villeveyrac": {
    profile: "rural-viticole",
    landmarks: ["Abbaye de Valmagne", "Vignobles AOP Picpoul", "Lac du Pestel", "Église Saint-Michel"],
    streets: ["Rue de la Mairie", "Avenue de Montagnac", "Route de Pézenas", "Avenue du Lac"],
    quartiers: ["Village historique", "Lotissements neufs", "Quartier de l'Abbaye"],
    commerces: ["caves coopératives Picpoul AOP", "boulangerie artisanale", "épicerie", "domaine viticole"],
    transport: ["Bus régional Hérault Transport"],
    specifique: "Bourg viticole renommé pour l'Abbaye de Valmagne (cellier monumental classé), le Picpoul de Pinet AOP et le Lac du Pestel base de loisirs.",
  },
  "cournonsec": {
    profile: "residentiel-chic",
    landmarks: ["Église Saint-Pierre romane", "Vignobles Grés de Montpellier", "Massif de la Gardiole", "Source du Coulazou"],
    streets: ["Avenue de la Gardiole", "Rue de la Mairie", "Chemin du Coulazou", "Route de Cournonterral"],
    quartiers: ["Cournonsec village médiéval", "Quartiers pavillonnaires neufs", "Hameau du Coulazou"],
    commerces: ["boulangerie de village", "tabac-presse", "épicerie locale Vival"],
    transport: ["Bus régional ligne 28 Montpellier-Mèze"],
    specifique: "Petite commune résidentielle de 2400 habitants en bordure de Montpellier, mêlant lotissements pavillonnaires neufs et bâti ancien autour de l'église romane Saint-Pierre.",
  },
  "cournonterral": {
    profile: "residentiel-chic",
    landmarks: ["Pailhasses (carnaval mardi gras)", "Église Saint-Pierre du XIe", "Vignes AOC Languedoc", "Marché aux truffes"],
    streets: ["Rue de la République", "Avenue de la Salette", "Boulevard des Pailhasses", "Rue du Marché"],
    quartiers: ["Cournonterral centre", "Pavillonnaire ouest", "Quartier de la Salette"],
    commerces: ["boulangerie traditionnelle", "pharmacie", "supérette", "domaine viticole"],
    transport: ["Bus régional ligne 28 Hérault Transport"],
    specifique: "Bourg de 6500 habitants célèbre pour son carnaval médiéval des Pailhasses (Mardi gras), village vignoble AOC Grés de Montpellier à la croisée de Sète et Montpellier.",
  },
  "villeneuve-les-maguelone": {
    profile: "balneaire",
    landmarks: ["Cathédrale de Maguelone", "Plages", "Étang du Prévost"],
    streets: ["Avenue des Pins", "Rue de la Cathédrale"],
    quartiers: ["Villeneuve centre", "Maguelone"],
    commerces: ["restaurants", "boulangeries", "boutiques saisonnières"],
    transport: ["Tramway de Montpellier proche", "Bus"],
    specifique: "Commune littorale entre étangs et plage de Maguelone, dynamique touristique forte.",
  },
  "agde": {
    profile: "balneaire",
    landmarks: ["Cathédrale Saint-Étienne", "Phare du Cap d'Agde", "Port d'Agde"],
    streets: ["Rue Jean Jaurès", "Quai du Chapitre", "Avenue de la Méditerranée"],
    quartiers: ["Agde centre", "La Grange", "Le Grau d'Agde"],
    commerces: ["restaurants", "poissonneries", "boutiques de mode", "supérettes"],
    transport: ["Gare SNCF Agde", "Bus", "Port"],
    specifique: "Cité grecque historique sur l'Hérault, mêlant patrimoine médiéval et station balnéaire active.",
  },
  "pinet": {
    profile: "rural-viticole",
    landmarks: ["AOP Picpoul de Pinet (berceau)", "Église Saint-Étienne", "Maison des Vins du Picpoul", "Mas Saint-Hubert"],
    streets: ["Rue de la Cave", "Avenue de la Méditerranée", "Place du Village", "Route de Mèze"],
    quartiers: ["Pinet village historique", "Quartier des vignes"],
    commerces: ["caves coopératives Picpoul (5 domaines)", "boulangerie de village", "épicerie", "maison des vins œnotouristique"],
    transport: ["Bus régional Hérault Transport ligne 102"],
    specifique: "Berceau et capitale historique de l'AOP Picpoul de Pinet, village viticole de 1500 habitants tourné vers l'œnotourisme et la dégustation au domaine.",
  },
  "pomerols": {
    profile: "rural-viticole",
    landmarks: ["Église Saint-Saturnin XIe siècle", "Vignobles Picpoul AOP", "Domaine de Belle Mare", "Source thermale"],
    streets: ["Rue de la République", "Avenue de Pinet", "Place du 14 Juillet", "Rue de la Cave"],
    quartiers: ["Pomerols centre médiéval", "Quartier viticole"],
    commerces: ["cave coopérative Cave de Pomerols", "boulangerie", "supérette Casino", "domaine viticole familial"],
    transport: ["Bus régional ligne 102 Hérault Transport"],
    specifique: "Village viticole de 2200 habitants au coeur de l'AOP Picpoul de Pinet, église romane Saint-Saturnin du XIe siècle inscrite monument historique.",
  },
  "florensac": {
    profile: "rural-viticole",
    landmarks: ["Pont sur l'Hérault", "Église Saint-Jean-Baptiste classée", "Vignobles Côtes de Thau", "Cave Vinipolis"],
    streets: ["Rue de la République", "Avenue des Vignerons", "Boulevard de la Liberté", "Rue du 14 Juillet"],
    quartiers: ["Florensac centre", "Quartier de l'Hérault", "ZAE des Aires"],
    commerces: ["cave Vinipolis Côtes de Thau", "boulangeries", "pharmacie", "garages automobiles"],
    transport: ["Bus régional Hérault Transport", "Gare SNCF Agde 8 km"],
    specifique: "Bourg viticole de 5500 habitants au bord de l'Hérault, capitale de la cave coopérative Vinipolis et des Côtes de Thau AOP.",
  },
};
