import type { APIRoute } from 'astro'
import stats from '../data/stats.json'
import { links } from '../data/content'

// humanstxt.org. The update date follows the daily stats refresh.
export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://kesha-antonov.com/').replace(/\/$/, '')
  const body = `/* TEAM */
Developer: Kesha Antonov (Innokenty Antonov, Кеша Антонов)
Contact: ${links.email.replace('mailto:', '')}
Telegram: ${links.telegram}
GitHub: ${links.github}
LinkedIn: ${links.linkedin}

/* SITE */
Last update: ${stats.updatedAt}
Language: English, Russian
Software: Astro, React
Fact sheet: ${base}/llms-full.txt
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
