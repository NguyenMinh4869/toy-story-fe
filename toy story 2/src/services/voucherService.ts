import { apiGet, apiPostForm, apiPutForm } from './apiClient'
import type { ViewVoucherDto, ViewVoucherSummaryDto, CreateVoucherDto, UpdateVoucherDto } from '../types/VoucherDTO'

/**
 * Get vouchers for customer listing (public endpoint)
 * GET /api/vouchers/customer-filter
 * Optional query: name, type (DiscountType 0|1|2|3)
 */
export const getCustomerFilterVouchers = async (params?: {
  name?: string
  type?: number
}): Promise<ViewVoucherSummaryDto[]> => {
  const queryParams = new URLSearchParams()
  if (params?.name) queryParams.append('name', params.name)
  if (params?.type !== undefined) queryParams.append('type', String(params.type))

  const endpoint = `/vouchers/customer-filter${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  const response = await apiGet<ViewVoucherSummaryDto[]>(endpoint)
  return response.data
}

export const getVouchers = async (): Promise<ViewVoucherSummaryDto[]> => {
  const response = await apiGet<ViewVoucherSummaryDto[]>('/vouchers')
  return response.data
}

export const getVoucherById = async (voucherId: number): Promise<ViewVoucherDto> => {
  const response = await apiGet<ViewVoucherDto>(`/vouchers/${voucherId}`)
  return response.data
}

export const createVoucher = async (data: CreateVoucherDto, imageFile?: File): Promise<{ message: string }> => {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) form.append(key, String(value))
  })
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPostForm<{ message: string }>('/vouchers', form)
  return response.data
}

export const updateVoucher = async (voucherId: number, data: UpdateVoucherDto, imageFile?: File): Promise<{ message: string }> => {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) form.append(key, String(value))
  })
  if (imageFile) form.append('imageFile', imageFile)
  const response = await apiPutForm<{ message: string }>(`/vouchers/${voucherId}`, form)
  return response.data
}

export const changeVoucherStatus = async (voucherId: number): Promise<{ message: string }> => {
  const form = new FormData()
  const response = await apiPutForm<{ message: string }>(`/vouchers/status/${voucherId}`, form)
  return response.data
}

export const deleteVoucher = async (voucherId: number): Promise<{ message: string }> => {
  return changeVoucherStatus(voucherId)
}
