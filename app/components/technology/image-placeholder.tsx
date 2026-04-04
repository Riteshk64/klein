"use client";

import Image from "next/image";
import { useState } from "react";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`image-frame flex w-full aspect-[16/9] items-center justify-center rounded-[24px] border-2 border-dashed border-gray-300 text-center text-gray-500 ${className}`}
      >
        <p className="px-6 text-sm font-medium leading-6">{label}</p>
      </div>
    );
  }

  return (
    <div className={`image-frame relative w-full aspect-[16/9] overflow-hidden rounded-[24px] ${className}`}>
      <Image
        alt={alt}
        className="object-cover"
        fill
        onError={() => setHasError(true)}
        sizes="(max-width: 1024px) 100vw, 50vw"
        src={src}
      />
    </div>
  );
}
