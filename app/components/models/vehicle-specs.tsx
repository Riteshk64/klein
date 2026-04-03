import type { ModelSpec } from "../../models-content";

type VehicleSpecsProps = {
  specs: ModelSpec[];
};

export function VehicleSpecs({ specs }: VehicleSpecsProps) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-10">
      {specs.map((spec) => (
        <div key={spec.label}>
          <p className="text-sm text-gray-500">{spec.label}</p>
          <p className="font-semibold text-gray-900">{spec.value}</p>
        </div>
      ))}
    </div>
  );
}
