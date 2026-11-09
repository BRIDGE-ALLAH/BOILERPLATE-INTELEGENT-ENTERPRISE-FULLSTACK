 // Centralized API endpoint definitions
 
 export const API_ENDPOINTS = {
   // Auth
   AUTH: {
     LOGIN: '/auth/login',
     SIGNUP: '/auth/signup',
     REFRESH: '/auth/refresh',
     LOGOUT: '/auth/logout',
     ME: '/auth/me',
   },
   
   // Users
   USERS: {
     BASE: '/users',
     BY_ID: (id: string) => `/users/${id}`,
     SEARCH: '/users/search',
     AVATAR: (id: string) => `/users/${id}/avatar`,
   },
   
   // Health
   HEALTH: {
     BASE: '/health',
     LIVE: '/health/live',
     READY: '/health/ready',
   },
   
   // Admin
   ADMIN: {
     DASHBOARD: '/admin/dashboard',
     USERS: '/admin/users',
     SETTINGS: '/admin/settings',
   },
   
   // Files
   FILES: {
     UPLOAD: '/files/upload',
     DOWNLOAD: (id: string) => `/files/${id}`,
   },
 };
 
 export const API_PREFIX = '/api/v1';
 
 export const buildApiUrl = (endpoint: string): string => {
   return `${API_PREFIX}${endpoint}`;
 };
