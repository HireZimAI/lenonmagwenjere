/**
 * All narrative copy lives here so it can be revised without touching components.
 * These three blocks must stay consistent with each other - they are the same
 * argument at three lengths.
 */

/**
 * Concise professional biography. Third person, because this is the block that
 * gets lifted for event programmes, press, and podcast intros. It also does the
 * work of putting the thesis in the first forty words of the About page, ahead
 * of the career history.
 */
export const positioning =
  'Lenon brings together four capabilities that are rarely found in one person: the ability to identify opportunity, sell and develop business, evaluate and manage risk, and build the systems required to execute.';

/** Homepage introduction. First person, short. */
export const homeIntro = [
  'I began my career helping institutions and clients grow while managing the risks that came with that growth. Today, I apply that same combination of commercial instinct, strategic discipline, and risk awareness to building companies, advising leaders, and implementing technology.',
  'Most of the work is unglamorous - deciding what to stop doing, naming who owns what, and getting a plan to survive contact with a calendar.',
];

/** The long story. First person. Rendered on /about. */
export const aboutStory = [
  'I started my career at the intersection of growth and risk.',
  'Across banking, insurance, and wealth management - with institutions including Standard Chartered, Absa, Liberty Group, and Zimnat Life Assurance - I worked in business development, client advisory, risk management, and portfolio advice.',
  'My job was not simply to identify what could go wrong. I had to understand what clients and institutions wanted to achieve, help develop the commercial opportunity, advise them on the right financial or strategic path, and ensure that growth did not expose them to risks they could not manage.',
  'That meant I had to sell, build relationships, develop new business, advise decision-makers, and manage the risk register at the same time.',
  'It is a particular kind of professional training. You learn to question confident forecasts, test the assumptions behind a plan, ask who owns each decision, and recognise the difference between a control that exists on paper and one that actually works. But you also learn that managing risk is not about preventing action - it is about helping people pursue opportunity with greater clarity and discipline.',
  'Those experiences still shape how I build today. I naturally look at both sides of a decision: the opportunity it creates and the exposure it introduces.',
  'Eventually, advising and analysing were no longer enough. I wanted to be the person building the opportunity, making the decision, and carrying the consequences - not only the person assessing it. So I moved from advising businesses to building them.',
  'What followed was not a straight line.',
  'Today I lead a group of companies spanning AI implementation, travel and mobility, media and thought leadership, and venture development. Each business has taught me something the previous one could not - often through ideas that did not work the first time.',
  'The 3DX methodology we use at HireZim AI - Diagnose, Design, Deploy, Execute - exists because we lost money learning what happens when you deploy before you diagnose.',
];

/**
 * Closing paragraph, held separately because it restates the positioning
 * statement at the top of the same page. Set `showClosing` to false on /about
 * if the repetition reads as padding once you see it in place.
 */
export const aboutClosing =
  'That is the perspective I bring to every business, advisory engagement, and partnership: the commercial instinct to recognise opportunity, the strategic discipline to develop it, the risk awareness to protect it, and the operational experience to turn it into something real.';

export const showClosing = true;

/** Faith paragraph - kept distinct so its placement can be moved or removed cleanly. */
export const faithNote =
  'I am a Christian, a Bible teacher, and I serve in my local church in Houston. It is not a brand position. It is the reason I care what a business does to the people inside it, and the reason I have turned down work I could have taken.';
