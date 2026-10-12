import type { Metadata } from 'next';
import { Eyebrow, Plate, Section, PageTitle, ButtonPrimary, ButtonGhost } from '@/components/Primitives';
import CTA from '@/components/CTA';
import { books, gameFramework } from '@/data/books';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Books',
  description:
    'Books by Lenon Magwenjere: The AI Bridge, Governing the AI Machine, and From Africa to Everywhere. AI literacy, governance, and entrepreneurship.',
  alternates: { canonical: '/books' },
};

const bookSchema = {
  '@context': 'https://schema.org',
  '@graph': books.map(book => ({
    '@type': 'Book', name: book.title, description: book.blurb,
    author: book.authors.split(' & ').map(name => ({ '@type': 'Person', name })),
    url: book.siteHref ?? `${site.url}/books/`,
    image: `${site.url}${book.cover}`,
    sameAs: book.buyHref,
  })),
};

export default function Books() {
  const [primary, second, bridge] = books;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />

      <PageTitle
        eyebrow="Books"
        title="Three books. Different starting points."
        intro="AI governance for the boardroom. AI confidence for everyday life. An entrepreneurial playbook for building beyond your starting point."
      />

      {/* The AI Bridge: draft addition, awaiting review */}
      <Section className="border-t border-edge">
        <div id="the-ai-bridge" className="grid gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="space-y-8">
            <Plate src={bridge.cover} alt="The AI Bridge book cover" label="" caption="Available now." ratio="aspect-[2/3]" />
            <div className="flex flex-col gap-4">
              <ButtonPrimary href={bridge.buyHref!} external>Buy on Amazon</ButtonPrimary>
              <ButtonGhost href={bridge.siteHref!} external>Explore the Book &amp; Resources</ButtonGhost>
            </div>
          </div>
          <div>
            <Eyebrow>AI literacy · Published</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.06] md:text-5xl">{bridge.title}</h2>
            <p className="mt-4 font-display text-xl italic text-stone">{bridge.subtitle}</p>
            <p className="eyebrow mt-4">{bridge.authors}</p>
            <div className="prose-editorial mt-8 max-w-measure">{bridge.body.map(p => <p key={p.slice(0,24)}>{p}</p>)}</div>
            <h3 className="mt-12 font-display text-3xl">A more confident start with AI</h3>
            <ul className="mt-6 space-y-3">{bridge.learn!.map(l => <li key={l} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-soft"><span aria-hidden="true" className="mt-3.5 h-px w-5 shrink-0 bg-bronze" />{l}</li>)}</ul>
            <p className="mt-8 max-w-measure text-[0.9375rem] leading-relaxed text-stone">Prefer to listen or learn by doing? The book site also has an AI-narrated audiobook, a free starter course, and group masterclass enquiries.</p>
          </div>
        </div>
      </Section>

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
        eyebrow="Read and learn together"
        title="Bring the books to your group."
        body="Board reading programmes, AI-literacy masterclasses, or books for your team. Tell me who the group is, what you want to achieve, and your timeline."
        primary={{ href: '/contact', label: 'Enquire About Bulk Orders' }}
        secondary={{ href: '/speaking', label: 'Explore Speaking & Workshops' }}
      />
    </>
  );
}
