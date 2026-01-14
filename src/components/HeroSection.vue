<template>
  <section id="home" class="min-h-dvh flex items-center justify-center px-4 pt-24 pb-20">
    <div class="max-w-7xl mx-auto w-full">
      <div class="text-center space-y-6">
        <p class="text-lg md:text-xl text-gray-300 font-medium tracking-wide">
          Hello, I'm <span class="text-white font-semibold">Damas</span> and I'm a
        </p>

        <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Full-Stack
          <span
            class="block bg-linear-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent"
          >
            Web Developer
          </span>
        </h1>

        <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Enthusiastic about building scalable websites and web applications focused on intuitive
          design, exceptional user experience, and clean, maintainable code.
        </p>

        <div class="flex justify-center gap-4 pt-4">
          <Button label="View Projects" icon="pi pi-arrow-down" iconPos="right" />
          <Button label="Contact Me" icon="pi pi-envelope" outlined />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
}

section {
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
