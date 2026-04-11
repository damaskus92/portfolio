<template>
  <section id="contact" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-last-section pointer-events-none"></div>

    <div class="relative max-w-2xl mx-auto text-center">
      <!-- Section Number -->
      <p class="text-accent font-mono text-base mb-4">05. {{ t('contact.section') }}</p>

      <!-- Heading -->
      <h2 ref="headingRef" class="text-4xl md:text-5xl font-bold text-white mb-6">
        {{ t('contact.heading') }}
      </h2>

      <!-- Description -->
      <p ref="descRef" class="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
        {{ availability.isOpenForWork ? t('contact.description') : t('contact.descriptionBusy') }}
      </p>

      <!-- CTA Buttons -->
      <div ref="ctaRef" class="flex flex-wrap justify-center gap-4">
        <Button
          :label="t('contact.sayHello')"
          icon="pi pi-envelope"
          outlined
          class="bg-white/5! border-white/10! text-slate-200! hover:bg-white/10! hover:border-white/20! hover:-translate-y-1 font-semibold px-8 py-3 text-lg transition-all duration-300 backdrop-blur-sm rounded-xl!"
          @click="openLink('mailto:damaskusuma92@gmail.com')"
        />
        <Button
          label="WhatsApp"
          icon="pi pi-whatsapp"
          outlined
          class="bg-emerald-600/10! border-emerald-600/30! text-emerald-400! hover:bg-emerald-600/20! hover:border-emerald-600/40! hover:-translate-y-1 font-semibold px-8 py-3 text-lg transition-all duration-300 backdrop-blur-sm rounded-xl!"
          @click="openLink('https://wa.me/62811358815')"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { track } from '@vercel/analytics'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useAvailabilityStore } from '@/stores/availability'

const { t } = useI18n()
const availability = useAvailabilityStore()

const headingRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

const { reveal } = useScrollReveal()

const openLink = (url: string) => {
  track('cta_contact', { method: url.includes('wa.me') ? 'whatsapp' : 'email', source: 'contact' })
  window.open(url, '_blank')
}

onMounted(() => {
  if (headingRef.value) reveal(headingRef.value, { y: 30, duration: 0.6 })
  if (descRef.value) reveal(descRef.value, { y: 30, duration: 0.6, delay: 0.1 })
  if (ctaRef.value) reveal(ctaRef.value, { y: 30, duration: 0.6, delay: 0.2 })
})
</script>
