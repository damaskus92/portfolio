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
          class="group overflow-hidden rounded-xl bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300"
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

            <Chip
              :label="project.url ? 'Live' : 'Internal'"
              :severity="project.url ? 'success' : 'secondary'"
              class="absolute top-3 right-3"
            />
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
                  class="bg-white/10 text-gray-300 border border-white/20 text-xs p-2 py-1"
                />
              </div>

              <div class="pt-2 flex items-center justify-between">
                <Button
                  v-if="project.url"
                  label="View Project"
                  icon="pi pi-external-link"
                  iconPos="right"
                  size="small"
                  @click="openProject(project.url)"
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
import eLkpImg from '@/assets/projects/e-lkp.png'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  url: string | null
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Quiz Lancarin',
    category: 'Web-Based English Learning Quiz',
    description:
      'A web-based English learning quiz platform that uses gamification to boost user engagement and make studying more enjoyable. Features include a centralized question bank, automated scoring, real-time result display, and social media sharing of scores and achievements.',
    image: lancarinImg,
    technologies: ['Laravel', 'Inertia', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Filament Admin'],
    url: 'https://quiz.lancarin.id',
  },
  {
    id: 2,
    title: 'Gamelab Indonesia',
    category: 'Online Education & Training System',
    description:
      'An online education and training platform focused on digital skills development, vocational training, internships, and career readiness. The platform supports project-based learning, skill development programs, and industry-aligned curriculum delivery.',
    image: gamelabImg,
    technologies: ['Slim', 'Twig', 'Vue.js', 'Bootstrap', 'jQuery', 'MySQL'],
    url: 'https://gamelab.id',
  },
  {
    id: 3,
    title: 'e-LKP',
    category: 'Employee Daily Reporting System',
    description:
      'A web-based employee management application designed for daily work activity reporting. The system allows employees to submit daily job reports while enabling administrators to monitor performance, track work progress, and manage employee data efficiently.',
    image: eLkpImg,
    technologies: ['Codeigniter', 'Admin LTE', 'Bootstrap', 'jQuery', 'MySQL'],
    url: null,
  },
])

const openProject = (url: string | null) => {
  if (!url) return
  window.open(url, '_blank', 'noopener,noreferrer')
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
