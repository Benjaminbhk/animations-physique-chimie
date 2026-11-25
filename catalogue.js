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
    dossier: "mole",
    titre: "Visualiser une mole",
    resume: "Zoomer dans un cube d'eau jusqu'aux molécules, passer de la masse à la quantité de matière puis au nombre d'entités, et comparer 6,02 × 10²³ à d'autres grands nombres.",
    theme: "matiere",
    chapitre: "Quantité de matière",
    mots: ["mole", "nombre d'Avogadro", "masse molaire", "quantité de matière"],
    statut: "en-ligne"
  }
];
