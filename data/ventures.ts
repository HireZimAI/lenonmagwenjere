import { externalSites } from './site';

export type Venture = {
  slug: string;
  name: string;
  role: string;
  line: string;
  body: string;
  detail?: string[];
  href: string;
  /** 'lead' ventures appear on the homepage. 'portfolio' ventures live on /ventures only. */
  weight: 'lead' | 'portfolio';
};

export const ventures: Venture[] = [
  {
    slug: 'hirezim-ai',
    name: 'HireZim AI',
    role: 'Managing Director & Co-founder',
    line: 'AI implementation and digital transformation',
    body:
      'HireZim AI helps organisations move from AI curiosity to AI in production. The company diagnoses where the real opportunity sits, designs a solution that fits the business, deploys it, and then stays close enough to make sure it is actually used.',
    detail: [
      'Delivered through multidisciplinary PODs rather than individual contractors, so a client gets a functioning department instead of a freelancer.',
      'Structured around the 3DX methodology: Diagnose, Design, Deploy, Execute.',
      'Work spans AI agents, business automation, operational systems, and AI-enabled service delivery.',
    ],
    href: externalSites.hirezim,
    weight: 'lead',
  },
  {
    slug: 'veneka-group',
    name: 'Veneka Group',
    role: 'Founder',
    line: 'Holding and venture-building platform',
    body:
      'The entity through which Lenon develops, holds, and invests in businesses and ideas intended to carry both commercial and social weight over a long horizon.',
    href: '#',
    weight: 'lead',
  },
  {
    slug: 'builders-handbook',
    name: "The Builder's Handbook",
    role: 'Founder & Host',
    line: 'Media and thought-leadership platform',
    body:
      'A business and leadership forum built on ideas, insights, and impact — conversations with the people building companies, organisations, communities, and institutions, and the practical lessons underneath them.',
    href: externalSites.handbook,
    weight: 'lead',
  },
  {
    slug: 'asap-travel-africa',
    name: 'ASAP Travel Africa',
    role: 'Founder',
    line: 'Travel and mobility',
    body:
      'Dependable African travel: vehicle rental, airport transfers, and curated travel packages for visitors and returning diaspora who need the logistics to simply work.',
    href: externalSites.asap,
    weight: 'portfolio',
  },
];

export const leadVentures = ventures.filter((v) => v.weight === 'lead');
