import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "../components/section-reveal";

export const metadata: Metadata = {
  title: "Book Test Drive",
};

const models = ["Klein Pulse", "Klein Eon", "Klein Volt"];

const expectations = [
  "Choose the model you want to experience first.",
  "Share your preferred city and date so the team can coordinate quickly.",
  "A Klein Motors representative will confirm your slot and next steps.",
];

export default function BookTestDrivePage() {
  return (
    <main className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1E3A8A]">
              Primary Conversion
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
              Book a Test Drive
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 text-[#555555]">
              Experience Klein Motors in person and see how our compact city cars
              fit into your daily urban routine.
            </p>
          </header>
        </SectionReveal>

        <SectionReveal delay={100}>
          <section className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <h2 className="text-2xl font-bold text-[#111111]">
                  Request Your Slot
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#555555]">
                  Share your details and our team will reach out to confirm an
                  available test drive slot.
                </p>

                <form className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      id="full-name"
                      name="fullName"
                      placeholder="Your full name"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="phone-number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      id="phone-number"
                      name="phoneNumber"
                      placeholder="+91 98765 43210"
                      type="tel"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="email-address"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      id="email-address"
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="preferred-model"
                    >
                      Preferred Model
                    </label>
                    <select
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      defaultValue=""
                      id="preferred-model"
                      name="preferredModel"
                    >
                      <option disabled value="">
                        Select a model
                      </option>
                      {models.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="preferred-city"
                    >
                      Preferred City
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      id="preferred-city"
                      name="preferredCity"
                      placeholder="Mumbai"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="preferred-date"
                    >
                      Preferred Date
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      id="preferred-date"
                      name="preferredDate"
                      type="date"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      className="mb-2 block text-sm font-medium text-gray-700"
                      htmlFor="notes"
                    >
                      Notes
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      id="notes"
                      name="notes"
                      placeholder="Anything you want the team to know before the drive?"
                      rows={5}
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-2 md:col-span-2 sm:flex-row">
                    <button
                      className="inline-flex items-center justify-center rounded-lg bg-[#1E3A8A] px-6 py-3 font-semibold !text-white transition hover:bg-[#1E40AF]"
                      type="submit"
                    >
                      Submit Request
                    </button>
                    <Link
                      className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#111111] transition hover:bg-gray-50"
                      href="/build-and-pricing"
                    >
                      Build &amp; Price
                    </Link>
                  </div>
                </form>
              </div>

              <div className="bg-[#1E3A8A] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                  What To Expect
                </p>
                <h2 className="mt-4 text-3xl font-bold">
                  A simple booking flow focused on getting you behind the wheel.
                </h2>
                <div className="mt-8 space-y-4">
                  {expectations.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                        Step {index + 1}
                      </p>
                      <p className="mt-2 text-base leading-7 text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </SectionReveal>
      </div>
    </main>
  );
}
