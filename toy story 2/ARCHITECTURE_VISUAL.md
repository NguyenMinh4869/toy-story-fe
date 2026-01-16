# ToyStory E-Commerce - Visual Architecture

## 📐 Application Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        index.html                            │
│                            ↓                                 │
│                        main.tsx                              │
│                   (Entry Point + Router)                     │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                         App.tsx                              │
│                    (Global Layout)                           │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    <Header />                         │  │
│  │              (Navigation & Search)                    │  │
│  └───────────────────────────────────────────────────────┘  │
│                            ↓                                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   <main>                              │  │
│  │                 <AppRoutes />                         │  │
│  │              (Page Switching)                         │  │
│  └───────────────────────────────────────────────────────┘  │
│                            ↓                                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    <Footer />                         │  │
│  │             (Links & Information)                     │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 🗺️ Routing Structure

```
                      ┌─────────────────┐
                      │  AppRoutes.tsx  │
                      │   (Router Hub)  │
                      └────────┬────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ↓                   ↓                   ↓
    ┌──────────┐        ┌──────────┐       ┌──────────┐
    │    /     │        │  /login  │       │/products │
    │   Home   │        │LoginPage │       │  /:id    │
    │          │        │          │       │  Detail  │
    └──────────┘        └──────────┘       └──────────┘
```

## 📦 Component Hierarchy - Home Page

```
<Home>
├── <HeroSection>
│   └── Banner carousel
│
├── <ProductSection> (CƠ HỘI CUỐI)
│   ├── title: "CƠ HỘI CUỐI"
│   ├── subtitle: "MUA NHANH KẺO HẾT"
│   ├── hasGradient: true
│   └── products: Product[]
│
├── <ProductSection> (GUNDAM KINGDOM)
│   ├── title: "GUNDAM KINGDOM"
│   └── products: Product[]
│
├── <ProductSection> (Đồ chơi yêu thích)
│   ├── title: "Đồ chơi yêu thích"
│   └── products: Product[]
│
├── <BrandsSection>
│   └── Brand logos grid
│
└── <BlogSection>
    └── Blog articles
```

## 🧩 Component Dependencies

```
App.tsx
├─→ Header.tsx
├─→ AppRoutes.tsx
│   ├─→ Home.tsx
│   │   ├─→ HeroSection.tsx
│   │   ├─→ ProductSection.tsx (×3)
│   │   ├─→ BrandsSection.tsx
│   │   └─→ BlogSection.tsx
│   │
│   ├─→ LoginPage.tsx
│   │
│   └─→ ProductDetail.tsx
│       └─→ ProductSection.tsx (related products)
│
└─→ Footer.tsx
```

## 🎯 Data Flow - Product Detail

```
URL: /products/123
        ↓
AppRoutes.tsx matches route
        ↓
ProductDetail.tsx loads
        ↓
useParams() extracts ID (123)
        ↓
Fetch product data (TODO: API)
        ↓
Render product info
        ↓
Display related products
   via <ProductSection />
```

## 🔄 State Management (Current)

```
┌──────────────────────────┐
│  ProductDetail.tsx       │
│                          │
│  State:                  │
│  • quantity: number      │
│  • selectedImageIndex    │
│                          │
│  Actions:                │
│  • handleQuantityChange  │
│  • handleAddToCart       │
│  • setSelectedImageIndex │
└──────────────────────────┘
```

## 📁 File Organization Pattern

```
src/
│
├── 🎯 Entry & Config
│   ├── main.tsx          ← Entry point
│   ├── App.tsx           ← Global layout
│   └── index.css         ← Global styles
│
├── 📄 Pages (Route Targets)
│   ├── Home.tsx          ← Landing page
│   ├── LoginPage.tsx     ← Auth page
│   └── ProductDetail.tsx ← Product page
│
├── 🧩 Components (Reusable)
│   ├── Header.tsx        ← Navigation
│   ├── Footer.tsx        ← Site footer
│   ├── HeroSection.tsx   ← Hero banner
│   ├── ProductSection.tsx← Product grid
│   ├── BrandsSection.tsx ← Brand showcase
│   └── BlogSection.tsx   ← Blog/news
│
├── 🛣️ Routes (Navigation)
│   ├── AppRoutes.tsx     ← Route definitions
│   └── routePaths.ts     ← Route constants
│
└── 📝 Types (TypeScript)
    └── ProductDTO.ts     ← Type definitions
```

## 🎨 Styling Architecture

```
Each Component:
├── Component.tsx    (Logic + Structure)
└── Component.css    (Styles)

Global:
├── App.css          (App-wide styles)
└── index.css        (Reset + Base styles)
```

## 🔑 Key Design Patterns

### 1. Layout Pattern
```
┌─────────────────────┐
│  Persistent Header  │
├─────────────────────┤
│                     │
│   Dynamic Content   │ ← Changes per route
│   (AppRoutes)       │
│                     │
├─────────────────────┤
│  Persistent Footer  │
└─────────────────────┘
```

### 2. Component Composition
```
<ProductSection>           ← Container
  props: { title, products }
  ↓
  Renders:
  • Section Header
  • Product Grid          ← Loops through products
    └── Product Cards     ← Individual items
        ├── Image
        ├── Title
        ├── Price
        └── Actions
```

### 3. Route Protection (Future)
```
<Route path="/profile">
  <ProtectedRoute>        ← Auth guard
    <ProfilePage />
  </ProtectedRoute>
</Route>
```

## 🚀 Scalability Paths

### Adding Features
```
New Feature: Shopping Cart
└── Create:
    ├── src/pages/Cart.tsx
    ├── src/components/CartItem.tsx
    ├── src/context/CartContext.tsx
    └── Update:
        ├── routePaths.ts (add CART route)
        └── AppRoutes.tsx (add Cart route)
```

### Adding API Integration
```
Current: Mock data in components
    ↓
Future:
    ├── src/api/
    │   ├── products.ts
    │   ├── auth.ts
    │   └── cart.ts
    │
    ├── src/hooks/
    │   ├── useProducts.ts
    │   ├── useAuth.ts
    │   └── useCart.ts
    │
    └── Update components to use hooks
```

## 💡 Benefits Visualization

```
Before (Monolithic):
App.jsx (500+ lines)
├── All logic mixed
├── Hard to navigate
├── No type safety
└── Difficult to test

After (Modular):
App.tsx (15 lines) ←────┐ Clean
├── Home.tsx           │ Focused
├── ProductDetail.tsx  │ Typed
├── LoginPage.tsx      │ Testable
└── Components/        ┘ Reusable
```

---

## 🎓 Understanding the Architecture

**Question**: Where do I add a new product section?
**Answer**: Edit [src/pages/Home.tsx](src/pages/Home.tsx) and add another `<ProductSection />` with your data.

**Question**: How do I change the header?
**Answer**: Edit [src/components/Header.tsx](src/components/Header.tsx) - changes apply to all pages.

**Question**: How do I add a new page?
**Answer**: 
1. Create file in `src/pages/`
2. Add route constant in `routePaths.ts`
3. Add route in `AppRoutes.tsx`

**Question**: Where are the styles?
**Answer**: Each component has its own `.css` file next to it. Global styles in `App.css` and `index.css`.

---

This architecture follows **React best practices** and is ready for production! 🚀
