import type { Metadata } from "next";
import { BuildAndPricingContent } from "../components/configurator/build-and-pricing-content";

export const metadata: Metadata = {
  title: "Build & Pricing",
};

export default function BuildAndPricingPage() {
  return <BuildAndPricingContent />;
}
