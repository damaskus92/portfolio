<template>
  <section id="profile" class="relative py-24 px-4 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-first-section pointer-events-none" />

    <div class="relative max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Overview Card -->
        <OverviewCard :is-open-work="availability.isOpenForWork" />

        <!-- Contact Card -->
        <ContactCard />

        <!-- Tech Stack Card -->
        <TechStackCard />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAvailabilityStore } from '@/stores/availability'
import OverviewCard from './profile/OverviewCard.vue'
import ContactCard from './profile/ContactCard.vue'
import TechStackCard from './profile/TechStackCard.vue'

const availability = useAvailabilityStore()

onMounted(() => {
  availability.fetchStatus()
})
</script>

<style scoped>
:deep(.p-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.6),
    rgba(17, 24, 39, 0.4)
  ) !important;
}

:deep(.p-card-body),
:deep(.p-card-content) {
  background: transparent !important;
}
</style>
