# Animations de physique-chimie

Petites animations web interactives pour la classe de Seconde, réalisées par **Benjamin Barre**.

Site : https://benjaminbhk.github.io/animations-physique-chimie/

| Animation | Lien |
|---|---|
| Dissolution et dilution | https://benjaminbhk.github.io/animations-physique-chimie/dissolution-dilution/ |
| Préparer une solution par dissolution | https://benjaminbhk.github.io/animations-physique-chimie/preparation-dissolution/ |
| Visualiser une mole | https://benjaminbhk.github.io/animations-physique-chimie/mole/ |
| Le réactif limitant | https://benjaminbhk.github.io/animations-physique-chimie/reactif-limitant/ |
| Schémas de Lewis | https://benjaminbhk.github.io/animations-physique-chimie/schemas-lewis/ |
| Colonne de densités | https://benjaminbhk.github.io/animations-physique-chimie/colonne-densites/ |

## Organisation

- `index.html` : page d'accueil, avec les simulations classées par thème du programme (recherche + filtres).
- `catalogue.js` : la liste des simulations affichées sur l'accueil (une entrée par simulation, statut `en-ligne` ou `bientot`).
- Un dossier par simulation : `index.html` autonome (HTML + CSS + JavaScript, sans dépendance) et `apercu.jpg` (vignette 16:9).

Pour ajouter une simulation : créer `nom-de-la-simulation/index.html` (avec le pied de page « Réalisé par Benjamin Barre ») et `apercu.jpg`, puis ajouter son entrée dans `catalogue.js` et une ligne dans ce tableau.

## Exercices (style commun)

Chaque simulation se termine par une section d'exercices courts, sur **fond bleu ciel** (la modélisation reste sur fond blanc), compatible avec le mode sombre.

- `commun/exercices.css` : le style de la section. Ajouter `<link rel="stylesheet" href="../commun/exercices.css">` après le `<style>` de la page et donner la classe `exercices` à la section (`<section class="scene exercices">`), avec le badge `<span class="ex-badge">✎ Exercices</span>` dans le titre.
- `commun/exercices.js` : un moteur d'exercices à valeurs aléatoires (`Exo.monter(id, types)`), avec vérification immédiate (valeur juste, chiffres significatifs), score et correction rédigée (expression littérale, application numérique, résultat en écriture scientifique). Le mode d'emploi est en tête du fichier ; `dissolution-dilution/index.html` sert d'exemple.

Le site est publié avec GitHub Pages depuis la branche `main`.
