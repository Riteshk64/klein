type ToggleOption = {
  id: string;
  label: string;
};

type ConfigToggleProps = {
  label: string;
  options: ToggleOption[];
  selectedId: string;
  onSelect: (optionId: string) => void;
  className?: string;
};

export function ConfigToggle({
  label,
  options,
  selectedId,
  onSelect,
  className = "",
}: ConfigToggleProps) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm font-medium text-gray-700">{label}</p>
      <div className="flex gap-3">
        {options.map((option) => {
          const isActive = option.id === selectedId;

          return (
            <button
              key={option.id}
              className={`cursor-pointer rounded-lg border px-4 py-2 transition ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:border-gray-400"
              }`}
              onClick={() => onSelect(option.id)}
              type="button"
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
