import type { Metadata } from "next";
import { ModelSection } from "../components/models/model-section";
import { models } from "../models-content";

export const metadata: Metadata = {
  title: "Models",
};

export default function ProductModelsPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Meet the Klein Lineup
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Three ultra-compact vehicles designed for modern city mobility.
          </p>
        </header>

        {models.map((model, index) => (
          <ModelSection
            key={model.id}
            model={model}
            showBorder={index !== models.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
