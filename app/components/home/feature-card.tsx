import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="surface-card surface-card-hover relative overflow-hidden rounded-[26px] p-6 text-center">
      <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-[#1E3A8A]/10 blur-2xl" />
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] text-[#1E3A8A] shadow-sm">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-[#111111]">{title}</h3>
      <p className="mt-3 text-base font-medium leading-7 text-[#555555]">{description}</p>
    </article>
  );
}
