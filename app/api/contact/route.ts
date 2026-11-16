import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Form values are interpolated into an HTML email, so escape them first —
// otherwise anyone could inject markup or links into the enquiry inbox.
function esc(v: unknown): string {
  return String(v ?? '')
    .slice(0, 2000)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const raw = body ?? {};
  if (!raw.name || !raw.species || !raw.quantity || !raw.treatment || !raw.phone) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }
  const name = esc(raw.name);
  const species = esc(raw.species);
  const quantity = esc(raw.quantity);
  const treatment = esc(raw.treatment);
  const phone = esc(raw.phone);
  const notes = esc(raw.notes);

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
    subject: `Timber Treatment Enquiry — ${String(raw.name).slice(0, 80).replace(/\s+/g, ' ')}`,
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
