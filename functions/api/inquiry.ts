interface InquiryPayload {
  company?: string;
  email?: string;
  country?: string;
  application?: string;
  details?: string;
  website?: string; // honeypot — must stay empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function truncate(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) + '…' : value;
}

export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const apiKey = (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;
  const toEmail = (env as { INQUIRY_TO_EMAIL?: string }).INQUIRY_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return Response.json({ ok: false, error: 'server_not_configured' }, { status: 500 });
  }

  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // honeypot: real users never fill this; bots that do get a fake success
  if (payload.website) {
    return Response.json({ ok: true });
  }

  const company = truncate((payload.company ?? '').trim(), 200);
  const email = truncate((payload.email ?? '').trim(), 254);
  const country = truncate((payload.country ?? '').trim(), 100);
  const application = truncate((payload.application ?? '').trim(), 100);
  const details = truncate((payload.details ?? '').trim(), 5000);

  if (!company || !email || !details || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'validation_failed' }, { status: 400 });
  }

  const subject = `New RFQ — ${company}${country ? ` (${country})` : ''}`;
  const lines = [
    `Company: ${company}`,
    `Email: ${email}`,
    `Country: ${country || '—'}`,
    `Application: ${application || '—'}`,
    '',
    'Inquiry:',
    details,
    '',
    `Received: ${new Date().toISOString()}`
  ];
  const html = `
    <h2 style="font-family:Arial,sans-serif">New RFQ from ${escapeHtml(company)}</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px" cellpadding="4">
      <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><b>Country</b></td><td>${escapeHtml(country || '—')}</td></tr>
      <tr><td><b>Application</b></td><td>${escapeHtml(application || '—')}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;white-space:pre-wrap">${escapeHtml(details)}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'ArcTung Inquiry <inquiry@arctung.com>',
      to: [toEmail],
      reply_to: email,
      subject,
      text: lines.join('\n'),
      html
    })
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('Resend error', res.status, body);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  // Auto-reply to the customer. Failure here must not fail the inquiry —
  // the RFQ is already delivered; we only log and move on.
  try {
    const ackText = [
      'Hello,',
      '',
      `Thank you — your RFQ from ${company} has landed on our engineering desk.`,
      '',
      'What happens next:',
      '1. We review your alloy, dimensions and quantity.',
      '2. You receive a firm quote within 24 hours (Mon-Fri, UTC+8).',
      '3. Quotes are held for 7 days (tungsten pricing follows the market).',
      '',
      'Have drawings? Just reply to this email with STEP, DWG, DXF or PDF files.',
      '',
      '--- Your inquiry (for your records) ---',
      details,
      '',
      'Best regards,',
      'ArcTung Sales Engineering',
      'sales@arctung.com · https://arctung.com'
    ];
    const ackHtml = `
      <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#26221d">
        <p>Hello,</p>
        <p>Thank you — your RFQ from <b>${escapeHtml(company)}</b> has landed on our engineering desk.</p>
        <p><b>What happens next:</b></p>
        <ol>
          <li>We review your alloy, dimensions and quantity.</li>
          <li>You receive a firm quote within <b>24 hours</b> (Mon&ndash;Fri, UTC+8).</li>
          <li>Quotes are held for <b>7 days</b> (tungsten pricing follows the market).</li>
        </ol>
        <p>Have drawings? Just reply to this email with STEP, DWG, DXF or PDF files.</p>
        <p style="border-left:3px solid #cf7136;padding-left:12px;color:#555;white-space:pre-wrap">${escapeHtml(details)}</p>
        <p>Best regards,<br><b>ArcTung Sales Engineering</b><br>
        <a href="mailto:sales@arctung.com">sales@arctung.com</a> · <a href="https://arctung.com">arctung.com</a></p>
      </div>
    `;
    const ack = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'ArcTung <inquiry@arctung.com>',
        to: [email],
        reply_to: 'sales@arctung.com',
        subject: 'Your RFQ is in — quote within 24 hours | ArcTung',
        text: ackText.join('\n'),
        html: ackHtml
      })
    });
    if (!ack.ok) {
      console.error('Auto-reply failed', ack.status, await ack.text());
    }
  } catch (err) {
    console.error('Auto-reply error', err);
  }

  return Response.json({ ok: true });
};

export const onRequest = () => new Response('Method Not Allowed', { status: 405 });
