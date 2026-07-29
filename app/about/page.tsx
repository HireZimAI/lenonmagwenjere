import type { Metadata } from 'next';
import { Eyebrow, Rule, Plate, Section, PageTitle } from '@/components/Primitives';
import CTA from '@/components/CTA';
import BuildNote from '@/components/BuildNote';
import { timeline, currentRoles, values, credentials, education, teaching } from '@/data/profile';
import { positioning, aboutStory, aboutClosing, showClosing, faithNote } from '@/data/story';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lenon Magwenjere combines opportunity identification, business development, risk management, and systems execution — carried from financial services into building and advising companies across the United States and Africa.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      <PageTitle
        eyebrow="About"
        title="I didn&rsquo;t leave risk behind. I brought it with me."
        intro={positioning}
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr] md:gap-20">
          <div>
            <Eyebrow>The story</Eyebrow>
            <div className="prose-editorial mt-8 max-w-measure">
              {aboutStory.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
              {showClosing && <p className="!text-ink">{aboutClosing}</p>}
              <p>{faithNote}</p>
            </div>
          </div>

          <div className="space-y-12">
            <Plate
              src="/lenon-portrait.jpg"
              alt="Lenon Magwenjere"
              label=""
              caption="Houston, Texas."
              ratio="aspect-[4/5]"
            />
            <div>
              <Eyebrow>Education</Eyebrow>
              <ul className="mt-5 space-y-5">
                {education.map((e) => (
                  <li key={e.institution} className="border-t border-edge pt-4">
                    <p className="font-display text-lg leading-snug text-ink">{e.award}</p>
                    <p className="mt-1 text-[0.875rem] text-stone">{e.institution}</p>
                    {e.status === 'in-progress' && (
                      <p className="eyebrow mt-2 text-bronze">In progress</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow>Also</Eyebrow>
              <ul className="mt-5 space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <BuildNote>Add downloadable professional profile PDF</BuildNote>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <Eyebrow>Career</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.08] md:text-5xl">Where the training came from.</h2>
        <p className="mt-5 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
          Eighteen years of work, fourteen of them inside financial institutions in South Africa and
          Zimbabwe. Sales and advisory roles as often as risk ones — usually both at the same time.
        </p>
        <div className="mt-14">
          <Rule />
          {timeline.map((t) => (
            <div key={`${t.org}-${t.period}`}>
              <div className="grid gap-2 py-7 md:grid-cols-[11rem_1fr_1.1fr] md:gap-10">
                <p className="eyebrow md:pt-2">{t.period}</p>
                <div>
                  <h3 className="font-display text-2xl leading-tight md:text-3xl">{t.org}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-snug text-ink-soft">{t.role}</p>
                  {t.place && <p className="mt-1 text-[0.8125rem] text-stone">{t.place}</p>}
                </div>
                {t.note && (
                  <p className="text-[0.9375rem] leading-relaxed text-stone md:pt-2">{t.note}</p>
                )}
              </div>
              <Rule />
            </div>
          ))}
        </div>
      </Section>

      {/* ── Current roles ──────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <Eyebrow>Now</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.08] md:text-5xl">Current roles</h2>
          </div>
          <div>
          <Plate
            src="/industry-session.jpg"
            alt="An industry session convened by the Zimbabwe BPO Council"
            label=""
            caption="A Zimbabwe BPO Council industry session, Harare."
            ratio="aspect-[4/3]"
            className="mb-12"
          />
          <ul className="space-y-8">
            {currentRoles.map((r) => (
              <li key={r.org} className="border-t border-edge pt-5">
                <h3 className="font-display text-2xl leading-tight">{r.org}</h3>
                <p className="eyebrow mt-2">{r.role}</p>
                {r.note && (
                  <p className="mt-3 max-w-measure text-[0.9375rem] leading-relaxed text-stone">{r.note}</p>
                )}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </Section>

      {/* ── Teaching and formation ─────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <Eyebrow>Teaching</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.08] md:text-5xl">
              The material gets tested on the hardest audience.
            </h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
              If a framework for governing AI cannot be taught to people who carry moral
              responsibility but write no code, it is not a framework. It is jargon.
            </p>
          </div>
          <ul className="space-y-8">
            {teaching.map((t) => (
              <li key={`${t.org}-${t.role}`} className="border-t border-edge pt-5">
                <h3 className="font-display text-2xl leading-tight">{t.role}</h3>
                <p className="eyebrow mt-2">{t.org}</p>
                <p className="mt-3 max-w-measure text-[0.9375rem] leading-relaxed text-stone">
                  {t.body}
                </p>
                {t.buildNote && <BuildNote>{t.buildNote}</BuildNote>}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <Section dark className="border-t border-ink">
        <Eyebrow className="text-bronze-light">What I hold to</Eyebrow>
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="border-t border-paper/20 pt-6">
              <h3 className="font-display text-3xl leading-tight">{v.title}</h3>
              <p className="mt-3 max-w-measure text-[1.0625rem] leading-relaxed text-paper/60">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        eyebrow="Next"
        title="Let&rsquo;s talk about what you&rsquo;re building."
        body="Advisory enquiries, speaking invitations, podcast guests, and partnerships all start in the same place."
        primary={{ href: '/contact', label: 'Get in Touch' }}
      />
    </>
  );
}
