<template>
  <section id="projects" class="relative py-30 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-last-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
        Featured Projects
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <Card
          v-for="i in 3"
          :key="i"
          class="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
        >
          <!-- Header / Image -->
          <template #header>
            <div
              class="h-48 flex items-center justify-center bg-linear-to-br from-white/10 to-white/5"
            >
              <i
                class="pi pi-image text-6xl text-white/30 group-hover:text-white/50 transition"
              ></i>
            </div>
          </template>

          <!-- Title -->
          <template #title>
            <span class="text-white font-semibold tracking-wide"> Project Title {{ i }} </span>
          </template>

          <!-- Content -->
          <template #content>
            <p class="text-gray-400 leading-relaxed">
              Brief description of the project, key features, and technologies used.
            </p>

            <div class="flex flex-wrap gap-2 mt-4">
              <Chip label="Vue.js" class="bg-white/10 text-gray-200 border border-white/10" />
              <Chip label="TypeScript" class="bg-white/10 text-gray-200 border border-white/10" />
            </div>
          </template>

          <!-- Footer -->
          <template #footer>
            <div class="flex gap-4 pt-2">
              <Button
                label="Live Demo"
                icon="pi pi-external-link"
                text
                size="small"
                class="text-gray-200 hover:text-white"
              />
              <Button
                label="Source Code"
                icon="pi pi-github"
                text
                size="small"
                class="text-gray-400 hover:text-white"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.p-card:hover) {
  transform: translateY(-6px);
}
</style>
