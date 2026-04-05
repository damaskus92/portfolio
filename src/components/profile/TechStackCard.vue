<template>
  <Card
    class="bg-linear-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-md border border-white/8 hover:border-white/15 transition-all duration-300 h-full"
  >
    <template #content>
      <div class="space-y-5">
        <h3 class="text-xl font-bold text-white tracking-tight">Tech Stack</h3>

        <div class="grid md:grid-cols-2 gap-5">
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
