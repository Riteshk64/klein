import Link from "next/link";
import { navItems } from "../site-content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#1E3A8A]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Klein Motors</h2>
            <p className="mt-3 max-w-xs text-sm font-medium leading-7 text-white/70">
              Unapologetically Abnormal
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Navigation
            </h3>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-3 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="text-white/80 transition-colors hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm font-medium text-white/80">
              <a className="block transition-colors hover:text-white" href="mailto:info@kleinmotors.com">
                info@kleinmotors.com
              </a>
              <a className="block transition-colors hover:text-white" href="tel:+919876543210">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm font-medium text-white/60">
          Copyright 2026 Klein Motors.
        </div>
      </div>
    </footer>
  );
}
