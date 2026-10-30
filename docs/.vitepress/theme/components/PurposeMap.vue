<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { useShowcase } from '../composables/useShowcase'
import ResearchIcon from './ResearchIcon.vue'
const root = ref<HTMLElement | null>(null)
const { step, playing, visible, select, toggle } = useShowcase(root, 6, 3800)
const regions = [
  { title: '实验方案', icon: 'formula', rect: [0.7, 1, 29.4, 54.7], text: '把物料信息、配方变量、制备步骤与样品编号组织成实验方案，作为后续记录与比较的依据。', href: '/manual/experiment-management', state: '实验设计与记录', route: 'M185 354V382H640V405' },
  { title: '实验数据', icon: 'processing', rect: [30.8, 1, 42.2, 54.7], text: '连接物料、配方、过程与表征数据；按同类测试批量导入、处理、复用模板，再交接 Origin 作图。', href: '/manual/workflow', state: '批量处理与来源关联', route: 'M640 355V405' },
  { title: '文献数据', icon: 'book', rect: [73.8, 1, 25.5, 54.7], text: '规划主动收集文献、解析并提取材料、配方与性能信息，让文献来源与实验数据建立关联。', href: '/manual/ai-agents', state: '后续建设方向', route: 'M1100 354V382H640V405' },
  { title: '数据中心', icon: 'database', rect: [0.7, 61.5, 98.6, 14.2], text: '汇集获准上报的记录、文件及修订，按身份与资源权限检索、预览和获取，保留数据来源。', href: '/manual/data-center', state: '按部署与权限接入', route: 'M200 380H640V440H1070' },
  { title: 'AI 智能体', icon: 'ai', rect: [0.7, 77.3, 53.5, 21.5], text: '规划在获准数据上开展文献整理、周报汇总与智能体协作；图中的模型训练、方案生成等代表后续探索方向。', href: '/manual/ai-agents', state: '后续功能 · 规划中', route: 'M640 477V489H350V540' },
  { title: '插件与工具', icon: 'customize', rect: [57.2, 77.3, 42, 21.5], text: '用模板、脚本与插件扩展科研方法。计算模拟、自动化实验等工具对接为扩展方向，具体以实际交付为准。', href: '/manual/community', state: '模板复用与扩展方向', route: 'M694 561H735' }
]
const selected = computed(() => regions[step.value])
const style = (rect: number[]) => ({ left: rect[0] + '%', top: rect[1] + '%', width: rect[2] + '%', height: rect[3] + '%' })
</script>
<template>
  <div ref="root" class="purpose-map" :class="{ 'is-playing': playing && visible }">
    <div class="map-toolbar"><span>点击图中模块，查看数据如何连接</span><button type="button" class="demo-play" @click="toggle">{{ playing ? '暂停数据流' : '播放数据流' }}<span aria-hidden="true">{{ playing ? 'Ⅱ' : '▷' }}</span></button></div>
    <div class="map-scroll" tabindex="0" aria-label="全链路数据库示意图，可左右滚动查看">
      <div class="map-image-wrap">
        <img :src="withBase('/images/research-database-map.png')" alt="实验方案、实验数据、文献数据汇入数据中心，连接 AI 智能体和其他插件工具的全链路数据库架构图" width="1280" height="640" fetchpriority="high">
        <svg class="map-data-path" viewBox="0 0 1280 640" fill="none" aria-hidden="true"><path :key="step" :d="selected.route" /></svg>
        <button v-for="(region, i) in regions" :key="region.title" type="button" class="map-hotspot" :class="{ selected: step === i }" :style="style(region.rect)" :aria-label="'查看' + region.title" :aria-pressed="step === i" @click="select(i)"><span>{{ region.title }}</span></button>
      </div>
    </div>
    <p class="map-mobile-hint">左右滑动可查看完整图示，点击模块查看说明。</p>
    <div class="map-detail"><ResearchIcon :name="selected.icon" /><div><div class="map-detail-title"><h3>{{ selected.title }}</h3><span>{{ selected.state }}</span></div><p>{{ selected.text }}</p></div><a :href="withBase(selected.href)">详细介绍<ResearchIcon /></a></div>
    <p class="map-status">全链路建设示意；文献自动解析、AI 模型训练与方案生成等能力处于规划阶段。</p>
  </div>
</template>
