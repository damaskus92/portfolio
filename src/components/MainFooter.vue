<template>
  <footer class="relative py-12 px-4">
    <!-- Gradient separator -->
    <div
      class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent"
    ></div>

    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-6 text-center">
        <!-- Social Links -->
        <div class="flex items-center gap-5">
          <a
            href="https://github.com/damaskus92"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-500 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
            @click="trackCta('cta_github')"
          >
            <i class="pi pi-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/damaskus92"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-500 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
            @click="trackCta('cta_linkedin')"
          >
            <i class="pi pi-linkedin text-xl"></i>
          </a>
          <a
            href="mailto:damaskusuma92@gmail.com"
            class="text-slate-500 hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <i class="pi pi-envelope text-xl"></i>
          </a>
        </div>

        <!-- Credit -->
        <div class="space-y-1">
          <p class="text-slate-500 text-sm">
            {{ t('footer.designedBy') }}
            <span class="text-slate-400">Damas Eka Kusuma</span>
          </p>
          <p class="text-slate-600 text-xs font-mono">{{ t('footer.builtWith') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { track } from '@vercel/analytics'

const { t } = useI18n()

const trackCta = (eventName: string) => {
  track(eventName, { source: 'footer' })
}
</script>
