<template>
  <section id="home" class="min-h-dvh flex items-center justify-center px-4 pt-24 pb-20">
    <div class="max-w-4xl mx-auto w-full">
      <div class="space-y-7">
        <!-- Greeting with mono font -->
        <p
          ref="greetingRef"
          class="font-mono text-accent text-sm md:text-base tracking-wider opacity-0"
        >
          {{ t('hero.greeting') }}
        </p>

        <!-- Main heading -->
        <div>
          <h1
            ref="nameRef"
            class="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight opacity-0 bg-clip-text text-transparent bg-linear-to-r from-white via-gray-400 to-gray-700 pb-1"
          >
            Damas Eka Kusuma
          </h1>
        </div>

        <!-- Description -->
        <p ref="descRef" class="text-slate-400 max-w-xl leading-relaxed text-lg opacity-0">
          {{ t('hero.description') }}
        </p>

        <!-- CTA Buttons -->
        <div ref="ctaRef" class="flex flex-wrap gap-4 pt-4 opacity-0">
          <Button
            :label="t('hero.viewProjects')"
            icon="pi pi-arrow-down"
            iconPos="right"
            outlined
            class="bg-white/5! border-white/10! text-slate-200! hover:bg-white/10! hover:border-white/20! hover:-translate-y-1 font-semibold px-7 py-3 transition-all duration-300 backdrop-blur-sm rounded-xl!"
            @click="scrollToSection('#projects')"
          />
          <Button
            :label="t('hero.downloadCV')"
            icon="pi pi-download"
            iconPos="right"
            outlined
            class="bg-white/5! border-white/10! text-slate-200! hover:bg-white/10! hover:border-white/20! hover:-translate-y-1 font-semibold px-7 py-3 transition-all duration-300 backdrop-blur-sm rounded-xl!"
            @click="downloadCV"
          />
        </div>

        <!-- Status indicator -->
        <div v-if="availability.isOpenForWork" ref="statusRef" class="flex items-center gap-2 pt-4 opacity-0">
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="text-slate-500 text-sm font-mono">{{ t('hero.status') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { useScrollTo } from '@/composables/useScrollTo'
import { track } from '@vercel/analytics'
import { useAvailabilityStore } from '@/stores/availability'

const { t } = useI18n()
const { scrollToSection } = useScrollTo()
const availability = useAvailabilityStore()

const greetingRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const statusRef = ref<HTMLElement | null>(null)

const CV_PATH = 'https://drive.google.com/uc?export=download&id=1J1jv-N2d1O9WFudPVexOADIRR5igC5Ri'

const downloadCV = () => {
  track('cta_download_cv', { source: 'hero' })
  window.open(CV_PATH, '_blank')
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.to(greetingRef.value, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
    .fromTo(nameRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.4)
    .fromTo(descRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
    .fromTo(ctaRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 1)
    .fromTo(statusRef.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, 1.2)
})
</script>

<style scoped>
h1 {
  text-shadow: 0 0 40px rgba(20, 184, 166, 0.08);
}
</style>
