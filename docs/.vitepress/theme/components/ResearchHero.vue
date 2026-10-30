<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()

import ResearchIcon from './ResearchIcon.vue'
import ArchitectureMap from './ArchitectureMap.vue'
</script>
<template>
  <section class="overview-hero">
    <div class="hero-network" aria-hidden="true"><svg viewBox="0 0 1440 800" fill="none"><path d="M0 470 100 320 215 390 280 245 95 130M100 320 70 570 215 390 355 555M1440 180l-150 80-85-115-125 75 15 170 195-130 110 220M1205 145l80-100 155 55M1095 390l-30 190 140 75 195-175"/><g><circle cx="100" cy="320" r="11"/><circle cx="215" cy="390" r="8"/><circle cx="280" cy="245" r="15"/><circle cx="70" cy="570" r="7"/><circle cx="1290" cy="260" r="15"/><circle cx="1205" cy="145" r="9"/><circle cx="1095" cy="390" r="12"/><circle cx="1400" cy="480" r="8"/></g></svg></div>
    <div class="site-container">
      <div class="hero-heading"><h1>Nebula Lab</h1><p class="hero-lead">{{ t("实现本地定制化全链路数据管理") }}</p><p class="hero-description-v4"><strong>{{ t("构建数据驱动的材料研发闭环平台，让实验更高效、决策更智能") }}</strong></p></div>
      <div class="overview-actions"><a class="button button-orange" :href="withBase('/products/#experiment-data')">{{ t("探索产品功能") }}<ResearchIcon /></a><a class="button button-outline" :href="withBase('/download/')"><ResearchIcon name="download" />{{ t("下载 Nebula Lab") }}</a></div>
      <div class="architecture-heading"><h2>{{ t("架构") }}</h2></div>
      <ArchitectureMap />
    </div>
  </section>
</template>
