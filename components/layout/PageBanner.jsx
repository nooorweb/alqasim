import Link from "next/link";

export default function PageBanner({ title, breadcrumb = [] }) {
  // Normalize breadcrumb into array of items: string or { label, href }
  const breadcrumbItems = Array.isArray(breadcrumb)
    ? breadcrumb
    : typeof breadcrumb === "string"
    ? [{ label: breadcrumb }]
    : [];

  return (
    <section className="section-top" aria-label="Page Title Banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-top-title text-center">
              <h1>{title}</h1>
              <ul className="d-flex justify-content-center align-items-center gap-2 list-unstyled mt-3">
                <li>
                  <Link href="/" className="text-decoration-none">Home</Link>
                </li>
                {breadcrumbItems.map((item, idx) => {
                  const isLast = idx === breadcrumbItems.length - 1;
                  const label = typeof item === "string" ? item : item.label;
                  const href = typeof item === "object" ? item.href : null;

                  return (
                    <li key={idx} className="d-flex align-items-center gap-2">
                      <span className="text-muted">/</span>
                      {href && !isLast ? (
                        <Link href={href} className="text-decoration-none">{label}</Link>
                      ) : (
                        <span className="text-primary fw-medium">{label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
