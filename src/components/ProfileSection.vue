<template>
  <section id="profile" class="relative py-30 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-first-section pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">About Me</h2>

      <div class="grid md:grid-cols-2 gap-10">
        <!-- Journey Card -->
        <Card
          class="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
        >
          <template #content>
            <div class="space-y-5">
              <Chip
                label="Available for Work"
                class="bg-white/10 text-gray-200 border border-white/20 text-sm"
              />

              <h3 class="text-2xl font-bold text-white tracking-tight">My Journey</h3>

              <p class="text-gray-400 leading-relaxed">
                I started my journey as a developer with a strong curiosity for how systems work
                behind the scenes. Over time, I've focused on building scalable, maintainable, and
                performance-driven web applications.
              </p>

              <p class="text-gray-400 leading-relaxed">
                I enjoy solving real-world problems through clean architecture, thoughtful UI, and
                well-structured code.
              </p>
            </div>
          </template>
        </Card>

        <!-- What I Do Card -->
        <Card
          class="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition"
        >
          <template #content>
            <div class="space-y-5">
              <h3 class="text-2xl font-bold text-white tracking-tight">What I Do</h3>

              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <i class="pi pi-check-circle text-gray-400"></i>
                  <span class="text-gray-300">Full-Stack Web Development</span>
                </div>

                <div class="flex items-center gap-3">
                  <i class="pi pi-check-circle text-gray-400"></i>
                  <span class="text-gray-300">UI/UX Implementation</span>
                </div>

                <div class="flex items-center gap-3">
                  <i class="pi pi-check-circle text-gray-400"></i>
                  <span class="text-gray-300">API & Backend Architecture</span>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
