import type { Metadata } from "next";
import Link from "next/link";
import { FeatureGrid } from "../components/technology/feature-grid";
import { ImagePlaceholder } from "../components/technology/image-placeholder";
import { SectionContainer } from "../components/technology/section-container";
import { TechnologyCard } from "../components/technology/technology-card";
import { safetyFeatures, technologyFoundations } from "../technology-content";

export const metadata: Metadata = {
  title: "Technology",
};

export default function TechnologyPage() {
  return (
    <main className="bg-white">
      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Technology Built for Urban Mobility
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Our vehicles are engineered to deliver efficiency, safety, and
              reliability for modern city environments.
            </p>
          </div>

          <ImagePlaceholder label="Add image: /images/technology/technology-hero.png" />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Our Technology Foundations
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologyFoundations.map((card) => (
              <TechnologyCard
                key={card.title}
                description={card.description}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Powertrain Technology
            </h2>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Petrol Engine Technology
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
              Our compact petrol engines are engineered for reliability,
              efficiency, and easy maintenance in dense urban environments.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Fuel-efficient small displacement engines</li>
              <li>Low maintenance design</li>
              <li>Reliable daily performance</li>
              <li>Reduced emissions</li>
            </ul>
          </div>

          <ImagePlaceholder label="Add image: /images/technology/ice-engine.png" />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Electric Drive System
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
              Our electric powertrain delivers smooth acceleration, quiet
              operation, and lower running costs for urban mobility.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Lithium-ion battery system</li>
              <li>Fast charging capability</li>
              <li>Quiet operation</li>
              <li>Energy-efficient performance</li>
            </ul>
          </div>

          <ImagePlaceholder
            className="lg:order-1"
            label="Add image: /images/technology/electric-powertrain.png"
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Safety Systems</h2>
          <FeatureGrid features={safetyFeatures} />
          <ImagePlaceholder
            className="mt-12"
            label="Add image: /images/technology/safety-systems.png"
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Smart Connectivity and Controls
            </h2>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Digital Instrument Cluster</li>
              <li>Touchscreen Control System</li>
              <li>Bluetooth Connectivity</li>
              <li>Navigation Support</li>
              <li>USB Charging Ports</li>
            </ul>
          </div>

          <ImagePlaceholder label="Add image: /images/technology/dashboard-system.png" />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Engineered for Efficiency
            </h2>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>Lightweight vehicle structure</li>
              <li>Optimized aerodynamics</li>
              <li>Low rolling resistance tires</li>
              <li>Energy-efficient components</li>
            </ul>
          </div>

          <ImagePlaceholder
            className="lg:order-1"
            label="Add image: /images/technology/efficiency-design.png"
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Innovation for Tomorrow
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            We continue to develop technologies that improve sustainability,
            efficiency, and urban mobility for the next generation of
            transportation.
          </p>
          <ImagePlaceholder
            className="mt-12"
            label="Add image: /images/technology/future-technology.png"
          />
        </div>
      </SectionContainer>

      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-bold">
            Experience Technology Built for the City
          </h2>
          <Link
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
            href="/build-and-pricing"
          >
            Build &amp; Price
          </Link>
        </div>
      </section>
    </main>
  );
}
