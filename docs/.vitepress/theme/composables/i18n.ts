import { useData, withBase as vitepressBase } from 'vitepress'
import { translate } from '../translations'

export function useI18n() {
  const { lang } = useData()
  const t = <T>(value: T): T => lang.value === 'en' ? translate(value) : value
  const withBase = (path: string) => {
    // Assets, external URLs and in-page anchors retain their original paths.
    if (lang.value !== 'en' || !path.startsWith('/') || path.startsWith('/en/') || /\.[a-z0-9]+(?:[?#]|$)/i.test(path)) return vitepressBase(path)
    return vitepressBase('/en' + path)
  }
  return { t, withBase }
}
