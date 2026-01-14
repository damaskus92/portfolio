<template>
  <header class="fixed top-0 inset-x-0 z-50">
    <Menubar :model="items" class="navbar-glass">
      <!-- Brand -->
      <template #start>
        <span class="brand-text"> Portfolio </span>
      </template>

      <!-- Menu (Right aligned) -->
      <template #end>
        <div class="flex items-center gap-2">
          <!-- Desktop menu already handled by Menubar -->
          <Button icon="pi pi-bars" class="md:hidden" text rounded aria-label="Menu" />
        </div>
      </template>
    </Menubar>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  { label: 'Skills', command: () => scrollToSection('#skills') },
  { label: 'Projects', command: () => scrollToSection('#projects') },
  { label: 'Contact', command: () => scrollToSection('#contact') },
])
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

/* ================= PRIMEVUE OVERRIDES ================= */
.p-menubar {
  border: none;
}

/* Push menu to the right */
.p-menubar-root-list {
  margin-left: auto;
}

/* Menu item */
.p-menubar-root-list > .p-menuitem > .p-menuitem-content {
  background: transparent;
}

.p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link {
  color: #9ca3af;
  font-weight: 500;
  transition: color 0.2s ease;
}

.p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link:hover {
  color: #f9fafb;
}

.p-menuitem-link:focus {
  box-shadow: none;
}

/* Mobile button */
.p-menubar-button {
  color: #e5e7eb;
}
</style>
