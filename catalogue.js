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
    dossier: "reactif-limitant",
    titre: "Le réactif limitant",
    resume: "Régler les quantités initiales, voir les atomes se réorganiser réaction après réaction jusqu'à l'épuisement d'un réactif. Recette du sandwich, combustions, précipitation, et un exercice « qui est le limitant ? » corrigé.",
    theme: "matiere",
    chapitre: "Transformations chimiques",
    mots: ["réactif limitant", "réactif en excès", "mélange stœchiométrique", "équation de réaction", "quantité de matière"],
    statut: "en-ligne"
  }
];
