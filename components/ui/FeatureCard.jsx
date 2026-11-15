import Link from "next/link";

export default function FeatureCard({
  number,
  icon = "fa-solid fa-graduation-cap",
  title,
  description,
  linkText = "Learn More",
  href = "/admissions",
  variant = "primary",
}) {
  return (
    <div className="single_tp h-100 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          {number && (
            <span
              className="fw-bold fs-4 px-3 py-1 rounded-pill"
              style={{
                backgroundColor: "rgba(44, 122, 255, 0.1)",
                color: "#2c7aff",
              }}
            >
              {number}
            </span>
          )}
          {icon && (
            <div
              className="d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                color: "#2c7aff",
                fontSize: "20px",
              }}
            >
              <i className={icon}></i>
            </div>
          )}
        </div>
        <h3 className="fs-5 fw-bold text-dark mb-2">{title}</h3>
        <p className="text-muted small mb-4">{description}</p>
      </div>

      {href && (
        <div>
          <Link href={href} className="cta">
            <span>{linkText}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
