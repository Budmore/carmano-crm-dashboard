import Image from "next/image";

interface VehicleCardProps {
  image: string;
  name: string;
  status: string;
  returnDate: string | null;
  maintenance: boolean;
}

export function VehicleCard({
  image,
  name,
  status,
  returnDate,
  maintenance,
}: VehicleCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        width={1920}
        height={1080}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              status === "Available"
                ? "bg-green-100 text-green-800"
                : status === "In Use"
                ? "bg-blue-100 text-blue-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </span>
          {returnDate && (
            <span className="text-sm text-gray-600">Returns: {returnDate}</span>
          )}
          {maintenance && (
            <span className="text-sm text-red-600">Maintenance Required</span>
          )}
        </div>
      </div>
    </div>
  );
}
