<template>
  <header class="fixed top-0 inset-x-0 z-50">
    <Menubar :model="items" :pt="menubarPT">
      <!-- Brand -->
      <template #start>
        <span class="brand-text">My Portfolio</span>
      </template>
    </Menubar>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MenubarPassThroughOptions } from 'primevue/menubar'

interface MenuItem {
  label: string
  command: () => void
}

const scrollToSection = (selector: string): void => {
  document.querySelector(selector)?.scrollIntoView({
    behavior: 'smooth',
  })
}

const items = ref<MenuItem[]>([
  { label: 'Home', command: () => scrollToSection('#home') },
  { label: 'About', command: () => scrollToSection('#profile') },
  { label: 'Services', command: () => scrollToSection('#services') },
  { label: 'Projects', command: () => scrollToSection('#projects') },
  // { label: 'Contact', command: () => scrollToSection('#contact') },
])

const menubarPT: MenubarPassThroughOptions = {
  root: {
    class: 'navbar-glass border-none',
  },
  rootList: {
    class: 'ml-auto',
  },
  item: {
    class: 'bg-transparent',
  },
  itemContent: {
    class: 'bg-transparent',
  },
  itemLink: ({ context }) => ({
    class: [
      'text-gray-50 font-medium transition-colors duration-200 rounded-lg',
      'hover:text-gray-900 hover:bg-white/10',
      'focus:shadow-none',
      context.focused ? 'text-gray-900 bg-white/10' : '',
    ],
  }),
  itemLabel: {
    class: 'text-gray-50',
  },
  button: {
    class:
      'text-gray-50 ml-auto h-[40px] w-[40px] hover:bg-white/10 transition-colors duration-200',
  },
  buttonIcon: {
    class: 'text-gray-50',
  },
}
</script>

<style scoped>
/* ================= GLASS NAVBAR ================= */
.navbar-glass {
  background: rgba(2, 6, 23, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-inline: 1rem;
}

/* ================= BRAND ================= */
.brand-text {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  background: linear-gradient(to right, #f9fafb, #9ca3af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ================= DESKTOP MENU ================= */
:deep(.p-menubar-item-link) {
  border-radius: 0.5rem;
}

:deep(.p-menubar-item-link:hover) {
  background: rgba(255, 255, 255, 0.1);
}

:deep(.p-menubar-item-link:focus) {
  background: rgba(255, 255, 255, 0.1);
}

/* ================= MOBILE MENU ================= */
:deep(.p-menubar-mobile-active .p-menubar-root-list) {
  background: rgba(2, 6, 23, 0.98);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

:deep(.p-menubar-mobile-active .p-menubar-item-link) {
  color: rgb(249, 250, 251) !important;
  border-radius: 0;
}

:deep(.p-menubar-mobile-active .p-menubar-item-link:hover) {
  background: rgba(255, 255, 255, 0.1) !important;
  color: rgb(249, 250, 251) !important;
}

:deep(.p-menubar-mobile-active .p-menubar-item-label) {
  color: rgb(249, 250, 251) !important;
}
</style>
