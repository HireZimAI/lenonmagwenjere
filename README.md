# lenonmagwenjere.com

Personal brand site. Next.js 14 (App Router) · TypeScript · Tailwind CSS · static export.

> **Before you launch, read [LAUNCH.md](./LAUNCH.md).** The code is finished; the
> content has open items, and the enquiry form collects nothing until one
> environment variable is set.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # static export -> ./out
```

---

## Deploying to Cloudflare

This site is a **Next.js static export**. `next build` emits plain HTML, CSS, JS and
images into `out/`. There is no server.

> **Do not use the OpenNext adapter.** If your build command is
> `npx opennextjs-cloudflare build`, it will fail. That adapter transforms a
> *server* build for Workers and there is no server build here. Cloudflare
> sometimes auto-configures it when you connect a Next.js repo. Replace the build
> command with `npm run build`.

Two supported paths. Pick one.

### Option A — Cloudflare Pages (simplest)

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out` |
| Framework preset | Next.js (Static HTML Export), or None |
| Node version | 20 |

No custom deploy command. No `wrangler.jsonc`. `functions/api/enquiry.ts` is picked
up automatically as a Pages Function and serves `POST /api/enquiry`.

Set environment variables under Settings → Environment variables → Production.

### Option B — Cloudflare Workers with Static Assets

Use this if your project is a Worker rather than a Pages project. Configuration is
already in `wrangler.jsonc`: `out/` is the asset directory, `worker/index.ts` is the
entry point.

```bash
npm run deploy          # next build && wrangler deploy
npm run preview:worker  # next build && wrangler dev
```

In Workers Builds, set:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

Requests matching a file in `out/` are served straight from the assets layer and
never invoke the Worker. Everything else reaches `worker/index.ts`, which handles
`/api/enquiry` and passes the rest to `env.ASSETS`.

Secrets go in as Worker secrets, not in `wrangler.jsonc`:

```bash
npx wrangler secret put GHL_WEBHOOK_URL
```

### Which files matter to which path

| File | Pages | Workers |
| --- | --- | --- |
| `functions/api/enquiry.ts` | used | inert |
| `worker/index.ts` | inert | used |
| `wrangler.jsonc` | inert | used |
| `public/_redirects` | used | ignored — express redirects in the Worker instead |
| `lib/enquiry.ts` | shared | shared |

Both entry points delegate to `lib/enquiry.ts`, so the form behaves identically
either way and the two cannot drift apart. Leave all of them in the repository;
the unused ones cost nothing.

### Collecting enquiries

Submissions go to `functions/api/enquiry.ts`, a Cloudflare Pages Function that runs
alongside the static site. It validates the submission, drops bot traffic, and
forwards to your CRM server-side.

**Why not post to the webhook straight from the page?** Three reasons, and the
first one would have cost you every enquiry: GoHighLevel webhooks do not return
CORS headers, so a browser fetch is blocked even though curl works fine. Second,
anything `NEXT_PUBLIC_` is compiled into the JavaScript bundle and publicly
readable. Third, a bare public webhook gets found and spammed.

#### Step 1 — create the inbound webhook in GoHighLevel

Automation → Workflows → Create Workflow → add trigger **Inbound Webhook**. Save,
then copy the webhook URL it generates. Add whatever actions you want after it:
create/update contact, add to a pipeline, notify you internally, start a
follow-up sequence.

Map these inbound fields onto your contact record:

| Field | Notes |
| --- | --- |
| `name` | always present |
| `email` | always present, format-validated |
| `description` | always present — the visitor's message |
| `type` | which of the six enquiry kinds |
| `organization` | may be absent |
| `phone` | may be absent |
| `timeline` | may be absent |
| `budget` | only if you enable that field |
| `source` | always `lenonmagwenjere.com` |
| `receivedAt` | ISO timestamp, set server-side |

*[Guessing on exact GHL menu labels — the platform moves them around. Look for
"Inbound Webhook" as a workflow trigger; the concept is stable even when the
navigation is not.]*

#### Step 2 — set the environment variable

Cloudflare Pages → your project → Settings → Environment variables → Production:

| Variable | Required | Purpose |
| --- | --- | --- |
| `GHL_WEBHOOK_URL` | **yes** | The webhook URL from step 1 |
| `NOTIFY_EMAIL` | no | Also email a copy of each enquiry |
| `RESEND_API_KEY` | no | Needed only if `NOTIFY_EMAIL` is set |
| `RESEND_FROM` | no | A verified sender on your domain |

No `NEXT_PUBLIC_` prefix on any of these. That prefix is what would leak them.

#### Step 3 — redeploy

Pages Functions pick up new environment variables on the next deployment, not
immediately. Trigger a fresh build.

#### Step 4 — test it end to end

Submit the real form on the deployed site and confirm the contact appears in GHL.
Then check `_confirm` rejection still returns success:

```bash
curl -X POST https://lenonmagwenjere.com/api/enquiry \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"t@example.com","description":"hello","_confirm":"bot"}'
# -> {"ok":true} and nothing in the CRM. That is correct: bots get a fake success.
```

Real submissions return `{"ok":true}` **and** create a contact. If you get
`{"ok":false,...}` the message tells you which check failed. Function logs are
under Pages → Deployments → your deployment → Functions.

#### Testing locally

`npm run dev` serves the pages but does not execute Pages Functions. For the full
stack:

```bash
npm run build
npx wrangler pages dev out --compatibility-date=2024-01-01
```

Put the variables in a local `.dev.vars` file (copy `.env.example`). Wrangler
loads it automatically and it is gitignored.

#### Spam handling

A hidden `_confirm` field is included in the form. People never see it; bots fill
it. A submission with that field populated returns `{"ok":true}` and is silently
discarded, so a bot cannot tell it was caught. Fields are also capped at 5,000
characters and anything not on the allow-list is dropped before it reaches your CRM.

### Changing the form fields

Everything is in `data/forms.ts`, no component edits needed:

| What | Where |
| --- | --- |
| Options in "Type of inquiry" | `inquiryTypes` |
| Timeline options | `timelines` |
| Budget options | `budgets` |
| Which optional fields show | `fields` |

```ts
export const fields = {
  showTimeline: true,
  showBudget: false,   // off by default — see the note in the file
  showPhone: true,
};
```

**On the budget field specifically.** It is off by default and that is a
recommendation, not an omission. A budget dropdown on first contact anchors the
number before you have established value — a prospect who would pay $40k after a
good call picks "$10k–$25k" because it reads as the safe answer. It also screens
out qualified buyers who have simply never purchased board-level AI governance
advisory and have no idea what it costs. The Advisory page already promises a
number on the first call, which is the stronger position: you set the anchor, in
context, with the scope in front of you. Flip it to `true` if you would rather
filter harder and take fewer conversations.

The Speaking page uses `variant="short"`, which drops timeline and budget
regardless — a booker with a two-week window will not complete a qualifying form.

---

## Where the content lives

Everything editable is in `/data`. Pages read from these files; you should almost never have
to open a component to change copy.

| File | Contains |
| --- | --- |
| `data/site.ts` | Name, roles, tagline, nav items, social links, external site URLs, form endpoint, direct email |
| `data/ventures.ts` | The four companies. `weight: 'lead'` puts a venture on the homepage; `'portfolio'` keeps it on `/ventures` only |
| `data/advisory.ts` | Practice areas, audiences, client problems, engagement process, formats |
| `data/books.ts` | Both books and the G.A.M.E. framework definitions |
| `data/profile.ts` | Speaking topics and formats, career timeline, current roles, values, credentials |

### Adding a page

Create `app/<slug>/page.tsx`, export `metadata`, add the route to `nav` in `data/site.ts`.
`app/sitemap.ts` picks it up automatically.

### Images

Every image slot is a `<Plate>` — a bordered frame with a caption. Until real photography
exists it shows a labelled placeholder; pass `src` and it renders the photo with the same
caption. Drop files in `/public` and reference them as `/filename.jpg`.

```tsx
<Plate src="/lenon-portrait.jpg" alt="Lenon Magwenjere" label="" caption="Houston, Texas." />
```

Recommended assets: portrait 4:5 (min 1200px wide), environmental portrait 4:5, three
speaking photos 4:3, book cover 2:3, and `public/og-default.png` at 1200×630.

---

## Decisions made in this build — reverse any of them

1. **Seven pages, not nine.** No `/insights` and no `/podcast`. An empty blog archive reads
   as abandonment, and a podcast page here would compete with thebuildershandbook.com for
   the same search terms. The podcast has a homepage section that links out. Add `/insights`
   when six or more pieces are ready to publish at once.
2. **ASAP Travel Africa is not on the homepage.** It is `weight: 'portfolio'` in
   `data/ventures.ts`. Change to `'lead'` to promote it. The reasoning: a buyer evaluating an
   AI governance engagement is not shopping for airport transfers, and equal billing dilutes
   both. `/ventures` addresses the "why do these belong together" question head-on.
3. **Ventures render as an index, not a card grid.** Four equal cards make four businesses
   compete for the same attention. A table gives them a hierarchy.
4. **Four pillars kept as a homepage index, not as navigation.** Build / Advise / Think /
   Convene orients a first-time visitor, but each row links to a page with real content.
5. **Speaking uses a four-field form.** A bookers' enquiry with a two-week window will not
   complete a budget-and-timeline form. Advisory and Contact use the full version.
6. **No prices published.** `/advisory` commits to giving a number on the first call instead.

---

## Before launch — content blockers

These are in the code as visible placeholders. The site should not go live with them.

**Factual corrections already applied:**

- **G.A.M.E. = Guardrails, Authority, Monitoring, Enablement.** The build brief said
  "Governance, Automation, Measurement, Enablement". That is wrong and would be caught by
  the exact audience the book targets. The wording here matches the manuscript and
  governingtheaimachine.com. Do not reintroduce the other version anywhere.
- **"BPO Arizona" was not published.** No such organisation could be verified; it reads as
  an expansion of the BPOAZ abbreviation. The entry sits in `data/profile.ts` marked
  `[CONFIRM ROLE AND ORGANISATION]`. Confirm the real body and title, or delete it.
- **"From Africa to Everywhere" is marked forthcoming** with no purchase link, since one
  does not exist yet.

**Still outstanding:**

| Placeholder | Needed |
| --- | --- |
| `[CONFIRM EMPLOYMENT DATES]` ×4 | Date ranges for Standard Chartered, Absa, Liberty, Zimnat |
| `[CONFIRM UNIVERSITY]` | Institution for the Risk Management degree (`app/layout.tsx` schema) |
| `[CONFIRM EMAIL ALIAS]` | Public-facing address in `data/site.ts` |
| `[HEADSHOT REQUIRED]` ×2 | Portrait and environmental portrait |
| `[ADD SPEAKING PHOTOGRAPH]` ×3 | Stage, showreel, workshop |
| `[ADD SOCIAL PROFILE URL]` | LinkedIn, YouTube, Instagram, X — and `sameAs` in the Person schema |
| `[ADD PODCAST PLATFORM LINKS]` | Spotify / Apple / YouTube |
| `[ADD ASAP TRAVEL AFRICA URL]` | Live site |
| `[ADD SOCIAL SHARING IMAGE]` | `public/og-default.png`, 1200×630 |
| `[ADD TESTIMONIAL]` | Attributed quotes only. Nothing invented. |

**One consistency problem worth resolving separately:** governingtheaimachine.com currently
describes Lenon as globally recognised, having helped Fortune 500 companies and government
agencies, above a "Trusted by Teams at" logo wall. This site makes no such claims. Someone
comparing the two properties will notice. Pick one standard and apply it to both.

---

## Replacing the existing lenonmagwenjere.com

The domain is already indexed by Google and already bound to a host somewhere, so
this is a cutover, not a first launch. Order matters.

**1. Inventory the old URLs first — while the old site still exists.**
Google Search Console → Indexing → Pages → Indexed, and export. Add your current host's
page list. Every URL that has ever been shared goes into `public/_redirects` as a 301.
Once you delete the old site you cannot recover this list.

**2. Record the current DNS zone before touching anything.**
Screenshot or export every record. Specifically check for `MX` records. If email on this
domain works today, a nameserver change that drops MX silently breaks it, and you will not
notice until someone tells you their message bounced. This matters here because
`data/site.ts` publishes an address on this domain.

**3. Remove the domain binding at the old host *before* adding it to Cloudflare Pages.**
Two services claiming the same custom domain will fail SSL provisioning, and the error
message will not tell you why.

**4. Deploy to a Pages subdomain first.**
Let it build at `<project>.pages.dev`, check every page and both forms there, then attach
the custom domain. Do not point DNS at an unverified build.

**5. Attach `lenonmagwenjere.com` and `www` in Pages → Custom domains.**
Cloudflare issues the certificate. Wait for Active before announcing anything.

**6. After the cutover:**
- Submit `https://lenonmagwenjere.com/sitemap.xml` in Search Console
- Request indexing on the homepage, `/advisory`, and `/books`
- Spot-check five old URLs from your export and confirm each one 301s somewhere sensible
- Update the link in your LinkedIn profile, both book listings, and the Builder's Handbook site

**A note on the old positioning.** The indexed copy on that domain reads
*"I help founders turn growth chaos into a scalable operating…"*. This build positions you
as a multidisciplinary builder instead. That is a deliberate change, not a migration
artefact — but if the old line was pulling qualified enquiries, decide consciously whether
to drop it rather than losing it by accident.

---

- Per-page `title`, `description`, and canonical URL via the Metadata API
- Open Graph and Twitter card defaults in `app/layout.tsx`
- `Person` JSON-LD sitewide; `Book` JSON-LD on `/books`
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt` at build

Add `Article` schema when `/insights` ships, and `PodcastSeries` only if episodes are ever
hosted on this domain rather than linked out.

## Accessibility

Skip link, semantic landmarks, labelled form fields, `aria-expanded` on the mobile menu,
2px bronze focus rings that are never removed, `prefers-reduced-motion` respected, and one
page-load animation on the hero — nothing else moves.

## Still to verify

Visual QA at mobile / tablet / laptop / wide breakpoints has not been done in a real
browser. Run `npm run dev` and check the homepage hero, the ventures index rows, and the
advisory process list, which are the three layouts most likely to need adjustment.
