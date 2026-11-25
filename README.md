# Animations de physique-chimie

Petites animations web interactives pour la classe de Seconde, réalisées par **Benjamin Barre**.

Site : https://benjaminbhk.github.io/animations-physique-chimie/

| Animation | Lien |
|---|---|
| Dissolution et dilution | https://benjaminbhk.github.io/animations-physique-chimie/dissolution-dilution/ |

## Organisation

- `index.html` : page d'accueil, avec les simulations classées par thème du programme (recherche + filtres).
- `catalogue.js` : la liste des simulations affichées sur l'accueil (une entrée par simulation, statut `en-ligne` ou `bientot`).
- Un dossier par simulation : `index.html` autonome (HTML + CSS + JavaScript, sans dépendance) et `apercu.jpg` (vignette 16:9).

Pour ajouter une simulation : créer `nom-de-la-simulation/index.html` (avec le pied de page « Réalisé par Benjamin Barre ») et `apercu.jpg`, puis ajouter son entrée dans `catalogue.js` et une ligne dans ce tableau.

Le site est publié avec GitHub Pages depuis la branche `main`.
