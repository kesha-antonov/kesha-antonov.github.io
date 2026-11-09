import type { APIRoute } from 'astro'
import { llmsFull } from '../data/llms'

export const GET: APIRoute = ({ site }) =>
  new Response(llmsFull('en', site), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
