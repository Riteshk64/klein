import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}
