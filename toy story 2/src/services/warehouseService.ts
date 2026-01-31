import { apiGet, apiPostForm, apiPutForm, apiDelete, apiPut, apiPost } from './apiClient'
import type { WarehouseSummaryDto, CreateWarehouseDto, UpdateWarehouseDto, WarehouseDetailDto } from '../types/WarehouseDTO'
import type { components } from '../types/generated'

/**
 * Product Stock DTO from backend
 */
export type ProductStockDto = components['schemas']['ProductStockDto']

/**
 * Create Warehouse Product DTO
 */
export interface CreateWarehouseProductDto {
  productId: number
  quantity: number
}

/**
 * Extended product DTO with warehouse-specific fields
 * Used for warehouse product management
 */
export interface WarehouseProductDto extends ProductStockDto {
  // ProductStockDto already has: productWarehouseId, productId, productName, quantity, imageUrl, price
  // We can add any additional frontend-only fields here if needed
  brandName?: string
  categoryName?: string
  description?: string
}

/**
 * Response from get-product-from-staff endpoint
 */
export interface WarehouseProductsResponse {
  products: WarehouseProductDto[]
  totalQuantity: number
}

/**
 * Update warehouse product quantity DTO
 */
export interface UpdateWarehouseProductDto {
  quantity: number
  status?: string
}

export const getWarehouses = async (): Promise<WarehouseSummaryDto[]> => {
  const response = await apiGet<WarehouseSummaryDto[]>('/warehouse')
  return response.data
}

export const getWarehouseById = async (warehouseId: number): Promise<WarehouseDetailDto> => {
  const response = await apiGet<WarehouseDetailDto>(`/warehouse/${warehouseId}`)
  return response.data
}

export const createWarehouse = async (data: CreateWarehouseDto): Promise<{ message: string }> => {
  const form = new FormData()
  form.append('Name', data.Name)
  form.append('Location', data.Location)
  const response = await apiPostForm<{ message: string }>('/warehouse', form)
  return response.data
}

export const updateWarehouse = async (warehouseId: number, data: UpdateWarehouseDto): Promise<{ message: string }> => {
  const form = new FormData()
  if (data.Name) form.append('Name', data.Name)
  if (data.Location) form.append('Location', data.Location)
  const response = await apiPutForm<{ message: string }>(`/warehouse/${warehouseId}`, form)
  return response.data
}

export const deleteWarehouse = async (warehouseId: number): Promise<{ message: string }> => {
  const response = await apiDelete<{ message: string }>(`/warehouse/${warehouseId}`)
  return response.data
}

/**
 * Get products from specific warehouse by warehouseId
 * GET /api/warehouse/{warehouseId}
 * Returns warehouse details with products list
 */
export const getWarehouseProducts = async (warehouseId: number): Promise<WarehouseDetailDto> => {
  const response = await apiGet<WarehouseDetailDto>(`/warehouse/${warehouseId}`)
  return response.data
}

/**
 * Get warehouse products with full details (brand/category names)
 * Enriches ProductStockDto with brand and category information
 */
export const getWarehouseProductsWithDetails = async (warehouseId: number): Promise<WarehouseProductDto[]> => {
  const warehouseDetail = await getWarehouseProducts(warehouseId)
  const products = (warehouseDetail.products || []) as ProductStockDto[]
  
  // Fetch full product details to get brand and category names
  const { getProductById } = await import('./productService')
  const enrichedProducts = await Promise.all(
    products.map(async (product) => {
      try {
        if (product.productId) {
          const fullProduct = await getProductById(product.productId)
          return {
            ...product,
            brandName: fullProduct.brandName,
            categoryName: fullProduct.categoryName,
            description: fullProduct.description
          } as WarehouseProductDto
        }
      } catch (error) {
        console.error(`Failed to fetch details for product ${product.productId}:`, error)
      }
      return product as WarehouseProductDto
    })
  )
  
  return enrichedProducts
}

/**
 * Get products from warehouse for staff
 * GET /api/Warehouse/get-product-from-staff
 * Returns products list with total quantity
 */
export const getWarehouseProductsForStaff = async (): Promise<WarehouseProductsResponse> => {
  const response = await apiGet<WarehouseProductsResponse>('/warehouse/get-product-from-staff')
  return response.data
}

/**
 * Update warehouse product quantity
 * PUT /api/Warehouse/update-product/{productWarehouseId}
 * Request body is just a number (the new quantity)
 */
export const updateWarehouseProduct = async (
  productWarehouseId: number, 
  quantity: number
): Promise<{ message: string }> => {
  const response = await apiPut<{ message: string }>(
    `/warehouse/update-product/${productWarehouseId}`, 
    quantity
  )
  return response.data
}

/**
 * Add product to warehouse
 * POST /api/Warehouse/add-product
 */
export const addWarehouseProduct = async (
  data: CreateWarehouseProductDto
): Promise<{ message: string }> => {
  const response = await apiPost<{ message: string }>(
    '/warehouse/add-product',
    data
  )
  return response.data
}

/**
 * Remove product from warehouse
 * DELETE /api/Warehouse/remove-product/{productWarehouseId}
 */
export const removeWarehouseProduct = async (
  productWarehouseId: number
): Promise<{ message: string }> => {
  const response = await apiDelete<{ message: string }>(
    `/warehouse/remove-product/${productWarehouseId}`
  )
  return response.data
}
