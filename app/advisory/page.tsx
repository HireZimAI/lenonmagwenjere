import type { Metadata } from 'next';
import { Eyebrow, Rule, Section, PageTitle } from '@/components/Primitives';
import InquiryForm from '@/components/InquiryForm';
import { practices, audiences, problems, process, formats } from '@/data/advisory';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Advisory',
  description:
    'AI strategy, AI governance, operating models, and cross-border expansion advisory for founders, executive teams, and boards.',
  alternates: { canonical: '/advisory' },
};

export default function Advisory() {
  return (
    <>
      <PageTitle
        eyebrow="Advisory"
        title="Strategy for leaders building through change."
        intro="I work with a small number of organisations at a time, on decisions that are too consequential to delegate. Most engagements start with a diagnosis, not a proposal."
      />

      {/* ── The problems, in their own words ───────────────────── */}
      <Section>
        <Eyebrow>If any of this sounds familiar</Eyebrow>
        <ul className="mt-10 max-w-4xl">
          <Rule />
          {problems.map((p) => (
            <li key={p}>
              <p className="py-6 font-display text-2xl leading-snug text-ink md:text-3xl">
                &ldquo;{p}&rdquo;
              </p>
              <Rule />
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
          These are the sentences that usually open a first call. None of them is a technology problem.
          Each one is a decision-making problem that technology has made urgent.
        </p>
      </Section>

      {/* ── Practices ──────────────────────────────────────────── */}
      <Section dark className="border-t border-ink">
        <Eyebrow className="text-bronze-light">Where I work</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl leading-[1.06] md:text-5xl">Six areas of practice.</h2>
        <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => (
            <div key={p.title} className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/60">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Process ────────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <Eyebrow>How an engagement runs</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.08] md:text-5xl">Five stages, in order.</h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
              The sequence matters more than the labels. Most failed transformation work skips straight
              to design because diagnosis is uncomfortable.
            </p>
          </div>
          {/* Numbered because this is a real sequence — order carries information. */}
          <ol className="space-y-0">
            <Rule />
            {process.map((s, i) => (
              <li key={s.step}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-6 py-7">
                  <span className="font-display text-2xl leading-none text-bronze">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{s.step}</h3>
                    <p className="mt-2 max-w-measure text-[0.9375rem] leading-relaxed text-stone">
                      {s.body}
                    </p>
                  </div>
                </div>
                <Rule />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── Who / formats ──────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Who I work with</Eyebrow>
            <ul className="mt-8 space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex gap-3 text-[1.0625rem] text-ink-soft">
                  <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-bronze" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Engagement formats</Eyebrow>
            <ul className="mt-8 space-y-3">
              {formats.map((f) => (
                <li key={f} className="flex gap-3 text-[1.0625rem] text-ink-soft">
                  <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-bronze" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-measure text-[0.9375rem] leading-relaxed text-stone">
              Fees depend on scope, duration, and how much implementation support you want. I will give
              you a number on the first call rather than after three.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Inquiry ────────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <Eyebrow>Enquire</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.08] md:text-5xl">Discuss an engagement.</h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
              If you already know you want to talk, book the call. If you would rather set out the
              problem in writing first, use the form &mdash; the more specific the first message, the
              more useful the first call.
            </p>
            <p className="mt-8">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-ink px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-bronze"
              >
                Book a Call
              </a>
            </p>
          </div>
          <div>
            <InquiryForm defaultType="Consulting or advisory" />
          </div>
        </div>
      </Section>
    </>
  );
}
