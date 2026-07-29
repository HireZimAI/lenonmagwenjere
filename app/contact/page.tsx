import type { Metadata } from 'next';
import { Eyebrow, Section, PageTitle } from '@/components/Primitives';
import InquiryForm from '@/components/InquiryForm';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Advisory enquiries, speaking invitations, podcast guest requests, media, and partnership conversations with Lenon Magwenjere.',
  alternates: { canonical: '/contact' },
};

const routes = [
  { label: 'Consulting or advisory', note: 'Scope, timeline, and a fee range on the first call.' },
  { label: 'Speaking', note: 'Keynotes, panels, workshops, and executive sessions.' },
  { label: 'Podcast guest', note: 'Both directions — appearing on yours, or joining The Builder\u2019s Handbook.' },
  { label: 'Media', note: 'Commentary on AI governance, BPO, and cross-border business.' },
  { label: 'Partnership', note: 'Distribution, referral, and joint delivery arrangements.' },
  { label: 'Venture opportunity', note: 'Early-stage ideas, particularly African market entry.' },
];

export default function Contact() {
  return (
    <>
      <PageTitle
        eyebrow="Contact"
        title="Start here."
        intro="One form, six kinds of conversation. Pick the closest match and be specific in the message — it is the difference between a useful first call and a discovery call."
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <Eyebrow>What comes through here</Eyebrow>
            <ul className="mt-8 space-y-6">
              {routes.map((r) => (
                <li key={r.label} className="border-t border-edge pt-4">
                  <h2 className="font-display text-xl leading-tight">{r.label}</h2>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-stone">{r.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-edge pt-6">
              <Eyebrow>Already know you want to talk?</Eyebrow>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone">
                Skip the form and{' '}
                <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="link-editorial text-ink">
                  book a call directly
                </a>
                . Best for advisory and consulting conversations.
              </p>
            </div>

            <div className="mt-8 border-t border-edge pt-6">
              <Eyebrow>Direct</Eyebrow>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone">
                For time-sensitive speaking or media requests:{' '}
                <a href={`mailto:${site.directEmail}`} className="link-editorial text-ink">
                  {site.directEmail}
                </a>
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-stone">
                Based in Houston, Texas. Working across US, UK, Australian, Canadian, and Southern
                African time zones.
              </p>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
