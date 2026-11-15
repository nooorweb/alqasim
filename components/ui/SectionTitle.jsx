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
      {subtitle && <h4 className="theme-primary-text mb-2">{subtitle}</h4>}
      <h2>
        {title}{" "}
        {highlight && (
          <span className="theme-accent-highlight">{highlight}</span>
        )}
      </h2>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}
