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
          title="About Purdue Academy"
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
                    alt="About Purdue Academy"
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
                    title="Purdue Academy of Science &"
                    highlight="Technology"
                    center={false}
                  />
                  <p className="text-muted mt-3 mb-4" style={{ lineHeight: "1.8" }}>
                    Founded with a visionary commitment to modernize educational opportunities in Bannu City and Khyber Pakhtunkhwa, Purdue Academy delivers recognized professional diplomas, computer science degrees, language proficiency coaching, and vocational industrial training.
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
                    <Link href="/admissions" className="btn_one rounded-pill px-4 text-decoration-none">
                      Explore Admissions <i className="fa-solid fa-arrow-right ms-1"></i>
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

        {/* CORE VALUES / WHY CHOOSE US */}
        <section className="section-padding" style={{ backgroundColor: "#f8faff" }}>
          <div className="container">
            <SectionTitle
              subtitle="Our Institutional Pillars"
              title="Why Choose Purdue"
              highlight="Academy?"
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
