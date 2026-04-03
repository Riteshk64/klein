import Link from "next/link";
import type { PageContent } from "../site-content";
import { bookDriveItem } from "../site-content";

type PageScaffoldProps = {
  content: PageContent;
};

export function PageScaffold({ content }: PageScaffoldProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1E3A8A]">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[#555555]">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-lg bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E40AF]"
              href={bookDriveItem.href}
            >
              {bookDriveItem.label}
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-gray-50"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.highlights.map((highlight) => (
            <article
              key={highlight}
              className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-6 shadow-sm"
            >
              <p className="text-base font-medium leading-7 text-[#555555]">{highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
