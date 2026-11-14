// Fetches npm downloads and GitHub stars into src/data/stats.json.
// Keeps the previous value for any number that fails to load or drops suspiciously.
import { readFile, writeFile } from 'node:fs/promises'

const OUT = new URL('../src/data/stats.json', import.meta.url)

const PACKAGES = [
  { key: 'gifted-chat', npm: 'react-native-gifted-chat', repo: 'FaridSafi/react-native-gifted-chat' },
  { key: 'react-native-chat', npm: '@kesha-antonov/react-native-chat', repo: 'kesha-antonov/react-native-chat' },
  { key: 'zoom-reanimated', npm: 'react-native-zoom-reanimated', repo: 'kesha-antonov/react-native-zoom-reanimated' },
  { key: 'background-downloader', npm: '@kesha-antonov/react-native-background-downloader', repo: 'kesha-antonov/react-native-background-downloader' },
  { key: 'action-cable', npm: '@kesha-antonov/react-native-action-cable', repo: 'kesha-antonov/react-native-action-cable' },
  { key: 'cloud-sync', npm: 'react-native-cloud-sync', repo: 'kesha-antonov/react-native-cloud-sync' },
]

// Kesha started maintaining Gifted Chat in August 2024.
const MAINTENANCE_START = '2024-08'
// Still the maintainer (bug fixes only since June 2026), so the window runs to today.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function getJson(url, headers = {}) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, { headers: { 'user-agent': 'kesha-portfolio-stats', ...headers } })
    if (res.status === 429) { await sleep(5000 * (attempt + 1)); continue }
    if (!res.ok) throw new Error(`${res.status} ${url}`)
    return res.json()
  }
  throw new Error(`rate limited: ${url}`)
}

const iso = (d) => d.toISOString().slice(0, 10)

async function monthlyDownloads(pkg) {
  const meta = await getJson(`https://registry.npmjs.org/${pkg}`)
  let start = new Date(meta.time?.created ?? '2015-01-10')
  if (start < new Date('2015-01-10')) start = new Date('2015-01-10')
  const end = new Date(Date.now() - 86400000)
  const months = {}
  while (start <= end) {
    const chunkEnd = new Date(Math.min(start.getTime() + 500 * 86400000, end.getTime()))
    const data = await getJson(`https://api.npmjs.org/downloads/range/${iso(start)}:${iso(chunkEnd)}/${pkg}`)
    for (const { day, downloads } of data.downloads ?? []) {
      const m = day.slice(0, 7)
      months[m] = (months[m] ?? 0) + downloads
    }
    start = new Date(chunkEnd.getTime() + 86400000)
    await sleep(1200)
  }
  return months
}

async function stars(repo) {
  const headers = process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}
  const data = await getJson(`https://api.github.com/repos/${repo}`, headers)
  return data.stargazers_count
}

// Accept a new number only if it did not collapse (npm sometimes returns zeros).
const keep = (next, prev) => (typeof next === 'number' && (!prev || next >= prev * 0.5) ? next : prev)

const previous = JSON.parse(await readFile(OUT, 'utf8').catch(() => '{"packages":{}}'))
const result = { updatedAt: iso(new Date()), packages: {} }

for (const p of PACKAGES) {
  const prev = previous.packages?.[p.key] ?? {}
  const entry = { npm: p.npm, repo: p.repo }
  try {
    const months = await monthlyDownloads(p.npm)
    const sorted = Object.keys(months).sort()
    const complete = sorted.filter((m) => m < new Date().toISOString().slice(0, 7))
    entry.allTime = keep(Object.values(months).reduce((a, b) => a + b, 0), prev.allTime)
    // Rolling last 30 days, the same window npm and the shields.io badges show.
    const last30 = await getJson(`https://api.npmjs.org/downloads/point/last-month/${p.npm}`)
    entry.lastMonth = keep(last30.downloads ?? 0, prev.lastMonth)
    entry.peakMonth = complete.reduce((best, m) => (months[m] > (best?.value ?? 0) ? { month: m, value: months[m] } : best), null) ?? prev.peakMonth
    if (p.key === 'gifted-chat') {
      entry.sinceMaintenance = keep(sorted.filter((m) => m >= MAINTENANCE_START).reduce((a, m) => a + months[m], 0), prev.sinceMaintenance)
      entry.series = complete.filter((m) => m >= '2023-01').map((m) => [m, months[m]])
    }
  } catch (e) {
    console.warn(`npm ${p.npm}: ${e.message}, keeping previous`)
    Object.assign(entry, { allTime: prev.allTime, lastMonth: prev.lastMonth, peakMonth: prev.peakMonth, sinceMaintenance: prev.sinceMaintenance, series: prev.series })
  }
  try {
    entry.stars = keep(await stars(p.repo), prev.stars)
  } catch (e) {
    console.warn(`stars ${p.repo}: ${e.message}, keeping previous`)
    entry.stars = prev.stars
  }
  result.packages[p.key] = entry
  console.log(p.key, entry.allTime, entry.lastMonth, entry.stars)
}

// Public GitHub sponsors and the sponsorship goal.
async function sponsors() {
  if (!process.env.GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required for the GraphQL API')
  const query = `{ user(login: "kesha-antonov") {
    sponsors(first: 100) { totalCount nodes { __typename ... on User { login name } ... on Organization { login name } } }
    sponsorsListing { activeGoal { title targetValue kind } }
  } }`
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}`, 'content-type': 'application/json', 'user-agent': 'kesha-portfolio-stats' },
    body: JSON.stringify({ query }),
  })
  const data = await res.json()
  const u = data?.data?.user
  if (!u) throw new Error(JSON.stringify(data?.errors ?? data).slice(0, 200))
  return {
    count: u.sponsors.totalCount,
    list: u.sponsors.nodes.map((n) => ({ login: n.login, name: n.name || n.login, org: n.__typename === 'Organization' })),
    goal: u.sponsorsListing?.activeGoal ? { title: u.sponsorsListing.activeGoal.title, target: u.sponsorsListing.activeGoal.targetValue } : null,
  }
}
try {
  result.sponsors = await sponsors()
  // The Actions token cannot read the sponsorship goal; keep the last known one.
  if (!result.sponsors.goal && previous.sponsors?.goal) result.sponsors.goal = previous.sponsors.goal
  if (result.sponsors.count === 0 && previous.sponsors?.count) result.sponsors = previous.sponsors
  console.log('sponsors', result.sponsors.count)
} catch (e) {
  console.warn(`sponsors: ${e.message}, keeping previous`)
  result.sponsors = previous.sponsors
}

// Background downloader: the original in its last year of active maintenance (2019, the
// year of its last release, 2.3.4) next to Kesha's version over the last 12 full months.
const ORIGINAL_LAST_MAINTAINED = { year: 2019, downloads: 17379 }
async function downloadsBetween(pkg, from, to) {
  const res = await fetch(`https://api.npmjs.org/downloads/point/${from}:${to}/${pkg}`)
  if (!res.ok) throw new Error(`npm ${res.status}`)
  return (await res.json()).downloads
}
async function releases(pkg) {
  const res = await fetch(`https://registry.npmjs.org/${pkg.replace('/', '%2F')}`)
  if (!res.ok) throw new Error(`registry ${res.status}`)
  return Object.keys((await res.json()).versions ?? {}).length
}
try {
  const now = new Date()
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0)) // last day of the previous month
  const start = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() - 11, 1))
  const pkg = '@kesha-antonov/react-native-background-downloader'
  result.revival = {
    original: ORIGINAL_LAST_MAINTAINED,
    mine: keep(await downloadsBetween(pkg, iso(start), iso(end)), previous.revival?.mine),
    releases: await releases(pkg),
  }
  console.log('revival', result.revival)
} catch (e) {
  console.warn(`revival: ${e.message}, keeping previous`)
  result.revival = previous.revival
}

const all = Object.values(result.packages)
result.totals = {
  allTime: all.reduce((a, p) => a + (p.allTime ?? 0), 0),
  lastMonth: all.reduce((a, p) => a + (p.lastMonth ?? 0), 0),
}

await writeFile(OUT, JSON.stringify(result, null, 2) + '\n')
console.log('wrote', OUT.pathname, result.totals)
