import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeSection = ref(sectionIds[0] || '')
  let observer: IntersectionObserver | null = null
  let timeoutId: number | undefined

  const initObserver = (retries = 10) => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0 && retries > 0) {
      timeoutId = window.setTimeout(() => initObserver(retries - 1), 100)
      return
    }

    // Using a Map to track intersection ratios
    const visibleSections = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio)
          } else {
            visibleSections.delete(entry.target.id)
          }
        }

        if (visibleSections.size > 0) {
          // Find the section that covers the most area / appears furthest down
          // Actually, we want the visible section that is closest to the top of the viewport
          let currentActive = activeSection.value

          // Simply pick the section from our array that is visible and highest down the list
          // if multiple are visible, pick the last one in the sectionIds array
          for (const id of sectionIds) {
            if (visibleSections.has(id)) {
              currentActive = id
            }
          }

          activeSection.value = currentActive
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer?.observe(section))
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
    observer?.disconnect()
  })

  return { activeSection }
}
