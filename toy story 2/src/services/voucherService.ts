import { apiGet, apiPostForm, apiPutForm } from './apiClient'
import type { ViewVoucherDto, ViewVoucherSummaryDto, CreateVoucherDto, UpdateVoucherDto } from '../types/VoucherDTO'

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

