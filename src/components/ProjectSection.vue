<template>
  <section id="projects" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <Card
          v-for="i in 3"
          :key="i"
          class="bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all"
        >
          <template #header>
            <div
              class="h-48 bg-linear-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center"
            >
              <i class="pi pi-image text-6xl text-purple-400/50"></i>
            </div>
          </template>
          <template #title>
            <span class="text-white">Project Title {{ i }}</span>
          </template>
          <template #content>
            <p class="text-gray-300">Brief description of the project and technologies used.</p>
            <div class="flex gap-2 mt-4">
              <Chip label="Vue.js" class="bg-green-500/20 text-green-300" />
              <Chip label="TypeScript" class="bg-blue-500/20 text-blue-300" />
            </div>
          </template>
          <template #footer>
            <div class="flex gap-2">
              <Button
                label="View Demo"
                icon="pi pi-external-link"
                text
                size="small"
                class="text-purple-400"
              />
              <Button label="Code" icon="pi pi-github" text size="small" class="text-gray-400" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
