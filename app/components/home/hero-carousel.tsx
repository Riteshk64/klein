"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

type HeroSlide = {
  model: string;
  heading: string;
  description: string;
  imageHint: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
};

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((previous) => (previous - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((previous) => (previous + 1) % slides.length);

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden border-b border-gray-100">
        <div className="relative min-h-[70vh] lg:min-h-[90vh]">
          {slides.map((slide, index) => (
            <div
              key={slide.model}
              aria-hidden={currentSlide !== index}
              className={`absolute inset-0 transition-all duration-700 ${
                currentSlide === index
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-6 opacity-0"
              }`}
            >
              <div className="mx-auto grid h-full max-w-[1280px] items-center gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:px-10 lg:py-20">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1E3A8A]">
                    {slide.model}
                  </p>
                  <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-[#111111] md:text-6xl lg:text-7xl">
                    {slide.heading}
                  </h1>
                  <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#555555]">
                    {slide.description}
                  </p>
                  <Link
                    className="mt-8 inline-flex items-center rounded-lg bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E40AF]"
                    href="/product-models"
                  >
                    Explore Models
                  </Link>
                </div>

                <div className="flex aspect-[5/4] w-full items-end rounded-[32px] bg-gradient-to-br from-slate-100 via-white to-blue-50 p-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
                      Car Image Placeholder
                    </p>
                    <p className="mt-3 text-sm font-medium text-[#555555]">{slide.imageHint}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-10">
              <div className="pointer-events-auto flex items-center gap-3">
                <button
                  aria-label="Previous slide"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-[#111111] shadow-sm transition-colors hover:bg-gray-50"
                  onClick={goToPrevious}
                  type="button"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next slide"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-[#111111] shadow-sm transition-colors hover:bg-gray-50"
                  onClick={goToNext}
                  type="button"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                {slides.map((slide, index) => (
                  <button
                    key={slide.model}
                    aria-label={`Go to ${slide.model}`}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      currentSlide === index ? "w-8 bg-[#1E3A8A]" : "w-2.5 bg-gray-300"
                    }`}
                    onClick={() => goToSlide(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
