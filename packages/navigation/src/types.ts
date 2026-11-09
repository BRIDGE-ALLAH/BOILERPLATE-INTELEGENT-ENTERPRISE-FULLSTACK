// Navigation Types
export type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface ChildrenType {
  children: React.ReactNode;
}

export interface MenuItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  action?: string;
  subject?: string;
  badgeContent?: string;
  badgeColor?: "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success";
  disabled?: boolean;
  hideFromMenu?: boolean;
  externalLink?: boolean;
  openInNewTab?: boolean;
}

export interface NavSection {
  sectionTitle: string;
  items: MenuItem[];
}

export interface MenuData {
  vertical: NavSection[];
  horizontal: NavSection[];
}

export interface RouterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}
