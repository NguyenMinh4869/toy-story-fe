/**
 * API Configuration
 * Centralized configuration for API endpoints
 */

const baseURL = import.meta.env.VITE_API_BASE_URL

if (!baseURL) {
  console.error(
    '❌ VITE_API_BASE_URL is not set!\n' +
    'Please create a .env file in the project root with:\n' +
    'VITE_API_BASE_URL=https://toy-story-xwni.onrender.com/api'
  )
}

export const API_CONFIG = {
  baseURL: baseURL || 'https://toy-story-xwni.onrender.com/api', // Fallback to production API
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  }
} as const

/**
 * Get full API URL for an endpoint
 */
export const getApiUrl = (endpoint: string): string => {
  if (!API_CONFIG.baseURL) {
    throw new Error('API base URL is not configured. Please set VITE_API_BASE_URL in .env file')
  }
  
  const baseUrl = API_CONFIG.baseURL.replace(/\/$/, '') 
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${baseUrl}${path}`
}

