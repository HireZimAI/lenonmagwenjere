import Link from 'next/link';
import { showBuildNotes } from '@/lib/flags';

/** Tracked-caps structural label. */
export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Hairline divider — the page's only divider vocabulary. */
export function Rule({ className = '' }: { className?: string }) {
  return <div className={`rule ${className}`} aria-hidden="true" />;
}

/**
 * Plate — the signature device. Every image slot is an editorial plate with a
 * caption, so an unshot photograph reads as a commissioned slot, not a gap.
 * Pass `src` once real photography exists; the caption stays either way.
 */
export function Plate({
  label,
  caption,
  ratio = 'aspect-[4/5]',
  src,
  alt,
  className = '',
}: {
  label: string;
  caption?: string;
  ratio?: string;
  src?: string;
  alt?: string;
  className?: string;
}) {
  // A `label` that is actually a path is treated as the image source, so book
  // covers and photos can be swapped in from a data file without code changes.
  const source = src ?? (label.startsWith('/') ? label : undefined);
  // No image and not in dev: omit the slot entirely rather than shipping a
  // labelled grey box. An absent plate reads as a design choice; a placeholder
  // reads as an unfinished site.
  if (!source && !showBuildNotes) return null;
  return (
    <figure className={className}>
      <div className={`plate ${ratio}`}>
        {source ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={source} alt={alt ?? ''} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span className="plate-label">{label}</span>
        )}
      </div>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      {(index || eyebrow) && (
        <div className="mb-5 flex items-baseline gap-4">
          {index && <span className="eyebrow text-bronze">{index}</span>}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <h2 className="text-4xl leading-[1.08] md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-measure text-[1.0625rem] leading-[1.75] text-ink-soft">{intro}</p>}
    </div>
  );
}

type ButtonProps = { href: string; children: React.ReactNode; external?: boolean };

export function ButtonPrimary({ href, children, external }: ButtonProps) {
  const cls =
    'inline-block bg-ink px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-bronze';
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ButtonGhost({ href, children, external }: ButtonProps) {
  const cls =
    'inline-block border border-ink/25 px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:border-bronze hover:text-bronze';
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Section({
  children,
  className = '',
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? 'bg-ink text-paper' : ''} ${className}`}>
      <div className="mx-auto max-w-wide px-6 py-20 md:py-28 lg:px-10">{children}</div>
    </section>
  );
}

/** Page title page — the book-frontispiece treatment used at the top of every inner page. */
export function PageTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-edge">
      <div className="mx-auto max-w-wide px-6 pb-16 pt-16 md:pb-20 md:pt-24 lg:px-10">
        <Eyebrow className="rise">{eyebrow}</Eyebrow>
        <h1 className="rise mt-6 max-w-4xl text-5xl leading-[1.03] md:text-7xl">{title}</h1>
        {intro && (
          <p className="rise mt-8 max-w-measure text-lg leading-[1.7] text-ink-soft">{intro}</p>
        )}
      </div>
    </div>
  );
}
