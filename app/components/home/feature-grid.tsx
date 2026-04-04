import type { ReactNode } from "react";
import { SectionReveal } from "../section-reveal";

type FeatureGridItem = {
  icon: ReactNode;
  label: string;
};

type FeatureGridProps = {
  items: FeatureGridItem[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section className="section-ambient bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow-chip">Key Features</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
              Urban-first features that make daily driving easier.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {items.map((item, index) => (
            <SectionReveal key={item.label} delay={index * 70}>
              <div className="surface-card surface-card-hover flex h-full min-h-[160px] flex-col items-center justify-center rounded-[24px] px-4 py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] text-[#1E3A8A] shadow-sm">
                  {item.icon}
                </div>
                <p className="mt-5 text-base font-semibold text-[#111111]">{item.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
