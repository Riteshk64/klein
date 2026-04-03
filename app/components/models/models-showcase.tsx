"use client";

import Link from "next/link";
import { useState } from "react";
import type {
  ModelData,
  ModelPowertrain,
  ModelTransmission,
} from "../../models-content";
import { ColorSelector } from "./color-selector";
import { ConfigToggle } from "./config-toggle";
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
  const [selectedPowertrains, setSelectedPowertrains] = useState<
    Record<string, ModelPowertrain>
  >(
    Object.fromEntries(
      models.map((model) => [model.id, model.id === "volt" ? "Electric" : "ICE"]),
    ) as Record<string, ModelPowertrain>,
  );
  const [selectedTransmissions, setSelectedTransmissions] = useState<
    Record<string, ModelTransmission>
  >(
    Object.fromEntries(
      models
        .filter((model) => model.id !== "volt")
        .map((model) => [model.id, "Manual"]),
    ) as Record<string, ModelTransmission>,
  );

  const activeModel =
    models.find((model) => model.id === activeVehicleId) ?? models[0];
  const activeColorId = selectedColors[activeModel.id] ?? activeModel.colors[0].id;
  const activeColor =
    activeModel.colors.find((color) => color.id === activeColorId) ??
    activeModel.colors[0];
  const activePowertrain =
    selectedPowertrains[activeModel.id] ?? (activeModel.id === "volt" ? "Electric" : "ICE");
  const activeTransmission =
    selectedTransmissions[activeModel.id] ?? "Manual";
  const activeVariant =
    activeModel.variants.find((variant) => {
      if (variant.powertrain !== activePowertrain) {
        return false;
      }

      if (activePowertrain === "ICE") {
        return variant.transmission === activeTransmission;
      }

      return true;
    }) ?? activeModel.variants[0];
  const showPowertrainSelector = activeModel.id !== "volt";
  const showTransmissionSelector = activePowertrain === "ICE" && activeModel.id !== "volt";

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

          {showPowertrainSelector ? (
            <ConfigToggle
              className="mt-6"
              label="Powertrain"
              onSelect={(powertrainId) =>
                setSelectedPowertrains((current) => ({
                  ...current,
                  [activeModel.id]: powertrainId as ModelPowertrain,
                }))
              }
              options={[
                { id: "ICE", label: "ICE" },
                { id: "EV", label: "EV" },
              ]}
              selectedId={activePowertrain}
            />
          ) : null}

          {showTransmissionSelector ? (
            <ConfigToggle
              className="mt-4"
              label="Transmission"
              onSelect={(transmissionId) =>
                setSelectedTransmissions((current) => ({
                  ...current,
                  [activeModel.id]: transmissionId as ModelTransmission,
                }))
              }
              options={[
                { id: "Manual", label: "Manual" },
                { id: "Automatic", label: "Automatic" },
              ]}
              selectedId={activeTransmission}
            />
          ) : null}

          <VehicleSpecs specs={activeVariant.specs} />

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
