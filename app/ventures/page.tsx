import type { Metadata } from 'next';
import { Eyebrow, Section, PageTitle } from '@/components/Primitives';
import VentureTable from '@/components/VentureTable';
import CTA from '@/components/CTA';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'Veneka Group, HireZim AI, ASAP Travel Africa, and The Builder\u2019s Handbook — the companies Lenon Magwenjere builds and operates across the United States and Africa.',
  alternates: { canonical: '/ventures' },
};

export default function Ventures() {
  return (
    <>
      <PageTitle
        eyebrow="Ventures"
        title="Four companies, built for different reasons."
        intro="These are separate businesses with their own teams, clients, and economics. They are not a portfolio in the investor sense — each one exists because a problem needed an operator rather than an opinion."
      />

      <Section>
        <VentureTable items={ventures} expanded />
        <p className="mt-12 max-w-measure text-[0.9375rem] leading-relaxed text-stone">
          Veneka Group holds ASAP Travel Africa and The Builder&rsquo;s Handbook outright, and a
          co-founding stake in HireZim AI alongside Billy Sticker.
        </p>
      </Section>

      <Section dark className="border-t border-ink">
        <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <Eyebrow className="text-bronze-light">The connective tissue</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.06] md:text-5xl">
              Why an AI firm and a car rental company belong to the same person.
            </h2>
          </div>
          <div className="prose-editorial max-w-measure self-center">
            <p className="text-paper/70">
              A fair question, and one worth answering directly. These businesses share a supply side:
              African talent, African operations, and clients who are mostly not in Africa. Running a
              travel company in Harare taught me things about logistics, trust, and follow-through that
              I use every week in a business that deploys AI for agencies in Texas.
            </p>
            <p className="text-paper/70">
              The other thing they share is a method. Diagnose before designing, design before deploying,
              and stay accountable for execution after the invoice clears. That is what 3DX formalised,
              and it applies to a fleet as much as to a governance programme.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        eyebrow="Partnerships"
        title="Building something adjacent?"
        body="Venture opportunities, distribution partnerships, and joint work across African and global markets are all worth a conversation."
        primary={{ href: '/contact', label: 'Start a Conversation' }}
      />
    </>
  );
}
