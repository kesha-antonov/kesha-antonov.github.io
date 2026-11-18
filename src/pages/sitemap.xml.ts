import type { APIRoute } from 'astro'
import stats from '../data/stats.json'
import { LANGS, DEFAULT_LANG, langPath } from '../data/langs'

// Static sitemap with hreflang alternates. Uses `site` from astro.config.mjs.
// Each path exists in every language: English at the root, the others under their prefix.
const paths = ['/', '/react-native-developer/']

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://kesha-antonov.com')
  const abs = (p: string) => new URL(p, base).href
  const urls = paths
    .flatMap((path) => {
      const alternates = [
        ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(langPath(l, path))}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(langPath(DEFAULT_LANG, path))}"/>`,
      ].join('\n')
      return LANGS.map((l) => langPath(l, path)).map((p) => `  <url>\n    <loc>${abs(p)}</loc>\n    <lastmod>${stats.updatedAt}</lastmod>\n${alternates}\n  </url>`)
    })
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
