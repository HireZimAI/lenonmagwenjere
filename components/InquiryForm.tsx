'use client';

import { useState } from 'react';
import { site } from '@/data/site';
import { inquiryTypes, timelines, budgets, fields } from '@/data/forms';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full border border-edge bg-paper px-4 py-3 font-sans text-[0.9375rem] text-ink placeholder:text-stone/50 focus:border-bronze focus:outline-none';
const label = 'block eyebrow mb-2';

/**
 * `variant="short"` is used on Speaking. A long qualifying form loses bookers who
 * have a two-week window; they get four fields and a direct address instead.
 */
export default function InquiryForm({
  variant = 'full',
  defaultType,
}: {
  variant?: 'full' | 'short';
  defaultType?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true') { setStatus('error'); setMessage('Preview only. This form does not send enquiries.'); return; }
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Personal website enquiry: ${data.type || 'General'}`, source: 'lenonmagwenjere.com' }),
      });
      const result = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        setStatus('error');
        // Surface the server's reason when it gave one — a validation message is
        // useful, whereas a generic failure just makes people give up.
        setMessage(
          result?.error ??
            `That did not send. Email ${site.directEmail} directly and it will reach the same place.`,
        );
        return;
      }
      setStatus('sent');
    } catch {
      setStatus('error');
      setMessage(
        `That did not send. Email ${site.directEmail} directly and it will reach the same place.`,
      );
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-bronze bg-paper-dim p-8 md:p-10">
        <p className="eyebrow text-bronze">Received</p>
        <h3 className="mt-4 font-display text-3xl leading-tight">Thank you. Your enquiry has been sent.</h3>
        <p className="mt-4 max-w-measure text-[1.0625rem] leading-relaxed text-ink-soft">
          If it is time-sensitive, you can also email Lenon directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name <span className="text-bronze">*</span>
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="organization">
            Organisation
          </label>
          <input id="organization" name="organization" className={field} autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">
            Email <span className="text-bronze">*</span>
          </label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        {fields.showPhone && (
          <div>
            <label className={label} htmlFor="phone">
              Phone (optional)
            </label>
            <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
          </div>
        )}
      </div>

      <div>
        <label className={label} htmlFor="type">
          Type of inquiry <span className="text-bronze">*</span>
        </label>
        <select id="type" name="type" required defaultValue={defaultType ?? ''} className={field}>
          <option value="" disabled>
            Select one
          </option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="description">
          What are you working on? <span className="text-bronze">*</span>
        </label>
        <textarea id="description" name="description" required rows={5} className={field} />
      </div>

      {variant === 'full' && (fields.showTimeline || fields.showBudget) && (
        <div className="grid gap-6 sm:grid-cols-2">
          {fields.showTimeline && (
          <div>
            <label className={label} htmlFor="timeline">
              Desired timeline
            </label>
            <select id="timeline" name="timeline" defaultValue="" className={field}>
              <option value="">Select one</option>
              {timelines.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          )}
          {fields.showBudget && (
          <div>
            <label className={label} htmlFor="budget">
              Budget range (optional)
            </label>
            <select id="budget" name="budget" defaultValue="" className={field}>
              <option value="">Select one</option>
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          )}
        </div>
      )}

      {/* Honeypot. Hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-ink px-8 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-bronze disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send inquiry'}
        </button>
        <p className="text-[0.8125rem] text-stone">Please do not include passwords, financial account details, or confidential records in this form.</p>
      </div>

      {status === 'error' && (
        <p role="alert" className="border-l-2 border-forest pl-4 text-[0.9375rem] text-forest">
          {message}
        </p>
      )}
    </form>
  );
}
