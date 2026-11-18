// Numbers like "100 400", "$6 000", "250 тыс.+" or "19.9M" must never break across lines.
// Instead of non-breaking space characters, wrap them in <span class="nw"> (white-space: nowrap).

// A grouped number (1 269, 100,400, $6 000), optionally followed by a unit word (тыс., млн, K, M, USD),
// or a number with the short unit of its language after a space (250 mil, 20.2 Mio., 250 ألف): the units
// of compact() in src/data/langs.ts.
const UNIT = '(?:тыс\\.|млн|USD|mila|mil|mi|mln|milj\\.|mio\\.|Mio\\.|Tsd\\.|Mn|M|B|k|t\\.|ألف|مليون)(?![\\p{L}\\p{N}])'
export const NUMBER_RE = new RegExp(
  `\\$?\\d{1,3}(?:[ ,]\\d{3})+(?:\\.\\d+)?\\+?(?: ${UNIT})?\\+?|\\$?\\d+(?:\\.\\d+)? ${UNIT}\\+?`,
  'gu',
)

// Wrap matches only in text between tags, never inside tags, <script> or <style>.
export function wrapNumbersInHtml(html) {
  return html.replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)|([^<]+)/g, (m, tag, text) => {
    if (tag) return tag
    return text.replace(NUMBER_RE, (n) => `<span class="nw">${n}</span>`)
  })
}

// Astro integration: post-process the built HTML files.
export default function keepNumbersTogether() {
  return {
    name: 'keep-numbers-together',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const { readdir, readFile, writeFile } = await import('node:fs/promises')
        const { fileURLToPath } = await import('node:url')
        const { join } = await import('node:path')
        const root = fileURLToPath(dir)
        const walk = async (d) => {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name)
            if (e.isDirectory()) await walk(p)
            else if (e.name.endsWith('.html')) await writeFile(p, wrapNumbersInHtml(await readFile(p, 'utf8')))
          }
        }
        await walk(root)
      },
    },
  }
}
