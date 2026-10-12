import Link from 'next/link';
import { nav, social, site, externalSites } from '@/data/site';
import BuildNote from './BuildNote';
import { showBuildNotes } from '@/lib/flags';

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-tight">Lenon Magwenjere</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">{site.tagline}</p>
            <p className="mt-6 text-[0.6875rem] uppercase tracking-[0.18em] text-bronze-light">
              Built in Africa. Deployed everywhere.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-paper/40">Site</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-paper/75 transition-colors hover:text-bronze-light">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li className="hidden">
                <Link href="/contact" className="text-paper/75 transition-colors hover:text-bronze-light">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-paper/40">Elsewhere</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={externalSites.hirezim} target="_blank" rel="noreferrer" className="text-paper/75 transition-colors hover:text-bronze-light">
                  HireZim AI
                </a>
              </li>
              <li>
                <a href={externalSites.handbook} target="_blank" rel="noreferrer" className="text-paper/75 transition-colors hover:text-bronze-light">
                  The Builder&rsquo;s Handbook
                </a>
              </li>
              <li>
                <a href={externalSites.book} target="_blank" rel="noreferrer" className="text-paper/75 transition-colors hover:text-bronze-light">
                  Governing the AI Machine
                </a>
              </li>
              <li>
                <a href="https://theaibridge.org" target="_blank" rel="noreferrer" className="text-paper/75 transition-colors hover:text-bronze-light">
                  The AI Bridge
                </a>
              </li>
              <li><a href="https://growithkurasystems.com" target="_blank" rel="noreferrer" className="text-paper/75">Kura Growth Systems</a></li>
            </ul>
            {/* A dead social link is worse than an absent one, so unset profiles
                are dropped from the production footer entirely. */}
            <ul className="mt-6 space-y-3 text-sm">
              {social
                .filter((s) => s.href !== '#')
                .map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-paper/45 transition-colors hover:text-bronze-light"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              {showBuildNotes && social.some((s) => s.href === '#') && (
                <li>
                  <BuildNote>
                    Add profile URLs in data/site.ts: {social.filter((s) => s.href === '#').map((s) => s.label).join(', ')}
                  </BuildNote>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-paper/15 pt-8 text-[0.6875rem] uppercase tracking-[0.18em] text-paper/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Lenon Magwenjere</p>
          <p>G.A.M.E.&trade; is a trademark of the authors</p>
        </div>
      </div>
    </footer>
  );
}
