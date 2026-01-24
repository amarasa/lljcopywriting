import { ServerClient } from "postmark";

if (!process.env.POSTMARK_API_TOKEN) {
  throw new Error("POSTMARK_API_TOKEN environment variable is required");
}

const postmarkClient = new ServerClient(process.env.POSTMARK_API_TOKEN);

export interface EmailData {
  to: string;
  subject: string;
  htmlBody: string;
  textBody?: string;
  replyTo?: string;
  bcc?: string;
}

export async function sendEmail(emailData: EmailData) {
  const fromEmail = process.env.POSTMARK_FROM_EMAIL || "hello@hrefcreative.com";
  const replyToEmail = process.env.POSTMARK_REPLY_TO_EMAIL || fromEmail;
  const bccEmail = emailData.bcc || process.env.NOTIFY_BCC_EMAIL;

  try {
    const response = await postmarkClient.sendEmail({
      From: fromEmail,
      To: emailData.to,
      Bcc: bccEmail,
      Subject: emailData.subject,
      HtmlBody: emailData.htmlBody,
      TextBody: emailData.textBody || "",
      ReplyTo: emailData.replyTo || replyToEmail,
    });

    console.log("Email sent successfully:", response.MessageID);
    return { success: true, messageId: response.MessageID };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
