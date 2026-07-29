import { Rule } from './Primitives';
import BuildNote from './BuildNote';
import type { Venture } from '@/data/ventures';

/**
 * Ventures render as an index of holdings, not a grid of equal cards.
 * Equal cards make four businesses compete; a table gives them a hierarchy.
 */
export default function VentureTable({ items, expanded = false }: { items: Venture[]; expanded?: boolean }) {
  return (
    <div>
      <Rule />
      {items.map((v) => (
        <article key={v.slug}>
          <div className="grid gap-4 py-10 md:grid-cols-[1fr_1.6fr] md:gap-12">
            <div>
              <h3 className="font-display text-3xl leading-tight md:text-4xl">
                {v.href && v.href !== '#' ? (
                  <a href={v.href} target="_blank" rel="noreferrer" className="link-editorial">
                    {v.name}
                  </a>
                ) : (
                  v.name
                )}
              </h3>
              <p className="eyebrow mt-3">{v.role}</p>
              <p className="mt-1 text-sm text-stone">{v.line}</p>
            </div>
            <div>
              <p className="text-[1.0625rem] leading-[1.75] text-ink-soft">{v.body}</p>
              {expanded && v.detail && (
                <ul className="mt-6 space-y-3">
                  {v.detail.map((d) => (
                    <li key={d} className="flex gap-3 text-[0.9375rem] leading-relaxed text-stone">
                      <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-bronze" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
              {v.href && v.href !== '#' && (
                <a
                  href={v.href}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow mt-6 inline-block text-bronze transition-colors hover:text-ink"
                >
                  Visit &rarr;
                </a>
              )}
              {v.href === '#' && <BuildNote>Add site URL for {v.name}</BuildNote>}
            </div>
          </div>
          <Rule />
        </article>
      ))}
    </div>
  );
}
