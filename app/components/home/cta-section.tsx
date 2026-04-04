import Link from "next/link";
import { SectionReveal } from "../section-reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#1E3A8A] py-20 text-white">
      <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
      <div className="relative mx-auto max-w-[900px] px-6 text-center lg:px-10">
        <SectionReveal>
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-sm">
            Book a Drive
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to Experience Klein?
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-white/80">
            Book a test drive and discover the future of city mobility.
          </p>
          <Link
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold !text-[#1E3A8A] transition-all duration-200 hover:bg-gray-100"
            href="/book-test-drive"
          >
            Book Test Drive
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
