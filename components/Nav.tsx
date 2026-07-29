'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav, site } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 md:h-[4.5rem] lg:px-10">
        <Link
          href="/"
          className="font-display text-xl leading-none tracking-tight text-ink transition-colors hover:text-bronze"
        >
          Lenon Magwenjere
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-bronze px-4 py-2 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-bronze transition-colors hover:bg-bronze hover:text-paper"
          >
            Book a Call
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="eyebrow md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-edge bg-paper px-6 pb-8 pt-4 md:hidden"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-edge">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 block border border-bronze px-4 py-3 text-center font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-bronze"
          >
            Book a Call
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block px-4 py-3 text-center font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-stone"
          >
            Other enquiries
          </Link>
        </nav>
      )}
    </header>
  );
}
