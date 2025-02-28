export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface PricingBreakdown {
  dailyRate: number;
  days: number;
  subtotal: number;
  cleaningFee: number;
  deposit: number;
  total: number;
}
