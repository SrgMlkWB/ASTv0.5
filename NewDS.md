# Cahier des Charges - Winback Assist (React 19)

---

## **1. Contexte du Projet**

### **Entreprise**
- **Nom** : Winback
- **Domaine** : Dispositifs thérapeutiques non invasifs (Tecarthérapie, cryothérapie, etc.).
- **Objectif** : Accompagner les utilisateurs pour optimiser l'usage des dispositifs médicaux grâce à une application d’assistance mobile et web.

### **Besoin**
- **Problématique** : Expansion internationale et augmentation des utilisateurs nécessitant des solutions de support.
- **Solution** : Une application web et mobile pour faciliter l'utilisation des appareils Winback, fournir une assistance technique interactive, et améliorer les résultats cliniques.

---

## **2. Objectifs de l'Application**

- **Optimiser l’utilisation des appareils** Winback par les kinésithérapeutes.
- **Fournir une assistance technique interactive** avec diagnostics automatisés.
- **Améliorer les résultats cliniques** grâce aux recommandations basées sur l’usage.
- **Faciliter l’accès aux ressources pédagogiques** et aux consommables nécessaires.

---

## **3. Public Cible**

- **Kinésithérapeutes** et professionnels de santé.
- **Utilisateurs des dispositifs Winback** dans les domaines :
  - Rééducation
  - Chirurgie orthopédique
  - Sport
  - Physio-esthétique

---

## **4. Fonctionnalités de l'Application**

### **Écran Login**
- **Description** : Page de connexion pour accéder à l’application.
- **Éléments** :
  - Champ Email
  - Champ Mot de passe
  - Case à cocher « Remember me »
  - Lien « Forgot password »
  - Boutons « Login » et « Register »
  - **Icônes FontAwesome** :
    - Email : `fa-envelope`
    - Mot de passe : `fa-lock`
    - Remember me : `fa-check-square`
    - Forgot password : `fa-question-circle`

### **Navigation Principale**
- **Description** : Barre de navigation pour accéder aux sections principales.
- **Onglets** :
  - Home : `fa-home`
  - My Device : `fa-cogs`
  - My Dashboard : `fa-chart-line`
  - My Academy : `fa-graduation-cap`
  - My Assist : `fa-headset`
  - My Profile : `fa-user`
- **Autres Éléments** :
  - Icône de notification : `fa-bell`
  - Icône de recherche : `fa-search`

### **Écran Home**
- **Description** : Écran principal avec accès rapide aux sections clés.
- **Sections** :
  - **My Devices Card** : Affiche les appareils enregistrés.
  - **Liens** : Accès à My Dashboard, My Academy et My Assist.
  - **Icônes FontAwesome** :
    - My Devices : `fa-cogs`
    - My Dashboard : `fa-chart-line`
    - My Academy : `fa-graduation-cap`
    - My Assist : `fa-headset`

### **Écran My Device**
- **Description** : Détails des appareils enregistrés.
- **Fonctionnalités** :
  - Informations sur l’appareil
  - Téléchargement du manuel utilisateur : `fa-file-pdf`
  - Accès aux vidéos de mise en route et d’accessoires : `fa-video`

### **Écran My Dashboard**
- **Description** : Statistiques d'utilisation et historique des traitements.
- **Sections** :
  - **Activités** : Graphiques des traitements et modes utilisés.
  - **Protocoles** : Historique téléchargeable des protocoles : `fa-download`
  - **Icônes FontAwesome** :
    - Activités : `fa-chart-bar`
    - Protocoles : `fa-history`

### **Écran My Assist**
- **Description** : Assistance technique et support.
- **Fonctionnalités** :
  - Formulaire d’assistance technique
  - Contact par email : `fa-envelope` ou téléphone : `fa-phone`
  - **Icônes FontAwesome** :
    - Assistance : `fa-headset`
    - Contact : `fa-address-book`

### **Écran My Academy**
- **Description** : Ressources pédagogiques et formations.
- **Fonctionnalités** :
  - Accès aux webinaires : `fa-video`, études cliniques : `fa-file-alt`, FAQ : `fa-question-circle`, et vidéos : `fa-film`
  - **Icônes FontAwesome** :
    - Webinaires : `fa-video`
    - Études cliniques : `fa-file-alt`
    - FAQ : `fa-question-circle`
    - Vidéos : `fa-film`

### **Écran Store**
- **Description** : Boutique pour acheter des consommables.
- **Fonctionnalités** :
  - Liste des produits avec ajout au panier : `fa-shopping-cart`
  - **Icônes FontAwesome** :
    - Produits : `fa-box`
    - Panier : `fa-shopping-cart`

### **Écran Profil Utilisateur**
- **Description** : Gestion des informations personnelles et des appareils.
- **Sections** :
  - Infos personnelles : `fa-user`
  - Liste des appareils : `fa-cogs`
  - Paramètres (changement de mot de passe) : `fa-cog`
  - **Icônes FontAwesome** :
    - Infos personnelles : `fa-user`
    - Appareils : `fa-cogs`
    - Paramètres : `fa-cog`

---

## **5. Design System (DSAssist)**

### **Couleurs**
#### **Couleurs de la marque**
- **Rehabilitation**: `#3287C8`
- **Sport**: `#E73532`
- **Women**: `#A7A0CF`
- **Aesthetic**: `#BAA3A0`
- **Energy**: `#F18841`
- **Wellness**: `#45858C`

#### **Couleurs primaires (Energy Orange)**
- **Primary Main**: `#F18841`
- **Primary Light**: `#FF9D5C`
- **Primary Dark**: `#C65D24`

#### **Arrière-plans**
- **Default**: `#0D1017`
- **Paper**: `#1A1F2E`
- **Elevated**: `#242936`

#### **Couleurs sémantiques**
- **Success**: `#45858C`
- **Warning**: `#F18841`
- **Error**: `#E73532`
- **Info**: `#3287C8`

### **Typographie**
- **Famille de polices** : `"Gotham", sans-serif`
- **Poids** :
  - Thin: `100`
  - Extra Light: `200`
  - Light: `300`
  - Book (Normal): `400`
  - Medium: `500`
  - Bold: `700`
  - Black: `900`
- **Tailles** :
  - xs: `0.75rem`
  - sm: `0.875rem`
  - base: `1rem`
  - lg: `1.125rem`
  - xl: `1.25rem`
  - 2xl: `1.5rem`
  - 3xl: `1.875rem`
  - 4xl: `2.25rem`

### **Espacement**
- **xs**: `0.25rem`
- **sm**: `0.5rem`
- **md**: `1rem`
- **lg**: `1.5rem`
- **xl**: `2rem`
- **2xl**: `3rem`
- **3xl**: `4rem`

### **Bordures**
- **sm**: `4px`
- **md**: `8px`
- **lg**: `12px`
- **xl**: `16px`
- **2xl**: `24px`
- **full**: `9999px`

### **Ombres**
- **Rehabilitation**: `0 4px 14px 0 rgba(50, 135, 200, 0.1)`
- **Sport**: `0 4px 14px 0 rgba(231, 53, 50, 0.1)`
- **Women**: `0 4px 14px 0 rgba(167, 160, 207, 0.1)`
- **Aesthetic**: `0 4px 14px 0 rgba(186, 163, 160, 0.1)`
- **Energy**: `0 4px 14px 0 rgba(241, 136, 65, 0.1)`
- **Wellness**: `0 4px 14px 0 rgba(69, 133, 140, 0.1)`

### **Z-Index**
- **Navbar**: `1100`
- **Sidebar**: `1000`
- **Modal**: `1300`
- **Tooltip**: `1400`
- **Toast**: `1500`

---

## **6. Architecture Technique**

### **Structure du Projet**
```
R19-AST-V0.9/
├── public/
│   ├── fonts/
│   │   └── [Add Gotham font files here]
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/
│   ├── styles/
│   │   ├── globals.css
│   │   └── fonts.css
│   ├── theme/
│   │   └── colors.ts
│   ├── pages/
│   ├── hooks/
│   └── utils/
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

### **Composants React**
#### **Principaux Composants :**
1. **`LoginForm`**
2. **`NavBar`**
3. **`HomeScreen`**
4. **`MyDeviceScreen`**
5. **`DashboardScreen`**
6. **`AssistScreen`**
7. **`AcademyScreen`**
8. **`StoreScreen`**
9. **`ProfileScreen`**

#### **Sous-composants :**
- **`ActivityStats`**
- **`ContactInfo`**
- **`DeviceInfo`**
- **`DeviceVideos`**
- **`PersonalInfoForm`**
- **`ProductCard`**
- **`ResourceLinks`**

---

## **7. Technologies Utilisées**

- **Frontend** : React 19
- **Styling** : Tailwind CSS
- **State Management** : React Query
- **Formulaires** : React Hook Form + Zod
- **Animations** : Framer Motion
- **Gestion des PDF** : react-pdf
- **Gestion des vidéos** : react-player
- **Notifications** : React Toastify
- **Backend (si nécessaire)** : Express.js + Prisma
- **Authentification** : NextAuth.js
- **Linting et Formatage** : ESLint + Prettier
- **Icônes** : FontAwesome (via `@fortawesome/react-fontawesome`)

---

## **8. Livrables**

1. **Application Fonctionnelle** : PWA avec toutes les fonctionnalités décrites.
2. **Code Propre et Documenté** : Suivre les meilleures pratiques de développement.
3. **Design Responsive** : Testé sur desktop, tablette et mobile.
4. **Capacités PWA** : Support hors ligne, installation rapide, et performances optimisées.

---

## **9. Notes**

- **Accessibilité** : Prioriser la conformité WCAG.
- **Performance** : Optimiser les temps de chargement et les interactions.
- **Maintenabilité** : Assurer que le code est facile à maintenir et à étendre.
- **Design System** : Utiliser systématiquement le DSAssist pour garantir la cohérence visuelle.
- **Icônes** : Intégrer les icônes FontAwesome pour enrichir l'interface utilisateur.

---

Ce cahier des charges fournit une base solide pour le développement de l'application **Winback Assist** avec **React 19**. Il est conçu pour être clair, complet et facile à suivre pour l'équipe de développement.