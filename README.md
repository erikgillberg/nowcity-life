# nowcity.life

Consumer-facing site for **Now City Neighborhoods (NCN)** — the neighborhood
brand of Now City Inc. Built with [Astro](https://astro.build/), styled with
[Tailwind CSS](https://tailwindcss.com/), interactive pieces written in
[Preact](https://preactjs.com/). Deployed as static HTML.

This site is a sibling to [nowcitylabs.com](https://nowcitylabs.com) (B2B
dev services) and [nowcity.co](https://nowcity.co) (Now City Inc.
corporate site). See `../CLAUDE.md` for ecosystem rules and `./CLAUDE.md`
for site-specific voice and IA.

## Local development

Requires Node.js 18.17+ (tested on Node 22).

```bash
npm install
npm run dev        # starts local dev server at http://localhost:4321
npm run build      # builds production static output to ./dist
npm run preview    # serves the built output locally
```

## Project structure

```
src/
├── components/        # Astro + Preact UI pieces
├── layouts/
│   └── Layout.astro   # site-wide shell
├── pages/             # each file = one route
│   └── index.astro    # /
└── styles/
    └── global.css     # Tailwind base + brand tokens + components
```

## Editing copy

Page copy lives directly in each `.astro` file inside `src/pages/`. Open
the file, change the strings, save, push — Cloudflare rebuilds on push.

Brand tokens (colors, type) are defined in `tailwind.config.mjs`. They
match the ecosystem palette defined in the Brand Bible.

## Deploying

Cloudflare Pages watches the `main` branch. On push it runs
`npm run build` and publishes `./dist`. (Cloudflare Pages project + GitHub
repo to be wired up in a follow-up session — see `./CLAUDE.md` for the
current state.)

## Brand source

See `../NOW CITY LABS Brand Bible_April 2026.md` for voice, visual, and
positioning guidance. Site-specific voice for nowcity.life lives in
`./CLAUDE.md`.
