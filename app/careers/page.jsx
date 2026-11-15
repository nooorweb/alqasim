"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";

const OPENINGS = [
  {
    id: "cs-lecturer",
    title: "Senior Lecturer - Information Technology & Software",
    department: "Computer Sciences",
    type: "Full-Time",
    experience: "3+ Years Teaching / Industry",
    education: "MS / BS in Computer Science or Software Engineering",
    deadline: "30 December 2026",
    location: "Main Campus, Bannu City",
    requirements: [
      "Proficiency in Full-Stack Web Technologies (React, Node.js, Python)",
      "Prior experience conducting hands-on programming labs",
      "Excellent communication and student mentoring capabilities",
    ],
  },
  {
    id: "english-trainer",
    title: "Master IELTS & English Language Instructor",
    department: "Linguistics & Languages",
    type: "Full-Time",
    experience: "2+ Years IELTS Coaching",
    education: "MA English / Applied Linguistics / CELTA / TESOL",
    deadline: "25 December 2026",
    location: "Main Campus, Bannu City",
    requirements: [
      "Demonstrated IELTS Academic Band 8.0+ or native fluency equivalent",
      "Interactive pedagogy for grammar, public speaking, and writing mastery",
      "Ability to mentor mixed-ability students towards exam success",
    ],
  },
  {
    id: "rigging-instructor",
    title: "Lead Industrial Rigging & Safety Trainer",
    department: "Vocational Trades",
    type: "Full-Time / Contract",
    experience: "5+ Years Industrial Rigging",
    education: "Certified Rigger Level 3 / NEBOSH / IOSH Certification",
    deadline: "15 January 2027",
    location: "Technical Workshop Campus, Bannu",
    requirements: [
      "Extensive field rigging, sling load calculations, and crane safety expertise",
      "Knowledge of OSHA/international lifting and occupational safety standards",
      "Fluency in bilingual technical instruction (Urdu / Pashto / English)",
    ],
  },
  {
    id: "graphic-designer",
    title: "Instructor - Graphic Design & Digital Media",
    department: "Creative Arts",
    type: "Full-Time",
    experience: "2+ Years Studio Design",
    education: "Bachelor of Fine Arts / Multimedia or Equivalent Portfolio",
    deadline: "20 December 2026",
    location: "Main Campus, Bannu City",
    requirements: [
      "Mastery of Adobe Creative Suite (Photoshop, Illustrator, InDesign) and Figma",
      "Proven commercial portfolio across branding, typography, and UI design",
      "Passionate about teaching practical project-based design assignments",
    ],
  },
  {
    id: "lab-administrator",
    title: "Systems & Computer Lab Network Administrator",
    department: "IT Infrastructure",
    type: "Full-Time",
    experience: "2+ Years System Admin",
    education: "BS IT / Telecommunications / CCNA Certified",
    deadline: "05 January 2027",
    location: "Main Campus, Bannu City",
    requirements: [
      "Management of LAN/WAN networks, server routing, and lab PC maintenance",
      "Troubleshooting Windows/Linux workstations and virtualization setups",
      "Active maintenance of campus student management servers and firewalls",
    ],
  },
  {
    id: "admission-officer",
    title: "Student Admissions & Public Relations Counselor",
    department: "Administration",
    type: "Full-Time",
    experience: "1+ Years Educational Counseling",
    education: "Bachelor's Degree in Business Administration, Media, or Humanities",
    deadline: "10 January 2027",
    location: "Admissions Center, Bannu City",
    requirements: [
      "Warm interpersonal skills to guide prospective students and parents",
      "Accurate management of enrollment paperwork, records, and queries",
      "Proficiency in Microsoft Office and academic database systems",
    ],
  },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const departments = [
    { key: "all", label: "All Departments" },
    { key: "Computer Sciences", label: "Computer Science" },
    { key: "Linguistics & Languages", label: "English & Languages" },
    { key: "Vocational Trades", label: "Vocational Trades" },
    { key: "Creative Arts", label: "Design & Arts" },
    { key: "Administration", label: "Administration" },
  ];

  const filteredJobs =
    activeDept === "all"
      ? OPENINGS
      : OPENINGS.filter((job) => job.department === activeDept);

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Career Opportunities"
          breadcrumb={[{ label: "Careers" }]}
        />

        <section className="section-padding bg-white">
          <div className="container">
            <SectionTitle
              subtitle="Join Our Faculty"
              title="Shape Future Generations at"
              highlight="Al Qasim Institute"
              description="We welcome passionate educators, certified trade trainers, and administrative professionals dedicated to transforming academic excellence."
            />

            {/* FILTER BUTTONS */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {departments.map((dept) => {
                const isActive = activeDept === dept.key;
                return (
                  <button
                    key={dept.key}
                    type="button"
                    onClick={() => setActiveDept(dept.key)}
                    className="border-0 px-4 py-2 rounded-pill fw-semibold"
                    style={{
                      backgroundColor: isActive ? "#2c7aff" : "#f8faff",
                      color: isActive ? "#ffffff" : "#1a2d62",
                      border: isActive ? "none" : "1px solid #eef2f6",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {dept.label}
                  </button>
                );
              })}
            </div>

            {/* HORIZONTAL CARDS (Reusing .event-slide structure) */}
            <div className="row g-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="col-12">
                  <div
                    className="p-4 p-md-4 rounded-4 bg-white border d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4"
                    style={{
                      borderColor: "#eef2f6",
                      boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    {/* LEFT BADGE: DEPARTMENT & JOB TYPE PILL (Replacing Event Date) */}
                    <div
                      className="text-center p-3 rounded-4 d-flex flex-column justify-content-center align-items-center flex-shrink-0"
                      style={{
                        backgroundColor: "#f8faff",
                        border: "1px solid #e2e8f0",
                        minWidth: "150px",
                      }}
                    >
                      <span
                        className="badge px-3 py-1 rounded-pill mb-2 fw-semibold"
                        style={{ backgroundColor: "#2c7aff", color: "#ffffff", fontSize: "12px" }}
                      >
                        {job.type}
                      </span>
                      <span className="fw-bold text-dark small d-block">{job.department}</span>
                      <span className="text-muted" style={{ fontSize: "11px" }}>
                        <i className="fa-solid fa-location-dot me-1"></i> Bannu Campus
                      </span>
                    </div>

                    {/* CENTER: TITLE & KEY REQUIREMENTS */}
                    <div className="flex-grow-1">
                      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        <h3 className="fs-5 fw-bold text-dark mb-0">{job.title}</h3>
                        <span className="badge bg-light text-muted border" style={{ fontSize: "11px" }}>
                          Exp: {job.experience}
                        </span>
                      </div>

                      <div className="mb-2 text-muted small">
                        <strong>Qualification:</strong> {job.education} &bull;{" "}
                        <strong>Apply Before:</strong> {job.deadline}
                      </div>

                      <ul className="list-unstyled mb-0 small">
                        {job.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="d-flex align-items-start gap-2 mb-1 text-secondary">
                            <i className="fa-solid fa-check text-success mt-1" style={{ fontSize: "11px" }}></i>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT: APPLY NOW BUTTON (.btn_two) */}
                    <div className="flex-shrink-0 text-lg-end">
                      <button
                        type="button"
                        className="btn_two rounded-pill px-4 py-2 border-0 fw-semibold"
                        onClick={() => {
                          setSelectedJob(job);
                          setApplied(false);
                        }}
                      >
                        Apply Now <i className="fa-solid fa-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION MODAL */}
        {selectedJob && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 9999 }}
            onClick={() => setSelectedJob(null)}
          >
            <div
              className="bg-white rounded-4 p-4 p-md-5 shadow-lg position-relative"
              style={{ maxWidth: "600px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                aria-label="Close"
                onClick={() => setSelectedJob(null)}
              ></button>

              {applied ? (
                <div className="text-center py-4">
                  <i className="fa-solid fa-circle-check text-success fs-1 mb-3"></i>
                  <h4 className="fw-bold text-dark mb-2">Application Received!</h4>
                  <p className="text-muted small mb-4">
                    Thank you for applying for the position of{" "}
                    <strong className="text-dark">{selectedJob.title}</strong>. Our HR Directorate will review your credentials and contact shortlisted applicants.
                  </p>
                  <button
                    type="button"
                    className="btn_one rounded-pill px-4"
                    onClick={() => setSelectedJob(null)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <span className="badge bg-light text-primary border rounded-pill px-3 py-1 mb-2">
                    {selectedJob.department} &bull; {selectedJob.type}
                  </span>
                  <h3 className="fs-5 fw-bold text-dark mb-1">{selectedJob.title}</h3>
                  <p className="text-muted small mb-4">
                    Submit your resume directly to our HR team or complete the quick form below.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setApplied(true);
                    }}
                  >
                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. Asad Ullah Khan"
                        style={{ height: "46px", borderRadius: "6px" }}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="e.g. yourname@mail.com"
                        style={{ height: "46px", borderRadius: "6px" }}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="e.g. 0300-1234567"
                        style={{ height: "46px", borderRadius: "6px" }}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Upload CV / Resume (PDF / DOCX) *</label>
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="form-control"
                        style={{ borderRadius: "6px" }}
                      />
                    </div>

                    <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                      <button
                        type="button"
                        className="btn btn-outline-secondary rounded-pill px-4"
                        onClick={() => setSelectedJob(null)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn_one rounded-pill px-4 border-0">
                        Submit Resume
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
