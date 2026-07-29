# Launch checklist

The code is finished. These are the things that are not.

Ordered so that everything above the line has to happen and everything below it
can happen later. Run `npm run dev` at any point and every outstanding item shows
itself in place, in a dashed bronze box, on the page it belongs to.

---

## Blockers — the site should not go live until these are done

### 0. Get the deployment settings right

If the build fails with *"Couldn't find any `pages` or `app` directory"* while the
log shows `npx opennextjs-cloudflare build`, the project is configured for
server-rendered Next.js. This site is a static export.

- [ ] Build command is `npm run build` — **not** `npx opennextjs-cloudflare build`
- [ ] Output directory is `out`
- [ ] On Pages: no custom deploy command at all
- [ ] On Workers: deploy command is `npx wrangler deploy`, and `wrangler.jsonc` is
      present at the repository root

See README → "Deploying to Cloudflare" for both paths.

### 1. Connect the enquiry form

**Without this the site collects nothing.** Every other item on this list is
cosmetic by comparison.

- [ ] GoHighLevel → Automation → Workflows → new workflow → trigger **Inbound Webhook**
- [ ] Copy the generated webhook URL
- [ ] Cloudflare Pages → Settings → Environment variables → Production → `GHL_WEBHOOK_URL`
- [ ] **Redeploy.** Functions read variables at build, not instantly.
- [ ] Submit the live form and confirm the contact appears in GHL

Detail in README → "Collecting enquiries".

### 2. Reconcile the credentials

Three claims are on the site awaiting verification against your own certificates.
You sell governance. Getting your own record wrong is the expensive kind of error,
and four separate facts came to me wrong during this build.

- [ ] **UNISA award title and years.** The site says "Bachelor's degree in Risk
      Management". A third-party register lists a BCom, 2007–2012. These are
      different strings. Read the certificate. → `data/profile.ts`, `education[0]`
- [ ] **MPhil expected completion year.** Currently in progress and correctly
      labelled as such. Add the year. → `data/profile.ts`, `education[1].expected`
- [ ] **NOLA College certificate wording.** "Advanced course in Transformational
      Leadership" is a description, not an award title. → `data/profile.ts`, `teaching[1]`

### 3. Fix two date problems on the timeline

Anyone who reads a career timeline carefully will catch these, and the people you
sell to read timelines carefully.

- [ ] **Liberty Group (Apr 2012 – Feb 2014) overlaps Hereford Group (Feb 2013 –
      Feb 2014)** by twelve months, both in Johannesburg, both substantive roles.
      Correct the dates or be ready to explain the concurrency.
- [ ] **Absa** reports 2 yrs 11 mos total but its two entries span nearly three
      years eight months. Year-only dates are the likely cause.

Both flagged in `data/profile.ts`.

### 4. Cutover, in this order

- [ ] Export the old URL list from Search Console → Indexing → Pages → Indexed,
      **while the old site still exists.** You cannot reconstruct it afterwards.
- [ ] Map those URLs in `public/_redirects` as 301s
- [ ] **Record your MX records.** You are publishing `lenon@lenonmagwenjere.com`.
      A nameserver change that drops MX breaks mail silently — bounces go to the
      sender, not to you.
- [ ] Remove the domain binding at the current host **before** adding it in Pages.
      Two services claiming one custom domain fails SSL with an unhelpful error.
- [ ] Deploy to the `*.pages.dev` or `*.workers.dev` URL and check all seven pages there first
- [ ] Attach `lenonmagwenjere.com` and `www`, wait for Active
- [ ] Submit `sitemap.xml` in Search Console, spot-check five old URLs 301 correctly

Full runbook in README → "Replacing the existing lenonmagwenjere.com".

### 5. Correct the errors that live outside this repo

The website is the least urgent copy of each of these.

- [ ] **Your LinkedIn headline defines G.A.M.E. as "Governance, Automation,
      Measurement, Enablement".** It is Guardrails, Authority, Monitoring,
      Enablement, per your own book. This is almost certainly where the original
      brief inherited the error.
- [ ] **"Masters in International Marketing"** — wrong title and wrong status.
      Scrub from LinkedIn, CV, and speaker bios.
- [ ] **hirezim.ai/about and governingtheaimachine.com** both describe you as a
      globally recognised strategist who has served Fortune 500 companies and
      government agencies, above a "Trusted by Teams at" logo wall. This site makes
      no such claims. Pick one standard and apply it to all three properties.
- [ ] Your LinkedIn ASAP entry says Founder in the title and Chairman in the
      description; the HireZim entry omits Managing Director; Veneka has no entry
      at all.

---

## Improvements — none of these hold up a launch

- [ ] **Booking link on your own domain.** Point `call.lenonmagwenjere.com` at
      GoHighLevel and update `site.bookingUrl`. Today the button sends visitors to
      `api.leadconnectorhq.com`. Cloudflare holds the apex, GHL holds the subdomain.
- [ ] **Showreel with audio.** 60–90 seconds, 16:9, board feed or lav mic, on
      YouTube. Set `youtubeId` in `data/media.ts`. This is the single highest-return
      asset you could produce — it unlocks the whole Speaking page.
- [ ] **Full-resolution stage photos.** The two in use are 414×414 and will look
      soft on any retina screen. Originals off your phone, not social exports.
- [ ] **Print-quality Governing the AI Machine cover.** Currently 311×466. Pull it
      from your KDP files.
- [ ] **Two attributed testimonials** from people who hired you. Real names, real
      organisations, or leave the section out.
- [ ] **White/knockout Veneka logo** so the group mark can go in the dark footer.
      The current file is dark green on white.
- [ ] **Confirm which Amazon ASIN** gets the traffic for *From Africa to
      Everywhere*. At least three exist; normally you want the one carrying reviews.
- [ ] **Social profile URLs** in `data/site.ts`. Unset profiles are dropped from
      the footer, so nothing is broken — you are simply invisible there.
- [ ] **MPhil dissertation title.** A research master's means you built and
      defended an original argument. For someone selling a framework that is worth
      more than the degree name. Slot in `data/profile.ts`.
- [ ] **Decide on `lenon@` vs a role address.** `advisory@` or `hello@` can be
      reassigned and delegated without republishing the site.
- [ ] **`/insights`** when you have six pieces ready to publish at once. Not before.
      An archive with two posts reads as abandonment.

---

## Dependency advisories — accepted, with reasons

`npm audit` reports 18 high-severity advisories and 0 critical. They are accepted
rather than unfixed. You sell governance, so this is written down instead of
shrugged at — if a client's IT team ever runs an audit on this repo, this is the
answer.

**`next` (18 advisories).** Every one concerns a *running* Next.js server: the
Image Optimizer, Server Components, Server Actions, middleware, rewrites, RSC
response caching, custom servers. This site is `output: 'export'` — the build
produces plain HTML, CSS, JS and images, served as flat files by Cloudflare Pages.
There is no Node process, no image optimizer (`unoptimized: true`), no middleware,
no rewrites, no server actions. None of these code paths ship. The only remediation
npm offers is Next 16, a semver-major migration with breaking changes and zero
security benefit here.

**`postcss` (3 advisories).** Build-time only, and all three require
attacker-controlled CSS containing a malicious `sourceMappingURL`. The only CSS in
this build is `app/globals.css` and Tailwind's generated output.

**`eslint` toolchain (14 advisories, transitive: `minimatch`, `glob`,
`brace-expansion`).** `devDependencies`. They run on your own source, on your own
machine or in Cloudflare's build container, and never reach a visitor. Exploiting
them requires already controlling the source files.

**Review trigger:** re-assess if this site ever stops being a static export — if
you add API routes in `app/`, enable image optimization, or introduce middleware,
the `next` advisories become live and the version must move.

Patched already: Next.js Cache Poisoning (critical) via `next@14.2.35`.

---

## Decisions already made — reverse any of them freely

Each is one line in a data file. Reasoning is in the README and in code comments.

| Decision | Where |
| --- | --- |
| Seven pages, no `/insights`, no `/podcast` | `data/site.ts` → `nav` |
| ASAP Travel Africa off the homepage | `data/ventures.ts` → `weight` |
| Budget field off on the enquiry form | `data/forms.ts` → `fields.showBudget` |
| "Book a Call" instead of "Work With Me" | `components/Nav.tsx` |
| Speaking uses a four-field form | `app/speaking/page.tsx` → `variant="short"` |
| Nine conference photos rejected | `public/README-assets.md` |
| Veneka forest green as secondary accent | `tailwind.config.ts` |
