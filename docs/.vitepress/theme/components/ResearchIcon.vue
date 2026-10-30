<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), { name: 'arrow' })
const paths: Record<string, string[]> = {
  arrow: ['M6 18 18 6', 'M6 6h12v12'],
  design: ['M5 2h9l5 5v5M5 2v20h6M14 2v6h6', 'M14 13h6M16 13v3l-3 5h9l-3-5v-3'],
  experiment: ['M4 3h16v18H4z', 'M8 7h3M8 12h2M8 17h3m3-10 3 3-3 3M15 17h3'],
  analysis: ['M2 12h4m12 0h4M12 2v4m0 12v4', 'M6 6a8 8 0 1 1 0 12M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0'],
  model: ['m12 2 9 5v10l-9 5-9-5V7Z', 'm3 7 9 5 9-5M12 12v10m-5-17 9 5M7 10v5l5 3'],
  recommend: ['M4 4h5a3 3 0 1 1 6 0h5v5a3 3 0 1 0 0 6v5h-5a3 3 0 1 0-6 0H4v-5a3 3 0 1 1 0-6Z'],
  validation: ['M3 5h7l2 2h9v6M3 5v15h9', 'm14 18 3 3 5-8'],
  materials: ['M8 3h8M9 3v7l-5 9a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-5-9V3', 'M7 15h10'],
  formula: ['M4 4h16v16H4z', 'M4 9h16M9 4v16M13 13h4M13 17h4'],
  preparation: ['M4 4h6v5H4zM14 15h6v5h-6z', 'M10 6h7v9M7 9v8h7'],
  testing: ['M8 3h8M10 3v7l-5 9h14l-5-9V3', 'M8 15h8'],
  processing: ['M4 19V5M4 19h16', 'm7 14 3-5 3 7 3-9 4 4'],
  origin: ['M4 19V5M4 19h16', 'M7 16c3-1 3-9 6-9s3 8 7 5'],
  database: ['M5 5c0-4 14-4 14 0s-14 4-14 0v14c0 4 14 4 14 0V5', 'M5 12c0 4 14 4 14 0'],
  layers: ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5M3 16l9 5 9-5'],
  customize: ['M5 4v16M12 4v16M19 4v16', 'M2 8h6M9 15h6M16 10h6'],
  link: ['m9 15 6-6', 'M8 16H6a4 4 0 0 1-3-7l4-4a4 4 0 0 1 6 0M16 8h2a4 4 0 0 1 3 7l-4 4a4 4 0 0 1-6 0'],
  lock: ['M5 10h14v11H5z', 'M8 10V6a4 4 0 0 1 8 0v4M12 14v3'],
  ai: ['m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z'],
  check: ['m5 12 4 4L19 6'],
  download: ['M12 3v12m-5-5 5 5 5-5', 'M4 16v5h16v-5'],
  book: ['M12 6C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 2Zm0 0v15'],
}
</script>
<template><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path v-for="(path, i) in paths[name] || paths.arrow" :key="i" :d="path" /></svg></template>
