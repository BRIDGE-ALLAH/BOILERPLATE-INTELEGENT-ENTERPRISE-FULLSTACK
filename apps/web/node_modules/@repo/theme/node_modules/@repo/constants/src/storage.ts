 // Storage keys and constants
 
 export const STORAGE_KEYS = {
   AUTH_TOKEN: 'auth_token',
   REFRESH_TOKEN: 'refresh_token',
   USER_PREFERENCES: 'user_preferences',
   THEME: 'theme',
   LANGUAGE: 'language',
   SIDEBAR_COLLAPSED: 'sidebar_collapsed',
 } as const;
 
 export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
 
 export const TOKEN_REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 minutes before expiry
