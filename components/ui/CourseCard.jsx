import Link from "next/link";

export default function CourseCard({
  title,
  category = "Technology",
  price = "Free",
  lessons = "24 Lessons",
  duration = "3 Months",
  rating = "5.0",
  reviews = "120",
  image = "/assets/images/course/c1.png",
  instructor = "Lead Instructor",
  instructorAvatar = "/assets/images/all-img/avator.png",
  href = "/registration",
  description = "Comprehensive practical coursework designed for real-world employment and recognized skill verification.",
}) {
  return (
    <div className="course-item d-flex h-100">
      <div className="course-inner w-100 d-flex flex-column justify-content-between">
        <div>
          <div className="course-img position-relative">
            <img src={image} alt={title} className="w-100" />
            <div className="course-price">{price}</div>
          </div>
          <div className="course-content p-4">
            <div className="ccategory mb-2">
              <span className="badge bg-light text-primary border">{category}</span>
            </div>
            <h3 className="fs-5 mb-2">
              <Link href={href} className="text-decoration-none text-dark">
                {title}
              </Link>
            </h3>
            <div className="crating mb-3">
              <i className="fa-solid fa-star text-warning me-1"></i>
              <span className="fw-semibold">{rating}</span>
              <span className="text-muted ms-1">({reviews} Rating)</span>
            </div>
          </div>
        </div>

        <div className="course-content px-4 pb-4 pt-0">
          <div className="cmeta d-flex justify-content-between border-top pt-3 text-muted small">
            <span>
              <i className="fa-solid fa-book-open text-primary me-1"></i> {lessons}
            </span>
            <span className="cmtime">
              <i className="fa-regular fa-clock text-primary me-1"></i> {duration}
            </span>
          </div>
        </div>
      </div>

      <div className="course-hover align-self-center">
        <div className="chover_content p-4">
          <div className="ccategory mb-2">
            <span className="badge bg-white text-primary border">{category}</span>
          </div>
          <h3 className="fs-5">
            <Link href={href} className="text-decoration-none">
              {title}
            </Link>
          </h3>
          <div className="hcourse-price text-primary fw-bold fs-5 mb-2">{price}</div>
          <p className="small mb-3 text-muted">{description}</p>
          <div className="hcmeta d-flex justify-content-between align-items-center mb-3">
            <span className="d-flex align-items-center gap-2">
              <img
                src={instructorAvatar}
                alt={instructor}
                className="rounded-circle"
                style={{ width: "32px", height: "32px", objectFit: "cover" }}
              />
              <span className="small text-dark fw-medium">{instructor}</span>
            </span>
            <span className="small text-warning">
              <i className="fa-solid fa-star"></i> {rating}
            </span>
          </div>
          <div className="text-center pt-2">
            <Link href={href} className="cta">
              <span>Enroll Now</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
