export default function SectionTitle({
  subtitle,
  title,
  highlight,
  description,
  center = true,
  className = "",
}) {
  return (
    <div
      className={`section-title ${center ? "text-center" : "text-start"} ${className}`}
    >
      {subtitle && <h4 className="theme-primary-text mb-2 text-uppercase fw-semibold">{subtitle}</h4>}
      <h2>
        {title}{" "}
        {highlight && (
          <span className="theme-accent-highlight" style={{ color: "#2c7aff" }}>{highlight}</span>
        )}
      </h2>
      {description && <p className={`mt-2 text-muted ${center ? "mx-auto" : ""}`} style={{ maxWidth: "720px" }}>{description}</p>}
    </div>
  );
}
