import type { components } from './generated'

export type WarehouseSummaryDto = components['schemas']['WarehouseSummaryDto']
export type WarehouseDetailDto = components['schemas']['WarehouseDetailDto']

export interface CreateWarehouseDto {
  Name: string
  Location: string
}

export interface UpdateWarehouseDto {
  Name?: string
  Location?: string
}

