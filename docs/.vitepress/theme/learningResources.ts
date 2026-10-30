export type Lesson = { id: string; title: string; group: string; manual: string; focus: string; status: string; videoUrl?: string }

// Add a real videoUrl when a lesson has been recorded and uploaded.
export const lessons: Lesson[] = [
  { id: 'materials', title: '组建物料库', group: 'experiment-data', manual: '/manual/materials', focus: '物料识别、物性、批次及来源记录', status: '视频待拍摄' },
  { id: 'formulation', title: '计算实验配方', group: 'experiment-data', manual: '/manual/formulation', focus: '选择物料、比例与总量计算、保存版本', status: '视频待拍摄' },
  { id: 'preparation', title: '记录实验过程', group: 'experiment-data', manual: '/manual/preparation', focus: '步骤、参数、过程图像与制备确认', status: '视频待拍摄' },
  { id: 'testing', title: '管理表征及性能测试', group: 'experiment-data', manual: '/manual/testing', focus: '样品关联、指标、单位与原始文件', status: '视频待拍摄' },
  { id: 'database', title: '沉淀专业数据库', group: 'experiment-data', manual: '/manual/database', focus: '完整性检查、关联关系、版本与追溯', status: '视频待拍摄' },
  { id: 'processing', title: '数据统一后处理', group: 'experiment-data', manual: '/manual/processing', focus: '列映射、分组、模板与批量处理', status: '视频待拍摄' },
  { id: 'origin', title: 'Origin 批量出图', group: 'experiment-data', manual: '/manual/origin', focus: '数据分组、绘图模板、工程与成果关联', status: '视频待拍摄' },
  { id: 'simulation-data', title: '模拟数据收集', group: 'simulation-data', manual: '/manual/simulation-data', focus: '计算条件、输入文件与结果来源', status: '功能待完善 · 视频待拍摄' },
  { id: 'literature-data', title: '文献数据收集', group: 'literature-data', manual: '/manual/literature-data', focus: '文献信息、结构化提取与原文核对', status: '功能待完善 · 视频待拍摄' },
  { id: 'data-center', title: '数据中心', group: 'data-center', manual: '/manual/data-center', focus: '多源数据汇聚、检索、修订与权限', status: '搭建中 · 视频待拍摄' },
  { id: 'llm-rag', title: 'LLM+RAG知识助手', group: 'llm-rag', manual: '/manual/llm-rag', focus: '知识检索、相似方案与实验方案报告', status: '规划中 · 视频待拍摄' },
  { id: 'ml-agent', title: 'ML材料智能体', group: 'ml-agent', manual: '/manual/ml-agent', focus: '模型开发、性能预测、筛选与逆向设计', status: '规划中 · 视频待拍摄' }
]

export const learningGroups = [
  { id: 'experiment-data', title: '实验数据收集' },
  { id: 'simulation-data', title: '模拟数据收集' },
  { id: 'literature-data', title: '文献数据收集' },
  { id: 'data-center', title: '数据中心' },
  { id: 'llm-rag', title: 'LLM+RAG知识助手' },
  { id: 'ml-agent', title: 'ML材料智能体' }
]
