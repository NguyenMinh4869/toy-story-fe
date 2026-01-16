// ProductDTO interface matching .NET backend structure
export interface ProductDTO {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  brandName: string;
  categoryName: string;
  imageUrl: string;
  images?: string[];
  sku?: string;
  ageRange?: string;
  origin?: string;
  manufacturer?: string;
  gender?: string;
  stock?: number;
  storeName?: string;
  storeAddress?: string;
  storePhone?: string;
  discount?: number;
}

// Related types
export interface CartItem {
  productId: string;
  quantity: number;
  product: ProductDTO;
}

export interface StoreLocation {
  name: string;
  address: string;
  phone: string;
  stock: number;
}
