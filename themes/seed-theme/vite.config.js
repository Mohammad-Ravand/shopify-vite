import { defineConfig } from 'vite'

import shopify from 'vite-plugin-shopify'
import shopifyModules from 'vite-plugin-shopify-modules'
import shopifyThemeSettings from 'vite-plugin-shopify-theme-settings'

export default defineConfig({
  build: {
    manifest: true
  },
  plugins: [
    // Add shopify plugin to enable entrypoint detection, smart generation of script and link tags, and support for Shopify CDN-hosted assets
    shopify(),
    // Add shopify modules plugin to enable "modules" folder pattern collecting Liquid, CSS, and JS for theme modules
    shopifyModules(),
    shopifyThemeSettings()
  ]
})