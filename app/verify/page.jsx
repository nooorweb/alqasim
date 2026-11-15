"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";

const MOCK_CERTIFICATES = {
  "PGA-2026-0812": {
    certId: "PGA-2026-0812",
    studentName: "Muhammad Usman Khan",
    fatherName: "Tariq Mahmood Khan",
    rollNumber: "PGA-2026-0812",
    registrationNo: "REG-BNU-2025-9921",
    courseTitle: "Diploma in Information Technology (DIT)",
    duration: "1 Year Professional Diploma",
    grade: "A+ (Distinction - 88%)",
    status: "Verified & Issued",
    issueDate: "12 October 2026",
    verificationStatus: "Valid Official Record",
    department: "Information Technology",
    campus: "Main Campus, Bannu City",
  },
  "ENG-2026-1934": {
    certId: "ENG-2026-1934",
    studentName: "Ayesha Bibi",
    fatherName: "Muhammad Farooq",
    rollNumber: "ENG-2026-1934",
    registrationNo: "REG-BNU-2026-1045",
    courseTitle: "Advanced English Language & IELTS Mastery",
    duration: "6 Months Intensive",
    grade: "Band 7.5 (Exemplary)",
    status: "Verified & Issued",
    issueDate: "05 November 2026",
    verificationStatus: "Valid Official Record",
    department: "Language & Linguistics",
    campus: "Main Campus, Bannu City",
  },
  "WEB-2026-3021": {
    certId: "WEB-2026-3021",
    studentName: "Hamza Niazi",
    fatherName: "Sher Zaman Niazi",
    rollNumber: "WEB-2026-3021",
    registrationNo: "REG-BNU-2026-2189",
    courseTitle: "Full-Stack Web Development & Modern JS",
    duration: "6 Months Professional Certification",
    grade: "A (Excellent - 84%)",
    status: "Verified & Issued",
    issueDate: "28 September 2026",
    verificationStatus: "Valid Official Record",
    department: "Computer Sciences",
    campus: "Main Campus, Bannu City",
  },
};

export default function VerifyPage() {
  const [searchId, setSearchId] = useState("PGA-2026-0812");
  const [result, setResult] = useState(MOCK_CERTIFICATES["PGA-2026-0812"]);
  const [searched, setSearched] = useState(true);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e?.preventDefault();
    setError("");
    const trimmed = searchId.trim().toUpperCase();
    if (!trimmed) {
      setError("Please enter a valid Certificate ID or Roll Number.");
      setResult(null);
      return;
    }

    if (MOCK_CERTIFICATES[trimmed]) {
      setResult(MOCK_CERTIFICATES[trimmed]);
      setError("");
    } else {
      setResult(null);
      setError(`No verified record found for ID: "${trimmed}". Please double-check the credential ID and try again.`);
    }
    setSearched(true);
  };

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Certificate Verification"
          breadcrumb={[{ label: "Certificate Verification" }]}
        />

        <section className="login_register section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div
                  className="bg-white p-4 p-md-5 rounded-4 shadow-sm border"
                  style={{ borderColor: "#eef2f6", maxWidth: "680px", margin: "0 auto" }}
                >
                  <div className="text-center mb-4">
                    <span
                      className="badge px-3 py-2 rounded-pill mb-2 fw-medium"
                      style={{ backgroundColor: "rgba(44, 122, 255, 0.1)", color: "#2c7aff" }}
                    >
                      <i className="fa-solid fa-shield-halved me-1"></i> Official Student Registry
                    </span>
                    <h2 className="fs-3 fw-bold text-dark mb-2">Verify Student Credential</h2>
                    <p className="text-muted small">
                      Enter the Roll Number or Certificate ID printed on the official diploma/certificate to authenticate student credentials.
                    </p>
                  </div>

                  {/* PILL SEARCH BAR (.home_sb style) */}
                  <form onSubmit={handleSearch} className="mb-4">
                    <div
                      className="d-flex align-items-center p-2 rounded-pill border"
                      style={{
                        backgroundColor: "#f8faff",
                        borderColor: "#e0e7ff",
                        boxShadow: "0 4px 14px rgba(44, 122, 255, 0.08)",
                      }}
                    >
                      <i className="fa-solid fa-barcode text-primary ms-3 me-2 fs-5"></i>
                      <input
                        type="text"
                        className="form-control border-0 bg-transparent shadow-none"
                        placeholder="e.g. PGA-2026-0812 or ENG-2026-1934"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        style={{ height: "46px", fontSize: "15px" }}
                      />
                      <button
                        type="submit"
                        className="btn_one text-nowrap rounded-pill px-4 border-0"
                        style={{ height: "46px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                      >
                        <i className="fa-solid fa-magnifying-glass me-1"></i> Verify
                      </button>
                    </div>
                  </form>

                  {/* QUICK SAMPLE BUTTONS */}
                  <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 mb-4">
                    <span className="small text-muted">Try sample:</span>
                    {Object.keys(MOCK_CERTIFICATES).map((id) => (
                      <button
                        key={id}
                        type="button"
                        className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1"
                        style={{ fontSize: "12px" }}
                        onClick={() => {
                          setSearchId(id);
                          setResult(MOCK_CERTIFICATES[id]);
                          setError("");
                          setSearched(true);
                        }}
                      >
                        {id}
                      </button>
                    ))}
                  </div>

                  {/* ERROR MESSAGE */}
                  {error && (
                    <div className="alert alert-danger rounded-3 d-flex align-items-center gap-2 mb-4" role="alert">
                      <i className="fa-solid fa-circle-exclamation fs-5"></i>
                      <span className="small">{error}</span>
                    </div>
                  )}

                  {/* VERIFIED CREDENTIAL CARD */}
                  {searched && result && (
                    <div
                      className="p-4 rounded-4 border position-relative"
                      style={{
                        backgroundColor: "#f8faff",
                        borderColor: "#eef2f6",
                        boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                      }}
                    >
                      {/* HEADER ROW WITH VERIFIED PILL BADGE */}
                      <div className="d-flex flex-wrap justify-content-between align-items-center pb-3 mb-3 border-bottom gap-2">
                        <div>
                          <span className="text-muted small d-block">Credential Registry</span>
                          <h4 className="fs-5 fw-bold text-dark mb-0">{result.certId}</h4>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="badge px-3 py-2 rounded-pill fw-semibold"
                            style={{ backgroundColor: "#198754", color: "#ffffff", fontSize: "13px" }}
                          >
                            <i className="fa-solid fa-circle-check me-1"></i> Verified Credential
                          </span>
                        </div>
                      </div>

                      {/* 2-COLUMN METADATA GRID */}
                      <div className="row g-3 small">
                        <div className="col-sm-6">
                          <div className="p-3 bg-white rounded-3 border">
                            <span className="text-muted d-block" style={{ fontSize: "12px" }}>Student Full Name</span>
                            <strong className="text-dark fs-6">{result.studentName}</strong>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="p-3 bg-white rounded-3 border">
                            <span className="text-muted d-block" style={{ fontSize: "12px" }}>Father's Name</span>
                            <strong className="text-dark fs-6">{result.fatherName}</strong>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="p-3 bg-white rounded-3 border">
                            <span className="text-muted d-block" style={{ fontSize: "12px" }}>Roll / Registration Number</span>
                            <strong className="text-dark">{result.rollNumber}</strong>
                            <div className="text-muted" style={{ fontSize: "11px" }}>{result.registrationNo}</div>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="p-3 bg-white rounded-3 border">
                            <span className="text-muted d-block" style={{ fontSize: "12px" }}>Academic Grade / Award</span>
                            <strong className="text-success">{result.grade}</strong>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="p-3 bg-white rounded-3 border">
                            <span className="text-muted d-block" style={{ fontSize: "12px" }}>Program / Qualification</span>
                            <strong className="text-primary fs-6">{result.courseTitle}</strong>
                            <div className="text-muted" style={{ fontSize: "12px" }}>
                              {result.department} &bull; {result.duration}
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-7">
                          <div className="p-3 bg-white rounded-3 border h-100">
                            <div className="d-flex justify-content-between mb-1">
                              <span className="text-muted" style={{ fontSize: "12px" }}>Date of Issuance:</span>
                              <span className="text-dark fw-medium">{result.issueDate}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                              <span className="text-muted" style={{ fontSize: "12px" }}>Issuing Campus:</span>
                              <span className="text-dark fw-medium">{result.campus}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="text-muted" style={{ fontSize: "12px" }}>Registry Authenticity:</span>
                              <span className="text-success fw-semibold">100% Genuine</span>
                            </div>
                          </div>
                        </div>

                        {/* QR CODE BOX */}
                        <div className="col-sm-5">
                          <div className="p-3 bg-white rounded-3 border text-center h-100 d-flex flex-column align-items-center justify-content-center">
                            <div
                              className="p-2 border rounded-2 mb-2 d-inline-block bg-light"
                              style={{ width: "90px", height: "90px" }}
                            >
                              <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://alqasim.edu.pk/verify?id=${result.certId}`}
                                alt="Verification QR Code"
                                className="w-100 h-100"
                                onError={(e) => {
                                  // Fallback placeholder if offline
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                            <span className="text-muted" style={{ fontSize: "11px" }}>
                              <i className="fa-solid fa-qrcode me-1"></i> Scan to Authenticate
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary rounded-pill px-3"
                          onClick={() => window.print()}
                        >
                          <i className="fa-solid fa-print me-1"></i> Print Verification
                        </button>
                      </div>
                    </div>
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
