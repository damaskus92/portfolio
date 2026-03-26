<template>
  <Card
    class="bg-linear-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition md:col-span-2"
  >
    <template #content>
      <div class="space-y-5">
        <h3 class="text-2xl font-bold text-white tracking-tight">Tech Stack</h3>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Backend -->
          <TechCategory title="Backend" :technologies="techStack.backend" />

          <!-- Frontend -->
          <TechCategory title="Frontend" :technologies="techStack.frontend" />

          <!-- Tools -->
          <TechCategory title="Tools & Others" :technologies="techStack.tools" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import TechCategory from './TechCategory.vue'

const techStack = {
  backend: ['Laravel', 'Codeigniter', 'Slim', 'Express.js', 'MySQL', 'Medoo', 'MongoDB'],
  frontend: [
    'Vue.js',
    'React.js',
    'Inertia.js',
    'Livewire',
    'TypeScript',
    'Tailwind',
    'Bootstrap',
    'jQuery',
  ],
  tools: ['Git', 'GitHub', 'GitLab', 'Postman', 'Notion', 'Figma'],
}
</script>
