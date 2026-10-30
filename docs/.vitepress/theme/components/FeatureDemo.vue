<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import { computed, ref } from 'vue'
import { useShowcase } from '../composables/useShowcase'
import ResearchIcon from './ResearchIcon.vue'
const props = defineProps<{ moduleId: string; title: string }>()
const root = ref<HTMLElement | null>(null)
const { step, playing, visible, select, toggle } = useShowcase(root, 4, 2700)
const filler = ref(20)
const steps: Record<string, string[]> = {
  materials: ['录入物料', '核对物性', '记录来源', '保存复用'],
  formulation: ['选择物料', '输入比例', '计算用量', '关联样品'],
  preparation: ['关联配方', '记录步骤', '添加图像', '确认制备'],
  testing: ['选择样品', '登记测试', '录入指标', '关联原始文件'],
  processing: ['分组导入', '配置步骤', '批量处理', '保存模板'],
  origin: ['选择数据', '交接 Origin', '完成绘图', '归档并关联'],
  'data-center': ['确认上报', '保存修订', '按条件检索', '受控获取']
}
const labels = computed(() => steps[props.moduleId] || steps.materials)
const curves = ['M12 116C35 118 37 32 70 30S95 103 130 78s56 22 110-11', 'M12 119C38 118 44 51 73 49s37 64 61 43 54 23 106-9', 'M12 121C35 122 45 69 75 65s35 55 66 43 57 17 99-6']
const activeStepLabel = computed(() => labels.value[step.value])
</script>
<template>
  <div ref="root" class="feature-demo" :class="{ 'demo-running': playing && visible }">
    <div class="demo-window-bar"><span><i></i><i></i><i></i></span><strong>{{ t(title) }}</strong><span class="demo-sample-label">{{ t("示例数据") }}</span></div>
    <div class="demo-topline"><span>{{ t("流程演示 ·") }} {{ t(activeStepLabel) }}</span><button class="demo-play" type="button" :aria-label="t((playing ? '暂停' : '播放') + title + '演示')" @click="toggle">{{ t(playing ? '暂停演示' : '播放演示') }}<span aria-hidden="true">{{ t(playing ? 'Ⅱ' : '▷') }}</span></button></div>
    <div class="demo-body">
      <div class="demo-workspace" :key="moduleId">
        <template v-if="moduleId === 'materials'">
          <div class="demo-record-heading"><ResearchIcon name="materials" /><div><small>MATERIAL / M–024</small><h4>{{ t("基体树脂") }}</h4></div><span class="demo-state">{{ t(step === 3 ? '已保存' : '录入中') }}</span></div>
          <div class="demo-field" :class="{ revealed: step >= 0 }"><span>{{ t("名称 / 牌号") }}</span><strong>{{ t("基体树脂 · 示例牌号") }}</strong></div>
          <div class="demo-field" :class="{ revealed: step >= 1 }"><span>{{ t("固含量") }}</span><strong>{{ t(step >= 1 ? '100 %' : '待核对') }}</strong></div>
          <div class="demo-field" :class="{ revealed: step >= 2 }"><span>{{ t("批次 / 来源") }}</span><strong>{{ t(step >= 2 ? 'B–024 · 供应商资料' : '待补充') }}</strong></div>
          <div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon :name="step === 3 ? 'check' : 'link'" />{{ t(step === 3 ? '物料记录已保存，可在配方中复用' : '统一记录物性、批次与来源') }}</div>
        </template>
        <template v-else-if="moduleId === 'formulation'">
          <div class="demo-record-heading"><ResearchIcon name="formula" /><div><small>FORMULATION / F–024</small><h4>{{ t("配方用量计算") }}</h4></div><span class="demo-state">{{ t("总量 100 g") }}</span></div>
          <label class="demo-range">{{ t("填料质量分数") }} <strong>{{ t(filler) }} %</strong><input v-model.number="filler" type="range" min="10" max="40" step="5" :aria-label="t(&quot;演示填料质量分数&quot;)"></label>
          <div class="demo-ratio"><span :style="{ width: (100 - filler) + '%' }"></span><i :style="{ width: filler + '%' }"></i></div>
          <div class="demo-field"><span>{{ t("基体树脂") }}</span><strong>{{ t(100 - filler) }}.0 g</strong></div><div class="demo-field"><span>{{ t("填料") }}</span><strong>{{ t(filler) }}.0 g</strong></div>
          <div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon name="link" />{{ t(step === 3 ? '配方版本 v2 → 样品 S–024' : '拖动比例，查看示例用量变化') }}</div>
        </template>
        <template v-else-if="moduleId === 'preparation'">
          <div class="demo-record-heading"><ResearchIcon name="preparation" /><div><small>SPECIMEN / S–024</small><h4>{{ t("制备过程记录") }}</h4></div><span class="demo-state">{{ t("配方 F–024") }}</span></div>
          <div class="demo-preparation"><div class="demo-process-image"><svg viewBox="0 0 170 130" aria-hidden="true"><path d="M42 31h86l-8 76H50Z"/><path d="M51 79c17-12 45 12 69-1M85 6v69m-16-8 16 9 16-9" class="mixing-paddle"/><path d="M23 112h124"/><circle cx="65" cy="91" r="3"/><circle cx="97" cy="97" r="3"/></svg><span>{{ t(step >= 2 ? '过程图像已关联' : '混合步骤示意') }}</span></div><div><p><b>01</b> {{ t("混合") }}</p><p><b>02</b> {{ t("成型") }}</p><p><b>03</b> {{ t("固化") }}</p></div></div>
          <div class="demo-parameter-tags"><span>{{ t("温度 120 °C") }}</span><span>{{ t("时间 30 min") }}</span><span>{{ t("示例参数") }}</span></div>
          <div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon name="check" />{{ t(step === 3 ? '确认制备，保留配方与过程快照' : '步骤、参数与图像围绕样品保存') }}</div>
        </template>
        <template v-else-if="moduleId === 'testing' || moduleId === 'processing' || moduleId === 'origin'">
          <div class="demo-record-heading"><ResearchIcon :name="moduleId === 'testing' ? 'testing' : 'processing'" /><div><small>{{ t(moduleId === 'testing' ? 'TEST / S–024' : moduleId === 'origin' ? 'ORIGIN / RESULT–024' : 'BATCH / A · B · C') }}</small><h4>{{ t(moduleId === 'testing' ? '拉伸测试' : moduleId === 'origin' ? '绘图与成果关联' : '同类曲线批量处理') }}</h4></div></div>
          <div class="demo-chart" :class="{ processed: step >= 2 }"><svg viewBox="0 0 260 150" role="img" :aria-label="t(moduleId === 'testing' ? '应力应变示例曲线' : '三组样品的示例曲线')"><path class="demo-chart-grid" d="M12 25h230M12 65h230M12 105h230M55 15v115M110 15v115M165 15v115M220 15v115"/><path class="demo-chart-axis" d="M12 12v120h232"/><path v-for="(curve, i) in curves.slice(0, moduleId === 'testing' ? 1 : 3)" :key="i" :d="curve" class="demo-curve" :class="'curve-' + i" :style="{ '--curve-delay': (i * .35) + 's' }"/></svg><span>{{ t(step >= 2 ? '结果预览' : '数据预览') }}</span></div>
          <template v-if="moduleId === 'testing'"><div class="demo-field"><span>{{ t("拉伸强度 · 示例值") }}</span><strong>{{ t(step >= 2 ? '18.6 MPa' : '待录入') }}</strong></div><div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon name="link" />{{ t(step === 3 ? 'S–024 → 拉伸测试 → 原始文件' : '指标与原始文件分别保存') }}</div></template>
          <template v-else-if="moduleId === 'processing'"><div class="demo-parameter-tags"><span :class="{ done: step >= 1 }">{{ t("裁剪") }}</span><span :class="{ done: step >= 2 }">{{ t("平滑") }}</span><span :class="{ done: step >= 2 }">{{ t("归一化") }}</span></div><div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon name="layers" />{{ t(step === 3 ? '处理步骤与参数 → 可复用模板' : '同一方法，应用到 A / B / C 三组数据') }}</div></template>
          <template v-else><div class="demo-file"><ResearchIcon name="origin" />{{ t("对照实验.opju") }}<span>{{ t(step === 3 ? '已归档' : '工程文件') }}</span></div><div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon name="link" />{{ t(step === 3 ? '成果版本 v1 → 样品 A / B / C' : 'Origin 工程、图像与来源一起保存') }}</div></template>
        </template>
        <template v-else>
          <div class="demo-record-heading"><ResearchIcon name="database" /><div><small>LAB / DATA CENTER</small><h4>{{ t("实验数据检索") }}</h4></div><span class="demo-state">{{ t("按权限获取") }}</span></div>
          <div class="demo-search-query">{{ t("检索条件") }} <strong>{{ t("配方 F–024") }}</strong></div>
          <div v-for="(name, i) in ['样品 S–024', '配方版本 v2', '拉伸测试原始文件']" :key="name" class="demo-field" :class="{ revealed: step >= i }"><span><ResearchIcon :name="i === 2 ? 'testing' : 'database'" />{{ t(name) }}</span><strong>{{ t(step >= i ? '可追溯' : '待载入') }}</strong></div>
          <div class="demo-output" :class="{ ready: step === 3 }"><ResearchIcon name="lock" />{{ t(step === 3 ? '核对身份与资源权限后，获取所需数据' : '保留来源、修订与访问边界') }}</div>
        </template>
      </div>
    </div>
    <div class="demo-steps" :aria-label="t(&quot;演示步骤&quot;)"><button v-for="(label, i) in labels" :key="label" type="button" :aria-pressed="step === i" :class="{ current: step === i, completed: step > i }" @click="select(i)"><span>{{ t(i + 1) }}</span>{{ t(label) }}</button></div>
    <p class="demo-disclaimer">{{ t("交互流程示意，使用示例数据；具体操作以安装版本为准。") }}</p>
  </div>
</template>
