"use client";

import { useState } from "react";

export default function Accordion({ items = [], defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="accordion" id="purdueAccordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className="accordion-item mb-3 border rounded overflow-hidden"
            key={index}
            style={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              borderColor: "#eef2f6",
            }}
          >
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${isOpen ? "" : "collapsed"} fw-semibold`}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`collapse-${index}`}
                style={{
                  backgroundColor: isOpen ? "#f8faff" : "#ffffff",
                  color: isOpen ? "#2c7aff" : "#1a2d62",
                  fontSize: "17px",
                  padding: "18px 24px",
                }}
              >
                {item.title}
              </button>
            </h2>
            {isOpen && (
              <div
                id={`collapse-${index}`}
                className="accordion-collapse show"
                aria-labelledby={`heading-${index}`}
              >
                <div
                  className="accordion-body p-4 text-muted"
                  style={{
                    backgroundColor: "#ffffff",
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
