import Link from "next/link";

type ModelCardProps = {
  name: string;
  description: string;
  imageHint: string;
};

export function ModelCard({ name, description, imageHint }: ModelCardProps) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015]">
      <div className="flex aspect-[4/3] items-end rounded-[20px] bg-gradient-to-br from-slate-100 via-white to-blue-50 p-5 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
            Image Placeholder
          </p>
          <p className="mt-2 text-sm font-medium text-[#555555]">{imageHint}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-[#111111]">{name}</h3>
        <p className="mt-3 text-base font-medium leading-7 text-[#555555]">{description}</p>
      </div>

      <Link
        className="mt-6 inline-flex items-center rounded-lg bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E40AF]"
        href="/product-models"
      >
        View Details
      </Link>
    </article>
  );
}
