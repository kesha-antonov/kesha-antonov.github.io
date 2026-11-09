# kesha-antonov portfolio site

Static Astro site with a React island for the hero chat. English at `/`, Russian at `/ru/`.

## Commands

- `npm run dev` - local dev server
- `npm run stats` - refresh npm downloads and GitHub stars into `src/data/stats.json` (set `GITHUB_TOKEN` to avoid rate limits)
- `npm run build` - build to `dist/`
- `npm run preview` - serve the build

## Where things live

- `src/data/content.ts` - all copy in EN and RU, plus hand-checked app and contest numbers
- `src/data/stats.json` - generated npm and GitHub numbers; a failed or suspicious fetch keeps the previous value
- `src/components/Home.astro` - page sections
- `src/components/HeroChat.tsx` - streaming chat in the hero
- `.github/workflows/deploy.yml` - daily stats refresh and GitHub Pages deploy

App Store, Google Play and RuStore numbers are entered by hand in `content.ts` (checked 09.11.2026).
