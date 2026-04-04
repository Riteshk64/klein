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
    <div className="tab-shell mb-12 flex gap-3 overflow-x-auto rounded-[24px] p-3">
      {vehicles.map((vehicle) => {
        const isActive = vehicle.id === activeVehicleId;

        return (
          <button
            key={vehicle.id}
            className={`cursor-pointer rounded-2xl px-5 py-3 font-medium transition-all ${
              isActive
                ? "bg-[#1E3A8A] text-white shadow-[0_20px_32px_-24px_rgba(30,58,138,1)]"
                : "text-gray-600 hover:bg-[#1E3A8A]/6 hover:text-gray-900"
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
