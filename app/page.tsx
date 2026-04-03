import Link from "next/link";
import { PageScaffold } from "./components/page-scaffold";
import { bookDriveItem, navItems, pageContent } from "./site-content";

export default function Home() {
  return (
    <>
      <PageScaffold content={pageContent.home} />

      <section className="shell home-links">
        <div className="section-heading">
          <p className="eyebrow">Site map</p>
          <h2>All requested pages are now in place.</h2>
        </div>

        <div className="card-grid">
          {navItems.map((item) => (
            <Link key={item.href} className="route-card" href={item.href}>
              <span>{item.label}</span>
              <span className="route-card__path">{item.href}</span>
            </Link>
          ))}

          <Link className="route-card route-card--accent" href={bookDriveItem.href}>
            <span>{bookDriveItem.label}</span>
            <span className="route-card__path">{bookDriveItem.href}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
