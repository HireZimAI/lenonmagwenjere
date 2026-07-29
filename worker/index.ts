/**
 * Cloudflare Workers entry point — used ONLY if this site is deployed as a
 * Worker with Static Assets rather than as a Pages project.
 *
 * Requests that match a file in ./out are served directly by the assets layer and
 * never reach this code. Everything else lands here, which in practice means
 * /api/enquiry and genuine 404s.
 *
 * If you deploy via Cloudflare Pages instead, this file and wrangler.jsonc are
 * inert — Pages uses functions/api/enquiry.ts. Both call the same handler in
 * lib/enquiry.ts, so behaviour is identical either way.
 */
import { handleEnquiry, type EnquiryEnv } from '../lib/enquiry';

interface Env extends EnquiryEnv {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/enquiry') {
      return handleEnquiry(request, env);
    }

    // Fall through to the static export in ./out
    return env.ASSETS.fetch(request);
  },
};
