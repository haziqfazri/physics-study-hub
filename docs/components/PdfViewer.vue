<script setup lang="ts">
import { PDFViewer } from '@embedpdf/vue-pdf-viewer'

defineProps<{
  src: string
}>()
</script>

<template>
  <div style="height: 100vh;">
    <PDFViewer
      :config="{
        src,
        theme: { preference: 'light' }
      }"
      :style="{ width: '100%', height: '100%' }"
    />
  </div>
</template>