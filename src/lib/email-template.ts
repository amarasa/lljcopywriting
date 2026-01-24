interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
  submittedAt: string;
}

export function generateContactNotificationEmail(data: ContactFormData) {
  const subject = `New Inquiry from ${data.name} - LLJ Copywriting`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0F5C5C; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Project Inquiry</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.5;">
                You have received a new inquiry from your website contact form.
              </p>

              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #0F5C5C; display: inline-block; width: 120px;">Name:</strong>
                    <span style="color: #333333;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #0F5C5C; display: inline-block; width: 120px;">Email:</strong>
                    <a href="mailto:${data.email}" style="color: #E07A5F; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                ${
                  data.company
                    ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #0F5C5C; display: inline-block; width: 120px;">Company:</strong>
                    <span style="color: #333333;">${data.company}</span>
                  </td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #0F5C5C; display: inline-block; width: 120px;">Project Type:</strong>
                    <span style="color: #333333;">${data.projectType}</span>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="background-color: #f9f9f9; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                <strong style="color: #0F5C5C; display: block; margin-bottom: 10px;">Message:</strong>
                <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>

              <!-- CTA -->
              <p style="margin: 0; text-align: center;">
                <a href="mailto:${data.email}?subject=Re: Your inquiry to LLJ Copywriting" style="display: inline-block; background-color: #E07A5F; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: 600; font-size: 16px;">Reply to ${data.name}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 20px 40px; text-align: center;">
              <p style="margin: 0; color: #888888; font-size: 13px;">
                Submitted on ${data.submittedAt}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const textBody = `
New Project Inquiry - LLJ Copywriting

You have received a new inquiry from your website contact form.

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}\n` : ""}Project Type: ${data.projectType}

Message:
${data.message}

---
Submitted on ${data.submittedAt}
  `.trim();

  return { subject, htmlBody, textBody };
}
