/**
 * Theme configuration for VitePress
 * @see https://vitepress.dev/reference/default-theme-config
 */

import type { DefaultTheme } from 'vitepress'

export const theme: DefaultTheme.Config = {
    lastUpdated: {
        text: "Last Updated",
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium',
            timeZone: 'Asia/Kuala_Lumpur'
        }
    },

    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 Physics Study Hub'
    },

    search: {
        provider: 'local'
    }
}