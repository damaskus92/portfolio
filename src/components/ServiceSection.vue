<template>
  <section id="services" class="py-20 px-4 bg-slate-950/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <Card class="bg-gray-800/50 border border-gray-700/50">
          <template #content>
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white">My Journey</h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="text-gray-300">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </template>
        </Card>
        <Card class="bg-gray-800/50 border border-gray-700/50">
          <template #content>
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white">What I Do</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <i class="pi pi-check-circle text-gray-400"></i>
                  <span class="text-gray-300">Web Development</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="pi pi-check-circle text-gray-400"></i>
                  <span class="text-gray-300">UI/UX Design</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="pi pi-check-circle text-gray-400"></i>
                  <span class="text-gray-300">Mobile Development</span>
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
