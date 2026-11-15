"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "High-Tech Computing Lab",
    category: "labs",
    tag: "Computing Lab",
    image: "/assets/images/course/c1.png",
    caption: "Equipped with high-performance workstations for software development and IT diplomas.",
  },
  {
    id: 2,
    title: "Annual Convocation Ceremony",
    category: "convocation",
    tag: "Convocation",
    image: "/assets/images/course/c2.png",
    caption: "Graduates receiving their accredited diplomas and merit medals at the convocation hall.",
  },
  {
    id: 3,
    title: "Language Fluency & Audio Studio",
    category: "labs",
    tag: "Language Lab",
    image: "/assets/images/course/c3.png",
    caption: "Audio-visual speech lab for English fluency drills, IELTS listening, and phonetics training.",
  },
  {
    id: 4,
    title: "Bannu Main Campus Courtyard",
    category: "campus",
    tag: "Campus",
    image: "/assets/images/course/c4.png",
    caption: "Central student courtyard and reception at Hinjal Gate campus.",
  },
  {
    id: 5,
    title: "Student Coding Hackathon",
    category: "events",
    tag: "Events",
    image: "/assets/images/course/c5.png",
    caption: "Annual web development and algorithmic problem solving competition.",
  },
  {
    id: 6,
    title: "Technical Rigging Workshop",
    category: "labs",
    tag: "Technical Workshop",
    image: "/assets/images/course/c6.png",
    caption: "Industrial safety equipment, crane sling rigging protocols, and load calculations training.",
  },
  {
    id: 7,
    title: "Alumni Meet & Career Networking",
    category: "events",
    tag: "Events",
    image: "/assets/images/course/c7.png",
    caption: "Alumni gathering where industry leaders mentor fresh diploma holders.",
  },
  {
    id: 8,
    title: "Central Reference Library",
    category: "campus",
    tag: "Campus",
    image: "/assets/images/course/c8.png",
    caption: "Extensive repository of technical computing journals, grammar manuals, and study quiet zones.",
  },
  {
    id: 9,
    title: "Medal Distribution for High Achievers",
    category: "convocation",
    tag: "Convocation",
    image: "/assets/images/course/c9.png",
    caption: "Recognition ceremony celebrating students scoring distinction grades in DIT board exams.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Photos" },
  { key: "campus", label: "Campus" },
  { key: "labs", label: "Labs & Workshops" },
  { key: "convocation", label: "Convocation" },
  { key: "events", label: "Events & Seminars" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Campus Life & Gallery"
          breadcrumb={[{ label: "Gallery" }]}
        />

        <section className="section-padding bg-white">
          <div className="container">
            <SectionTitle
              subtitle="Campus Moments"
              title="A Visual Tour of Purdue"
              highlight="Academy"
              description="Explore life at our campus, state-of-the-art computer labs, student events, and graduation ceremonies."
            />

            {/* PILL FILTER BUTTONS WITH #ebecff ACTIVE TINT */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className="border-0 px-4 py-2 rounded-pill fw-semibold transition-all"
                    style={{
                      backgroundColor: isActive ? "#ebecff" : "#f8faff",
                      color: isActive ? "#2c7aff" : "#1a2d62",
                      border: isActive ? "1px solid #2c7aff" : "1px solid #eef2f6",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* 3-COLUMN MASONRY / GRID (.course-img zoom-on-hover) */}
            <div className="row g-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-12">
                  <div
                    className="rounded-4 overflow-hidden border bg-white position-relative h-100 d-flex flex-column"
                    style={{
                      borderColor: "#eef2f6",
                      boxShadow: "0 10px 30px -5px rgba(26, 45, 98, 0.07)",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div
                      className="overflow-hidden position-relative"
                      style={{ height: "240px", backgroundColor: "#f8faff" }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-100"
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <span
                        className="badge position-absolute top-0 end-0 mt-3 me-3 rounded-pill px-3 py-2 fw-medium shadow-sm"
                        style={{ backgroundColor: "rgba(26, 45, 98, 0.85)", color: "#ffffff" }}
                      >
                        {item.tag}
                      </span>
                      <div
                        className="position-absolute bottom-0 start-0 end-0 p-3 d-flex align-items-center justify-content-center text-white"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                        }}
                      >
                        <span className="small">
                          <i className="fa-solid fa-expand me-1"></i> Click to Enlarge
                        </span>
                      </div>
                    </div>

                    <div className="p-3 d-flex flex-column flex-grow-1 justify-content-between">
                      <h3 className="fs-6 fw-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-muted small mb-0">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              zIndex: 9999,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-4 overflow-hidden shadow-lg position-relative"
              style={{ maxWidth: "800px", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 mt-3 me-3 z-3 bg-white p-2 rounded-circle shadow"
                aria-label="Close"
                onClick={() => setSelectedImage(null)}
              ></button>

              <div style={{ maxHeight: "500px", overflow: "hidden" }}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="p-4 bg-white">
                <span className="badge bg-primary rounded-pill px-3 py-1 mb-2">
                  {selectedImage.tag}
                </span>
                <h3 className="fs-5 fw-bold text-dark mb-1">{selectedImage.title}</h3>
                <p className="text-muted small mb-0">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
