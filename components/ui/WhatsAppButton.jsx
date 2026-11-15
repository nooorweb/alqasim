"use client";

export default function WhatsAppButton() {
  const whatsappNumber = "923001234567";
  const defaultMessage = encodeURIComponent(
    "Hello Al Qasim Institute! I would like to inquire about course registration and diploma programs."
  );

  return (
    <aside aria-label="Admissions Counseling Quick Chat">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed d-flex align-items-center justify-content-center text-white shadow-lg text-decoration-none"
        style={{
          bottom: "30px",
          right: "30px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          zIndex: 9998,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        title="Chat with Admissions on WhatsApp"
        aria-label="Chat with Admissions on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp fs-3"></i>
      </a>
    </aside>
  );
}
