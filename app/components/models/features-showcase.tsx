import type { ShowcaseFeature } from "../../models-content";
import { SectionReveal } from "../section-reveal";
import { ShowcaseImage } from "./showcase-image";

type FeaturesShowcaseProps = {
  features: ShowcaseFeature[];
};

export function FeaturesShowcase({ features }: FeaturesShowcaseProps) {
  return (
    <section className="py-20">
      <div className="space-y-20">
        {features.map((feature, index) => {
          const isImageFirst = index % 2 === 1;

          return (
            <SectionReveal key={feature.title} delay={index * 100}>
              <div className="feature-row grid grid-cols-1 items-center gap-12 p-8 sm:p-10 lg:grid-cols-2 lg:p-12">
                <div className={isImageFirst ? "lg:order-2" : ""}>
                  <p className="eyebrow-chip">Feature {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                    {feature.description}
                  </p>
                </div>

                <div className={isImageFirst ? "lg:order-1" : ""}>
                  <div className="image-frame aspect-[16/10] overflow-hidden rounded-[26px]">
                    <ShowcaseImage
                      alt={feature.imageAlt}
                      fit="cover"
                      src={feature.imageSrc}
                    />
                  </div>
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
