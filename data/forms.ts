/**
 * Form configuration. Everything about the enquiry forms that you might want to
 * change without opening a component lives here.
 */

/** Options in the "Type of inquiry" dropdown. Order is the order shown. */
export const inquiryTypes = [
  'Consulting or advisory',
  'Speaking',
  'Podcast guest inquiry',
  'Media',
  'Partnership',
  'Venture opportunity',
  'General inquiry',
];

export const timelines = [
  'Immediately',
  'Within a month',
  'This quarter',
  'Later this year',
  'Exploring',
];

export const budgets = [
  'Not sure yet',
  'Under $10k',
  '$10k–$25k',
  '$25k–$50k',
  '$50k+',
  'Prefer not to say',
];

/**
 * Which optional fields appear on the full form.
 *
 * `showBudget` is off by default, and that is a deliberate recommendation
 * rather than an oversight. A budget dropdown on a first-contact form does two
 * things you probably do not want:
 *
 *  1. It anchors the number before you have established value. A prospect who
 *     would have paid $40k after a good call will select "$10k–$25k" from a
 *     list because it looks like the safe answer.
 *  2. It filters out qualified buyers who genuinely do not know what board-level
 *     AI governance advisory costs — which is most of them, because they have
 *     never bought it before.
 *
 * The Advisory page already commits to giving a number on the first call. That
 * is the stronger position: you set the anchor, in context, with the scope in
 * front of you. Set this to true if you would rather screen harder at the top of
 * the funnel and accept fewer conversations.
 */
export const fields = {
  showTimeline: true,
  showBudget: false,
  showPhone: true,
};
