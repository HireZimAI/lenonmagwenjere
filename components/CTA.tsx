import { ButtonPrimary, ButtonGhost } from './Primitives';

export default function CTA({
  eyebrow = 'Start a conversation',
  title = 'What are you building?',
  body = 'Whether you are transforming an organisation, adopting AI, developing a new venture, or looking for a thoughtful voice for your next event, start here.',
  primary = { href: '/contact', label: 'Get in Touch' },
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-wide px-6 py-24 md:py-32 lg:px-10">
        <p className="eyebrow text-bronze-light">{eyebrow}</p>
        <h2 className="mt-6 max-w-3xl text-5xl leading-[1.05] md:text-7xl">{title}</h2>
        <p className="mt-8 max-w-measure text-lg leading-[1.7] text-paper/70">{body}</p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={primary.href}
            className="inline-block bg-paper px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze hover:text-paper"
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              {...(secondary.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              className="inline-block border border-paper/30 px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:border-bronze-light hover:text-bronze-light"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
