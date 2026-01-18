# Backend API Integration Guide

## Step 1: Environment Configuration

Create a `.env` file in the root directory:

```env
# Backend API Configuration
# Your .NET backend runs on port 5104
VITE_API_BASE_URL=http://localhost:5104/api

# For production, update to:
# VITE_API_BASE_URL=https://your-production-api.com/api
```

**Important:** 
- Vite requires the `VITE_` prefix for environment variables
- Restart your dev server after changing `.env` file
- Never commit `.env` file (it's in `.gitignore`)

## Step 2: Update Backend URL

Edit `src/config/api.ts` if needed, or set `VITE_API_BASE_URL` in `.env`

## Step 3: CORS Configuration (Backend)

Make sure your backend allows requests from your frontend:

### .NET Backend Example:
```csharp
// Program.cs or Startup.cs
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // Vite default port
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

app.UseCors("AllowFrontend");
```

## Step 4: Using API Services

### Example: Fetching Products in Component

```typescript
import { useEffect, useState } from 'react'
import { getProductById } from '../services/productService'
import { ProductDTO } from '../types/ProductDTO'

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<ProductDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProductById(id!)
        setProduct(data)
      } catch (err: any) {
        setError(err.message || 'Failed to fetch product')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return <div>Product not found</div>

  return (
    // Your component JSX
  )
}
```

### Example: Login Integration

```typescript
import { login } from '../services/authService'
import { useNavigate } from 'react-router-dom'

const onSubmit = async (data: LoginFormData) => {
  try {
    await login(data)
    navigate('/') // Redirect after successful login
  } catch (error: any) {
    console.error('Login failed:', error.message)
    // Show error to user
  }
}
```

## Step 5: Testing

1. Start your backend server: `dotnet run` (runs on port 5104)
2. Start your frontend: `npm run dev`
3. Check browser console for any CORS or connection errors
4. Test API calls in your components

## API Endpoints Expected

Based on the services created, your backend should have:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/:id/related` - Get related products
- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Register user

Adjust endpoints in `src/services/` to match your actual backend routes.

