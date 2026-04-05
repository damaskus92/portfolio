<template>
  <section id="projects" class="relative py-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-continue-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Heading -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white section-heading">
          <span class="text-accent font-mono text-xl mr-2">04.</span> Projects
        </h2>
        <p class="text-slate-400 text-lg mt-6 max-w-2xl">
          A collection of my best work, where design meets functionality to solve real-world
          challenges.
        </p>
      </div>

      <!-- Featured Projects -->
      <div class="space-y-12 mb-16">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="featured-project group"
        >
          <div
            :class="[
              'grid md:grid-cols-12 gap-4 items-center',
              index % 2 === 1 ? 'md:text-right' : '',
            ]"
          >
            <!-- Image -->
            <div
              :class="[
                'md:col-span-7 relative overflow-hidden rounded-lg',
                index % 2 === 1 ? 'md:order-2' : '',
              ]"
            >
              <div class="relative aspect-16/10 overflow-hidden rounded-lg">
                <div
                  v-lazyload="project.image"
                  class="absolute inset-0 bg-center bg-cover transition-all duration-500 ease-in-out opacity-0 group-hover:scale-105"
                ></div>
                <div
                  class="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 ease-in-out"
                ></div>
              </div>
            </div>

            <!-- Details -->
            <div :class="['md:col-span-5 space-y-4', index % 2 === 1 ? 'md:order-1' : '']">
              <p class="text-accent font-mono text-sm">Featured Project</p>
              <h3 class="text-2xl font-bold text-white">
                {{ project.title }}
              </h3>
              <div
                class="bg-gray-800/70 backdrop-blur-sm rounded-lg p-5 border border-white/5 relative md:z-10"
                :class="index % 2 === 1 ? 'md:-mr-12' : 'md:-ml-12'"
              >
                <p class="text-slate-400 text-sm leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <div :class="['flex flex-wrap gap-2', index % 2 === 1 ? 'md:justify-end' : '']">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-slate-400 font-mono text-xs"
                >
                  {{ tech }}
                </span>
              </div>

              <div :class="['flex items-center gap-3', index % 2 === 1 ? 'md:justify-end' : '']">
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-300 hover:text-accent transition-colors"
                  aria-label="View live project"
                >
                  <i class="pi pi-external-link text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <div v-if="otherProjects.length > 0">
        <h3 class="text-xl font-bold text-white text-center mb-8">Other Noteworthy Projects</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5" id="other-projects-grid">
          <div v-for="project in otherProjects" :key="project.id" class="other-project-wrapper">
            <Card class="group other-project-card h-full flex flex-col">
              <template #header>
                <div class="relative aspect-video overflow-hidden rounded-t-xl">
                  <div
                    v-lazyload="project.image"
                    class="absolute inset-0 bg-center bg-cover transition-all duration-500 ease-in-out opacity-0 group-hover:scale-105"
                  ></div>
                  <div
                    class="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 ease-in-out"
                  ></div>
                </div>
              </template>
              <template #content>
                <div class="space-y-4 p-5 h-full flex flex-col grow">
                  <div class="flex items-start justify-between gap-4">
                    <h4
                      class="text-lg font-bold text-white group-hover:text-accent transition-colors"
                    >
                      {{ project.title }}
                    </h4>
                    <a
                      v-if="project.url"
                      :href="project.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-slate-400 hover:text-accent transition-colors shrink-0 mt-1"
                      aria-label="View project"
                    >
                      <i class="pi pi-external-link"></i>
                    </a>
                  </div>

                  <p class="text-slate-400 text-sm leading-relaxed grow mt-2">
                    {{ project.description }}
                  </p>

                  <div class="flex flex-wrap gap-2 pt-2">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="text-slate-500 font-mono text-xs"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { projects } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { revealChildren, reveal } = useScrollReveal()

const featuredProjects = computed(() => projects.filter((p) => p.featured))
const otherProjects = computed(() => projects.filter((p) => !p.featured))

onMounted(() => {
  // Animate featured projects
  document.querySelectorAll('.featured-project').forEach((el) => {
    reveal(el as HTMLElement, { y: 40, duration: 0.8, start: 'top 85%' })
  })

  // Animate other projects
  if (otherProjects.value.length > 0) {
    revealChildren('#other-projects-grid', ':scope > .other-project-wrapper', {
      y: 30,
      stagger: 0.1,
    })
  }
})
</script>

<style scoped>
:deep(.p-card.other-project-card) {
  background: linear-gradient(
    to bottom right,
    rgba(31, 41, 55, 0.4),
    rgba(17, 24, 39, 0.2)
  ) !important;
  border: 1px solid rgba(148, 163, 184, 0.08);
  transition: all 0.3s ease;
  border-radius: 0.75rem;
}

:deep(.p-card.other-project-card:hover) {
  transform: translateY(-4px);
  border-color: rgba(20, 184, 166, 0.2);
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
