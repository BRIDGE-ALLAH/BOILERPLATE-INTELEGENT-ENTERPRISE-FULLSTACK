// Core Types - Re-export from @repo/types + local extensions
export * from "@repo/types";

import type { ReactNode } from "react";

// Layout types
export type Layout = "vertical" | "collapsed" | "horizontal";
export type Skin = "default" | "bordered";
export type Mode = "system" | "light" | "dark";
export type SystemMode = "light" | "dark";
export type Direction = "ltr" | "rtl";
export type LayoutComponentWidth = "compact" | "wide";
export type LayoutComponentPosition = "fixed" | "static";

export type ChildrenType = { children: ReactNode };

export type ThemeColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";
