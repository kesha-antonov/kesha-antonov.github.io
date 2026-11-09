import type { APIRoute } from 'astro'

// Generated from `site` in astro.config.mjs, so the sitemap URL follows a domain change.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://kesha-antonov.github.io')
  const body = `User-agent: *
Allow: /

# Answer engines and their search crawlers are welcome; the short index is at /llms.txt.
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Applebot-Extended
Allow: /

Sitemap: ${new URL('/sitemap.xml', base).href}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
