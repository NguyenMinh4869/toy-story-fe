/**
 * API Client
 * Centralized HTTP client for making API requests
 */

import { API_CONFIG, getApiUrl } from '../config/api'

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  status?: number
  errors?: Record<string, string[]>
}

/**
 * Custom fetch wrapper with error handling
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = getApiUrl(endpoint)
  
  const baseHeaders: Record<string, string> = { ...API_CONFIG.headers }
  // If sending FormData, let the browser set Content-Type with boundary
  if (options.body instanceof FormData) {
    delete baseHeaders['Content-Type']
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...baseHeaders,
      ...options.headers,
      // Add auth token if available
      ...(localStorage.getItem('token') && {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    }
  }

  try {
    const response = await fetch(url, config)
    
    // Handle non-JSON responses
    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const text = await response.text()
      return { data: text as unknown as T, success: true }
    }

    const data = await response.json()

    if (!response.ok) {
      const error: ApiError = {
        message: data.message || `HTTP error! status: ${response.status}`,
        status: response.status,
        errors: data.errors
      }
      throw error
    }

    return {
      data: data.data || data,
      message: data.message,
      success: true
    }
  } catch (error) {
    if (error instanceof Error) {
      throw {
        message: error.message,
        status: 0
      } as ApiError
    }
    throw error
  }
}

/**
 * GET request
 */
export const apiGet = <T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'GET'
  })
}

/**
 * POST request
 */
export const apiPost = <T>(
  endpoint: string,
  body?: unknown,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined
  })
}

/**
 * POST multipart/form-data request
 */
export const apiPostForm = <T>(
  endpoint: string,
  formData: FormData,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'POST',
    body: formData
  })
}

/**
 * PUT multipart/form-data request
 */
export const apiPutForm = <T>(
  endpoint: string,
  formData: FormData,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: formData
  })
}
/**
 * PUT request
 */
export const apiPut = <T>(
  endpoint: string,
  body?: unknown,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: body ? JSON.stringify(body) : undefined
  })
}

/**
 * DELETE request
 */
export const apiDelete = <T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'DELETE'
  })
}

