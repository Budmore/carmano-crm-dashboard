"use client";

import { logout } from "@/lib/auth";
import {
  BarChart3,
  CalendarDays,
  Car,
  HandCoins,
  LayoutDashboard,
  LogOut,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "./NavItem";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", pathname: "/dashboard" },
  { icon: Car, label: "Inventory", pathname: "/inventory" },
  { icon: CalendarDays, label: "Bookings", pathname: "/bookings" },
  { icon: Users, label: "Customers", pathname: "/customers" },
  { icon: HandCoins, label: "Pricing", pathname: "/pricing" },
  { icon: BarChart3, label: "Analytics", pathname: "/analytics" },
] as const;

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } finally {
      router.refresh();
    }
  };

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Carmano CRM</h1>
        <p className="text-sm text-gray-600">Admin Panel</p>
      </div>
      <nav className="space-y-1">
        {navItems.map(({ icon: Icon, label, pathname: itemPath }) => (
          <Link key={itemPath} href={itemPath} className="block">
            <NavItem
              icon={<Icon className="w-5 h-5" />}
              text={label}
              active={pathname === itemPath}
            />
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
