"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* START HOME HERO */}
      <section
        id="home"
        className="home_bg position-relative overflow-hidden"
        style={{
          backgroundImage: "url(/assets/images/banner/bg-scaled.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "680px",
          height: "auto",
          display: "flex",
          alignItems: "center",
          padding: "70px 0 60px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="home_content" style={{ paddingTop: "0px" }}>
                <span
                  className="badge px-3 py-2 rounded-pill mb-3 fw-semibold"
                  style={{
                    backgroundColor: "rgba(44, 122, 255, 0.12)",
                    color: "#2c7aff",
                    fontSize: "13px",
                  }}
                >
                  <i className="fa-solid fa-graduation-cap me-1"></i> Premier Academy in Bannu City
                </span>
                <h1
                  style={{
                    color: "#1a2d62",
                    fontWeight: 700,
                    fontSize: "44px",
                    lineHeight: "1.25",
                    marginBottom: "18px",
                  }}
                >
                  Empower Your Future with <span style={{ color: "#2c7aff" }}>Practical Skills</span> &amp; Modern Education
                </h1>
                <p
                  className="text-muted mb-4"
                  style={{ fontSize: "16px", lineHeight: "1.7" }}
                >
                  Join Bannu's leading academy for Board-accredited IT diplomas, English language &amp; IELTS mastery, and certified vocational technical trades.
                </p>

                <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                  <Link href="/courses" className="cta text-decoration-none">
                    <span>Explore Courses</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                  <Link
                    href="/verify"
                    className="btn btn-outline-primary rounded-pill px-4"
                    style={{ height: "46px", display: "inline-flex", alignItems: "center" }}
                  >
                    <i className="fa-solid fa-shield-halved me-2"></i> Verify Certificate
                  </Link>
                </div>

                {/* SEARCH BAR */}
                <div className="hero_search_box mt-4" style={{ maxWidth: "520px" }}>
                  <form
                    action="/courses"
                    method="get"
                    className="d-flex align-items-center p-1 rounded-pill bg-white shadow-sm border"
                    style={{ borderColor: "#e2e8f0" }}
                  >
                    <i className="fa-solid fa-magnifying-glass text-muted ms-3 me-2"></i>
                    <input
                      type="text"
                      name="search"
                      className="form-control border-0 bg-transparent shadow-none"
                      placeholder="Search courses (e.g. DIT, IELTS, Web Dev...)"
                      style={{ height: "46px", fontSize: "14px" }}
                    />
                    <button
                      type="submit"
                      className="btn_one rounded-pill px-4 border-0 text-nowrap"
                      style={{ height: "46px", position: "relative", top: 0, right: 0 }}
                    >
                      Search
                    </button>
                  </form>
                </div>

                {/* POPULAR TAGS */}
                <div className="home_tag mt-3 d-flex flex-wrap align-items-center gap-2 small">
                  <span className="fw-semibold text-dark">Popular:</span>
                  <Link
                    href="/courses?dept=it-cs"
                    className="badge bg-white text-primary border rounded-pill px-3 py-2 text-decoration-none"
                  >
                    DIT Diploma
                  </Link>
                  <Link
                    href="/courses?dept=languages"
                    className="badge bg-white text-primary border rounded-pill px-3 py-2 text-decoration-none"
                  >
                    IELTS Mastery
                  </Link>
                  <Link
                    href="/courses?dept=web-software"
                    className="badge bg-white text-primary border rounded-pill px-3 py-2 text-decoration-none"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/courses?dept=technical-vocational"
                    className="badge bg-white text-primary border rounded-pill px-3 py-2 text-decoration-none"
                  >
                    Rigger Training
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 d-none d-lg-block position-relative text-center">
              <div className="position-relative d-inline-block">
                <img
                  src="/assets/images/all-img/home-image.png"
                  className="img-fluid"
                  alt="Student with laptop"
                  style={{ maxHeight: "560px", objectFit: "contain" }}
                />

                {/* FLOATING BADGE 1: CERTIFIED STUDENTS */}
                <div
                  className="p-3 bg-white rounded-4 shadow-lg position-absolute d-flex align-items-center gap-3 border text-start"
                  style={{
                    bottom: "30px",
                    left: "-20px",
                    minWidth: "210px",
                    borderColor: "#eef2f6",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(25, 135, 84, 0.12)",
                      color: "#198754",
                      fontSize: "22px",
                    }}
                  >
                    <i className="fa-solid fa-user-graduate"></i>
                  </div>
                  <div>
                    <h3 className="fs-5 fw-bold text-dark mb-0">7,500+</h3>
                    <span className="text-muted small">Certified Students</span>
                  </div>
                </div>

                {/* FLOATING BADGE 2: ACCREDITED PROGRAMS */}
                <div
                  className="p-3 bg-white rounded-4 shadow-lg position-absolute d-flex align-items-center gap-3 border text-start"
                  style={{
                    top: "50px",
                    right: "-15px",
                    minWidth: "200px",
                    borderColor: "#eef2f6",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(44, 122, 255, 0.12)",
                      color: "#2c7aff",
                      fontSize: "22px",
                    }}
                  >
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div>
                    <h3 className="fs-5 fw-bold text-dark mb-0">45+</h3>
                    <span className="text-muted small">Accredited Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END HOME HERO */}

      {/* START COUNTER */}
      <section className="count_area counter_feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_one">
                <span className="ti-medall-alt sc_one"></span>
                <h2 className="counter-num">10+</h2>
                <p>Years of Academic Excellence</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_two">
                <span className="ti-folder sc_two"></span>
                <h2 className="counter-num">50+</h2>
                <p>Certified Diplomas &amp; Courses</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_three">
                <span className="ti-user sc_three"></span>
                <h2 className="counter-num">7,500+</h2>
                <p>Graduated Alumni</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_four">
                <span className="ti-id-badge sc_four"></span>
                <h2 className="counter-num">98%</h2>
                <p>Certification Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COUNTER */}

      {/* START ABOUT US HOME ONE */}
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="/assets/images/all-img/about1.png" className="img-fluid" alt="About Al Qasim Institute" />
                <div className="wc_year">
                  <h3><span>7k+</span> <br />Graduated Alumni</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Empowering Minds with Practical Technical &amp; Language Mastery</h2>
                <p>Al Qasim Institute Bannu is a trusted hub for English communication, professional IT education, safety certifications, and career empowerment. Join us today to build skills that shape your future.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-desktop"></i>
                <h4>Modern Computing &amp; Audio-Visual Labs</h4>
                <p>High-speed workstations equipped for live software development, graphics rendering, and language listening practice.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-certificate"></i>
                <h4>Recognized Diplomas &amp; Verified Certifications</h4>
                <p>Industry-aligned curricula recognized by technical boards with authentic online verification for every graduate.</p>
              </div>
              <div className="cta_two">
                <Link href="/about" className="cta">
                  <span>Discover More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT US HOME ONE */}

      {/* START TOP PROMO FEATURES */}
      <section className="tp_feature section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Our Foundation</h4>
            <h1>Built on Core Values That Shape Tomorrow's Leaders</h1>
            <p>We are built on strong principles that guide educational excellence at Al Qasim Institute Bannu.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp">
                <h3>Our Vision</h3>
                <i className="fa-solid fa-eye"></i>
                <p>To be a leading center of excellence empowering learners with practical knowledge, skills, and values to thrive globally.</p>
                <Link href="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_one">
                <h3>Our Mission</h3>
                <i className="fa-solid fa-bullseye"></i>
                <p>Deliver affordable, high-quality education in English, computing, and professional technical development.</p>
                <Link href="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_two">
                <h3>Core Values</h3>
                <i className="fa-solid fa-heart"></i>
                <p>Upholding the highest standards of integrity, excellence, innovation, and equal opportunity for every student.</p>
                <Link href="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_three">
                <h3>Lifetime Support</h3>
                <i className="fa-solid fa-user-shield"></i>
                <p>Dedicated academic counseling, career placement assistance, and continuous alumni mentorship.</p>
                <Link href="/contact" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TOP PROMO FEATURES */}

      {/* START TOPIC / CATEGORIES */}
      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Academic Departments</h4>
            <h1>Explore Our Specialized Training Departments</h1>
            <p>Career-focused disciplines equipping students with in-demand technical, linguistic, and vocational expertise.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_one">
                <img src="/assets/images/icon/ct1.svg" alt="English Mastery" />
                <h2><Link href="/departments">English Mastery &amp; IELTS</Link></h2>
                <span>3 Programs</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_two">
                <img src="/assets/images/icon/ct2.svg" alt="Diploma in IT" />
                <h2><Link href="/departments">Diploma in IT (DIT)</Link></h2>
                <span>1-Year Recognized</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_three">
                <img src="/assets/images/icon/ct3.svg" alt="Web Development" />
                <h2><Link href="/departments">Web Development</Link></h2>
                <span>Full-Stack Track</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_four">
                <img src="/assets/images/icon/ct4.svg" alt="Graphic Design" />
                <h2><Link href="/departments">Graphic Design &amp; Media</Link></h2>
                <span>Creative Studio</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_five">
                <img src="/assets/images/icon/ct5.svg" alt="Computer Basics" />
                <h2><Link href="/departments">Computer Basics &amp; CIT</Link></h2>
                <span>6-Month Fast Track</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_six">
                <img src="/assets/images/icon/ct6.svg" alt="Cyber Security" />
                <h2><Link href="/departments">Hardware &amp; Networks</Link></h2>
                <span>Practical Lab</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_seven">
                <img src="/assets/images/icon/ct6.svg" alt="Technical Trades" />
                <h2><Link href="/departments">Safety &amp; Rigger Trades</Link></h2>
                <span>Industrial Training</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_eight">
                <img src="/assets/images/icon/ct6.svg" alt="Office Automation" />
                <h2><Link href="/departments">Office Automation</Link></h2>
                <span>QuickBooks &amp; Office</span>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div className="cc_btn">
                <Link href="/departments" className="cta">
                  <span>View All Departments</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TOPIC */}

      {/* START WHY CHOOSE US */}
      <section className="marketing_content_area section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Institutional Advantages</h4>
            <h1>Why Choose Al Qasim Institute Bannu?</h1>
            <p>Proven educational standards combining deep theoretical mastery with rigorous hands-on lab training.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-user-graduate"></i>
                  <h2><Link href="/about">Professional &amp; <br />Certified Trainers</Link></h2>
                </div>
                <p>Learn directly from industry experts with proven track records and years of practical experience in modern education.</p>
                <Link href="/about">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-laptop-code"></i>
                  <h2><Link href="/courses">Practical Learning <br />Approach</Link></h2>
                </div>
                <p>Hands-on training with real-world projects, live portfolios, and practical computer lab scenarios.</p>
                <Link href="/courses">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <h2><Link href="/about">Modern Teaching <br />Methods</Link></h2>
                </div>
                <p>Interactive audio-visual labs, updated curricula, and individualized student mentoring for every skill level.</p>
                <Link href="/about">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-certificate"></i>
                  <h2><Link href="/verify">Recognized <br />Certifications</Link></h2>
                </div>
                <p>Official diplomas recognized across domestic and international employment markets with online QR verification.</p>
                <Link href="/verify">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-briefcase"></i>
                  <h2><Link href="/careers">Career Placement <br />Support</Link></h2>
                </div>
                <p>Resume workshops, mock interviews, freelancing masterclasses, and corporate referral networks.</p>
                <Link href="/careers">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-clock"></i>
                  <h2><Link href="/registration">Flexible Batch <br />Schedules</Link></h2>
                </div>
                <p>Morning and evening shifts with dedicated male and female classes designed for student convenience.</p>
                <Link href="/registration">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END WHY CHOOSE US */}

      {/* START TOP COURSES */}
      <div className="best-course section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Featured Courses</h4>
            <h1>Top-Rated Diplomas &amp; Certification Programs</h1>
            <p>Industry-aligned training verified by leading technical boards with job-ready practical syllabi.</p>
          </div>
          <div className="course-list row">
            {/* Course 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c1.png" alt="English Proficiency & Spoken Mastery" />
                    <div className="course-price">3 Months</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><Link href="/departments">Language Department</Link></div>
                    <h3><Link href="/courses">English Proficiency &amp; Spoken Mastery</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>4.9 / 1,200+ Students</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        36 Sessions
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        3 Months
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><Link href="/departments">Language Department</Link></div>
                    <h3><Link href="/courses">English Proficiency &amp; Spoken Mastery</Link></h3>
                    <div className="hcourse-price">Rs. 15,000</div>
                    <p>Advanced grammar, public speaking, interview preparation, and IELTS coaching.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="Sir Arsalan" />
                        <Link href="/departments">Sir Arsalan</Link>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 4.9 (1.2k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
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
            </div>

            {/* Course 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c2.png" alt="Diploma in Information Technology (DIT)" />
                    <div className="course-price">1 Year</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><Link href="/departments">IT Department</Link></div>
                    <h3><Link href="/courses">Diploma in Information Technology (DIT)</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>5.0 / 2,400+ Students</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        12 Months
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        KP BTE Recognized
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><Link href="/departments">IT Department</Link></div>
                    <h3><Link href="/courses">Diploma in Information Technology (DIT)</Link></h3>
                    <div className="hcourse-price">Rs. 18,000</div>
                    <p>Complete computer science fundamentals, office suite, database management, and programming.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="Sir Ibrahim" />
                        <Link href="/departments">Sir Ibrahim</Link>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 5.0 (2.4k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
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
            </div>

            {/* Course 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c3.png" alt="Full-Stack Web & Software Development" />
                    <div className="course-price">6 Months</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><Link href="/departments">Software Department</Link></div>
                    <h3><Link href="/courses">Full-Stack Web &amp; Software Development</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>4.8 / 950+ Students</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        48 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        6 Months
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><Link href="/departments">Software Department</Link></div>
                    <h3><Link href="/courses">Full-Stack Web &amp; Software Development</Link></h3>
                    <div className="hcourse-price">Rs. 20,000</div>
                    <p>Modern frontend with HTML, CSS, JavaScript, React, and backend API integration.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="Engr. Muhammad Qasim" />
                        <Link href="/departments">Engr. M. Qasim</Link>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 4.8 (950)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
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
            </div>

            {/* Course 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c4.png" alt="Graphic Designing & Creative Media" />
                    <div className="course-price">4 Months</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><Link href="/departments">Media Department</Link></div>
                    <h3><Link href="/courses">Graphic Designing &amp; Creative Media</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>4.9 / 1,400+ Students</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        32 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        4 Months
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><Link href="/departments">Media Department</Link></div>
                    <h3><Link href="/courses">Graphic Designing &amp; Creative Media</Link></h3>
                    <div className="hcourse-price">Rs. 12,000</div>
                    <p>Adobe Photoshop, Illustrator, vector branding, logo design, and freelance portfolio building.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="Sir Farhan" />
                        <Link href="/departments">Sir Farhan</Link>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 4.9 (1.4k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
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
            </div>
          </div>
        </div>
      </div>
      {/* END TOP COURSES */}

      {/* START VIDEO */}
      <section className="vid_area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="video-area">
                <a href="https://www.youtube.com/watch?v=RXv_uIN6e-Y" target="_blank" rel="noreferrer" className="video-button">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="cp_content">
                <h4>Campus &amp; Practical Learning</h4>
                <h2>One Institute, Limitless Career Horizons in Bannu</h2>
                <p>From foundational IT literacy to advanced software engineering, graphic media, and English fluency, our integrated curricula prepare students for thriving domestic and international careers.</p>
                <ul>
                  <li><span className="ti-check"></span> 98% Placement &amp; Certification Success Rate</li>
                  <li><span className="ti-check"></span> 100% Practical Hands-on Studio &amp; Lab Training</li>
                  <li><span className="ti-check"></span> Experienced Instructors &amp; Recognized Diplomas</li>
                </ul>
              </div>
              <div className="cp_btn">
                <Link href="/courses" className="cta">
                  <span>Explore Our Courses</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END VIDEO */}

      {/* START TEAM */}
      <section className="team_member section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Certified Faculty</h4>
            <h1>Meet Our Expert Faculty &amp; Mentors</h1>
            <p>Dedicated instructors bringing real industry experience and academic passion to every classroom.</p>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team-content">
                  <h3 className="title">Engr. M. Qasim</h3>
                  <span className="post">Director &amp; Senior Lead</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>12 Courses</u></span>
                    <span className="ti-user"> <u>2,800+ Students</u></span>
                  </div>
                </div>
                <div className="team_img">
                  <img src="/assets/images/team/1.jpg" alt="Engr. Muhammad Qasim" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team_img">
                  <img src="/assets/images/team/2.jpg" alt="Sir Arsalan" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Sir Arsalan</h3>
                  <span className="post">English &amp; IELTS Specialist</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>8 Courses</u></span>
                    <span className="ti-user"> <u>1,800+ Students</u></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team-content">
                  <h3 className="title">Sir Ibrahim</h3>
                  <span className="post">IT &amp; Technical Instructor</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>10 Courses</u></span>
                    <span className="ti-user"> <u>1,950+ Students</u></span>
                  </div>
                </div>
                <div className="team_img">
                  <img src="/assets/images/team/3.jpg" alt="Sir Ibrahim" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team_img">
                  <img src="/assets/images/team/4.jpg" alt="Sir Farhan" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Sir Farhan</h3>
                  <span className="post">Hardware &amp; Networks</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>7 Courses</u></span>
                    <span className="ti-user"> <u>1,200+ Students</u></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TEAM */}

      {/* START TESTIMONIALS */}
      <section className="testi_home_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Student Testimonials</h4>
            <h1>What Our Graduated Students Say</h1>
            <p>Real stories from alumni who built successful careers in software development, design, and language teaching.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial shadow-sm p-4 bg-white rounded-3 h-100">
                <div className="testi_pic_title d-flex align-items-center mb-3">
                  <div className="pic me-3">
                    <img src="/assets/images/all-img/t1.png" alt="Ahmed Ali Khan" className="rounded-circle" width="60" height="60" />
                  </div>
                  <div>
                    <h4 className="mb-0">Ahmed Ali Khan</h4>
                    <small className="text-muted">Frontend Developer, TechSol</small>
                  </div>
                </div>
                <p>Al Qasim Institute Bannu helped me transition into a successful software developer role. The practical approach and expert guidance were invaluable.</p>
                <div className="text-warning mt-3">
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial shadow-sm p-4 bg-white rounded-3 h-100">
                <div className="testi_pic_title d-flex align-items-center mb-3">
                  <div className="pic me-3">
                    <img src="/assets/images/all-img/t2.png" alt="Fatima Noor" className="rounded-circle" width="60" height="60" />
                  </div>
                  <div>
                    <h4 className="mb-0">Fatima Noor</h4>
                    <small className="text-muted">Full-Stack Developer</small>
                  </div>
                </div>
                <p>The courses are well-structured and the instructors are true industry experts. I landed my dream tech job within 3 months of completing my diploma.</p>
                <div className="text-warning mt-3">
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial shadow-sm p-4 bg-white rounded-3 h-100">
                <div className="testi_pic_title d-flex align-items-center mb-3">
                  <div className="pic me-3">
                    <img src="/assets/images/all-img/t3.png" alt="Hassan Shah" className="rounded-circle" width="60" height="60" />
                  </div>
                  <div>
                    <h4 className="mb-0">Hassan Shah</h4>
                    <small className="text-muted">UI/UX Designer, Creative Studio</small>
                  </div>
                </div>
                <p>The hands-on projects, modern labs, and real-world scenarios made learning engaging and practical. Highly recommended for ambitious students.</p>
                <div className="text-warning mt-3">
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TESTIMONIALS */}

      {/* START BLOG */}
      <section id="blog" className="blog_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Campus News &amp; Insights</h4>
            <h1>Latest Announcements &amp; Academic Updates</h1>
            <p>Stay updated with semester schedules, new diploma admissions, and student achievements at Al Qasim Institute.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_blog">
                <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="New Admissions Open" />
                <div className="img_info">
                  <span>Admissions | <a href="/registration">Academic Notice</a></span>
                </div>
                <div className="content_box">
                  <h2><Link href="/registration">New DIT &amp; English Proficiency Batches Open for 2026</Link></h2>
                  <Link href="/registration" className="cta">
                    <span>Read Details</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_blog">
                <img src="/assets/images/blog/2.jpg" className="img-fluid" alt="Annual Tech Expo" />
                <div className="img_info">
                  <span>Exhibition | <a href="/gallery">Campus Events</a></span>
                </div>
                <div className="content_box">
                  <h2><Link href="/gallery">Annual Tech Expo &amp; Student Software Project Showcase</Link></h2>
                  <Link href="/gallery" className="cta">
                    <span>Read Details</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_blog">
                <img src="/assets/images/blog/3.jpg" className="img-fluid" alt="Freelance Career Guide" />
                <div className="img_info">
                  <span>Career | <a href="/courses">Guide &amp; Tips</a></span>
                </div>
                <div className="content_box">
                  <h2><Link href="/courses">Building a High-Income Tech Career from Khyber Pakhtunkhwa</Link></h2>
                  <Link href="/courses" className="cta">
                    <span>Read Details</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END BLOG */}

      {/* START INSTRUCTOR+FREE COURSE */}
      <section className="insfreecourse section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Join Our Faculty</h4>
                  <h1>Become a Certified Instructor</h1>
                  <p>Share your industry experience, inspire passionate students, and grow as a recognized academic educator.</p>
                  <Link href="/careers" className="cta">
                    <span>Apply to Teach</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img src="/assets/images/all-img/become-ins.png" className="img-fluid" alt="Become an Instructor" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Student Counseling</h4>
                  <h1>Get Free Academic Guidance</h1>
                  <p>Speak to our educational counselors for program selection, career pathways, and installment options.</p>
                  <Link href="/contact" className="cta">
                    <span>Contact Counselor</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img src="/assets/images/all-img/free-course.png" className="img-fluid" alt="Free Guidance" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END INSTRUCTOR+FREE COURSE */}

      {/* START NEWSLETTER */}
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="subs_form">
                <h3>Subscribe to our newsletter, we respect your privacy.</h3>
                <p>Stay informed about new admissions, batch schedules, workshops, and career opportunities.</p>
                <form action="#" className="home_subs" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="subscribe__input" placeholder="Enter your Email Address" />
                  <button type="submit" className="subscribe__btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END NEWSLETTER */}

      {/* FOOTER */}
      <Footer />
    </>
  );
}
