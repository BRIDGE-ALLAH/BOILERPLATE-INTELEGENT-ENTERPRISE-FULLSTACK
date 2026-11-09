// Feature Flags - Centralized feature configuration
export interface FeatureFlags {
  // Auth features
  auth: {
    enableRegistration: boolean;
    enableSocialLogin: boolean;
    enableMFA: boolean;
    enablePasswordReset: boolean;
    enableEmailVerification: boolean;
    sessionTimeoutMinutes: number;
  };
  
  // Dashboard features
  dashboards: {
    enableCRM: boolean;
    enableAnalytics: boolean;
    enableEcommerce: boolean;
    enableLogistics: boolean;
    enableCustomDashboards: boolean;
  };
  
  // App features
  apps: {
    enableCalendar: boolean;
    enableChat: boolean;
    enableEmail: boolean;
    enableEcommerce: boolean;
    enableInvoice: boolean;
    enableKanban: boolean;
    enableLogistics: boolean;
    enableAcademy: boolean;
    enableUserManagement: boolean;
    enableRolesPermissions: boolean;
  };
  
  // UI features
  ui: {
    enableDarkMode: boolean;
    enableRTL: boolean;
    enableCustomizer: boolean;
    enableNotifications: boolean;
    enableSearch: boolean;
    enableFullscreen: boolean;
    enableCompactMode: boolean;
  };
  
  // Developer features
  dev: {
    enableMockData: boolean;
    enableAPIMocking: boolean;
    enableDebugPanel: boolean;
    enablePerformanceMonitoring: boolean;
  };
  
  // Experimental features
  experimental: {
    enableAIAssistant: boolean;
    enableRealTimeCollaboration: boolean;
    enableAdvancedCharts: boolean;
  };
}

export const defaultFeatureFlags: FeatureFlags = {
  auth: {
    enableRegistration: true,
    enableSocialLogin: true,
    enableMFA: false,
    enablePasswordReset: true,
    enableEmailVerification: true,
    sessionTimeoutMinutes: 30,
  },
  dashboards: {
    enableCRM: true,
    enableAnalytics: true,
    enableEcommerce: true,
    enableLogistics: true,
    enableCustomDashboards: false,
  },
  apps: {
    enableCalendar: true,
    enableChat: true,
    enableEmail: true,
    enableEcommerce: true,
    enableInvoice: true,
    enableKanban: true,
    enableLogistics: true,
    enableAcademy: true,
    enableUserManagement: true,
    enableRolesPermissions: true,
  },
  ui: {
    enableDarkMode: true,
    enableRTL: true,
    enableCustomizer: true,
    enableNotifications: true,
    enableSearch: true,
    enableFullscreen: true,
    enableCompactMode: true,
  },
  dev: {
    enableMockData: true,
    enableAPIMocking: false,
    enableDebugPanel: false,
    enablePerformanceMonitoring: false,
  },
  experimental: {
    enableAIAssistant: false,
    enableRealTimeCollaboration: false,
    enableAdvancedCharts: false,
  },
};

export function loadFeatureFlagsFromEnv(): Partial<FeatureFlags> {
  const env = process.env;
  const flags: Partial<FeatureFlags> = {};
  
  // Auth
  if (env.NEXT_PUBLIC_ENABLE_REGISTRATION !== undefined) flags.auth = { ...defaultFeatureFlags.auth, enableRegistration: env.NEXT_PUBLIC_ENABLE_REGISTRATION === "true" };
  if (env.NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN !== undefined) flags.auth = { ...defaultFeatureFlags.auth, enableSocialLogin: env.NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN === "true" };
  if (env.NEXT_PUBLIC_ENABLE_MFA !== undefined) flags.auth = { ...defaultFeatureFlags.auth, enableMFA: env.NEXT_PUBLIC_ENABLE_MFA === "true" };
  
  // Dashboards
  if (env.NEXT_PUBLIC_ENABLE_CRM !== undefined) flags.dashboards = { ...defaultFeatureFlags.dashboards, enableCRM: env.NEXT_PUBLIC_ENABLE_CRM === "true" };
  if (env.NEXT_PUBLIC_ENABLE_ANALYTICS !== undefined) flags.dashboards = { ...defaultFeatureFlags.dashboards, enableAnalytics: env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" };
  
  // Apps
  if (env.NEXT_PUBLIC_ENABLE_CALENDAR !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableCalendar: env.NEXT_PUBLIC_ENABLE_CALENDAR === "true" };
  if (env.NEXT_PUBLIC_ENABLE_CHAT !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableChat: env.NEXT_PUBLIC_ENABLE_CHAT === "true" };
  if (env.NEXT_PUBLIC_ENABLE_EMAIL !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableEmail: env.NEXT_PUBLIC_ENABLE_EMAIL === "true" };
  if (env.NEXT_PUBLIC_ENABLE_ECOMMERCE !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableEcommerce: env.NEXT_PUBLIC_ENABLE_ECOMMERCE === "true" };
  if (env.NEXT_PUBLIC_ENABLE_INVOICE !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableInvoice: env.NEXT_PUBLIC_ENABLE_INVOICE === "true" };
  if (env.NEXT_PUBLIC_ENABLE_KANBAN !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableKanban: env.NEXT_PUBLIC_ENABLE_KANBAN === "true" };
  if (env.NEXT_PUBLIC_ENABLE_LOGISTICS !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableLogistics: env.NEXT_PUBLIC_ENABLE_LOGISTICS === "true" };
  if (env.NEXT_PUBLIC_ENABLE_ACADEMY !== undefined) flags.apps = { ...defaultFeatureFlags.apps, enableAcademy: env.NEXT_PUBLIC_ENABLE_ACADEMY === "true" };
  
  // UI
  if (env.NEXT_PUBLIC_ENABLE_DARK_MODE !== undefined) flags.ui = { ...defaultFeatureFlags.ui, enableDarkMode: env.NEXT_PUBLIC_ENABLE_DARK_MODE === "true" };
  if (env.NEXT_PUBLIC_ENABLE_RTL !== undefined) flags.ui = { ...defaultFeatureFlags.ui, enableRTL: env.NEXT_PUBLIC_ENABLE_RTL === "true" };
  if (env.NEXT_PUBLIC_ENABLE_CUSTOMIZER !== undefined) flags.ui = { ...defaultFeatureFlags.ui, enableCustomizer: env.NEXT_PUBLIC_ENABLE_CUSTOMIZER === "true" };
  
  // Dev
  if (env.NEXT_PUBLIC_ENABLE_MOCK_DATA !== undefined) flags.dev = { ...defaultFeatureFlags.dev, enableMockData: env.NEXT_PUBLIC_ENABLE_MOCK_DATA === "true" };
  
  return flags;
}

export function getFeatureFlags(): FeatureFlags {
  const envFlags = loadFeatureFlagsFromEnv();
  return deepMergeFeatureFlags(defaultFeatureFlags, envFlags);
}

function deepMergeFeatureFlags(target: FeatureFlags, source: Partial<FeatureFlags>): FeatureFlags {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sourceValue = source[key as keyof FeatureFlags];
    if (sourceValue === undefined) continue;
    if (typeof sourceValue === "object" && sourceValue !== null) {
      result[key as keyof FeatureFlags] = { ...target[key as keyof FeatureFlags], ...sourceValue } as any;
    }
  }
  return result;
}

export const FEATURE_FLAG_KEYS = {
  ENABLE_REGISTRATION: "NEXT_PUBLIC_ENABLE_REGISTRATION",
  ENABLE_SOCIAL_LOGIN: "NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN",
  ENABLE_MFA: "NEXT_PUBLIC_ENABLE_MFA",
  ENABLE_CRM: "NEXT_PUBLIC_ENABLE_CRM",
  ENABLE_ANALYTICS: "NEXT_PUBLIC_ENABLE_ANALYTICS",
  ENABLE_CALENDAR: "NEXT_PUBLIC_ENABLE_CALENDAR",
  ENABLE_CHAT: "NEXT_PUBLIC_ENABLE_CHAT",
  ENABLE_EMAIL: "NEXT_PUBLIC_ENABLE_EMAIL",
  ENABLE_ECOMMERCE: "NEXT_PUBLIC_ENABLE_ECOMMERCE",
  ENABLE_INVOICE: "NEXT_PUBLIC_ENABLE_INVOICE",
  ENABLE_KANBAN: "NEXT_PUBLIC_ENABLE_KANBAN",
  ENABLE_LOGISTICS: "NEXT_PUBLIC_ENABLE_LOGISTICS",
  ENABLE_ACADEMY: "NEXT_PUBLIC_ENABLE_ACADEMY",
  ENABLE_DARK_MODE: "NEXT_PUBLIC_ENABLE_DARK_MODE",
  ENABLE_RTL: "NEXT_PUBLIC_ENABLE_RTL",
  ENABLE_CUSTOMIZER: "NEXT_PUBLIC_ENABLE_CUSTOMIZER",
  ENABLE_MOCK_DATA: "NEXT_PUBLIC_ENABLE_MOCK_DATA",
} as const;
