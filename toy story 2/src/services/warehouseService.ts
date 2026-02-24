import { apiGet, apiPostForm, apiPutForm, apiDelete, apiPut, apiPost } from './apiClient'
import type { WarehouseSummaryDto, CreateWarehouseDto, UpdateWarehouseDto, WarehouseDetailDto } from '../types/WarehouseDTO'
import type { components } from '../types/generated'

type CreateWarehouseResponseDto = components['schemas']['CreateWarehouseResponseDto']
type UpdateLowStockThresholdDto = components['schemas']['UpdateLowStockThresholdDto']

export interface ProductStockDto {
  productWarehouseId?: number;
  productId?: number;
  productName?: string | null;
  quantity?: number;
  imageUrl?: string | null;
  price?: number;
  brandName?: string | null;
  categoryName?: string | null;
}

export type WarehouseProductDto = ProductStockDto
export type CreateWarehouseProductDto = components['schemas']['CreateWarehouseProductDto']



export const getWarehouses = async (): Promise<WarehouseSummaryDto[]> => {
  const response = await apiGet<WarehouseSummaryDto[]>('/warehouses')
  return response.data
}

export const getWarehouseById = async (warehouseId: number): Promise<WarehouseDetailDto> => {
  const response = await apiGet<WarehouseDetailDto>(`/warehouses/${warehouseId}`)
  return response.data
}

export const createWarehouse = async (data: CreateWarehouseDto): Promise<CreateWarehouseResponseDto> => {
  const form = new FormData()
  form.append('Name', data.Name)
  form.append('Location', data.Location)
  if (typeof data.LowStockThreshold === 'number') {
    form.append('LowStockThreshold', String(data.LowStockThreshold))
  }
  const response = await apiPostForm<CreateWarehouseResponseDto>('/warehouses', form)
  return response.data
}

export const updateWarehouse = async (warehouseId: number, data: UpdateWarehouseDto): Promise<{ message: string }> => {
  const form = new FormData()
  if (data.Name !== undefined) form.append('Name', String(data.Name))
  if (data.Location !== undefined) form.append('Location', String(data.Location))

  // Some backends ignore LowStockThreshold on this endpoint; the dedicated endpoint below is authoritative.
  if (typeof data.LowStockThreshold === 'number') {
    form.append('LowStockThreshold', String(data.LowStockThreshold))
  }

  const response = await apiPutForm<{ message: string }>(`/warehouses/${warehouseId}`, form)
  return response.data
}

export const updateWarehouseLowStockThreshold = async (
  warehouseId: number,
  threshold: number
): Promise<{ message: string }> => {
  const dto: UpdateLowStockThresholdDto = { threshold }
  const response = await apiPut<{ message: string }>(`/warehouses/${warehouseId}/low-stock-threshold`, dto)
  return response.data
}

export const deleteWarehouse = async (warehouseId: number): Promise<{ message: string }> => {
  const response = await apiDelete<{ message: string }>(`/warehouses/${warehouseId}`)
  return response.data
}

export const getWarehouseProducts = async (warehouseId: number): Promise<WarehouseDetailDto> => {
  const response = await apiGet<WarehouseDetailDto>(`/warehouses/${warehouseId}`)
  return response.data
}

export const getWarehouseProductsWithDetails = async (warehouseId: number): Promise<ProductStockDto[]> => {
  const warehouseDetail = await getWarehouseProducts(warehouseId)
  return (warehouseDetail.products || []) as ProductStockDto[]
}

export const getWarehouseProductsForStaff = async (): Promise<components['schemas']['ViewWarehouseProductDto'][]> => {
  const response = await apiGet<components['schemas']['ViewWarehouseProductDto'][]>('/warehouses/get-product-from-staff')
  return response.data
}

export const updateWarehouseProduct = async (productWarehouseId: number, quantity: number): Promise<{ message: string }> => {
  const response = await apiPut<{ message: string }>(`/warehouses/update-product/${productWarehouseId}`, quantity)
  return response.data
}

export const addWarehouseProduct = async (data: CreateWarehouseProductDto): Promise<{ message: string }> => {
  const response = await apiPost<{ message: string }>('/warehouses/add-product', data)
  return response.data
}

export const removeWarehouseProduct = async (productWarehouseId: number): Promise<{ message: string }> => {
  const response = await apiDelete<{ message: string }>(`/warehouses/remove-product/${productWarehouseId}`)
  return response.data
}

