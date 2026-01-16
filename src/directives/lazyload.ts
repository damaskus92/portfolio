import type { Directive, DirectiveBinding } from 'vue'

interface LazyLoadElement extends HTMLElement {
  _observer?: IntersectionObserver
}

export const lazyload: Directive = {
  mounted(el: LazyLoadElement, binding: DirectiveBinding) {
    const loadImage = () => {
      if (binding.value) {
        el.style.backgroundImage = `url(${binding.value})`
        el.classList.add('lazy-loaded')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage()
            observer.unobserve(el)
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      },
    )

    el._observer = observer
    observer.observe(el)
  },

  unmounted(el: LazyLoadElement) {
    if (el._observer) {
      el._observer.disconnect()
    }
  },
}
