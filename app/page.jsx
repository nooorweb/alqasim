export default function HomePage() {
  return (
    <main style={{ padding: "40px" }}>
      <div className="container">
        <div className="section-title text-center">
          <h4>Font & Icon Verification</h4>
          <h1>Purdue Next.js 15 Ready (JavaScript)</h1>
          <p>
            Pure JavaScript setup with Lexend typography, Bootstrap 5.3.3, FontAwesome, and Themify icons.
          </p>
        </div>

        <div className="row g-4 justify-content-center mt-3">
          {/* Themify Icons Card */}
          <div className="col-md-4">
            <div className="card p-4 text-center shadow-sm">
              <div className="mb-3" style={{ fontSize: "2.5rem", color: "#2c7aff" }}>
                <i className="ti-book me-3"></i>
                <i className="ti-mobile me-3"></i>
                <i className="ti-email me-3"></i>
                <i className="ti-user"></i>
              </div>
              <h5 className="card-title">Themify Icons</h5>
              <p className="card-text text-muted">
                <code>ti-book</code>, <code>ti-mobile</code>, <code>ti-email</code>, <code>ti-user</code>
              </p>
            </div>
          </div>

          {/* FontAwesome Solid Icons Card */}
          <div className="col-md-4">
            <div className="card p-4 text-center shadow-sm">
              <div className="mb-3" style={{ fontSize: "2.5rem", color: "#fbb034" }}>
                <i className="fa-solid fa-graduation-cap me-3"></i>
                <i className="fa-solid fa-star me-3"></i>
                <i className="fa-solid fa-clock me-3"></i>
                <i className="fa-solid fa-check"></i>
              </div>
              <h5 className="card-title">FontAwesome Solid</h5>
              <p className="card-text text-muted">
                <code>fa-graduation-cap</code>, <code>fa-star</code>, <code>fa-clock</code>, <code>fa-check</code>
              </p>
            </div>
          </div>

          {/* FontAwesome Brands Card */}
          <div className="col-md-4">
            <div className="card p-4 text-center shadow-sm">
              <div className="mb-3" style={{ fontSize: "2.5rem", color: "#198754" }}>
                <i className="fa-brands fa-facebook me-3"></i>
                <i className="fa-brands fa-x-twitter me-3"></i>
                <i className="fa-brands fa-linkedin-in me-3"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <h5 className="card-title">FontAwesome Brands</h5>
              <p className="card-text text-muted">
                <code>fa-facebook</code>, <code>fa-x-twitter</code>, <code>fa-linkedin-in</code>
              </p>
            </div>
          </div>
        </div>

        {/* Theme Button Check */}
        <div className="text-center mt-5">
          <a href="#" className="btn_one me-3">
            Theme Button (.btn_one)
          </a>
          <a href="#" className="cta">
            <span>CTA Link with SVG</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

