type VehicleTab = {
  id: string;
  name: string;
};

type VehicleTabsProps = {
  vehicles: VehicleTab[];
  activeVehicleId: string;
  onSelect: (vehicleId: string) => void;
};

export function VehicleTabs({
  vehicles,
  activeVehicleId,
  onSelect,
}: VehicleTabsProps) {
  return (
    <div className="mb-10 flex gap-6 overflow-x-auto border-b border-gray-200">
      {vehicles.map((vehicle) => {
        const isActive = vehicle.id === activeVehicleId;

        return (
          <button
            key={vehicle.id}
            className={`cursor-pointer border-b-2 px-4 py-3 font-medium transition-colors ${
              isActive
                ? "border-blue-600 text-[#1E3A8A]"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => onSelect(vehicle.id)}
            type="button"
          >
            {vehicle.name}
          </button>
        );
      })}
    </div>
  );
}
