import type { ReactNode } from "react";
import { SectionReveal } from "../section-reveal";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`section-ambient py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>{children}</SectionReveal>
      </div>
    </section>
  );
}
