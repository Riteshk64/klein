import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1E3A8A]">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-[#111111]">{title}</h3>
      <p className="mt-3 text-base font-medium leading-7 text-[#555555]">{description}</p>
    </article>
  );
}
