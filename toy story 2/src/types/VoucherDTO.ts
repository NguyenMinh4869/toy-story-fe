import type { components } from './generated'

export type ViewVoucherDto = components['schemas']['ViewVoucherDto']
export type ViewVoucherSummaryDto = components['schemas']['ViewVoucherSummaryDto']
export type DiscountType = components['schemas']['DiscountType']

export interface CreateVoucherDto {
  Code: string
  Name: string
  Description?: string
  DiscountType: DiscountType
  DiscountValue: number
  MaxUsage?: number
  MaxUsagePerCustomer?: number
  ValidFrom?: string
  ValidTo?: string
}

export interface UpdateVoucherDto {
  Code?: string
  Name?: string
  Description?: string
  DiscountType?: DiscountType
  DiscountValue?: number
  MaxUsage?: number
  MaxUsagePerCustomer?: number
  ValidFrom?: string
  ValidTo?: string
}

