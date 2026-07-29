export const site = {
  name: 'Lenon Magwenjere',
  domain: 'lenonmagwenjere.com',
  url: 'https://lenonmagwenjere.com',
  roles: ['Entrepreneur', 'Strategic Advisor', 'Author', 'Builder'],
  creditStrip: 'Entrepreneur · Strategic Advisor · Author · Podcast Host · AI Governance Advocate',
  tagline: 'Building businesses, systems, and ideas that create meaningful impact.',
  // Kept in sync with `positioning` in data/story.ts — this is the meta-description
  // and JSON-LD version of the same claim.
  shortBio:
    'Lenon Magwenjere is an entrepreneur, strategic advisor, and author who combines four capabilities rarely found together: identifying opportunity, developing business, managing risk, and building the systems required to execute. He builds and advises companies across the United States and Africa.',
  /**
   * Same-origin endpoint handled by functions/api/enquiry.ts, which forwards to
   * the CRM server-side. No CORS problem, and the webhook URL stays secret.
   * Override only if you replace the Pages Function with a third-party service.
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '/api/enquiry',
  // Used for speaking, podcast, and media enquiries, where a long form loses inbound.
  directEmail: 'lenon@lenonmagwenjere.com',

  /**
   * Booking calendar for high-intent advisory conversations.
   *
   * Currently a GoHighLevel calendar behind a hirezim.ai path, which redirects to
   * api.leadconnectorhq.com — so the visitor's URL bar leaves this brand twice in
   * one click.
   *
   * Recommended fix: point `call.lenonmagwenjere.com` at GoHighLevel as a custom
   * domain and use that here. Cloudflare Pages holds the apex, GHL holds the
   * subdomain, nothing collides. Then update this one line.
   */
  bookingUrl: 'https://hirezim.ai/callwithlenon',
} as const;

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Advisory', href: '/advisory' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Books', href: '/books' },
] as const;

export const social = [
  { label: 'LinkedIn', href: '#', note: '[ADD SOCIAL PROFILE URL]' },
  { label: 'YouTube', href: '#', note: '[ADD SOCIAL PROFILE URL]' },
  { label: 'Instagram', href: '#', note: '[ADD SOCIAL PROFILE URL]' },
  { label: 'X', href: '#', note: '[ADD SOCIAL PROFILE URL — omit if unused]' },
] as const;

export const externalSites = {
  hirezim: 'https://hirezim.ai',
  book: 'https://www.governingtheaimachine.com',
  amazon: 'https://www.amazon.com/dp/B0H45TN11K',
  handbook: 'https://www.thebuildershandbook.com',
  asap: 'https://www.asaptravelafrica.com',
} as const;
