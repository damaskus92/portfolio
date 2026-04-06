<template>
  <Card
    class="bg-linear-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-md border border-white/8 hover:border-white/15 transition-all duration-300 h-full"
  >
    <template #content>
      <div class="space-y-5">
        <h3 class="text-xl font-bold text-white tracking-tight">Tech Stack</h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <TechCategory title="Programming Languages" :technologies="techStack.languages" />
          <TechCategory title="Backend" :technologies="techStack.backend" />
          <TechCategory title="Frontend" :technologies="techStack.frontend" />
          <TechCategory title="Database" :technologies="techStack.database" />
          <TechCategory title="Tools & Workflow" :technologies="techStack.tools" />
          <TechCategory title="Others" :technologies="techStack.others" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import TechCategory from './TechCategory.vue'
import { techStack } from '@/data/techStack'
</script>
