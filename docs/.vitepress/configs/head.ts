/**
 * HTML head configuration for the VitePress site.
 */

import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // Favicon
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],

  // KaTeX CSS for math rendering
  ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css' }]
]