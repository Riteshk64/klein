"use client";

import Link from "next/link";
import { useState } from "react";
import type { ShowcaseModel } from "../../models-content";
import { FeaturesShowcase } from "./features-showcase";
import { HighlightsGrid } from "./highlights-grid";
import { ShowcaseImage } from "./showcase-image";
import { VehicleTabs } from "./vehicle-tabs";

type ModelsShowcaseProps = {
  models: ShowcaseModel[];
};

export function ModelsShowcase({ models }: ModelsShowcaseProps) {
  const [activeVehicleId, setActiveVehicleId] = useState(models[0].id);

  const activeModel =
    models.find((model) => model.id === activeVehicleId) ?? models[0];

  return (
    <>
      <VehicleTabs
        activeVehicleId={activeVehicleId}
        onSelect={setActiveVehicleId}
        vehicles={models.map((model) => ({ id: model.id, name: model.name }))}
      />

      <section className="min-h-[65vh] py-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            <ShowcaseImage
              alt={activeModel.heroImage.alt}
              fit="cover"
              src={activeModel.heroImage.src}
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {activeModel.name}
            </p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">{activeModel.tagline}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              {activeModel.description}
            </p>
            <Link
              className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              href="/build-and-pricing"
            >
              Build & Price
            </Link>
          </div>
        </div>
      </section>

      <HighlightsGrid highlights={activeModel.highlights} />
      <FeaturesShowcase features={activeModel.features} />

      <section className="py-16">
        <div className="rounded-3xl bg-gray-50 px-8 py-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Ready to experience Klein?</h3>
          <Link
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            href="/build-and-pricing"
          >
            Build & Price
          </Link>
        </div>
      </section>
    </>
  );
}
