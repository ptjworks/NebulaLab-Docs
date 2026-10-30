<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()

import { useNebulaPreferences } from '../composables/preferences'
const { language } = useNebulaPreferences()
const groups = [
  { title: '产品与功能', en: 'Product & features', links: [['软件介绍', '/products/#overview'], ['实验数据收集', '/products/#experiment-data'], ['模拟数据收集', '/products/#simulation-data'], ['文献数据收集', '/products/#literature-data']] },
  { title: '全链路数据', en: 'Connected data', links: [['数据管理', '/manual/data-management'], ['数据中心', '/products/#data-center-platform'], ['LLM模型', '/products/#llm-rag'], ['材料智能体', '/products/#ml-agent']] },
  { title: '帮助中心', en: 'Help', links: [['学习资源', '/tutorials/'], ['社区', '/community/']] },
  { title: '下载与联系我们', en: 'Download & contact', links: [['下载', '/download/'], ['GitHub Issues · 官方反馈', 'https://github.com/TshyGO/NebulaLab-Releases/issues'], ['Support@nebulalab.io', 'mailto:support@nebulalab.io']] }
]
</script>
<template>
  <footer class="research-footer">
    <div class="site-container footer-main">
      <div class="footer-brand"><a :href="withBase('/')"><img :src="withBase('/logo.png')" alt="" width="36" height="36"><span>Nebula Lab<span class="brand-dot">.</span></span></a><p>{{ t(language === 'zh' ? '连接实验过程，积累科研价值。' : 'Connect experiments. Build lasting knowledge.') }}</p><span>Built for research.</span></div>
      <div v-for="group in groups" :key="group.title" class="footer-column"><h2>{{ t(language === 'zh' ? group.title : group.en) }}</h2><a v-for="link in group.links" :key="link[1]" :href="/^(https?:|mailto:)/.test(link[1]) ? link[1] : withBase(link[1])" :target="link[1].startsWith('https:') ? '_blank' : undefined" :rel="link[1].startsWith('https:') ? 'noreferrer' : undefined">{{ t(link[0]) }}</a></div>
    </div>
    <div class="site-container footer-bottom"><span>© 2026 Nebula Lab</span><a href="https://github.com/TshyGO/NebulaLab-Releases" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </footer>
</template>
