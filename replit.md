# Replit MD

## Overview

This is a full-stack web application built with React/TypeScript frontend and Express.js backend, focused on creating a "Templo do Abismo" (Temple of the Abyss) spiritual/educational platform. The application features a dark, mystical theme with information about initiatory levels, entities, and knowledge in the Luciferian/Left Hand Path spiritual system.

**Status**: Project reset and reconfigured for 100% Supabase integration with enhanced database schema for complete temple functionality.

## Recent Changes (Janeiro 2025)

- ✓ Fixed import path errors and CSS configuration issues
- ✓ Created mystical homepage with countdown timer and custom styling
- ✓ Added custom CSS animations (ritual-pulse, veil-shimmer) for mystical effects
- ✓ Implemented Google Fonts integration (Cinzel and Cormorant Garamond)
- ✓ Configured Vercel deployment structure with simplified frontend-only approach
- ✓ Created deployment documentation for both Replit and Vercel platforms
- → Vercel deployment ready: Static React app with mystical temple theme

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and building
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Fonts**: Custom Google Fonts (Cinzel and Cormorant Garamond) for mystical aesthetic

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution

### Build System
- **Frontend**: Vite with React plugin and development error overlay
- **Backend**: esbuild for production builds
- **TypeScript**: Shared tsconfig with path aliases for clean imports

## Key Components

### Database Schema (shared/schema.ts)
- **Users**: Basic user management with username/password and progression tracking
- **Levels**: Seven initiatory levels with descriptions, requirements, and practices
- **Entities**: Central spiritual entities with domains, elements, and symbols
- **Knowledge**: Categorized content with level restrictions

### Frontend Structure
- **Pages**: Home (main landing), Level Detail, Not Found
- **Components**: Modular sections (Header, Hero, Levels, Entities, Library, Footer)
- **UI**: Complete shadcn/ui component library with dark theme customization
- **Theming**: Custom color scheme with mystical names (abyss, ritual-gold, infernal, etc.)

### Backend Structure
- **Routes**: Centralized route registration with API prefix
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Development Server**: Integrated Vite middleware for seamless full-stack development

## Data Flow

1. **Client Requests**: React Router handles navigation and TanStack Query manages API calls
2. **API Layer**: Express routes process requests and interact with storage layer
3. **Data Storage**: Drizzle ORM handles database operations with type safety
4. **Response**: JSON responses cached by React Query for optimal UX

The application uses a clean separation between frontend and backend, with shared TypeScript types for consistency.

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React Router (Wouter), TanStack Query
- **UI/Styling**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Backend**: Express.js, Drizzle ORM, Neon Database client
- **Development**: Vite, TypeScript, tsx for development server

### Notable Integrations
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Replit Integration**: Cartographer plugin and development banner for Replit environment
- **Form Handling**: React Hook Form with Zod validation (configured but not actively used)

## Deployment Strategy

### Development
- **Dev Server**: Concurrent frontend (Vite) and backend (tsx) with hot reload
- **Database**: Uses DATABASE_URL environment variable for connection
- **Assets**: Vite dev server handles static assets and HMR

### Production
- **Build Process**: 
  1. Vite builds React app to `dist/public`
  2. esbuild bundles Express server to `dist/index.js`
- **Server**: Single Node.js process serving both API and static files
- **Database**: PostgreSQL connection via environment variable
- **Static Files**: Express serves built frontend from `dist/public`

### Configuration Notes
- Database migrations managed through Drizzle Kit
- Environment-specific configuration through NODE_ENV
- Path aliases configured for clean imports (`@/`, `@shared/`)
- TypeScript strict mode enabled with comprehensive type checking

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional Node.js hosting with minimal configuration required.