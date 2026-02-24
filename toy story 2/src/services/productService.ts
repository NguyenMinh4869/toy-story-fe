/**
 * Product Service
 * API service for product-related operations matching .NET backend
 */

import { apiGet, apiPostForm, apiPutForm } from './apiClient'
import type { ViewProductDto } from '../types/ProductDTO'
import type { CreateProductDto, UpdateProductDto } from '../types/ProductDTO'

/**
 * Get active products for public/customer usage (NO auth required)
 * Uses the customer-filter endpoint which is open to all visitors
 */
export const getActiveProducts = async (): Promise<ViewProductDto[]> => {
  return filterProductsPublic({})
}

/**
 * Get product by ID
 */
export const getProductById = async (productId: number): Promise<ViewProductDto> => {
  const response = await apiGet<ViewProductDto>(`/products/${productId}`)
  return response.data
}

/**
 * Public customer filter — hits /products/customer-filter (no auth required)
 * Only returns Active products. Use this for homepage, search, and public pages.
 */
export const filterProductsPublic = async (params?: {
  searchTerm?: string
  genderTarget?: 'Boy' | 'Girl' | 'Unisex'
  ageRange?: 'ZeroToSixMonths' | 'SixToTwelveMonths' | 'OneToThreeYears' | 'ThreeToSixYears' | 'AboveSixYears'
  categoryId?: number
  brandId?: number
}): Promise<ViewProductDto[]> => {
  const queryParams = new URLSearchParams()
  if (params?.searchTerm) queryParams.append('searchTerm', params.searchTerm)
  if (params?.genderTarget) queryParams.append('genderTarget', params.genderTarget)
  if (params?.ageRange) queryParams.append('ageRange', params.ageRange)
  if (params?.categoryId) queryParams.append('categoryId', params.categoryId.toString())
  if (params?.brandId) queryParams.append('brandId', params.brandId.toString())

  const endpoint = `/products/customer-filter${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ViewProductDto[]>(endpoint)
  return response.data
}

/**
 * Admin filter — hits /products/admin-filter (requires Admin auth)
 * Can filter by status (Active/Inactive/OutOfStock). Use in admin panels only.
 */
export const filterProducts = async (params?: {
  searchTerm?: string
  genderTarget?: 'Boy' | 'Girl' | 'Unisex'
  ageRange?: 'ZeroToSixMonths' | 'SixToTwelveMonths' | 'OneToThreeYears' | 'ThreeToSixYears' | 'AboveSixYears'
  categoryId?: number
  brandId?: number
  status?: 'Active' | 'Inactive' | 'OutOfStock'
}): Promise<ViewProductDto[]> => {
  const queryParams = new URLSearchParams()
  if (params?.searchTerm) queryParams.append('searchTerm', params.searchTerm)
  if (params?.genderTarget) queryParams.append('genderTarget', params.genderTarget)
  if (params?.ageRange) queryParams.append('ageRange', params.ageRange)
  if (params?.categoryId) queryParams.append('categoryId', params.categoryId.toString())
  if (params?.brandId) queryParams.append('brandId', params.brandId.toString())
  if (params?.status) queryParams.append('status', params.status)

  const endpoint = `/products/admin-filter${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ViewProductDto[]>(endpoint)
  return response.data
}

/**
 * Get products by category ID (public - no auth required)
 */
export const getProductsByCategoryId = async (categoryId: number): Promise<ViewProductDto[]> => {
  return filterProductsPublic({ categoryId })
}

/**
 * Get products by brand ID (public - no auth required)
 */
export const getProductsByBrandId = async (brandId: number): Promise<ViewProductDto[]> => {
  return filterProductsPublic({ brandId })
}

/**
 * Search products by name (public - no auth required)
 */
export const searchProducts = async (searchTerm: string): Promise<ViewProductDto[]> => {
  return filterProductsPublic({ searchTerm })
}

/**
 * Create product (Admin only)
 * POST /api/product
 * multipart/form-data with fields aligned to backend DTO
 */
export const createProduct = async (data: CreateProductDto, imageFile?: File): Promise<{ message: string }> => {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) form.append(key, String(value))
  })
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPostForm<{ message: string }>('/products', form)
  return response.data
}

/**
 * Update product (Admin only)
 * PUT /api/product/{productId}
 */
export const updateProduct = async (productId: number, data: UpdateProductDto, imageFile?: File): Promise<{ message: string }> => {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) form.append(key, String(value))
  })
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPutForm<{ message: string }>(`/products/${productId}`, form)
  return response.data
}

/**
 * Change product status (Admin only)
 * PUT /api/product/change-status/{productId}
 */
export const changeProductStatus = async (productId: number): Promise<{ message: string }> => {
  const form = new FormData()
  const response = await apiPutForm<{ message: string }>(`/products/status/${productId}`, form)
  return response.data
}
