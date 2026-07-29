import type { Metadata } from 'next';
import { Eyebrow, Plate, Section, PageTitle, ButtonPrimary, ButtonGhost } from '@/components/Primitives';
import CTA from '@/components/CTA';
import { books, gameFramework } from '@/data/books';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Books',
  description:
    'Governing the AI Machine — the G.A.M.E. framework for enterprise risk and board accountability — co-authored by Lenon Magwenjere and Billy Sticker.',
  alternates: { canonical: '/books' },
};

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Governing the AI Machine',
  author: [
    { '@type': 'Person', name: 'Lenon Magwenjere' },
    { '@type': 'Person', name: 'Billy Sticker' },
  ],
  about: 'AI governance, enterprise risk management, board accountability',
  url: `${site.url}/books/`,
};

export default function Books() {
  const [primary, second] = books;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />

      <PageTitle
        eyebrow="Books"
        title="Two books, two audiences."
        intro="One for the boardroom, written with Billy Sticker, about governing systems you did not build and cannot fully see. One written alone, about getting from a village in Zimbabwe to a business that serves two continents."
      />

      {/* ── Primary book ───────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="space-y-8">
            <Plate src={primary.cover} alt={`${primary.title} cover`} label="" caption="Available now." ratio="aspect-[2/3]" />
            <div className="flex flex-col gap-4">
              <ButtonPrimary href={primary.buyHref!} external>Order on Amazon</ButtonPrimary>
              <ButtonGhost href={primary.siteHref!} external>Book Site &amp; Bonus Kit</ButtonGhost>
            </div>
          </div>

          <div>
            <Eyebrow>Published</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.06] md:text-5xl">{primary.title}</h2>
            <p className="mt-4 font-display text-xl italic text-stone">{primary.subtitle}</p>
            <p className="eyebrow mt-4">{primary.authors}</p>

            <div className="prose-editorial mt-8 max-w-measure">
              {primary.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <h3 className="mt-14 font-display text-3xl">The G.A.M.E.&trade; framework</h3>
            <p className="mt-3 max-w-measure text-[0.9375rem] leading-relaxed text-stone">
              Four disciplines that sit above the standards rather than replacing them. The framework
              operationalises NIST AI RMF and ISO/IEC 42001 as something an executive team can actually
              run.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {gameFramework.map((g) => (
                <div key={g.letter} className="border-t border-edge pt-4">
                  <dt className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-bronze">{g.letter}</span>
                    <span className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em]">
                      {g.name}
                    </span>
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-stone">{g.body}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-14 font-display text-3xl">What you&rsquo;ll take from it</h3>
            <ul className="mt-6 space-y-3">
              {primary.learn!.map((l) => (
                <li key={l} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-3.5 h-px w-5 shrink-0 bg-bronze" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Second book ────────────────────────────────────────── */}
      <Section dark className="border-t border-ink">
        <div className="grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="space-y-8">
            <Plate src={second.cover} alt={`${second.title} cover`} label="" caption="Available now." ratio="aspect-[2/3]" />
            <a
              href={second.buyHref!}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-paper px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze hover:text-paper"
            >
              Order on Amazon
            </a>
          </div>

          <div>
            <Eyebrow className="text-bronze-light">Published</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.06] md:text-5xl">{second.title}</h2>
            <p className="mt-4 font-display text-xl italic text-paper/55">{second.subtitle}</p>
            <p className="eyebrow mt-4 text-paper/40">{second.authors}</p>

            <div className="mt-8 max-w-measure space-y-5">
              {second.body.map((p) => (
                <p key={p.slice(0, 24)} className="text-[1.0625rem] leading-[1.75] text-paper/70">
                  {p}
                </p>
              ))}
            </div>

            <h3 className="mt-12 font-display text-2xl">Inside</h3>
            <ul className="mt-5 space-y-3">
              {second.learn!.map((l) => (
                <li key={l} className="flex gap-3 text-[1.0625rem] leading-relaxed text-paper/70">
                  <span aria-hidden="true" className="mt-3.5 h-px w-5 shrink-0 bg-bronze-light" />
                  {l}
                </li>
              ))}
            </ul>

            <p className="mt-12 font-display text-2xl italic leading-snug text-paper/85">
              &ldquo;Your roots are your foundation, but they are not your ceiling.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      <CTA
        eyebrow="Bulk and corporate"
        title="Running this with your board?"
        body="Bulk orders, board reading programmes, and governance workshops built around the framework are all available. Tell me the size of the group and the timeline."
        primary={{ href: '/contact', label: 'Enquire About Bulk Orders' }}
        secondary={{ href: '/speaking', label: 'Book a Governance Workshop' }}
      />
    </>
  );
}
