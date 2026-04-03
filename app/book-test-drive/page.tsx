import type { Metadata } from "next";
import { PageScaffold } from "../components/page-scaffold";
import { pageContent } from "../site-content";

export const metadata: Metadata = {
  title: "Book Test Drive",
};

export default function BookTestDrivePage() {
  return <PageScaffold content={pageContent.bookTestDrive} />;
}
