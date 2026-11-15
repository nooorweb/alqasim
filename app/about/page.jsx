import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="About Al Qasim Institute"
          breadcrumb={[{ label: "About Us" }]}
        />

        {/* ABOUT INTRODUCTION (.ab_one style) */}
        <section className="ab_one section-padding bg-white">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 col-12">
                <div className="position-relative">
                  <img
                    src="/assets/images/all-img/about-image.webp"
                    alt="About Al Qasim Institute Bannu"
                    className="w-100 rounded-4 shadow-sm"
                  />
                  <div
                    className="position-absolute bottom-0 start-0 m-4 p-4 rounded-4 text-white shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #2c7aff 0%, #1a2d62 100%)",
                      maxWidth: "240px",
                    }}
                  >
                    <span className="fs-1 fw-bold d-block">10+</span>
                    <span className="small">Years of Empowering Academic &amp; Technical Excellence</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="ab_one_content">
                  <SectionTitle
                    subtitle="Empowering Ambitions"
                    title="Al Qasim Institute of Science &"
                    highlight="Technology"
                    center={false}
                  />
                  <p className="text-muted mt-3 mb-4" style={{ lineHeight: "1.8" }}>
                    Founded with a visionary commitment to modernize educational opportunities in Bannu City and Khyber Pakhtunkhwa, Al Qasim Institute delivers recognized professional diplomas, computer science degrees, language proficiency coaching, and vocational industrial training.
                  </p>

                  <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-3 border">
                        <i className="fa-solid fa-chalkboard-user text-primary fs-4 mb-2"></i>
                        <h4 className="fs-6 fw-bold text-dark mb-1">Expert Faculty</h4>
                        <p className="text-muted small mb-0">Certified instructors with practical industry experience.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-3 border">
                        <i className="fa-solid fa-certificate text-success fs-4 mb-2"></i>
                        <h4 className="fs-6 fw-bold text-dark mb-1">Board Certification</h4>
                        <p className="text-muted small mb-0">Official diplomas recognized across domestic and international sectors.</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <Link href="/registration" className="btn_one rounded-pill px-4 text-decoration-none">
                      Apply Online <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                    <Link href="/contact" className="btn btn-outline-secondary rounded-pill px-4">
                      Visit Campus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR FOUNDATION: VISION, MISSION, VALUES */}
        <section className="section-padding bg-white border-top">
          <div className="container">
            <SectionTitle
              subtitle="Guiding Principles"
              title="Our Foundation &"
              highlight="Commitment"
              description="Guided by strong institutional values that shape everything we do at Al Qasim Institute Bannu."
            />

            <div className="row g-4 mt-2">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="p-4 rounded-4 bg-light border-top border-4 border-primary h-100 shadow-sm">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-flex align-items-center justify-content-center" style={{ width: "52px", height: "52px" }}>
                      <i className="fa-solid fa-eye text-primary fs-4"></i>
                    </div>
                    <h3 className="fs-5 fw-bold text-dark mb-0">Our Vision</h3>
                  </div>
                  <p className="text-muted leading-relaxed mb-0" style={{ lineHeight: "1.7" }}>
                    To be a leading center of excellence that empowers learners with practical skills, strong knowledge, and professional confidence to thrive in a global environment and lead positive community impact.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="p-4 rounded-4 bg-light border-top border-4 border-success h-100 shadow-sm">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="rounded-circle bg-success bg-opacity-10 p-3 d-flex align-items-center justify-content-center" style={{ width: "52px", height: "52px" }}>
                      <i className="fa-solid fa-bullseye text-success fs-4"></i>
                    </div>
                    <h3 className="fs-5 fw-bold text-dark mb-0">Our Mission</h3>
                  </div>
                  <p className="text-muted leading-relaxed mb-0" style={{ lineHeight: "1.7" }}>
                    To provide accessible, high-quality education in English communication, computer technologies, and industrial trades through innovative teaching, real project work, and recognized accreditations.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="p-4 rounded-4 bg-light border-top border-4 border-warning h-100 shadow-sm">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="rounded-circle bg-warning bg-opacity-10 p-3 d-flex align-items-center justify-content-center" style={{ width: "52px", height: "52px" }}>
                      <i className="fa-solid fa-heart text-warning fs-4"></i>
                    </div>
                    <h3 className="fs-5 fw-bold text-dark mb-0">Core Values</h3>
                  </div>
                  <ul className="list-unstyled text-muted mb-0 space-y-2">
                    <li className="mb-2"><i className="fa-solid fa-check-circle text-warning me-2"></i><strong>Excellence:</strong> Highest instructional standards.</li>
                    <li className="mb-2"><i className="fa-solid fa-check-circle text-warning me-2"></i><strong>Integrity:</strong> Honest and ethical practices.</li>
                    <li className="mb-2"><i className="fa-solid fa-check-circle text-warning me-2"></i><strong>Innovation:</strong> Modern pedagogy and tools.</li>
                    <li><i className="fa-solid fa-check-circle text-warning me-2"></i><strong>Opportunity:</strong> Equal access for all learners.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES / WHY CHOOSE US */}
        <section className="section-padding" style={{ backgroundColor: "#f8faff" }}>
          <div className="container">
            <SectionTitle
              subtitle="Our Institutional Pillars"
              title="Why Choose Al Qasim"
              highlight="Institute?"
              description="Our student-centric methodology bridges academic knowledge and practical workplace readiness."
            />

            <div className="row g-4 mt-2">
              <div className="col-lg-4 col-md-6 col-12">
                <FeatureCard
                  number="01"
                  title="Modern Computing Labs"
                  icon="fa-solid fa-desktop"
                  description="High-speed internet workstations configured for real software development, graphics rendering, and networking topologies."
                  linkText="View Labs"
                  href="/gallery"
                />
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <FeatureCard
                  number="02"
                  title="Official Credential Registry"
                  icon="fa-solid fa-shield-halved"
                  description="Instant verifiable digital transcripts and QR-authenticated diploma records for employers and foreign evaluation bodies."
                  linkText="Verify Portal"
                  href="/verify"
                />
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <FeatureCard
                  number="03"
                  title="Career Empowerment"
                  icon="fa-solid fa-briefcase"
                  description="Dedicated alumni mentorship, interview preparation sessions, and internship linkages in Pakistan and the Gulf region."
                  linkText="Explore Careers"
                  href="/careers"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
