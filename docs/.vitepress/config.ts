import { defineConfig } from 'vitepress'
import { translate } from './theme/translations'

const config = defineConfig({
  lang: 'zh-CN',
  title: 'Nebula Lab',
  description: '构建数据驱动的材料研发闭环平台，连接实验、模拟、文献与数据中心，让实验更高效、决策更智能。',
  base: '/',
  cleanUrls: true,
  // docs/superpowers 下是内部实施计划和设计规格，不属于对外文档。
  // VitePress 默认会把 docs 下每个 .md 都构建成页面，必须显式排除。
  srcExclude: ['superpowers/**'],
  sitemap: { hostname: 'https://nebulalab.app/' },
  lastUpdated: true,
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    outline: {
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    skipToContentLabel: '跳到内容',
    nav: [
      { text: '产品', link: '/products/' },
      { text: '用户手册', activeMatch: '^/(manual|ai)/', items: [
        { text: '用户手册总览', link: '/manual/' },
        { text: '实验数据收集', link: '/manual/experiment-data' },
        { text: '模拟数据收集 · 待完善', link: '/manual/simulation-data' },
        { text: '文献数据收集 · 待完善', link: '/manual/literature-data' },
        { text: '数据中心 · 搭建中', link: '/manual/data-center' },
        { text: 'LLM+RAG知识助手', link: '/manual/llm-rag' },
        { text: 'ML材料智能体', link: '/manual/ml-agent' }
      ] },
      { text: '帮助中心', activeMatch: '^/(support|tutorials|community)/', items: [
        { text: '学习资源 · 操作步骤与视频', link: '/tutorials/' },
        { text: '社区 · 模板文档与视频', link: '/community/' }
      ] },
      { text: '下载', link: '/download/' },
      { text: '联系我们', link: '/contact/' }
    ],
    sidebar: {
      '/manual/': [
        { text: '用户手册', items: [
          { text: '总览与使用路径', link: '/manual/' },
          { text: '实验数据收集', link: '/manual/experiment-data', collapsed: true, items: [
            { text: '组建物料库', link: '/manual/materials' },
            { text: '计算实验配方', link: '/manual/formulation' },
            { text: '记录实验过程', link: '/manual/preparation' },
            { text: '管理表征及性能测试', link: '/manual/testing' },
            { text: '沉淀专业数据库', link: '/manual/database' },
            { text: '数据统一后处理', link: '/manual/processing' },
            { text: 'Origin 批量出图', link: '/manual/origin' }
          ] },
          { text: '模拟数据收集 · 待完善', link: '/manual/simulation-data' },
          { text: '文献数据收集 · 待完善', link: '/manual/literature-data' },
          { text: '数据中心 · 搭建中', link: '/manual/data-center' },
          { text: 'LLM+RAG知识助手', link: '/manual/llm-rag' },
          { text: 'ML材料智能体', link: '/manual/ml-agent' }
        ] }
      ],
      // Learning resources use the six-section outline in the left sidebar slot.
      '/tutorials/': [{ items: [] }],
      '/roadmap/': [
        {
          text: '路线图',
          items: [
            { text: '长期方向', link: '/roadmap/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TshyGO/NebulaLab-Releases' }
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: false,
        disableQueryPersistence: true,
        miniSearch: {
          options: {
            tokenize: (text: string) => Array.from(
              new Intl.Segmenter('zh', { granularity: 'word' }).segment(text),
              part => part.isWordLike ? part.segment : ''
            ).filter(Boolean)
          }
        },
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车键',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    footer: {
      message: '为实验数据流程构建。',
      copyright: 'Copyright © 2026 Nebula Lab'
    }
  }
})

// The English locale shares navigation structure and stable page/section paths.
function englishTree(value: any, key = ''): any {
  if (Array.isArray(value)) return value.map(item => englishTree(item))
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([name, item]) => [name.startsWith('/') ? '/en' + name : name, englishTree(item, name)]))
  if (typeof value !== 'string') return value
  if (key === 'link' && value.startsWith('/')) return '/en' + value
  if (key === 'activeMatch') return value.replace('^/', '^/en/')
  return translate(value)
}
const englishTheme = englishTree(config.themeConfig)
englishTheme.search.options.translations = {
  button: { buttonText: 'Search', buttonAriaLabel: 'Search documentation' },
  modal: {
    displayDetails: 'Display details', resetButtonTitle: 'Clear search', backButtonTitle: 'Close search',
    noResultsText: 'No results found',
    footer: { selectText: 'Select', selectKeyAriaLabel: 'Enter', navigateText: 'Navigate', navigateUpKeyAriaLabel: 'Up arrow', navigateDownKeyAriaLabel: 'Down arrow', closeText: 'Close', closeKeyAriaLabel: 'Escape' }
  }
}
englishTheme.search.options.locales = { en: { translations: englishTheme.search.options.translations } }
config.themeConfig!.search!.options.locales = englishTheme.search.options.locales
config.locales = {
  root: { label: '中文', lang: 'zh-CN' },
  en: {
    label: 'English', lang: 'en',
    description: 'A data-driven materials R&D platform connecting experiment, simulation and literature data for more efficient experiments and smarter decisions.',
    themeConfig: englishTheme
  }
}
export default config
