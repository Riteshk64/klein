import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "../section-reveal";

export function AboutSection() {
  return (
    <section className="section-ambient bg-[#F9FAFB] py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <SectionReveal>
          <p className="eyebrow-chip">About Klein Motors</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
            Designed around the realities of modern city life.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-[#555555]">
            Klein Motors is an urban mobility startup focused on developing ultra-compact vehicles
            designed specifically for city environments. The company aims to provide practical,
            affordable, and efficient transportation solutions for modern urban lifestyles.
          </p>
          <Link
            className="mt-8 inline-flex items-center rounded-lg bg-[#1E3A8A] px-6 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:bg-[#1E40AF]"
            href="/about-us"
          >
            Learn More
          </Link>
        </SectionReveal>

        <SectionReveal delay={120}>
          <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              alt="Klein Motors team or company visual"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/images/home/about-klein-motors.png"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
