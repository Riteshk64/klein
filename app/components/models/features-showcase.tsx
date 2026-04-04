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
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className={isImageFirst ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                    {feature.description}
                  </p>
                </div>

                <div className={isImageFirst ? "lg:order-1" : ""}>
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl">
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
