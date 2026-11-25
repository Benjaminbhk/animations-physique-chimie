# Animations de physique-chimie

Petites animations web interactives de physique-chimie (Seconde, et bientôt Quatrième), réalisées par **Benjamin Barre**.

Site : https://benjaminbhk.github.io/animations-physique-chimie/ (choix du niveau), puis `/seconde/` et `/quatrieme/`.

| Animation | Lien |
|---|---|
| Dissolution et dilution | https://benjaminbhk.github.io/animations-physique-chimie/dissolution-dilution/ |
| Préparer une solution par dissolution | https://benjaminbhk.github.io/animations-physique-chimie/preparation-dissolution/ |
| Visualiser une mole | https://benjaminbhk.github.io/animations-physique-chimie/mole/ |
| Le réactif limitant | https://benjaminbhk.github.io/animations-physique-chimie/reactif-limitant/ |
| Schémas de Lewis | https://benjaminbhk.github.io/animations-physique-chimie/schemas-lewis/ |
| Colonne de densités | https://benjaminbhk.github.io/animations-physique-chimie/colonne-densites/ |

## Organisation

- `index.html` : page d'entrée, choix du niveau.
- `seconde/`, `quatrieme/` : liste des simulations du niveau, classées par thème du programme (recherche + filtres). Le code commun est dans `commun/` (`style.css`, `liste.js`).
- `niveaux.js` : les niveaux et les thèmes de la 4e (ceux de la Seconde sont dans `catalogue.js`).
- `catalogue.js` : la liste des simulations (une entrée par simulation, statut `en-ligne` ou `bientot`, champ `niveau` facultatif, `seconde` par défaut).
- Un dossier par simulation : `index.html` autonome (HTML + CSS + JavaScript, sans dépendance) et `apercu.jpg` (vignette 16:9).

Pour ajouter une simulation : créer `nom-de-la-simulation/index.html` (avec le pied de page « Réalisé par Benjamin Barre » et un lien retour vers `../seconde/` ou `../quatrieme/`) et `apercu.jpg`, puis ajouter son entrée dans `catalogue.js` (avec `niveau: "quatrieme"` pour la 4e) et une ligne dans ce tableau. Les simulations restent à la racine (`/nom-de-la-simulation/`), donc les liens déjà donnés aux élèves ne changent pas.

Le site est publié avec GitHub Pages depuis la branche `main`.
