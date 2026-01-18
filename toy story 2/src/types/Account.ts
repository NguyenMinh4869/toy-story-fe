/**
 * Account-related types matching backend DTOs
 */

/**
 * Login DTO - matches backend LoginDto
 */
export interface LoginDto {
  email: string
  password: string
}

/**
 * Login Response - matches backend response
 */
export interface LoginResponse {
  token: string
  role: string
  message: string
}

/**
 * Create User DTO - matches backend CreateUserDto
 * Extends LoginDto with additional fields
 */
export interface CreateUserDto {
  email: string
  password: string
  confirmPassword: string
  name: string
  phoneNumber: string
  address?: string
}

/**
 * View User DTO - matches backend ViewUserDto
 */
export interface ViewUserDto {
  accountId: number
  email: string
  name: string
  phoneNumber: string
  address?: string
  role: string
  status: string
}

/**
 * Update User DTO - matches backend UpdateUserDto
 */
export interface UpdateUserDto {
  name?: string
  phoneNumber?: string
  address?: string
}

/**
 * Change Password DTO - matches backend ChangePasswordDto
 */
export interface ChangePasswordDto {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

/**
 * Filter User DTO - matches backend FilterUserDto
 */
export interface FilterUserDto {
  email?: string
  name?: string
  phoneNumber?: string
  address?: string
  status?: string
}


