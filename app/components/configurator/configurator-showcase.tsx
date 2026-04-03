"use client";

import { useMemo, useState } from "react";
import type { ConfigModel, ConfigOption } from "../../configurator-content";
import { ConfiguratorSection } from "./configurator-section";
import { ModelTabs } from "./model-tabs";
import { PriceSummary } from "./price-summary";
import { RadioGroup } from "./radio-group";
import { VehicleImage } from "./vehicle-image";

type ConfiguratorShowcaseProps = {
  models: ConfigModel[];
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

function getDefaultSelections(model: ConfigModel) {
  const defaultPowertrain = model.powertrains[0];

  return {
    powertrainId: defaultPowertrain.id,
    colorId: model.colors[0].id,
    dashboardId: model.dashboardOptions[0].id,
    batteryId: defaultPowertrain.batteryOptions?.[0]?.id ?? null,
    engineId: defaultPowertrain.engineOptions?.[0]?.id ?? null,
  };
}

export function ConfiguratorShowcase({ models }: ConfiguratorShowcaseProps) {
  const [activeModelId, setActiveModelId] = useState(models[0].id);
  const [selection, setSelection] = useState(() => getDefaultSelections(models[0]));

  const activeModel = models.find((model) => model.id === activeModelId) ?? models[0];
  const activePowertrain =
    activeModel.powertrains.find(
      (powertrain) => powertrain.id === selection.powertrainId,
    ) ?? activeModel.powertrains[0];
  const activeColor =
    activeModel.colors.find((color) => color.id === selection.colorId) ??
    activeModel.colors[0];
  const dashboardOption =
    activeModel.dashboardOptions.find(
      (option) => option.id === selection.dashboardId,
    ) ?? activeModel.dashboardOptions[0];
  const batteryOption =
    activePowertrain.batteryOptions?.find(
      (option) => option.id === selection.batteryId,
    ) ?? activePowertrain.batteryOptions?.[0];
  const engineOption =
    activePowertrain.engineOptions?.find(
      (option) => option.id === selection.engineId,
    ) ?? activePowertrain.engineOptions?.[0];

  const totalPrice = useMemo(() => {
    const dashboardDelta = dashboardOption?.priceDelta ?? 0;
    const batteryDelta = batteryOption?.priceDelta ?? 0;
    const engineDelta = engineOption?.priceDelta ?? 0;

    return activePowertrain.basePrice + dashboardDelta + batteryDelta + engineDelta;
  }, [activePowertrain.basePrice, batteryOption?.priceDelta, dashboardOption?.priceDelta, engineOption?.priceDelta]);

  function handleModelChange(modelId: string) {
    const nextModel = models.find((model) => model.id === modelId);

    if (!nextModel) {
      return;
    }

    setActiveModelId(modelId);
    setSelection(getDefaultSelections(nextModel));
  }

  function handlePowertrainChange(powertrainId: string) {
    const nextPowertrain =
      activeModel.powertrains.find((powertrain) => powertrain.id === powertrainId) ??
      activeModel.powertrains[0];

    setSelection({
      powertrainId: nextPowertrain.id,
      colorId: activeModel.colors[0].id,
      dashboardId: activeModel.dashboardOptions[0].id,
      batteryId: nextPowertrain.batteryOptions?.[0]?.id ?? null,
      engineId: nextPowertrain.engineOptions?.[0]?.id ?? null,
    });
  }

  function optionMeta(option: ConfigOption) {
    return option.priceDelta === 0 ? "Included" : `+₹${formatPrice(option.priceDelta)}`;
  }

  return (
    <>
      <ModelTabs
        activeModelId={activeModelId}
        onSelect={handleModelChange}
        tabs={models.map((model) => ({ id: model.id, name: model.name }))}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <VehicleImage imageAlt={activeColor.imageAlt} imageSrc={activeColor.imageSrc} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">{activeModel.name}</h2>
          <p className="mt-3 max-w-xl text-lg leading-8 text-gray-600">
            {activeModel.description}
          </p>

          <ConfiguratorSection label="Powertrain">
            <RadioGroup
              layout="row"
              name={`${activeModel.id}-powertrain`}
              onChange={handlePowertrainChange}
              options={activeModel.powertrains.map((powertrain) => ({
                id: powertrain.id,
                label: powertrain.label,
              }))}
              selectedId={activePowertrain.id}
            />
          </ConfiguratorSection>

          <ConfiguratorSection label="Color">
            <RadioGroup
              layout="row"
              name={`${activeModel.id}-color`}
              onChange={(colorId) =>
                setSelection((current) => ({
                  ...current,
                  colorId,
                }))
              }
              options={activeModel.colors.map((color) => ({
                id: color.id,
                label: color.label,
              }))}
              selectedId={activeColor.id}
            />
          </ConfiguratorSection>

          <ConfiguratorSection label="Dashboard">
            <RadioGroup
              name={`${activeModel.id}-dashboard`}
              onChange={(dashboardId) =>
                setSelection((current) => ({
                  ...current,
                  dashboardId,
                }))
              }
              options={activeModel.dashboardOptions.map((option) => ({
                id: option.id,
                label: option.label,
                description: option.description,
                meta: optionMeta(option),
              }))}
              selectedId={dashboardOption.id}
            />
          </ConfiguratorSection>

          {activePowertrain.id === "EV" && activePowertrain.batteryOptions ? (
            <ConfiguratorSection label="Battery">
              <RadioGroup
                name={`${activeModel.id}-battery`}
                onChange={(batteryId) =>
                  setSelection((current) => ({
                    ...current,
                    batteryId,
                  }))
                }
                options={activePowertrain.batteryOptions.map((option) => ({
                  id: option.id,
                  label: option.label,
                  description: option.description,
                  meta: optionMeta(option),
                }))}
                selectedId={batteryOption?.id ?? activePowertrain.batteryOptions[0].id}
              />
            </ConfiguratorSection>
          ) : null}

          {activePowertrain.id === "ICE" && activePowertrain.engineOptions ? (
            <ConfiguratorSection label="Engine">
              <RadioGroup
                name={`${activeModel.id}-engine`}
                onChange={(engineId) =>
                  setSelection((current) => ({
                    ...current,
                    engineId,
                  }))
                }
                options={activePowertrain.engineOptions.map((option) => ({
                  id: option.id,
                  label: option.label,
                  description: option.description,
                  meta: optionMeta(option),
                }))}
                selectedId={engineOption?.id ?? activePowertrain.engineOptions[0].id}
              />
            </ConfiguratorSection>
          ) : null}

          <PriceSummary totalPrice={`₹${formatPrice(totalPrice)}`} />
        </div>
      </div>
    </>
  );
}
