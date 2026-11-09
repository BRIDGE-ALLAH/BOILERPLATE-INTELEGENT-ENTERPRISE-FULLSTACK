// Horizontal Menu Components
import { createContext, useContext, useState, useCallback, useMemo, useEffect, useRef } from "react";
import type { MenuItem, NavSection, ChildrenType, BreakpointType } from "./types";
import { RouterLink } from "./router-link";

interface HorizontalNavContextProps {
  isOpen: boolean;
  openMenu: string | null;
  toggleMenu: (path: string) => void;
  closeMenu: () => void;
}

const HorizontalNavContext = createContext<HorizontalNavContextProps | null>(null);

export const useHorizontalNav = () => {
  const context = useContext(HorizontalNavContext);
  if (!context) throw new Error("useHorizontalNav must be used within HorizontalNavProvider");
  return context;
};

interface HorizontalNavProviderProps {
  children: React.ReactNode;
}

export const HorizontalNavProvider = ({ children }: HorizontalNavProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = useCallback((path: string) => {
    setOpenMenu((prev) => (prev === path ? null : path));
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setOpenMenu(null);
  }, []);

  return (
    <HorizontalNavContext.Provider value={{ isOpen, openMenu, toggleMenu, closeMenu }}>
      {children}
    </HorizontalNavContext.Provider>
  );
};

export const HorizontalNav = ({ items }: { items: MenuItem[] }) => (
  <nav>
    <ul style={{ display: "flex", gap: "1rem" }}>
      {items.map((item) => (
        <HorizontalMenuItem key={item.path || item.title} item={item} />
      ))}
    </ul>
  </nav>
);

const HorizontalMenuItem = ({ item }: { item: MenuItem }) => {
  const hasChildren = item.children && item.children.length > 0;
  const { toggleMenu, closeMenu, openMenu } = useHorizontalNav();
  const isOpen = openMenu === item.path;

  if (hasChildren) {
    return (
      <li style={{ position: "relative" }}>
        <button onClick={() => toggleMenu(item.path!)}>{item.title}</button>
        {isOpen && (
          <ul style={{ position: "absolute", top: "100%", left: 0, background: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            {item.children!.map((child) => (
              <li key={child.path || child.title}>
                {child.path ? <RouterLink href={child.path}>{child.title}</RouterLink> : <span>{child.title}</span>}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
  return (
    <li>
      {item.path ? <RouterLink href={item.path}>{item.title}</RouterLink> : <span>{item.title}</span>}
    </li>
  );
};

export const Menu = ({ items }: { items: MenuItem[] }) => <HorizontalNav items={items} />;

export const MenuButton = ({ children }: { children: React.ReactNode }) => <button>{children}</button>;
export const SubMenu = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const SubMenuContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const VerticalNavInHorizontal = () => null;
