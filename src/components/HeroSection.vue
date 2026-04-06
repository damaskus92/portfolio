<template>
  <section id="home" class="min-h-dvh flex items-center justify-center px-4 pt-24 pb-20">
    <div class="max-w-4xl mx-auto w-full">
      <div class="space-y-7">
        <!-- Greeting with mono font -->
        <p
          ref="greetingRef"
          class="font-mono text-accent text-sm md:text-base tracking-wider opacity-0"
        >
          Hi, my name is
        </p>

        <!-- Main heading -->
        <div>
          <h1
            ref="nameRef"
            class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight opacity-0"
          >
            Damas Eka Kusuma.
          </h1>
          <h2
            ref="subtitleRef"
            class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-400 leading-tight mt-2 opacity-0"
          >
            I build things for the web.
          </h2>
        </div>

        <!-- Description -->
        <p ref="descRef" class="text-slate-400 max-w-xl leading-relaxed text-lg opacity-0">
          Full-Stack Web Developer with 4+ years of experience, focused on building scalable
          websites and web applications with intuitive design, exceptional user experience, and
          clean, maintainable code.
        </p>

        <!-- CTA Buttons -->
        <div ref="ctaRef" class="flex flex-wrap gap-4 pt-2 opacity-0">
          <Button
            label="View Projects"
            icon="pi pi-arrow-down"
            iconPos="right"
            class="bg-transparent! border-accent! text-accent! hover:border-teal-500! hover:text-teal-500! font-semibold px-6 transition-all duration-300"
            @click="scrollToSection('#projects')"
          />
          <Button
            label="Download CV"
            icon="pi pi-download"
            iconPos="right"
            outlined
            class="text-slate-300! border-slate-600! hover:border-teal-500! hover:bg-teal-500/30! hover:text-teal-500! font-semibold px-6 transition-all duration-300"
            @click="downloadCV"
          />
        </div>

        <!-- Status indicator -->
        <div ref="statusRef" class="flex items-center gap-2 pt-4 opacity-0">
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="text-slate-500 text-sm font-mono">Available for new opportunities</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useScrollTo } from '@/composables/useScrollTo'
import { track } from '@vercel/analytics'

const { scrollToSection } = useScrollTo()

const greetingRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
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
    .fromTo(subtitleRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
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
