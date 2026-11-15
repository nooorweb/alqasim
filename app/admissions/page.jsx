import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import Accordion from "@/components/ui/Accordion";

const ADMISSION_STEPS = [
  {
    number: "01",
    title: "Choose Program & Submit Form",
    icon: "fa-solid fa-file-signature",
    description: "Browse our accredited IT, language, and technical diplomas. Fill out the online registration form or visit our Bannu City campus admissions desk.",
    linkText: "Start Application",
    href: "/registration",
  },
  {
    number: "02",
    title: "Document Verification & Interview",
    icon: "fa-solid fa-user-check",
    description: "Submit attested copies of your academic marksheets and CNIC/B-Form. Attend a brief orientation interview with our faculty counseling team.",
    linkText: "View Requirements",
    href: "#eligibility",
  },
  {
    number: "03",
    title: "Fee Deposit & Student Enrollment",
    icon: "fa-solid fa-id-card",
    description: "Receive your formal admission confirmation letter, deposit semester dues, and collect your official Student Registration ID card to commence classes.",
    linkText: "Fee Structure",
    href: "#fee-structure",
  },
];

const FEE_PLANS = [
  {
    name: "Diploma in IT (DIT)",
    tag: "Most Popular",
    price: "PKR 4,500",
    period: "/ month",
    duration: "1 Year (Board Certified)",
    features: [
      "Board of Technical Education Registration",
      "Hands-on Lab & Modern PC Workstations",
      "Official Course Booklets & Lab Manuals",
      "Exam Preparation & Mock Assessments",
      "Verified Final Transcript & Diploma",
    ],
    highlighted: true,
  },
  {
    name: "English Mastery & IELTS",
    tag: "Language Focus",
    price: "PKR 3,500",
    period: "/ month",
    duration: "6 Months Intensive",
    features: [
      "Certified Native-Style Fluency Coaches",
      "Audio-Visual Lab & Accent Training",
      "Grammar, Vocabulary & Public Speaking",
      "Weekly Presentation & Debate Sessions",
      "Official Academy Certification",
    ],
    highlighted: false,
  },
  {
    name: "Technical Trades (Rigger / HSE)",
    tag: "Vocational Focus",
    price: "PKR 5,000",
    period: "/ month",
    duration: "3-6 Months Industrial",
    features: [
      "Certified Workshop & Rigging Equipment",
      "Industrial Safety Standards & PPE Training",
      "Crane & Heavy Rigging Operational Protocols",
      "Job Placement Assistance in Gulf & Local Sectors",
      "Industry-Recognized Trade Certificate",
    ],
    highlighted: false,
  },
];

const FAQ_ITEMS_LEFT = [
  {
    title: "What is the minimum eligibility criteria for admission?",
    content: "For diploma programs like DIT, candidates must have passed Matriculation (Science or Arts) with at least 45% marks. Short certificate programs and language courses are open to students of all academic backgrounds with basic literacy.",
  },
  {
    title: "Are the academy's diplomas officially recognized?",
    content: "Yes, our technical and IT diplomas are aligned with the Board of Technical Education curriculum. Furthermore, every graduate receives an official verifiable credential accessible through our Online Verification Portal.",
  },
  {
    title: "What documents are required at the time of admission?",
    content: "You need 2 passport-sized photographs, 1 copy of CNIC or B-Form, 1 copy of Father's/Guardian's CNIC, and attested copies of your Matric/Intermediate marksheets or certificates.",
  },
];

const FAQ_ITEMS_RIGHT = [
  {
    title: "Are installments or merit scholarships available?",
    content: "Yes. Tuition fees can be paid in flexible monthly installments. Deserving students and position holders can also apply for merit-based and need-based fee concessions upon interview with the Academic Board.",
  },
  {
    title: "What class schedules and shift options are offered?",
    content: "We provide morning (9:00 AM - 1:00 PM), afternoon (2:00 PM - 5:00 PM), and evening shifts (5:00 PM - 8:00 PM) to accommodate both full-time students and working professionals.",
  },
  {
    title: "Can I transfer or switch programs after starting?",
    content: "Students may request a program change within the first 14 days of class commencement by submitting a written application to the Admissions Directorate.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Admissions & Enrollment"
          breadcrumb={[{ label: "Admissions" }]}
        />

        {/* 1. HOW TO APPLY (3 Step Cards with .ab_feature) */}
        <section className="section-padding bg-white">
          <div className="container">
            <SectionTitle
              subtitle="Admission Process"
              title="How to Apply in 3 Simple"
              highlight="Steps"
              description="Our transparent admission procedure ensures a straightforward journey from application submission to your first day on campus."
            />

            <div className="row g-4 mt-2">
              {ADMISSION_STEPS.map((step, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-12">
                  <FeatureCard
                    number={step.number}
                    title={step.title}
                    icon={step.icon}
                    description={step.description}
                    linkText={step.linkText}
                    href={step.href}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. FEE STRUCTURE (Repurposed from pricing.html) */}
        <section id="fee-structure" className="pricing_area section-padding" style={{ backgroundColor: "#f8faff" }}>
          <div className="container">
            <SectionTitle
              subtitle="Transparent Tuition"
              title="Affordable Semester & Diploma"
              highlight="Fee Plans"
              description="High-standard educational infrastructure with transparent, affordable fee plans and no hidden surcharges."
            />

            <div className="row g-4 mt-2 justify-content-center">
              {FEE_PLANS.map((plan, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-12">
                  <div
                    className={`p-4 p-xl-5 rounded-4 bg-white border h-100 d-flex flex-column justify-content-between position-relative ${
                      plan.highlighted ? "border-primary" : ""
                    }`}
                    style={{
                      borderColor: plan.highlighted ? "#2c7aff" : "#eef2f6",
                      boxShadow: plan.highlighted
                        ? "0 15px 40px -10px rgba(44, 122, 255, 0.2)"
                        : "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                      transform: plan.highlighted ? "scale(1.02)" : "none",
                    }}
                  >
                    {plan.highlighted && (
                      <span
                        className="badge position-absolute top-0 end-0 mt-3 me-3 px-3 py-2 rounded-pill fw-semibold"
                        style={{ backgroundColor: "#2c7aff", color: "#ffffff" }}
                      >
                        {plan.tag}
                      </span>
                    )}

                    <div>
                      <h3 className="fs-5 fw-bold text-dark mb-1">{plan.name}</h3>
                      <span className="text-muted small d-block mb-3">{plan.duration}</span>

                      <div className="d-flex align-items-baseline mb-4">
                        <span className="fs-2 fw-bold text-primary">{plan.price}</span>
                        <span className="text-muted ms-2 small">{plan.period}</span>
                      </div>

                      <ul className="list-unstyled mb-4 small">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="d-flex align-items-center gap-2 mb-2">
                            <i className="fa-solid fa-circle-check text-success"></i>
                            <span className="text-secondary">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link
                        href="/registration"
                        className={`btn d-block w-100 py-2 rounded-pill fw-semibold ${
                          plan.highlighted ? "btn-primary" : "btn-outline-primary"
                        }`}
                        style={{
                          backgroundColor: plan.highlighted ? "#2c7aff" : "transparent",
                          borderColor: "#2c7aff",
                        }}
                      >
                        Apply for this Program
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ELIGIBILITY & FAQS (Reuse .faq_area 2-column accordion) */}
        <section id="eligibility" className="faq_area section-padding bg-white">
          <div className="container">
            <SectionTitle
              subtitle="Admission Policies"
              title="Eligibility Criteria & Frequent"
              highlight="Questions"
              description="Find answers to all frequently asked questions regarding admission deadlines, required credentials, and campus guidelines."
            />

            <div className="row g-4 mt-2">
              <div className="col-lg-6 col-12">
                <Accordion items={FAQ_ITEMS_LEFT} defaultOpenIndex={0} />
              </div>
              <div className="col-lg-6 col-12">
                <Accordion items={FAQ_ITEMS_RIGHT} defaultOpenIndex={-1} />
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BANNER (.insfreecourse2 promo banner style) */}
        <section className="insfreecourse2 section-padding" style={{ backgroundColor: "#ebecff" }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-8 col-md-8 col-12 mb-4 mb-md-0">
                <span className="badge bg-primary text-white rounded-pill px-3 py-2 mb-2">
                  Academic Session 2026-2027
                </span>
                <h2 className="fs-2 fw-bold text-dark mb-2">
                  Download Official Academy Prospectus &amp; Syllabus
                </h2>
                <p className="text-muted mb-0">
                  Access comprehensive information on diploma curriculums, faculty profiles, lab facilities, and admission dates.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12 text-md-end">
                <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                  <a
                    href="#fee-structure"
                    className="btn_one rounded-pill px-4 py-3 text-decoration-none"
                  >
                    <i className="fa-solid fa-file-arrow-down me-1"></i> Get Prospectus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
