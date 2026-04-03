"use client";

type ModelTab = {
  id: string;
  name: string;
};

type ModelTabsProps = {
  tabs: ModelTab[];
  activeModelId: string;
  onSelect: (modelId: string) => void;
};

export function ModelTabs({ tabs, activeModelId, onSelect }: ModelTabsProps) {
  return (
    <div className="mb-10 flex gap-6 overflow-x-auto border-b border-gray-200">
      {tabs.map((tab) => {
        const isActive = tab.id === activeModelId;

        return (
          <button
            key={tab.id}
            className={`cursor-pointer border-b-2 px-4 py-3 font-medium transition-colors ${
              isActive
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => onSelect(tab.id)}
            type="button"
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
