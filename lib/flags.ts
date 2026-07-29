/**
 * Build notes are authoring scaffolding — reminders about missing assets and
 * unconfirmed facts. They must never reach a visitor.
 *
 * Visible in `npm run dev`. Stripped from `npm run build`.
 *
 * To audit what is still outstanding before launch, run the dev server and read
 * the pages, or grep for <BuildNote> and the note fields in /data.
 */
export const showBuildNotes = process.env.NODE_ENV === 'development';
