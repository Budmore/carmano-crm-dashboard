interface Image {
  url: string;
  alt?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  images: Image[];
}

export interface PricingRule {
  startDate: string;
  endDate: string;
  rate: number;
  type: "seasonal" | "special";
  name: string;
}

interface RVBooking {
  id: string;
  startDate: string;
  endDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: "ongoing" | "upcoming" | "completed" | "cancelled";
  totalCost: number;
  notes?: string;
}

export interface RVImage {
  id: string;
  url: string;
  caption: string;
  alt?: string;
  isPrimary: boolean;
}

export interface RV {
  id: string;
  make: string;
  model: string;
  year: number;
  license: string;
  status: "available" | "rented" | "maintenance";
  features: string[];
  maintenanceHistory: {
    date: string;
    description: string;
  }[];
  bookingHistory: RVBooking[];
  imageUrl: string;
  images: RVImage[];
  description?: string;
  baseRate: number;
  pricingRules: PricingRule[];
  mileage?: number;
  length?: number;
  height?: number;
  weight?: number;
  fuelType?: string;
}
