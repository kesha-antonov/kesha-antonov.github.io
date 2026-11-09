// Renders the Open Graph cards (1200x630) in the site's clear-line look and writes
// public/og.png and public/og-ru.png. Uses headless Chrome so the cards get the same
// fonts and CSS as the site. Run after `npm run stats`: node scripts/og.mjs
// Set CHROME_PATH if Chrome is not in the default location.
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = new URL('..', import.meta.url)
const stats = JSON.parse(await readFile(new URL('src/data/stats.json', root), 'utf8'))
const font = (pkg, file) => pathToFileURL(fileURLToPath(new URL(`node_modules/@fontsource/${pkg}/files/${file}`, root))).href

const CHROME =
  process.env.CHROME_PATH ||
  (process.platform === 'darwin'
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : 'google-chrome')

const compact = (n, ru) => {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace(/\.0$/, '')}${ru ? ' млн' : 'M'}`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1).replace(/\.0$/, '')}${ru ? ' тыс.' : 'K'}`
  return String(n)
}

const copy = {
  en: {
    name: 'Kesha Antonov',
    role: 'Lead software engineer, product manager, founder',
    line: 'I take stalled products and make them grow.',
    pill: 'react-native-gifted-chat maintainer',
    scores: [
      [compact(stats.totals.allTime, false), 'npm installs of my libraries'],
      ['250K+', 'installs of apps I built'],
      [compact(stats.packages['gifted-chat'].stars, false), 'Gifted Chat GitHub stars'],
    ],
  },
  ru: {
    name: 'Кеша Антонов',
    role: 'Ведущий разработчик, продакт-менеджер, основатель',
    line: 'Беру буксующие продукты и делаю так, чтобы они росли.',
    pill: 'мейнтейнер react-native-gifted-chat',
    scores: [
      [compact(stats.totals.allTime, true), 'установок библиотек в npm'],
      ['250 тыс.+', 'установок моих приложений'],
      [compact(stats.packages['gifted-chat'].stars, true), 'звёзд Gifted Chat на GitHub'],
    ],
  },
}

const html = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: B; font-weight: 700; src: url(${font('balsamiq-sans', 'balsamiq-sans-latin-700-normal.woff2')}) format('woff2'); unicode-range: U+0000-00FF, U+2000-206F; }
@font-face { font-family: B; font-weight: 700; src: url(${font('balsamiq-sans', 'balsamiq-sans-cyrillic-700-normal.woff2')}) format('woff2'); unicode-range: U+0400-045F, U+0490-0491; }
@font-face { font-family: P; src: url(${font('pangolin', 'pangolin-latin-400-normal.woff2')}) format('woff2'); unicode-range: U+0000-00FF; }
@font-face { font-family: P; src: url(${font('pangolin', 'pangolin-cyrillic-400-normal.woff2')}) format('woff2'); unicode-range: U+0400-045F; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; }
body { background: #f6f3e6; color: #141414; font-family: P, sans-serif; padding: 24px; display: grid; grid-template-columns: 1.6fr 1fr; gap: 14px; }
.panel { border: 3px solid #141414; border-radius: 4px; }
.main { background: #a7cbe6; padding: 36px 40px; display: flex; flex-direction: column; gap: 18px; position: relative; }
h1 { font: 700 84px/0.95 B; text-transform: uppercase; letter-spacing: 0.01em; max-width: 9ch; }
.role { font: 700 26px/1.2 B; text-transform: uppercase; }
.line { font-size: 27px; line-height: 1.3; max-width: 26ch; }
.pill { margin-top: auto; align-self: flex-start; background: #fffdf6; border: 3px solid #141414; padding: 8px 14px; font: 700 22px/1 B; }
.mark { position: absolute; top: 30px; right: 30px; }
.scores { display: grid; grid-template-rows: repeat(3, 1fr); gap: 14px; }
.score { padding: 18px 22px; display: flex; flex-direction: column; justify-content: center; gap: 6px; font: 700 18px/1.15 B; text-transform: uppercase; }
.score b { font: 700 62px/0.95 B; text-transform: none; white-space: nowrap; }
.red { background: #d63a2b; color: #fffdf6; } .sand { background: #e2c37a; } .sea { background: #6fa36a; }
</style></head><body>
<div class="panel main">
  <svg class="mark" viewBox="0 0 48 44" width="84" height="77"><path d="M6 4h36a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H20l-10 9v-9H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" fill="#e2c37a" stroke="#141414" stroke-width="3" stroke-linejoin="round"/><path d="M17 10v14M17 17l9-7M20 15l7 9" fill="none" stroke="#141414" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <h1>${c.name}</h1>
  <p class="role">${c.role}</p>
  <p class="line">${c.line}</p>
  <span class="pill">${c.pill}</span>
</div>
<div class="scores">
  ${c.scores.map(([n, l], i) => `<div class="panel score ${['red', 'sand', 'sea'][i]}"><b>${n}</b><span>${l}</span></div>`).join('')}
</div>
</body></html>`

const dir = await mkdtemp(join(tmpdir(), 'og-'))
try {
  for (const [lang, out] of [['en', 'og.png'], ['ru', 'og-ru.png']]) {
    const page = join(dir, `${lang}.html`)
    await writeFile(page, html(copy[lang]))
    const target = fileURLToPath(new URL(`public/${out}`, root))
    execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
      '--window-size=1200,630', '--virtual-time-budget=4000', `--screenshot=${target}`, pathToFileURL(page).href,
    ], { stdio: 'ignore' })
    console.log(`public/${out}`)
  }
} finally {
  await rm(dir, { recursive: true, force: true })
}
