import Image from "next/image";
import Link from "next/link";

type ModelCardProps = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function ModelCard({ name, description, imageSrc, imageAlt }: ModelCardProps) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-white shadow-sm">
        <Image
          alt={imageAlt}
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          src={imageSrc}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-[#111111]">{name}</h3>
        <p className="mt-3 text-base font-medium leading-7 text-[#555555]">{description}</p>
      </div>

      <Link
        className="mt-6 inline-flex items-center rounded-lg bg-[#1E3A8A] px-6 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:bg-[#1E40AF]"
        href="/product-models"
      >
        View Details
      </Link>
    </article>
  );
}
