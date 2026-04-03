import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "Product / Models",
};

export default function ProductModelsPage() {
  return <PageScaffold content={pageContent.productModels} />;
}
