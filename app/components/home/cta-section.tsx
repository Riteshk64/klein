import Link from "next/link";
import { SectionReveal } from "./section-reveal";

export function CTASection() {
  return (
    <section className="bg-[#1E3A8A] py-20 text-white">
      <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Book a Drive
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to Experience Klein?
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-white/80">
            Book a test drive and discover the future of city mobility.
          </p>
          <Link
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] transition-all duration-200 hover:bg-gray-100"
            href="/book-test-drive"
          >
            Book Test Drive
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
