import { externalSites } from './site';

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  status: 'published' | 'forthcoming';
  authors: string;
  blurb: string;
  body: string[];
  learn?: string[];
  siteHref?: string;
  buyHref?: string;
  cover: string;
};

/**
 * G.A.M.E.™ — verified against governingtheaimachine.com.
 * Guardrails / Authority / Monitoring / Enablement.
 * The manuscript and the book site are the single source of truth. Earlier internal
 * documents using "Governance, Automation, Measurement, Enablement" are incorrect —
 * do not reintroduce that wording anywhere on this site.
 */
export const gameFramework = [
  {
    letter: 'G',
    name: 'Guardrails',
    body: 'The policies, structures, and oversight mechanisms that keep AI systems accountable at every level.',
  },
  {
    letter: 'A',
    name: 'Authority',
    body: 'Clear ownership, responsibility chains, and board-level reporting for every AI initiative.',
  },
  {
    letter: 'M',
    name: 'Monitoring',
    body: 'Risk processes that detect, assess, and mitigate AI-related threats before they escalate.',
  },
  {
    letter: 'E',
    name: 'Enablement',
    body: 'Governance as the foundation for competitive advantage, regulatory readiness, and institutional durability.',
  },
];

export const books: Book[] = [
  {
    slug: 'governing-the-ai-machine',
    title: 'Governing the AI Machine',
    subtitle: 'The G.A.M.E.™ Framework for Enterprise Risk and Board Accountability',
    status: 'published',
    authors: 'Lenon Magwenjere & Billy Sticker',
    blurb:
      'Most organisations are adopting AI without a coherent governance strategy. This book is the correction.',
    body: [
      'AI is reshaping every boardroom and every operating model, and most boards are being asked to approve things they cannot yet describe. Governing the AI Machine gives directors, executives, and risk leaders a structure for that conversation.',
      'It is written for the people who carry the accountability rather than the people who write the code — and it treats governance as the thing that lets an organisation move faster, not the thing that slows it down.',
    ],
    learn: [
      'How to build an enterprise-wide AI governance structure that holds up in practice',
      'What every board member needs to understand about AI risk and accountability',
      'How to align AI strategy with regulatory, ethical, and commercial objectives',
      'Practical tools for auditing, monitoring, and reporting on AI systems',
      'How to lead responsible AI adoption from the top down',
    ],
    siteHref: externalSites.book,
    buyHref: externalSites.amazon,
    cover: '/cover-governing.jpg',
  },
  {
    slug: 'from-africa-to-everywhere',
    title: 'From Africa to Everywhere',
    subtitle: 'Dreaming Beyond Limits — My Entrepreneurial Playbook',
    status: 'published',
    authors: 'Lenon Magwenjere',
    blurb:
      'The route from modest roots in Zimbabwe to businesses serving customers across Africa and the United States — including the failures that cost the most.',
    body: [
      'A memoir that works like a playbook. Lenon writes about the small risky steps, the stumbles that hurt, the quiet breakthroughs, and the faith that held when nothing else did.',
      'It is written for anyone building from a place the market underestimates: how to turn your own story into a commercial asset, how to recover from a failure large enough to end you, and what actually has to be true to build something that lasts in both local and global markets.',
    ],
    learn: [
      'How to turn your own story into your biggest business asset',
      'What is recoverable after a serious failure, and how the recovery works',
      'Building, scaling, and sustaining a purpose-driven business',
      'The mindset shifts that separate local operators from global ones',
    ],
    // Multiple ASINs exist across editions and marketplaces — this is the one Lenon supplied.
    // Tracking parameters stripped: they are session artefacts and should never ship in a link.
    buyHref: 'https://www.amazon.com/dp/B0FVNWWBYH',
    cover: '/cover-from-africa.jpg',
  },
];
