/**
 * Product Service
 * API service for product-related operations
 */

import { apiGet } from './apiClient'
import { ProductDTO } from '../types/ProductDTO'

/**
 * Get all products
 */
export const getProducts = async (params?: {
  category?: string
  search?: string
  page?: number
  limit?: number
}): Promise<ProductDTO[]> => {
  const queryParams = new URLSearchParams()
  if (params?.category) queryParams.append('category', params.category)
  if (params?.search) queryParams.append('search', params.search)
  if (params?.page) queryParams.append('page', params.page.toString())
  if (params?.limit) queryParams.append('limit', params.limit.toString())

  const endpoint = `/products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ProductDTO[]>(endpoint)
  return response.data
}

/**
 * Get product by ID
 */
export const getProductById = async (id: string): Promise<ProductDTO> => {
  const response = await apiGet<ProductDTO>(`/products/${id}`)
  return response.data
}

/**
 * Get products by category
 */
export const getProductsByCategory = async (category: string): Promise<ProductDTO[]> => {
  return getProducts({ category })
}

/**
 * Search products
 */
export const searchProducts = async (searchTerm: string): Promise<ProductDTO[]> => {
  return getProducts({ search: searchTerm })
}

/**
 * Get related products
 */
export const getRelatedProducts = async (productId: string, limit: number = 4): Promise<ProductDTO[]> => {
  const response = await apiGet<ProductDTO[]>(`/products/${productId}/related?limit=${limit}`)
  return response.data
}

