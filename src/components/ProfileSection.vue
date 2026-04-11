<template>
  <section id="about" class="relative py-24 px-4 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-first-section pointer-events-none" />

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Heading -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white section-heading">
          <span class="text-accent font-mono text-xl mr-2">01.</span> {{ t('about.heading') }}
        </h2>
      </div>

      <!-- Bento Grid -->
      <div class="grid md:grid-cols-3 gap-5">
        <!-- Overview Card - spans 2 cols -->
        <div class="md:col-span-2">
          <OverviewCard :is-open-work="availability.isOpenForWork" />
        </div>

        <!-- Photo Card -->
        <div class="order-first md:order-0">
          <PhotoCard />
        </div>

        <!-- Contact CTA Card -->
        <div>
          <ContactCard />
        </div>

        <!-- Tech Stack Card - spans 2 cols -->
        <div class="md:col-span-2">
          <TechStackCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAvailabilityStore } from '@/stores/availability'
import { useScrollReveal } from '@/composables/useScrollReveal'
import OverviewCard from './profile/OverviewCard.vue'
import PhotoCard from './profile/PhotoCard.vue'
import ContactCard from './profile/ContactCard.vue'
import TechStackCard from './profile/TechStackCard.vue'

const { t } = useI18n()
const availability = useAvailabilityStore()
const { revealChildren } = useScrollReveal()

onMounted(() => {
  revealChildren('#about .grid', ':scope > div', {
    y: 30,
    stagger: 0.1,
    start: 'top 85%',
  })
})
</script>

<style scoped>
:deep(.p-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.5),
    rgba(17, 24, 39, 0.3)
  ) !important;
  border: 1px solid rgba(148, 163, 184, 0.08);
  transition: all 0.3s ease;
}

:deep(.p-card:hover) {
  border-color: rgba(148, 163, 184, 0.15);
}

:deep(.p-card-body),
:deep(.p-card-content) {
  background: transparent !important;
}
</style>
