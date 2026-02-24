/**
 * Product Service
 * API service for product-related operations matching .NET backend
 */

import { apiGet, apiPostForm, apiPutForm } from './apiClient'
import type { ViewProductDto } from '../types/ProductDTO'
import type { CreateProductDto, UpdateProductDto } from '../types/ProductDTO'

/**
 * Get products for customer listing (public endpoint)
 * GET /api/products/customer-filter
 * Returns only products visible to customers (e.g. "Đang bán").
 */
export const getCustomerFilterProducts = async (params?: {
  searchTerm?: string
  genderTarget?: number
  ageRange?: number
  categoryId?: number
  brandId?: number
}): Promise<ViewProductDto[]> => {
  const queryParams = new URLSearchParams()
  if (params?.searchTerm) queryParams.append('searchTerm', params.searchTerm)
  if (params?.genderTarget !== undefined) queryParams.append('genderTarget', String(params.genderTarget))
  if (params?.ageRange !== undefined) queryParams.append('ageRange', String(params.ageRange))
  if (params?.categoryId !== undefined) queryParams.append('categoryId', String(params.categoryId))
  if (params?.brandId !== undefined) queryParams.append('brandId', String(params.brandId))

  const endpoint = `/products/customer-filter${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ViewProductDto[]>(endpoint)
  return response.data
}


/**
 * Get active products (public endpoint) - uses admin filter for backward compatibility
 */
export const getActiveProducts = async (): Promise<ViewProductDto[]> => {
  return filterProducts({ status: 'Active' })
}

/**
 * Get product by ID
 */
export const getProductById = async (productId: number): Promise<ViewProductDto> => {
  const response = await apiGet<ViewProductDto>(`/products/${productId}`)
  return response.data
}


/**
 * Filter products (admin endpoint with query parameters)
 */
export const filterProducts = async (params?: {
  searchTerm?: string
  origin?: string
  material?: string
  genderTarget?: 'Boy' | 'Girl' | 'Unisex'
  ageRange?: 'ZeroToSixMonths' | 'SixToTwelveMonths' | 'OneToThreeYears' | 'ThreeToSixYears' | 'AboveSixYears'
  categoryId?: number
  brandId?: number
  status?: 'Active' | 'Inactive' | 'OutOfStock'
  promotionId?: number
}): Promise<ViewProductDto[]> => {
  const queryParams = new URLSearchParams()
  if (params?.searchTerm) queryParams.append('searchTerm', params.searchTerm)
  if (params?.origin) queryParams.append('origin', params.origin)
  if (params?.material) queryParams.append('material', params.material)
  if (params?.genderTarget) queryParams.append('genderTarget', params.genderTarget)
  if (params?.ageRange) queryParams.append('ageRange', params.ageRange)
  if (params?.categoryId) queryParams.append('categoryId', params.categoryId.toString())
  if (params?.brandId) queryParams.append('brandId', params.brandId.toString())
  if (params?.status) queryParams.append('status', params.status)
  if (params?.promotionId) queryParams.append('promotionId', params.promotionId.toString())

  const endpoint = `/products/admin-filter${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ViewProductDto[]>(endpoint)
  return response.data
}


/**
 * Get products by category ID
 */
export const getProductsByCategoryId = async (categoryId: number): Promise<ViewProductDto[]> => {
  return filterProducts({ categoryId, status: 'Active' })
}

/**
 * Get products by brand ID
 */
export const getProductsByBrandId = async (brandId: number): Promise<ViewProductDto[]> => {
  return filterProducts({ brandId, status: 'Active' })
}

/**
 * Search products by name
 */
export const searchProducts = async (searchTerm: string): Promise<ViewProductDto[]> => {
  return filterProducts({ searchTerm: searchTerm, status: 'Active' })
}

/**
 * Create product (Admin only)
 * POST /api/products
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
 * PUT /api/products/{productId}
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
 * PUT /api/products/status/{productId}
 */
export const changeProductStatus = async (productId: number): Promise<{ message: string }> => {
  const form = new FormData()
  const response = await apiPutForm<{ message: string }>(`/products/status/${productId}`, form)
  return response.data
}

