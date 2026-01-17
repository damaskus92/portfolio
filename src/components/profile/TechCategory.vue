<template>
  <div>
    <p class="text-gray-400 text-sm mb-3 font-semibold">{{ title }}</p>
    <div class="flex flex-wrap gap-2">
      <Chip
        v-for="tech in technologies"
        :key="tech"
        :label="tech"
        class="bg-white/10 text-gray-200 border border-white/20 text-sm py-1.5 px-3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  technologies: string[]
}>()
</script>
