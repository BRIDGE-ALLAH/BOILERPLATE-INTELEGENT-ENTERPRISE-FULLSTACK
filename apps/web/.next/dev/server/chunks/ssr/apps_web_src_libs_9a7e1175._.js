module.exports = [
"[project]/apps/web/src/libs/ApexCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.1+11ed5ba6388c2acb/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/.bun/react-apexcharts@1.4.1+ec9aec63896090ff/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const __TURBOPACK__default__export__ = Chart;
}),
"[project]/apps/web/src/libs/styles/AppReactApexCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.1+11ed5ba6388c2acb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mui$2b$material$40$7$2e$3$2e$6$2b$3c3a741912596756$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mui+material@7.3.6+3c3a741912596756/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mui$2b$material$40$7$2e$3$2e$6$2b$3c3a741912596756$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mui+material@7.3.6+3c3a741912596756/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$libs$2f$ApexCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/libs/ApexCharts.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Styled Components
const ApexChartWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mui$2b$material$40$7$2e$3$2e$6$2b$3c3a741912596756$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mui$2b$material$40$7$2e$3$2e$6$2b$3c3a741912596756$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        '& .apexcharts-canvas': {
            "& line[stroke='transparent']": {
                display: 'none'
            },
            '& .apexcharts-tooltip': {
                boxShadow: 'var(--mui-customShadows-xs)',
                borderColor: 'var(--mui-palette-divider)',
                background: 'var(--mui-palette-background-paper)',
                ...theme.direction === 'rtl' && {
                    '.apexcharts-tooltip-marker': {
                        marginInlineEnd: 10,
                        marginInlineStart: 0
                    },
                    '.apexcharts-tooltip-text-y-value': {
                        marginInlineStart: 5,
                        marginInlineEnd: 0
                    }
                },
                '& .apexcharts-tooltip-title': {
                    fontWeight: 600,
                    borderColor: 'var(--mui-palette-divider)',
                    background: 'var(--mui-palette-background-paper)'
                },
                '&.apexcharts-theme-light': {
                    color: 'var(--mui-palette-text-primary)'
                },
                '&.apexcharts-theme-dark': {
                    color: 'var(--mui-palette-common-white)'
                },
                '& .apexcharts-tooltip-series-group:first-of-type': {
                    paddingBottom: 0
                },
                '& .bar-chart': {
                    padding: theme.spacing(2, 2.5)
                }
            },
            '& .apexcharts-xaxistooltip': {
                borderColor: 'var(--mui-palette-divider)',
                background: 'var(--mui-palette-grey-50)',
                ...theme.applyStyles('dark', {
                    background: 'var(--mui-palette-customColors-bodyBg)'
                }),
                '&:after': {
                    borderBottomColor: 'var(--mui-palette-grey-50)',
                    ...theme.applyStyles('dark', {
                        borderBottomColor: 'var(--mui-palette-customColors-bodyBg)'
                    })
                },
                '&:before': {
                    borderBottomColor: 'var(--mui-palette-divider)'
                }
            },
            '& .apexcharts-yaxistooltip': {
                borderColor: 'var(--mui-palette-divider)',
                background: 'var(--mui-palette-grey-50)',
                ...theme.applyStyles('dark', {
                    background: 'var(--mui-palette-customColors-bodyBg)'
                }),
                '&:after': {
                    borderLeftColor: 'var(--mui-palette-grey-50)',
                    ...theme.applyStyles('dark', {
                        borderLeftColor: 'var(--mui-palette-customColors-bodyBg)'
                    })
                },
                '&:before': {
                    borderLeftColor: 'var(--mui-palette-divider)'
                }
            },
            '& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text': {
                color: 'var(--mui-palette-text-primary)'
            },
            '& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label': {
                textAnchor: theme.direction === 'rtl' ? 'start' : undefined
            },
            '& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text': {
                fontFamily: `${theme.typography.fontFamily} !important`
            },
            '& .apexcharts-pie-label': {
                filter: 'none'
            },
            '& .apexcharts-marker': {
                boxShadow: 'none'
            }
        }
    }));
const AppReactApexCharts = (props)=>{
    // Props
    const { boxProps, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApexChartWrapper, {
        ...boxProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$1$2b$11ed5ba6388c2acb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$libs$2f$ApexCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...rest
        }, void 0, false, {
            fileName: "[project]/apps/web/src/libs/styles/AppReactApexCharts.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/libs/styles/AppReactApexCharts.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AppReactApexCharts;
}),
"[project]/apps/web/src/libs/styles/AppReactApexCharts.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/libs/styles/AppReactApexCharts.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=apps_web_src_libs_9a7e1175._.js.map