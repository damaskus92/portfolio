<template>
  <div class="lang-toggle" role="radiogroup" aria-label="Language selector">
    <button
      :class="['lang-option', { active: currentLocale === 'en' }]"
      :aria-checked="currentLocale === 'en'"
      role="radio"
      @click="setLocale('en')"
    >
      EN
    </button>
    <button
      :class="['lang-option', { active: currentLocale === 'id' }]"
      :aria-checked="currentLocale === 'id'"
      role="radio"
      @click="setLocale('id')"
    >
      ID
    </button>
    <div class="lang-indicator" :class="{ 'slide-bottom': currentLocale === 'id' }"></div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore, type Locale } from '@/stores/language'
import { storeToRefs } from 'pinia'

const { locale } = useI18n()
const languageStore = useLanguageStore()
const { currentLocale } = storeToRefs(languageStore)

function setLocale(lang: Locale) {
  languageStore.setLocale(lang)
  locale.value = lang
}

// Sync on mount
locale.value = currentLocale.value

watch(currentLocale, (newLocale) => {
  locale.value = newLocale
})
</script>

<style scoped>
.lang-toggle {
  position: fixed;
  right: 1rem;
  bottom: 1.5rem;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  border-radius: 12px;
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(148, 163, 184, 0.05);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.lang-toggle:hover {
  border-color: rgba(20, 184, 166, 0.25);
}

.lang-option {
  position: relative;
  z-index: 2;
  padding: 6px 10px;
  border: none;
  background: transparent;
  color: rgba(148, 163, 184, 0.5);
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  line-height: 1;
}

.lang-option:hover:not(.active) {
  color: rgba(148, 163, 184, 0.8);
}

.lang-option.active {
  color: rgb(20, 184, 166);
  text-shadow: 0 0 12px rgba(20, 184, 166, 0.4);
}

.lang-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  height: calc(50% - 5px);
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.15);
  border-radius: 8px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.lang-indicator.slide-bottom {
  transform: translateY(calc(100% + 2px));
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .lang-toggle {
    right: 0.75rem;
    bottom: 1rem;
  }

  .lang-option {
    padding: 5px 8px;
    font-size: 0.65rem;
  }
}
</style>
