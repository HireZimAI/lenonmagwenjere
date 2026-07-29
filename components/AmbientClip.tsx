'use client';

import { useEffect, useRef } from 'react';

/**
 * A muted, looping vertical clip used as atmosphere rather than evidence.
 * Honours prefers-reduced-motion by holding on the poster frame instead of
 * playing, and never autoplays with sound because it has none.
 */
export default function AmbientClip({
  src,
  poster,
  className = '',
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.play().catch(() => {
      /* Autoplay blocked — the poster frame stands in. */
    });
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Lenon Magwenjere speaking on stage"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
