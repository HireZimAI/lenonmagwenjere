/**
 * Video configuration for the Speaking page.
 *
 * Two distinct slots, deliberately kept separate:
 *
 *  - `ambientLoop` - a short, silent, looping clip used as atmosphere. It shows
 *    that Lenon works live stages. It is NOT presented as a showreel, because a
 *    clip with no audio proves nothing about how he speaks.
 *
 *  - `showreel` - the real thing: 60–90 seconds WITH sound, hosted on YouTube or
 *    Vimeo. Set `youtubeId` and the page swaps the placeholder for a player.
 *    Do not self-host this. Cloudflare Pages serves a flat file with no adaptive
 *    bitrate, so a visitor on a poor mobile connection downloads the whole thing.
 */

export const ambientLoop = {
  src: '/speaking-loop.mp4',
  poster: '/speaking-loop-poster.jpg',
  // Cut from a 60s vertical phone clip, Feb 2026. Silent by nature of the source.
  // Adjust the in-point by re-cutting from the original if a better 12 seconds exists.
  caption: 'On stage, February 2026.',
  enabled: true,
};

export const showreel = {
  /** e.g. 'dQw4w9WgXcQ'. Leave null until a reel with audio exists. */
  youtubeId: null as string | null,
  caption: 'Showreel.',
};
