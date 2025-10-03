# Unit Converter Application

## Overview

A modern, client-side unit converter web application built with React 18, TypeScript, and Vite. The application provides fast, accurate conversions across multiple categories (length, weight, temperature, volume, area, time) with a clean, utility-focused interface. Designed as a replacement for legacy converter sites with emphasis on instant feedback, mobile-first responsiveness, and smooth user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type safety and modern component patterns
- Vite as the build tool for fast development and optimized production builds
- Client-side only architecture - no backend dependencies for core functionality

**UI Component System**
- shadcn/ui components with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design system
- Custom CSS variables for theme support (light/dark mode)
- System font stack for instant loading and native feel

**State Management**
- Local component state with React hooks (useState, useEffect)
- TanStack Query (@tanstack/react-query) for potential future API data fetching
- localStorage for persisting recent conversions and user preferences
- URL parameters for shareable conversion links (e.g., `/convert?value=5&from=km&to=miles`)

**Routing**
- Wouter for lightweight client-side routing
- Single main route (Home) with 404 fallback

**Key Features Implementation**
- Real-time conversion with debounced input (300ms delay)
- Two-way converter widget with swap functionality
- Search autocomplete for unit selection using Radix UI Popover/Command components
- Fraction input support (e.g., "1/2")
- Copy-to-clipboard result functionality
- Recent conversions stored in localStorage (max 10 items)
- URL-based conversion sharing with query parameters

### Conversion Logic Architecture

**Base Unit System**
- Each category has a designated base unit (e.g., Meter for Length, Kilogram for Weight)
- All conversions go through the base unit: Input → Base → Output
- Conversion formulas stored as either numeric multipliers or string expressions

**Formula Types**
1. **Simple Multipliers** (most units): Direct numeric conversion factors
   - Example: Kilometer to Meter = multiply by 1000
2. **Expression-based** (temperature): String formulas evaluated safely
   - Example: Fahrenheit to Celsius = "(v - 32) * 5 / 9"
   - Safe evaluation without using eval() - uses Function constructor with sanitization

**Data Structure**
```typescript
interface Unit {
  name: string;
  symbol: string;
  toBase: number | string;    // Convert TO base unit
  fromBase: number | string;  // Convert FROM base unit
}

interface Category {
  id: string;
  name: string;
  baseUnit: string;
  units: Unit[];
}
```

**Number Formatting**
- Scientific notation for very large (≥1e12) or very small (<1e-6) numbers
- Automatic precision handling (up to 12 decimal places)
- Trailing zero removal for clean display

### Design System

**Color Architecture**
- CSS custom properties for theme switching
- Separate light and dark mode color definitions
- Semantic color tokens (primary, secondary, muted, destructive, accent)
- Elevation system using subtle shadows and opacity overlays

**Component Variants**
- Button variants: default, destructive, outline, secondary, ghost
- Size variants: default, sm, lg, icon
- Consistent border radius: lg (9px), md (6px), sm (3px)

**Interaction States**
- Hover elevation effects using custom utility classes
- Active state feedback with shadow reduction
- Focus-visible ring for keyboard navigation
- Disabled states with reduced opacity

### Backend Preparation (Currently Unused)

**Express Server Setup**
- Basic Express server configured but not required for core functionality
- Vite middleware integration for development
- Static file serving for production builds
- Route registration system ready for future API endpoints

**Database Schema (Drizzle ORM)**
- PostgreSQL schema defined with Drizzle ORM
- User table structure ready (currently only used as template)
- Neon Database serverless integration configured
- Migration system in place via drizzle-kit

**Storage Interface**
- Abstract storage interface (IStorage) with in-memory implementation
- CRUD methods defined for user management
- Easy swap to database-backed storage when needed

## External Dependencies

### Core Libraries
- **React 18+**: UI framework
- **TypeScript**: Type safety and developer experience
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first styling

### UI Components
- **@radix-ui/***: Accessible component primitives (dialogs, popovers, dropdowns, etc.)
- **shadcn/ui**: Pre-built component patterns built on Radix
- **class-variance-authority**: Component variant system
- **lucide-react**: Icon library

### Data & Forms
- **@tanstack/react-query**: Server state management (prepared for future use)
- **react-hook-form**: Form handling (available but not currently used)
- **zod**: Schema validation (available via drizzle-zod)

### Utilities
- **clsx** + **tailwind-merge**: Conditional className composition
- **date-fns**: Date formatting for recent conversions
- **wouter**: Lightweight routing
- **nanoid**: Unique ID generation

### Database & Backend (Configured but Optional)
- **drizzle-orm**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **express**: Web server framework
- **connect-pg-simple**: PostgreSQL session store (prepared for future authentication)

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **esbuild**: JavaScript bundler for server code
- **tsx**: TypeScript execution for development server