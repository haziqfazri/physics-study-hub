/**
 * Configuration Barrel Export
 * Exports all configuration files from the configs directory for easy import in the main config file.
 * This allows for better organization and separation of concerns in the VitePress configuration.
 * Each configuration file (navigation, theme, markdown) is responsible for a specific aspect of the site configuration.
 */

export {head} from './head'
export {nav} from './navigation'
export {theme} from './theme'
export {markdown} from './markdown'
export {metadata} from './metadata'
export {sidebars} from './sidebars'
