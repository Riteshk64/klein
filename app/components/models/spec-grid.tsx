import type { ModelSpec } from "../../models-content";

type SpecGridProps = {
  specs: ModelSpec[];
};

export function SpecGrid({ specs }: SpecGridProps) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {specs.map((spec) => (
        <div key={spec.label} className="flex flex-col">
          <span className="text-sm text-gray-500">{spec.label}</span>
          <span className="font-semibold text-gray-900">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
