import type { ShowcaseHighlight } from "../../models-content";
import { SectionReveal } from "../section-reveal";

type HighlightsGridProps = {
  highlights: ShowcaseHighlight[];
};

export function HighlightsGrid({ highlights }: HighlightsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3">
      {highlights.map((highlight, index) => (
        <SectionReveal key={highlight.title} delay={index * 90}>
          <article className="surface-card surface-card-hover relative overflow-hidden rounded-[26px] p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF]" />
            <p className="text-3xl font-bold text-[#1E3A8A]">{highlight.value}</p>
            <h3 className="mt-5 text-xl font-bold text-gray-900">{highlight.title}</h3>
            <p className="mt-3 text-base leading-7 text-gray-600">{highlight.description}</p>
          </article>
        </SectionReveal>
      ))}
    </section>
  );
}
