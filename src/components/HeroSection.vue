<template>
  <section id="home" class="pt-32 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="inline-block">
            <Chip
              label="Available for Work"
              class="bg-gray-700/30 text-gray-300 border border-gray-600/50"
            />
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm
            <span class="bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p class="text-xl text-gray-400">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <p class="text-gray-300">
            I craft beautiful, functional, and user-centered digital experiences.
          </p>
          <div class="flex gap-4">
            <Button
              label="View Projects"
              icon="pi pi-arrow-down"
              iconPos="right"
              class="bg-gray-700 border-gray-700 hover:bg-gray-600"
            />
            <Button
              label="Contact Me"
              icon="pi pi-envelope"
              outlined
              class="text-white border-white hover:bg-white/10"
            />
          </div>
        </div>
        <div class="relative">
          <div
            class="w-full h-96 bg-linear-to-br from-gray-700/20 to-gray-800/30 rounded-3xl backdrop-blur-xl border border-gray-800/50 flex items-center justify-center"
          >
            <i class="pi pi-user text-9xl text-gray-500/50"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
