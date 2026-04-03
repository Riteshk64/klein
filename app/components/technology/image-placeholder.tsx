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
        className={`flex w-full aspect-[16/9] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-center text-gray-500 ${className}`}
      >
        <p className="px-6 text-sm font-medium leading-6">{label}</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 ${className}`}>
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
