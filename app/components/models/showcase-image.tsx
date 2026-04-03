"use client";

import Image from "next/image";
import { useState } from "react";

type ShowcaseImageProps = {
  src: string;
  alt: string;
  fit?: "contain" | "cover";
  className?: string;
};

export function ShowcaseImage({
  src,
  alt,
  fit = "contain",
  className = "",
}: ShowcaseImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center ${className}`}
      >
        <p className="text-sm font-medium leading-6 text-gray-500">Add image: {src}</p>
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image
        alt={alt}
        className={fit === "cover" ? "object-cover" : "object-contain"}
        fill
        onError={() => setHasError(true)}
        sizes="(max-width: 1024px) 100vw, 50vw"
        src={src}
      />
    </div>
  );
}
