import { apiGet, apiPostForm } from './apiClient'
import type { ViewSetDto, CreateSetDto } from '../types/SetDTO'

export const getSets = async (): Promise<ViewSetDto[]> => {
  const response = await apiGet<ViewSetDto[]>('/set')
  return response.data
}

/**
 * Get sets using customer-filter endpoint (no auth required)
 * Use this for staff/public access
 */
export const getSetsCustomerFilter = async (): Promise<ViewSetDto[]> => {
  const response = await apiGet<ViewSetDto[]>('/set/customer-filter')
  return response.data
}

export const getSetById = async (id: number): Promise<ViewSetDto> => {
  const response = await apiGet<ViewSetDto>(`/set/${id}`)
  return response.data
}

export const createSet = async (data: CreateSetDto, imageFile?: File): Promise<{ message: string }> => {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) form.append(key, String(value))
  })
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPostForm<{ message: string }>('/set', form)
  return response.data
}

// Note: As per generated OpenAPI types, there is no endpoint to update Set details (no PUT/PATCH on /api/Set/{id}).
// The backend only supports creating sets and managing set products.
// If you add an update endpoint later, reintroduce an updateSet() implementation here.

