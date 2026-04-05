<template>
  <section id="services" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-continue-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Heading -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white section-heading">
          <span class="text-accent font-mono text-xl mr-2">03.</span> What I Do
        </h2>
        <p class="text-slate-400 text-lg mt-6 max-w-2xl">
          I create custom websites and web apps that combine beautiful design with seamless
          functionality.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="services-grid">
        <div v-for="service in services" :key="service.title" class="service-wrapper">
          <Card class="group service-card h-full">
            <template #content>
              <div class="flex flex-col gap-4 p-5">
                <div
                  class="w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300"
                >
                  <i
                    :class="`pi ${service.icon} text-2xl text-slate-400 group-hover:text-accent transition-colors duration-300`"
                  ></i>
                </div>

                <h3
                  class="text-white font-bold text-lg group-hover:text-accent/90 transition-colors"
                >
                  {{ service.title }}
                </h3>

                <p class="text-slate-400 text-sm leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { services } from '@/data/services'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { revealChildren } = useScrollReveal()

onMounted(() => {
  revealChildren('#services-grid', ':scope > .service-wrapper', {
    y: 30,
    stagger: 0.1,
  })
})
</script>

<style scoped>
:deep(.p-card.service-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.4),
    rgba(17, 24, 39, 0.2)
  ) !important;
  border: 1px solid rgba(148, 163, 184, 0.08);
  transition: all 0.3s ease;
  border-radius: 0.75rem;
}

:deep(.p-card.service-card:hover) {
  transform: translateY(-4px);
  border-color: rgba(20, 184, 166, 0.2);
  box-shadow: 0 8px 30px rgba(20, 184, 166, 0.06);
}

:deep(.p-card-body) {
  background: transparent !important;
  padding: 0;
}

:deep(.p-card-content) {
  background: transparent !important;
  padding: 0;
}
</style>
