"use client";

type ColorOption = {
  id: string;
  label: string;
  swatch: string;
};

type ColorSelectorProps = {
  name: string;
  options: ColorOption[];
  selectedId: string;
  onChange: (optionId: string) => void;
};

export function ColorSelector({
  name,
  options,
  selectedId,
  onChange,
}: ColorSelectorProps) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-4">
      {options.map((option) => {
        const isActive = option.id === selectedId;

        return (
          <label
            key={option.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              checked={isActive}
              className="sr-only"
              name={name}
              onChange={() => onChange(option.id)}
              type="radio"
              value={option.id}
            />
            <span
              aria-hidden="true"
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-transform duration-200 ${
                isActive
                  ? "border-[#1E3A8A] ring-2 ring-[#1E3A8A]"
                  : "border-gray-300 hover:scale-110"
              }`}
              style={{ backgroundColor: option.swatch }}
            />
            <span className="text-sm font-medium text-gray-700">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
