import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/postmark";
import { generateContactNotificationEmail } from "@/lib/email-template";

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();

    // Validate required fields
    const { name, email, projectType, message } = body;
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Generate email content
    const emailContent = generateContactNotificationEmail({
      name,
      email,
      company: body.company,
      projectType,
      message,
      submittedAt: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    });

    // Send notification email
    const notifyEmail = process.env.NOTIFY_EMAIL || "Inquery@hrefcreative.com";

    await sendEmail({
      to: notifyEmail,
      subject: emailContent.subject,
      htmlBody: emailContent.htmlBody,
      textBody: emailContent.textBody,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
