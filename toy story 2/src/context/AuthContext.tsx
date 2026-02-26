import React, { createContext, useState, useEffect, useCallback, useContext } from 'react'
import {
    isAuthenticated,
    getStoredUser,
    getUserRole,
    logout as authServiceLogout
} from '../services/authService'
import type { ViewUserDto } from '../types/AccountDTO'

interface AuthContextType {
    isAuthenticated: boolean
    user: ViewUserDto | null
    role: string | null
    isLoading: boolean
    logout: () => void
    refreshAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState<ViewUserDto | null>(null)
    const [role, setRole] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const refreshAuth = useCallback(() => {
        const isAuth = isAuthenticated()
        const userData = getStoredUser()
        const userRole = getUserRole()

        setAuthenticated(isAuth)
        setUser(userData)
        setRole(userRole)
        setIsLoading(false)
    }, [])

    const logout = useCallback(() => {
        authServiceLogout()
        setAuthenticated(false)
        setUser(null)
        setRole(null)
        // Note: Navigation is handled in the useAuth hook to keep context pure
    }, [])

    useEffect(() => {
        refreshAuth()
    }, [refreshAuth])

    // Listen for storage changes from other tabs/windows
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'token' || e.key === 'user' || e.key === 'role') {
                refreshAuth()
            }
        }
        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [refreshAuth])

    return (
        <AuthContext.Provider value={{
            isAuthenticated: authenticated,
            user,
            role,
            isLoading,
            logout,
            refreshAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider')
    }
    return context
}
