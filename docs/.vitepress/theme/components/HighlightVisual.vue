<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import { ref } from 'vue'
import ResearchIcon from './ResearchIcon.vue'
defineProps<{ kind: number }>()
const options = ref([{ name: '配方计算', enabled: true, icon: 'formula' }, { name: '图谱处理', enabled: true, icon: 'processing' }, { name: '计算脚本', enabled: false, icon: 'customize' }])
</script>
<template>
  <div class="highlight-visual" :class="'highlight-visual-' + kind">
    <template v-if="kind === 0"><span class="visual-label">{{ t("定制模块 · 按需选择") }}</span><label v-for="option in options" :key="option.name" class="module-option"><ResearchIcon :name="option.icon" /><span>{{ t(option.name) }}</span><input v-model="option.enabled" type="checkbox" :aria-label="t('演示选择' + option.name)"></label><div class="local-storage-badge"><ResearchIcon name="database" />{{ t("本地存储") }}</div><small>{{ t("勾选小功能，组合个人工具") }}</small></template>
    <template v-else-if="kind === 1"><span class="visual-label">{{ t("标准模板 · 插件扩展") }}</span><svg viewBox="0 0 190 110" role="img" :aria-label="t(&quot;三条曲线通过统一处理流程&quot;)"><path d="M15 90V15m0 75h160"/><path class="visual-data-link" d="M20 82c20 0 15-58 45-58s25 61 55 33 35 3 50-8M20 85c20 0 15-43 45-43s25 55 55 30 35 1 50-9M20 88c20 0 15-28 45-28s25 46 55 25 35 1 50-10"/></svg><div class="mini-pipeline"><span>{{ t("裁剪") }}</span><i>→</i><span>{{ t("平滑") }}</span><i>→</i><span>{{ t("归一化") }}</span></div><small>{{ t("保存模板 → 同类数据批量应用") }}</small></template>
    <template v-else-if="kind === 2"><span class="visual-label">{{ t("上传方法 · 分权限查看") }}</span><div class="community-visual"><div><ResearchIcon name="layers" /><span>{{ t("处理流程") }}</span></div><div><ResearchIcon name="customize" /><span>{{ t("计算脚本") }}</span></div><b>↓</b><strong><ResearchIcon name="lock" />{{ t("获准成员") }}</strong></div><small>{{ t("资源 · 版本 · 访问权限") }}</small></template>
    <template v-else-if="kind === 3"><span class="visual-label">{{ t("一条完整的实验链路") }}</span><div class="journey-visual"><span><ResearchIcon name="materials" />{{ t("物料") }}</span><i>→</i><span><ResearchIcon name="formula" />{{ t("配方") }}</span><i>→</i><span><ResearchIcon name="testing" />{{ t("测试") }}</span><i>→</i><span><ResearchIcon name="origin" />{{ t("成果") }}</span></div><div class="journey-return">{{ t("↳ 来源、样品与版本 ↲") }}</div><small>{{ t("从一张图，回溯一次实验") }}</small></template>
    <template v-else-if="kind === 4"><span class="visual-label">{{ t("LLM + RAG · 规划中") }}</span><div class="knowledge-visual"><ResearchIcon name="database" /><span>{{ t("专业数据库") }}</span><i>↓</i><ResearchIcon name="book" /><strong>{{ t("检索 · 关联来源") }}</strong><i>↓</i><span>{{ t("实验方案报告") }}</span></div><small>{{ t("知识检索 · 相似方案 · 来源引用") }}</small></template>
    <template v-else><span class="visual-label">{{ t("ML 材料智能体 · 规划中") }}</span><svg viewBox="0 0 190 150" role="img" :aria-label="t(&quot;领域数据用于训练模型，支持材料性能预测与逆向设计&quot;)"><path class="visual-data-link" d="M36 38 95 75l59-37M36 115 95 75l59 40"/><circle cx="95" cy="75" r="26" class="ai-core"/><path d="m95 59 4 11 11 5-11 4-4 12-4-12-12-4 12-5Z"/><rect x="17" y="22" width="37" height="32" rx="6"/><rect x="136" y="22" width="37" height="32" rx="6"/><rect x="17" y="100" width="37" height="32" rx="6"/><rect x="136" y="100" width="37" height="32" rx="6"/><path d="M28 32h16m-16 7h12m107-7h16m-16 7h12M28 111h16m-16 7h12m107-7h16m-16 7h12"/></svg><small>{{ t("预测 · 筛选 · 多目标优化") }}</small></template>
  </div>
</template>
