/**
 * POST /api/enquiry — Cloudflare **Pages** Function.
 *
 * Pages serves the static export from `out/` and executes anything under
 * `functions/` as a Worker. No Next.js server involved.
 *
 * The logic lives in lib/enquiry.ts so this and worker/index.ts (the Workers
 * deployment path) cannot drift apart.
 *
 * Environment variables — Cloudflare Pages → Settings → Environment variables:
 *   GHL_WEBHOOK_URL   required. Inbound webhook URL from your GHL workflow.
 *   NOTIFY_EMAIL      optional. Also email a plain-text copy.
 *   RESEND_API_KEY    optional. Needed only if NOTIFY_EMAIL is set.
 *   RESEND_FROM       optional. A verified sender on your domain.
 *
 * None of these take a NEXT_PUBLIC_ prefix. That prefix would compile them into
 * the browser bundle.
 */
import { handleEnquiry, type EnquiryEnv } from '../../lib/enquiry';

export const onRequest = async (context: {
  request: Request;
  env: EnquiryEnv;
}): Promise<Response> => handleEnquiry(context.request, context.env);
