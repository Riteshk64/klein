import Link from "next/link";
import { bookDriveItem, navItems } from "../site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <p className="site-footer__brand">Klein</p>
          <p className="site-footer__copy">
            Basic marketing-site scaffold with the requested top-level pages.
          </p>
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={bookDriveItem.href}>{bookDriveItem.label}</Link>
        </nav>
      </div>
    </footer>
  );
}
