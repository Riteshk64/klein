import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return <PageScaffold content={pageContent.aboutUs} />;
}
