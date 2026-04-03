"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ModelData } from "../../models-content";
import { ColorSelector } from "./color-selector";
import { SpecGrid } from "./spec-grid";

type ModelSectionProps = {
  model: ModelData;
  showBorder?: boolean;
};

export function ModelSection({
  model,
  showBorder = true,
}: ModelSectionProps) {
  const [selectedColorId, setSelectedColorId] = useState(model.colors[0].id);
  const [erroredColorId, setErroredColorId] = useState<string | null>(null);

  const selectedColor =
    model.colors.find((color) => color.id === selectedColorId) ?? model.colors[0];
  const showFallback = erroredColorId === selectedColor.id;

  return (
    <section className={`py-20 ${showBorder ? "border-b border-gray-200" : ""}`}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex w-full items-center justify-center rounded-xl bg-gray-100 p-6">
          <div className="relative aspect-[16/9] w-full">
            {showFallback ? (
              <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white px-6 text-center">
                <p className="text-sm font-medium leading-6 text-gray-500">
                  Add image: {selectedColor.imageSrc}
                </p>
              </div>
            ) : (
              <Image
                alt={selectedColor.imageAlt}
                className="object-contain"
                fill
                onError={() => setErroredColorId(selectedColor.id)}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  objectPosition: selectedColor.objectPosition ?? "center center",
                  transform: `scale(${selectedColor.imageScale ?? 1})`,
                }}
                src={selectedColor.imageSrc}
              />
            )}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            {model.name}
          </h2>
          <p className="mb-6 max-w-md text-lg text-gray-600">{model.description}</p>

          <ColorSelector
            colors={model.colors}
            onSelect={setSelectedColorId}
            selectedColorId={selectedColorId}
          />

          <SpecGrid specs={model.specs} />

          <Link
            className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            href={`/book-test-drive?model=${model.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
