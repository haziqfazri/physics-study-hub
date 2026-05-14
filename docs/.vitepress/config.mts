import { defineConfig } from 'vitepress'
import {
  head,
  markdown,
  nav,
  sidebars,
  theme,
  metadata
} from './configs'

/**
 * VitePress Configuration
 * Physics I Study Hub
 */

export default defineConfig({
  // Site metadata
  title: metadata.title,
  description: metadata.description,
  base: metadata.base,
  lang: metadata.lang,

  // HTML head (favicon, CDN, meta tags)
  head,

  // Markdown plugins
  markdown,

  // Theme configuration
  themeConfig: {
    nav,
    sidebar: sidebars,
    ...theme
  }
})