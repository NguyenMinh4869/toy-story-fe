# Quick API Setup Guide

## 🚀 Quick Start (3 Steps)

### 1. Create `.env` file in root directory:
```env
VITE_API_BASE_URL=http://localhost:5104/api
```

### 2. Update your backend CORS settings to allow:
- Origin: `http://localhost:5173` (Vite default)
- Methods: GET, POST, PUT, DELETE
- Headers: Content-Type, Authorization

### 3. Use API services in your components:

**ProductDetail.tsx:**
```typescript
import { useEffect, useState } from 'react'
import { getProductById } from '../services/productService'

const [product, setProduct] = useState<ProductDTO | null>(null)

useEffect(() => {
  const fetchProduct = async () => {
    const data = await getProductById(id!)
    setProduct(data)
  }
  fetchProduct()
}, [id])
```

**LoginPage.tsx:**
```typescript
import { login } from '../services/authService'

const onSubmit = async (data: LoginFormData) => {
  await login(data)
  navigate('/')
}
```

## 📁 Files Created

- `src/config/api.ts` - API configuration
- `src/services/apiClient.ts` - HTTP client wrapper
- `src/services/productService.ts` - Product API functions
- `src/services/authService.ts` - Auth API functions
- `src/examples/` - Example implementations

## 🔧 Backend Requirements

Your backend should return data in this format:

**Success Response:**
```json
{
  "data": { ... },
  "message": "Success",
  "success": true
}
```

**Error Response:**
```json
{
  "message": "Error message",
  "errors": { "field": ["error1", "error2"] }
}
```

## 📝 Next Steps

1. Update `.env` with your backend URL
2. Check `API_SETUP.md` for detailed instructions
3. See `src/examples/` for integration examples
4. Replace mock data in components with API calls

