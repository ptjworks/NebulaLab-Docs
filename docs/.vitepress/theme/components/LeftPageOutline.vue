<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import { computed, nextTick, ref } from 'vue'
import { onContentUpdated, useData } from 'vitepress'
const { hash, page } = useData()
const isManual = computed(() => /^(en\/)?manual\//.test(page.value.relativePath))
const headings = ref<{ id: string; title: string; level: number }[]>([])
onContentUpdated(async () => {
  if (isManual.value) { headings.value = []; return }
  await nextTick()
  headings.value = Array.from(document.querySelectorAll<HTMLElement>('.vp-doc h2[id], .vp-doc h3[id]')).map(element => ({
    id: element.id,
    title: Array.from(element.childNodes).filter(node => !(node instanceof HTMLElement && node.classList.contains('header-anchor'))).map(node => node.textContent).join('').trim(),
    level: Number(element.tagName.slice(1))
  }))
})
</script>
<template><section v-if="!isManual && headings.length" class="doc-left-outline" :aria-label="t(&quot;本页目录&quot;)"><h2>{{ t("本页目录") }}</h2><a v-for="heading in headings" :key="heading.id" :href="'#' + heading.id" :class="{ nested: heading.level === 3 }" :aria-current="hash === '#' + heading.id ? 'location' : undefined">{{ t(heading.title) }}</a></section></template>
