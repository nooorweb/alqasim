import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let name, email, subject, message;

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await request.json();
      name = data.name;
      email = data.email;
      subject = data.subject;
      message = data.message;
    } else {
      const formData = await request.formData();
      name = formData.get("name");
      email = formData.get("email");
      subject = formData.get("subject");
      message = formData.get("message");
    }

    // Input sanitization & validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Process inquiry (e.g. logging / forward to academy admissions)
    console.log(`[Contact Inquiry] From: ${name} <${email}> | Subject: ${subject || "General Inquiry"}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been successfully received by Purdue Academy Admissions. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
