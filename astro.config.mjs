// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { createHash } from 'node:crypto'
import keepNumbersTogether from './src/utils/keepNumbersTogether.mjs'
import { THEME_INIT } from './src/scripts/theme-init.mjs'

const sha256 = (text) => `sha256-${createHash('sha256').update(text).digest('base64')}`

export default defineConfig({
  site: 'https://kesha-antonov.com',
  integrations: [react(), keepNumbersTogether()],
  // GitHub Pages cannot send headers, so the policy ships as a <meta> tag on every page.
  // Scripts run only from this origin or by hash. Styles allow inline because the markup
  // uses style attributes for CSS variables; there is no user input to inject CSS through.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://github.com https://avatars.githubusercontent.com",
        "media-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: { hashes: [sha256(THEME_INIT)] },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
})
