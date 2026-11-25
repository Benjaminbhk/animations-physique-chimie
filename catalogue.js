// Liste des simulations affichées sur la page d'accueil.
// Pour en ajouter une : copier un bloc, changer les champs, et mettre le dossier de l'animation à côté.
//   theme : "matiere" | "mouvement" | "ondes"
//   statut : "en-ligne" (carte cliquable) ou "bientot" (carte grisée, annoncée)
//   niveau : facultatif, "seconde" par défaut ; "quatrieme" pour la 4e (thèmes de la 4e dans niveaux.js :
//            "matiere-4" | "mouvement-4" | "energie-4" | "signaux-4")
window.THEMES = [
  { id: "matiere",   titre: "Constitution et transformations de la matière", couleur: "#7a3fd0" },
  { id: "mouvement", titre: "Mouvement et interactions",                      couleur: "#1f7fbf" },
  { id: "ondes",     titre: "Ondes et signaux",                               couleur: "#d9822b" }
];

window.CATALOGUE = [
  {
    dossier: "dissolution-dilution",
    titre: "Dissolution et dilution",
    resume: "Dissoudre un solide dans un solvant, puis diluer une solution mère avec une pipette jaugée : voir pourquoi la concentration diminue.",
    theme: "matiere",
    chapitre: "Solutions aqueuses",
    mots: ["concentration en masse", "facteur de dilution", "soluté", "solvant"],
    statut: "en-ligne"
  },
  {
    dossier: "preparation-dissolution",
    titre: "Préparer une solution par dissolution",
    resume: "Le protocole avec la fiole jaugée étape par étape, puis s'entraîner : remettre les étapes dans l'ordre et choisir la bonne fiole par le calcul.",
    theme: "matiere",
    chapitre: "Solutions aqueuses",
    mots: ["fiole jaugée", "protocole", "concentration en masse", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "mole",
    titre: "Visualiser une mole",
    resume: "Zoomer dans un cube d'eau jusqu'aux molécules, passer de la masse à la quantité de matière puis au nombre d'entités, et comparer 6,02 × 10²³ à d'autres grands nombres.",
    theme: "matiere",
    chapitre: "Quantité de matière",
    mots: ["mole", "nombre d'Avogadro", "masse molaire", "quantité de matière"],
    statut: "en-ligne"
  },
  {
    dossier: "reactif-limitant",
    titre: "Le réactif limitant",
    resume: "Régler les quantités initiales, voir les atomes se réorganiser réaction après réaction jusqu'à l'épuisement d'un réactif. Recette du sandwich, combustions, précipitation, et un exercice « qui est le limitant ? » corrigé.",
    theme: "matiere",
    chapitre: "Transformations chimiques",
    mots: ["réactif limitant", "réactif en excès", "mélange stœchiométrique", "équation de réaction", "quantité de matière"],
    statut: "en-ligne"
  },
  {
    dossier: "schemas-lewis",
    titre: "Schémas de Lewis",
    resume: "Placer des atomes de Lewis, tracer les liaisons simples, doubles ou triples, puis vérifier les règles du duet et de l'octet sur des molécules à construire.",
    theme: "matiere",
    chapitre: "Entités chimiques et molécules",
    mots: ["schéma de Lewis", "doublet liant", "doublet non liant", "électrons de valence", "règle de l'octet", "règle du duet"],
    statut: "en-ligne"
  },
  {
    dossier: "colonne-densites",
    titre: "Colonne de densités",
    resume: "Verser 2 à 4 liquides non miscibles dans n'importe quel ordre : ils se rangent selon leur masse volumique. Des objets coulent puis se stabilisent aux interfaces.",
    theme: "matiere",
    chapitre: "Corps purs et mélanges",
    mots: ["masse volumique", "densité", "liquides non miscibles", "flotter", "couler"],
    statut: "en-ligne"
  },
  {
    dossier: "ajuster-equations",
    titre: "Ajuster une équation de réaction",
    resume: "Régler les nombres stœchiométriques et voir les modèles moléculaires de chaque côté : compteurs d'atomes par élément et de charges, indices, puis exercices aléatoires corrigés (avec des ions).",
    theme: "matiere",
    chapitre: "Transformations chimiques",
    mots: ["équation de réaction", "ajuster", "nombre stœchiométrique", "conservation des éléments", "conservation de la charge", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "spectres-lumineux",
    titre: "Spectres lumineux",
    resume: "Décomposer la lumière avec un prisme : spectres continus (lampe à incandescence, Soleil), raies d'émission (H, He, Na, Hg, Ne, Li), raies d'absorption par un gaz froid, laser. Exercices : retrouver les éléments d'une étoile, classer des spectres, QCM corrigé.",
    theme: "ondes",
    chapitre: "Signaux lumineux",
    mots: ["spectre", "prisme", "longueur d'onde", "raies d'émission", "raies d'absorption", "lumière monochromatique", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "refraction",
    titre: "Réfraction et réflexion totale",
    resume: "Orienter un laser vers la surface entre deux milieux : rayons réfléchi et réfracté, angle limite, réflexion totale et dispersion de la lumière blanche. Mesures, graphique sin i₁ = f(sin i₂) et exercices corrigés.",
    theme: "ondes",
    chapitre: "Lumière : réfraction",
    mots: ["Snell-Descartes", "indice de réfraction", "angle limite", "réflexion totale", "dispersion", "normale"],
    statut: "en-ligne"
  },
  {
    dossier: "lentille-convergente",
    titre: "Lentille convergente, œil et appareil photo",
    resume: "Construire l'image d'un objet avec les trois rayons particuliers, calculer le grandissement, puis comprendre l'accommodation de l'œil et la mise au point de l'appareil photo. Exercices corrigés.",
    theme: "ondes",
    chapitre: "Vision et image",
    mots: ["lentille convergente", "foyer", "distance focale", "grandissement", "image réelle", "œil", "accommodation", "appareil photo", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "interaction-gravitationnelle",
    titre: "Interaction gravitationnelle",
    resume: "Régler les masses et la distance de deux astres pour voir varier F = G·mA·mB/d², lancer un satellite en orbite, comparer le poids sur la Terre, la Lune, Mars ou Jupiter. Exercices d'application directe corrigés.",
    theme: "mouvement",
    niveau: "seconde",
    chapitre: "Modéliser une action sur un système",
    mots: ["interaction gravitationnelle", "force", "poids", "intensité de pesanteur", "orbite", "satellite", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "transformations-nucleaires",
    titre: "Transformations nucléaires",
    resume: "Construire des noyaux et leurs isotopes, voir la fission de l'uranium et la fusion de l'hydrogène nucléon par nucléon, vérifier la conservation de A et de Z, puis s'entraîner sur des exercices corrigés.",
    theme: "matiere",
    chapitre: "Transformations nucléaires",
    mots: ["fission", "fusion", "isotopes", "nombre de masse", "numéro atomique", "équation nucléaire", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "principe-inertie",
    titre: "Le principe d'inertie",
    resume: "Lancer un palet en réglant les frottements jusqu'à zéro (table à coussin d'air), voir les forces se compenser ou non, puis une sonde spatiale et un passager de bus qui freine. Exercices corrigés.",
    theme: "mouvement",
    niveau: "seconde",
    chapitre: "Mouvement et interactions",
    mots: ["principe d'inertie", "contraposée", "forces qui se compensent", "mouvement rectiligne uniforme", "chronophotographie", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "circuits-electriques",
    titre: "Circuits électriques",
    resume: "Construire un circuit (générateur, résistances, lampe, DEL, interrupteur), brancher ampèremètres et voltmètres, vérifier la loi des nœuds et la loi des mailles, puis tracer et modéliser la caractéristique U = f(I) d'un dipôle. Exercices corrigés.",
    theme: "ondes",
    chapitre: "Signaux et capteurs",
    mots: ["loi des nœuds", "loi des mailles", "loi d'Ohm", "caractéristique", "ampèremètre", "voltmètre", "DEL", "série", "dérivation"],
    statut: "en-ligne"
  },
  {
    dossier: "forces",
    titre: "Modéliser une action par une force",
    resume: "Construire le diagramme objet-interactions, puis tracer à l'échelle les vecteurs forces (poids, réaction, tension, frottements) sur un livre, une lampe, un skieur et un ballon. Exercices d'application corrigés.",
    theme: "mouvement",
    chapitre: "Actions mécaniques et forces",
    mots: ["force", "diagramme objet-interactions", "poids", "réaction du support", "tension d'un fil", "frottements", "échelle", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "vecteur-vitesse",
    titre: "Le vecteur vitesse",
    resume: "Construire le vecteur vitesse point par point sur une chronophotographie (lancer, chute libre, mouvement circulaire, glissade), puis le vecteur variation de vitesse et le relier à la somme des forces. Exercices corrigés.",
    theme: "mouvement",
    niveau: "seconde",
    chapitre: "Décrire et modéliser un mouvement",
    mots: ["vecteur vitesse", "chronophotographie", "variation de vitesse", "échelle", "principe d'inertie", "somme des forces", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "chronophotographie",
    titre: "Chronophotographie et référentiels",
    resume: "Enregistrer les positions d'un palet, mesurer une vitesse moyenne en cliquant sur deux points, reconnaître la nature du mouvement, puis voir le même mouvement depuis le sol, un train, un manège ou un vélo. Exercices corrigés.",
    theme: "mouvement",
    niveau: "seconde",
    chapitre: "Décrire un mouvement",
    mots: ["chronophotographie", "trajectoire", "vitesse moyenne", "référentiel", "mouvement rectiligne", "mouvement circulaire", "uniforme", "accéléré", "ralenti", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "transformations-physiques",
    titre: "Transformations physiques",
    resume: "Chauffer ou refroidir un corps : particules, courbe de température avec palier (corps pur) ou sans palier (mélange), énergie Q = m × L. Six exercices corrigés pour s'entraîner.",
    theme: "matiere",
    chapitre: "Transformations physiques",
    mots: ["changement d'état", "fusion", "vaporisation", "sublimation", "palier", "corps pur", "mélange", "endothermique", "exothermique", "énergie massique", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "combustions",
    titre: "Les combustions",
    resume: "Carbone, méthane ou dihydrogène brûlent dans un flacon fermé : les molécules se cassent et les atomes se réarrangent. Compter les atomes avant et après, voir la masse se conserver, tester les produits (eau de chaux, sulfate de cuivre anhydre). Exercices corrigés.",
    theme: "matiere-4",
    niveau: "quatrieme",
    chapitre: "Atomes, molécules et transformations chimiques",
    mots: ["combustion", "atomes", "molécules", "conservation de la masse", "équation de réaction", "eau de chaux", "sulfate de cuivre anhydre", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "vitesse-lumiere",
    titre: "La vitesse de la lumière",
    resume: "Envoyer un éclair de lumière vers la Lune, les planètes et les étoiles avec une horloge en temps réel, découvrir l'année-lumière, mesurer la distance d'un orage avec le décalage entre l'éclair et le tonnerre, et comprendre que voir loin, c'est voir dans le passé (une étoile qui bouge, vue avec retard). Exercices corrigés.",
    theme: "signaux-4",
    niveau: "quatrieme",
    chapitre: "Lumière et son : propagation",
    mots: ["vitesse de la lumière", "année-lumière", "d = v × t", "vitesse du son", "orage", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "circuits-serie-derivation",
    titre: "Série, dérivation et loi d'Ohm",
    resume: "Deux lampes en série ou en dérivation : dévisser une lampe, ouvrir l'interrupteur, lire ampèremètres et voltmètres pour trouver les lois des intensités et des tensions. Puis tracer U = f(I) pour une résistance : la loi d'Ohm. Exercices corrigés.",
    theme: "energie-4",
    niveau: "quatrieme",
    chapitre: "Circuits électriques",
    mots: ["série", "dérivation", "intensité", "tension", "loi des nœuds", "loi d'Ohm", "résistance", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "mecanique-espace",
    titre: "Mouvements et interactions dans l'espace",
    resume: "Les planètes autour du Soleil et ce qui arrive si on coupe la gravitation ; poids et masse sur la Terre, la Lune, Mars ou Jupiter (balance, dynamomètre, saut de l'astronaute) ; décrire le mouvement d'une fusée, d'un satellite ou d'une sonde. Exercices corrigés.",
    theme: "mouvement-4",
    niveau: "quatrieme",
    chapitre: "Mouvements, interactions et gravitation",
    mots: ["gravitation", "Système solaire", "poids", "masse", "P = m × g", "trajectoire", "vitesse", "référentiel", "action à distance", "exercices"],
    statut: "en-ligne"
  },
  {
    dossier: "retrogradation-mars",
    titre: "La rétrogradation de Mars",
    resume: "Pourquoi Mars, vue de la Terre, fait-elle un aller-retour devant les étoiles ? La Terre et Mars autour du Soleil avec les lignes de visée, le ciel vu de la Terre, puis la boucle de Mars dans le référentiel géocentrique. Exercices corrigés.",
    theme: "mouvement-4",
    niveau: "quatrieme",
    chapitre: "Mouvements dans le Système solaire",
    mots: ["rétrogradation", "Mars", "référentiel", "héliocentrique", "géocentrique", "ligne de visée", "opposition", "exercices"],
    statut: "en-ligne"
  }
];
