/**
 * Markdown configuration for VitePress
 * @see https://vitepress.dev/reference/markdown
 */

import type { MarkdownOptions } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export const markdown: MarkdownOptions = {
  config: (md) => {
    md.use(mathjax3)
  }
}