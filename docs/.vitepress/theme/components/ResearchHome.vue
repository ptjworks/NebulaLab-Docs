<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()
import { onMounted } from 'vue'

import { useNebulaPreferences } from '../composables/preferences'
import ResearchIcon from './ResearchIcon.vue'
import DestinationLink from './DestinationLink.vue'
import ResearchHero from './ResearchHero.vue'
import { highlightCases } from '../highlightCases'
import HighlightVisual from './HighlightVisual.vue'
import ResearchVision from './ResearchVision.vue'

const { language, initPreferences } = useNebulaPreferences()
const tr = (zh: string, en: string) => language.value === 'zh' ? zh : en
onMounted(initPreferences)
</script>

<template>
  <main id="main-content" class="research-site">
    <ResearchHero />
    <ResearchVision />

    <section class="site-section highlights-section"><div class="site-container"><div class="section-heading"><h2>{{ t("亮点") }}</h2></div><div class="highlight-grid"><article v-for="item in highlightCases" :key="item.title"><div class="highlight-copy"><h3>{{ t(tr(item.title, item.en)) }}<small v-if="item.planned">{{ t("后续功能") }}</small></h3><p>{{ t(item.text) }}</p><div class="highlight-case"><strong>{{ t(item.example) }}</strong><p>{{ t(item.detail) }}</p><DestinationLink :href="item.href">{{ t("了解使用方式") }}</DestinationLink></div></div><HighlightVisual :kind="item.visual" /></article></div></div></section>

    <section class="site-section learning-section"><div class="site-container"><div class="section-heading horizontal-heading"><h2>{{ t(tr('从你的下一次实验开始。', 'Start with your next experiment.')) }}</h2><a class="text-link" :href="withBase('/support/')">{{ t(tr('帮助中心', 'Learn & support')) }}<ResearchIcon /></a></div></div></section>
  </main>
</template>
