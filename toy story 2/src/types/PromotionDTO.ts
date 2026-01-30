/**
 * Promotion DTOs - Generated from Swagger/OpenAPI spec
 * Source: https://toy-story-xwni.onrender.com/swagger/v1/swagger.json
 */

import type { components } from './generated'

/**
 * ViewPromotionDto - matches backend ViewPromotionDto exactly
 */
export type ViewPromotionDto = components['schemas']['ViewPromotionDto']

/**
 * ViewPromotionSummaryDto - matches backend ViewPromotionSummaryDto
 */
export type ViewPromotionSummaryDto = components['schemas']['ViewPromotionSummaryDto']

// Alias for backward compatibility
export type PromotionDTO = ViewPromotionDto

export type DiscountType = components['schemas']['DiscountType']

export interface CreatePromotionDto {
  Name: string
  Description?: string
  DiscountType: DiscountType
  DiscountValue: number
  MinimumQuantity?: number
  MinimumAmount?: number
  BrandId?: number
  CategoryId?: number
  ProductId?: number
  StartDate?: string
  EndDate?: string
}

export interface UpdatePromotionDto {
  Name?: string
  Description?: string
  DiscountType?: DiscountType
  DiscountValue?: number
  MinimumQuantity?: number
  MinimumAmount?: number
  BrandId?: number
  CategoryId?: number
  ProductId?: number
  StartDate?: string
  EndDate?: string
}
