export const stableUrl = 'https://github.com/TshyGO/NebulaLab-Releases/releases/latest'

export const modules = [
  { id: 'materials', manualHref: '/manual/materials', en: 'Material library', name: '组建物料库', short: '物料', category: '实验的起点', title: '让每一种材料，\n都有清楚的来处。', description: '从常见化学品到纤维、泡沫，统一维护物料、物性与来源，让配方计算和样品制备使用同一份材料记录。', points: ['PubChem 查询与自定义录入', '物性、供应商、牌号与批次信息', '在配方和样品组成中复用'], output: '一份可复用、有来源的物料记录', visual: 'materials' },
  { id: 'formulation', manualHref: '/manual/formulation', en: 'Formulation', name: '计算实验配方', short: '配方', category: '从想法到用量', title: '把计算逻辑留下，\n让配方可以复用。', description: '选择物料，配置计算规则、比例与目标量。为每个样品保留实际采用的配方，让后续比较有据可查。', points: ['物料关联与配方工作簿', '按规则和输入计算用量', '基础配方、版本与样品配方'], output: '与样品关联的配方版本及用量', visual: 'formula' },
  { id: 'preparation', manualHref: '/manual/preparation', en: 'Preparation', name: '记录实验过程', short: '制备', category: '记录实验如何发生', title: '不只知道做了什么，\n也知道是怎么做的。', description: '按顺序记录制备步骤和工艺备注，结合过程图、样品制备图等附件资料，保留这一次实验的具体依据。', points: ['制备步骤、工艺条件与备注', '过程图片、制备图片与附件', '确认制备，保留当时的快照'], output: '配方、步骤与图片构成的制备记录', visual: 'preparation' },
  { id: 'testing', manualHref: '/manual/testing', en: 'Characterization', name: '管理表征及性能测试', short: '表征', category: '让测试回到样品', title: '每一条测试结果，\n都能找到对应样品。', description: '把测试项目、方法、仪器、日期、结果指标和原始文件放到具体样品下，持续补充不同测试和重复样条记录。', points: ['指标数值、单位和质量状态', '测试文件与操作信息', '原始曲线与汇总指标分别保存'], output: '关联样品的测试记录与原始数据', visual: 'testing' },
  { id: 'data-center', manualHref: '/manual/database', en: 'Lab data center', name: '沉淀专业数据库', short: '入库', category: '从个人记录到实验室积累', title: '让分散的实验，\n成为可检索的积累。', description: '在实验室接入和权限允许时上报实验数据，按样品、测试和指标检索，让数据保留修订、来源与访问记录。', points: ['结构化上报与历史修订', '科研检索、文件预览与受控获取', '所有权、访问授权与审计'], output: '可追溯、按权限使用的领域数据库', visual: 'database', status: '需实验室服务' },
  { id: 'processing', manualHref: '/manual/processing', en: 'Data processing', name: '数据统一后处理', short: '处理', category: '少做重复的操作', title: '验证一次处理方法，\n再应用到同类数据。', description: '从电脑、本地样品或数据中心选择数据，确认解析和分组，复用裁剪、平滑、归一化等处理流程。', points: ['成组导入与列映射', '步骤、参数与流程模板复用', '保留原始数据及处理来源'], output: '可检查、可复用的成组处理结果', visual: 'processing', image: '/02-plot.png', darkImage: '/绘图-深色.png' },
  { id: 'origin', manualHref: '/manual/origin', en: 'Origin & results', name: 'Origin 批量出图', short: '成果', category: '从数据到图，再回到实验', title: '把图交给 Origin，\n把依据留在样品里。', description: '批量交接选定数据，复用 Origin 模板和主题。完成作图后归档工程与图像，把成果版本关联到参与样品和测试。', points: ['分组数据、图形模板和主题', 'Origin 工程与正式图像归档', '手动更新成果版本，追溯输入来源'], output: '可回溯的工程、图像与成果版本', visual: 'origin', image: '/03-export.png', darkImage: '/导出-深色.png', status: '成果归档 · Beta' },
]

export const resources = [
  { no: '01', name: '数据处理流程', en: 'PROCESSING WORKFLOWS', description: '保存验证过的步骤与参数，同类数据直接复用，减少一遍遍重复配置。', tags: ['裁剪', '平滑', '归一化'], href: '/community/#workflows' },
  { no: '02', name: 'Origin 模板', en: 'ORIGIN TEMPLATES', description: '复用绘图模板和主题，让同类图表保持一致的表达与样式。', tags: ['图形模板', '主题', '样式'], href: '/community/#origin' },
  { no: '03', name: '科研计算脚本', en: 'RESEARCH SCRIPTS', description: '沉淀常用计算方法与科研辅助脚本，让团队的方法可以积累和传承。', tags: ['计算脚本', '科研模板', '插件'], href: '/community/#scripts' }
]

export const aiDirections = [
  { no: '01', id: 'literature', title: '让相关文献，主动找到你。', name: '文献主动抓取', description: '围绕研究方向发现和收集文献线索，逐步形成课题组可使用的文献资料来源。', note: '遵循文献来源的访问条件。' },
  { no: '02', id: 'reports', title: '从成员周报，到组会汇报。', name: '周报汇总与 PPT', description: '自动收集组内成员周报，整理为 PPT，供管理员在授权范围内查阅和准备讨论。', note: '具体采集方式和输出流程尚待实现。' },
  { no: '03', id: 'agents', title: '让智能体，读懂获准的数据。', name: '智能体协作', description: '与其他智能体结合，按既有身份和资源权限调用科研数据，辅助检索与整理。', note: '数据调用保留权限校验和来源记录。' }
]

export type PageKind = 'products' | 'solutions' | 'community' | 'ai' | 'support' | 'download' | 'contact'

export const pageContent: Record<PageKind, { eyebrow: string; title: string; intro: string; sections: { id: string; title: string; text: string; points: string[]; href?: string; action?: string; badge?: string }[] }> = {
  products: { eyebrow: 'PRODUCT / 产品能力', title: '把实验的每一步，连接起来。', intro: '围绕物料、配方、样品、测试和成果组织工作。可以从一份仪器文件开始，也可以记录完整实验过程。', sections: modules.map(m => ({ id: m.id, title: m.name, text: m.description, points: m.points, badge: m.status, href: m.manualHref, action: '了解使用流程' })) },
  solutions: { eyebrow: 'SOLUTIONS / 解决方案', title: '从真实的实验任务出发。', intro: '把日常反复进行的整理、计算、处理与回溯，组织成清楚的工作路径。', sections: [
    { id: 'traceability', title: '全流程实验追溯', text: '几个月后再看到一张图，仍然找得到参与样品、采用的配方、制备过程和测试原始文件。', points: ['记录物料与配方版本', '样品承接制备、表征与附件', '成果保存输入来源和版本'], href: '/manual/experiment-workflow', action: '查看实验全流程' },
    { id: 'comparison', title: '单变量对照与同类数据处理', text: '选择不同配方对应样品的同类测试文件，核对单位和列，应用同一套处理步骤，再交接 Origin 对比。单变量关系和实验可比性由研究者确认。', points: ['选择样品 A / B / C 的同类测试', '验证处理方法后应用到分组', '保留每条曲线的真实来源'], href: '/manual/workflow', action: '了解流程复用' },
    { id: 'team', title: '团队方法与数据积累', text: '把验证过的处理流程、Origin 模板与科研脚本沉淀成资源；按授权范围开放给团队成员。', points: ['复用流程、模板与脚本', '资源开放范围按权限管理', '实验数据上报与科研检索'], href: '/community/', action: '探索团队资源' }
  ] },
  community: { eyebrow: 'COMMUNITY / 模板文档与视频', title: '把一次经验，变成可复用的方法。', intro: '查看数据处理模板、Origin 模板及科研脚本的使用文档。团队内部资源获得授权后才向相应成员开放；视频教程将在实际制作完成后补充。', sections: resources.map((r, i) => ({ id: ['workflows', 'origin', 'scripts'][i], title: r.name, text: r.description, points: [...r.tags, '使用文档已提供 · 演示视频筹备中'], href: i === 0 ? '/manual/workflow#templates' : '/manual/community', action: '阅读模板使用文档' })).concat([{ id: 'permissions', title: '共享方法，也保留边界。', text: '登录不等于拥有全部资源权限。团队模板、脚本和插件按资源授权开放；公开官网只介绍资源类型，实际查看、获取和使用在软件内按权限执行。', points: ['公开资源与团队资源分开', '按成员及资源权限开放', '管理员角色不替代数据所有权'], href: '/manual/data-center#访问权限', action: '了解权限边界' }]) },
  ai: { eyebrow: 'AI', title: '从已有知识，到数据驱动的材料设计。', intro: 'LLM+RAG知识助手和ML材料智能体均处于规划阶段，依托可追溯、经过核对且获准使用的领域数据库。', sections: [
    { id: 'llm-rag', title: 'LLM+RAG知识助手', text: '让人更高效地使用已有知识，检索相关实验数据与相似实验方案，整理专业领域的实验方案报告。', points: ['专业数据库检索', '来源引用与相似方案', '研究者审阅报告'], badge: '规划中', href: '/manual/llm-rag', action: '阅读建设方向' },
    { id: 'ml-agent', title: 'ML材料智能体', text: '从数据中学习规律，开发与验证领域模型，支持性能预测、虚拟筛选、多目标优化与逆向设计。', points: ['性能预测与模型验证', '候选材料筛选和方案设计', '真实实验再验证与数据回流'], badge: '规划中', href: '/manual/ml-agent', action: '阅读建设方向' }
  ] },
  contact: { eyebrow: 'CONTACT / 联系我们', title: '让问题与建议，找到我们。', intro: '软件问题、使用建议与合作咨询，可通过以下官方渠道联系 Nebula Lab。', sections: [
    { id: 'github', title: 'GitHub Issues · 官方反馈渠道', text: '提交软件问题与功能建议，查看已有讨论和处理进展。提供软件版本、复现步骤及必要的错误信息，方便定位问题。', points: ['报告问题与提出建议', '查询公开反馈进展', '使用脱敏样例说明问题'], href: 'https://github.com/TshyGO/NebulaLab-Releases/issues', action: '前往 GitHub Issues' }
  ] },
  support: { eyebrow: 'HELP CENTER / 帮助中心', title: '按模块学习，按模板复用。', intro: '学习资源提供各模块操作步骤，社区介绍数据处理模板及使用方法。现阶段可阅读文档，教学视频将在准备完成后补充。', sections: [
    { id: 'learning', title: '学习资源 · 模块操作文档与视频', text: '按实验、模拟、文献数据收集、数据中心、LLM+RAG 与 ML 材料智能体查看文档。实验数据收集下设七个操作章节，与同名视频资源相互关联；视频待拍摄。', points: ['六类功能与七个实验操作章节', '操作手册与学习资源互相对应', '教学视频待拍摄'], href: '/tutorials/', action: '查看学习资源' },
    { id: 'community', title: '社区 · 数据处理模板文档与视频', text: '学习模板的创建、保存、复用与团队资源访问方式，让同类数据采用一致的处理步骤。', points: ['处理模板与适用条件', 'Origin 模板和科研脚本', '模板演示视频筹备中'], href: '/community/', action: '进入社区' },
    { id: 'start', title: '完成第一次数据处理', text: '选择一份 CSV、TXT 或 Excel，检查解析设置，配置处理步骤，再确认 X/Y 列和导出内容。', points: ['导入与解析', '分组与处理', 'Origin 交接'], href: '/tutorials/basic-processing', action: '打开入门教程' },
    { id: 'experiment', title: '记录一次完整实验', text: '从材料记录开始，理解配方、样品、制备、测试、数据处理和成果如何关联。', points: ['建立物料与配方', '记录制备和测试', '归档成果与来源'], href: '/manual/experiment-workflow', action: '阅读全流程指南' },
    { id: 'requirements', title: '安装、Origin 与实验室接入', text: '软件面向 Windows 10 / 11 x64。Origin 直接交接需要本机可用的 Origin 安装与自动化环境；实验室能力需要相应接入和数据权限。', points: ['使用官方发布页面下载安装包', '核对版本与兼容说明', '许可不替代成员角色或数据权限'], href: '/download/', action: '查看下载说明' },
    { id: 'feedback', title: '遇到问题时', text: '先记录软件版本、操作步骤和错误信息。涉及未发表实验数据时，使用脱敏样例，不在公开问题中上传原始科研内容。', points: ['启动和解析问题先检查输入与版本', 'Origin 问题先核对安装环境', '复现步骤尽可能短'], href: 'https://github.com/TshyGO/NebulaLab-Releases/issues', action: '查看或提交公开问题' }
  ] },
  download: { eyebrow: 'GET NEBULA LAB / 下载与接入', title: '开始连接你的实验。', intro: '下载 Windows 桌面端正式版。具体功能、安装条件和数据兼容说明以官方发布记录为准。', sections: [
    { id: 'stable', title: '正式版', text: '适合日常实验工作。进入官方发布页面，查看当前版本、变更和安装包。', points: ['Windows 10 / 11 · x64', '查看版本兼容说明', '重要数据提前备份'], href: stableUrl, action: '下载正式版' },
    { id: 'access', title: '软件授权与数据权限', text: '具体授权状态以安装版本为准，功能许可、管理角色和科研数据访问权限分别管理。', points: ['按安装版本核对授权状态', '管理角色与功能许可分别判断', '科研数据的访问范围单独授权'] }
  ] }
}
