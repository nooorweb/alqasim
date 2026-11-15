"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import SectionTitle from "@/components/ui/SectionTitle";
import CourseCard from "@/components/ui/CourseCard";

const COURSES = [
  {
    id: 1,
    title: "Diploma in Information Technology (DIT)",
    category: "Information Technology",
    price: "PKR 4,500/mo",
    lessons: "36 Modules",
    duration: "1 Year",
    rating: "5.0",
    reviews: "340",
    image: "/assets/images/course/c1.png",
    instructor: "Engr. Tariq Niazi",
    description: "Official board-accredited DIT diploma covering software development, computer networks, database systems, and office automation.",
  },
  {
    id: 2,
    title: "Spoken English & IELTS Academic Mastery",
    category: "Languages",
    price: "PKR 3,500/mo",
    lessons: "48 Sessions",
    duration: "6 Months",
    rating: "4.9",
    reviews: "215",
    image: "/assets/images/course/c2.png",
    instructor: "Prof. Asadullah Khan",
    description: "Master spoken fluency, accent clarity, public speaking, and IELTS exam preparation targeting 7.5+ bands.",
  },
  {
    id: 3,
    title: "Full-Stack Web Development & Modern JavaScript",
    category: "Software",
    price: "PKR 5,000/mo",
    lessons: "32 Modules",
    duration: "6 Months",
    rating: "5.0",
    reviews: "180",
    image: "/assets/images/course/c3.png",
    instructor: "Engr. Farooq Ahmad",
    description: "Hands-on project-based engineering with HTML5, CSS3, JavaScript ES6+, React, Next.js, and Node.js backend systems.",
  },
  {
    id: 4,
    title: "Graphic Design, Branding & UI/UX Design",
    category: "Multimedia",
    price: "PKR 4,000/mo",
    lessons: "28 Modules",
    duration: "4 Months",
    rating: "4.8",
    reviews: "142",
    image: "/assets/images/course/c4.png",
    instructor: "Madam Sadia Rehman",
    description: "Master Photoshop, Illustrator, InDesign, and Figma to build professional branding identities, advertising graphics, and web UI.",
  },
  {
    id: 5,
    title: "Certified Professional Industrial Rigger Training",
    category: "Vocational",
    price: "PKR 5,500/mo",
    lessons: "24 Practical Labs",
    duration: "3 Months",
    rating: "5.0",
    reviews: "290",
    image: "/assets/images/course/c5.png",
    instructor: "Ustad Noor Zaman",
    description: "Rigging standards, heavy crane slinging, rigging hardware inspection, and industrial safety compliance for domestic & Gulf markets.",
  },
  {
    id: 6,
    title: "Computerized Accounting & QuickBooks Financials",
    category: "Business",
    price: "PKR 3,500/mo",
    lessons: "20 Modules",
    duration: "3 Months",
    rating: "4.9",
    reviews: "95",
    image: "/assets/images/course/c6.png",
    instructor: "Mr. Imran Niazi",
    description: "Comprehensive financial accounting, ledger balance management, payroll generation, and QuickBooks / Peachtree accounting software.",
  },
  {
    id: 7,
    title: "Office Automation & Advanced Microsoft Excel",
    category: "Business",
    price: "PKR 2,500/mo",
    lessons: "16 Modules",
    duration: "2 Months",
    rating: "4.8",
    reviews: "110",
    image: "/assets/images/course/c7.png",
    instructor: "Engr. Tariq Niazi",
    description: "Advanced formulas, pivot tables, VLOOKUP, data charts, PowerPoint executive pitch creation, and official administrative clerical skills.",
  },
  {
    id: 8,
    title: "Python Programming & Data Science Basics",
    category: "Software",
    price: "PKR 5,000/mo",
    lessons: "26 Modules",
    duration: "4 Months",
    rating: "5.0",
    reviews: "88",
    image: "/assets/images/course/c8.png",
    instructor: "Engr. Farooq Ahmad",
    description: "Learn core Python syntax, algorithms, data structures, data analysis with Pandas, and practical workflow automation scripts.",
  },
];

const CATEGORIES = [
  "All Categories",
  "Information Technology",
  "Languages",
  "Software",
  "Multimedia",
  "Vocational",
  "Business",
];

export default function CoursesPage() {
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = COURSES.filter((c) => {
    const matchesCat =
      selectedCat === "All Categories" || c.category === selectedCat;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="All Courses & Diplomas"
          breadcrumb={[{ label: "Courses" }]}
        />

        <section className="section-padding bg-white">
          <div className="container">
            <SectionTitle
              subtitle="Career-Ready Curriculums"
              title="Explore Recognized Diplomas &"
              highlight="Certificates"
              description="Gain practical skills in computing, modern software, global languages, and industrial trades backed by official certificates."
            />

            {/* FILTER & SEARCH BAR */}
            <div className="row g-3 align-items-center mb-5">
              <div className="col-lg-8 col-md-7 col-12">
                <div className="d-flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCat(cat)}
                      className="border-0 px-3 py-2 rounded-pill fw-semibold small"
                      style={{
                        backgroundColor: selectedCat === cat ? "#2c7aff" : "#f8faff",
                        color: selectedCat === cat ? "#ffffff" : "#1a2d62",
                        border: selectedCat === cat ? "none" : "1px solid #eef2f6",
                        cursor: "pointer",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-12">
                <div
                  className="d-flex align-items-center p-2 rounded-pill border bg-light"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <i className="fa-solid fa-magnifying-glass text-muted ms-2 me-2"></i>
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent shadow-none small"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ height: "36px" }}
                  />
                </div>
              </div>
            </div>

            {/* COURSE GRID */}
            {filteredCourses.length > 0 ? (
              <div className="row g-4">
                {filteredCourses.map((c) => (
                  <div key={c.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                    <CourseCard
                      title={c.title}
                      category={c.category}
                      price={c.price}
                      lessons={c.lessons}
                      duration={c.duration}
                      rating={c.rating}
                      reviews={c.reviews}
                      image={c.image}
                      instructor={c.instructor}
                      description={c.description}
                      href="/registration"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <i className="fa-solid fa-folder-open text-muted fs-1 mb-3"></i>
                <h4 className="fw-bold text-dark mb-1">No Courses Found</h4>
                <p className="text-muted small">
                  Try adjusting your search query or selecting a different category filter.
                </p>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary rounded-pill px-4"
                  onClick={() => {
                    setSelectedCat("All Categories");
                    setSearchTerm("");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
