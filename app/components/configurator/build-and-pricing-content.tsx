import { configuratorModels } from "../../configurator-content";
import { ConfiguratorShowcase } from "./configurator-showcase";

export function BuildAndPricingContent() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Build &amp; Price</h1>
          <p className="mt-4 text-lg text-gray-600">
            Configure your Klein and see pricing update instantly as you choose.
          </p>
        </header>

        <ConfiguratorShowcase models={configuratorModels} />
      </div>
    </section>
  );
}
