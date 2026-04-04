"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

type HeroSlide = {
  model: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
          <div className="relative min-h-[70vh]">
          {slides.map((slide, index) => (
            <div
              key={slide.model}
              aria-hidden={currentSlide !== index}
              className={`absolute inset-0 w-full overflow-hidden transition-all duration-700 ${
                currentSlide === index
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-3 opacity-0"
              }`}
            >
              <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                  alt={slide.imageAlt}
                  className="object-cover"
                  fill
                  priority
                  sizes="100vw"
                  src={slide.imageSrc}
                />
              </div>

              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

              <div className="relative z-20">
                <div className="flex min-h-[70vh] items-center px-5 lg:px-10">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                      {slide.model}
                    </p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                      {slide.heading}
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-white/90">
                      {slide.description}
                    </p>
                    <Link
                      className="mt-6 inline-flex items-center rounded-lg bg-[#1E3A8A] px-6 py-3 font-semibold !text-white transition hover:bg-[#1E40AF]"
                      href="/product-models"
                    >
                      Explore Models
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30">
            <div className="flex items-end justify-between px-6 lg:px-6">
              <div className="pointer-events-auto flex items-center gap-3">
                <button
                  aria-label="Previous slide"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
                  onClick={goToPrevious}
                  type="button"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next slide"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
                  onClick={goToNext}
                  type="button"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="pointer-events-auto flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.model}
                    aria-label={`Go to ${slide.model}`}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      currentSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/40"
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
      </div>
    </section>
  );
}
