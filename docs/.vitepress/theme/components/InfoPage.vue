<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()
import { computed } from 'vue'
import { useData } from 'vitepress'
import { pageContent, type PageKind } from '../siteContent'
import ResearchIcon from './ResearchIcon.vue'
import DestinationLink from './DestinationLink.vue'
import PageDirectory from './PageDirectory.vue'
const props = defineProps<{ kind: PageKind }>()
const page = computed(() => pageContent[props.kind])
const { hash } = useData()
const activeSection = computed(() => hash.value.slice(1) || page.value.sections[0]?.id)
</script>
<template>
  <main id="main-content" class="research-site info-page">
    <div class="site-container info-layout">
      <PageDirectory><nav :aria-label="t(&quot;本页内容&quot;)"><h2>{{ t("本页内容") }}</h2><a v-for="section in page.sections" :key="section.id" :href="'#' + section.id" :aria-current="activeSection === section.id ? 'location' : undefined">{{ t(section.title) }}</a></nav></PageDirectory>
      <div class="info-main">
        <header class="info-hero"><h1>{{ t(page.title) }}</h1><p class="info-intro">{{ t(page.intro) }}</p></header>
        <div class="info-sections"><section v-for="(section, i) in page.sections" :id="section.id" :key="section.id" class="info-section"><div class="info-number">{{ t(String(i + 1).padStart(2, '0')) }}<span v-if="section.badge" class="status-label">{{ t(section.badge) }}</span></div><div class="info-section-copy"><h2>{{ t(section.title) }}</h2><p>{{ t(section.text) }}</p><ul><li v-for="point in section.points" :key="point"><ResearchIcon name="check" />{{ t(point) }}</li></ul><DestinationLink v-if="section.href" :href="section.href">{{ t(section.action) }}</DestinationLink></div></section></div>
      </div>
    </div>
    <section class="info-end"><div class="site-container"><div><p class="eyebrow">YOUR NEXT EXPERIMENT</p><h2>{{ t("从下一次实验，开始积累。") }}</h2></div><a class="button button-orange" :href="withBase(kind === 'download' ? '/tutorials/' : '/download/')">{{ t(kind === 'download' ? '查看上手指南 · 帮助中心' : '下载 Nebula Lab') }}<ResearchIcon /></a></div></section>
  </main>
</template>
