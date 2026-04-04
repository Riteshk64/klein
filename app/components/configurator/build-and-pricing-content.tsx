import { configuratorModels } from "../../configurator-content";
import { SectionReveal } from "../section-reveal";
import { ConfiguratorShowcase } from "./configurator-showcase";

export function BuildAndPricingContent() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <header className="page-intro-panel mb-12 p-8 sm:p-10 lg:p-12">
            <p className="eyebrow-chip">Vehicle Configurator</p>
            <h1 className="mt-5 text-4xl font-bold text-gray-900 lg:text-5xl">
              Build &amp; Price
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Configure your Klein and see pricing update instantly as you choose.
            </p>
          </header>
        </SectionReveal>

        <ConfiguratorShowcase models={configuratorModels} />
      </div>
    </section>
  );
}
