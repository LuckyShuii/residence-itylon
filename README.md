# Résidence Itylon — v2 (Refonte)

## Description
Refonte complète et modernisation du site web de **Résidence Itylon**, une résidence de gîtes en Corse. La v1 du site (PHP vanilla, voir le projet [`residence-Itylon.com`](../../residence-Itylon.com)) souffrait d'une UX datée, d'un manque de responsivité et de performances limitées. Cette v2 propose une architecture moderne **frontend / backend séparés**, conteneurisée, avec mise en cache pour optimiser les temps de réponse.

🌐 Live : [https://residence-itylon.com](https://residence-itylon.com)

## Stack technique

### Frontend (`front/`)
- **Vue 3** — framework JavaScript progressif pour interfaces modernes
- **Tailwind CSS** — utility-first CSS

### Backend (`back/`)
- **Express.js** — framework Node.js minimaliste pour API REST
- **Redis** — cache pour le contenu dynamique et les sessions
- **SQLite** — base relationnelle légère et embarquée

### DevOps
- **Docker** — application entièrement conteneurisée
- **Nginx** — reverse proxy + delivery des fichiers statiques

## Prérequis
- Docker + Docker Compose (recommandé : tout est conteneurisé)
- Optionnel pour le développement front sans Docker :
  - Node.js >= 18
  - npm ou pnpm

## Fonctionnalités
- Design **mobile-first** et entièrement responsive
- Galeries d'images haute résolution des gîtes et de leurs environs
- UI moderne reflétant l'ambiance paisible de la résidence
- Formulaire de contact personnalisé
- Temps de chargement rapides grâce au cache Redis et au delivery statique Nginx
- Environnement Docker pour déploiement et tests rapides

## Installation

```bash
# 1. Cloner le dépôt et se placer dans l'application
git clone <url-du-depot>
cd residence-itylon

# 2. Lancer la stack Docker (front + back + Redis + Nginx)
docker compose up -d
```

Pour un développement front "à plat" (sans Docker) :
```bash
cd front
npm install
npm run dev
```

## Utilisation
- Site public (via Docker) : [http://localhost](http://localhost)
- Front en mode dev (sans Docker) : [http://localhost:5173](http://localhost:5173) (port par défaut Vite)
- Production : [https://residence-itylon.com](https://residence-itylon.com)

### Documents annexes
Le dossier parent (`itylon-v2/`) contient deux documents Word :
- `Fiche_projet.docx` — fiche projet / cahier des charges initial
- `memo_update_site.docx` — mémo pour la mise à jour du site en production
