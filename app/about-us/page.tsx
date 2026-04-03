import type { Metadata } from "next";
import Link from "next/link";
import { coreValues, whyChooseKlein } from "../about-content";
import { ValueCard } from "../components/about/value-card";
import { ImagePlaceholder } from "../components/technology/image-placeholder";
import { SectionContainer } from "../components/technology/section-container";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              About Klein Motors
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Klein Motors is an urban mobility startup focused on developing
              compact vehicles designed specifically for modern city
              environments.
            </p>
          </div>

          <ImagePlaceholder
            alt="Klein Motors company overview placeholder"
            label="Add image: /images/about/company-overview.png"
            src="/images/about/company-overview.png"
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to provide practical, affordable, and efficient
            transportation solutions designed for the realities of modern urban
            living.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To become a leading provider of compact urban mobility solutions
            that improve accessibility, efficiency, and sustainability in
            cities.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreValues.map((value) => (
              <ValueCard
                key={value.title}
                description={value.description}
                title={value.title}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Klein Motors
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {whyChooseKlein.map((point) => (
              <div key={point} className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <p className="font-medium text-gray-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-bold">
            Join the Future of Urban Mobility
          </h2>
          <Link
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold !text-blue-600 transition hover:bg-gray-100"
            href="/build-and-pricing"
          >
            Build &amp; Price
          </Link>
        </div>
      </section>
    </main>
  );
}
