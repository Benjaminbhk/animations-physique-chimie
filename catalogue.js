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
    dossier: "colonne-densites",
    titre: "Colonne de densités",
    resume: "Verser 2 à 4 liquides non miscibles dans n'importe quel ordre : ils se rangent selon leur masse volumique. Des objets coulent puis se stabilisent aux interfaces.",
    theme: "matiere",
    chapitre: "Corps purs et mélanges",
    mots: ["masse volumique", "densité", "liquides non miscibles", "flotter", "couler"],
    statut: "en-ligne"
  }
];
