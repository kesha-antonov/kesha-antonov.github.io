import type { APIRoute } from 'astro'
import { llmsFull } from '../../data/llms'

// Markdown copy of the Russian page, at the address the llmstxt.org proposal suggests (page URL + .md).
export const GET: APIRoute = ({ site }) =>
  new Response(llmsFull('ru', site), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
