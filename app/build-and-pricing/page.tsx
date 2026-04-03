import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "Build & Pricing",
};

export default function BuildAndPricingPage() {
  return <PageScaffold content={pageContent.pricing} />;
}
