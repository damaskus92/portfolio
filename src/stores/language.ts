import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Locale = 'en' | 'id'

const STORAGE_KEY = 'portfolio-locale'

export const useLanguageStore = defineStore('language', () => {
  const currentLocale = ref<Locale>((localStorage.getItem(STORAGE_KEY) as Locale) || 'en')

  function setLocale(locale: Locale) {
    currentLocale.value = locale
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.setAttribute('lang', locale)
  }

  function toggleLocale() {
    setLocale(currentLocale.value === 'en' ? 'id' : 'en')
  }

  // Initialize document lang attribute
  document.documentElement.setAttribute('lang', currentLocale.value)

  return {
    currentLocale,
    setLocale,
    toggleLocale,
  }
})
