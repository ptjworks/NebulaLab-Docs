<script setup lang="ts">
import { useI18n } from '../composables/i18n'
const { t, withBase } = useI18n()
import { computed } from 'vue'

import { destinationLabel } from '../navigationLabels'
import ResearchIcon from './ResearchIcon.vue'
const props = defineProps<{ href: string }>()
const external = computed(() => /^https?:/.test(props.href))
const url = computed(() => /^(https?:|mailto:)/.test(props.href) ? props.href : withBase(props.href))
const destination = computed(() => destinationLabel(props.href))
</script>
<template><a class="text-link destination-link" :href="url" :target="external ? '_blank' : undefined" :rel="external ? 'noreferrer' : undefined"><span class="destination-action"><slot /><ResearchIcon /></span><small v-if="destination" class="link-destination">{{ t("前往：") }}{{ t(destination) }}</small></a></template>
