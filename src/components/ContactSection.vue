<template>
  <section id="contact" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-last-section pointer-events-none"></div>

    <div class="relative max-w-2xl mx-auto text-center">
      <!-- Section Number -->
      <p class="text-accent font-mono text-base mb-4">05. What's Next?</p>

      <!-- Heading -->
      <h2 ref="headingRef" class="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>

      <!-- Description -->
      <p ref="descRef" class="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
        I'm currently open for new opportunities. Whether you have a question, a project idea, or
        just want to say hi — my inbox is always open.
      </p>

      <!-- CTA Buttons -->
      <div ref="ctaRef" class="flex flex-wrap justify-center gap-4">
        <Button
          label="Say Hello"
          icon="pi pi-envelope"
          iconPos="right"
          class="bg-transparent! border-accent! hover:bg-accent/10! text-accent! font-semibold px-8 py-3 text-lg"
          @click="openLink('mailto:damaskusuma92@gmail.com')"
        />
        <Button
          label="WhatsApp"
          icon="pi pi-whatsapp"
          iconPos="right"
          outlined
          class="text-emerald-400! border-emerald-600/30! hover:bg-emerald-600/10! font-semibold px-8 py-3 text-lg"
          @click="openLink('https://wa.me/62811358815')"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { track } from '@vercel/analytics'
import { useScrollReveal } from '@/composables/useScrollReveal'

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
