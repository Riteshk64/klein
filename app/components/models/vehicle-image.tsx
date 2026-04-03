"use client";

import Image from "next/image";
import { useState } from "react";
import type { ModelColor } from "../../models-content";

type VehicleImageProps = {
  color: ModelColor;
};

export function VehicleImage({ color }: VehicleImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex w-full aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-gray-100">
      <div className="relative h-full w-full">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center px-6 text-center">
            <p className="text-sm font-medium leading-6 text-gray-500">
              Add image: {color.imageSrc}
            </p>
          </div>
        ) : (
          <Image
            alt={color.imageAlt}
            className="h-full w-full object-contain"
            fill
            onError={() => setHasError(true)}
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{
              objectPosition: color.objectPosition ?? "center center",
              transform: `scale(${color.imageScale ?? 1})`,
            }}
            src={color.imageSrc}
          />
        )}
      </div>
    </div>
  );
}
