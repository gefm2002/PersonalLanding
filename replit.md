# Overview

This is a personal landing page for Gastón Esteban Fernández, a 46-year-old engineer from Buenos Aires, Argentina, who offers emotional management and self-discovery sessions. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase his services with a minimalist, modern design featuring an "enso zen" aesthetic.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Build Tool**: Vite for fast development and optimized production builds
- **Component System**: Modular design with reusable UI components following shadcn/ui patterns

## Backend Architecture  
- **Framework**: Express.js with TypeScript for the REST API server
- **Development Setup**: tsx for TypeScript execution in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Structure**: RESTful API with `/api` prefix for all routes
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Design System
- **Color Scheme**: Minimalist palette with white/black base, teal/emerald accents, and gold/beige details
- **Typography**: Inter for body text, Playfair Display for elegant headings and testimonials
- **Logo**: Custom Enso circle component representing the zen philosophy of "returning to oneself"
- **Layout**: Clean, spacious design with fade-in animations and smooth scrolling

## Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Centralized schema definitions in `/shared` for code sharing between client and server
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Validation**: Zod integration for runtime type validation and schema generation

## Development Workflow
- **Monorepo Structure**: Client and server code organized in separate directories with shared schema
- **Hot Reload**: Vite development server with HMR for rapid development
- **Build Process**: Separate build steps for client (Vite) and server (esbuild) with proper bundling
- **Type Checking**: Comprehensive TypeScript configuration across all packages

# External Dependencies

## Core Technologies
- **Database**: Neon Database (PostgreSQL-compatible) for production data storage
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation

## UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent icon system
- **Animations**: Class Variance Authority for component variant styling
- **Carousel**: Embla Carousel for interactive content display

## Development Tools
- **Replit Integration**: Cartographer plugin and runtime error modal for Replit environment
- **Code Quality**: ESLint and TypeScript for code consistency and type safety
- **Build Optimization**: PostCSS with Autoprefixer for CSS processing

## Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **CSS Utilities**: clsx and tailwind-merge for conditional styling
- **Command Interface**: cmdk for command palette functionality
- **Unique IDs**: nanoid for generating unique identifiers