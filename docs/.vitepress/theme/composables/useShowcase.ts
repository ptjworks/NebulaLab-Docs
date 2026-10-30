import { onMounted, onUnmounted, ref, type Ref } from 'vue'

// Keep illustrations quiet outside the viewport and when reduced motion is preferred.
export function useShowcase(root: Ref<HTMLElement | null>, count: number, delay = 3000) {
  const step = ref(0)
  const playing = ref(false)
  const visible = ref(false)
  let timer: ReturnType<typeof setInterval> | undefined
  let observer: IntersectionObserver | undefined
  function select(index: number) { step.value = index; playing.value = false }
  function toggle() { playing.value = !playing.value }
  onMounted(() => {
    playing.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    observer = new IntersectionObserver(([entry]) => { visible.value = entry.isIntersecting }, { threshold: 0.18 })
    if (root.value) observer.observe(root.value)
    timer = setInterval(() => {
      if (playing.value && visible.value && !document.hidden) step.value = (step.value + 1) % count
    }, delay)
  })
  onUnmounted(() => { clearInterval(timer); observer?.disconnect() })
  return { step, playing, visible, select, toggle }
}
