import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <PageScaffold content={pageContent.contact} />;
}
