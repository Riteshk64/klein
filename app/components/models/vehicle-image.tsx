"use client";

import Image from "next/image";
import { useState } from "react";
import type { ModelColor } from "../../models-content";

type VehicleImageProps = {
  color: ModelColor;
};

export function VehicleImage({ color }: VehicleImageProps) {
  const [hasError, setHasError] = useState(false);
  const imageScale = (color.imageScale ?? 1) * 1.1;

  return (
    <div className="flex w-full items-center justify-center lg:pr-6">
      <div className="flex aspect-[16/9] w-full max-w-xl items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        <div className="relative h-full w-full">
          {hasError ? (
            <div className="flex h-full w-full items-center justify-center text-center">
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
                transform: `scale(${imageScale})`,
              }}
              src={color.imageSrc}
            />
          )}
        </div>
      </div>
    </div>
  );
}
