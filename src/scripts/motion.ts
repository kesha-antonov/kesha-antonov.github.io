// Scroll reveals: panels drop in with a short stagger, ink icons draw themselves,
// numbers count up. Only content below the fold at load is touched, so nothing
// visible ever blinks. Without JS or with reduced motion the page is static.

const TARGETS = [
  '.chapter > h2',
  '.tier.merged',
  '.scores > .panel',
  '.chapter .panel',
  '.tier.end .panel',
  '.chapter tbody tr',
  '.likes li',
  '.world',
].join(', ')
const ICONS = 'svg[class$="-icon"], .likes svg'
const COUNTERS = '.score .num, .facts .num'
const STAGGER = 70
const MAX_STAGGER = 5

export function initMotion() {
  if (!('IntersectionObserver' in window)) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const fold = window.innerHeight
  const all = [...document.querySelectorAll<HTMLElement>(TARGETS)]
  // A panel inside another target moves with its parent.
  const targets = all.filter((el) => !all.some((p) => p !== el && p.contains(el)) && el.getBoundingClientRect().top > fold)
  if (!targets.length) return

  for (const el of targets) {
    el.classList.add('rv')
    el.querySelectorAll<SVGSVGElement>(ICONS).forEach(prepIcon)
    el.querySelectorAll<HTMLElement>(COUNTERS).forEach(prepCounter)
  }

  const io = new IntersectionObserver((entries) => {
    const hits = entries
      .filter((e) => e.isIntersecting)
      .map((e) => e.target as HTMLElement)
      .sort((a, b) => {
        const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect()
        return ra.top - rb.top || ra.left - rb.left
      })
    hits.forEach((el, i) => {
      io.unobserve(el)
      const delay = Math.min(i, MAX_STAGGER) * STAGGER
      el.style.setProperty('--rv-delay', `${delay}ms`)
      el.classList.add('in')
      el.querySelectorAll<HTMLElement>('[data-count]').forEach((n) => setTimeout(() => countUp(n), delay + 120))
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
  targets.forEach((el) => io.observe(el))
}

// Each stroked shape gets pathLength=1 so one dash rule draws any shape.
function prepIcon(svg: SVGSVGElement) {
  svg.classList.add('draw')
  svg.querySelectorAll('path, circle, rect, ellipse, line, polyline, polygon').forEach((s) => {
    const stroke = s.getAttribute('stroke')
    if (!stroke || stroke === 'none' || s.hasAttribute('stroke-dasharray')) return
    s.setAttribute('pathLength', '1')
  })
}

// "19.9M", "250K+", "1,269", "250 тыс.+": the leading number counts, the rest stays.
const NUM = /^([^\d]*)(\d[\d\s,.  ]*\d|\d)(.*)$/s
function prepCounter(el: HTMLElement) {
  const node = textNodeWithDigits(el)
  if (!node) return
  // Ratings like "4.9 / 5" stay as they are.
  if (node.data.includes('/')) return
  const m = NUM.exec(node.data)
  if (!m) return
  const raw = m[2]
  const group = /,/.test(raw) && !/\.\d+$/.test(raw.replace(/,/g, '')) && /,\d{3}/.test(raw) ? ',' : /[\s  ]\d{3}/.test(raw) ? ' ' : ''
  const plain = group === ',' ? raw.replace(/,/g, '') : raw.replace(/[\s  ]/g, '')
  const value = parseFloat(plain)
  if (!isFinite(value) || value === 0) return
  const decimals = (plain.split('.')[1] || '').length
  // Small values like a rating or "3" read better without counting.
  if (value < 10) return
  el.dataset.count = JSON.stringify({ pre: m[1], post: m[3], value, decimals, group, raw })
  el.style.minWidth = `${el.getBoundingClientRect().width}px`
  el.style.display = el.style.display || 'inline-block'
  node.data = m[1] + format(0, decimals, group) + m[3]
}

function countUp(el: HTMLElement) {
  const node = textNodeWithDigits(el) ?? el.firstChild
  const spec = el.dataset.count
  if (!node || !spec) return
  const { pre, post, value, decimals, group, raw } = JSON.parse(spec)
  const start = performance.now()
  const dur = 900
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - t, 3)
    ;(node as Text).data = pre + (t < 1 ? format(value * eased, decimals, group) : raw) + post
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function format(n: number, decimals: number, group: string) {
  const [int, frac] = n.toFixed(decimals).split('.')
  const grouped = group ? int.replace(/\B(?=(\d{3})+(?!\d))/g, group === ' ' ? ' ' : ',') : int
  return frac ? `${grouped}.${frac}` : grouped
}

function textNodeWithDigits(el: HTMLElement): Text | null {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  for (let n = walker.nextNode(); n; n = walker.nextNode()) if (/\d/.test((n as Text).data)) return n as Text
  return null
}
