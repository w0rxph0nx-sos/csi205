# Copilot Instructions for CSI 205 Frontend Project

## Project Overview
This is a React + Vite educational project (CSI 205) demonstrating a multi-page application with Bootstrap UI components and React Router navigation. The app implements authentication via login page, followed by a dashboard with multiple feature pages.

**Key Tech Stack:**
- React 19 with functional components and hooks
- React Router 7 for client-side routing (basename: `/multipages/`)
- Vite for build tooling with HMR
- Bootstrap 5 & react-bootstrap for UI components
- ESLint with React hooks plugin

## Architecture Patterns

### Component Organization
- **Pages**: Route-level components in `src/pages/` (e.g., `Home.jsx`, `Products.jsx`, `Calculator.jsx`)
- **Layouts**: `AppLayout.jsx` wraps pages with `<Outlet />` and provides shared header/navbar/footer
- **Components**: Reusable UI components in `src/components/` (e.g., `AppNavbar.jsx`, `AppHeader.jsx`)
- **Data**: Static data/mock services in `src/data/` (e.g., `products.jsx`, `todos.jsx`)

### State Management Pattern
**Top-down state flow via App.jsx**:
- Global state (token, role, products, carts) managed in `App.jsx` using `useState()`
- State passed down as props through `AppLayout` → `AppNavbar` → child components
- Example: `<AppLayout products={products} carts={carts} setToken={setToken} />`
- State updates bubble up via callback functions (e.g., `setCarts()`)

### Authentication Flow
- `App.jsx` checks if `token === ''` → redirects to `<Login />` component
- Login component sets `setToken()` to enable access to dashboard
- Logout button (in `AppNavbar.jsx`) calls `setToken('')` to clear token and return to login

### Data Fetching Convention
- Mock data imported from `src/data/` files as plain JavaScript objects
- `fetchProducts()` in `data/products.jsx` initializes products array once with computed properties (thumbnail URL, random price)
- Data is then passed as props through the component tree (see `Products.jsx` receiving `products` prop)

## Key Development Commands

```bash
npm run dev      # Start Vite dev server with HMR (http://localhost:5173/multipages/)
npm run build    # Production build to dist/
npm run lint     # Run ESLint check (ignores dist/)
npm run preview  # Preview production build locally
```

## Important File References

| File | Purpose |
|------|---------|
| `src/App.jsx` | Root component managing auth state & global data flow |
| `src/layouts/AppLayout.jsx` | Shared layout with header/nav/footer using `<Outlet />` |
| `src/data/products.jsx` | Mock products data with `fetchProducts()` factory |
| `src/pages/Products.jsx` | Example of prop-based state usage and conditional rendering |
| `eslint.config.js` | ESLint rules: allows uppercase unused vars for React components |

## Coding Conventions

1. **Component Names**: PascalCase (e.g., `Calculator.jsx`, `AppNavbar.jsx`)
2. **Props Pattern**: Destructure props in function signature
   ```jsx
   function Products({ products, carts, setCarts }) { ... }
   ```
3. **CSS Conventions**: Separate `.css` files per page/component (e.g., `Calculator.css`, `Products.css`)
4. **Router Links**: Use `<Link to='path'>` with React Router (relative paths without leading slash)
5. **Bootstrap Integration**: Import `bootstrap/dist/css/bootstrap.min.css` in `main.jsx`, use `react-bootstrap` components
6. **Unused Variables Rule**: ESLint allows uppercase unused variables (React components often not referenced in JSX)

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/NewPage.jsx`
2. Add route in `App.jsx`: `<Route path='newpage' element={<NewPage />} />`
3. Add nav link in `AppNavbar.jsx`
4. If data needed, create/import from `src/data/`

### Adding State to a Page
- For component-level state: use `useState()` within the page component
- For shared state: add to `App.jsx` and pass down via props

### Styling
- Use Bootstrap classes for layout/spacing: `d-flex`, `gap-2`, `position-relative`
- Add custom CSS in component `.css` files for specific styling (e.g., `.products-container`)
- Bootstrap classes available via `react-bootstrap` components and direct className usage

## Build Deployment Notes
- Vite configured with `base: '/multipages/'` for deployment to subdirectory
- Ensure all Router paths and API calls respect this basename
