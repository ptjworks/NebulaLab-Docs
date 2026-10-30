<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import { nextTick, ref, watch } from 'vue'
import { useData } from 'vitepress'
const { hash, page } = useData()
const open = ref(false)
const trigger = ref<HTMLButtonElement | null>(null)
const panel = ref<HTMLElement | null>(null)
async function show() {
  open.value = true
  await nextTick()
  panel.value?.querySelector<HTMLButtonElement>('.directory-close')?.focus()
}
async function close(restoreFocus = false) {
  open.value = false
  if (restoreFocus) { await nextTick(); trigger.value?.focus() }
}
function onPanelClick(event: MouseEvent) {
  if (event.target instanceof Element && event.target.closest('a')) close()
}
function onKey(event: KeyboardEvent) {
  if (!open.value) return
  if (event.key === 'Escape') { event.preventDefault(); close(true) }
  if (event.key === 'Tab') {
    const elements = Array.from(panel.value?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') || []).filter(element => element.offsetWidth > 0)
    const first = elements[0], last = elements[elements.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }
}
watch([hash, () => page.value.relativePath], () => close())
</script>
<template>
  <button ref="trigger" class="directory-trigger" type="button" :aria-expanded="open" aria-controls="page-directory" @click="show">{{ t("☰ 本页目录") }}</button>
  <button v-if="open" class="directory-backdrop" type="button" tabindex="-1" :aria-label="t(&quot;关闭本页目录&quot;)" @click="close(true)" />
  <aside id="page-directory" ref="panel" class="info-sidebar" :class="{ 'directory-open': open }" :role="open ? 'dialog' : undefined" :aria-modal="open ? true : undefined" :aria-label="t(&quot;本页目录&quot;)" @click="onPanelClick" @keydown="onKey"><button class="directory-close" type="button" @click="close(true)">{{ t("关闭目录 ×") }}</button><slot /></aside>
</template>
