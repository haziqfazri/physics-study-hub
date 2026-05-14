// docs/.vitepress/theme/index.ts
/// <reference types="vitepress/client" />
import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
import PdfViewer from '../../components/PdfViewer.vue'
import './style.css'

// Import KaTeX CSS for styling
import 'katex/dist/katex.min.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('PdfViewer', PdfViewer)
    }
} satisfies Theme
