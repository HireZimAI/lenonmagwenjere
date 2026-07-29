import Link from 'next/link';
import { Eyebrow } from '@/components/Primitives';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-wide px-6 py-32 lg:px-10">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 max-w-2xl text-5xl leading-[1.05] md:text-7xl">
        That page isn&rsquo;t here.
      </h1>
      <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-soft">
        The link may be out of date. Start from the homepage, or go straight to the work.
      </p>
      <div className="mt-10 flex flex-wrap gap-6">
        <Link href="/" className="eyebrow text-bronze hover:text-ink">Home &rarr;</Link>
        <Link href="/advisory" className="eyebrow text-bronze hover:text-ink">Advisory &rarr;</Link>
        <Link href="/contact" className="eyebrow text-bronze hover:text-ink">Contact &rarr;</Link>
      </div>
    </div>
  );
}
