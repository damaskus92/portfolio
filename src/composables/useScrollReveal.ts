import { onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  y?: number
  x?: number
  scale?: number
  duration?: number
  delay?: number
  stagger?: number
  start?: string
  once?: boolean
}

export function useScrollReveal() {
  const triggers: ScrollTrigger[] = []

  const reveal = (elements: string | HTMLElement | HTMLElement[], options: RevealOptions = {}) => {
    const {
      y = 40,
      x = 0,
      scale = 1,
      duration = 0.8,
      delay = 0,
      stagger = 0.15,
      start = 'top 85%',
      once = true,
    } = options

    const tween = gsap.from(elements, {
      y,
      x,
      scale,
      opacity: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger:
          typeof elements === 'string'
            ? elements
            : Array.isArray(elements)
              ? elements[0]
              : elements,
        start,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    })

    const st = tween.scrollTrigger
    if (st) triggers.push(st)
  }

  const revealChildren = (
    parent: string | HTMLElement,
    childSelector: string,
    options: RevealOptions = {},
  ) => {
    const { y = 40, x = 0, duration = 0.8, stagger = 0.12, start = 'top 85%' } = options

    const parentEl = typeof parent === 'string' ? document.querySelector(parent) : parent
    if (!parentEl) return

    const children = parentEl.querySelectorAll(childSelector)
    if (!children.length) return

    const tween = gsap.from(children, {
      y,
      x,
      opacity: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parentEl,
        start,
        toggleActions: 'play none none none',
      },
    })

    const st = tween.scrollTrigger
    if (st) triggers.push(st)
  }

  const countUp = (
    element: string | HTMLElement,
    endValue: number,
    options: { duration?: number; start?: string; suffix?: string } = {},
  ) => {
    const { duration = 2, start = 'top 85%', suffix = '' } = options
    const counter = { value: 0 }

    const el = typeof element === 'string' ? document.querySelector(element) : element
    if (!el) return

    gsap.to(counter, {
      value: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        ;(el as HTMLElement).textContent = Math.round(counter.value) + suffix
      },
    })
  }

  onUnmounted(() => {
    triggers.forEach((t) => t.kill())
  })

  return { reveal, revealChildren, countUp }
}
