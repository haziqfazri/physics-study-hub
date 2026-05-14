declare module '*.css?used' {
  const content: any
  export default content
}

declare module '*.css' {
  const content: any
  export default content
}

// For Vite CSS imports
declare module 'vite' {
  interface ImportMetaHot {
    accept(): void
  }
}
