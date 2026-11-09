// Vertical Menu Components
import { createContext, useContext, useState, useCallback, useMemo, useEffect, useRef } from "react";
import type { MenuItem, NavSection, ChildrenType, BreakpointType } from "./types.js";
import { RouterLink } from "./router-link.js";

// Context
interface VerticalNavContextProps {
  isCollapsed: boolean;
  isHovered: boolean;
  isBreakpointReached: boolean;
  transitionDuration: number;
  toggleCollapsed: () => void;
  setIsHovered: (value: boolean) => void;
  setIsBreakpointReached: (value: boolean) => void;
}

const VerticalNavContext = createContext<VerticalNavContextProps | null>(null);

export const useVerticalNav = () => {
  const context = useContext(VerticalNavContext);
  if (!context) throw new Error("useVerticalNav must be used within VerticalNavProvider");
  return context;
};

// Provider
interface VerticalNavProviderProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  breakpoint?: BreakpointType;
}

export const VerticalNavProvider = ({ children, defaultCollapsed = false, breakpoint = "md" }: VerticalNavProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isHovered, setIsHovered] = useState(false);
  const [isBreakpointReached, setIsBreakpointReached] = useState(false);
  const transitionDuration = 200;

  const toggleCollapsed = useCallback(() => setIsCollapsed((prev) => !prev), []);

  return (
    <VerticalNavContext.Provider
      value={{ isCollapsed, isHovered, isBreakpointReached, transitionDuration, toggleCollapsed, setIsHovered, setIsBreakpointReached }}
    >
      {children}
    </VerticalNavContext.Provider>
  );
};

// Components
export const VerticalNav = ({ children }: { children: React.ReactNode }) => <nav>{children}</nav>;

export const Menu = ({ items, depth = 0 }: { items: MenuItem[]; depth?: number }) => (
  <ul role="menu">
    {items.map((item) => (
      <MenuItemComponent key={item.path || item.title} item={item} depth={depth} />
    ))}
  </ul>
);

const MenuItemComponent = ({ item, depth }: { item: MenuItem; depth: number }) => {
  const hasChildren = item.children && item.children.length > 0;
  if (hasChildren) {
    return <SubMenu item={item} depth={depth} />;
  }
  return (
    <li role="menuitem">
      {item.path ? (
        <RouterLink href={item.path}>{item.icon && <span>{item.icon}</span>}{item.title}</RouterLink>
      ) : (
        <span>{item.icon && <span>{item.icon}</span>}{item.title}</span>
      )}
    </li>
  );
};

const SubMenu = ({ item, depth }: { item: MenuItem; depth: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <button onClick={() => setIsOpen(!isOpen)}>{item.icon && <span>{item.icon}</span>}{item.title}</button>
      {isOpen && <Menu items={item.children!} depth={depth + 1} />}
    </li>
  );
};

export const MenuSection = ({ sectionTitle, items }: { sectionTitle: string; items: MenuItem[] }) => (
  <>
    <li role="separator"><span>{sectionTitle}</span></li>
    <Menu items={items} />
  </>
);

export const NavHeader = ({ title }: { title: string }) => <div className="nav-header">{title}</div>;

export const NavCollapseIcons = () => <button>Toggle</button>;
