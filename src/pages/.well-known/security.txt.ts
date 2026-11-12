import type { APIRoute } from 'astro'
import { links } from '../../data/content'

// RFC 9116. Built on every deploy (daily), so Expires keeps moving forward.
export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://kesha-antonov.com/').replace(/\/$/, '')
  const expires = new Date(Date.now() + 180 * 86400000).toISOString().replace(/\.\d{3}Z$/, 'Z')
  const body = [
    `Contact: ${links.email}`,
    `Contact: ${links.telegram}`,
    `Expires: ${expires}`,
    'Preferred-Languages: en, ru',
    `Canonical: ${base}/.well-known/security.txt`,
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
