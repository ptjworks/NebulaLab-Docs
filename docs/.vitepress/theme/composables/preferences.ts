import { computed } from 'vue'
import { useData, useRouter } from 'vitepress'

export type NebulaLanguage = 'en' | 'zh'

export function useNebulaPreferences() {
  const { lang } = useData()
  const router = useRouter()
  const language = computed<NebulaLanguage>(() => lang.value === 'en' ? 'en' : 'zh')
  function setLanguage(next: NebulaLanguage) {
    if (next === language.value || typeof window === 'undefined') return
    const path = window.location.pathname.replace(/^\/en(?=\/|$)/, '') || '/'
    // Both locales keep the same page paths and heading IDs.
    router.go((next === 'en' ? '/en' + path : path) + window.location.search + window.location.hash)
  }
  return {
    language,
    setLanguage,
    initPreferences: () => {},
    labels: computed(() => language.value === 'en'
      ? { language: 'Language', theme: 'Language settings' }
      : { language: '语言', theme: '语言设置' })
  }
}
