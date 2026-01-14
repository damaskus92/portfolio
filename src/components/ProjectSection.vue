<template>
  <section id="projects" class="relative py-30 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-last-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">My Projects</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto">
          A collection of my best work, where design meets functionality to solve real-world
          challenges.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="project in projects"
          :key="project.id"
          class="group cursor-pointer overflow-hidden rounded-xl bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300"
          @click="openProject(project.url)"
        >
          <!-- HEADER (Background Image) -->
          <template #header>
            <div class="relative overflow-hidden aspect-16/10">
              <!-- Background Image -->
              <div
                class="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                :style="{ backgroundImage: `url(${project.image})` }"
              ></div>

              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/30 to-transparent"
              ></div>
            </div>
          </template>

          <!-- CONTENT -->
          <template #content>
            <div class="space-y-4 p-6">
              <div>
                <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-gray-200">
                  {{ project.title }}
                </h3>
                <p class="text-gray-500 text-sm">
                  {{ project.category }}
                </p>
              </div>

              <p class="text-gray-400 leading-relaxed">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <Chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  :label="tech"
                  class="bg-white/10 text-gray-300 border border-white/20 text-xs"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import lancarinImg from '@/assets/projects/lancarin.png'
import gamelabImg from '@/assets/projects/gamelab.png'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  url: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Quiz Lancarin',
    category: 'Web-Based Quiz Platform',
    description:
      'An integrated client-server web application for online quiz management. Features include centralized question management, automatic grading, real-time results, and social media sharing capabilities.',
    image: lancarinImg,
    technologies: ['Laravel', 'Inertia', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Filament Admin'],
    url: 'https://quiz.lancarin.id',
  },
  {
    id: 2,
    title: 'Gamelab Indonesia',
    category: 'Digital Education Platform',
    description:
      'A web-based education platform providing training and digital skill development programs. Actively used by thousands of users with continuous development and maintenance.',
    image: gamelabImg,
    technologies: ['Slim', 'Twig', 'Vue.js', 'Bootstrap', 'jQuery', 'MySQL'],
    url: 'https://gamelab.id',
  },
])

const openProject = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
:deep(.p-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.6),
    rgba(17, 24, 39, 0.4)
  ) !important;
  transition: all 0.3s ease;
}

:deep(.p-card-body) {
  background: transparent !important;
  padding: 0;
}

:deep(.p-card-content) {
  background: transparent !important;
  padding: 0;
}

:deep(.p-card-header) {
  padding: 0;
}

:deep(.p-card:hover) {
  transform: translateY(-6px);
}
</style>
