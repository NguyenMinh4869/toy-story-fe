/**
 * Request for price calculation
 */
export interface CalculatePriceRequest {
    items: {
        productId: number
        quantity: number
    }[]
    voucherCode?: string
}

/**
 * Response from price calculation
 */
export interface CalculatePriceResponse {
    subtotal: number
    discount: number
    total: number
    message?: string
}

/**
 * Response from checkout
 */
export interface CheckoutResponse {
    invoiceId: number
    orderId: number
    message?: string
}

/**
 * Request for payment creation
 */
export interface CreatePaymentRequest {
    invoiceId: number
}

/**
 * Response from payment creation (PayOS link)
 */
export interface CreatePaymentResponse {
    checkoutUrl: string
    qrCode?: string
}
