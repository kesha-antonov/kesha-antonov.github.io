// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import keepNumbersTogether from './src/utils/keepNumbersTogether.mjs'

export default defineConfig({
  site: 'https://kesha-antonov.com',
  integrations: [react(), keepNumbersTogether()],
})
