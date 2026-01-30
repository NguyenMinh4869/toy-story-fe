import type { components } from './generated'

export type ViewSetDto = components['schemas']['ViewSetDto']

export interface CreateSetDto {
  Name?: string
  Description: string
  DiscountPercent: number
}

export interface UpdateSetDto {
  Name?: string
  Description?: string
  DiscountPercent?: number
}

