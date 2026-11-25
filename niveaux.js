// Niveaux proposés sur la page d'entrée du site.
// Chaque simulation de catalogue.js appartient à un niveau via son champ `niveau`
// (absent = "seconde"). Les thèmes de la Seconde sont dans catalogue.js (window.THEMES).
window.NIVEAUX = [
  {
    id: "seconde",
    titre: "Seconde",
    sousTitre: "Seconde générale et technologique",
    couleur: "#5b3fd0",
    themes: null // = window.THEMES (catalogue.js)
  },
  {
    id: "quatrieme",
    titre: "Quatrième",
    sousTitre: "Cycle 4",
    couleur: "#2f8f6b",
    themes: [
      { id: "matiere-4",   titre: "Organisation et transformations de la matière", couleur: "#7a3fd0" },
      { id: "mouvement-4", titre: "Mouvement et interactions",                      couleur: "#1f7fbf" },
      { id: "energie-4",   titre: "L'énergie et ses conversions",                   couleur: "#c0392b" },
      { id: "signaux-4",   titre: "Des signaux pour observer et communiquer",       couleur: "#d9822b" }
    ]
  }
];
window.niveauDe = s => s.niveau || "seconde";
