(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/constants/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// @repo/constants - Application constants including white-label/branding config and centralized values
//
// This package serves as the single source of truth for application-wide constants,
// including HTTP status codes, error codes, API endpoints, branding configuration,
// feature flags, pagination limits, file limits, and cache TTL values.
//
// All constants here are meant to be imported directly rather than re-defined elsewhere.
// Override values via environment variables (NEXT_PUBLIC_*) in @repo/config or @repo/constants/src/branding.ts / features.ts
//
// Import patterns:
//   - API routes:   import { API_ENDPOINTS, API_PREFIX } from '@repo/constants'
//   - HTTP status:  import { HTTP_STATUS, ERROR_CODES } from '@repo/constants'
//   - Branding:     import { getBranding } from '@repo/constants'
//   - Feature flags:import { getFeatureFlags } from '@repo/constants'
//   - Pagination:   import { PAGINATION, CACHE_TTL } from '@repo/constants'
//
// Re-exports from other packages:
//   - HTTP_STATUS, ERROR_CODES: also available from @repo/types (unified source)
//   - BrandingConfig, defaultBranding, getBranding(): @repo/constants
//   - FeatureFlags, defaultFeatureFlags, getFeatureFlags(): @repo/constants
//   - User, CreateUserDto, UpdateUserDto: @repo/types
//   - createSuccessResponse, createErrorResponse: @repo/utils
//   - ApiResponse, ApiError, PaginatedResponse: @repo/types
__turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module './app.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './api.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './http.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './storage.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './branding.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './features.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './pagination.ts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './validation.ts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/constants/src/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/constants/src/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module './app.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './api.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './http.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './storage.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './branding.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './features.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './pagination.ts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './validation.ts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/packages/theme/src/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultThemeConfig",
    ()=>defaultThemeConfig,
    "getThemeConfig",
    ()=>getThemeConfig,
    "saveThemeConfig",
    ()=>saveThemeConfig
]);
// Centralized theme configuration
// Replaces apps/web/src/configs/themeConfig.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/constants/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/constants/src/index.ts [app-client] (ecmascript)");
;
const branding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$constants$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBranding"])();
const settingsCookieName = `${branding.appName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-theme`;
const defaultThemeConfig = {
    templateName: branding.appName,
    homePageUrl: branding.urls.homepage,
    settingsCookieName,
    mode: 'system',
    skin: 'default',
    semiDark: false,
    layout: 'vertical',
    layoutPadding: 24,
    compactContentWidth: 1440,
    navbar: {
        type: 'fixed',
        contentWidth: 'compact',
        floating: true,
        detached: true,
        blur: true
    },
    contentWidth: 'compact',
    footer: {
        type: 'static',
        contentWidth: 'compact',
        detached: true
    },
    disableRipple: false,
    toastPosition: 'top-right'
};
const getThemeConfig = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = localStorage.getItem(defaultThemeConfig.settingsCookieName);
        if (stored) {
            return {
                ...defaultThemeConfig,
                ...JSON.parse(stored)
            };
        }
    } catch (error) {
        console.warn('Failed to parse theme config:', error);
    }
    return defaultThemeConfig;
};
const saveThemeConfig = (config)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const current = getThemeConfig();
    const updated = {
        ...current,
        ...config
    };
    try {
        localStorage.setItem(defaultThemeConfig.settingsCookieName, JSON.stringify(updated));
    } catch (error) {
        console.warn('Failed to save theme config:', error);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/theme/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// @repo/theme - Centralized design tokens and MUI theme configuration
__turbopack_context__.s([
    "brandColors",
    ()=>brandColors,
    "breakpoints",
    ()=>breakpoints,
    "containerWidths",
    ()=>containerWidths,
    "cssVariables",
    ()=>cssVariables,
    "spacing",
    ()=>spacing,
    "typography",
    ()=>typography
]);
(()=>{
    const e = new Error("Cannot find module './colors.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './typography.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './spacing.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './breakpoints.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './theme.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/theme/src/config.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const brandColors = (await (()=>{
    const e = new Error("Cannot find module './colors.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})()).brandColors;
const typography = (await (()=>{
    const e = new Error("Cannot find module './typography.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})()).typography;
const spacing = (await (()=>{
    const e = new Error("Cannot find module './spacing.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})()).spacing;
const breakpoints = (await (()=>{
    const e = new Error("Cannot find module './breakpoints.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})()).breakpoints;
const containerWidths = (await (()=>{
    const e = new Error("Cannot find module './breakpoints.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})()).containerWidths;
const cssVariables = (await (()=>{
    const e = new Error("Cannot find module './colors.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})()).cssVariables;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/web/src/configs/i18n.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/theme/src/index.ts [app-client] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/theme/src/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "brandColors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["brandColors"],
    "breakpoints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["breakpoints"],
    "containerWidths",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["containerWidths"],
    "cssVariables",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVariables"],
    "defaultThemeConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"],
    "getThemeConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeConfig"],
    "saveThemeConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveThemeConfig"],
    "spacing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["spacing"],
    "typography",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typography"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/theme/src/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module './colors.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './typography.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './spacing.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './breakpoints.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './theme.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/theme/src/config.ts [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/web/src/components/LangRedirect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.1+11ed5ba6388c2acb/node_modules/next/navigation.js [app-client] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$configs$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/configs/i18n.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/theme/src/index.ts [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$configs$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$configs$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const LangRedirect = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const redirectUrl = `/${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i18n"].defaultLocale}${pathname}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])(redirectUrl);
};
_s(LangRedirect, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LangRedirect;
const __TURBOPACK__default__export__ = LangRedirect;
var _c;
__turbopack_context__.k.register(_c, "LangRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/.bun/next@16.1.1+11ed5ba6388c2acb/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/.bun/next@16.1.1+11ed5ba6388c2acb/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_16eab75a._.js.map