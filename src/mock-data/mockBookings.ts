import type { Booking } from "@/services/bookings/bookings.types";
import type { Customer } from "@/services/customers/customers.types";
import type { Vehicle } from "@/services/vehicles/vehicles.types";
import { addDays, subDays } from "date-fns";

export const mockBookings: Booking[] = [
  {
    id: "BK001",
    customerId: "C001",
    pickup: {
      date: new Date(2024, 2, 15),
    },
    return: {
      date: new Date(2024, 2, 20),
    },

    vehicleId: "V001",

    status: "upcoming",
    totalAmount: 1050,
    depositPaid: true,
    paymentStatus: "paid",
  },
  {
    id: "BK002",
    customerId: "C002",
    pickup: {
      date: new Date(2024, 2, 22),
    },
    return: {
      date: new Date(2024, 2, 25),
    },
    vehicleId: "V002",
    status: "completed",
    totalAmount: 750,
    depositPaid: true,
    paymentStatus: "partial",
  },
  {
    id: "BK003",
    customerId: "C003",
    pickup: {
      date: new Date(2024, 3, 1),
    },
    return: {
      date: new Date(2024, 3, 7),
    },
    vehicleId: "V003",

    status: "upcoming",
    totalAmount: 1400,
    depositPaid: true,
    paymentStatus: "overdue",
  },
  {
    id: "BK004",
    customerId: "C004",
    pickup: {
      date: new Date(2024, 3, 10),
    },
    return: {
      date: new Date(2024, 3, 15),
    },
    vehicleId: "V001",

    status: "cancelled",
    totalAmount: 1200,
    depositPaid: false,
    paymentStatus: "paid",
  },
  {
    id: "BK005",
    customerId: "C005",
    pickup: {
      date: subDays(new Date(), 7),
    },
    return: {
      date: new Date(),
    },
    vehicleId: "V002",

    status: "ongoing",
    totalAmount: 1350,
    depositPaid: true,
    paymentStatus: "partial",
  },

  {
    id: "BK006",
    customerId: "C001",
    pickup: {
      date: subDays(new Date(), 7),
    },
    return: {
      date: addDays(new Date(), 7),
    },
    vehicleId: "V001",

    status: "ongoing",
    totalAmount: 1350,
    depositPaid: true,
    paymentStatus: "unpaid",
  },
];

export const customers: Customer[] = [
  {
    id: "C001",
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
  },
  {
    id: "C002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
  },
  {
    id: "C003",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "(555) 246-8135",
  },
  {
    id: "C004",
    name: "Bob Wilson",
    email: "bob@example.com",
    phone: "(555) 369-1470",
  },
  {
    id: "C005",
    name: "Carol Brown",
    email: "carol@example.com",
    phone: "(555) 159-7530",
  },
];
export const customersMap = new Map<string, Customer>();

customers.forEach((obj) => {
  customersMap.set(obj.id, obj);
});

export const vehicles: Vehicle[] = [
  {
    id: "V001",
    name: "Winnebago Vista",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "V002",
    name: "Airstream Classic",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "V003",
    name: "Thor Motor Coach",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626680114529-3f6ffa002b80?auto=format&fit=crop&q=80",
      },
    ],
  },
];

export const vehiclesMap = new Map<string, Vehicle>();
vehicles.forEach((obj) => {
  vehiclesMap.set(obj.id, obj);
});
