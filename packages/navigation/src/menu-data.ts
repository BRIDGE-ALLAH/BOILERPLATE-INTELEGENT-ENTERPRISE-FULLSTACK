// Menu Data - Centralized navigation data
import type { NavSection } from "./types";

export const defaultVerticalMenuData: NavSection[] = [
  {
    sectionTitle: "Dashboards",
    items: [
      { title: "CRM", path: "/dashboards/crm", icon: "tabler-layout-dashboard" },
      { title: "Analytics", path: "/dashboards/analytics", icon: "tabler-chart-bar" },
      { title: "Ecommerce", path: "/dashboards/ecommerce", icon: "tabler-shopping-cart" },
      { title: "Logistics", path: "/dashboards/logistics", icon: "tabler-truck" },
    ]
  },
  {
    sectionTitle: "Apps",
    items: [
      { title: "Calendar", path: "/apps/calendar", icon: "tabler-calendar" },
      { title: "Chat", path: "/apps/chat", icon: "tabler-messages" },
      { title: "Email", path: "/apps/email", icon: "tabler-mail" },
      { title: "Ecommerce", path: "/apps/ecommerce", icon: "tabler-shopping-cart" },
      { title: "Invoice", path: "/apps/invoice", icon: "tabler-file-invoice" },
      { title: "Kanban", path: "/apps/kanban", icon: "tabler-kanban" },
      { title: "Logistics", path: "/apps/logistics", icon: "tabler-truck" },
      { title: "Academy", path: "/apps/academy", icon: "tabler-school" },
    ]
  },
  {
    sectionTitle: "Pages",
    items: [
      { title: "User Profile", path: "/pages/user-profile", icon: "tabler-user" },
      { title: "FAQ", path: "/pages/faq", icon: "tabler-help" },
      { title: "Pricing", path: "/pages/pricing", icon: "tabler-currency-dollar" },
    ]
  }
];

export const defaultHorizontalMenuData: NavSection[] = defaultVerticalMenuData;

export function generateMenuData(t: (key: string) => string): NavSection[] {
  return [
    {
      sectionTitle: t("menu.dashboards"),
      items: [
        { title: t("menu.crm"), path: "/dashboards/crm", icon: "tabler-layout-dashboard" },
        { title: t("menu.analytics"), path: "/dashboards/analytics", icon: "tabler-chart-bar" },
        { title: t("menu.ecommerce"), path: "/dashboards/ecommerce", icon: "tabler-shopping-cart" },
      ]
    },
    {
      sectionTitle: t("menu.apps"),
      items: [
        { title: t("menu.calendar"), path: "/apps/calendar", icon: "tabler-calendar" },
        { title: t("menu.chat"), path: "/apps/chat", icon: "tabler-messages" },
      ]
    }
  ];
}
