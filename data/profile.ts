export const speakingTopics = [
  {
    title: 'Governing the AI Machine',
    body: 'What a board is actually accountable for once AI is inside the operating model — and the four disciplines that make that accountability workable.',
    audience: 'Boards, executive teams, risk and compliance leaders',
  },
  {
    title: 'Responsible AI Beyond the Hype',
    body: 'Separating the genuinely transformative from the well-marketed, and what responsible adoption costs in practice.',
    audience: 'Executive audiences, industry conferences',
  },
  {
    title: 'AI for Nontechnical Business Leaders',
    body: 'A plain-language working model of what these systems do, where they fail, and how to make decisions about them without pretending to be an engineer.',
    audience: 'Leadership teams, associations, member communities',
  },
  {
    title: 'From Experimentation to Enterprise AI',
    body: 'Why pilots stall, and what has to change structurally for AI work to reach production and stay there.',
    audience: 'Operators, transformation leads',
  },
  {
    title: 'Building Businesses Across Borders',
    body: 'Running delivery in one hemisphere and clients in another: the operational reality of distributed companies.',
    audience: 'Founders, agency owners, entrepreneurship events',
  },
  {
    title: 'The Future of African Talent and BPO',
    body: 'The case for African capability in global services, and the infrastructure the continent still has to build to claim it.',
    audience: 'BPO industry, economic development, investors',
  },
  {
    title: 'Risk Management as an Innovation Advantage',
    body: 'How a risk discipline, properly applied, lets an organisation take bigger bets rather than smaller ones.',
    audience: 'Financial services, regulated industries, boards',
  },
  {
    title: 'Turning Ideas into Executable Systems',
    body: 'The unglamorous work between a good idea and a functioning business, and why most ideas die in that gap.',
    audience: 'Founders, incubators, entrepreneurship programmes',
  },
  {
    title: 'Teaching AI Ethics to People Who Write No Code',
    body: 'Drawn from the graduate course Lenon teaches: how to reason about accountability, consent, and harm in AI systems without a technical vocabulary \u2014 and why that is the only version of AI ethics that reaches the people who make the decisions.',
    audience: 'Boards, non-technical leadership teams, educators, mission-driven organisations',
  },
  {
    title: 'Leadership, Faith, and Purpose',
    body: 'What it means to build something commercially serious while answering to a longer definition of success.',
    audience: 'Faith-based leadership events, church and ministry teams',
  },
];

export const speakingFormats = [
  'Keynote',
  'Conference panel',
  'Podcast guest',
  'Half or full-day workshop',
  'Executive or board session',
  'Leadership and faith-based events',
];

/**
 * Employment history. Dates taken from Lenon's LinkedIn profile export, July 2026.
 * Two entries carry FLAGS — see notes. Everything else is verified.
 */
export type Post = { period: string; org: string; role: string; place?: string; note?: string };

export const timeline: Post[] = [
  {
    period: 'Feb 2024 — present',
    org: 'HireZim AI',
    role: 'Co-Founder & Managing Director',
    place: 'Houston, Texas',
  },
  {
    period: 'Oct 2017 — present',
    org: 'ASAP Travel Africa',
    role: 'Founder & Chairman',
    place: 'Zimbabwe & South Africa',
  },
  {
    period: 'Feb 2019 — Feb 2025',
    org: 'Virtual Pro Solutions',
    role: 'Senior Consultant, then Lead Business Consultant',
    place: 'Harare, then Houston',
    note: 'International risk, IP regulation and structure for multinational clients.',
  },
  {
    period: 'Sep 2017 — Aug 2022',
    org: 'Zimnat',
    role: 'Special Channels Manager, then Bancassurance & Alternative Distribution Manager',
    place: 'Harare',
    note: 'Built the risk framework governing every strategic alliance, and ran distribution partnerships with banks, brokers, and manufacturers.',
  },
  {
    period: 'Mar 2015 — Aug 2017',
    org: 'Standard Chartered Bank',
    role: 'Wealth Management Specialist',
    place: 'Harare',
    note: 'Business insurance placement and renewals for banking clients; coverage, limits, and retention recommendations.',
  },
  {
    period: 'Apr 2014 — Feb 2015',
    org: 'Old Mutual',
    role: 'Financial Advisor',
    place: 'Harare',
  },
  {
    period: 'Feb 2013 — Feb 2014',
    org: 'Hereford Group',
    role: 'Risk Compliance Officer',
    place: 'Johannesburg',
    note: 'Client onboarding compliance, internal controls, and risk reviews.',
  },
  {
    period: 'Apr 2012 — Feb 2014',
    org: 'Liberty Group South Africa',
    role: 'Financial Advisor',
    place: 'Johannesburg',
    // FLAG: this overlaps Hereford Group by a full twelve months, both in Johannesburg.
    // Either the dates need correcting or one was concurrent — decide before launch,
    // because a reader checking the timeline will notice.
  },
  {
    period: '2009 — 2011',
    org: 'Absa',
    role: 'Team Leader, Absa Broker Academy',
    place: 'Pretoria',
    note: 'First cohort of the Absa Broker Academy, training advisers for Absa Life.',
    // FLAG: LinkedIn reports 2 yrs 11 mos total at Absa, but the two entries span
    // roughly three years and eight months. Year-only dates are the likely cause.
  },
  {
    period: 'Mar 2008 — Sep 2009',
    org: 'Absa',
    role: 'Intern',
    place: 'Johannesburg',
  },
];

export const currentRoles = [
  {
    role: 'Managing Director & Co-founder',
    org: 'HireZim AI',
  },
  {
    role: 'Founder & Chairman',
    org: 'Veneka Group',
  },
  {
    role: 'Executive Board Member',
    org: 'Zimbabwe BPO Council',
    note: 'Since April 2025. Contributing AI and governance expertise to the industry body.',
  },
  {
    role: 'Host',
    org: "The Builder's Handbook",
  },
  {
    role: 'Lecturer, AI Ethics',
    org: 'NOLA College',
    note: 'Teaching AI ethics to graduate theology students.',
  },
];

export const values = [
  {
    title: 'Build, then talk',
    body: 'Every framework on this site came out of running something, not out of a slide deck.',
  },
  {
    title: 'Risk is a tool',
    body: 'Fourteen years inside financial institutions taught a specific discipline: you take bigger bets when you can see them clearly.',
  },
  {
    title: 'Africa is a supply side, not a cause',
    body: 'The argument for African talent is a commercial one. It does not need charity framing to hold.',
  },
  {
    title: 'Answerable',
    body: 'Lenon is a Christian leader and Bible teacher. It shapes how he treats people, what he agrees to build, and what he declines.',
  },
];

/**
 * The MPhil is a research master\u2019s, so there is a dissertation behind it.
 * The dissertation title and research question are a stronger credibility asset
 * than the degree name on its own, particularly for a speaker selling a
 * framework. Add them here once retrieved.
 */
export type Qualification = {
  award: string;
  institution: string;
  /**
   * 'awarded' or 'in-progress'. This field is not optional on purpose: an
   * in-progress qualification must never render as a held one. Misstating a
   * completed degree is a misrepresentation, not a rounding error.
   */
  status: 'awarded' | 'in-progress';
  expected?: string;
  note?: string;
};

export const education: Qualification[] = [
  {
    award: 'Bachelor\u2019s degree in Risk Management',
    institution: 'University of South Africa (UNISA)',
    status: 'awarded',
    note: '[CONFIRM EXACT AWARD TITLE AND YEARS from the certificate — a third-party register lists it as a BCom, 2007\u20132012.]',
  },
  {
    // Title confirmed by Lenon, July 2026. SAQA ID 86806.
    // NOT YET AWARDED — studies ongoing as of July 2026.
    // Never render as "International Marketing" (no such IMM award exists) and
    // never render without the in-progress label.
    award: 'Master of Philosophy (MPhil) in Marketing',
    institution: 'IMM Graduate School',
    status: 'in-progress',
    expected: '[ADD EXPECTED COMPLETION YEAR]',
  },
];

export const credentials = [
  'Fourteen years in financial services across South Africa and Zimbabwe, 2008\u20132022 \u2014 banking, insurance, wealth management, and enterprise risk',
  'Co-author, Governing the AI Machine',
  'Author, From Africa to Everywhere',
];

/**
 * Teaching and formation. Held separately from `education` on purpose.
 *
 * The lectureship is the strongest item here and the most under-used fact in
 * Lenon's whole public record: he teaches AI ethics to graduate students who
 * carry moral responsibility and have no technical background. That is a
 * checkable proof of the exact claim Governing the AI Machine makes.
 *
 * Framing rule: lead with the teaching, not the seminary. A corporate buyer
 * skimming this page should read "he teaches AI ethics at graduate level",
 * not "he is a pastor who is interested in AI".
 */
export type Teaching = { role: string; org: string; body: string; buildNote?: string };

export const teaching: Teaching[] = [
  {
    role: 'Lecturer, AI Ethics',
    org: 'NOLA College',
    body:
      'Designed and delivers an AI ethics course for graduate theology students \u2014 people who will carry moral responsibility for decisions made with tools they did not build. It is the hardest audience to teach this to, and the best test of whether the material actually works.',
  },
  {
    role: 'Advanced course in Transformational Leadership',
    org: 'NOLA College',
    // buildNote fields are shown in dev only; `body` is what a visitor reads.
    body: 'Formal study in transformational leadership alongside the teaching work.',
    buildNote: 'Confirm exact certificate wording and year before launch.',
  },
  {
    role: 'Senior Program Coordinator',
    org: 'The Empower Circle',
    body: 'Part-time since March 2017.',
  },
  {
    role: 'Bible teacher',
    org: 'Local church, Houston',
    body: 'Regular teaching ministry alongside the commercial work.',
  },
];
