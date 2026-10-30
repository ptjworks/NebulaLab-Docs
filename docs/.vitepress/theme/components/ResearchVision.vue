<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import ResearchIcon from './ResearchIcon.vue'
const steps = [
  { name: '配方设计', en: 'Formulation', icon: 'design' },
  { name: '实验执行', en: 'Experiment', icon: 'experiment' },
  { name: '数据沉淀', en: 'Data', icon: 'database' },
  { name: '自动分析', en: 'Analysis', icon: 'analysis' },
  { name: '模型学习', en: 'Model', icon: 'model' },
  { name: '推荐实验', en: 'Recommendation', icon: 'recommend' },
  { name: '再验证', en: 'Validation', icon: 'validation' }
]
</script>
<template>
  <section id="vision" class="site-section vision-section"><div class="site-container">
    <div class="section-heading"><h2>{{ t("愿景") }}</h2></div>
    <div class="vision-schematic"><div class="vision-scroll" role="region" :aria-label="t(&quot;七步材料研发闭环，可左右滚动查看&quot;)" tabindex="0"><div class="vision-track">
      <ol class="vision-stages" :aria-label="t(&quot;材料研发闭环愿景&quot;)"><li v-for="(step, i) in steps" :key="step.name"><ResearchIcon :name="step.icon" /><h3>{{ t(step.name) }}</h3><small>({{ t(step.en) }})</small><span v-if="i < steps.length - 1" class="vision-stage-arrow" aria-hidden="true">→</span></li></ol>
      <div class="vision-feedback"><svg viewBox="0 0 1000 42" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M72 0v24q0 6 6 6h702q6 0 6-6V3"/><path d="m779 10 7-8 7 8"/></svg><p>{{ t("形成闭环，持续提升研发效率") }}</p></div>
    </div></div><p class="vision-scroll-hint">{{ t("左右滑动查看完整闭环") }}</p></div>
  </div></section>
</template>
