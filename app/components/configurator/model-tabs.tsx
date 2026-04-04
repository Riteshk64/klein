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
    <div className="tab-shell mb-12 flex gap-3 overflow-x-auto rounded-[24px] p-3">
      {tabs.map((tab) => {
        const isActive = tab.id === activeModelId;

        return (
          <button
            key={tab.id}
            className={`cursor-pointer rounded-2xl px-5 py-3 font-medium transition-all ${
              isActive
                ? "bg-[#1E3A8A] text-white shadow-[0_20px_32px_-24px_rgba(30,58,138,1)]"
                : "text-gray-600 hover:bg-[#1E3A8A]/6 hover:text-gray-900"
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
