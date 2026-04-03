import Link from "next/link";
import { bookDriveItem, navItems } from "../site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand-mark" href="/">
          Klein
        </Link>

        <nav aria-label="Primary" className="site-nav">
          {navItems.map((item) => (
            <Link key={item.href} className="site-nav__link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="site-header__cta" href={bookDriveItem.href}>
          {bookDriveItem.label}
        </Link>
      </div>
    </header>
  );
}
