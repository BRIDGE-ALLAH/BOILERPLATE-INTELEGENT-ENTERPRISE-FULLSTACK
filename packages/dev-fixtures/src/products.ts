// Development fixtures - Products
export interface FixtureProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  inStock: boolean;
  stockQuantity: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export const fixtureProducts: FixtureProduct[] = [
  {
    id: "prod-1",
    name: "Enterprise Dashboard License",
    description: "Full-featured admin dashboard with all modules",
    price: 299,
    currency: "USD",
    category: "Software",
    tags: ["dashboard", "admin", "enterprise"],
    inStock: true,
    stockQuantity: 100,
    images: ["/images/products/dashboard-license.jpg"],
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "prod-2",
    name: "Analytics Module",
    description: "Advanced analytics and reporting module",
    price: 99,
    currency: "USD",
    category: "Add-on",
    tags: ["analytics", "reports", "charts"],
    inStock: true,
    stockQuantity: 200,
    images: ["/images/products/analytics-module.jpg"],
    createdAt: "2024-01-11T00:00:00Z",
    updatedAt: "2024-01-11T00:00:00Z",
  },
];

export function createFixtureProduct(overrides: Partial<FixtureProduct> = {}): FixtureProduct {
  return {
    id: `prod-${Date.now()}`,
    name: "Test Product",
    description: "Test product description",
    price: 49,
    currency: "USD",
    category: "Test",
    tags: [],
    inStock: true,
    stockQuantity: 10,
    images: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides,
  };
}
