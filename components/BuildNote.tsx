import { showBuildNotes } from '@/lib/flags';

/**
 * Renders an authoring reminder in development and nothing in production.
 * Use this for every missing-asset or unconfirmed-fact marker so a launch build
 * is never carrying visible scaffolding.
 */
export default function BuildNote({ children }: { children: React.ReactNode }) {
  if (!showBuildNotes) return null;
  return (
    <span className="my-1 inline-block border border-dashed border-bronze/60 bg-bronze/5 px-2 py-1 font-sans text-[0.6875rem] uppercase tracking-[0.14em] text-bronze">
      {children}
    </span>
  );
}
