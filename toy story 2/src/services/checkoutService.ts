import { apiPost } from './apiClient'
import {
    CalculatePriceRequest,
    CalculatePriceResponse,
    CheckoutResponse,
    CreatePaymentResponse
} from '../types/CheckoutDTO'

/**
 * Calculate order price (preview)
 * POST /api/checkout/calculate
 */
export const calculatePrice = async (request: CalculatePriceRequest): Promise<CalculatePriceResponse> => {
    // Note: If this fails with 404, we'll need to use Cart total as fallback
    const response = await apiPost<CalculatePriceResponse>('/checkout/calculate', request)
    return response.data
}

/**
 * Perform checkout
 * POST /api/checkout
 */
export const checkout = async (): Promise<CheckoutResponse> => {
    // Usually checkout takes no body if it uses the server-side cart
    const response = await apiPost<CheckoutResponse>('/checkout', {})
    return response.data
}

/**
 * Create PayOS payment link
 * POST /api/payments/create
 */
export const createPayment = async (invoiceId: number): Promise<CreatePaymentResponse> => {
    const response = await apiPost<CreatePaymentResponse>('/payments/create', { invoiceId })
    return response.data
}
