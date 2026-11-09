// Development fixtures - Orders
export interface FixtureOrder {
  id: string;
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  billingAddress?: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const fixtureOrders: FixtureOrder[] = [
  {
    id: "ord-1",
    userId: "1",
    items: [
      { productId: "prod-1", quantity: 1, price: 299 },
    ],
    subtotal: 299,
    tax: 23.92,
    shipping: 0,
    total: 322.92,
    currency: "USD",
    status: "delivered",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "US",
    },
    createdAt: "2024-01-20T10:00:00Z",
    updatedAt: "2024-01-22T14:30:00Z",
  },
];

export function createFixtureOrder(overrides: Partial<FixtureOrder> = {}): FixtureOrder {
  return {
    id: `ord-${Date.now()}`,
    userId: "1",
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
    currency: "USD",
    status: "pending",
    shippingAddress: {
      name: "Test User",
      street: "123 Test St",
      city: "Test City",
      state: "TS",
      zip: "12345",
      country: "US",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides,
  };
}
