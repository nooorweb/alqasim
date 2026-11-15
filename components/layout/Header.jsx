"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="top_header_banner" role="banner">
      {/* START LOGO WITH CONTACT */}
      <section className="logo-contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="single-top-contact">
                <i className="ti-mobile"></i>
                <h4><a href="tel:+4857548854826">+ 485 7548 8546</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="single-top-contact">
                <i className="ti-email"></i>
                <h4><a href="mailto:info@alqasim.edu.pk">info@alqasim.edu.pk</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="single-top-contact">
                <i className="ti-location-pin"></i>
                <h4>Hinjal Gate Bannu City</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="top_social_profile">
                <ul>
                  <li><a href="#" aria-label="Facebook" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#" aria-label="Twitter" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#" aria-label="Instagram" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#" aria-label="LinkedIn" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END LOGO WITH CONTACT */}

      {/* START NAVBAR */}
      <div id="navigation" className="navbar-light bg-faded site-navigation">
        <div className="container-fluid px-xl-4 px-3">
          <div className="d-flex align-items-center justify-content-between flex-nowrap w-100">
            {/* LOGO */}
            <div className="site-logo flex-shrink-0 me-3">
              <Link href="/" className="d-flex align-items-center text-decoration-none">
                <img
                  src="/assets/images/all-img/alqasim-logo-sm.png"
                  alt="Al Qasim Institute Bannu"
                  style={{ height: "52px", width: "auto", objectFit: "contain" }}
                />
                <div className="ms-2 d-none d-sm-flex flex-column text-start">
                  <span className="fw-bold text-dark" style={{ fontSize: "15px", lineHeight: "1.2", letterSpacing: "0.5px" }}>
                    AL QASIM INSTITUTE
                  </span>
                  <span className="text-muted fw-semibold" style={{ fontSize: "11px", letterSpacing: "1px" }}>
                    BANNU
                  </span>
                </div>
              </Link>
            </div>

            {/* NAV MENU */}
            <div className="d-none d-xl-flex justify-content-center flex-grow-1 mx-2">
              <nav id="main-menu" role="navigation" aria-label="Main Navigation">
                <ul className="d-flex align-items-center flex-nowrap list-unstyled mb-0 gap-2" style={{ whiteSpace: "nowrap", fontSize: "14.5px" }}>
                  <li>
                    <Link href="/" className={isActive("/") ? "active" : ""}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration" className={isActive("/registration") ? "active" : ""}>
                      Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className={isActive("/courses") ? "active" : ""}>
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/departments" className={isActive("/departments") ? "active" : ""}>
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className={isActive("/careers") ? "active" : ""}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className={isActive("/gallery") ? "active" : ""}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/verify" className={isActive("/verify") ? "active" : ""}>
                      Verify
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CTA & MOBILE TOGGLE */}
            <div className="flex-shrink-0 d-flex align-items-center gap-2 ms-2 pe-xl-2">
              <Link className="btn_one d-none d-sm-inline-block text-nowrap px-3 py-2" href="/registration" style={{ fontSize: "14px" }}>
                Apply Online <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
              <button
                type="button"
                className="btn btn-outline-primary d-xl-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
              </button>
            </div>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          {mobileMenuOpen && (
            <div className="d-xl-none py-3 border-top mt-2 bg-white rounded shadow-sm px-3">
              <ul className="list-unstyled mb-0">
                <li className="py-2 border-bottom">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Home
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/registration"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/registration") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Registration
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/courses") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Courses
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/departments"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/departments") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Departments
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/careers"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/careers") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Careers
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/gallery") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/verify"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/verify") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Certificate Verification
                  </Link>
                </li>
                <li className="py-2 border-bottom">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/contact") ? "fw-bold text-primary" : "text-dark"}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-3">
                  <Link
                    className="btn_one d-block text-center text-white"
                    href="/registration"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Apply Online <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* END NAVBAR */}
    </header>
  );
}
