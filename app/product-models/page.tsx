import type { Metadata } from "next";
import { ModelsShowcase } from "../components/models/models-showcase";
import { models } from "../models-content";

export const metadata: Metadata = {
  title: "Models",
};

export default function ProductModelsPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Models</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the Klein vehicle designed for your city lifestyle.
          </p>
        </header>

        <ModelsShowcase models={models} />
      </div>
    </section>
  );
}
