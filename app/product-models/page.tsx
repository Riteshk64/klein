import type { Metadata } from "next";
import { SectionReveal } from "../components/section-reveal";
import { ModelsShowcase } from "../components/models/models-showcase";
import { models } from "../models-content";

export const metadata: Metadata = {
  title: "Models",
};

export default function ProductModelsPage() {
  return (
    <section className="bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <header className="page-intro-panel mb-12 p-8 sm:p-10 lg:p-12">
            <p className="eyebrow-chip">Product Showcase</p>
            <h1 className="mt-5 text-4xl font-bold text-gray-900 lg:text-5xl">
              Our Models
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Choose the Klein vehicle designed for your city lifestyle.
            </p>
          </header>
        </SectionReveal>

        <ModelsShowcase models={models} />
      </div>
    </section>
  );
}
