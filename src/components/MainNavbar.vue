<template>
  <header class="fixed top-0 inset-x-0 z-50">
    <nav class="navbar-glass">
      <div class="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <!-- Brand -->
        <a
          href="#home"
          class="brand-text text-xl font-extrabold tracking-tight"
          @click.prevent="scrollToSection('#home')"
        >
          damas<span class="text-accent">.</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeSection === item.id
                ? 'text-accent bg-accent/8'
                : 'text-slate-400 hover:text-white hover:bg-white/5',
            ]"
            @click.prevent="scrollToSection(`#${item.id}`)"
          >
            <span class="font-mono text-xs mr-1 opacity-60">{{ item.number }}.</span>
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-lg"></i>
        </button>
      </div>

      <!-- Mobile Nav -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/5 pb-4">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'block px-6 py-3 text-sm font-medium transition-colors',
              activeSection === item.id
                ? 'text-accent bg-accent/5'
                : 'text-slate-400 hover:text-white hover:bg-white/5',
            ]"
            @click.prevent="handleMobileClick(item.id)"
          >
            <span class="font-mono text-xs mr-2 opacity-60">{{ item.number }}.</span>
            {{ item.label }}
          </a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useScrollTo } from '@/composables/useScrollTo'

const { t } = useI18n()

interface NavItem {
  id: string
  label: string
  number: string
}

const sectionIds = ['home', 'about', 'experience', 'services', 'projects', 'contact']

const navItems = computed<NavItem[]>(() => [
  { id: 'home', label: t('nav.home'), number: '00' },
  { id: 'about', label: t('nav.about'), number: '01' },
  { id: 'experience', label: t('nav.experience'), number: '02' },
  { id: 'services', label: t('nav.services'), number: '03' },
  { id: 'projects', label: t('nav.projects'), number: '04' },
  { id: 'contact', label: t('nav.contact'), number: '05' },
])

const mobileMenuOpen = ref(false)
const { scrollToSection } = useScrollTo()
const { activeSection } = useScrollSpy(sectionIds)

const handleMobileClick = (id: string) => {
  mobileMenuOpen.value = false
  scrollToSection(`#${id}`)
}
</script>

<style scoped>
.navbar-glass {
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(148, 163, 184, 0.06);
}

.brand-text {
  background: linear-gradient(to right, #f8fafc, #cbd5e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-text span {
  -webkit-text-fill-color: var(--accent);
}
</style>
