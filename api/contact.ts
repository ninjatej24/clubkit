import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { venueName, email, message } = req.body;

    await resend.emails.send({
      from: 'Clubkit <onboarding@resend.dev>',
      to: 'clubkituk@gmail.com',
      subject: `New Venue Application from ${venueName}`,
      html: `
        <h2>New Venue Application</h2>
        <p><strong>Venue:</strong> ${venueName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
