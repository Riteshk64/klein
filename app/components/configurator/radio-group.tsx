import type { ReactNode } from "react";

type RadioOption = {
  id: string;
  label: string;
  description?: string;
  meta?: ReactNode;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  selectedId: string;
  onChange: (optionId: string) => void;
  layout?: "row" | "column";
};

export function RadioGroup({
  name,
  options,
  selectedId,
  onChange,
  layout = "column",
}: RadioGroupProps) {
  return (
    <div className={layout === "row" ? "mt-3 flex flex-wrap gap-4" : "mt-3 space-y-3"}>
      {options.map((option) => {
        const isActive = option.id === selectedId;

        return (
          <label
            key={option.id}
            className={`flex cursor-pointer rounded-xl border transition ${
              layout === "row" ? "items-center gap-3 px-4 py-3" : "gap-4 p-4"
            } ${
              isActive
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <input
              checked={isActive}
              className="mt-1 h-4 w-4 border-gray-300 text-[#1E3A8A] focus:ring-blue-600"
              name={name}
              onChange={() => onChange(option.id)}
              type="radio"
              value={option.id}
            />
            <span className="flex flex-col">
              <span className="font-medium text-gray-900">{option.label}</span>
              {option.description ? (
                <span className="mt-1 text-sm leading-6 text-gray-600">
                  {option.description}
                </span>
              ) : null}
              {option.meta ? <span className="mt-1 text-sm text-gray-500">{option.meta}</span> : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}
