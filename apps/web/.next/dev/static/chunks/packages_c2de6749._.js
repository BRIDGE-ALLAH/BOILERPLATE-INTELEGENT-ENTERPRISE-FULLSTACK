(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/theme/src/config.ts [app-client] (ecmascript) <export defaultThemeConfig as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/theme/src/config.ts [app-client] (ecmascript)");
}),
"[project]/packages/theme/src/index.ts [app-client] (ecmascript) <export legacyPrimaryColors as default>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["legacyPrimaryColors"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/theme/src/index.ts [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$theme$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/packages/utils/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Utility exports for the monorepo
__turbopack_context__.s([
    "errorResponse",
    ()=>errorResponse,
    "formatError",
    ()=>formatError,
    "logger",
    ()=>logger,
    "paginationMeta",
    ()=>paginationMeta,
    "successResponse",
    ()=>successResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.1+11ed5ba6388c2acb/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './response.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './pagination.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './validation.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './date.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './string.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const logger = {
    info: (message, context)=>{
        console.info(`[utils:info] ${message}`, context);
    },
    error: (message, context)=>{
        console.error(`[utils:error] ${message}`, context);
    },
    warn: (message, context)=>{
        console.warn(`[utils:warn] ${message}`, context);
    }
};
const formatError = (err)=>{
    return {
        name: err.name,
        message: err.message,
        // Omit stack in production for security
        ...("TURBOPACK compile-time truthy", 1) ? {
            stack: err.stack
        } : "TURBOPACK unreachable"
    };
};
const paginationMeta = (page, limit, total)=>({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
    });
const successResponse = (data, message = 'Success')=>({
        success: true,
        data,
        message
    });
const errorResponse = (code, message)=>({
        success: false,
        error: {
            code,
            message
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/utils/src/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorResponse"],
    "formatError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatError"],
    "logger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logger"],
    "paginationMeta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["paginationMeta"],
    "successResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["successResponse"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/utils/src/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module './response.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './pagination.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './validation.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './date.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './string.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
]);

//# sourceMappingURL=packages_c2de6749._.js.map