<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import { ref } from 'vue'
import ResearchIcon from './ResearchIcon.vue'
import { useShowcase } from '../composables/useShowcase'

const root = ref<HTMLElement | null>(null)
const { step, playing, visible, select, toggle } = useShowcase(root, 6, 2300)
const sources = [
  { title: '实验数据', icon: 'testing' },
  { title: '模拟数据', icon: 'processing' },
  { title: '文献数据', icon: 'book' }
]
const paths = [
  'M167 90V116H500V142',
  'M500 90V142',
  'M833 90V116H500V142',
  'M500 242V268H250V294',
  'M500 242V268H750V294'
]
</script>
<template>
  <div ref="root" class="architecture-map" :class="{ 'architecture-playing': playing && visible }">
    <button class="architecture-play" type="button" :aria-label="t(playing ? '暂停架构演示' : '播放架构演示')" @click="toggle"><span aria-hidden="true">{{ t(playing ? 'Ⅱ' : '▷') }}</span></button>
    <div class="architecture-canvas" role="group" :aria-label="t(&quot;实验数据、模拟数据、文献数据汇入数据中心，连接 LLM 与 RAG 知识助手和 ML 材料智能体&quot;)">
      <svg class="architecture-wires" viewBox="0 0 1000 406" preserveAspectRatio="none" fill="none" aria-hidden="true"><path v-for="(path, i) in paths" :key="i" :d="path" :class="{ active: (i < 3 && step === i) || step === 3 || (step === 4 && i === 3) || (step === 5 && i === 4) }" /></svg>
      <button v-for="(node, i) in sources" :key="node.title" type="button" class="architecture-node architecture-source" :class="{ active: step === i }" :aria-pressed="step === i" :aria-label="t('选择' + node.title)" @click="select(i)"><ResearchIcon :name="node.icon" /><h3>{{ t(node.title) }}</h3></button>
      <button type="button" class="architecture-node architecture-center" :class="{ active: step === 3 }" :aria-pressed="step === 3" :aria-label="t(&quot;选择数据中心&quot;)" @click="select(3)"><ResearchIcon name="database" /><h3>{{ t("数据中心") }}</h3></button>
      <button type="button" class="architecture-node architecture-agent" :class="{ active: step === 4 }" :aria-pressed="step === 4" :aria-label="t(&quot;选择 LLM 与 RAG 知识助手&quot;)" @click="select(4)"><ResearchIcon name="book" /><h3><span>Large Language Model (LLM)</span><strong>{{ t("+RAG知识助手") }}</strong></h3></button>
      <button type="button" class="architecture-node architecture-tools" :class="{ active: step === 5 }" :aria-pressed="step === 5" :aria-label="t(&quot;选择 ML 材料智能体&quot;)" @click="select(5)"><ResearchIcon name="ai" /><h3><span>Machine Learning (ML)</span><strong>{{ t("材料智能体") }}</strong></h3></button>
    </div>
  </div>
</template>
