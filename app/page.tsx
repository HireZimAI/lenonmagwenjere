import Link from 'next/link';
import { Eyebrow, Rule, Plate, Section, SectionHeader, ButtonPrimary, ButtonGhost } from '@/components/Primitives';
import VentureTable from '@/components/VentureTable';
import CTA from '@/components/CTA';
import { leadVentures } from '@/data/ventures';
import { practices } from '@/data/advisory';
import { books, gameFramework } from '@/data/books';
import { speakingFormats } from '@/data/profile';
import { site, externalSites } from '@/data/site';
import { homeIntro } from '@/data/story';
import BuildNote from '@/components/BuildNote';

const book = books[0];

/**
 * The four pillars stay on the homepage as an *index of practice* — a way to
 * orient a first-time visitor — but they are not site navigation. Each one
 * points at a page that has real content behind it.
 */
const index = [
  { label: 'Build', line: 'Companies across technology, media, and travel', href: '/ventures' },
  { label: 'Advise', line: 'Strategy, AI governance, and operating models', href: '/advisory' },
  { label: 'Think', line: 'Books and frameworks for leaders carrying the risk', href: '/books' },
  { label: 'Convene', line: "The Builder's Handbook", href: externalSites.handbook, external: true },
];

export default function Home() {
  return (
    <>
      {/* ── Title page ─────────────────────────────────────────── */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-wide px-6 pb-20 pt-20 md:pb-28 md:pt-32 lg:px-10">
          <Eyebrow className="rise">{site.roles.join(' · ')}</Eyebrow>

          <h1
            className="rise mt-8 max-w-5xl text-[2.75rem] leading-[1.04] sm:text-6xl md:text-8xl"
            style={{ animationDelay: '80ms' }}
          >
            I build businesses, systems, and ideas that move people forward.
          </h1>

          <div className="rise mt-12 grid gap-10 md:grid-cols-[1.1fr_1fr]" style={{ animationDelay: '180ms' }}>
            <p className="max-w-measure text-lg leading-[1.7] text-ink-soft">
              I&rsquo;m Lenon Magwenjere — an entrepreneur, strategic advisor, author, and podcast host
              working at the intersection of business, artificial intelligence, risk, leadership, and
              African opportunity.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row md:justify-end">
              <ButtonPrimary href={site.bookingUrl} external>
                Book a Call
              </ButtonPrimary>
              <ButtonGhost href="/ventures">Explore My Work</ButtonGhost>
            </div>
          </div>

          <p className="rise mt-8" style={{ animationDelay: '240ms' }}>
            <a
              href={externalSites.handbook}
              target="_blank"
              rel="noreferrer"
              className="link-editorial text-[0.9375rem] text-stone"
            >
              Watch The Builder&rsquo;s Handbook
            </a>
          </p>
        </div>
      </section>

      {/* ── Credibility strip ──────────────────────────────────── */}
      <div className="border-b border-edge bg-paper-dim">
        <div className="mx-auto max-w-wide px-6 py-5 lg:px-10">
          <p className="eyebrow text-center text-ink-soft">{site.creditStrip}</p>
        </div>
      </div>

      {/* ── Introduction ───────────────────────────────────────── */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <Plate
            src="/lenon-portrait.jpg"
            alt="Lenon Magwenjere"
            label=""
            caption="Houston, Texas."
            ratio="aspect-[4/5]"
          />
          <div>
            <Eyebrow>Introduction</Eyebrow>
            <div className="prose-editorial mt-6 max-w-measure">
              {homeIntro.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
              <p className="!text-ink">
                I am not an AI consultant. I run businesses that use AI, and I have had to answer for
                the consequences.
              </p>
            </div>
            <Link href="/about" className="eyebrow mt-8 inline-block text-bronze hover:text-ink">
              Read the longer story &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Index of practice ──────────────────────────────────── */}
      <Section className="border-t border-edge">
        <Eyebrow>Four kinds of work</Eyebrow>
        <div className="mt-10">
          <Rule />
          {index.map((row) =>
            row.external ? (
              <a key={row.label} href={row.href} target="_blank" rel="noreferrer" className="group block">
                <IndexRow label={row.label} line={row.line} />
                <Rule />
              </a>
            ) : (
              <Link key={row.label} href={row.href} className="group block">
                <IndexRow label={row.label} line={row.line} />
                <Rule />
              </Link>
            ),
          )}
        </div>
      </Section>

      {/* ── Ventures ───────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <SectionHeader
          eyebrow="Ventures"
          title="Separate companies. One thesis."
          intro="These are distinct businesses with their own teams and clients. What connects them is a preference for building the boring infrastructure that makes an ambitious idea survivable."
        />
        <div className="mt-14">
          <VentureTable items={leadVentures} />
        </div>
        <Link href="/ventures" className="eyebrow mt-10 inline-block text-bronze hover:text-ink">
          All ventures &rarr;
        </Link>
      </Section>

      {/* ── Advisory ───────────────────────────────────────────── */}
      <Section dark className="border-t border-ink">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <Eyebrow className="text-bronze-light">Advisory</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.06] md:text-5xl">
              Strategy for leaders building through change.
            </h2>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-paper/70">
              I work with founders, executives, and boards on the decisions that are too consequential
              to delegate and too unfamiliar to guess at — where AI belongs, what governance the board
              needs, and what has to change operationally before growth becomes a liability.
            </p>
            <div className="mt-10">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-paper px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze hover:text-paper"
              >
                Discuss an Engagement
              </a>
            </div>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {practices.map((p) => (
              <li key={p.title}>
                <h3 className="font-display text-2xl leading-tight text-paper">{p.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper/55">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Book ───────────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <Plate src={book.cover} alt="Governing the AI Machine cover" label="" caption="Governing the AI Machine." ratio="aspect-[2/3]" />
          <div>
            <Eyebrow>Book</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.06] md:text-5xl">{book.title}</h2>
            <p className="mt-4 font-display text-xl italic text-stone">{book.subtitle}</p>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
              {book.body[0]}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {gameFramework.map((g) => (
                <div key={g.letter} className="border-t border-edge pt-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-bronze">{g.letter}</span>
                    <h3 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em]">
                      {g.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-stone">{g.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonPrimary href={book.buyHref!} external>
                Order the Book
              </ButtonPrimary>
              <ButtonGhost href="/books">Both Books</ButtonGhost>
            </div>

            <div className="mt-10 border-t border-edge pt-6">
              <Eyebrow>Also published</Eyebrow>
              <p className="mt-3 max-w-measure text-[0.9375rem] leading-relaxed text-stone">
                <span className="font-display text-lg not-italic text-ink">
                  {books[1].title}: {books[1].subtitle}
                </span>{' '}
                — {books[1].blurb}{' '}
                <Link href="/books" className="link-editorial text-bronze">
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Podcast ────────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <Eyebrow>Podcast</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.06] md:text-5xl">
              The Builder&rsquo;s Handbook
            </h2>
            <p className="mt-4 font-display text-xl italic text-stone">Ideas. Insights. Impact.</p>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">
              Conversations with people building companies, organisations, communities, institutions, and
              movements — what they think, how they lead, what it cost them, and how an idea actually
              becomes something real.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonPrimary href={externalSites.handbook} external>
                Explore the Podcast
              </ButtonPrimary>
              <ButtonGhost href="/contact">Apply to be a Guest</ButtonGhost>
            </div>
            <p className="mt-8">
              <BuildNote>Add podcast platform links</BuildNote>
            </p>
          </div>
          <Plate
            label="[ADD LATEST EPISODE THUMBNAIL OR YOUTUBE EMBED]"
            caption="Latest episode."
            ratio="aspect-video"
          />
        </div>
      </Section>

      {/* ── Speaking ───────────────────────────────────────────── */}
      <Section className="border-t border-edge">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <Eyebrow>Speaking</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.06] md:text-5xl">
              Available for stages where the audience has to decide something.
            </h2>
            <div className="mt-10">
              <ButtonPrimary href="/speaking">Invite Lenon to Speak</ButtonPrimary>
            </div>
          </div>
          <ul className="grid gap-y-4 self-center sm:grid-cols-2">
            {speakingFormats.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[1.0625rem] text-ink-soft">
                <span aria-hidden="true" className="h-px w-5 bg-bronze" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA
        primary={{ href: '/contact', label: 'Get in Touch' }}
        secondary={{ href: site.bookingUrl, label: 'Or Book a Call' }}
      />
    </>
  );
}

function IndexRow({ label, line }: { label: string; line: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-7 transition-colors group-hover:text-bronze">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
        <span className="font-display text-3xl leading-none md:text-4xl">{label}</span>
        <span className="text-[0.9375rem] text-stone">{line}</span>
      </div>
      <span aria-hidden="true" className="eyebrow shrink-0 text-bronze">
        &rarr;
      </span>
    </div>
  );
}
