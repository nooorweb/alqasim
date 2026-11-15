import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";

const DEPARTMENTS = [
  {
    id: "it-cs",
    title: "Information Technology & CS",
    badge: "6 Diplomas",
    icon: "fa-solid fa-laptop-code",
    color: "#2c7aff",
    bgAlpha: "rgba(44, 122, 255, 0.1)",
    programs: [
      "1-Year Diploma in Information Technology (DIT)",
      "Certificate in Computer Applications (CCA)",
      "Database Administration & SQL Systems",
    ],
    hod: {
      name: "Engr. Tariq Niazi",
      role: "Head of IT Department",
      avatar: "/assets/images/all-img/avator.png",
    },
    description: "Industry-recognized technical computing curriculums designed to cultivate practical software and hardware proficiency.",
  },
  {
    id: "languages",
    title: "English & Foreign Languages",
    badge: "4 Programs",
    icon: "fa-solid fa-language",
    color: "#198754",
    bgAlpha: "rgba(25, 135, 84, 0.1)",
    programs: [
      "Comprehensive English Spoken & Fluency Mastery",
      "IELTS & PTE Academic Preparation",
      "Business English & Professional Presentation",
    ],
    hod: {
      name: "Prof. Asadullah Khan",
      role: "Head of Linguistics",
      avatar: "/assets/images/all-img/avator.png",
    },
    description: "Master global communication, speech clarity, and international testing benchmarks with accredited language coaches.",
  },
  {
    id: "web-software",
    title: "Software & Web Engineering",
    badge: "5 Diplomas",
    icon: "fa-solid fa-code",
    color: "#e11d48",
    bgAlpha: "rgba(225, 29, 72, 0.1)",
    programs: [
      "Full-Stack Web Development (MERN / Next.js)",
      "Python Programming & Automation Essentials",
      "API Architecture & Cloud Deployment Basics",
    ],
    hod: {
      name: "Engr. Farooq Ahmad",
      role: "Lead Software Instructor",
      avatar: "/assets/images/all-img/avator.png",
    },
    description: "Transform ideas into production software with modern frontend frameworks, backend engines, and database systems.",
  },
  {
    id: "design-multimedia",
    title: "Design & Digital Multimedia",
    badge: "3 Programs",
    icon: "fa-solid fa-bezier-curve",
    color: "#f59e0b",
    bgAlpha: "rgba(245, 158, 11, 0.1)",
    programs: [
      "Graphic Design (Photoshop, Illustrator, InDesign)",
      "UI/UX Interface & Interaction Design (Figma)",
      "Video Editing & Motion Graphics (Premiere & AE)",
    ],
    hod: {
      name: "Madam Sadia Rehman",
      role: "Head of Creative Arts",
      avatar: "/assets/images/all-img/avator.png",
    },
    description: "Hands-on studio design workflows teaching brand identity, visual communication, and creative client pitch delivery.",
  },
  {
    id: "technical-vocational",
    title: "Technical & Vocational Trades",
    badge: "4 Certificates",
    icon: "fa-solid fa-screwdriver-wrench",
    color: "#8b5cf6",
    bgAlpha: "rgba(139, 92, 246, 0.1)",
    programs: [
      "Professional Certified Rigger Training",
      "Occupational Health & Industrial Safety (OSHA)",
      "Basic Electrical & Instrumentation Trades",
    ],
    hod: {
      name: "Ustad Noor Zaman",
      role: "Technical Workshop Director",
      avatar: "/assets/images/all-img/avator.png",
    },
    description: "Certified industrial vocational training delivering real job-site safety, rigging standards, and technical mechanical execution.",
  },
  {
    id: "office-automation",
    title: "Office & Business Automation",
    badge: "3 Certificates",
    icon: "fa-solid fa-chart-pie",
    color: "#06b6d4",
    bgAlpha: "rgba(6, 182, 212, 0.1)",
    programs: [
      "Advanced Microsoft Office (Excel, Word, PowerPoint)",
      "Computerized Accounting & QuickBooks",
      "Executive Office Secretarial Procedures",
    ],
    hod: {
      name: "Mr. Imran Niazi",
      role: "Head of Office Automation",
      avatar: "/assets/images/all-img/avator.png",
    },
    description: "Master productivity software, advanced spreadsheet analysis, financial bookkeeping, and executive clerical workflows.",
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Academic Departments"
          breadcrumb={[{ label: "Departments" }]}
        />

        {/* DEPARTMENTS GRID SECTION (.category_two_area style) */}
        <section className="category_two_area section-padding">
          <div className="container">
            <SectionTitle
              subtitle="Specialized Faculties"
              title="Explore Our Academic"
              highlight="Departments"
              description="Explore career-aligned educational disciplines taught by certified instructors with modern hands-on computing labs and industrial workshops."
            />

            <div className="row g-4 mt-2">
              {DEPARTMENTS.map((dept) => (
                <div key={dept.id} className="col-lg-4 col-md-6 col-12">
                  <div
                    className="p-4 rounded-4 bg-white border h-100 d-flex flex-column justify-content-between position-relative"
                    style={{
                      borderColor: "#eef2f6",
                      boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div>
                      {/* TOP ROW: ICON CIRCLE & PROGRAM BADGE */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: dept.bgAlpha,
                            color: dept.color,
                            fontSize: "24px",
                          }}
                        >
                          <i className={dept.icon}></i>
                        </div>
                        <span
                          className="badge rounded-pill px-3 py-2 fw-semibold"
                          style={{
                            backgroundColor: "#f8faff",
                            color: "#1a2d62",
                            border: "1px solid #e2e8f0",
                            fontSize: "12px",
                          }}
                        >
                          {dept.badge}
                        </span>
                      </div>

                      {/* TITLE & DESCRIPTION */}
                      <h3 className="fs-5 fw-bold text-dark mb-2">{dept.title}</h3>
                      <p className="small text-muted mb-3">{dept.description}</p>

                      {/* 3 BULLET POINTS */}
                      <div className="bg-light p-3 rounded-3 mb-4 border border-light">
                        <span className="d-block fw-semibold text-dark small mb-2">Key Qualifications:</span>
                        <ul className="list-unstyled mb-0 small">
                          {dept.programs.map((prog, idx) => (
                            <li key={idx} className="d-flex align-items-start gap-2 mb-2">
                              <i className="fa-solid fa-circle-check text-primary mt-1" style={{ fontSize: "12px" }}></i>
                              <span className="text-secondary">{prog}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* FOOTER ROW: HOD AVATAR & CTA LINK */}
                    <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={dept.hod.avatar}
                          alt={dept.hod.name}
                          className="rounded-circle border"
                          style={{ width: "36px", height: "36px", objectFit: "cover" }}
                        />
                        <div>
                          <span className="d-block text-dark fw-bold" style={{ fontSize: "12px" }}>
                            {dept.hod.name}
                          </span>
                          <span className="text-muted d-block" style={{ fontSize: "11px" }}>
                            {dept.hod.role}
                          </span>
                        </div>
                      </div>

                      <Link href={`/registration?dept=${dept.id}`} className="cta">
                        <span>Apply</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
