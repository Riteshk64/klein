"use client";

import Link from "next/link";
import { useState } from "react";
import type { ModelData } from "../../models-content";
import { ColorSelector } from "./color-selector";
import { VehicleImage } from "./vehicle-image";
import { VehicleSpecs } from "./vehicle-specs";
import { VehicleTabs } from "./vehicle-tabs";

type ModelsShowcaseProps = {
  models: ModelData[];
};

export function ModelsShowcase({ models }: ModelsShowcaseProps) {
  const [activeVehicleId, setActiveVehicleId] = useState(models[0].id);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>(
    Object.fromEntries(models.map((model) => [model.id, model.colors[0].id])),
  );

  const activeModel =
    models.find((model) => model.id === activeVehicleId) ?? models[0];
  const activeColorId = selectedColors[activeModel.id] ?? activeModel.colors[0].id;
  const activeColor =
    activeModel.colors.find((color) => color.id === activeColorId) ??
    activeModel.colors[0];

  return (
    <>
      <VehicleTabs
        activeVehicleId={activeVehicleId}
        onSelect={setActiveVehicleId}
        vehicles={models.map((model) => ({ id: model.id, name: model.name }))}
      />

      <section className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <VehicleImage key={`${activeModel.id}-${activeColor.id}`} color={activeColor} />

        <div>
          <h2 className="text-3xl font-bold text-gray-900">{activeModel.name}</h2>
          <p className="mt-3 max-w-lg text-lg text-gray-600">
            {activeModel.description}
          </p>

          <ColorSelector
            colors={activeModel.colors}
            onSelect={(colorId) =>
              setSelectedColors((current) => ({
                ...current,
                [activeModel.id]: colorId,
              }))
            }
            selectedColorId={activeColor.id}
          />

          <VehicleSpecs specs={activeModel.specs} />

          <Link
            className="mt-10 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            href="/book-test-drive"
          >
            Book Test Drive
          </Link>
        </div>
      </section>
    </>
  );
}
