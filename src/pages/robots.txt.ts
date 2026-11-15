import type { APIRoute } from 'astro'

// Generated from `site` in astro.config.mjs, so the sitemap URL follows a domain change.
// Everything is open to everyone. The named groups below repeat that for crawlers that only
// read their own group, and document which answer engines are welcome on purpose.
// Googlebot, Bingbot, YandexBot and other search crawlers are covered by `*`.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://kesha-antonov.com')
  const body = `User-agent: *
Allow: /

# Answer engines, their search crawlers and user-triggered fetchers are welcome.
# Short index: /llms.txt. Full fact sheet: /llms-full.txt (Russian: /ru/llms-full.txt).
# Pages as Markdown: /index.md and /ru/index.md.
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: meta-externalagent
User-agent: Amazonbot
User-agent: DuckAssistBot
User-agent: MistralAI-User
User-agent: YandexAdditional
User-agent: YandexAdditionalBot
Allow: /

Sitemap: ${new URL('/sitemap.xml', base).href}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
