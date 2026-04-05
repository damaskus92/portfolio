<template>
  <Card
    class="bg-linear-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-md border border-white/8 hover:border-white/15 transition-all duration-300 h-full"
  >
    <template #content>
      <div class="flex flex-col items-center justify-center py-6 px-4">
        <!-- Avatar -->
        <div class="relative mb-4">
          <div
            class="w-36 h-36 rounded-2xl bg-linear-to-br from-gray-700/80 to-gray-800/60 flex items-center justify-center overflow-hidden border-2 border-accent/20 shadow-lg shadow-accent/5"
          >
            <img :src="profilePhoto" alt="Damas Eka Kusuma" class="w-full h-full object-cover" />
          </div>

          <!-- Decorative glow -->
          <div class="absolute -inset-1 rounded-2xl bg-accent/5 blur-md -z-10"></div>
        </div>

        <!-- Name -->
        <h3 class="text-white font-bold text-lg">Damas Eka Kusuma</h3>
        <p class="text-accent text-sm font-mono mt-1">Full-Stack Developer</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import profilePhoto from '@/assets/photo-square.png'
</script>
