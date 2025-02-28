import { BookingList } from "@/components/BookingList";
import { RecentBookings } from "@/components/dashboard/RecentBookings";
import { StatCard } from "@/components/dashboard/StatCard";
import { VehicleCard } from "@/components/dashboard/VehicleCard";
import { mockBookings } from "@/mock-data/mockBookings";
import {
  AlertTriangle,
  CarFront,
  DollarSign,
  Search,
  UserCheck,
} from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    redirect("/login");
  }

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<DollarSign className="w-6 h-6 text-blue-600" />}
            title="Revenue"
            value="$24,563"
            change="+12.5%"
            positive
          />
          <StatCard
            icon={<UserCheck className="w-6 h-6 text-blue-600" />}
            title="Active Rentals"
            value="48"
            change="+8.2%"
            positive
          />
          <StatCard
            icon={<CarFront className="w-6 h-6 text-blue-600" />}
            title="Available Vehicles"
            value="15"
            change="-2"
            positive={false}
          />
          <StatCard
            icon={<AlertTriangle className="w-6 h-6 text-blue-600" />}
            title="Maintenance Due"
            value="3"
            change="+1"
            positive={false}
          />
        </div>

        {/* Recent Bookings */}

        <div className="bg-white rounded-lg shadow mb-8">
          <RecentBookings />
        </div>

        <div className="mb-8">
          <BookingList bookings={mockBookings} />
        </div>

        {/* Vehicle Status */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Vehicle Status</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VehicleCard
                image="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80"
                name="Winnebago Vista"
                status="In Use"
                returnDate="March 22, 2024"
                maintenance={false}
              />
              <VehicleCard
                image="https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?auto=format&fit=crop&q=80"
                name="Airstream Classic"
                status="Available"
                returnDate={null}
                maintenance={false}
              />
              <VehicleCard
                image="https://images.unsplash.com/photo-1626680114529-3f6ffa002b80?auto=format&fit=crop&q=80"
                name="Thor Motor Coach"
                status="Maintenance"
                returnDate={null}
                maintenance={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
