"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: "",
    fatherName: "",
    cnic: "",
    dob: "",
    gender: "male",
    phone: "",
    email: "",
    address: "",
    city: "Bannu City",

    // Step 2: Academic History
    lastQualification: "Matriculation",
    boardUniversity: "BISE Bannu",
    passingYear: "2025",
    totalMarks: "1100",
    obtainedMarks: "",
    percentage: "",

    // Step 3: Program & Documents
    selectedDepartment: "it-cs",
    selectedProgram: "Diploma in Information Technology (DIT)",
    shiftPreference: "Morning (9:00 AM - 1:00 PM)",
    uploadedFileName: "",
    notes: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, uploadedFileName: file.name }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Online Registration"
          breadcrumb={[{ label: "Registration" }]}
        />

        <section className="login_register section-padding">
          <div className="container">
            <div className="row justify-content-center">
              {/* WIDENED 850px CONTAINER (col-lg-9 mx-auto) */}
              <div className="col-lg-9 col-12 mx-auto">
                <div
                  className="bg-white p-4 p-md-5 rounded-4 shadow-sm border"
                  style={{
                    borderColor: "#eef2f6",
                    boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                  }}
                >
                  {submitted ? (
                    /* SUBMISSION SUCCESS CONFIRMATION */
                    <div className="text-center py-5">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#d1e7dd",
                          color: "#198754",
                          fontSize: "36px",
                        }}
                      >
                        <i className="fa-solid fa-circle-check"></i>
                      </div>
                      <h2 className="fs-3 fw-bold text-dark mb-2">Application Submitted Successfully!</h2>
                      <p className="text-muted col-md-8 mx-auto mb-4">
                        Thank you, <strong className="text-dark">{formData.fullName || "Applicant"}</strong>. Your admission request for{" "}
                        <strong className="text-primary">{formData.selectedProgram}</strong> has been registered.
                      </p>

                      <div
                        className="p-4 rounded-3 border col-md-8 mx-auto text-start mb-4"
                        style={{ backgroundColor: "#f8faff" }}
                      >
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Application Token:</span>
                          <span className="fw-bold text-dark">PGA-APP-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Applicant Name:</span>
                          <span className="text-dark fw-medium">{formData.fullName}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Program:</span>
                          <span className="text-dark fw-medium">{formData.selectedProgram}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted small">Shift:</span>
                          <span className="text-dark fw-medium">{formData.shiftPreference}</span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center gap-3">
                        <Link href="/" className="btn btn-outline-primary rounded-pill px-4">
                          Return to Home
                        </Link>
                        <Link href="/verify" className="btn_one rounded-pill px-4 text-decoration-none">
                          Verify Credential
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* HEADER */}
                      <div className="text-center mb-4">
                        <span
                          className="badge px-3 py-2 rounded-pill mb-2 fw-medium"
                          style={{ backgroundColor: "rgba(44, 122, 255, 0.1)", color: "#2c7aff" }}
                        >
                          Admission Portal 2026-2027
                        </span>
                        <h2 className="fs-3 fw-bold text-dark mb-2">Student Admission Application</h2>
                        <p className="text-muted small">
                          Complete the three sections below to reserve your admission seat.
                        </p>
                      </div>

                      {/* 3-STEP PILL PROGRESS BAR */}
                      <div className="d-flex align-items-center justify-content-between position-relative mb-5 px-md-4">
                        {/* Progress Line */}
                        <div
                          className="position-absolute w-100"
                          style={{
                            height: "4px",
                            backgroundColor: "#eef2f6",
                            top: "22px",
                            left: 0,
                            zIndex: 1,
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: step === 1 ? "20%" : step === 2 ? "60%" : "100%",
                              backgroundColor: "#2c7aff",
                              transition: "width 0.4s ease",
                            }}
                          ></div>
                        </div>

                        {/* Step 1 */}
                        <div className="position-relative text-center" style={{ zIndex: 2 }}>
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="border-0 rounded-circle fw-bold d-inline-flex align-items-center justify-content-center shadow-sm"
                            style={{
                              width: "44px",
                              height: "44px",
                              backgroundColor: step >= 1 ? "#2c7aff" : "#ffffff",
                              color: step >= 1 ? "#ffffff" : "#777777",
                              border: step >= 1 ? "none" : "2px solid #eef2f6",
                            }}
                          >
                            1
                          </button>
                          <span
                            className="d-block mt-2 small fw-semibold"
                            style={{ color: step >= 1 ? "#2c7aff" : "#777777", fontSize: "12px" }}
                          >
                            Personal Info
                          </span>
                        </div>

                        {/* Step 2 */}
                        <div className="position-relative text-center" style={{ zIndex: 2 }}>
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="border-0 rounded-circle fw-bold d-inline-flex align-items-center justify-content-center shadow-sm"
                            style={{
                              width: "44px",
                              height: "44px",
                              backgroundColor: step >= 2 ? "#2c7aff" : "#ffffff",
                              color: step >= 2 ? "#ffffff" : "#777777",
                              border: step >= 2 ? "none" : "2px solid #eef2f6",
                            }}
                          >
                            2
                          </button>
                          <span
                            className="d-block mt-2 small fw-semibold"
                            style={{ color: step >= 2 ? "#2c7aff" : "#777777", fontSize: "12px" }}
                          >
                            Academic History
                          </span>
                        </div>

                        {/* Step 3 */}
                        <div className="position-relative text-center" style={{ zIndex: 2 }}>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="border-0 rounded-circle fw-bold d-inline-flex align-items-center justify-content-center shadow-sm"
                            style={{
                              width: "44px",
                              height: "44px",
                              backgroundColor: step === 3 ? "#2c7aff" : "#ffffff",
                              color: step === 3 ? "#ffffff" : "#777777",
                              border: step === 3 ? "none" : "2px solid #eef2f6",
                            }}
                          >
                            3
                          </button>
                          <span
                            className="d-block mt-2 small fw-semibold"
                            style={{ color: step === 3 ? "#2c7aff" : "#777777", fontSize: "12px" }}
                          >
                            Course &amp; Documents
                          </span>
                        </div>
                      </div>

                      {/* STEP FORMS */}
                      <form onSubmit={step === 3 ? handleSubmit : handleNext}>
                        {/* STEP 1: PERSONAL INFORMATION */}
                        {step === 1 && (
                          <div className="row g-3">
                            <div className="col-12 border-bottom pb-2 mb-3">
                              <h4 className="fs-6 fw-bold text-dark mb-0">Step 1: Student Personal Details</h4>
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Full Name *</label>
                              <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                required
                                placeholder="e.g. Muhammad Usman"
                                value={formData.fullName}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Father's Name *</label>
                              <input
                                type="text"
                                className="form-control"
                                name="fatherName"
                                required
                                placeholder="e.g. Tariq Mahmood"
                                value={formData.fatherName}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">CNIC or B-Form Number *</label>
                              <input
                                type="text"
                                className="form-control"
                                name="cnic"
                                required
                                placeholder="e.g. 11101-1234567-1"
                                value={formData.cnic}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Date of Birth *</label>
                              <input
                                type="date"
                                className="form-control"
                                name="dob"
                                required
                                value={formData.dob}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Contact Phone / WhatsApp *</label>
                              <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                required
                                placeholder="e.g. 0300-1234567"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Email Address</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="e.g. student@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-12">
                              <label className="form-label fw-semibold text-dark small">Residential Address *</label>
                              <textarea
                                className="form-control"
                                name="address"
                                rows="2"
                                required
                                placeholder="e.g. Mohallah Hinjal Gate Bannu City"
                                value={formData.address}
                                onChange={handleChange}
                                style={{ borderRadius: "6px" }}
                              ></textarea>
                            </div>
                          </div>
                        )}

                        {/* STEP 2: ACADEMIC HISTORY */}
                        {step === 2 && (
                          <div className="row g-3">
                            <div className="col-12 border-bottom pb-2 mb-3">
                              <h4 className="fs-6 fw-bold text-dark mb-0">Step 2: Previous Academic Qualifications</h4>
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Last Qualification Completed *</label>
                              <select
                                className="form-select"
                                name="lastQualification"
                                value={formData.lastQualification}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              >
                                <option value="Matriculation">Matriculation (SSC)</option>
                                <option value="Intermediate">Intermediate (FSc / FA / ICS)</option>
                                <option value="Bachelors">Bachelor's Degree (BA / BSc / BS)</option>
                                <option value="Other">Other Certificate / Diploma</option>
                              </select>
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Board or University *</label>
                              <input
                                type="text"
                                className="form-control"
                                name="boardUniversity"
                                required
                                placeholder="e.g. BISE Bannu, BISE Peshawar"
                                value={formData.boardUniversity}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-4">
                              <label className="form-label fw-semibold text-dark small">Passing Year *</label>
                              <input
                                type="number"
                                className="form-control"
                                name="passingYear"
                                required
                                placeholder="e.g. 2024"
                                value={formData.passingYear}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-4">
                              <label className="form-label fw-semibold text-dark small">Total Marks *</label>
                              <input
                                type="number"
                                className="form-control"
                                name="totalMarks"
                                required
                                placeholder="e.g. 1100"
                                value={formData.totalMarks}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>

                            <div className="col-md-4">
                              <label className="form-label fw-semibold text-dark small">Obtained Marks *</label>
                              <input
                                type="number"
                                className="form-control"
                                name="obtainedMarks"
                                required
                                placeholder="e.g. 850"
                                value={formData.obtainedMarks}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              />
                            </div>
                          </div>
                        )}

                        {/* STEP 3: PROGRAM SELECTION & DOCUMENTS */}
                        {step === 3 && (
                          <div className="row g-3">
                            <div className="col-12 border-bottom pb-2 mb-3">
                              <h4 className="fs-6 fw-bold text-dark mb-0">Step 3: Program Selection &amp; Verification Documents</h4>
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Select Department *</label>
                              <select
                                className="form-select"
                                name="selectedDepartment"
                                value={formData.selectedDepartment}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              >
                                <option value="it-cs">Information Technology &amp; CS</option>
                                <option value="languages">English &amp; Foreign Languages</option>
                                <option value="web-software">Software &amp; Web Engineering</option>
                                <option value="design-multimedia">Design &amp; Digital Multimedia</option>
                                <option value="technical-vocational">Technical &amp; Vocational Trades</option>
                                <option value="office-automation">Office &amp; Business Automation</option>
                              </select>
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Preferred Program / Diploma *</label>
                              <select
                                className="form-select"
                                name="selectedProgram"
                                value={formData.selectedProgram}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              >
                                <option value="Diploma in Information Technology (DIT)">Diploma in Information Technology (DIT) - 1 Year</option>
                                <option value="Spoken English & IELTS Mastery">Spoken English &amp; IELTS Mastery - 6 Months</option>
                                <option value="Full-Stack Web Development">Full-Stack Web Development - 6 Months</option>
                                <option value="Graphic Designing & UI/UX">Graphic Designing &amp; UI/UX - 4 Months</option>
                                <option value="Certified Industrial Rigger">Certified Industrial Rigger - 3 Months</option>
                                <option value="Computerized Accounting & QuickBooks">Computerized Accounting &amp; QuickBooks - 3 Months</option>
                              </select>
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark small">Preferred Shift *</label>
                              <select
                                className="form-select"
                                name="shiftPreference"
                                value={formData.shiftPreference}
                                onChange={handleChange}
                                style={{ height: "50px", borderRadius: "6px" }}
                              >
                                <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                                <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                                <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                              </select>
                            </div>

                            {/* DASHED DRAG & DROP UPLOAD BOX */}
                            <div className="col-12 mt-3">
                              <label className="form-label fw-semibold text-dark small">
                                Upload CNIC / Marksheet Copy (PDF, JPG, PNG)
                              </label>
                              <label
                                className="d-flex flex-column align-items-center justify-content-center p-4 rounded-3 text-center cursor-pointer w-100"
                                style={{
                                  border: "2px dashed #2c7aff",
                                  backgroundColor: "#f8faff",
                                  cursor: "pointer",
                                }}
                              >
                                <i className="fa-solid fa-cloud-arrow-up text-primary fs-2 mb-2"></i>
                                <span className="fw-semibold text-dark small mb-1">
                                  {formData.uploadedFileName ? formData.uploadedFileName : "Click or Drag & Drop Document Here"}
                                </span>
                                <span className="text-muted" style={{ fontSize: "11px" }}>
                                  Supports PDF, PNG, JPG up to 10MB
                                </span>
                                <input
                                  type="file"
                                  className="d-none"
                                  accept=".pdf,.png,.jpg,.jpeg"
                                  onChange={handleFileUpload}
                                />
                              </label>
                            </div>

                            <div className="col-12 mt-3">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="agreeTerms"
                                  id="agreeTerms"
                                  required
                                  checked={formData.agreeTerms}
                                  onChange={handleChange}
                                />
                                <label className="form-check-label text-muted small" htmlFor="agreeTerms">
                                  I certify that all supplied details are accurate and acknowledge the academic terms of Al Qasim Institute Bannu.
                                </label>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* WIZARD NAVIGATION BUTTONS */}
                        <div className="d-flex justify-content-between align-items-center pt-4 mt-4 border-top">
                          {step > 1 ? (
                            <button
                              type="button"
                              className="btn btn-outline-secondary rounded-pill px-4"
                              onClick={handleBack}
                            >
                              <i className="fa-solid fa-arrow-left me-1"></i> Back
                            </button>
                          ) : (
                            <div></div>
                          )}

                          {step < 3 ? (
                            <button
                              type="submit"
                              className="btn_one rounded-pill px-5 border-0"
                            >
                              Next Step <i className="fa-solid fa-arrow-right ms-1"></i>
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn_one rounded-pill px-5 border-0"
                            >
                              Complete Registration <i className="fa-solid fa-check ms-1"></i>
                            </button>
                          )}
                        </div>
                      </form>
                    </>
                  )}
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
