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
    <article className="surface-card surface-card-hover group relative overflow-hidden rounded-[26px] p-5">
      <div className="absolute inset-x-6 top-0 h-24 rounded-b-[28px] bg-[#1E3A8A]/6 blur-2xl" />
      <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-[22px]">
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
