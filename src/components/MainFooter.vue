<template>
  <footer class="py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-4 text-center">
        <p class="text-gray-400">© {{ currentYear }} Damas Eka Kusuma. All rights reserved.</p>

        <div class="flex items-center gap-4">
          <a
            href="https://github.com/damaskus92"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <i class="pi pi-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/damaskus92"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <i class="pi pi-linkedin text-xl"></i>
          </a>
          <a
            href="mailto:damaskusuma92@gmail.com"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <i class="pi pi-envelope text-xl"></i>
          </a>
        </div>

        <p class="text-gray-500 text-sm">Built with Vue.js & PrimeVue</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped></style>
