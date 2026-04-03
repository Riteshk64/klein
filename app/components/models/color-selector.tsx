import type { ModelColor } from "../../models-content";

type ColorSelectorProps = {
  colors: ModelColor[];
  selectedColorId: string;
  onSelect: (colorId: string) => void;
};

export function ColorSelector({
  colors,
  selectedColorId,
  onSelect,
}: ColorSelectorProps) {
  return (
    <div className="mt-4">
      <p className="mb-3 text-sm font-medium text-gray-700">Available Colors</p>
      <div className="flex gap-4">
        {colors.map((color) => {
          const isActive = color.id === selectedColorId;

          return (
            <button
              key={color.id}
              aria-label={`Select ${color.label} color`}
              className={`h-8 w-8 cursor-pointer rounded-full border transition hover:scale-110 ${
                isActive ? "ring-2 ring-blue-600 ring-offset-2" : "border-gray-300"
              }`}
              onClick={() => onSelect(color.id)}
              style={{ backgroundColor: color.swatch }}
              type="button"
            />
          );
        })}
      </div>
    </div>
  );
}
