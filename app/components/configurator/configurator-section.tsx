import type { ReactNode } from "react";

type ConfiguratorSectionProps = {
  label: string;
  children: ReactNode;
};

export function ConfiguratorSection({
  label,
  children,
}: ConfiguratorSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-sm font-medium text-gray-700">{label}</h2>
      {children}
    </section>
  );
}
