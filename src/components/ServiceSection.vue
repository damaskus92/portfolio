<template>
  <section id="services" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-continue-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">What I Do</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto">
          I create custom websites and web apps that combine beautiful design with seamless
          functionality.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="service in services"
          :key="service.title"
          class="group bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300 rounded-xl"
        >
          <template #content>
            <div class="flex flex-col gap-4 p-6">
              <i
                :class="`pi ${service.icon} text-5xl text-gray-400 group-hover:text-white transition-colors`"
              ></i>

              <h3 class="text-white font-bold text-xl">
                {{ service.title }}
              </h3>

              <p class="text-gray-400 text-sm leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  title: string
  description: string
  icon: string
}

const services = ref<Service[]>([
  {
    title: 'Full-Stack Development',
    description: 'Building interactive front-ends and managing back-ends to bring ideas to life.',
    icon: 'pi-code',
  },
  {
    title: 'Landing Page Design',
    description: 'Building custom landing pages that look great and work smoothly for users.',
    icon: 'pi-window-maximize',
  },
  {
    title: 'Responsive Design',
    description: 'Designing layouts that work smoothly on any device for a better user experience.',
    icon: 'pi-mobile',
  },
  {
    title: 'API Integration',
    description: 'Setting up APIs to enable easy data exchange and communication between services.',
    icon: 'pi-cloud',
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimizing application performance for faster load times and better user experience.',
    icon: 'pi-bolt',
  },
  {
    title: 'Database Integration',
    description: 'Connecting databases to manage and access data effectively in applications.',
    icon: 'pi-database',
  },
])
</script>

<style scoped>
:deep(.p-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.6),
    rgba(17, 24, 39, 0.4)
  ) !important;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
  border-radius: 0.75rem;
}

:deep(.p-card-body) {
  background: transparent !important;
  padding: 0;
}

:deep(.p-card-content) {
  background: transparent !important;
  padding: 0;
}

:deep(.p-card:hover) {
  transform: translateY(-6px);
}
</style>
