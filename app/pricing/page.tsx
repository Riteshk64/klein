import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return <PageScaffold content={pageContent.pricing} />;
}
