import type { ShowcaseHighlight } from "../../models-content";

type HighlightsGridProps = {
  highlights: ShowcaseHighlight[];
};

export function HighlightsGrid({ highlights }: HighlightsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3">
      {highlights.map((highlight) => (
        <article key={highlight.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-3xl font-bold text-[#1E3A8A]">{highlight.value}</p>
          <h3 className="mt-5 text-xl font-bold text-gray-900">{highlight.title}</h3>
          <p className="mt-3 text-base leading-7 text-gray-600">{highlight.description}</p>
        </article>
      ))}
    </section>
  );
}
