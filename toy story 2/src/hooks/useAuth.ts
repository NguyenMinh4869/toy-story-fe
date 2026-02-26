/**
 * useAuth Hook
 * Custom hook for managing authentication state across the application
 * Provides real-time auth status, user data, and auth actions
 */

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { ROUTES } from '../routes/routePaths'
import type { ViewUserDto } from '../types/AccountDTO'

interface UseAuthReturn {
  /** Whether user is currently authenticated */
  isAuthenticated: boolean
  /** Current user data (null if not authenticated) */
  user: ViewUserDto | null
  /** User's role (null if not authenticated) */
  role: string | null
  /** Loading state during auth check */
  isLoading: boolean
  /** Logout function that clears state and redirects to home */
  logout: () => void
  /** Manually refresh user data from localStorage */
  refreshUser: () => void
}

/**
 * Hook to manage authentication state using AuthContext
 * 
 * Provides a convenient interface for components to interact with auth state.
 */
export const useAuth = (): UseAuthReturn => {
  const navigate = useNavigate()
  const {
    isAuthenticated,
    user,
    role,
    isLoading,
    logout: contextLogout,
    refreshAuth: refreshUser
  } = useAuthContext()

  /**
   * Handle logout - clear auth state and redirect to home
   */
  const logout = useCallback(() => {
    contextLogout()
    navigate(ROUTES.HOME)
  }, [contextLogout, navigate])

  return {
    isAuthenticated,
    user,
    role,
    isLoading,
    logout,
    refreshUser
  }
}
