import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // 🔴 Check API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return res.status(500).json({ error: "Server misconfigured" });
    }

    const { venueName, email, message } = req.body;

    if (!venueName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // keep this unless you verified a custom domain
      to: "clubkituk@gmail.com",
      subject: `New Venue Application from ${venueName}`,
      reply_to: email,
      html: `
        <h2>New Venue Application</h2>
        <p><strong>Venue:</strong> ${venueName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Email failed to send" });
    }

    console.log("Email sent:", data);

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
