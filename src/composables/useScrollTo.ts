export function useScrollTo() {
  const scrollToSection = (selector: string): void => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return { scrollToSection }
}
