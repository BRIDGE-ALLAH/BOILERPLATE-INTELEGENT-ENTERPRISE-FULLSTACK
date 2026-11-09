// Development fixtures - Analytics
export interface FixtureAnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
  geoBreakdown: Array<{ country: string; visitors: number }>;
  dateRange: { start: string; end: string };
}

export const fixtureAnalytics: FixtureAnalyticsData = {
  pageViews: 125430,
  uniqueVisitors: 45210,
  bounceRate: 42.3,
  avgSessionDuration: 245,
  topPages: [
    { path: "/dashboards/crm", views: 25430 },
    { path: "/dashboards/analytics", views: 18210 },
    { path: "/apps/ecommerce", views: 15670 },
    { path: "/apps/calendar", views: 12340 },
    { path: "/pages/user-profile", views: 9870 },
  ],
  trafficSources: [
    { source: "Direct", visitors: 22500, percentage: 49.8 },
    { source: "Organic Search", visitors: 14800, percentage: 32.7 },
    { source: "Referral", visitors: 5200, percentage: 11.5 },
    { source: "Social", visitors: 2710, percentage: 6.0 },
  ],
  deviceBreakdown: [
    { device: "Desktop", percentage: 68.5 },
    { device: "Mobile", percentage: 26.2 },
    { device: "Tablet", percentage: 5.3 },
  ],
  geoBreakdown: [
    { country: "United States", visitors: 18500 },
    { country: "United Kingdom", visitors: 8200 },
    { country: "Germany", visitors: 5600 },
    { country: "France", visitors: 4100 },
    { country: "Canada", visitors: 3800 },
  ],
  dateRange: { start: "2024-01-01", end: "2024-01-31" },
};

export function createFixtureAnalytics(overrides: Partial<FixtureAnalyticsData> = {}): FixtureAnalyticsData {
  return { ...fixtureAnalytics, ...overrides };
}
