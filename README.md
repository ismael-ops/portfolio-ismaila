# Ismaila Portfolio 

Un portfolio, construit avec Next.js 14, React, TypeScript et Tailwind CSS.

## 🎨 Fonctionnalités

- ✨ Design minimaliste et playful
- 🎭 Animations fluides avec Framer Motion
- 📱 Entièrement responsive
- ⚡ Optimisé avec Next.js 14 et App Router
- 🎨 Styling avec Tailwind CSS
- 💅 Typographie personnalisée avec Google Fonts (Caveat & Inter)

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

3. **Ouvrir dans le navigateur**
   
   Visitez [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
ismaila-portfolio/
├── app/
│   ├── page.tsx           # Page d'accueil
│   ├── projects/
│   │   └── page.tsx       # Page projets
│   ├── about/
│   │   └── page.tsx       # Page à propos
│   ├── collections/
│   │   └── page.tsx       # Page collections
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/
│   ├── Navigation.tsx     # Composant navigation
│   └── Footer.tsx         # Composant footer
├── public/               # Fichiers statiques
└── ...config files
```

## 🎯 Pages

- **/** - Page d'accueil avec introduction
- **/projects** - Galerie de projets
- **/about** - Informations personnelles (passé, présent, futur)
- **/blog** - Blog (articles, reflexions, etc)

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations
- **Google Fonts** - Caveat (handwriting) & Inter

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js`:

```javascript
colors: {
  cream: '#F5F1E8',
  sage: '#B8C4B8',
  peach: '#FFD4B8',
  lavender: '#D4C4E8',
  mint: '#C4E8D4',
}
```

### Polices

Deux polices principales:
- **Caveat** - Pour les titres et éléments handwritten
- **Inter** - Pour le texte body


```

## 🌟 Améliorations possibles

- [ ] Ajouter un système de blog
- [ ] Intégrer un CMS (Sanity, Contentful)
- [ ] Ajouter des images réelles pour les projets
- [ ] Implémenter un formulaire de contact fonctionnel
- [ ] Switch entre francais et anglais
- [ ] Mode sombre

