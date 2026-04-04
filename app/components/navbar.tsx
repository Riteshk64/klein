"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { bookDriveItem, navItems } from "../site-content";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link
          className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-[#111111] transition-colors hover:text-[#1E3A8A]"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="Klein Motors logo"
            className="h-10 w-auto object-contain"
            height={40}
            priority
            src="/images/brand/klien-logo.png"
            width={40}
          />
          <span>Klein Motors</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-[#111111]" : "text-[#555555] hover:text-[#111111]"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            className="inline-flex items-center rounded-lg bg-[#1E3A8A] bg-[#1E3A8A] px-6 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:bg-[#1E40AF]"
            href={bookDriveItem.href}
          >
            {bookDriveItem.label}
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-[#111111] transition-colors hover:bg-gray-50 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#111111] transition-colors hover:bg-gray-50"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#1E3A8A] px-6 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:bg-[#1E40AF]"
              href={bookDriveItem.href}
              onClick={() => setIsOpen(false)}
            >
              {bookDriveItem.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
