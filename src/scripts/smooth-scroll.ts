// In-page links glide to their section: a quick start and a soft landing, short even
// for long jumps. A wheel, touch or key press from the visitor stops the glide.
// With reduced motion the page jumps straight there.

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

export function initSmoothScroll() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0

  const stop = () => {
    if (frame) cancelAnimationFrame(frame)
    frame = 0
  }
  for (const ev of ['wheel', 'touchstart', 'keydown']) window.addEventListener(ev, stop, { passive: true })

  const glideTo = (target: HTMLElement) => {
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
    const max = document.documentElement.scrollHeight - window.innerHeight
    const to = Math.min(max, Math.max(0, target.getBoundingClientRect().top + window.scrollY - margin))
    const from = window.scrollY
    const dist = to - from
    stop()
    if (reduced.matches || Math.abs(dist) < 2) {
      window.scrollTo(0, to)
      return
    }
    const duration = Math.min(650, 240 + Math.abs(dist) * 0.08)
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      window.scrollTo(0, from + dist * easeOutQuart(t))
      frame = t < 1 ? requestAnimationFrame(tick) : 0
    }
    frame = requestAnimationFrame(tick)
  }

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const link = (e.target as Element).closest?.('a[href^="#"]') as HTMLAnchorElement | null
    if (!link) return
    const id = decodeURIComponent(link.hash.slice(1))
    const target = id ? document.getElementById(id) : document.body
    if (!target) return
    e.preventDefault()
    glideTo(target)
    history.pushState(null, '', id ? `#${id}` : location.pathname)
    // Move keyboard focus with the view, without a second jump.
    if (target !== document.body) {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    }
  })
}
