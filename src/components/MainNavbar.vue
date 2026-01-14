<template>
  <nav class="fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div
          class="text-2xl font-bold bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"
        >
          Portfolio
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-gray-400 hover:text-gray-100 transition">Home</a>
          <a href="#profile" class="text-gray-400 hover:text-gray-100 transition">About</a>
          <a href="#skills" class="text-gray-400 hover:text-gray-100 transition">Skills</a>
          <a href="#projects" class="text-gray-400 hover:text-gray-100 transition">Projects</a>
          <a href="#contact" class="text-gray-400 hover:text-gray-100 transition">Contact</a>
        </div>
        <Button icon="pi pi-bars" class="md:hidden" text rounded />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
