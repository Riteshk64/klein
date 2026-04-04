import type { Metadata } from "next";
import { ContactForm } from "../components/contact/contact-form";
import { ContactInfoCard } from "../components/contact/contact-info-card";
import { SectionReveal } from "../components/section-reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionReveal>
            <header className="page-intro-panel mb-12 p-8 sm:p-10 lg:p-12">
              <p className="eyebrow-chip">Start A Conversation</p>
              <h1 className="mt-5 text-4xl font-bold text-gray-900 lg:text-5xl">Contact Us</h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                We are here to help. Reach out to us for inquiries, support, or
                information about our vehicles.
              </p>
            </header>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <ContactForm />

              <ContactInfoCard />
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
