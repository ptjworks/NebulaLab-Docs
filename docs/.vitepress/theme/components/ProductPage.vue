<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()
import { computed } from 'vue'
import { useData } from 'vitepress'
import { modules } from '../siteContent'
import ResearchIcon from './ResearchIcon.vue'
import DestinationLink from './DestinationLink.vue'
import FeatureExplorer from './FeatureExplorer.vue'
import PageDirectory from './PageDirectory.vue'
const { hash } = useData()
const active = computed(() => hash.value.slice(1) || 'overview')
const sections = [
  { id: 'experiment-data', name: '1. 实验数据收集' },
  { id: 'simulation-data', name: '2. 模拟数据收集' },
  { id: 'literature-data', name: '3. 文献数据收集' },
  { id: 'data-center-platform', name: '4. 数据中心' },
  { id: 'llm-rag', name: '5. LLM+RAG知识助手' },
  { id: 'ml-agent', name: '6. ML材料智能体' }
]
const directions = [
  { id: 'simulation-data', title: '模拟数据收集', badge: '待完善', icon: 'processing', purpose: '让模拟结果与研究对象、计算条件及实验依据相联系。', text: '规划记录材料结构、计算方法、软件与版本、边界条件、输入文件和结果文件，便于整理与复核。支持范围、导入格式及操作页面待完善。', points: ['计算条件与输入文件', '模拟结果、单位与来源', '与材料、样品或研究任务建立关联'], manual: '/manual/simulation-data' },
  { id: 'literature-data', title: '文献数据收集', badge: '待完善', icon: 'book', purpose: '把文献中的研究依据整理为可检索的领域数据。', text: '规划收集文献元信息与原文来源，识别材料、配方、工艺和性能等信息，经人工核对后形成结构化记录。识别方式、解析字段及导入流程待完善。', points: ['题名、作者、年份与 DOI', '材料、实验条件和性能信息', '保留原文位置及人工核对结果'], manual: '/manual/literature-data' },
  { id: 'data-center-platform', title: '数据中心', badge: '搭建中', icon: 'database', purpose: '将分散的多源数据汇聚为可追溯、按权限使用的专业数据库。', text: '面向实验、模拟与文献数据，逐步统一字段、关联关系、修订记录、访问权限及检索方式。统一区域的数据中心正在搭建；已安装版本中的实验室服务以实际配置为准。', points: ['统一数据结构与来源关系', '版本、权限及受控检索', '为知识助手与材料模型提供数据基础'], manual: '/manual/data-center' },
  { id: 'llm-rag', title: 'Large Language Model (LLM)+RAG知识助手', badge: '规划中', icon: 'book', purpose: '让人更高效地使用已有的知识。', text: '基于已沉淀的专业数据库，结合大语言模型与检索增强生成（RAG），查看相关实验数据并搜索相似实验方案，输出专业领域的实验方案报告，附带可核对的数据与文献来源。', points: ['按研究问题检索获准范围内的记录', '比较相似实验条件、结果与文献依据', '生成实验方案报告，供研究者审阅'], manual: '/manual/llm-rag' },
  { id: 'ml-agent', title: 'Machine Learning (ML)材料智能体', badge: '规划中', icon: 'ai', purpose: '从数据中学习规律，对样品进行性能预测与逆向设计。', text: '基于已沉淀的专业数据库，开发并验证领域模型，面向材料性能预测、虚拟筛选、多目标优化及实验方案设计，逐步形成模型建议—实验验证—数据回流的迭代流程。', points: ['性能预测与目标性能导向的逆向设计', '虚拟筛选与多目标优化', '候选实验方案、测试验证与结果回流'], manual: '/manual/ml-agent' }
]
const faqs = [
  { question: '可以只使用实验数据收集和处理吗？', answer: '可以按研究任务从物料、配方或仪器文件开始，逐步补全样品与数据来源。具体模块与插件以安装版本和授权配置为准。' },
  { question: '模拟、文献、LLM 和 ML 现在可以直接使用吗？', answer: '模拟与文献数据收集待完善，数据中心搭建中，LLM/RAG 与 ML 材料智能体处于规划阶段。页面说明目标、预期输入与输出；可用范围以软件发布说明为准。' },
  { question: 'LLM+RAG 与 ML 材料智能体有什么区别？', answer: 'LLM+RAG 主要帮助研究者检索、理解与使用已有知识，整理实验方案报告；ML 从结构化数据中学习规律，用于性能预测、候选筛选与逆向设计。两者共享数据基础，承担不同任务。' },
  { question: 'Origin 出图后会自动更新实验记录吗？', answer: '支持成果归档的版本可以关联 Origin 工程、图像与参与样品。外部修改后需要手动更新成果版本，保留输入来源；Origin 直接交接需要本机具备相应环境。' },
  { question: '团队模板和实验数据能否分权限共享？', answer: '可以按资源与成员权限管理。共享处理方法与共享原始科研数据分别授权，上传不代表对所有成员开放，功能许可也不替代数据访问权限。' },
  { question: '在哪里查看详细操作与视频？', answer: '用户手册按六类功能展开，实验数据收集下有七个操作章节；每章关联帮助中心的同名学习资源。教学视频待拍摄，准备完成后在对应位置补充。' }
]
</script>
<template>
  <main id="main-content" class="research-site info-page product-page">
    <div class="site-container info-layout">
      <PageDirectory><nav :aria-label="t(&quot;产品目录&quot;)"><h2>{{ t("产品与功能") }}</h2><a href="#overview" :aria-current="active === 'overview' ? 'location' : undefined">{{ t("一、总体介绍") }}</a><div class="product-nav-label">{{ t("二、具体功能") }}</div><template v-for="section in sections" :key="section.id"><a :href="'#' + section.id" :aria-current="active === section.id ? 'location' : undefined">{{ t(section.name) }}</a><div v-if="section.id === 'experiment-data'" class="product-subnav"><a v-for="item in modules" :key="item.id" :href="'#' + item.id" :aria-current="active === item.id ? 'location' : undefined">{{ t(item.name) }}</a></div></template><a href="#faq" :aria-current="active === 'faq' ? 'location' : undefined">{{ t("三、常见问题与解答") }}</a></nav></PageDirectory>
      <div class="info-main">
        <header id="overview" class="info-hero"><h1>{{ t("数据驱动的材料研发闭环平台") }}</h1><p class="info-intro">{{ t("连接实验、模拟与文献数据，让实验更高效、决策更智能。") }}</p></header>
        <section class="product-overview"><h2>{{ t("一、总体介绍") }}</h2><div class="product-challenges"><article><ResearchIcon name="layers" /><h3>{{ t("数据分散") }}</h3><p>{{ t("文献、实验与模拟数据散落在文件、表格和不同软件中，难以统一关联。") }}</p></article><article><ResearchIcon name="link" /><h3>{{ t("难以复现") }}</h3><p>{{ t("配方、工艺参数、原始数据与处理步骤缺少完整记录，结果难以回溯。") }}</p></article><article><ResearchIcon name="book" /><h3>{{ t("知识沉淀困难") }}</h3><p>{{ t("研究经验、处理方法与文献依据难以检索和共享，团队反复进行相同整理。") }}</p></article><article><ResearchIcon name="ai" /><h3>{{ t("研发效率有待提高") }}</h3><p>{{ t("依靠人工查找、重复处理与试错，难以持续利用已有数据支持下一轮设计。") }}</p></article></div><div class="product-goal"><strong>{{ t("目标") }}</strong><p>{{ t("构建以数据驱动的材料研发智能设计闭环平台，让实验更高效、决策更智能。") }}</p></div></section>
        <h2 class="product-section-heading">{{ t("二、具体功能") }}</h2>
        <section id="experiment-data" class="product-section"><div class="product-section-title"><ResearchIcon name="testing" /><h2>{{ t("1. 实验数据收集") }}</h2></div><p>{{ t("从物料与配方出发，记录实验过程、表征及性能测试，沉淀专业数据库，统一处理数据并衔接 Origin 批量出图。") }}</p><FeatureExplorer /></section>
        <section v-for="(item, i) in directions" :id="item.id" :key="item.id" class="product-section product-direction"><div class="product-section-title"><ResearchIcon :name="item.icon" /><h2>{{ t(i + 2) }}. {{ t(item.title) }}</h2><span class="status-label">{{ t(item.badge) }}</span></div><p class="product-purpose">{{ t(item.purpose) }}</p><p>{{ t(item.text) }}</p><ul><li v-for="point in item.points" :key="point"><ResearchIcon name="check" />{{ t(point) }}</li></ul><DestinationLink :href="item.manual">{{ t("阅读用户手册") }}</DestinationLink></section>
        <section id="faq" class="product-section product-faq"><h2>{{ t("三、常见问题与解答") }}</h2><details v-for="item in faqs" :key="item.question"><summary>{{ t(item.question) }}</summary><p>{{ t(item.answer) }}</p></details><a class="text-link" :href="withBase('/support/')">{{ t("前往帮助中心") }}<ResearchIcon /></a></section>
      </div>
    </div>
  </main>
</template>
