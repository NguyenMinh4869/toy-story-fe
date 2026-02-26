import { apiGet, apiPostForm, apiPutForm, apiPost, apiDelete, apiPut } from './apiClient'
import type { ViewSetDetailDto, CreateSetDto, UpdateSetDto, CreateSetProductDto, CreateSetResponseDto } from '../types/SetDTO'

export const getSets = async (): Promise<ViewSetDetailDto[]> => {
  const response = await apiGet<ViewSetDetailDto[]>('/sets')
  return response.data
}

/**
 * Get sets for customer listing (public endpoint)
 * GET /api/sets/customer-filter
 * Optional query: name
 */
export const getSetsCustomerFilter = async (params?: { name?: string }): Promise<ViewSetDetailDto[]> => {
  const queryParams = new URLSearchParams()
  if (params?.name) queryParams.append('name', params.name)

  const endpoint = `/sets/customer-filter${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ViewSetDetailDto[]>(endpoint)
  return response.data
}

export const getSetById = async (id: number): Promise<ViewSetDetailDto> => {
  const response = await apiGet<ViewSetDetailDto>(`/sets/${id}`)
  return response.data
}

export const createSet = async (data: CreateSetDto, imageFile?: File): Promise<CreateSetResponseDto> => {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) form.append(key, String(value))
  })
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPostForm<CreateSetResponseDto>('/sets', form)
  return response.data
}

export const updateSet = async (id: number, data: UpdateSetDto, imageFile?: File): Promise<{ message: string }> => {
  const form = new FormData()
  if (data.Name !== undefined) form.append('Name', String(data.Name))
  if (data.Description !== undefined) form.append('Description', String(data.Description))
  if (data.DiscountPercent !== undefined) form.append('DiscountPercent', String(data.DiscountPercent))
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPutForm<{ message: string }>(`/sets/${id}`, form)
  return response.data
}

export const addProductToSet = async (setId: number, payload: CreateSetProductDto): Promise<{ message: string }> => {
  const response = await apiPost<{ message: string }>(`/sets/${setId}`, payload)
  return response.data
}

export const removeProductFromSet = async (setId: number, productId: number): Promise<{ message: string }> => {
  const response = await apiDelete<{ message: string }>(`/sets/${setId}/products/${productId}`)
  return response.data
}

export const updateSetProductQuantity = async (setId: number, productId: number, quantity: number): Promise<{ message: string }> => {
  const response = await apiPut<{ message: string }>(`/sets/${setId}/products/${productId}?quantity=${quantity}`)
  return response.data
}

export const deleteSet = async (id: number): Promise<{ message: string }> => {
  const response = await apiDelete<{ message: string }>(`/sets/${id}`)
  return response.data
}
