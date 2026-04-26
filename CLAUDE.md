# CLAUDE.md — nowcity.life

Instructions for any Claude agent working on this repo. The parent
directory `../CLAUDE.md` has ecosystem-wide context (three entities, shared
brand rules, shared tech stack). This file is repo-specific.

## What this site is

nowcity.life is the **consumer-facing site for Now City Neighborhoods (NCN)** —
the neighborhood brand of Now City Inc. Its job is to validate demand and
build narrative pull so that landowners, investors, and municipalities come
to the table because they see something people want.

**Dual audience:**
- **Future residents / neighbors / visitors** — people who might live in,
  work from, or spend time at an NCN place. Primary narrative target.
- **Landowners, institutional investors, mission-aligned capital, civic
  stakeholders** — people who greenlight projects. They watch consumer
  pull as the demand signal.

These two audiences are served by the SAME storytelling, not split pages.
Investors don't want a separate B2B pitch here — they want to see a place
people are excited about. The B2B pitch lives at nowcitylabs.com; we link
to it in the footer/secondary nav for those who dig deeper.

## Sibling sites

- **nowcity.co** — Now City Inc. corporate site (parent entity)
- **nowcitylabs.com** — Now City Labs B2B dev services (sister brand,
  different audience and voice)
- **urbanreboot.org** — Non-profit sibling

Never conflate these in copy. Link to them; don't merge with them.

## Status

**Scaffolded 2026-04-23, not yet live.** GitHub repo and Cloudflare Pages
project will both be named `nowcity-life`. DNS not yet wired up. The
scaffold mirrors the Labs stack exactly so when we're ready to deploy we
can lift the Labs deploy playbook. See "Open decisions" below for what's
still undecided.

## Tech stack

- Astro 4 (static site generator) — `output: 'static'`
- Tailwind CSS 3 — brand tokens in `tailwind.config.mjs` (matches Labs)
- Preact — for interactive islands only (none built yet)
- **Images**: Astro's built-in `astro:assets` with `<Image />` component.
  Unlike Labs (text-only), this site uses imagery heavily — see
  "Imagery & assets" section below.
- Planned deploy: Cloudflare Pages, auto-deploy on push to `main`
- Planned repo: **github.com/erikgillberg/nowcity-life** (decided 2026-04-23)
- Planned Cloudflare Pages project name: **nowcity-life**
- Domain: nowcity.life (registered; DNS currently unconfigured)

## File map

```
src/
├── pages/                    one file per route
│   └── index.astro           /             (Home — placeholder only)
├── components/               (empty — add as site grows)
├── layouts/
│   └── Layout.astro          site shell, SEO meta tags
├── assets/                   images that get build-time optimized
│   └── .gitkeep              (drop .jpg/.png/.webp here, import into .astro files)
└── styles/
    └── global.css            Tailwind directives + brand components

public/                       static-served assets (favicon, og-image)
tailwind.config.mjs           brand palette, fonts, container widths
astro.config.mjs              integrations (Tailwind + Preact)
```

Layout is intentionally minimal — no Header or Footer components yet.
Add them once IA is decided. The Labs site's Header/Footer are reasonable
reference patterns but the NCN nav will be different (places-centric,
likely scroll-driven).

## Voice & brand rules

### Inherited from ecosystem (hard rules — see `../CLAUDE.md`)

1. **Never name specific vendors** (Anori, Tapestry, Taara, Materra) in
   client-facing copy. Capability-level language only.
2. **Three entities distinct.** NCN is a brand of Now City Inc., NOT an
   entity. The site can say "Now City Neighborhoods" and reference Now
   City Inc.; it should not position NCN as a separate company.
3. **Substantive content in visible HTML** — SEO rule, still applies.
4. **Brand palette is shared** — Forest / Stone / Cream / Copper / Sage.

### Site-specific voice (different from Labs)

Where **Labs is rigorous and B2B**, Life is **human, aspirational, and
story-forward.** Think: what it feels like to walk through an NCN
neighborhood on a Saturday morning. What your kid's commute to school
looks like. Where you buy coffee and who you run into.

- **Specific over abstract.** Name the thing. "The 7am market at Oak
  Plaza" beats "activated retail." "A 12-minute walk to daycare" beats
  "pedestrian-friendly."
- **People, not placeholders.** When possible, write in a named or
  implied voice — a resident, a shopkeeper, a parent. Not "users."
- **Aspirational without hype.** We're inviting people into a vision,
  not selling them a condo. No "revolutionary," no "unlock," no
  "elevate your lifestyle."
- **Pictures do a lot of work.** This site should be visual-forward.
  Copy supports the imagery, not the other way around.
- **Honesty about status.** When a place is early, say it's early. Don't
  describe renderings as if they exist. Show process — "here's what
  we're planning, here's what we've learned, join the list."

### Voice — what we still prefer (carried over from Labs)

- Declarative sentences. Short paragraphs. `text-wrap: balance` in headings.
- Avoid: "revolutionary," "disruptive," "unlock value," "bleeding edge,"
  "elevate," "reimagine."
- Prefer: "durable," "walkable," "made for the long term," "measurable,"
  "patient."

## IA sketch (initial, expect to revise)

Starting hypothesis — revisit before building:

- **/** — Home. The manifesto + a vision image + proof of momentum.
  Primary CTA: join the interest list.
- **/places** — Gallery of current and planned NCN places. Each place
  has its own sub-page.
- **/places/[slug]** — Individual place. Vision, renderings, timeline,
  neighborhood context, interest form for this specific place.
- **/life** — What it feels like to live here. Daily-rhythm storytelling,
  photos, resident perspectives.
- **/why** — The thinking behind the neighborhood model. Brief. Links
  out to nowcitylabs.com for the deep methodology.
- **/press** or **/notes** — Optional; a place for updates, media
  mentions, founder posts. Useful for showing momentum to investors.

Investor/landowner material is NOT a separate top-level section. They
read the same site everyone else reads. If they want the B2B pitch,
they click through to Labs.

## Content principles

1. **Validation is the product.** Every page should move someone toward
   a lightweight commitment — join the list, follow along, share, visit
   an event. Hard sales/subscriptions come later.
2. **Imagery is load-bearing.** Renderings, maps, real photos of
   comparable places. Budget for this — good images unlock the whole
   narrative.
3. **Show the timeline honestly.** "We expect to break ground in X"
   beats vague "coming soon."
4. **Don't re-litigate the Labs pitch.** This site is about the place
   experience. If a visitor wants methodology, link them to Labs.
5. **Urban Reboot angle when relevant.** For projects with public/non-profit
   partnership, say so plainly. Don't hide community ownership structure
   behind consumer aesthetic.

## Update workflow (once deployed)

Same pattern as Labs:

```bash
npm run dev          # localhost:4321, hot-reloads on save
# edit .astro files
npm run build        # optional: verify clean build before push
git add -A
git commit -m "descriptive message"
git push
```

Cloudflare rebuilds on push once the Pages project is wired up.

## Imagery & assets

Unlike nowcitylabs.com (which is deliberately text-forward), nowcity.life
is a visual site. Images do narrative work that copy alone can't — they
carry the feel of a place.

### Pipeline (technical)

- Use Astro's built-in `astro:assets` `<Image />` component for ALL
  substantive imagery — it handles format conversion (auto-webp/avif),
  resizing, and lazy-loading at build time.
- **`src/assets/`** — images that get optimized (hero, gallery, inline).
  Imported into `.astro` files. This is where almost everything goes.
- **`public/`** — images that must be served as-is (favicon.svg,
  og-image.png for social cards). No optimization, path-stable.
- Hero / above-the-fold images: set explicit `width`/`height`, add
  `loading="eager"` and consider `fetchpriority="high"`. Below-fold
  images stay lazy-loaded (the default).
- Target: no single image over ~250KB in final output. Cloudflare Pages
  is generous, but image weight is the #1 performance killer on a
  content site like this.
- Don't commit raw 20MB photography into git. Resize/compress before
  committing (or use a build-time CDN if we grow out of this).

### Sourcing (strategic — open questions below)

Four options, each with a tradeoff:

| Source                | Strength                          | Risk                                    |
|-----------------------|-----------------------------------|------------------------------------------|
| Commissioned renders  | Exact place, exact vibe           | $$, time, still need real site plan      |
| Reference photography | Authentic, cheap if we have access | Risk of looking like "a place in Portland" rather than "our place" |
| Licensed stock        | Fast, cheap                        | Generic, any other brand can use it      |
| AI-generated          | Flexible, instant                  | Brand integrity risk on a real-estate site — we're selling real places; AI renderings of imaginary places undermine trust unless labeled honestly |

**Working principle**: if we use imagery that isn't of a real place
we're building, **label it honestly** — "reference imagery," "concept
rendering," "a place of similar character." This is consistent with the
"honesty about status" voice rule.

## Open decisions (resolve before/during first real build session)

1. ~~**GitHub repo name**~~ → resolved: `nowcity-life`
2. ~~**Cloudflare Pages project name**~~ → resolved: `nowcity-life`
3. **First place to feature**: NCN benchmark neighborhood (the 760-unit +
   105K SF + 95K SF plan) — is it real enough to name and locate? If not,
   the Home page uses the vision without a specific site; we add /places
   once we have at least one place to show.
4. **Imagery sourcing for v1**: which of the four options above, or a
   combination? (Pipeline is decided — see above — but sourcing is not.)
   Probably phase it: reference photography for v1 hero, commissioned
   renders for any named place, save AI-gen for last resort with honest
   labeling.
5. **Interest capture**: Mailchimp form? Custom form → CF Workers + KV?
   Typeform? Lowest friction first; we can migrate later.
6. **Header/Footer components**: when to build, and do we want cross-site
   links (to Labs, to nowcity.co)? Probably yes in footer, maybe not
   in primary nav.
7. **"Now City Neighborhoods" full phrase vs. "NCN" abbreviation**:
   consumers don't know the acronym. Likely spell out everywhere
   externally. Confirm before first real copy.

## Things to check before pushing (once we're live)

- [ ] `npm run build` passes with no errors
- [ ] No vendor names (Anori, Tapestry, Taara, Materra) anywhere
- [ ] No B2B language bleeding in from Labs (no "stack," "engagement,"
      "pro forma," "carrying capacity" unless explicitly reframed)
- [ ] External links have `rel="noopener"`
- [ ] New pages have `title` and `description` props on the Layout
- [ ] Copy renders in visible HTML (not hidden in an accordion/JS tab)

## Things NOT to touch without asking

- `astro.config.mjs` — breaking the build is easy
- `tailwind.config.mjs` brand tokens (forest/copper/sage/cream) —
  changes the whole ecosystem's shared visual language
- `tsconfig.json` — Preact JSX config is load-bearing

## Adjacent reference

- Ecosystem rules: `../CLAUDE.md`
- Brand Bible: `../NOW CITY LABS Brand Bible_April 2026.md`
- Sibling site for reference patterns: `../nowcitylabs/`
- Scraped source content (useful for reference, not direct reuse):
  `../nowcity-home.md`, `../nowcity-approach.md`
