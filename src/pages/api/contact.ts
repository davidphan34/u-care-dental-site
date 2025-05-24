// /pages/api/contact.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: 'UCare Dental Website<noreply@youcaredental.com>',
      to: 'ucarefax@hotmail.com',
      subject: `UCare Dental Website: New contact from ${name}`,
      replyTo: email,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone}<br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}

// ucarefax@hotmail.com
