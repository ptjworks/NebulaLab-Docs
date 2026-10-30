<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t } = useI18n()
import { lessons, learningGroups } from '../learningResources'
import VideoLesson from './VideoLesson.vue'
</script>
<template>
  <div class="learning-resources"><section v-for="group in learningGroups" :key="group.id" :aria-label="t(group.title)"><h2 :id="'learning-' + group.id">{{ t(group.title) }}<a class="header-anchor" :href="'#learning-' + group.id" :aria-label="t('跳到' + group.title)">​</a></h2><div v-for="lesson in lessons.filter(item => item.group === group.id)" :id="lesson.id" :key="lesson.id" class="lesson-anchor"><VideoLesson :lesson-id="lesson.id" show-manual /></div></section></div>
</template>
