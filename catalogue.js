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
  }
];
