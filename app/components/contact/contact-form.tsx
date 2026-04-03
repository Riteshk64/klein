import Link from "next/link";

export function ContactForm() {
  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="full-name">
            Full Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="full-name"
            name="fullName"
            placeholder="Your full name"
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            type="tel"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="subject">
            Subject
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="subject"
            name="subject"
            placeholder="How can we help?"
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="message"
            name="message"
            placeholder="Tell us more about your inquiry"
            rows={6}
          />
        </div>

        <button
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          type="submit"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold !text-white transition hover:bg-blue-700"
          href="/book-test-drive"
        >
          Book Test Drive
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
          href="/build-and-pricing"
        >
          Build &amp; Price
        </Link>
      </div>
    </div>
  );
}
