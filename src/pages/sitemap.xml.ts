import type { APIRoute } from 'astro'
import stats from '../data/stats.json'

// Static sitemap with hreflang alternates. Uses `site` from astro.config.mjs.
const pages = [
  { path: '/', lang: 'en' },
  { path: '/ru/', lang: 'ru' },
]

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://kesha-antonov.github.io')
  const abs = (p: string) => new URL(p, base).href
  const alternates = [
    ...pages.map((p) => `    <xhtml:link rel="alternate" hreflang="${p.lang}" href="${abs(p.path)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('/')}"/>`,
  ].join('\n')
  const urls = pages
    .map((p) => `  <url>\n    <loc>${abs(p.path)}</loc>\n    <lastmod>${stats.updatedAt}</lastmod>\n${alternates}\n  </url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
