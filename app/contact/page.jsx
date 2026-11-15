"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: data.message || "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || "Failed to submit inquiry. Please try again.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        message: "Network error. Please check your connection or contact us via WhatsApp.",
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Contact Admissions"
          breadcrumb={[{ label: "Contact Us" }]}
        />

        {/* CAMPUS INFO CARDS */}
        <section className="address_area section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="p-4 rounded-4 bg-white border h-100 text-center"
                  style={{
                    borderColor: "#eef2f6",
                    boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(44, 122, 255, 0.1)",
                      color: "#2c7aff",
                      fontSize: "24px",
                    }}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <h3 className="fs-5 fw-bold text-dark mb-2">Campus Location</h3>
                  <p className="text-muted small mb-0">
                    Hinjal Gate Bannu City, Ameer Niazi Street, KP, Pakistan
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="p-4 rounded-4 bg-white border h-100 text-center"
                  style={{
                    borderColor: "#eef2f6",
                    boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(25, 135, 84, 0.1)",
                      color: "#198754",
                      fontSize: "24px",
                    }}
                  >
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <h3 className="fs-5 fw-bold text-dark mb-2">Telephone &amp; WhatsApp</h3>
                  <p className="text-muted small mb-0">
                    <a href="tel:+4857548854826" className="text-decoration-none text-muted d-block">
                      + 485 7548 8546
                    </a>
                    <span className="text-muted d-block">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="p-4 rounded-4 bg-white border h-100 text-center"
                  style={{
                    borderColor: "#eef2f6",
                    boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                      color: "#f59e0b",
                      fontSize: "24px",
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <h3 className="fs-5 fw-bold text-dark mb-2">Email Inquiries</h3>
                  <p className="text-muted small mb-0">
                    <a href="mailto:info@alqasim.edu.pk" className="text-decoration-none text-muted d-block">
                      info@alqasim.edu.pk
                    </a>
                    <span className="text-muted d-block">admissions@alqasim.edu.pk</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INQUIRY FORM & MAP */}
        <section className="section-padding pt-0 bg-white">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7 col-12">
                <div
                  className="p-4 p-md-5 rounded-4 border bg-white h-100"
                  style={{
                    borderColor: "#eef2f6",
                    boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                  }}
                >
                  <SectionTitle
                    subtitle="Admissions Helpdesk"
                    title="Send Us a"
                    highlight="Message"
                    description="Have questions about courses, class timing, or registration? Fill out the form below and an admissions counselor will reply promptly."
                    center={false}
                  />

                  {status.message && (
                    <div
                      className={`alert ${
                        status.success ? "alert-success" : "alert-danger"
                      } rounded-3 small mb-4`}
                      role="alert"
                    >
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-3">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-dark">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Tariq Khan"
                          className="form-control"
                          style={{ height: "48px", borderRadius: "6px" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-dark">Your Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. student@gmail.com"
                          className="form-control"
                          style={{ height: "48px", borderRadius: "6px" }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold text-dark">Subject / Course of Interest</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Admission Inquiry for DIT Program"
                          className="form-control"
                          style={{ height: "48px", borderRadius: "6px" }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold text-dark">Your Message *</label>
                        <textarea
                          rows="5"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your query or qualification background..."
                          className="form-control"
                          style={{ borderRadius: "6px" }}
                        ></textarea>
                      </div>
                      <div className="col-12 pt-2">
                        <button
                          type="submit"
                          disabled={status.loading}
                          className="btn_one rounded-pill px-5 border-0"
                        >
                          {status.loading ? "Sending..." : "Send Message"} <i className="fa-solid fa-paper-plane ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* CAMPUS MAP */}
              <div className="col-lg-5 col-12">
                <div
                  className="rounded-4 overflow-hidden border h-100 position-relative"
                  style={{
                    borderColor: "#eef2f6",
                    boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                    minHeight: "350px",
                  }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=Bannu+City+Khyber+Pakhtunkhwa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Al Qasim Institute Campus Location Map"
                  ></iframe>
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
