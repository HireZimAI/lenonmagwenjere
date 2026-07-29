import type { Metadata } from 'next';
import { Eyebrow, Rule, Plate, Section, PageTitle } from '@/components/Primitives';
import InquiryForm from '@/components/InquiryForm';
import AmbientClip from '@/components/AmbientClip';
import BuildNote from '@/components/BuildNote';
import { ambientLoop, showreel } from '@/data/media';
import { speakingTopics, speakingFormats } from '@/data/profile';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Keynotes, panels, and workshops on AI governance, responsible AI adoption, cross-border business, risk, and leadership.',
  alternates: { canonical: '/speaking' },
};

export default function Speaking() {
  return (
    <>
      <PageTitle
        eyebrow="Speaking"
        title="Talks for rooms that have to decide something."
        intro="Boards approving AI investments, executive teams choosing where to start, founders working out whether to build across borders. Ten topics, all drawn from work I am currently doing."
      />

      {/* ── Assets strip ───────────────────────────────────────── */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          <Plate
            src="/speaking-lectern.jpg"
            alt="Lenon Magwenjere speaking from a lectern"
            label=""
            caption="Speaking to a live audience."
            ratio="aspect-[4/3]"
          />
          <Plate
            src="/speaking-stage.jpg"
            alt="Lenon Magwenjere presenting on stage"
            label=""
            caption="On stage, no lectern."
            ratio="aspect-[4/3]"
          />
        </div>

        {/* Vertical clip gets its own band rather than being crushed into a
            landscape tile. Silent by nature, so it is framed as atmosphere. */}
        <div className="mt-20 grid items-center gap-12 md:grid-cols-[320px_1fr] md:gap-20">
          {ambientLoop.enabled && (
            <figure>
              <div className="overflow-hidden border border-edge bg-paper-dim">
                <AmbientClip
                  src={ambientLoop.src}
                  poster={ambientLoop.poster}
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
              <figcaption className="caption">{ambientLoop.caption}</figcaption>
            </figure>
          )}

          <div>
            <Eyebrow>In the room</Eyebrow>
            <p className="mt-6 max-w-measure font-display text-3xl leading-snug md:text-4xl">
              I write talks for the decision the audience has to make when they leave, not for
              the applause at the end.
            </p>
            {showreel.youtubeId ? (
              <div className="mt-10 aspect-video w-full max-w-2xl overflow-hidden border border-edge">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${showreel.youtubeId}`}
                  title="Lenon Magwenjere speaking showreel"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <p className="mt-10">
                <BuildNote>
                  Add showreel &mdash; 60&ndash;90s with audio, hosted on YouTube; set youtubeId in
                  data/media.ts
                </BuildNote>
              </p>
            )}
          </div>
        </div>

        <p className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-3">
          <BuildNote>Add speaker sheet PDF</BuildNote>
          <BuildNote>Add previous appearances once confirmed</BuildNote>
          <BuildNote>Add testimonial</BuildNote>
          <BuildNote>Replace stage photos with full-resolution originals</BuildNote>
        </p>
      </Section>

      {/* ── Topics ─────────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <Eyebrow>Topics</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl leading-[1.08] md:text-5xl">
          Ten talks, adapted to your room.
        </h2>
        <div className="mt-14">
          <Rule />
          {speakingTopics.map((t) => (
            <article key={t.title}>
              <div className="grid gap-3 py-8 md:grid-cols-[1.1fr_1.4fr_0.8fr] md:gap-12">
                <h3 className="font-display text-2xl leading-tight md:text-3xl">{t.title}</h3>
                <p className="text-[1.0625rem] leading-[1.7] text-ink-soft">{t.body}</p>
                <p className="text-[0.875rem] leading-relaxed text-stone md:text-right">{t.audience}</p>
              </div>
              <Rule />
            </article>
          ))}
        </div>
      </Section>

      {/* ── Formats ────────────────────────────────────────────── */}
      <Section dark className="border-t border-ink">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <Eyebrow className="text-bronze-light">Formats</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.06] md:text-5xl">
              From a twenty-minute keynote to a full day.
            </h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-paper/65">
              Talks are written for the audience in front of them. For board and executive sessions I ask
              for a short pre-call so the examples come from your industry rather than mine.
            </p>
          </div>
          <ul className="grid gap-y-4 self-center sm:grid-cols-2">
            {speakingFormats.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[1.0625rem] text-paper/85">
                <span aria-hidden="true" className="h-px w-5 bg-bronze-light" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Booking ────────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <Eyebrow>Booking</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.08] md:text-5xl">Invite Lenon to speak.</h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
              Four fields. If your date is inside three weeks, say so in the message and it gets looked
              at the same day.
            </p>
            <p className="mt-6 text-[0.9375rem] text-stone">
              Prefer email?{' '}
              <a href={`mailto:${site.directEmail}`} className="link-editorial">
                {site.directEmail}
              </a>
            </p>
          </div>
          <div>
            <InquiryForm variant="short" defaultType="Speaking" />
          </div>
        </div>
      </Section>
    </>
  );
}
