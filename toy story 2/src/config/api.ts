/**
 * API Configuration
 * Centralized configuration for API endpoints
 */

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5104/api',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  }
} as const

/**
 * Get full API URL for an endpoint
 */
export const getApiUrl = (endpoint: string): string => {
  const baseUrl = API_CONFIG.baseURL.replace(/\/$/, '') // Remove trailing slash
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${baseUrl}${path}`
}

