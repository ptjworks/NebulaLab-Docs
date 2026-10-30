import { lessons } from './learningResources'

const manualLabels: Record<string, string> = {
  ...Object.fromEntries(lessons.map(lesson => [lesson.manual, lesson.title])),
  '/manual/': '使用总览',
  '/manual/experiment-data': '实验数据收集',
  '/manual/data-management': '全链路数据管理',
  '/manual/workflow': '数据处理流程与模板',
  '/manual/experiment-workflow': '实验全流程',
  '/manual/community': '社区与模板',
  '/manual/pro': '授权与权限'
}
const productLabels: Record<string, string> = {
  overview: '软件介绍', 'experiment-data': '实验数据收集', materials: '组建物料库',
  formulation: '计算实验配方', preparation: '记录实验过程', testing: '管理表征及性能测试',
  'data-center': '沉淀专业数据库', processing: '数据统一后处理', origin: 'Origin 批量出图',
  'simulation-data': '模拟数据收集', 'literature-data': '文献数据收集',
  'data-center-platform': '数据中心', 'llm-rag': 'LLM+RAG知识助手', 'ml-agent': 'ML材料智能体'
}

export function destinationLabel(href: string) {
  const [rawPath, hash] = href.split('#')
  const path = rawPath.replace(/\.html$/, '')
  if (path.startsWith('/manual/')) return '用户手册 › ' + (manualLabels[path] || '操作说明')
  if (path.startsWith('/products/')) return '产品 › ' + (productLabels[hash] || '产品与功能')
  if (path.startsWith('/tutorials/')) {
    const lesson = lessons.find(item => item.id === hash)
    return '帮助中心 › 学习资源' + (lesson ? ' › ' + lesson.title : '')
  }
  if (path.startsWith('/community/')) return '帮助中心 › 社区'
  if (path.startsWith('/support/')) return '帮助中心'
  if (path.startsWith('/download/')) return '下载 › 软件与接入'
  if (path.startsWith('/contact/')) return '联系我们 › 官方反馈渠道'
  if (path.startsWith('/solutions/')) return '产品 › 解决方案'
  return ''
}
