import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "Technology",
};

export default function TechnologyPage() {
  return <PageScaffold content={pageContent.technology} />;
}
