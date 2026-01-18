# ToyStory E-Commerce Frontend

Modern React + TypeScript e-commerce frontend built with Vite, Tailwind CSS, and React Router.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📋 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Hook Form + Zod** - Form handling & validation
- **Lucide React** - Icons
- **Framer Motion** - Animations (ready to use)

## 🔌 Backend Integration

### Setup

1. **Create `.env` file** in root directory:
```env
VITE_API_BASE_URL=http://localhost:5104/api
VITE_ENV=development
```

2. **Start your backend** (port 5104)

3. **Start frontend**: `npm run dev`

### API Services

- `src/services/productService.ts` - Product operations
- `src/services/authService.ts` - Authentication
- `src/services/apiClient.ts` - HTTP client

See `API_SETUP.md` for detailed integration guide.

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── routes/        # Routing configuration
├── services/      # API services
├── types/         # TypeScript types
├── utils/         # Utility functions
└── config/        # Configuration
```

## 🛠️ Development

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/routes/routePaths.ts`
3. Register in `src/routes/AppRoutes.tsx`

### Using API Services

```typescript
import { getProductById } from '../services/productService'

const product = await getProductById('123')
```

## 📚 Documentation

- `API_SETUP.md` - Backend integration guide
- `QUICK_START.md` - Development quick reference

## ✅ Features

- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ React Router for navigation
- ✅ React Hook Form for forms
- ✅ JWT authentication ready
- ✅ API integration layer
- ✅ Responsive design
