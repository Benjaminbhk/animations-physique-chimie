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
| Ajuster une équation de réaction | https://benjaminbhk.github.io/animations-physique-chimie/ajuster-equations/ |
| Spectres lumineux | https://benjaminbhk.github.io/animations-physique-chimie/spectres-lumineux/ |
| Réfraction et réflexion totale | https://benjaminbhk.github.io/animations-physique-chimie/refraction/ |
| Lentille convergente, œil et appareil photo | https://benjaminbhk.github.io/animations-physique-chimie/lentille-convergente/ |
| Interaction gravitationnelle | https://benjaminbhk.github.io/animations-physique-chimie/interaction-gravitationnelle/ |
| Transformations nucléaires | https://benjaminbhk.github.io/animations-physique-chimie/transformations-nucleaires/ |
| Le principe d'inertie | https://benjaminbhk.github.io/animations-physique-chimie/principe-inertie/ |
| Circuits électriques | https://benjaminbhk.github.io/animations-physique-chimie/circuits-electriques/ |
| Modéliser une action par une force | https://benjaminbhk.github.io/animations-physique-chimie/forces/ |
| Le vecteur vitesse | https://benjaminbhk.github.io/animations-physique-chimie/vecteur-vitesse/ |
| Chronophotographie et référentiels | https://benjaminbhk.github.io/animations-physique-chimie/chronophotographie/ |
| Transformations physiques | https://benjaminbhk.github.io/animations-physique-chimie/transformations-physiques/ |

## Organisation

- `index.html` : page d'entrée, choix du niveau.
- `seconde/`, `quatrieme/` : liste des simulations du niveau, classées par thème du programme (recherche + filtres). Le code commun est dans `commun/` (`style.css`, `liste.js`).
- `niveaux.js` : les niveaux et les thèmes de la 4e (ceux de la Seconde sont dans `catalogue.js`).
- `catalogue.js` : la liste des simulations (une entrée par simulation, statut `en-ligne` ou `bientot`, champ `niveau` facultatif, `seconde` par défaut).
- Un dossier par simulation : `index.html` autonome (HTML + CSS + JavaScript, sans dépendance) et `apercu.jpg` (vignette 16:9).

Pour ajouter une simulation : créer `nom-de-la-simulation/index.html` (avec le pied de page « Réalisé par Benjamin Barre » et un lien retour vers `../seconde/` ou `../quatrieme/`) et `apercu.jpg`, puis ajouter son entrée dans `catalogue.js` (avec `niveau: "quatrieme"` pour la 4e) et une ligne dans ce tableau. Les simulations restent à la racine (`/nom-de-la-simulation/`), donc les liens déjà donnés aux élèves ne changent pas.

## Exercices (style commun)

Chaque simulation se termine par une section d'exercices courts, sur **fond bleu ciel** (la modélisation reste sur fond blanc), compatible avec le mode sombre.

- `commun/exercices.css` : le style de la section. Ajouter `<link rel="stylesheet" href="../commun/exercices.css">` après le `<style>` de la page et donner la classe `exercices` à la section (`<section class="scene exercices">`), avec le badge `<span class="ex-badge">✎ Exercices</span>` dans le titre.
- `commun/exercices.js` : un moteur d'exercices à valeurs aléatoires (`Exo.monter(id, types)`), avec vérification immédiate (valeur juste, chiffres significatifs), score et correction rédigée (expression littérale, application numérique, résultat en écriture scientifique). Le mode d'emploi est en tête du fichier ; `dissolution-dilution/index.html` sert d'exemple.

Le site est publié avec GitHub Pages depuis la branche `main`.
