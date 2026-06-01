import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, species, quantity, treatment, phone, notes } = await req.json();

  if (!name || !species || !quantity || !treatment) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"St. Xavier Timber Website" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    replyTo: undefined,
    subject: `Timber Treatment Enquiry — ${name}`,
    html: `
      <table style="font-family:Arial,sans-serif;font-size:14px;color:#222;border-collapse:collapse;width:100%;max-width:600px">
        <tr><td colspan="2" style="background:#1a3a08;color:#fff;padding:20px 24px;font-size:18px;font-weight:bold">New Timber Treatment Enquiry</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee;width:180px">Name / Company</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Species & Dimensions</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${species}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Quantity</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${quantity}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Treatment Required</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${treatment}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;border-bottom:1px solid #eee">Phone / WhatsApp</td><td style="padding:12px 24px;border-bottom:1px solid #eee">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding:12px 24px;font-weight:bold;vertical-align:top">Notes</td><td style="padding:12px 24px;white-space:pre-wrap">${notes || 'No additional notes.'}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('[contact/route] email error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
