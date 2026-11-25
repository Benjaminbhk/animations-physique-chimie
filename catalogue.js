// Liste des simulations affichées sur la page d'accueil.
// Pour en ajouter une : copier un bloc, changer les champs, et mettre le dossier de l'animation à côté.
//   theme : "matiere" | "mouvement" | "ondes"
//   statut : "en-ligne" (carte cliquable) ou "bientot" (carte grisée, annoncée)
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
    dossier: "interaction-gravitationnelle",
    titre: "Interaction gravitationnelle",
    resume: "Régler les masses et la distance de deux astres pour voir varier F = G·mA·mB/d², lancer un satellite en orbite, comparer le poids sur la Terre, la Lune, Mars ou Jupiter. Exercices d'application directe corrigés.",
    theme: "mouvement",
    niveau: "seconde",
    chapitre: "Modéliser une action sur un système",
    mots: ["interaction gravitationnelle", "force", "poids", "intensité de pesanteur", "orbite", "satellite", "exercices"],
    statut: "en-ligne"
  }
];
