"use client";

import Image from "next/image";
import { useState } from "react";

type VehicleImageProps = {
  imageSrc: string;
  imageAlt: string;
};

export function VehicleImage({ imageSrc, imageAlt }: VehicleImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="image-frame flex w-full aspect-[16/9] items-center justify-center rounded-[24px]">
      <div className="relative h-full w-full">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center px-6 text-center">
            <p className="text-sm font-medium leading-6 text-gray-500">
              Add image: {imageSrc}
            </p>
          </div>
        ) : (
          <Image
            alt={imageAlt}
            className="object-contain"
            fill
            onError={() => setHasError(true)}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={imageSrc}
          />
        )}
      </div>
    </div>
  );
}
