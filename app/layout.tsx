import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Klein Motors",
    template: "%s | Klein Motors",
  },
  description: "Urban mobility startup building ultra-compact city cars.",
  icons: {
    icon: "/images/brand/klien-logo.png",
    shortcut: "/images/brand/klien-logo.png",
    apple: "/images/brand/klien-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white font-sans text-[#111111]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
