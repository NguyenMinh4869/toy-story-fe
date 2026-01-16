# 🚀 Quick Start Guide - ToyStory E-Commerce

## ⚡ Installation & Running

```bash
# 1. Install dependencies (includes TypeScript)
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

## 📝 Common Tasks

### ✏️ Edit Home Page Content
**File**: [src/pages/Home.tsx](src/pages/Home.tsx)

```tsx
// Add/remove product sections, change text, etc.
<ProductSection 
  title="YOUR TITLE"
  subtitle="YOUR SUBTITLE"
  products={yourProductsArray}
/>
```

### 🎨 Modify Header/Footer
- **Header**: [src/components/Header.tsx](src/components/Header.tsx)
- **Footer**: [src/components/Footer.tsx](src/components/Footer.tsx)

*Changes here affect ALL pages*

### 🆕 Add New Page

**Step 1**: Create component
```tsx
// src/pages/NewPage.tsx
import React from 'react'

const NewPage: React.FC = () => {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}

export default NewPage
```

**Step 2**: Add route constant
```tsx
// src/routes/routePaths.ts
export const ROUTES = {
  // ... existing
  NEW_PAGE: '/new-page'
}
```

**Step 3**: Register route
```tsx
// src/routes/AppRoutes.tsx
import NewPage from '../pages/NewPage'

<Route path={ROUTES.NEW_PAGE} element={<NewPage />} />
```

### 🔗 Navigation Between Pages

```tsx
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/routePaths'

// In your component:
<Link to={ROUTES.HOME}>Home</Link>
<Link to={ROUTES.LOGIN}>Login</Link>
<Link to={`/products/${productId}`}>View Product</Link>
```

## 🎯 Key Files

| File | Purpose | Edit When... |
|------|---------|--------------|
| `App.tsx` | Global layout | Changing persistent UI |
| `Home.tsx` | Landing page | Editing home content |
| `ProductDetail.tsx` | Product page | Changing product display |
| `Header.tsx` | Navigation | Adding nav items |
| `Footer.tsx` | Footer | Updating footer links |
| `AppRoutes.tsx` | All routes | Adding new pages |
| `routePaths.ts` | Route URLs | Defining new routes |

## 🐛 Troubleshooting

### TypeScript Errors?
```bash
npm run type-check
```

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### Page Not Loading?
1. Check [AppRoutes.tsx](src/routes/AppRoutes.tsx) - route defined?
2. Check [routePaths.ts](src/routes/routePaths.ts) - path correct?
3. Check browser console for errors

## 📚 Documentation

- **[REFACTORING_SUMMARY.md](REFACTORING_SUMMARY.md)** - Complete overview
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Detailed architecture
- **[ARCHITECTURE_VISUAL.md](ARCHITECTURE_VISUAL.md)** - Visual diagrams
- **[CLEANUP.md](CLEANUP.md)** - Remove old files

## ✅ Verification Checklist

After setup, verify:

- [ ] `npm run dev` starts without errors
- [ ] Home page loads at `/`
- [ ] Can navigate to `/login`
- [ ] Can click product and see detail page
- [ ] No console errors in browser
- [ ] TypeScript shows no errors in VS Code

## 🎓 Learning Resources

### React + TypeScript
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Router v6](https://reactrouter.com/)

### Project Structure
```
src/
├── pages/       ← Full page components
├── components/  ← Reusable UI pieces
└── routes/      ← Routing config
```

## 💡 Tips

1. **Use TypeScript!** - It catches errors before runtime
2. **Use ROUTES constants** - Don't hardcode URLs
3. **Keep components small** - One responsibility per file
4. **Use proper imports** - Import from `.tsx` files
5. **Check types** - Run `npm run type-check` often

## 🚀 Ready to Code!

Start developing:
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

Happy coding! 🎉
