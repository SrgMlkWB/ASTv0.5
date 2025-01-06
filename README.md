# Winback Assist

A modern web application for managing Winback devices and services.

## Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with server-side rendering and file-based routing
- **React 18** - UI library for building user interfaces
- **TypeScript** - Static type checking for JavaScript

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Utility for merging Tailwind CSS classes without conflicts

### UI Components
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **Radix UI** - Unstyled, accessible components for building high‑quality design systems
- **Lucide React** - Beautiful and consistent icon set

### Dependencies

#### Core Dependencies
- `next`: The React framework for production
- `react`: Core React library
- `react-dom`: React rendering for web
- `typescript`: TypeScript language support

#### UI and Styling
- `@radix-ui/react-slot`: Utility for rendering children into another location
- `class-variance-authority`: Create style variants for components
- `clsx`: Utility for conditional className construction
- `tailwind-merge`: Smart way to merge Tailwind CSS classes
- `tailwindcss`: Utility-first CSS framework
- `lucide-react`: Icon library

#### Development Dependencies
- `@types/node`: TypeScript definitions for Node.js
- `@types/react`: TypeScript definitions for React
- `@types/react-dom`: TypeScript definitions for React DOM
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes
- `postcss`: Tool for transforming CSS with JavaScript
- `eslint`: JavaScript linter
- `eslint-config-next`: ESLint configuration for Next.js

## Features

- Device management and monitoring
- Service access (Assistance, Academy, Store)
- User profile management
- Responsive design
- Modern UI with consistent styling
- Accessible components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
  - `/ui` - Base UI components (button, card, etc.)
- `/lib` - Utility functions and shared logic
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration
