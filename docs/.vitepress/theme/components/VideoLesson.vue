<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()
import { computed } from 'vue'

import { lessons } from '../learningResources'
import ResearchIcon from './ResearchIcon.vue'
import DestinationLink from './DestinationLink.vue'
const props = defineProps<{ lessonId: string; showManual?: boolean }>()
const lesson = computed(() => lessons.find(item => item.id === props.lessonId))
const source = computed(() => lesson.value?.videoUrl ? (/^https?:/.test(lesson.value.videoUrl) ? lesson.value.videoUrl : withBase(lesson.value.videoUrl)) : '')
</script>
<template>
  <article v-if="lesson" class="video-lesson">
    <div class="video-lesson-icon"><ResearchIcon :name="source ? 'origin' : 'book'" /></div>
    <div class="video-lesson-copy"><h3>{{ t(lesson.title) }}</h3><p>{{ t(lesson.focus) }}</p><p class="video-lesson-status">{{ t(source ? '教学视频已上线' : lesson.status) }}</p><DestinationLink v-if="showManual" :href="lesson.manual">{{ t("阅读操作文档") }}</DestinationLink><DestinationLink v-else :href="'/tutorials/#' + lesson.id">{{ t("查看对应视频学习资源") }}</DestinationLink></div>
    <video v-if="source" :src="source" controls preload="metadata" :aria-label="t(lesson.title + '操作视频')" />
  </article>
</template>
