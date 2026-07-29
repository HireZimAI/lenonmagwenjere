/**
 * Enquiry handling, written once and used by both deployment targets:
 *
 *   - Cloudflare Pages  -> functions/api/enquiry.ts
 *   - Cloudflare Workers -> worker/index.ts
 *
 * Keeping the logic here means the two entry points cannot drift apart. Neither
 * imports anything runtime-specific; this is plain fetch API.
 */

export interface EnquiryEnv {
  GHL_WEBHOOK_URL?: string;
  NOTIFY_EMAIL?: string;
  RESEND_API_KEY?: string;
  RESEND_FROM?: string;
}

const MAX_FIELD = 5000;
const ALLOWED = [
  'name',
  'organization',
  'email',
  'phone',
  'type',
  'description',
  'timeline',
  'budget',
  'source',
];

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function handleEnquiry(request: Request, env: EnquiryEnv): Promise<Response> {
  if (request.method !== 'POST') return json({ ok: false, error: 'POST only.' }, 405);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'Malformed request.' }, 400);
  }

  // Honeypot. A real person never fills a field they cannot see. Return 200 so a
  // bot cannot tell rejection from success.
  if (typeof body._confirm === 'string' && body._confirm.trim() !== '') {
    return json({ ok: true });
  }

  const clean: Record<string, string> = {};
  for (const key of ALLOWED) {
    const value = body[key];
    if (typeof value === 'string' && value.trim()) {
      clean[key] = value.trim().slice(0, MAX_FIELD);
    }
  }

  if (!clean.name || !clean.email || !clean.description) {
    return json({ ok: false, error: 'Name, email, and a message are required.' }, 422);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean.email)) {
    return json({ ok: false, error: 'That email address does not look right.' }, 422);
  }

  clean.source = clean.source || 'lenonmagwenjere.com';
  clean.receivedAt = new Date().toISOString();

  if (!env.GHL_WEBHOOK_URL) {
    console.error('GHL_WEBHOOK_URL is not set — enquiry received but not delivered.');
    return json({ ok: false, error: 'The form is not connected yet.' }, 500);
  }

  try {
    const res = await fetch(env.GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clean),
    });
    if (!res.ok) {
      console.error('CRM webhook rejected the enquiry', res.status, await res.text());
      return json({ ok: false, error: 'Could not deliver that. Please email instead.' }, 502);
    }
  } catch (err) {
    console.error('CRM webhook unreachable', err);
    return json({ ok: false, error: 'Could not deliver that. Please email instead.' }, 502);
  }

  // Optional email copy. Best-effort: a mail failure must never tell the visitor
  // their enquiry was lost when the CRM already has it.
  if (env.NOTIFY_EMAIL && env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.RESEND_FROM ?? 'site@lenonmagwenjere.com',
          to: env.NOTIFY_EMAIL,
          reply_to: clean.email,
          subject: `Enquiry — ${clean.type ?? 'General'} — ${clean.name}`,
          text: Object.entries(clean)
            .map(([k, v]) => `${k}: ${v}`)
            .join('\n'),
        }),
      });
    } catch (err) {
      console.error('Notification email failed; CRM delivery already succeeded', err);
    }
  }

  return json({ ok: true });
}
