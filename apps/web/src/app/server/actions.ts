'use server'

// API Client Imports
import { apiClient } from '@/packages/api-client/src/client'

export const getEcommerceData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching ecommerce data:', error)
    return {}
  }
}

export const getAcademyData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching academy data:', error)
    return {}
  }
}

export const getLogisticsData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching logistics data:', error)
    return {}
  }
}

export const getInvoiceData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching invoice data:', error)
    return {}
  }
}

export const getUserData = async () => {
  try {
    const response = await apiClient.get('/api/v1/users')
    if (response.success && response.data) {
      return response.data
    }
    return []
  } catch (error) {
    console.error('Error fetching user data:', error)
    return []
  }
}

export const getPermissionsData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching permissions data:', error)
    return {}
  }
}

export const getProfileData = async () => {
  try {
    const response = await apiClient.get('/api/v1/users/me')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching profile data:', error)
    return {}
  }
}

export const getFaqData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching faq data:', error)
    return {}
  }
}

export const getPricingData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching pricing data:', error)
    return {}
  }
}

export const getStatisticsData = async () => {
  try {
    const response = await apiClient.get('/api/v1/health')
    if (response.success && response.data) {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching statistics data:', error)
    return {}
  }
}