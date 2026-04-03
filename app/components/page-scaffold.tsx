import Link from "next/link";
import type { PageContent } from "../site-content";
import { bookDriveItem } from "../site-content";

type PageScaffoldProps = {
  content: PageContent;
};

export function PageScaffold({ content }: PageScaffoldProps) {
  return (
    <section className="page-section">
      <div className="shell">
        <div className="page-hero">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="page-hero__description">{content.description}</p>

          <div className="page-hero__actions">
            <Link className="button button--primary" href={bookDriveItem.href}>
              {bookDriveItem.label}
            </Link>
            <Link className="button button--secondary" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="card-grid">
          {content.highlights.map((highlight) => (
            <article key={highlight} className="info-card">
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
