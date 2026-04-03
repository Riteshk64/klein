import { AboutSection } from "./components/home/about-section";
import { CTASection } from "./components/home/cta-section";
import { FeatureCard } from "./components/home/feature-card";
import { FeatureGrid } from "./components/home/feature-grid";
import { HeroCarousel } from "./components/home/hero-carousel";
import {
  CommuteIcon,
  CompactIcon,
  CostIcon,
  EfficiencyIcon,
  MaintenanceIcon,
  ManeuverabilityIcon,
  ParkingIcon,
  SafetyIcon,
  SizeIcon,
} from "./components/home/icons";
import { ModelCard } from "./components/home/model-card";
import { SectionReveal } from "./components/home/section-reveal";
import {
  builtForCityFeatures,
  heroSlides,
  keyFeatureLabels,
  lineupModels,
} from "./home-content";

export default function Home() {
  const featureIcons = [ParkingIcon, CostIcon, CompactIcon, CommuteIcon];
  const keyFeatureIcons = [
    SizeIcon,
    EfficiencyIcon,
    ManeuverabilityIcon,
    MaintenanceIcon,
    SafetyIcon,
  ];

  return (
    <div className="bg-white">
      <HeroCarousel slides={heroSlides.map((slide) => ({ ...slide }))} />

      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1E3A8A]">
                Built for the City
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                Compact mobility designed around real urban needs.
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {builtForCityFeatures.map((feature, index) => {
              const Icon = featureIcons[index];

              return (
                <SectionReveal key={feature.title} delay={index * 80}>
                  <FeatureCard
                    description={feature.description}
                    icon={<Icon className="h-6 w-6" />}
                    title={feature.title}
                  />
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1E3A8A]">
                Meet the Klein Lineup
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                Three ultra-compact models for three different city-driving mindsets.
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {lineupModels.map((model, index) => (
              <SectionReveal key={model.name} delay={index * 90}>
                <ModelCard
                  description={model.description}
                  imageAlt={model.imageAlt}
                  imageSrc={model.imageSrc}
                  name={model.name}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        items={keyFeatureLabels.map((label, index) => {
          const Icon = keyFeatureIcons[index];

          return {
            icon: <Icon className="h-6 w-6" />,
            label,
          };
        })}
      />

      <AboutSection />
      <CTASection />
    </div>
  );
}
