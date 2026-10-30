<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()
import { computed, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { modules } from '../siteContent'
import ResearchIcon from './ResearchIcon.vue'
import DestinationLink from './DestinationLink.vue'
import FeatureDemo from './FeatureDemo.vue'
const { hash } = useData()
const active = ref(0)
const selected = computed(() => modules[active.value])
const featureTabs = ref<HTMLElement | null>(null)
function selectTab(index: number, focus = false) {
  active.value = (index + modules.length) % modules.length
  if (focus) (featureTabs.value?.querySelectorAll('button')[active.value] as HTMLButtonElement)?.focus()
}
function onTabKey(event: KeyboardEvent) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault()
    selectTab(active.value + (event.key === 'ArrowRight' ? 1 : -1), true)
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault(); selectTab(event.key === 'Home' ? 0 : modules.length - 1, true)
  }
}
function selectFromHash() {
  const index = modules.findIndex(item => item.id === hash.value.slice(1))
  if (index >= 0) selectTab(index)
}
watch(hash, selectFromHash)
onMounted(selectFromHash)
</script>
<template>
    <div class="feature-explorer feature-section"><div ref="featureTabs" class="feature-tabs" role="tablist" :aria-label="t(&quot;产品功能&quot;)" @keydown="onTabKey"><button v-for="(item, i) in modules" :id="item.id" :key="item.id" type="button" role="tab" :tabindex="active === i ? 0 : -1" :aria-selected="active === i" :aria-controls="'panel-' + item.id" :class="{ active: active === i }" @click="selectTab(i)"><ResearchIcon :name="item.visual === 'formula' ? 'formula' : item.visual" /><span>{{ t(item.name) }}</span></button></div>
      <div :id="'panel-' + selected.id" :key="selected.id" class="feature-panel" role="tabpanel" tabindex="0" :aria-labelledby="selected.id">
        <div class="feature-copy"><h3>{{ t(selected.title) }}</h3><p>{{ t(selected.description) }}</p><ul><li v-for="point in selected.points" :key="point"><ResearchIcon name="check" />{{ t(point) }}</li></ul><DestinationLink :href="selected.manualHref">{{ t("阅读操作说明") }}</DestinationLink><span v-if="selected.status" class="status-label">{{ t(selected.status) }}</span></div>
        <div class="feature-visual"><FeatureDemo :key="selected.id" :module-id="selected.id" :title="t(selected.name)" /><details v-if="selected.image" class="actual-interface"><summary>{{ t("查看软件实际界面") }}</summary><img :src="withBase(selected.image)" :alt="t(selected.name + '软件界面')" width="2559" height="1379" loading="lazy"></details></div>
      </div><div class="workflow-note"><DestinationLink href="/manual/experiment-data">{{ t("阅读用户手册") }}</DestinationLink></div>
    </div>
</template>
