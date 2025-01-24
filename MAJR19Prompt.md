Objective: Create a Progressive Web App (PWA) for Winback Assist using React 19. The app should be responsive and optimized for both web and mobile platforms. The primary color for the app is #F18841.

Core Requirements:

Framework: Use React 19 with TypeScript (TSX) and Tailwind CSS for styling.

Responsive Design: Ensure the app is fully responsive and works seamlessly on all devices (desktop, tablet, mobile).

PWA Features: Implement PWA capabilities (offline support, installable, fast loading).

Navigation: Include an orange-themed top navbar (#F18841) with a responsive design on mobile (bottom navbar) for easy navigation.

Navigation Bar (Navbar):
Home:
Name: Home
URL: /
Icon: Home
Devices:
Name: Devices
URL: /devices
Icon: Monitor
Academy:
Name: Academy
URL: /academy
Icon: GraduationCap
Shop:
Name: Shop
URL: /shop
Icon: ShoppingCart
Trouble Shooting Guide:
Name: Trouble Shooting Guide
URL: /tsg
Icon

Theming: Use the Design System (DSAssist) provided below for colors, typography, spacing, and components.

Icons: Integrate FontAwesome icons for a rich and intuitive user interface.

Design System (DSAssist)
Colors
Primary Main: #F18841 (Energy Orange)

Hover: #FF9D5C

Active: #C65D24

Light: #FFF3EB

Dark: #6C2A0E

Backgrounds
Default: #0D1017

Paper: #1A1F2E

Elevated: #242936

Overlay: rgba(13, 16, 23, 0.8)

Wellness: rgba(69, 133, 140, 0.05)

Semantic Colors
Rehabilitation: #3287C8

Sport: #E73532

Women: #A7A0CF

Aesthetic: #BAA3A0

Wellness: #45858C

Typography
Primary: "Gotham", sans-serif

Fallback: "Inter", "Roboto", "Helvetica", "Arial", sans-serif

Font Weights
Thin (100): Gotham-Thin.otf, Gotham-ThinItalic.otf

Extra Light (200): Gotham-XLight.otf, Gotham-XLightItalic.otf

Light (300): Gotham-Light.otf, GothamLight.ttf, GothamLightItalic.ttf

Book (400): GothamBook.ttf, Gotham-BookItalic.otf, GothamBookItalic.ttf

Medium (500): GothamMedium.ttf, GothamMedium_1.ttf, GothamMediumItalic.ttf

Bold (700): Gotham-Bold.otf, GothamBold.ttf, GothamBoldItalic.ttf

Black (900): Gotham-Black.otf

Font Sizes
xs: 0.75rem

sm: 0.875rem

base: 1rem

lg: 1.125rem

xl: 1.25rem

2xl: 1.5rem

3xl: 1.875rem

4xl: 2.25rem

Spacing
xs: 0.25rem

sm: 0.5rem

md: 1rem

lg: 1.5rem

xl: 2rem

2xl: 3rem

3xl: 4rem

Shadows
Rehabilitation: 0 4px 14px 0 rgba(50, 135, 200, 0.1)

Sport: 0 4px 14px 0 rgba(231, 53, 50, 0.1)

Women: 0 4px 14px 0 rgba(167, 160, 207, 0.1)

Aesthetic: 0 4px 14px 0 rgba(186, 163, 160, 0.1)

Energy: 0 4px 14px 0 rgba(241, 136, 65, 0.1)

Wellness: 0 4px 14px 0 rgba(69, 133, 140, 0.1)

Z-Index
Navbar: 1100

Sidebar: 1000

Modal: 1300

Tooltip: 1400

Toast: 1500

Key Features
Navbar

Color: Orange-themed (#F18841) with hover (#FF9D5C) and active (#C65D24) states.

Links: Home (fa-home), My Device (fa-cogs), My Dashboard (fa-chart-line), My Academy (fa-graduation-cap), My Assist (fa-headset), My Profile (fa-user).

Search Bar: Integrated search functionality (fa-search).

Notifications: Notification icon with a dropdown menu (fa-bell).

Sidebar

Collapsible: Sidebar can be expanded or collapsed.

Hover States: Hover (rgba(241, 136, 65, 0.08)) and active (rgba(241, 136, 65, 0.15)) states.

User Profile: Display user information and quick actions (fa-user).

Dashboard

Key Metrics: Display treatment time, usage percentage, and other metrics using Recharts.

Protocol History: Show a history of protocols with downloadable PDFs (fa-download).

Forms

Validation: Use React Hook Form with Zod for robust form validation.

Forms Included: Login, registration, and assistance request forms.

Animations

Transitions: Use Framer Motion for smooth page transitions and hover effects.

Authentication

NextAuth.js: Implement user authentication (login, registration, password reset).

File Handling

PDFs: Use react-pdf for displaying and downloading PDFs (manuals, protocols).

Videos: Use react-player for embedding and controlling videos.

Notifications

React Toastify: Display alerts and notifications for user actions.

Additional Tools
State Management: Use React Query for managing API requests and caching.

Linting and Formatting: Use ESLint and Prettier for code quality.

Backend (if needed): Use Express.js with Prisma for the API and database management.

Icons: Use FontAwesome (via @fortawesome/react-fontawesome) for a rich and intuitive UI.

Deliverables
Fully Functional PWA: Offline support, installable, and fast loading.

Clean, Well-Documented Code: Follow best practices for maintainability.

Responsive Design: Tested on multiple devices (desktop, tablet, mobile).

PWA Capabilities: Ensure the app meets PWA standards.

Notes
Accessibility: Prioritize WCAG compliance for accessibility.

Performance: Optimize for fast load times and smooth interactions.

Design System: Consistently use the DSAssist for colors, typography, and components.

Maintainability: Ensure the app is easy to maintain and extend in the future.

Icons: Integrate FontAwesome icons to enhance the user experience.

Structure du Projet
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

## **Commandes d'Installation**

1. **React 19** : `npx create-react-app@latest winback-assist --template typescript`
2. **Tailwind CSS** : `npm install tailwindcss postcss autoprefixer`  
   `npx tailwindcss init -p`
3. **FontAwesome** : `npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons`
4. **React Query** : `npm install @tanstack/react-query`
5. **React Hook Form + Zod** : `npm install react-hook-form zod @hookform/resolvers`
6. **Framer Motion** : `npm install framer-motion`
7. **React PDF** : `npm install react-pdf`
8. **React Player** : `npm install react-player`
9. **React Toastify** : `npm install react-toastify`
10. **NextAuth.js** : `npm install next-auth`
11. **ESLint + Prettier** : `npm install eslint prettier eslint-config-prettier eslint-plugin-prettier`