# AI Agent Instructions for Meal Planner Frontend

## Project Overview
This is a React-based frontend application for a meal planning system. The application uses modern React patterns and tools with TypeScript for type safety.

## Core Technologies & Architecture
- **Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit + RTK Query for API integration
- **UI Framework**: Joy UI (MUI-based) for components
- **Authentication**: Azure AD B2C (MSAL) for identity management
- **Form Handling**: React Hook Form + Zod for validation
- **Routing**: react-router-dom v7
- **Monitoring**: Application Insights for telemetry

## Key Development Workflows

### Setup & Development
```bash
# Install dependencies (requires Node 22.15.0)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### API Integration
- Backend API is auto-generated using RTK Query's OpenAPI codegen
- To update API client after backend changes:
```bash
npm run generate-api
```
- Generated API endpoints are in `src/redux/codegen/generatedApi.ts`
- Base API configuration in `src/redux/codegen/config.json`

## Project Structure Patterns

### Feature Organization
- Features are organized in `src/features/` with domain-specific logic
- Each feature should contain:
  - React components
  - Feature-specific hooks
  - Feature-specific types
- Example: See `features/authentication/` for reference implementation

### State Management Patterns
- Use RTK Query for API data management
- Use Redux slices for UI state (see `navigationSlice.ts`)
- Global store configuration in `src/redux/store.ts`

### Authentication Flow
- MSAL configuration in `features/authentication/configuration.ts`
- Protected routes should use `AuthContext` provider
- Environment variables required:
  - VITE_MSAL_TENANT_NAME
  - VITE_MSAL_CLIENT_ID

### Form Patterns
- Use React Hook Form with Zod schemas for validation
- Forms should be typed with TypeScript interfaces
- Use Joy UI form components for consistent styling

### Styling Conventions
- Use Joy UI theming system
- Theme configuration in `src/themes/theme.ts`
- Avoid direct CSS unless necessary

### Internationalization
- Use i18next for translations
- Translation files in `src/translations/`
- Keys should follow `feature.component.purpose` pattern

## Common Gotchas & Solutions
- MSAL redirects require proper configuration in Azure AD B2C
- API codegen requires running backend locally on port 5194
- Joy UI components need ThemeProvider wrapper

## Testing & Quality Checks
- Run `npm run lint` before committing
- ESLint configuration enforces consistent code style
- TypeScript strict mode is enabled