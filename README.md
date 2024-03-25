# Projet Next.js avec Cypress

Ce projet est une application Next.js qui inclut une page de profil utilisateur. Les utilisateurs peuvent voir leurs informations, les éditer et sauvegarder les modifications. Cypress est utilisé pour écrire et exécuter des tests automatisés pour s'assurer que l'application fonctionne comme prévu.

## Caractéristiques

- Affichage des informations de profil utilisateur
- Édition des informations de profil utilisateur
- Validation du formulaire d'édition
- Tests automatisés avec Cypress

## Prérequis

Avant de commencer, assurez-vous d'avoir Node.js installé sur votre système. Ce projet a été développé avec Node.js version 14.x.

## Installation

Pour installer les dépendances nécessaires, exécutez le suivant dans votre terminal à la racine du projet :

bash
npm install


Ou, si vous utilisez Yarn :

bash
yarn install


## Démarrer le Projet

Pour démarrer l'application en mode de développement, exécutez :

bash
npm run dev


Ou avec Yarn :

bash
yarn dev


Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans le navigateur.

## Exécuter les Tests avec Cypress

Pour exécuter les tests Cypress en mode interactif :

bash
npx cypress open


Pour exécuter les tests en mode headless (utile pour CI/CD) :

bash
npx cypress run


## Contribuer

Pour contribuer à ce projet, veuillez créer une branche pour chaque fonctionnalité ou correction, puis soumettez une pull request vers la branche principale.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

Les résultats des tests se sont attachés ci-dessous :
![alt text](<public/assets/Capture d'écran 2024-03-25 231804.png>)